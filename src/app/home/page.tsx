"use client";
import React, { useEffect, useState } from "react";
import Introsection from "@/app/Components/Home/Introsection";
import Aboutsection from "@/app/Components/Home/Aboutsection";
import SkillsSection from "@/app/Components/Home/SkillsSection";
import ExperienceSection from "@/app/Components/Home/ExperienceSection";
import PortfolioSection from "@/app/Components/Home/PortfolioSection";
import HireMeSection from "@/app/Components/Home/HireMeSection";
import Navbar from "@/app/Components/Home/Navbar";
import Footer from "@/app/Components/Home/Footer";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";


const HomeSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate load time, or use actual logic if needed
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <>




      <Navbar />

      <Introsection />
      <Aboutsection />
      <SkillsSection />
      <ExperienceSection />
      <PortfolioSection />
      <HireMeSection />

      <Footer />


    </>
  );
};

export default HomeSection;
