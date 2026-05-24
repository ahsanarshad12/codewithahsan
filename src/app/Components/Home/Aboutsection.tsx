import React from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGlobe, FaUser, FaBriefcase } from "react-icons/fa";
import { SiLaravel, SiNextdotjs } from "react-icons/si";

const AboutSection = () => {
    const infoCards = [
        {
            icon: FaUser,
            label: "Full Name",
            value: "Ahsan Arshad",
            gradient: "from-blue-500/10 to-cyan-500/10",
            border: "hover:border-blue-500/50"
        },
        // {
        //     icon: FaBriefcase,
        //     label: "Role",
        //     value: "Full Stack Developer",
        //     gradient: "from-blue-500/10 to-cyan-500/10",
        //     border: "hover:border-blue-500/50"
        // },
        {
            icon: FaEnvelope,
            label: "Email",
            value: "ahsanarshad291@gmail.com",
            gradient: "from-blue-500/10 to-cyan-500/10",
            border: "hover:border-blue-500/50"
        },
        {
            icon: FaPhone,
            label: "Contact",
            value: "+92 301 3421018",
            gradient: "from-blue-500/10 to-cyan-500/10",
            border: "hover:border-blue-500/50"
        },
        // {
        //     icon: FaMapMarkerAlt,
        //     label: "Location",
        //     value: "Rahim Yar Khan, Pakistan",
        //     gradient: "from-blue-500/10 to-cyan-500/10",
        //     border: "hover:border-blue-500/50"
        // },
        // {
        //     icon: FaGlobe,
        //     label: "Timezone",
        //     value: "GMT+5 (PKT)",
        //     gradient: "from-blue-500/10 to-cyan-500/10",
        //     border: "hover:border-blue-500/50"
        // }
    ];

    return (
        <section id="about" className="relative  overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-950 py-20">
            <div className="w-full max-w-400 mx-auto  px-4 md:px-12" >
                {/* Abstract Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Geometric Grid */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="h-full w-full bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(180deg,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />
                    </div>

                    {/* Animated Gradients */}
                    <div className="absolute -top-40 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-cyan-500/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

                    {/* Floating Particles */}
                    <div className="absolute inset-0">
                        {[...Array(15)].map((_, i) => (
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

                {/* Content Container */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16 lg:mb-20">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                            <span className="text-sm uppercase tracking-widest text-cyan-400 font-medium">
                                Get to Know Me
                            </span>
                            <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                        </div>

                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                                About
                            </span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mt-2">
                                The Developer
                            </span>
                        </h2>

                        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                            Crafting exceptional digital experiences with modern web technologies
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10 lg:gap-0 items-start">
                        {/* Left Column - Image & Tech */}
                        <div className="relative ">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 blur-3xl rounded-full" />

                            {/* Image Container */}
                            <div className="relative   group w-full max-w-[650px]">
                                {/* Floating Border */}
                                <div className="absolute  -inset-4 rounded-3xl border border-cyan-500/20 animate-pulse" />
                                <div className="flex flex-col lg:flex-row items-center gap-6" >
                                    {/* Main Image */}
                                    <div className="relative rounded-2xl overflow-hidden border border-gray-800 bg-gradient-to-br from-gray-900 to-black shadow-2xl">
                                        <Image
                                            src="/profile.webp"
                                            alt="Ahsan Arshad - Professional Developer"
                                            width={600}
                                            height={600}
                                            priority
                                            className="w-full max-w-[500px] h-full max-h-[450px] object-cover opacity-90"
                                        />

                                        {/* Overlay Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                        {/* Tech Badge */}
                                        <div className="absolute w-full max-w-70 bottom-6 left-1/2 -translate-x-1/2">
                                            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gray-900/90 backdrop-blur-sm border border-gray-800/50 shadow-xl">
                                                <SiLaravel className="w-6 h-6 text-red-500" />
                                                <SiNextdotjs className="w-6 h-6 text-black dark:text-white" />
                                                <span className="text-white font-semibold text-sm">
                                                    Full Stack Developer
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Expertise Section */}
                                    <div className="space-y-4  ">
                                        <h3 className="text-2xl font-bold text-center text-white">
                                            My Expertise
                                        </h3>
                                        <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800">
                                            <ul className="space-y-3">
                                                {[
                                                    "Modern React & Next.js Applications",
                                                    "RESTful & GraphQL API Development",
                                                    "Responsive & Accessible UI/UX Design",
                                                    "Database Architecture & Optimization",
                                                    "Cloud Deployment & DevOps",
                                                    "Performance Optimization"
                                                ].map((skill, index) => (
                                                    <li key={index} className="flex items-center gap-3">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                                                        <span className="text-gray-300">{skill}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                            </div>



                            {/* CTA Button */}
                            <div className="pt-4 mt-4">
                                <a
                                    href="mailto:ahsanarshad291@gmail.com"
                                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-semibold text-white shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
                                >
                                    <span>Let's Build Together</span>
                                    <svg
                                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                                </a>
                            </div>



                            {/* Stats Cards */}
                            {/* <div className="grid grid-cols-2 gap-6 mt-16">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800">
                                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                        1+
                                    </div>
                                    <div className="text-sm text-gray-400 mt-1">Years Experience</div>
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800">
                                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                        10+
                                    </div>
                                    <div className="text-sm text-gray-400 mt-1">Projects Delivered</div>
                                </div>
                            </div>
                        </div> */}
                        </div>

                        {/* Right Column - Information */}
                        <div className="space-y-8">
                            {/* Introduction */}
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-white">
                                    Who I Am
                                </h3>
                                <div className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800">
                                    <p className="text-gray-300 leading-relaxed">
                                        I'm a passionate <span className="font-semibold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">Full Stack Developer</span> with expertise in modern web technologies.
                                        I specialize in building scalable applications using <span className="font-semibold text-cyan-300">Next.js</span> and <span className="font-semibold text-red-400">Laravel</span>,
                                        creating seamless digital experiences that blend cutting-edge technology with elegant design.
                                    </p>
                                </div>
                            </div>

                            {/* Information Grid */}
                            <div className="grid sm:grid-cols-2 gap-4">
                                {infoCards.map((card, index) => (
                                    <div
                                        key={index}
                                        className={`group relative overflow-hidden rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 ${card.border} transition-all duration-300 p-5`}
                                    >
                                        <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                        <div className="relative space-y-2">
                                            <div className="flex items-center gap-3">
                                                <card.icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                                                <span className="text-xs uppercase tracking-wider text-gray-400 group-hover:text-gray-300 transition-colors font-medium">
                                                    {card.label}
                                                </span>
                                            </div>
                                            <p className="text-white font-medium text-sm sm:text-base">
                                                {card.value}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>




                        </div>
                    </div>

                    {/* Quote Section */}
                    <div className="mt-20 lg:mt-24 relative">
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                        <div className="max-w-3xl mx-auto text-center mt-12">
                            <div className="text-4xl sm:text-5xl font-bold mb-6">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
                                    "Code is poetry,
                                </span>
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                                    executed with precision."
                                </span>
                            </div>
                            <p className="text-gray-400 italic">- Building digital solutions that matter</p>
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

                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
            </div>
        </section>
    );
}

export default AboutSection;