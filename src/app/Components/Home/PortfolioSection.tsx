"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { SiBootstrap, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import { FaEye, FaCode } from "react-icons/fa";

const allProjects = [
  {
    id: 1,
    category: "E-Commerce",
    title: "Butcher Meat Shop",
    description: "Modern meat shop e-commerce with category filtering, responsive design, and interactive product browsing.",
    tech: [
      { icon: <SiBootstrap className="w-4 h-4" />, name: "Bootstrap", color: "text-purple-400" },
      { icon: <SiJavascript className="w-4 h-4" />, name: "JavaScript", color: "text-yellow-400" },
      { icon: <SiHtml5 className="w-4 h-4" />, name: "HTML5", color: "text-orange-500" },
      { icon: <SiCss3 className="w-4 h-4" />, name: "CSS3", color: "text-blue-500" }
    ],
    image: "/Butcher-Meat-Sho.jpeg",
    demo: "https://butcher-meat-shop.netlify.app/",
    featured: true
  },
  {
    id: 2,
    category: "E-Commerce",
    title: "Bemet Meat Shop",
    description: "Clean, modern meat shop interface with smooth animations, cart functionality, and product filtering.",
    tech: [
      { icon: <SiBootstrap className="w-4 h-4" />, name: "Bootstrap", color: "text-purple-400" },
      { icon: <SiJavascript className="w-4 h-4" />, name: "JavaScript", color: "text-yellow-400" },
      { icon: <SiHtml5 className="w-4 h-4" />, name: "HTML5", color: "text-orange-500" },
      { icon: <SiCss3 className="w-4 h-4" />, name: "CSS3", color: "text-blue-500" }
    ],
    image: "/meat2.jpeg",
    demo: "https://bemet-meat-shop.netlify.app/",
    featured: true
  },
  {
    id: 3,
    category: "Full Stack",
    title: "Warehouse Management",
    description: "Next.js 14 based warehouse system with real-time inventory tracking and management dashboard.",
    tech: [
      { icon: <div className="w-4 h-4 bg-black rounded" />, name: "Next.js 14", color: "text-white" },
      { icon: <div className="w-4 h-4 bg-cyan-500 rounded" />, name: "Tailwind", color: "text-cyan-400" },
      { icon: <div className="w-4 h-4 bg-blue-500 rounded" />, name: "React", color: "text-blue-400" }
    ],
    image: "/project-wms.jpeg",
    demo: "#",
    featured: true
  },
  {
    id: 4,
    category: "Full Stack",
    title: "AutoParts System",
    description: "Laravel-based inventory management system with advanced filtering and reporting features.",
    tech: [
      { icon: <div className="w-4 h-4 bg-red-500 rounded" />, name: "Laravel", color: "text-red-400" },
      { icon: <div className="w-4 h-4 bg-blue-700 rounded" />, name: "MySQL", color: "text-blue-300" },
      { icon: <SiBootstrap className="w-4 h-4" />, name: "Bootstrap", color: "text-purple-400" }
    ],
    image: "/project-autoparts.jpeg",
    demo: "#",
    featured: false
  },
  {
    id: 5,
    category: "Full Stack",
    title: "SaaS Platform",
    description: "Business automation platform with modular architecture and multi-tenant support.",
    tech: [
      { icon: <div className="w-4 h-4 bg-red-500 rounded" />, name: "Laravel", color: "text-red-400" },
      { icon: <SiJavascript className="w-4 h-4" />, name: "JavaScript", color: "text-yellow-400" },
      { icon: <SiBootstrap className="w-4 h-4" />, name: "Bootstrap", color: "text-purple-400" }
    ],
    image: "/project-saas.jpeg",
    demo: "#",
    featured: false
  },
  {
    id: 6,
    category: "Frontend",
    title: "Portfolio Website",
    description: "Modern portfolio design with interactive elements, animations, and responsive layout.",
    tech: [
      { icon: <div className="w-4 h-4 bg-black rounded" />, name: "Next.js", color: "text-white" },
      { icon: <div className="w-4 h-4 bg-cyan-500 rounded" />, name: "Tailwind", color: "text-cyan-400" },
      { icon: <SiJavascript className="w-4 h-4" />, name: "TypeScript", color: "text-blue-500" }
    ],
    image: "/project-portfolio.jpeg",
    demo: "#",
    featured: false
  },
];

const categories = ["All", "E-Commerce", "Full Stack", "Frontend"];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      offset: 100
    });
  }, []);

  const filteredProjects = activeCategory === "All"
    ? allProjects
    : allProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-950 py-20">
      {/* Abstract Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(180deg,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-cyan-500/5 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent" />
            <span className="text-sm uppercase tracking-widest text-green-400 font-medium">
              Recent Work
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Featured
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mt-2">
              Projects
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Explore my collection of modern web applications built with cutting-edge technologies
            and best development practices.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 lg:mb-16" data-aos="fade-up" data-aos-delay="200">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`group relative px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${activeCategory === cat
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
                }`}
            >
              <span className="relative z-10">{cat}</span>
              {activeCategory === cat && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl" />
                  <div className="absolute inset-0 border border-green-500/30 rounded-xl" />
                </>
              )}
              {activeCategory !== cat && (
                <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl group-hover:border-green-500/30 transition-colors" />
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" data-aos="fade-up" data-aos-delay="400">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Project Card */}
              <div className="relative h-full rounded-2xl overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-gray-800 transition-all duration-300 group-hover:border-green-500/50 group-hover:shadow-2xl group-hover:shadow-green-500/10">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-300 border border-green-500/30">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-900/80 backdrop-blur-sm text-gray-300 border border-gray-700/50">
                      {project.category}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium text-sm hover:shadow-lg hover:shadow-green-500/25 transition-all"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <FaCode className="w-4 h-4 text-gray-500" />
                      <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                        Technologies
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-800/50 border border-gray-700/50"
                        >
                          <div className={tech.color}>{tech.icon}</div>
                          <span className="text-xs text-gray-300 font-medium">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <FaEye className="w-4 h-4" />
                        <span>Live Demo</span>
                      </div>
                    </div>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 text-sm font-medium transition-colors flex items-center gap-2"
                    >
                      View Project
                      <FiExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 lg:mt-20" data-aos="fade-up" data-aos-delay="600">
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800/50">
            <h3 className="text-2xl font-bold text-white mb-4">
              Have a project in mind?
            </h3>
            <p className="text-gray-400 mb-6">
              Let's collaborate to build something amazing together.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl font-semibold text-white shadow-2xl shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 hover:scale-105"
            >
              Start a Project
              <FiExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>
    </section>
  );
};

export default PortfolioSection;