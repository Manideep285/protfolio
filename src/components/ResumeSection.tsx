import { motion } from "framer-motion";
import { IconCloud } from "@/components/ui/interactive-icon-cloud";
import { CursorWrapper } from "@/components/ui/cursor-wrapper";
const techSkills = ["typescript", "javascript", "python", "react", "html5", "css3", "nodedotjs", "express", "nextdotjs", "prisma", "amazonaws", "postgresql", "firebase", "tailwindcss", "git", "github", "figma", "vscode"];
export const ResumeSection = () => {
  return <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
          Resume
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CursorWrapper cursorType="dot">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Education</h3>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold">Bachelor of Technology</h4>
                  <p className="text-gray-600">Graduated 2023</p>
                  <p className="text-gray-700 mt-2">Completed with focus on Electrical and Electronics Engineering. Developed multiple AI-driven projects and applications during coursework.</p>
                </div>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Experience</h3>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold">AI Analyst</h4>
                  <p className="text-gray-600">Deccan AI • 2024 - Present</p>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>Developing AI solutions for business problems</li>
                    <li>Analyzing and processing large datasets</li>
                    <li>Implementing machine learning models</li>
                    <li>Collaborating with cross-functional teams</li>
                    <li>Creating data visualization dashboards</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </CursorWrapper>
          
          <CursorWrapper cursorType="circle">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} viewport={{
            once: true
          }} className="bg-white p-8 rounded-xl shadow-lg flex flex-col">
              <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
              <p className="text-gray-700 mb-4">
                Proficient in multiple programming languages and frameworks with a focus on AI and data analysis
              </p>
              
              <div className="flex-grow relative h-[300px] md:h-[400px]">
                <IconCloud iconSlugs={techSkills} />
              </div>
              
              <div className="mt-4">
                <p className="text-sm text-gray-500 italic text-center">
                  Interactive: Click and drag to explore skills
                </p>
              </div>
            </motion.div>
          </CursorWrapper>
        </div>
      </div>
    </section>;
};