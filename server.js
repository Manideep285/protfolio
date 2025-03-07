
import fs from 'node:fs/promises'
import express from 'express'
import { createServer as createViteServer } from 'vite'

async function createServer() {
  const app = express()

  // Create Vite server in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  })

  // Use vite's connect instance as middleware
  app.use(vite.middlewares)

  app.use('*', async (req, res) => {
    const url = req.originalUrl

    try {
      // Read index.html
      let template = await fs.readFile('index.html', 'utf-8')

      // Apply Vite HTML transforms
      template = await vite.transformIndexHtml(url, template)

      // Load the server entry
      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx')
      
      // Render the app HTML
      const { html: appHtml } = render(url)

      // Inject the app-rendered HTML into the template
      const html = template
        .replace('<!--app-html-->', appHtml)

      // Send the rendered HTML back
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      // If an error is caught, let Vite fix the stack trace
      vite.ssrFixStacktrace(e)
      console.error(e)
      res.status(500).end(e.message)
    }
  })

  app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000')
  })
}

createServer()
