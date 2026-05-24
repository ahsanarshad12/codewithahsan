"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaJs,
  FaPhp,
  FaGitAlt,
  FaLaravel,
  FaCode,
  FaServer,
  FaDatabase,
  FaPaintBrush,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiReact, SiNodedotjs, SiTypescript, SiFigma, SiVercel } from "react-icons/si";

const skills = [
  {
    icon: <SiNextdotjs className="w-8 h-8" />,
    title: "Next.js 14",
    level: "Advanced",
    desc: "App Router, Server Actions, Static & Dynamic Rendering",
    color: "text-white dark:text-white",
    gradient: "from-gray-800 to-black",
    border: "border-gray-700"
  },
  {
    icon: <SiReact className="w-8 h-8" />,
    title: "React",
    level: "Advanced",
    desc: "Hooks, Context API, Performance Optimization",
    color: "text-cyan-400",
    gradient: "from-cyan-900/20 to-cyan-800/10",
    border: "border-cyan-800/30"
  },
  {
    icon: <FaLaravel className="w-8 h-8" />,
    title: "Laravel",
    level: "Advanced",
    desc: "Eloquent ORM, Blade Templates, API Development",
    color: "text-red-500",
    gradient: "from-red-900/20 to-red-800/10",
    border: "border-red-800/30"
  },
  {
    icon: <SiTypescript className="w-8 h-8" />,
    title: "TypeScript",
    level: "Intermediate",
    desc: "Type Safety, Interfaces, Advanced Types",
    color: "text-blue-500",
    gradient: "from-blue-900/20 to-blue-800/10",
    border: "border-blue-800/30"
  },
  {
    icon: <SiTailwindcss className="w-8 h-8" />,
    title: "Tailwind CSS",
    level: "Advanced",
    desc: "Utility-first CSS, Responsive Design, Custom Plugins",
    color: "text-teal-400",
    gradient: "from-teal-900/20 to-teal-800/10",
    border: "border-teal-800/30"
  },
  {
    icon: <FaJs className="w-8 h-8" />,
    title: "JavaScript",
    level: "Advanced",
    desc: "ES6+, Async/Await, Functional Programming",
    color: "text-yellow-400",
    gradient: "from-yellow-900/20 to-yellow-800/10",
    border: "border-yellow-800/30"
  },
  // {
  //   icon: <SiNodedotjs className="w-8 h-8" />,
  //   title: "Node.js",
  //   level: "Intermediate",
  //   desc: "Express.js, REST APIs, Authentication",
  //   color: "text-green-500",
  //   gradient: "from-green-900/20 to-green-800/10",
  //   border: "border-green-800/30"
  // },
  {
    icon: <FaDatabase className="w-8 h-8" />,
    title: "MySQL",
    level: "Intermediate",
    desc: "Database Design, Query Optimization, Indexing",
    color: "text-blue-400",
    gradient: "from-blue-900/20 to-indigo-800/10",
    border: "border-blue-800/30"
  },
  {
    icon: <FaPhp className="w-8 h-8" />,
    title: "PHP",
    level: "Advanced",
    desc: "OOP, PSR Standards, Composer Packages",
    color: "text-purple-400",
    gradient: "from-purple-900/20 to-purple-800/10",
    border: "border-purple-800/30"
  },
  {
    icon: <FaGitAlt className="w-8 h-8" />,
    title: "Git & GitHub",
    level: "Advanced",
    desc: "Version Control, CI/CD, Team Collaboration",
    color: "text-orange-500",
    gradient: "from-orange-900/20 to-orange-800/10",
    border: "border-orange-800/30"
  },
  // {
  //   icon: <SiFigma className="w-8 h-8" />,
  //   title: "UI/UX Design",
  //   level: "Intermediate",
  //   desc: "Wireframing, Prototyping, Design Systems",
  //   color: "text-pink-500",
  //   gradient: "from-pink-900/20 to-pink-800/10",
  //   border: "border-pink-800/30"
  // },
  {
    icon: <SiVercel className="w-8 h-8" />,
    title: "Deployment",
    level: "Intermediate",
    desc: "Vercel, Cloudflare, Serverless Functions",
    color: "text-white",
    gradient: "from-gray-900/20 to-gray-800/10",
    border: "border-gray-800/30"
  },
];

const SkillsSection = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      offset: 100
    });
  }, []);

  return (
    <section id="skills" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-950 py-20">
      {/* Abstract Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(180deg,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-600/10 to-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-500/5 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-400 mx-auto  px-4 md:px-20">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="text-sm uppercase tracking-widest text-cyan-400 font-medium">
              Technical Expertise
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Skills &
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mt-2">
              Technologies
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            I work with a diverse set of modern technologies to build scalable,
            performant, and user-friendly web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="200">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative"
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className={`relative h-full rounded-xl bg-gray-900/50 backdrop-blur-sm border ${skill.border} p-6 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-gray-900/50`}>
                {/* Icon & Level Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${skill.gradient} border ${skill.border}`}>
                    <div className={skill.color}>
                      {skill.icon}
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-800/50 text-gray-300 border border-gray-700">
                    {skill.level}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>

                {/* Progress Indicator */}
                <div className="mt-6 pt-4 border-t border-gray-800/50">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span>Proficiency</span>
                    <span>{skill.level === "Advanced" ? "90%" : skill.level === "Intermediate" ? "75%" : "60%"}</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.gradient} transition-all duration-700`}
                      style={{
                        width: skill.level === "Advanced" ? "90%" : skill.level === "Intermediate" ? "75%" : "60%",
                        transform: "translateX(-100%)",
                        animation: `slideIn 0.7s ease-out forwards ${index * 0.1}s`
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expertise Areas */}
        {/* <div className="mt-20 lg:mt-24 items-center justify-center" data-aos="fade-up" data-aos-delay="400">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-gray-800/50">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-cyan-900/20 border border-cyan-800/30 mb-6">
                  <FaCode className="w-7 h-7 text-cyan-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">Frontend Development</h4>
                <p className="text-gray-400 text-sm">
                  Crafting responsive, accessible, and performant user interfaces with React ecosystem.
                </p>
              </div>

              <div className="text-center p-8 rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-gray-800/50">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-purple-900/20 border border-purple-800/30 mb-6">
                  <FaServer className="w-7 h-7 text-purple-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">Backend Development</h4>
                <p className="text-gray-400 text-sm">
                  Building scalable APIs and server-side logic with Laravel and Node.js.
                </p>
              </div>

              <div className="text-center p-8 rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-gray-800/50">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-pink-900/20 border border-pink-800/30 mb-6">
                  <FaPaintBrush className="w-7 h-7 text-pink-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">UI/UX Design</h4>
                <p className="text-gray-400 text-sm">
                  Creating intuitive user experiences with modern design principles and tools.
                </p>
              </div>
            </div>
          </div>
        </div> */}

        {/* Tech Stack Statement */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="600">
          <p className="text-gray-400 italic max-w-2xl mx-auto">
            "I believe in using the right tool for the job. My tech stack evolves with modern web development trends."
          </p>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;