"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Tag } from "lucide-react";

interface PortfolioCardProps {
  title: string;
  category: "Excel" | "Tableau" | "Power BI";
  image: string;
  description: string;
  tools: string[];
  githubUrl: string;
  className?: string;
  onImageClick?: (image: string) => void;
}

export default function PortfolioCard({ title, category, image, description, tools, githubUrl, className = "", onImageClick }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative group bg-surface-container-low rounded-bento overflow-hidden border border-white/5 hover:border-azure-500/30 transition-all duration-500 flex flex-col h-full ${className}`}
    >
      {/* Background Glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-azure-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Image Section */}
      <div 
        className="relative h-64 overflow-hidden shrink-0 cursor-zoom-in"
        onClick={() => onImageClick?.(image)}
      >
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-700" 
        />
        
        {/* Gradient Overlay & Hover State */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20">
             <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs font-semibold text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                Ver imagen completa
             </div>
        </div>

        {/* Solid Gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent pointer-events-none" />
        
        {/* Badge */}
        <div className="absolute top-4 left-4 flex gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-background/60 backdrop-blur-md border border-white/10 text-azure-200">
                {category}
            </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 relative flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-semibold text-white group-hover:text-azure-200 transition-colors duration-300">
            {title}
          </h3>
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 -mr-2 text-gray-500 hover:text-azure-400 transition-colors bg-white/5 hover:bg-white/10 rounded-lg"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
          {description}
        </p>

        {/* Tech Stack / Tools */}
        <div className="mt-auto pt-6 border-t border-white/5">
          <div className="flex items-center gap-2 mb-3">
            <Tag className="w-3 h-3 text-azure-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-azure-400/60">
              Stack & Methodology
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span 
                key={tool} 
                className="px-2 py-0.5 rounded bg-surface-container-highest border border-white/5 text-[11px] text-gray-300 group-hover:border-azure-500/20 group-hover:text-azure-100 transition-all"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
