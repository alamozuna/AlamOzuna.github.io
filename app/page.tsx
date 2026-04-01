"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import HeroSection from "@/src/components/HeroSection";
import PortfolioCard from "@/src/components/PortfolioCard";

const projects = [
  {
    title: "Adventure Works Dashboard",
    category: "Excel" as const,
    image: "/adventure-works.jpeg",
    description: "Ever wondered what $5.7M in revenue looks like when you break it down? This project dives into the AdventureWorks transactional dataset — over 3,000 records — to uncover revenue trends, profit margins, and unit performance across time. I built a dynamic Excel dashboard featuring monthly profit tracking, time-series visualizations, and KPI summaries, all powered by advanced formulas (nested IFs, INDEX/MATCH, VLOOKUP). The result: a clear, interactive view of business health with a 43.5% profit margin story told through 8 custom charts.",
    tools: ["Excel (XLSM)", "VLOOKUP", "INDEX/MATCH", "Time-Series Analysis", "Data Visualization"],
    githubUrl: "https://github.com/alamozuna/Alam-Ozuna-s-Portfolio/blob/main/Adventure%20Work%20Dashboard(Excel%20Project(Alam%20Ozuna).xlsm"
  },
  {
    title: "Amazon Sales Analysis",
    category: "Excel" as const,
    image: "/amazon-sales.jpeg",
    description: "This one follows the full data analyst workflow from start to finish. Starting with 5,000 raw transaction records spanning 6 years (2019–2024), I documented every step — from data cleaning and null handling to exploration and final dashboard delivery. The project tracks nearly $1M+ in yearly sales across multiple regions and product categories, with monthly and yearly trend breakdowns. What makes it stand out is the transparency: a dedicated cleaning log and exploration sheet show exactly how the data was transformed before any visual was created.",
    tools: ["Excel (XLSX)", "Data Cleaning", "Exploratory Analysis", "Dashboard Design"],
    githubUrl: "https://github.com/alamozuna/Alam-Ozuna-s-Portfolio/blob/main/Amazon%20Sales%20Data%20Analysis(Portfolio%20Project)(Alam%20Ozuna).xlsx"
  },
  {
    title: "Bikes Sales Dashboard",
    category: "Excel" as const,
    image: "/bikes-sales.jpeg",
    description: "Who's buying bikes, and what do they have in common? That's the question behind this project. Using a dataset of 1,000+ customer records, I segmented buyers by age group, gender, and income level to find purchasing patterns. The analysis revealed that bike buyers earn $2–3K more on average than non-buyers, with clear demographic trends across age brackets. Built entirely in Excel with nested IF formulas for custom age categorization, pivot tables for aggregation, and a clean dashboard that tells the story at a glance.",
    tools: ["Excel (XLSX)", "Pivot Tables", "Customer Segmentation", "Demographic Analysis"],
    githubUrl: "https://github.com/alamozuna/Alam-Ozuna-s-Portfolio/blob/main/Bikes%20Sales%20Dashboard(Excel%20Project)(Alam%20Ozuna).xlsx"
  },
  {
    title: "Airbnb Market Analysis",
    category: "Tableau" as const,
    image: "/airbnb-market.jpeg",
    description: "A deep dive into the Airbnb rental market built entirely in Tableau. This project features 5 analytical worksheets feeding into one cohesive interactive dashboard, backed by a 9.4 MB embedded dataset. With 31 custom calculated measures, the analysis explores pricing trends, geographic distribution, and listing performance — all designed for the end user to filter and explore on their own. It's a showcase of how Tableau's visual power can turn a large, messy dataset into an intuitive, self-service analytics experience.",
    tools: ["Tableau", "Calculated Fields", "Interactive Dashboard", "Geospatial Analysis"],
    githubUrl: "https://github.com/alamozuna/Alam-Ozuna-s-Portfolio/blob/main/AirBnB%20Full%20Project(Tableu%20Profect)(Alam%20Ozuna).twbx"
  },
  {
    title: "Data Professional Survey Dashboard",
    category: "Power BI" as const,
    image: "/data-survey.jpeg",
    description: "What does the data profession actually look like from the inside? This Power BI dashboard analyzes real survey responses from data professionals, covering topics like salary distribution, job satisfaction, preferred technologies, and career paths. The project leverages DAX measures, multi-table relationships, and the Innovate theme for a polished, professional look. It's both a technical demonstration of Power BI's modeling capabilities and a genuinely interesting snapshot of the data industry landscape.",
    tools: ["Power BI", "DAX", "Data Modeling", "Survey Analysis"],
    githubUrl: "https://github.com/alamozuna/Alam-Ozuna-s-Portfolio/blob/main/Data%20Professional%20Survey%20Dashboard(Portfolio%20Project)(Alam%20Ozuna).pbix"
  }
];

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen pb-20">
      {/* Hero Section */}
      <HeroSection />

      {/* Portfolio Grid Section */}
      <section className="px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-azure-400 mb-2">
                Selected Work
              </h2>
              <p className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
                Case Study Deep Dives
              </p>
            </div>
            <p className="text-gray-400 max-w-sm text-sm">
              A selection of tactical data solutions built with a focus on executive insights and actionable outcomes.
            </p>
          </div>

          {/* Bento Grid Styling */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <PortfolioCard
                key={project.title}
                {...project}
                className={index === 0 ? "lg:col-span-2" : ""}
                onImageClick={setSelectedImage}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-background/80 backdrop-blur-xl cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-colors z-50"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedImage} 
                alt="Full Preview" 
                fill 
                className="object-contain bg-surface-container-low" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer / Connect */}
      <footer className="mt-40 px-6 py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Alam Ozuna</h3>
            <p className="text-gray-500 font-mono text-sm tracking-widest uppercase">
              The Quantified Lens © 2026
            </p>
          </div>
          
          <div className="flex gap-8">
            <a href="mailto:alam_ozuna@outlook.com" className="text-gray-400 hover:text-white transition-colors">
              Email
            </a>
            <a href="https://www.linkedin.com/in/alam-antonio-ozuna-silva-b4648029a/" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Resume
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
