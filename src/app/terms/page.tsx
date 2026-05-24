// app/terms/page.tsx
"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    FaFileContract,
    FaHandshake,
    FaShieldAlt,
    FaMoneyBillWave,
    FaCopyright,
    FaExclamationTriangle,
    FaGavel,
    FaEnvelope,
    FaArrowLeft,
    FaCheckCircle
} from 'react-icons/fa';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TermsAndConditions = () => {
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
            id: "acceptance",
            icon: <FaHandshake />,
            title: "1. Acceptance of Terms",
            content: [
                "By accessing and using this website (codewithahsan.vercel.app) or engaging my freelance services, you agree to be bound by these Terms and Conditions.",
                "If you do not agree with any part of these terms, please do not use this website or engage my services.",
                "I reserve the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the new terms.",
                "These terms apply to all visitors, users, and clients who access or use my services."
            ]
        },
        {
            id: "services",
            icon: <FaFileContract />,
            title: "2. Services Offered",
            content: [
                "I provide professional web development services including but not limited to:",
                "• Front-end Development (React, Next.js, HTML/CSS, JavaScript)",
                "• Back-end Development (Laravel, Node.js, PHP, APIs)",
                "• Full-Stack Web Application Development",
                "• E-Commerce Website Development",
                "• UI/UX Design and Implementation",
                "• Website Maintenance and Support",
                "• API Development and Integration",
                "All services are provided on a project basis with specific deliverables outlined in individual project agreements."
            ]
        },
        {
            id: "project-terms",
            icon: <FaCheckCircle />,
            title: "3. Project Terms & Agreements",
            content: [
                "Project Proposal: Before starting any project, a detailed proposal will be provided outlining scope, timeline, deliverables, and costs.",
                "Project Agreement: Both parties must agree to the project terms before work begins. This may be via email confirmation or a formal contract.",
                "Scope Changes: Any changes to the original project scope may result in additional costs and extended timelines.",
                "Communication: Regular updates will be provided. Clients are expected to respond to queries within 48-72 hours to avoid project delays.",
                "Client Responsibilities: Clients must provide all necessary content, assets, and feedback in a timely manner.",
                "Revisions: Projects include a specified number of revision rounds. Additional revisions may incur extra charges."
            ]
        },
        {
            id: "payment",
            icon: <FaMoneyBillWave />,
            title: "4. Payment Terms",
            content: [
                "Deposit: A 50% upfront deposit is required before project commencement for projects over $500.",
                "Milestone Payments: For larger projects, payments may be structured around project milestones.",
                "Final Payment: The remaining balance is due upon project completion, before final files are delivered.",
                "Payment Methods: Payments can be made via bank transfer, PayPal, Wise, or other agreed-upon methods.",
                "Late Payments: Invoices not paid within 14 days may incur a 5% late fee. Work will be paused on overdue accounts.",
                "Currency: All prices are quoted in USD unless otherwise specified.",
                "Refunds: Deposits are non-refundable once work has commenced. Partial refunds may be considered on a case-by-case basis."
            ]
        },
        {
            id: "intellectual-property",
            icon: <FaCopyright />,
            title: "5. Intellectual Property Rights",
            content: [
                "Client Ownership: Upon full payment, the client receives full ownership rights to the final deliverables created specifically for their project.",
                "Third-Party Assets: Any third-party assets (stock images, fonts, plugins) are subject to their respective licenses.",
                "Portfolio Rights: I reserve the right to display completed work in my portfolio, case studies, and promotional materials unless otherwise agreed in writing.",
                "Source Code: Source code ownership transfers to the client upon full payment unless otherwise specified.",
                "Pre-existing Materials: Any pre-existing code, frameworks, or tools I bring to the project remain my intellectual property.",
                "Confidentiality: I will maintain confidentiality of client's proprietary information and business data."
            ]
        },
        {
            id: "warranties",
            icon: <FaShieldAlt />,
            title: "6. Warranties & Support",
            content: [
                "Bug Fixes: I provide 30 days of free bug fixes after project completion for issues related to my work.",
                "Compatibility: Websites are developed to work on modern browsers (Chrome, Firefox, Safari, Edge) and are responsive across devices.",
                "Third-Party Services: I am not responsible for issues caused by third-party services, hosting providers, or plugins.",
                "Ongoing Support: Extended support and maintenance packages are available for an additional fee.",
                "No Guarantee: While I strive for the best results, I cannot guarantee specific business outcomes such as increased traffic, sales, or rankings.",
                "Backup: Clients are advised to maintain their own backups. I am not responsible for data loss after project handover."
            ]
        },
        {
            id: "liability",
            icon: <FaExclamationTriangle />,
            title: "7. Limitation of Liability",
            content: [
                "To the maximum extent permitted by law, I shall not be liable for any indirect, incidental, special, consequential, or punitive damages.",
                "My total liability for any claim arising from services shall not exceed the amount paid by the client for the specific project.",
                "I am not liable for any damages resulting from:",
                "• Client's misuse of delivered work",
                "• Unauthorized modifications made by client or third parties",
                "• Hosting, domain, or server issues beyond my control",
                "• Third-party software, plugins, or service failures",
                "• Force majeure events (natural disasters, pandemics, etc.)"
            ]
        },
        {
            id: "termination",
            icon: <FaGavel />,
            title: "8. Termination",
            content: [
                "Client Termination: Clients may terminate a project at any time with written notice. Payment is due for all work completed up to the termination date.",
                "My Termination: I reserve the right to terminate a project if:",
                "• Payments are significantly overdue",
                "• The client becomes unresponsive for more than 30 days",
                "• The project scope significantly changes without agreement",
                "• The client engages in abusive or unethical behavior",
                "Upon termination, all completed work and assets will be delivered after payment for work done is received.",
                "Deposits are non-refundable in case of client-initiated termination after work has begun."
            ]
        },
        {
            id: "governing-law",
            icon: <FaGavel />,
            title: "9. Governing Law",
            content: [
                "These Terms and Conditions are governed by and construed in accordance with the laws of Pakistan.",
                "Any disputes arising from these terms or related services shall be resolved through:",
                "• First, good faith negotiation between parties",
                "• Second, mediation if negotiation fails",
                "• Third, arbitration or legal proceedings in Pakistan if mediation fails",
                "Both parties agree to attempt to resolve disputes amicably before pursuing legal action."
            ]
        },
        {
            id: "contact",
            icon: <FaEnvelope />,
            title: "10. Contact Information",
            content: [
                "For any questions regarding these Terms and Conditions, please contact me:",
                "Name: Ahsan Arshad",
                "Email: ahsanarshad291@gmail.com",
                "WhatsApp: +92 301 3421018",
                "Location: Punjab, Pakistan",
                "Response Time: I typically respond within 24-48 hours on business days."
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950">
            {/* Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 opacity-5">
                    <div className="h-full w-full bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(180deg,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />
                </div>
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-cyan-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-500/5 rounded-full blur-3xl" />
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
                                href="/privacy"
                                className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                            >
                                Privacy Policy →
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
                            <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-500/30 mb-6">
                                <FaFileContract className="w-8 h-8 text-blue-400" />
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                                    Terms &
                                </span>
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 mt-2">
                                    Conditions
                                </span>
                            </h1>

                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                Please read these terms carefully before using my services. By engaging my freelance services
                                or using this website, you agree to be bound by these terms.
                            </p>

                            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
                                <span className="px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50">
                                    📅 Last Updated: {lastUpdated}
                                </span>
                                <span className="px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50">
                                    ⏱️ 10 min read
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Quick Navigation */}
                {/* <section className="pb-12">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/50" data-aos="fade-up">
                                <h3 className="text-lg font-bold text-white mb-4">📑 Quick Navigation</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                                    {sections.map((section, index) => (
                                        <a
                                            key={section.id}
                                            href={`#${section.id}`}
                                            className="p-3 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800 transition-all text-center group"
                                        >
                                            <span className="text-gray-400 group-hover:text-blue-400 text-xs">
                                                {section.title.split('.')[0]}.
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* Terms Sections */}
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
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="scroll-mt-24"
                                >
                                    <div className="p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800/50 hover:border-gray-700/50 transition-all">
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-500/30 flex-shrink-0">
                                                <div className="text-blue-400 text-xl">{section.icon}</div>
                                            </div>
                                            <h2 className="text-xl lg:text-2xl font-bold text-white">
                                                {section.title}
                                            </h2>
                                        </div>

                                        <div className="space-y-4 text-gray-300 leading-relaxed">
                                            {section.content.map((paragraph, pIndex) => (
                                                <p
                                                    key={pIndex}
                                                    className={paragraph.startsWith('•') ? 'pl-4 text-gray-400' : ''}
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

                {/* Agreement Section */}
                <section className="pb-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/30 text-center">
                                <FaHandshake className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Agreement Confirmation
                                </h3>
                                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                                    By using this website or engaging my services, you acknowledge that you have read,
                                    understood, and agree to be bound by these Terms and Conditions.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <Link
                                        href="/#hire"
                                        className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:opacity-90 transition-opacity"
                                    >
                                        I Agree - Hire Me
                                    </Link>
                                    <Link
                                        href="/privacy"
                                        className="px-8 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white font-semibold hover:bg-gray-700 transition-colors"
                                    >
                                        Read Privacy Policy
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
                                <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
                                    Privacy Policy
                                </Link>
                                <span>•</span>
                                <Link href="/" className="hover:text-cyan-400 transition-colors">
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

export default TermsAndConditions;