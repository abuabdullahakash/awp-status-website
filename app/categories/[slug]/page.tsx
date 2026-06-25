"use client";

import React, { use, useRef, useState } from "react";
import { notFound } from "next/navigation";
import { getCategoryBySlug, getFeaturesByCategory } from "@/data/categories";
import Header from "@/components/Header";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Play, Pause } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const category = getCategoryBySlug(slug);
  
  if (!category) {
    notFound();
  }

  const features = getFeaturesByCategory(category.categoryMatch);

  return (
    <div className="min-h-screen bg-[#040406] text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-50">
      <Header />

      <main className="pt-24 pb-20">
        {/* Dynamic Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24 border-b border-white/5">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[10%] left-[5%] w-[30rem] h-[30rem] bg-cyan-500/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-[10%] right-[5%] w-[40rem] h-[40rem] bg-blue-500/5 rounded-full blur-[120px]" />
            
            {/* GSAP-Style Floating Feature Shapes */}
            {[LucideIcons.LayoutTemplate, LucideIcons.Layers, LucideIcons.Workflow, LucideIcons.Box, LucideIcons.Cpu].map((Icon, i) => (
              <motion.div
                key={i}
                className="absolute text-white"
                style={{
                  top: `${Math.random() * 60 + 10}%`,
                  left: `${Math.random() * 80 + 5}%`,
                  opacity: 0.03,
                }}
                animate={{
                  y: [0, Math.random() * -50 - 20, 0],
                  x: [0, Math.random() * 30 + 10, 0],
                  rotate: [0, Math.random() * 45, -Math.random() * 45, 0]
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Icon className="w-32 h-32 md:w-48 md:h-48" strokeWidth={1} />
              </motion.div>
            ))}

            <div 
              className="absolute inset-0 opacity-[0.02]" 
              style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
              }} 
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center" style={{ perspective: "1000px" }}>
              {/* Left Side: Info */}
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                }}
                className="space-y-6"
              >
                <motion.div 
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-medium uppercase tracking-wider shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                >
                  <span className="text-xl">{category.icon}</span>
                  <span className="text-cyan-400 font-bold">{category.categoryMatch}</span>
                </motion.div>
                
                <motion.h1 
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500"
                >
                  {category.title}
                </motion.h1>
                
                <motion.p 
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed"
                >
                  {category.description}
                </motion.p>

                <motion.div 
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  className="flex flex-wrap items-center gap-4 pt-4"
                >
                  <div className="flex items-center text-sm font-bold text-white bg-white/5 border border-white/10 rounded-xl px-5 py-3 shadow-lg">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-3" />
                    {features.length} Premium Features Included
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Side: Video */}
              <motion.div 
                initial={{ opacity: 0, x: 50, rotateY: -15 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                className="relative group"
              >
                <motion.div 
                  animate={{ 
                    boxShadow: [
                      "inset 0 0 20px rgba(255, 255, 255, 0.03), 0 0 25px rgba(6, 182, 212, 0.12)",
                      "inset 0 0 20px rgba(255, 255, 255, 0.03), 0 0 45px rgba(6, 182, 212, 0.25)",
                      "inset 0 0 20px rgba(255, 255, 255, 0.03), 0 0 25px rgba(6, 182, 212, 0.12)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000" 
                />
                
                <div 
                  className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl cursor-pointer"
                  onClick={() => {
                    if (videoRef.current) {
                      if (isPlaying) {
                        videoRef.current.pause();
                      } else {
                        videoRef.current.play();
                      }
                    }
                  }}
                >
                  {/* Spinning Animated Multi-Color Border */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-[100%] z-0"
                    style={{
                      background: "conic-gradient(from 0deg, transparent 0%, #06b6d4 20%, #3b82f6 40%, #ec4899 60%, #8b5cf6 80%, transparent 100%)"
                    }}
                  />

                  {/* Inner Video Container */}
                  <div className="absolute inset-[3px] bg-black rounded-[14px] overflow-hidden z-10">
                    {/* Using a placeholder video since the URL is a standard sample. In production, use your actual video */}
                    <video 
                      ref={videoRef}
                      loop 
                      muted 
                      playsInline
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 rounded-[14px]"
                    >
                      <source src={category.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Play/Pause Overlay */}
                    <div className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
                      <div className="w-16 h-16 rounded-full bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center text-cyan-400 transform group-hover:scale-110 transition-transform duration-300">
                        {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Zig-Zag Features Listing */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Included Capabilities</h2>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 bg-[length:200%_auto] animate-text-gradient">
              Everything you need for {category.title}
            </p>
          </div>

          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            const Icon = feature.iconName ? (LucideIcons as any)[feature.iconName] : LucideIcons.CheckCircle;

            return (
              <div 
                key={feature.id} 
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center group`}
              >
                {/* Image/Visual Side */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />
                  <div className="relative bg-[#0a0a0e] border border-white/10 rounded-2xl aspect-[4/3] overflow-hidden flex flex-col items-center justify-center p-8 shadow-xl">
                    {/* Placeholder for feature screenshot */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900 via-black to-black" />
                    
                    {/* Visual mockup of the feature */}
                    <div className="relative w-full max-w-sm bg-black border border-white/10 rounded-xl shadow-2xl p-6 transform group-hover:scale-105 transition-transform duration-500">
                      <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-white/5">
                        <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                          {Icon && <Icon className="w-6 h-6" />}
                        </div>
                        <div>
                          <div className="h-2 w-24 bg-white/20 rounded mb-2" />
                          <div className="h-2 w-16 bg-white/10 rounded" />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="h-8 w-full bg-white/5 rounded-lg border border-white/5 flex items-center px-4">
                          <div className="h-1.5 w-1/3 bg-cyan-500/50 rounded" />
                        </div>
                        <div className="h-8 w-full bg-white/5 rounded-lg border border-white/5 flex items-center px-4">
                          <div className="h-1.5 w-1/2 bg-blue-500/50 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text/Info Side */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-white mb-2">
                    {Icon && <Icon className="w-5 h-5" />}
                  </div>
                  <h3 className="text-3xl font-bold text-white tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="pt-4">
                    <Link 
                      href={`/features/${feature.id}`}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/btn"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}
