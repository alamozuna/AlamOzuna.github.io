"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-azure-500/10 rounded-full blur-[120px] -z-10 animate-glow" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center text-center max-w-4xl mx-auto"
      >
        {/* Profile Image Container */}
        <div className="relative mb-8 group">
          <div className="absolute inset-0 bg-azure-500/20 rounded-full blur-2xl group-hover:bg-azure-500/40 transition-colors duration-500" />
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-azure-400/30 overflow-hidden glass p-1">
            <Image 
              src="/profile.jpeg" 
              alt="Alam Ozuna" 
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>
        </div>

        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-7xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
        >
          Alam Ozuna
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-azure-200 text-lg md:text-xl font-medium tracking-widest uppercase mb-6"
        >
          Senior Data Analyst
        </motion.p>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-10"
        >
          Specialized in Excel, Tableau, and Power BI. I transform raw data into 
          <span className="text-white"> high-end narrative artifacts </span> 
          designed for executive decision-making. No fluff, just precision.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a 
            href="mailto:alam_ozuna@outlook.com"
            className="flex items-center gap-2 px-6 py-3 rounded-full glass-azure text-azure-100 hover:bg-azure-500/20 transition-all duration-300 group"
          >
            <Mail className="w-4 h-4" />
            <span>alam_ozuna@outlook.com</span>
            <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </a>
          <a 
            href="https://www.linkedin.com/in/alam-antonio-ozuna-silva-b4648029a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full glass text-gray-300 hover:text-white transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <span>LinkedIn</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
