
// This file implements a particle effect canvas animation

// Define an extended canvas context interface with our custom properties
interface ExtendedCanvasRenderingContext2D extends CanvasRenderingContext2D {
  running?: boolean;
  frame?: number;
}

// Constants for animation
const PIXEL_RATIO = (function () {
  return typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
})();

// Points class to manage particles
class Points {
  private options: any;
  private particles: any[];
  
  constructor(options: any) {
    this.options = {
      count: options.count || 100,
      radius: options.radius || 3,
      minDistance: options.minDistance || 100,
      color: options.color || 'rgba(0, 0, 0, 0.08)',
      ...options
    };
    
    this.particles = [];
    this.init();
  }
  
  init() {
    this.particles = [];
    for (let i = 0; i < this.options.count; i++) {
      this.particles.push({
        x: Math.random() * this.options.w,
        y: Math.random() * this.options.h,
        vx: Math.random() * 0.2 - 0.1,
        vy: Math.random() * 0.2 - 0.1,
      });
    }
  }
  
  draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, this.options.w, this.options.h);
    
    for (let i = 0; i < this.particles.length; i++) {
      const particle = this.particles[i];
      
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Bounce off edges
      if (particle.x < 0 || particle.x > this.options.w) {
        particle.vx = -particle.vx;
      }
      
      if (particle.y < 0 || particle.y > this.options.h) {
        particle.vy = -particle.vy;
      }
      
      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, this.options.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.options.color;
      ctx.fill();
      
      // Connect particles that are close
      for (let j = i + 1; j < this.particles.length; j++) {
        const otherParticle = this.particles[j];
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < this.options.minDistance) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.strokeStyle = this.options.color;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }
}

export function renderCanvas() {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d') as ExtendedCanvasRenderingContext2D;
  if (!ctx) return;
  
  const w = window.innerWidth;
  const h = window.innerHeight;
  
  // Scale canvas for high DPI displays
  canvas.width = w * PIXEL_RATIO;
  canvas.height = h * PIXEL_RATIO;
  canvas.style.width = w + 'px';
  canvas.style.height = h + 'px';
  ctx.scale(PIXEL_RATIO, PIXEL_RATIO);
  
  const options = {
    count: 100,
    radius: 2,
    minDistance: 150,
    color: 'rgba(0, 0, 0, 0.08)',
    w,
    h,
  };
  
  // Create points instance
  const points = new Points(options);
  
  // Animation function
  function animate() {
    if (!ctx) return;
    
    if (ctx.running) {
      ctx.frame = requestAnimationFrame(animate);
      points.draw(ctx);
    }
  }
  
  // Start animation
  if (!ctx.running) {
    ctx.running = true;
    animate();
  }
  
  // Handle window resize
  function handleResize() {
    if (!ctx) return;
    
    const w = window.innerWidth;
    const h = window.innerHeight;
    
    canvas.width = w * PIXEL_RATIO;
    canvas.height = h * PIXEL_RATIO;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.scale(PIXEL_RATIO, PIXEL_RATIO);
    
    options.w = w;
    options.h = h;
    points.init();
  }
  
  window.addEventListener('resize', handleResize);
  
  // Clean up when component unmounts
  return () => {
    if (ctx && ctx.running) {
      ctx.running = false;
      if (ctx.frame) {
        cancelAnimationFrame(ctx.frame);
      }
    }
    window.removeEventListener('resize', handleResize);
  };
}
