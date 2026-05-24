// app/privacy/page.tsx
"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    FaShieldAlt,
    FaUserShield,
    FaDatabase,
    FaCookie,
    FaLock,
    FaShare,
    FaChild,
    FaGlobe,
    FaEnvelope,
    FaArrowLeft,
    FaCheckCircle,
    FaEye,
    FaTrash,
    FaCog
} from 'react-icons/fa';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PrivacyPolicy = () => {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 800,
            offset: 100
        });
    }, []);

    const lastUpdated = "January 15, 2025";

    const sections = [
        {
            id: "introduction",
            icon: <FaShieldAlt />,
            title: "1. Introduction",
            content: [
                "Welcome to Ahsan Arshad's Privacy Policy. Your privacy is critically important to me.",
                "This Privacy Policy explains how I collect, use, disclose, and safeguard your information when you visit my website (ahsanarshad.com) or engage my freelance services.",
                "By using this website or my services, you consent to the data practices described in this policy.",
                "I am committed to protecting your personal information and your right to privacy. If you have any questions or concerns, please contact me at ahsanarshad291@gmail.com."
            ]
        },
        {
            id: "information-collected",
            icon: <FaDatabase />,
            title: "2. Information I Collect",
            content: [
                "Personal Information You Provide:",
                "• Name and contact information (email, phone number)",
                "• Project details and requirements",
                "• Payment information (processed through secure third-party services)",
                "• Communication history and correspondence",
                "• Any other information you choose to provide",
                "",
                "Automatically Collected Information:",
                "• IP address and browser type",
                "• Device information and operating system",
                "• Pages visited and time spent on the website",
                "• Referring website addresses",
                "• Geographic location (country/city level)",
                "",
                "This information helps me improve my website and provide better services."
            ]
        },
        {
            id: "how-used",
            icon: <FaCog />,
            title: "3. How I Use Your Information",
            content: [
                "I use the collected information for the following purposes:",
                "",
                "Service Delivery:",
                "• To provide and maintain my freelance services",
                "• To process and complete transactions",
                "• To send project updates and communications",
                "• To respond to inquiries and support requests",
                "",
                "Improvement & Analytics:",
                "• To understand how visitors use my website",
                "• To improve website functionality and user experience",
                "• To develop new features and services",
                "",
                "Communication:",
                "• To send newsletters (only with your consent)",
                "• To notify you about service updates",
                "• To provide customer support",
                "",
                "Legal & Security:",
                "• To comply with legal obligations",
                "• To protect against fraudulent or illegal activity",
                "• To enforce my terms and conditions"
            ]
        },
        {
            id: "data-sharing",
            icon: <FaShare />,
            title: "4. Data Sharing & Third Parties",
            content: [
                "I do NOT sell, trade, or rent your personal information to third parties.",
                "",
                "I may share your information only in the following circumstances:",
                "",
                "Service Providers:",
                "• Payment processors (PayPal, Wise, Stripe) for transaction processing",
                "• Email service providers for communication",
                "• Hosting providers for website operation",
                "• Analytics services (Google Analytics) for website improvement",
                "",
                "Legal Requirements:",
                "• When required by law or legal process",
                "• To protect my rights or property",
                "• In connection with a legal investigation",
                "",
                "Business Transfers:",
                "• In the event of a merger, acquisition, or sale of assets",
                "",
                "All third-party service providers are required to maintain the confidentiality of your information."
            ]
        },
        {
            id: "cookies",
            icon: <FaCookie />,
            title: "5. Cookies & Tracking Technologies",
            content: [
                "What Are Cookies:",
                "Cookies are small text files placed on your device when you visit a website. They help the website remember your preferences and improve your experience.",
                "",
                "Types of Cookies I Use:",
                "• Essential Cookies: Required for the website to function properly",
                "• Analytics Cookies: Help me understand how visitors use the website",
                "• Preference Cookies: Remember your settings and preferences",
                "",
                "Third-Party Cookies:",
                "Some cookies may be placed by third-party services like Google Analytics. These are governed by their respective privacy policies.",
                "",
                "Managing Cookies:",
                "You can control and delete cookies through your browser settings. However, disabling cookies may affect website functionality.",
                "",
                "Most browsers allow you to:",
                "• View cookies stored on your device",
                "• Delete individual or all cookies",
                "• Block third-party cookies",
                "• Block all cookies from specific websites"
            ]
        },
        {
            id: "data-security",
            icon: <FaLock />,
            title: "6. Data Security",
            content: [
                "I take the security of your personal information seriously and implement appropriate measures to protect it.",
                "",
                "Security Measures Include:",
                "• SSL/TLS encryption for data transmission",
                "• Secure password practices",
                "• Regular security updates and monitoring",
                "• Limited access to personal information",
                "• Secure third-party service providers",
                "",
                "However, no method of transmission over the Internet or electronic storage is 100% secure. While I strive to use commercially acceptable means to protect your information, I cannot guarantee absolute security.",
                "",
                "In the event of a data breach that affects your personal information, I will notify you as required by applicable law."
            ]
        },
        {
            id: "your-rights",
            icon: <FaUserShield />,
            title: "7. Your Rights",
            content: [
                "You have the following rights regarding your personal data:",
                "",
                "Access: You can request a copy of the personal information I hold about you.",
                "",
                "Correction: You can request correction of inaccurate or incomplete information.",
                "",
                "Deletion: You can request deletion of your personal information (subject to legal retention requirements).",
                "",
                "Objection: You can object to the processing of your data for certain purposes.",
                "",
                "Portability: You can request a copy of your data in a portable format.",
                "",
                "Withdraw Consent: You can withdraw consent for data processing at any time.",
                "",
                "To exercise any of these rights, please contact me at ahsanarshad291@gmail.com. I will respond to your request within 30 days."
            ]
        },
        {
            id: "data-retention",
            icon: <FaDatabase />,
            title: "8. Data Retention",
            content: [
                "I retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy.",
                "",
                "Retention Periods:",
                "• Project data: 3 years after project completion (for warranty and support purposes)",
                "• Contact form submissions: 2 years",
                "• Email communications: 3 years",
                "• Analytics data: 26 months",
                "• Invoice and payment records: 7 years (as required by law)",
                "",
                "After the retention period, your data will be securely deleted or anonymized.",
                "",
                "You may request earlier deletion of your data by contacting me directly."
            ]
        },
        {
            id: "children",
            icon: <FaChild />,
            title: "9. Children's Privacy",
            content: [
                "My services are not directed to individuals under the age of 18.",
                "",
                "I do not knowingly collect personal information from children under 18 years of age.",
                "",
                "If you are a parent or guardian and believe your child has provided me with personal information, please contact me immediately.",
                "",
                "If I become aware that I have collected personal information from a child under 18 without parental consent, I will take steps to delete that information promptly."
            ]
        },
        {
            id: "international",
            icon: <FaGlobe />,
            title: "10. International Data Transfers",
            content: [
                "I am based in Pakistan and my website and services are hosted on servers that may be located in different countries.",
                "",
                "If you are accessing my website from outside Pakistan, please be aware that your information may be transferred to, stored, and processed in Pakistan or other countries where my service providers are located.",
                "",
                "By using my website or services, you consent to the transfer of your information to countries that may have different data protection laws than your country of residence.",
                "",
                "I take appropriate measures to ensure that your personal information remains protected in accordance with this Privacy Policy."
            ]
        },
        {
            id: "changes",
            icon: <FaEye />,
            title: "11. Changes to This Policy",
            content: [
                "I may update this Privacy Policy from time to time to reflect changes in my practices or for legal, operational, or regulatory reasons.",
                "",
                "When I make changes:",
                "• The 'Last Updated' date at the top will be revised",
                "• For significant changes, I may provide additional notice (such as a website banner or email notification)",
                "",
                "I encourage you to review this Privacy Policy periodically to stay informed about how I protect your information.",
                "",
                "Your continued use of my website or services after any changes constitutes acceptance of the updated Privacy Policy."
            ]
        },
        {
            id: "contact",
            icon: <FaEnvelope />,
            title: "12. Contact Information",
            content: [
                "If you have questions, concerns, or requests regarding this Privacy Policy or my data practices, please contact me:",
                "",
                "Ahsan Arshad",
                "Full Stack Developer",
                "",
                "Email: ahsanarshad291@gmail.com",
                "WhatsApp: +92 301 3421018",
                "Location: Punjab, Pakistan",
                "",
                "I will respond to your inquiry within 30 days.",
                "",
                "For urgent privacy concerns, please include 'PRIVACY URGENT' in your email subject line."
            ]
        }
    ];

    const dataTypes = [
        { icon: <FaEnvelope />, type: "Contact Info", desc: "Name, email, phone" },
        { icon: <FaDatabase />, type: "Project Data", desc: "Requirements, files" },
        { icon: <FaGlobe />, type: "Usage Data", desc: "Analytics, cookies" },
        { icon: <FaLock />, type: "Payment Info", desc: "Via secure providers" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950">
            {/* Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 opacity-5">
                    <div className="h-full w-full bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(180deg,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />
                </div>
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-green-600/10 to-emerald-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-teal-600/10 to-cyan-500/5 rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-10">
                {/* Header */}
                <header className="border-b border-gray-800/50 backdrop-blur-sm bg-gray-900/50 sticky top-0 z-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex items-center justify-between">
                            <Link
                                href="/"
                                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                            >
                                <FaArrowLeft className="w-4 h-4" />
                                <span>Back to Home</span>
                            </Link>
                            <Link
                                href="/terms"
                                className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm"
                            >
                                Terms & Conditions →
                            </Link>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="py-16 lg:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center max-w-4xl mx-auto"
                        >
                            <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/10 border border-green-500/30 mb-6">
                                <FaShieldAlt className="w-8 h-8 text-green-400" />
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                                    Privacy
                                </span>
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mt-2">
                                    Policy
                                </span>
                            </h1>

                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                Your privacy matters to me. This policy explains how I collect, use, and protect your
                                personal information when you visit my website or use my services.
                            </p>

                            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
                                <span className="px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50">
                                    📅 Last Updated: {lastUpdated}
                                </span>
                                <span className="px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50">
                                    ⏱️ 12 min read
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Data Overview */}
                <section className="pb-12">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/50" data-aos="fade-up">
                                <h3 className="text-lg font-bold text-white mb-6 text-center">🔐 Data I May Collect</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {dataTypes.map((item, index) => (
                                        <div
                                            key={index}
                                            className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 text-center"
                                        >
                                            <div className="text-green-400 text-2xl mb-2 flex justify-center">
                                                {item.icon}
                                            </div>
                                            <h4 className="text-white font-medium text-sm mb-1">{item.type}</h4>
                                            <p className="text-gray-500 text-xs">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick Navigation */}
                {/* <section className="pb-12">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/50" data-aos="fade-up">
                                <h3 className="text-lg font-bold text-white mb-4">📑 Quick Navigation</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                    {sections.map((section) => (
                                        <a
                                            key={section.id}
                                            href={`#${section.id}`}
                                            className="p-3 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-green-500/50 hover:bg-gray-800 transition-all text-center group"
                                        >
                                            <span className="text-gray-400 group-hover:text-green-400 text-xs">
                                                {section.title.split('.')[0]}.
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* Your Rights Highlight */}
                <section className="pb-12">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/30" data-aos="fade-up">
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <FaUserShield className="text-green-400" />
                                    Your Rights at a Glance
                                </h3>
                                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    {[
                                        { icon: <FaEye />, right: "Access", desc: "View your data" },
                                        { icon: <FaCog />, right: "Correct", desc: "Fix inaccuracies" },
                                        { icon: <FaTrash />, right: "Delete", desc: "Request removal" },
                                        { icon: <FaShare />, right: "Export", desc: "Get a copy" },
                                        { icon: <FaLock />, right: "Object", desc: "Opt out" },
                                        { icon: <FaCheckCircle />, right: "Withdraw", desc: "Change consent" }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/30">
                                            <div className="text-green-400">{item.icon}</div>
                                            <div>
                                                <div className="text-white font-medium text-sm">{item.right}</div>
                                                <div className="text-gray-500 text-xs">{item.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Privacy Sections */}
                <section className="pb-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto space-y-8">
                            {sections.map((section, index) => (
                                <motion.div
                                    key={section.id}
                                    id={section.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    className="scroll-mt-24"
                                >
                                    <div className="p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800/50 hover:border-gray-700/50 transition-all">
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/10 border border-green-500/30 flex-shrink-0">
                                                <div className="text-green-400 text-xl">{section.icon}</div>
                                            </div>
                                            <h2 className="text-xl lg:text-2xl font-bold text-white">
                                                {section.title}
                                            </h2>
                                        </div>

                                        <div className="space-y-4 text-gray-300 leading-relaxed">
                                            {section.content.map((paragraph, pIndex) => (
                                                <p
                                                    key={pIndex}
                                                    className={
                                                        paragraph.startsWith('•')
                                                            ? 'pl-4 text-gray-400'
                                                            : paragraph === ''
                                                                ? 'h-2'
                                                                : paragraph.endsWith(':')
                                                                    ? 'font-semibold text-white mt-4'
                                                                    : ''
                                                    }
                                                >
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Cookie Banner Note */}
                <section className="pb-12">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/30">
                                <div className="flex items-start gap-4">
                                    <FaCookie className="w-8 h-8 text-amber-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">Cookie Notice</h3>
                                        <p className="text-gray-300 text-sm mb-3">
                                            This website uses cookies to enhance your experience. By continuing to use this website,
                                            you consent to the use of cookies in accordance with this Privacy Policy.
                                        </p>
                                        <p className="text-gray-400 text-xs">
                                            You can manage your cookie preferences through your browser settings at any time.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="pb-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/30 text-center">
                                <FaEnvelope className="w-12 h-12 text-green-400 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Questions About Privacy?
                                </h3>
                                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                                    If you have any questions about this Privacy Policy or how I handle your data,
                                    feel free to reach out. I'm committed to transparency and protecting your privacy.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <a
                                        href="mailto:ahsanarshad291@gmail.com?subject=Privacy%20Inquiry"
                                        className="px-8 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold hover:opacity-90 transition-opacity"
                                    >
                                        📧 Contact About Privacy
                                    </a>
                                    <Link
                                        href="/terms"
                                        className="px-8 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white font-semibold hover:bg-gray-700 transition-colors"
                                    >
                                        Read Terms & Conditions
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-gray-800/50 py-8">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                            <p>© {new Date().getFullYear()} Ahsan Arshad. All rights reserved.</p>
                            <div className="flex items-center gap-4">
                                <Link href="/terms" className="hover:text-emerald-400 transition-colors">
                                    Terms & Conditions
                                </Link>
                                <span>•</span>
                                <Link href="/" className="hover:text-emerald-400 transition-colors">
                                    Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default PrivacyPolicy;