// components/HireMeSection.tsx
"use client";
import React, { useState, useEffect } from "react";
import {
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaFileAlt,
  FaWhatsapp,
  FaBriefcase,
  FaCalendar,
  FaCheckCircle,
  FaSpinner,
  FaExclamationTriangle
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const HireMeSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    projectType: "Front-End Website",
    budget: "Under $1,000"
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);
  const [statusMessage, setStatusMessage] = useState("");

  const projectTypes = [
    "Front-End Website",
    "Full-Stack Web Application",
    "E-Commerce Store",
    "Portfolio Website",
    "SaaS Platform",
    "API Development",
    "Other"
  ];

  const budgetRanges = [
    "Under $1,000",
    "$1,000 - $3,000",
    "$3,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000+",
    "To be discussed"
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handlePhoneChange = (value: string) => {
    setFormData((prev) => ({ ...prev, phone: value }));
    setErrors((prev) => ({ ...prev, phone: "" }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    let valid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
        valid = false;
      }
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Project details are required";
      valid = false;
    } else if (formData.message.length < 50) {
      newErrors.message = "Please provide more details (minimum 50 characters)";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/hire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setStatusMessage("Your inquiry has been sent! Check your email for confirmation.");

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          projectType: "Front-End Website",
          budget: "Under $1,000"
        });
      } else {
        setSubmitStatus("error");
        setStatusMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form Submission Error:", error);
      setSubmitStatus("error");
      setStatusMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
        setStatusMessage("");
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  return (
    <section id="hire" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-950 py-20">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(180deg,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-amber-600/10 to-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-red-600/10 to-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
              <span className="text-sm uppercase tracking-widest text-amber-400 font-medium">
                Get In Touch
              </span>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                Let's Build
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mt-2">
                Something Amazing
              </span>
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a project in mind? Let's collaborate to bring your vision to life.
            </p>
          </motion.div>
        </div>

        {/* Status Messages */}
        <AnimatePresence>
          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-8 max-w-2xl mx-auto"
            >
              <div className={`p-6 rounded-2xl backdrop-blur-sm border ${submitStatus === "success"
                ? "bg-gradient-to-br from-green-500/20 to-emerald-500/10 border-green-500/30"
                : "bg-gradient-to-br from-red-500/20 to-pink-500/10 border-red-500/30"
                }`}>
                <div className="flex items-center gap-4">
                  {submitStatus === "success" ? (
                    <FaCheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
                  ) : (
                    <FaExclamationTriangle className="w-8 h-8 text-red-400 flex-shrink-0" />
                  )}
                  <div>
                    <h3 className={`text-lg font-semibold mb-1 ${submitStatus === "success" ? "text-green-300" : "text-red-300"
                      }`}>
                      {submitStatus === "success" ? "Inquiry Sent Successfully!" : "Submission Failed"}
                    </h3>
                    <p className="text-gray-300 text-sm">{statusMessage}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 overflow-hidden shadow-2xl">
              <div className="p-6 border-b border-gray-800/50">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/10">
                    <FaBriefcase className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Project Inquiry</h3>
                    <p className="text-gray-400 text-sm">Fill out the form to get started</p>
                  </div>
                </div>
              </div>

              <div className="p-6 lg:p-8">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                          <FaUser className="inline w-4 h-4 mr-2" />
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 text-white placeholder-gray-500 transition-all duration-300 disabled:opacity-50 ${errors.name ? "border-red-500/50" : "border-gray-700/50"
                            }`}
                          placeholder="Enter your name"
                        />
                        {errors.name && (
                          <p className="text-red-400 text-sm mt-2">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                          <FaEnvelope className="inline w-4 h-4 mr-2" />
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 text-white placeholder-gray-500 transition-all duration-300 disabled:opacity-50 ${errors.email ? "border-red-500/50" : "border-gray-700/50"
                            }`}
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p className="text-red-400 text-sm mt-2">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Phone & Project Type */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                          <FaWhatsapp className="inline w-4 h-4 mr-2" />
                          WhatsApp Number
                        </label>
                        <PhoneInput
                          country={"pk"}
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          disabled={isSubmitting}
                          enableLongNumbers
                          countryCodeEditable={false}
                          inputProps={{ name: "phone" }}
                          inputStyle={{
                            width: "100%",
                            padding: "15px 15px 15px 60px",
                            borderRadius: "12px",
                            backgroundColor: "#1f2937",
                            border: errors.phone ? "1px solid #f87171" : "1px solid #374151",
                            color: "white",
                            fontSize: "14px"
                          }}
                          buttonStyle={{
                            backgroundColor: "#374151",
                            border: "none",
                            borderRadius: "12px 0 0 12px"
                          }}
                          dropdownStyle={{
                            backgroundColor: "#1f2937",
                            border: "1px solid #374151",
                            borderRadius: "12px"
                          }}
                        />
                        {errors.phone && (
                          <p className="text-red-400 text-sm mt-2">{errors.phone}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                          <FaBriefcase className="inline w-4 h-4 mr-2" />
                          Project Type
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-amber-500/50 text-white disabled:opacity-50"
                        >
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        <FaCalendar className="inline w-4 h-4 mr-2" />
                        Estimated Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-amber-500/50 text-white disabled:opacity-50"
                      >
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        <FaFileAlt className="inline w-4 h-4 mr-2" />
                        Project Details
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        rows={6}
                        className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl focus:ring-2 focus:ring-amber-500/50 text-white placeholder-gray-500 disabled:opacity-50 ${errors.message ? "border-red-500/50" : "border-gray-700/50"
                          }`}
                        placeholder="Describe your project in detail..."
                      />
                      <div className="flex justify-between items-center mt-2">
                        {errors.message ? (
                          <p className="text-red-400 text-sm">{errors.message}</p>
                        ) : (
                          <p className="text-gray-500 text-sm">
                            Minimum 50 characters ({formData.message.length}/50)
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Submit */}
                    <motion.button
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-3 ${isSubmitting
                        ? "bg-gray-700 cursor-not-allowed"
                        : "bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 shadow-lg hover:shadow-amber-500/25"
                        }`}
                    >
                      {isSubmitting ? (
                        <>
                          <FaSpinner className="w-5 h-5 animate-spin" />
                          Sending Your Inquiry...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="w-5 h-5" />
                          Send Project Inquiry
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Response Time */}
            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10">
                  <FaCalendar className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Response Time</h3>
                  <p className="text-gray-400 text-sm">Within 24 hours</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                I review all inquiries personally and respond with a detailed proposal.
              </p>
            </div>

            {/* Process */}
            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Our Process</h3>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Initial Consultation", desc: "Discuss project goals" },
                  { step: "2", title: "Proposal & Timeline", desc: "Detailed project plan" },
                  { step: "3", title: "Development Phase", desc: "Regular updates" },
                  { step: "4", title: "Launch & Support", desc: "Deployment & maintenance" }
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center">
                      <span className="text-amber-400 text-sm font-bold">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm">{item.title}</h4>
                      <p className="text-gray-500 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Contact */}
            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Direct Contact</h3>
              <p className="text-gray-400 text-sm mb-4">Prefer to talk directly?</p>
              <div className="space-y-3">
                <a
                  href="https://wa.me/923013421018"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-green-600/20 to-emerald-600/10 hover:from-green-600/30 border border-green-600/30 transition-all"
                >
                  <FaWhatsapp className="w-5 h-5 text-green-400" />
                  <div>
                    <div className="text-white font-medium">WhatsApp</div>
                    <div className="text-gray-400 text-sm">+92 301 3421018</div>
                  </div>
                </a>
                <a
                  href="mailto:ahsanarshad291@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-red-600/20 to-pink-600/10 hover:from-red-600/30 border border-red-600/30 transition-all"
                >
                  <FaEnvelope className="w-5 h-5 text-red-400" />
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <div className="text-gray-400 text-sm">ahsanarshad291@gmail.com</div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HireMeSection;