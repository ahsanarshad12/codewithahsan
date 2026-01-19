// components/ExperienceSection.tsx
"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  FaDatabase,
  FaServer,
  FaRocket,
  FaCalendarAlt,
  FaBuilding,
  FaCode,
  FaChevronDown
} from "react-icons/fa";
import { SiNextdotjs, SiLaravel, SiTailwindcss, SiJavascript, SiTypescript, SiReact, SiMysql, SiBootstrap } from "react-icons/si";

const experiences = [
  {
    id: 1,
    title: "DigitalBar Website Development",
    project: "At G-Tech Solution",
    company: "Completed under G-Tech Solution company",
    duration: "March 2025 - April 2025",
    description: [
      "Modern & Responsive Design: Works seamlessly on desktop and mobile.",
      "Service Showcase: Highlights software, app, and IT solutions clearly.",
      "User Engagement: Includes contact forms and call-to-action buttons.",
      "SEO & Performance Optimized: Fast, easy to navigate, and SEO-friendly."
    ],
    technologies: ["Laravel", "JavaScript", "Tailwind CSS", "Next.js 14", "MySQL"],
    mainlogo: "/gtech-logo.png",
    color: "#F50537",
    gradient: "from-red-500 to-red-600",
    bgGradient: "from-purple-500/20 to-pink-500/10",
    status: "Completed",
    logo: "/digitalbar-logo.png",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    project: "SaaS Business Platform",
    company: "G-Tech Solution",
    duration: "April 2025 – July 2025",
    description: [
      "Built modular SaaS platform with reusable component architecture",
      "Implemented responsive layouts using modern CSS frameworks",
      "Developed business automation features and workflows",
      "Enhanced application performance and user experience"
    ],
    technologies: ["JavaScript", "Bootstrap", "Laravel", "REST APIs"],
    icon: FaServer,
    color: "#3B82F6",
    gradient: "from-blue-600 to-cyan-600",
    bgGradient: "from-blue-500/20 to-cyan-500/10",
    status: "Completed"
  },
  {
    id: 3,
    title: "Full Stack Developer",
    project: "Warehouse Management System",
    company: "G-Tech Solution",
    duration: "June 2025 – Present",
    description: [
      "Leading frontend development with Next.js 14 and Tailwind CSS",
      "Building real-time inventory tracking interfaces",
      "Optimizing data flow and state management",
      "Implementing modern UI/UX principles for enterprise applications"
    ],
    technologies: ["Next.js 14", "Tailwind CSS", "React", "TypeScript"],
    icon: FaRocket,
    color: "#10B981",
    gradient: "from-green-600 to-emerald-600",
    bgGradient: "from-green-500/20 to-emerald-500/10",
    status: "Current"
  },
];

const getTechIcon = (tech: string) => {
  const iconMap: { [key: string]: React.ElementType } = {
    "Next.js 14": SiNextdotjs,
    "Laravel": SiLaravel,
    "Tailwind CSS": SiTailwindcss,
    "JavaScript": SiJavascript,
    "TypeScript": SiTypescript,
    "React": SiReact,
    "MySQL": SiMysql,
    "Bootstrap": SiBootstrap,
  };
  return iconMap[tech] || FaCode;
};

const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Update active index based on scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      const index = Math.min(
        Math.floor(value * experiences.length),
        experiences.length - 1
      );
      setActiveIndex(index);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const activeExp = experiences[activeIndex];
  const Icon = activeExp.icon;

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative bg-gradient-to-br from-gray-900 via-black to-gray-950"
      style={{ height: `${experiences.length * 100}vh` }}
    >
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(180deg,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        {/* Dynamic Background Glow */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl transition-colors duration-700"
          animate={{
            backgroundColor: `${activeExp.color}15`,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl transition-colors duration-700"
          animate={{
            backgroundColor: `${activeExp.color}10`,
          }}
        />
      </div>

      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-8 lg:mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
              <span className="text-sm uppercase tracking-widest text-purple-400 font-medium">
                Professional Journey
              </span>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                Work{" "}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Experience
              </span>
            </h2>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center gap-3 mb-8">
            {experiences.map((_, index) => (
              <motion.div
                key={index}
                className="relative"
                animate={{
                  scale: index === activeIndex ? 1.2 : 1,
                }}
              >
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex
                    ? 'bg-white shadow-lg'
                    : index < activeIndex
                      ? 'bg-gray-500'
                      : 'bg-gray-700'
                    }`}
                  style={{
                    boxShadow: index === activeIndex ? `0 0 20px ${activeExp.color}` : 'none'
                  }}
                />
                {index === activeIndex && (
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: activeExp.color }}
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Single Card Container */}
          <div className="max-w-4xl mx-auto">
            <div
              className="relative overflow-hidden rounded-2xl lg:rounded-3xl backdrop-blur-xl border border-gray-800/50 shadow-2xl"
              style={{
                background: 'rgba(17, 17, 27, 0.8)',
                boxShadow: `0 25px 80px -20px ${activeExp.color}30`,
              }}
            >
              {/* Animated Top Border */}
              <motion.div
                className={`h-1.5 bg-gradient-to-r ${activeExp.gradient}`}
                layoutId="topBorder"
                transition={{ duration: 0.5 }}
              />

              {/* Card Content */}
              <div className="p-6 lg:p-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 50, rotateX: -15 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: -50, rotateX: 15 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  >
                    {/* Header Row */}
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6 mb-8">
                      {/* Icon */}
                      <motion.div
                        className={`px-1 py-1 rounded-lg bg-gradient-to-br ${activeExp.gradient} shadow-xl flex-shrink-0`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <img src={activeExp.mainlogo} alt="" className="w-full max-w-25" />
                      </motion.div>

                      {/* Title Info */}
                      <div className="flex-1">
                        {/* Company & Duration */}
                        <div className="flex flex-wrap items-center gap-3 text-gray-400 text-sm mb-3">
                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800/50">
                            <FaBuilding className="w-3 h-3" />
                            {activeExp.company}
                          </span>
                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800/50">
                            <FaCalendarAlt className="w-3 h-3" />
                            {activeExp.duration}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                          {activeExp.title}
                        </h3>

                        {/* Project Name */}
                        <p className={`text-xl lg:text-2xl font-semibold bg-gradient-to-r ${activeExp.gradient} bg-clip-text text-transparent`}>
                          {activeExp.project}
                        </p>
                      </div>

                      {/* Status & Number */}
                      <div className="flex flex-row lg:flex-col items-center gap-4">
                        {/* Card Number */}
                        <div
                          className={`rounded py-1 px-1 bg-white flex items-center justify-center shadow-xl`}
                        >
                          <img src={activeExp.logo} alt="" className="w-full max-w-25" />
                        </div>

                        {/* Status Badge */}
                        <span className={`
                          px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide
                          ${activeExp.status === "Current"
                            ? `bg-gradient-to-r ${activeExp.gradient} text-white shadow-lg`
                            : 'bg-gray-800 text-gray-400 border border-gray-700'
                          }
                        `}>
                          {activeExp.status === "Current" ? "🟢 Current" : "✓ Done"}
                        </span>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />

                    {/* Description */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
                      {activeExp.description.map((item, i) => (
                        <motion.div
                          key={i}
                          className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-colors border border-gray-700/30"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${activeExp.gradient} mt-2 flex-shrink-0`}
                          />
                          <span className="text-gray-300 text-sm lg:text-base leading-relaxed">
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="pt-6 border-t border-gray-800/50">
                      <div className="flex items-center gap-2 mb-4">
                        <FaCode className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-500">Tech Stack</span>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {activeExp.technologies.map((tech, i) => {
                          const TechIcon = getTechIcon(tech);
                          return (
                            <motion.span
                              key={i}
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800/50 text-gray-300 text-sm font-medium border border-gray-700/50 hover:border-gray-600 transition-all"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.3 + i * 0.1 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                            >
                              <TechIcon className="w-4 h-4" />
                              {tech}
                            </motion.span>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Gradient Line */}
              <motion.div
                className={`h-1 bg-gradient-to-r ${activeExp.gradient}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
                style={{ transformOrigin: 'left' }}
              />
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="flex flex-col items-center mt-8 text-gray-500"
            animate={{ opacity: activeIndex < experiences.length - 1 ? 1 : 0 }}
          >
            <span className="text-sm mb-2">Scroll for more</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>

          {/* Stats Row */}
          {/* <div className="grid grid-cols-3 gap-4 mt-8 max-w-2xl mx-auto">
            {[
              { value: activeIndex + 1, total: experiences.length, label: "Project" },
              { value: "1+", label: "Year Exp" },
              { value: "10+", label: "Technologies" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-4 rounded-xl bg-gray-800/30 border border-gray-700/30">
                <div className={`text-xl lg:text-2xl font-bold bg-gradient-to-r ${activeExp.gradient} bg-clip-text text-transparent`}>
                  {stat.total ? `${stat.value}/${stat.total}` : stat.value}
                </div>
                <div className="text-gray-500 text-xs lg:text-sm">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;