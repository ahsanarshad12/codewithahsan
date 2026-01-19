"use client";

import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

const FloatingActions = () => {
    const phone = "923013421018";
    const message = encodeURIComponent(
        "Welcome to Full Stack Developer Services. How may I help you?"
    );

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 animate-float">
            {/* WhatsApp Button */}
            <a
                href={`https://api.whatsapp.com/send?phone=${phone}&text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-14 h-14 rounded-full
                   bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/30
                   transition-all duration-300 hover:scale-110"
                aria-label="Chat on WhatsApp"
            >
                <FaWhatsapp className="w-7 h-7 text-white" />
            </a>

            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="group flex items-center justify-center w-14 h-14 rounded-full
                   bg-gray-900/70 backdrop-blur-sm border border-gray-700
                   shadow-lg shadow-cyan-500/20 hover:border-cyan-500
                   transition-all duration-300 hover:scale-110"
            >
                <FaArrowUp className="w-5 h-5 text-cyan-400 group-hover:animate-bounce" />
            </button>
        </div>
    );
};

export default FloatingActions;
