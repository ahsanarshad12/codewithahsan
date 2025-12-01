"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLaptopCode, FaDatabase, FaServer, FaRocket, FaCalendarAlt, FaBuilding } from "react-icons/fa";
import { SiNextdotjs, SiLaravel, SiTailwindcss, SiJavascript } from "react-icons/si";

const experiences = [
  {
    id: 1,
    title: "Full Stack Developer",
    project: "AutoParts Inventory System",
    company: "G-Tech Solution",
    duration: "March 2025 – April 2025",
    description: [
      "Developed dynamic UI components with HTML5, CSS3, Bootstrap & JavaScript",
      "Implemented advanced search filters and responsive product listings",
      "Integrated Laravel APIs for real-time inventory management",
      "Designed and optimized MySQL database schemas"
    ],
    technologies: ["Laravel", "JavaScript", "Bootstrap", "MySQL"],
    icon: FaDatabase,
    color: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-800/30"
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
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-800/30"
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
    color: "from-green-500/20 to-emerald-500/20",
    border: "border-green-800/30"
  },
];

const ExperienceSection = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      offset: 100
    });
  }, []);

  return (
    <section id="experience" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-950 py-20">
      {/* Abstract Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(180deg,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>
        <div className="absolute -top-40 left-1/3 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-cyan-500/5 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            <span className="text-sm uppercase tracking-widest text-purple-400 font-medium">
              Professional Journey
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Work
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mt-2">
              Experience
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            My journey through professional development projects,
            building scalable solutions with modern technologies.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative" data-aos="fade-up" data-aos-delay="200">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/30 via-pink-500/30 to-blue-500/30 transform -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12 lg:space-y-16">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div
                  key={exp.id}
                  className="relative"
                  data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                  data-aos-delay={index * 100}
                >
                  {/* Timeline Node */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className={`relative p-4 rounded-full bg-gradient-to-br ${exp.color} border ${exp.border}`}>
                      <Icon className="w-6 h-6 text-white" />
                      <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`relative lg:w-5/12 ${index % 2 === 0 ? 'lg:ml-auto lg:pl-12' : 'lg:mr-auto lg:pr-12'}`}>
                    {/* Mobile Icon */}
                    <div className="lg:hidden mb-6">
                      <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${exp.color} border ${exp.border}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Card Container */}
                    <div className="group relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-700/50 transition-all duration-300">
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                      {/* Card Content */}
                      <div className="relative p-6 lg:p-8">
                        {/* Header */}
                        <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-4 gap-2">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <FaBuilding className="w-4 h-4 text-gray-400" />
                              <span className="text-sm text-gray-400">{exp.company}</span>
                            </div>
                            <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">
                              {exp.title}
                            </h3>
                            <p className="text-cyan-300 font-medium">{exp.project}</p>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <FaCalendarAlt className="w-4 h-4" />
                            <span>{exp.duration}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="mb-6">
                          <ul className="space-y-2">
                            {exp.description.map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
                                <span className="text-gray-300 text-sm lg:text-base">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="pt-4 border-t border-gray-800/50">
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => {
                              const TechIcon =
                                tech.includes("Next") ? SiNextdotjs :
                                  tech.includes("Laravel") ? SiLaravel :
                                    tech.includes("Tailwind") ? SiTailwindcss :
                                      tech.includes("JavaScript") ? SiJavascript : null;

                              return (
                                <span
                                  key={i}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800/50 text-gray-300 text-sm border border-gray-700/50"
                                >
                                  {TechIcon && <TechIcon className="w-3.5 h-3.5" />}
                                  {tech}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      {/* Role Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-800/50 text-cyan-300 border border-cyan-800/30">
                          {index === experiences.length - 1 ? "Current Role" : "Completed"}
                        </span>
                      </div>
                    </div>

                    {/* Timeline Connector */}
                    <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 w-6 h-px bg-gradient-to-r from-gray-800 to-gray-900">
                      <div className={`absolute top-1/2 -translate-y-1/2 w-12 h-px bg-gradient-to-r ${exp.color} ${index % 2 === 0 ? '-left-12' : '-right-12'}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Career Summary */}
        {/* <div className="mt-20 lg:mt-24" data-aos="fade-up" data-aos-delay="400">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800/50">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                3+
              </div>
              <div className="text-gray-400 text-sm">Professional Projects</div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800/50">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                1+ Year
              </div>
              <div className="text-gray-400 text-sm">Cumulative Experience</div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800/50">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-2">
                10+
              </div>
              <div className="text-gray-400 text-sm">Technologies Mastered</div>
            </div>
          </div>
        </div> */}

        {/* Quote */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="600">
          <p className="text-gray-400 italic max-w-2xl mx-auto">
            "Every project is an opportunity to learn, grow, and create something meaningful."
          </p>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        
        .animate-ping {
          animation: pulse-glow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection;