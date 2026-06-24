"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRightLeft, Download, X, Menu } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pointer-events-none">
      <motion.div 
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        className="w-full bg-[#040406]/80 backdrop-blur-xl border border-white/[0.08] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] pointer-events-auto"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 flex items-center justify-center text-black shadow-lg shadow-cyan-500/20 group-hover:rotate-6 transition-transform duration-300">
                <ArrowRightLeft className="w-4.5 h-4.5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  AWP Post Status
                </span>
                <span className="text-[9px] text-cyan-400 font-mono tracking-wider -mt-1 font-bold">WORKFLOW ENGINE</span>
              </div>
            </Link>

            {/* Nav links (Desktop) */}
            <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
              <Link href="/" className="hover:text-white transition-colors duration-200 py-2 relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-200 group-hover:w-full" />
              </Link>
              <Link href="/features" className="hover:text-white transition-colors duration-200 py-2 relative group">
                All Features
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-200 group-hover:w-full" />
              </Link>
              <Link href="/resources" className="hover:text-white transition-colors duration-200 py-2 relative group">
                Resources
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-200 group-hover:w-full" />
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <Link
                href="/#download"
                className="relative inline-flex items-center justify-center px-5 py-2 rounded-xl text-sm font-bold text-white bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] group overflow-hidden"
              >
                <Download className="w-4 h-4 mr-2 text-cyan-400 group-hover:translate-y-[-1px] transition-transform duration-200" />
                Download Free
              </Link>
            </div>

            {/* Hamburger Menu (Mobile) */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden md:hidden border-t border-white/10 bg-[#040406]/95 backdrop-blur-2xl px-6 pt-2 pb-6 space-y-3 rounded-b-2xl"
            >
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/features"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                All Features
              </Link>
              <Link
                href="/resources"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                Resources
              </Link>
              <div className="pt-2">
                <Link
                  href="/#download"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center px-4 py-3 rounded-lg text-base font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 transition-opacity"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Free
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
