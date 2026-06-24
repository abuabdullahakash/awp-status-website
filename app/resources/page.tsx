"use client";

import React from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { BookOpen, Code2, Database, LayoutTemplate, Sparkles, TerminalSquare } from "lucide-react";

export default function ResourcesPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  return (
    <div className="min-h-screen pt-24 pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-h-[80vh] flex flex-col justify-center items-center">
        
        {/* Floating 3D Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              y: [0, -30, 0],
              rotate: [0, 5, 0],
              x: [0, 20, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] left-[10%] w-32 h-32 rounded-3xl bg-gradient-to-tr from-cyan-500/20 to-blue-500/5 backdrop-blur-3xl border border-cyan-500/20 shadow-[0_0_50px_rgba(6,182,212,0.3)] flex items-center justify-center transform -rotate-12"
          >
            <BookOpen className="w-12 h-12 text-cyan-400 opacity-80" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, 40, 0],
              rotate: [0, -10, 0],
              x: [0, -15, 0]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[20%] right-[15%] w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/5 backdrop-blur-3xl border border-indigo-500/20 shadow-[0_0_40px_rgba(99,102,241,0.3)] flex items-center justify-center transform rotate-12"
          >
            <Code2 className="w-10 h-10 text-indigo-400 opacity-80" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[20%] left-[20%] w-40 h-20 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/5 backdrop-blur-3xl border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.2)] flex items-center justify-center transform -rotate-6"
          >
            <TerminalSquare className="w-8 h-8 text-emerald-400 opacity-80" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, 30, 0],
              rotate: [0, -20, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-[10%] right-[25%] w-28 h-28 rounded-xl bg-gradient-to-bl from-rose-500/20 to-pink-500/5 backdrop-blur-3xl border border-rose-500/20 shadow-[0_0_40px_rgba(244,63,94,0.3)] flex items-center justify-center transform rotate-45"
          >
            <LayoutTemplate className="w-10 h-10 text-rose-400 opacity-80" />
          </motion.div>
        </div>

        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center relative z-20 space-y-8 max-w-4xl"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-4 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-slate-300">Developer Hub & Documentation</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
              Powerful
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 drop-shadow-[0_0_30px_rgba(6,182,212,0.4)]">
              Resources
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Dive into our comprehensive documentation, API references, and developer guides to unlock the full potential of the AWP Post Status Engine.
          </p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8"
          >
            <button className="px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
              Explore Docs
            </button>
            <button className="px-8 py-4 rounded-xl font-bold text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-300 w-full sm:w-auto flex items-center justify-center">
              <Database className="w-5 h-5 mr-2" />
              API Reference
            </button>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
