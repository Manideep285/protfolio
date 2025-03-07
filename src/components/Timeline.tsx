"use client";

import { useMotionValueEvent, useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { BadgeCheck, Calendar, GraduationCap, Briefcase, GitBranch, Code } from "lucide-react";
interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}
const timelineData: TimelineEntry[] = [{
  title: "2024",
  content: <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Working as an AI Analyst at Deccan AI in Hyderabad since October 2024, focusing on machine learning models and data analysis.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <motion.div className="p-6 rounded-xl bg-white shadow-lg" initial={{
        opacity: 0,
        scale: 0.9
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      }} viewport={{
        once: true,
        amount: 0.3
      }}>
            <Briefcase className="w-8 h-8 text-blue-500 mb-4" />
            <h4 className="font-semibold mb-2">AI Development</h4>
            <p className="text-sm text-gray-600">Building and implementing AI solutions for complex business problems</p>
          </motion.div>
          <motion.div className="p-6 rounded-xl bg-white shadow-lg" initial={{
        opacity: 0,
        scale: 0.9
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.5,
        delay: 0.4
      }} whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      }} viewport={{
        once: true,
        amount: 0.3
      }}>
            <BadgeCheck className="w-8 h-8 text-blue-500 mb-4" />
            <h4 className="font-semibold mb-2">Data Analysis</h4>
            <p className="text-sm text-gray-600">Processing and analyzing large datasets for insights</p>
          </motion.div>
        </div>
      </div>
}, {
  title: "2023",
  content: <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Made significant open source contributions to various projects while completing my Bachelor's degree in Technology.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <motion.div className="p-6 rounded-xl bg-white shadow-lg" initial={{
        opacity: 0,
        scale: 0.9
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      }} viewport={{
        once: true,
        amount: 0.3
      }}>
            <GitBranch className="w-8 h-8 text-blue-500 mb-4" />
            <h4 className="font-semibold mb-2">Open Source</h4>
            <p className="text-sm text-gray-600">Contributed to multiple open source projects in AI and web development</p>
          </motion.div>
          <motion.div className="p-6 rounded-xl bg-white shadow-lg" initial={{
        opacity: 0,
        scale: 0.9
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.5,
        delay: 0.4
      }} whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      }} viewport={{
        once: true,
        amount: 0.3
      }}>
            <GraduationCap className="w-8 h-8 text-blue-500 mb-4" />
            <h4 className="font-semibold mb-2">B.Tech Graduation</h4>
            <p className="text-sm text-gray-600">Major in Electrical and Electronics Engineering</p>
          </motion.div>
        </div>
      </div>
}, {
  title: "2022",
  content: <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Participated in various coding hackathons and started contributing to open source communities.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <motion.div className="p-6 rounded-xl bg-white shadow-lg" initial={{
        opacity: 0,
        scale: 0.9
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      }} viewport={{
        once: true,
        amount: 0.3
      }}>
            <Code className="w-8 h-8 text-blue-500 mb-4" />
            <h4 className="font-semibold mb-2">Hackathons</h4>
            <p className="text-sm text-gray-600">Participated in multiple coding competitions and hackathons</p>
          </motion.div>
          <motion.div className="p-6 rounded-xl bg-white shadow-lg" initial={{
        opacity: 0,
        scale: 0.9
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.5,
        delay: 0.4
      }} whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      }} viewport={{
        once: true,
        amount: 0.3
      }}>
            <Calendar className="w-8 h-8 text-blue-500 mb-4" />
            <h4 className="font-semibold mb-2">Community Involvement</h4>
            <p className="text-sm text-gray-600">Started contributing to developer communities and open source projects</p>
          </motion.div>
        </div>
      </div>
}];
export const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);
  const {
    scrollYProgress
  } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"]
  });
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Define animation variants for timeline items
  const timelineItemVariants = {
    hidden: {
      opacity: 0,
      x: -20
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  return <div className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <motion.h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl" initial={{
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
          My Professional Journey
        </motion.h2>
        <motion.p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} viewport={{
        once: true,
        amount: 0.3
      }}>
          A timeline of my career progression and key achievements
        </motion.p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {timelineData.map((item, index) => <motion.div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10" variants={timelineItemVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        amount: 0.3
      }} transition={{
        delay: index * 0.3
      }}>
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <motion.div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center" initial={{
            scale: 0,
            opacity: 0
          }} whileInView={{
            scale: 1,
            opacity: 1
          }} transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: index * 0.3 + 0.2
          }} viewport={{
            once: true,
            amount: 0.3
          }}>
                <motion.div className="h-4 w-4 rounded-full bg-blue-500 border border-blue-300 dark:border-blue-700" animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.8, 1]
            }} transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }} />
              </motion.div>
              <motion.h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-blue-500 dark:text-blue-400" initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.3 + 0.4
          }} viewport={{
            once: true,
            amount: 0.3
          }}>
                {item.title}
              </motion.h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <motion.h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-blue-500 dark:text-blue-400" initial={{
            opacity: 0,
            y: -10
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} viewport={{
            once: true,
            amount: 0.3
          }}>
                {item.title}
              </motion.h3>
              {item.content}
            </div>
          </motion.div>)}
        <div style={{
        height: height + "px"
      }} className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-blue-200 dark:via-blue-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]">
          <motion.div style={{
          height: heightTransform,
          opacity: opacityTransform
        }} className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-blue-500 via-blue-400 to-transparent from-[0%] via-[10%] rounded-full" />
        </div>
      </div>
    </div>;
};