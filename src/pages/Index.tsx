import { motion } from "framer-motion";
import { Timeline } from "@/components/Timeline";
import { Code, Database, Brain, Home, User, Briefcase, FileText } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Footerdemo } from "@/components/ui/footer-section";
import { useEffect } from "react";
import { LandingHero } from "@/components/ui/landing-hero";
import { ResumeSection } from "@/components/ResumeSection";
import { CursorWrapper } from "@/components/ui/cursor-wrapper";
const navItems = [{
  name: "Home",
  url: "/",
  icon: Home
}, {
  name: "About",
  url: "#about",
  icon: User
}, {
  name: "Projects",
  url: "#projects",
  icon: Briefcase
}, {
  name: "Resume",
  url: "#resume",
  icon: FileText
}];

// Animation variants for cards
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut"
    }
  }),
  hover: {
    y: -10,
    scale: 1.05,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};
const Index = () => {
  useEffect(() => {
    // Client-side only code
    if (typeof window !== 'undefined') {
      const handleHashChange = () => {
        const hash = window.location.hash;
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth"
            });
          }
        }
      };
      handleHashChange();
      window.addEventListener("hashchange", handleHashChange);
      return () => window.removeEventListener("hashchange", handleHashChange);
    }
  }, []);
  return <div className="relative">
      <NavBar items={navItems} />
      <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-white relative z-10">
        {/* Hero Section with new animated components */}
        <section id="home" className="relative min-h-screen z-10">
          <LandingHero />
        </section>

        {/* Skills Section - Adjusted to prevent navbar overlay issues */}
        <section id="about" className="py-20 relative z-20">
          <div className="container mx-auto px-4">
            <motion.h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600" initial={{
            opacity: 0,
            y: -20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true,
            amount: 0.3
          }}>
              Skills & Expertise
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <CursorWrapper cursorType="heart">
                <motion.div custom={0} variants={cardVariants} initial="hidden" whileInView="visible" whileHover="hover" viewport={{
                once: true,
                amount: 0.3
              }} className="p-6 rounded-xl bg-white shadow-lg transition-all">
                  <Code className="w-12 h-12 text-blue-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Software Development</h3>
                  <p className="text-gray-600">Building robust and scalable applications.</p>
                </motion.div>
              </CursorWrapper>
              
              <CursorWrapper cursorType="circle">
                <motion.div custom={1} variants={cardVariants} initial="hidden" whileInView="visible" whileHover="hover" viewport={{
                once: true,
                amount: 0.3
              }} className="p-6 rounded-xl bg-white shadow-lg transition-all">
                  <Database className="w-12 h-12 text-blue-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
                  <p className="text-gray-600">
                    Transforming raw data into meaningful insights and solutions.
                  </p>
                </motion.div>
              </CursorWrapper>
              
              <CursorWrapper cursorType="dot">
                <motion.div custom={2} variants={cardVariants} initial="hidden" whileInView="visible" whileHover="hover" viewport={{
                once: true,
                amount: 0.3
              }} className="p-6 rounded-xl bg-white shadow-lg transition-all">
                  <Brain className="w-12 h-12 text-blue-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Artificial Intelligence</h3>
                  <p className="text-gray-600">
                    Implementing AI solutions to solve complex business problems.
                  </p>
                </motion.div>
              </CursorWrapper>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="projects" className="py-20 bg-gradient-to-b from-[#f8f9fa] to-white relative z-20">
          <div className="container mx-auto px-4">
            <motion.h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600" initial={{
            opacity: 0,
            y: -20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true,
            amount: 0.3
          }}>
              Professional Journey
            </motion.h2>
            <Timeline />
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="relative z-20">
          <ResumeSection />
        </section>

        {/* Footer */}
        <Footerdemo />
      </div>
    </div>;
};
export default Index;