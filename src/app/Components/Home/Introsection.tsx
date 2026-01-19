import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope, } from 'react-icons/fa';
import { SiNextdotjs, SiJavascript, SiTailwindcss, SiLaravel } from 'react-icons/si';
import { CiSaveDown1 } from "react-icons/ci";

import Image from "next/image";

const HeroSection = () => {
    const socialLinks = [
        { icon: FaGithub, href: "https://github.com/ahsanarshad", label: "GitHub", color: "from-gray-800 to-gray-900" },
        { icon: FaLinkedinIn, href: "https://linkedin.com/in/ahsanarshad", label: "LinkedIn", color: "from-blue-700 to-blue-600" },
        { icon: FaTwitter, href: "https://twitter.com/ahsanarshaddev", label: "Twitter", color: "from-sky-500 to-blue-500" },
        { icon: FaEnvelope, href: "mailto:hi@ahsanarshad.com", label: "Email", color: "from-red-500 to-pink-500" },
    ];

    const techStack = [
        { icon: SiNextdotjs, name: "Next.js", color: "text-white" },
        { icon: SiTailwindcss, name: "Tailwind", color: "text-teal-400" },
        { icon: SiJavascript, name: "Javascript", color: "text-yellow-300" },
        { icon: SiLaravel, name: "Laravel", color: "text-red-500" },
    ];

    return (
        <section id="home" className=" relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-950  ">
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Geometric Grid */}
                <div className="absolute inset-0 opacity-5">
                    <div className="h-full w-full bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(180deg,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />
                </div>

                {/* Animated Gradients */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-cyan-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

                {/* Floating Particles */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-white/10 rounded-full animate-float"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10  mt-30 sm:mt-40  ">
                <div className="flex flex-col lg:flex-row  items-center justify-between w-full max-w-400 mx-auto px-4 md:px-22">
                    {/* Left Column - Content */}
                    <div className="space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
                            <div className="relative">
                                <div className="absolute inset-0 bg-green-500/20 blur-sm rounded-full" />
                                <div className="relative w-3 h-3 rounded-full bg-green-500 animate-ping" />
                            </div>
                            <span className="text-sm font-medium text-gray-300 tracking-wide">
                                OPEN TO NEW OPPORTUNITIES
                            </span>
                        </div>

                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300">
                                    Crafting Digital
                                </span>
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mt-2">
                                    Experiences
                                </span>
                            </h1>

                            <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                                Hi, I'm <span className="font-semibold text-white">Ahsan Arshad</span>. I build modern web applications with cutting-edge technologies and pixel-perfect designs.
                            </p>
                        </div>

                        {/* Tech Stack */}
                        <div className="space-y-4">
                            <p className="text-gray-500 text-sm uppercase tracking-wider">Tech Stack</p>
                            <div className="flex flex-wrap gap-3">
                                {techStack.map((tech, index) => (
                                    <div
                                        key={index}
                                        className="group relative flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                                    >
                                        <tech.icon className={`w-5 h-5 ${tech.color}`} />
                                        <span className="text-gray-300 font-medium">{tech.name}</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <a
                                href="#projects"
                                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl font-semibold text-white shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
                            >
                                <span>View My Work</span>
                                <CiSaveDown1 className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                            </a>

                            <a
                                href="mailto:hi@ahsanarshad.com"
                                className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white border border-gray-700 hover:border-gray-600 transition-all duration-300"
                            >
                                <span>Get In Touch</span>
                                <FaEnvelope className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Visual */}
                    <div className="relative">
                        {/* Image Container */}
                        <div className="relative">
                            {/* Outer Glow */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl" />

                            {/* Main Image Card */}
                            <div className="relative rounded-2xl overflow-hidden border border-gray-800 bg-gradient-to-br from-gray-900 to-black shadow-2xl">
                                <Image
                                    src="/profile.jpeg"
                                    alt="Ahsan Arshad - Full Stack Developer"
                                    width={600}
                                    height={400}
                                    priority
                                    className=" h-full max-h-[500px] object-top object-cover opacity-90"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                {/* Floating Info Cards */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="grid gap-3">
                                        <div className="flex items-center justify-between p-4 rounded-xl bg-gray-900/80 backdrop-blur-sm border border-gray-800/50">
                                            <div>
                                                <p className="text-sm text-gray-400">Currently Working On</p>
                                                <p className="text-lg font-bold text-white">AI-Powered SaaS Platform</p>
                                            </div>
                                            <div className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                                                <span className="text-sm font-medium text-cyan-300">Next.js 14</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-6 -right-6 w-32 h-32">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl animate-pulse" />
                                <div className="relative p-4 rounded-xl bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 shadow-xl">
                                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                                        10+
                                    </div>
                                    <div className="text-sm text-gray-400">Projects</div>
                                </div>
                            </div>

                            <div className="absolute bottom-24 -left-6 w-22 h-22">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl animate-pulse delay-500" />
                                <div className="relative p-4 rounded-xl bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 shadow-xl">
                                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                                        1Y+
                                    </div>
                                    <div className="text-sm text-gray-400">Experience</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Links & Scroll Indicator */}
                <div className="mt-6 lg:mt-4 m-10 flex flex-col items-center space-y-8">
                    {/* Social Links */}
                    <div className="flex gap-4">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.label}
                                className="group relative p-3 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-110"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${link.color} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                                <link.icon className="relative w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                            </a>
                        ))}
                    </div>


                </div>
            </div>

            {/* Custom Animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                @keyframes pulse-glow {
                    0%, 100% {
                        opacity: 0.2;
                    }
                    50% {
                        opacity: 0.4;
                    }
                }

                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }

                .animate-pulse-glow {
                    animation: pulse-glow 2s ease-in-out infinite;
                }

                /* Gradient Text Animation */
                .gradient-text {
                    background-size: 200% 200%;
                    animation: gradient-shift 3s ease infinite;
                }

                @keyframes gradient-shift {
                    0%, 100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }
            `}</style>
        </section>
    );
};

export default HeroSection;