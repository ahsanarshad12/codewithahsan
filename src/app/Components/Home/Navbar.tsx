"use client";
import React, { useState, useEffect } from 'react';
import {
    FaHome,
    FaUser,
    FaCode,
    FaBriefcase,
    FaEnvelope,
    FaLaptopCode,
    FaTimes,
    FaRocket,
    FaChevronDown
} from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = ['home', 'about', 'skills', 'portfolio', 'experience', 'hire'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        setMobileMenuOpen(false);
        const element = document.getElementById(sectionId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    const navItems = [
        { id: 'home', icon: <FaHome />, text: 'Home', color: 'from-blue-400 to-cyan-400' },
        { id: 'about', icon: <FaUser />, text: 'About', color: 'from-purple-400 to-pink-400' },
        { id: 'skills', icon: <FaCode />, text: 'Skills', color: 'from-green-400 to-emerald-400' },
        { id: 'experience', icon: <FaBriefcase />, text: 'Experience', color: 'from-amber-400 to-orange-400' },
        { id: 'portfolio', icon: <FaLaptopCode />, text: 'Projects', color: 'from-cyan-400 to-blue-400' },
        { id: 'hire', icon: <FaEnvelope />, text: 'Contact', color: 'from-red-400 to-pink-400' }
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.05,
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        })
    };

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${scrolled ? 'w-full max-w-[95%]' : 'w-11/12 max-w-6xl'}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div
                    className={`relative rounded-2xl border transition-all duration-300 ${scrolled
                        ? 'bg-gray-900/70 backdrop-blur-xl border-gray-800/50 shadow-2xl'
                        : 'bg-gray-900/50 backdrop-blur-lg border-gray-800/30 shadow-xl'
                        } ${isHovered ? 'bg-gray-900/80 border-gray-700/50 shadow-2xl shadow-gray-900/50' : ''}`}
                >
                    {/* Animated gradient border */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Active indicator light */}
                    {navItems.map((item) =>
                        activeSection === item.id && (
                            <motion.div
                                key={item.id}
                                className={`absolute top-0 h-full rounded-2xl bg-gradient-to-r ${item.color} opacity-10`}
                                layoutId="activeSection"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )
                    )}

                    <div className="relative px-4 sm:px-6 py-3">
                        <div className="flex justify-between items-center">
                            {/* Logo/Brand */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection('home')}
                                className="group flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
                            >
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-50" />
                                    <div className="relative p-2 rounded-lg bg-gradient-to-br from-gray-900 to-black">
                                        <FaRocket className="w-4 h-4 text-cyan-400" />
                                    </div>
                                </div>
                                <div className="text-left">
                                    <div className="text-sm font-bold text-white">Ahsan</div>
                                    <div className="text-xs text-cyan-400">Developer</div>
                                </div>
                            </motion.button>

                            {/* Desktop Navigation */}
                            <div className="hidden md:flex items-center gap-1">
                                {navItems.map((item, index) => (
                                    <motion.button
                                        key={item.id}
                                        custom={index}

                                        initial="hidden"
                                        animate="visible"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`group relative px-4 py-2.5 mx-1 rounded-xl transition-all duration-300 ${activeSection === item.id
                                            ? 'text-white'
                                            : 'text-gray-400 hover:text-white'
                                            }`}
                                    >
                                        {/* Background gradient on active */}
                                        {activeSection === item.id && (
                                            <motion.div
                                                className={`absolute inset-0 rounded-xl bg-gradient-to-r ${item.color} opacity-20`}
                                                layoutId="activeBackground"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}

                                        {/* Hover background */}
                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-800/0 to-gray-800/0 group-hover:from-gray-800/50 group-hover:to-gray-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        {/* Border on active */}
                                        {activeSection === item.id && (
                                            <div className={`absolute inset-0 rounded-xl border border-transparent border-gradient-to-r ${item.color} opacity-30`} />
                                        )}

                                        <div className="relative flex items-center gap-3">
                                            <span className={`text-lg transition-transform duration-300 ${activeSection === item.id ? 'scale-110' : 'group-hover:scale-110'}`}>
                                                {item.icon}
                                            </span>
                                            <span className="font-medium text-sm whitespace-nowrap">
                                                {item.text}
                                            </span>
                                        </div>

                                        {/* Active indicator dot */}
                                        {activeSection === item.id && (
                                            <motion.div
                                                className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.color}`}
                                                layoutId="activeDot"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </motion.button>
                                ))}

                                {/* Hire Me Button */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => scrollToSection('hire')}
                                    className="ml-4 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 flex items-center gap-2"
                                >
                                    <FaEnvelope className="w-4 h-4" />
                                    <span>Hire Me</span>
                                </motion.button>
                            </div>

                            {/* Mobile Menu Button */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="md:hidden relative p-3 rounded-xl bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700/50 hover:border-cyan-500/30 text-white transition-all duration-300"
                            >
                                <motion.div
                                    animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {mobileMenuOpen ? (
                                        <FaTimes className="h-5 w-5" />
                                    ) : (
                                        <FiMenu className="h-5 w-5" />
                                    )}
                                </motion.div>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden fixed top-20 left-1/2 -translate-x-1/2 z-50 w-11/12 max-w-sm"
                        >
                            <div className="relative rounded-2xl border border-gray-800/50 bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-xl shadow-2xl overflow-hidden">
                                {/* Gradient border */}
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 pointer-events-none" />

                                <div className="relative p-3 space-y-1">
                                    {navItems.map((item, index) => (
                                        <motion.button
                                            key={item.id}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05, duration: 0.3 }}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => scrollToSection(item.id)}
                                            className={`group w-full flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-300 ${activeSection === item.id
                                                ? 'bg-gradient-to-r from-gray-800/50 to-gray-800/30 text-white'
                                                : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className={`text-lg ${activeSection === item.id ? 'text-cyan-400' : ''}`}>
                                                    {item.icon}
                                                </span>
                                                <span className="font-medium text-base">
                                                    {item.text}
                                                </span>
                                            </div>
                                            {activeSection === item.id && (
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color}`}
                                                />
                                            )}
                                            {activeSection !== item.id && (
                                                <FaChevronDown className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transform -rotate-90" />
                                            )}
                                        </motion.button>
                                    ))}

                                    {/* Mobile Hire Me Button */}
                                    <motion.button
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: navItems.length * 0.05, duration: 0.3 }}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => scrollToSection('hire')}
                                        className="w-full mt-4 px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium text-base shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-3"
                                    >
                                        <FaEnvelope className="w-5 h-5" />
                                        <span>Hire Me Now</span>
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Scroll Progress Indicator */}
            <div className="fixed top-0 left-0 right-0 h-0.5 z-50">
                <motion.div
                    className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
                    initial={{ width: "0%" }}
                    animate={{ width: `${(scrolled ? 100 : 0)}%` }}
                    transition={{ duration: 0.3 }}
                />
            </div>
        </>
    );
};

export default Navbar;