"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  ArrowRight,
  Check,
  CheckCircle,
  Download,
  Sliders,
  ChevronRight,
  PlusCircle,
  ShieldAlert,
  Zap,
  Grid,
  Mail,
  Cpu,
  Menu,
  X,
  Star,
  Users,
  Settings,
  AlertCircle,
  Sparkles,
  ArrowRightLeft,
  FileText,
  Lock,
  Globe,
  CornerDownRight,
  Github,
  Twitter,
  ExternalLink,
  ChevronDown,
  Eye,
  Terminal,
  Activity,
  Play,
  Share2
} from "lucide-react";

// Framer Motion Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1] // Custom easeOutExpo
    }
  }
};

const fadeScaleVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 45 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [demoRole, setDemoRole] = useState<"Contributor" | "Author" | "Editor">("Author");
  const [selectedStatus, setSelectedStatus] = useState("In Progress");
  const [simulatorLogs, setSimulatorLogs] = useState<string[]>([
    "Workflow engine ready.",
    "Rules check: OK."
  ]);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const handleDemoStatus = (status: string) => {
    if (demoRole === "Contributor" && (status === "Published" || status === "Scheduled")) {
      setSimulatorLogs(prev => [
        `❌ Access Denied: Contributor cannot switch to '${status}'`,
        ...prev
      ]);
      return;
    }
    
    setSelectedStatus(status);
    setSimulatorLogs(prev => [
      `🔄 Status set to '${status}' by ${demoRole}`,
      `✉️ Triggered automation rule: Notify Admin`,
      ...prev
    ]);
  };

  const handleRoleChange = (role: "Contributor" | "Author" | "Editor") => {
    setDemoRole(role);
    if (role === "Contributor") {
      setSelectedStatus("Draft");
    } else if (role === "Author") {
      setSelectedStatus("In Progress");
    } else {
      setSelectedStatus("Ready to Publish");
    }
    setSimulatorLogs(prev => [
      `👤 Simulated role changed to: ${role}`,
      ...prev
    ]);
  };

  const faqData = [
    {
      question: "How does AWP Post Status Switcher prevent publishing errors?",
      answer: "By setting up Role-Based Status Restrictions, you can restrict users (like Guest Authors or Contributors) from directly publishing posts. They can only transition posts into 'Draft' or 'Pending Review'. Only Editors or Admins will see the 'Published' status options."
    },
    {
      question: "Can I send custom email notifications on status changes?",
      answer: "Yes! You can configure HTML email templates to automatically notify specific editors, copywriters, or administrators when a post changes from 'Draft' to 'Ready for SEO' or 'Pending Review'. "
    },
    {
      question: "Does it support Custom Post Types and WooCommerce?",
      answer: "Absolutely. AWP Post Status Switcher is built to support all Custom Post Types registered on your site. You can manage status workflows for portfolios, events, directory listings, or WooCommerce products seamlessly."
    },
    {
      question: "Can I automate status updates on a set schedule?",
      answer: "Yes, the scheduler rule engine allows you to set automatic transitions. For example, you can set a rule to change posts in the 'Event' category from 'Published' to 'Archived' 30 days after publication."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#040406] text-slate-100 font-sans overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      {/* Deep Space Background Mesh Gradient */}
      <div className="absolute inset-0 -z-10 bg-[#040406] overflow-hidden">
        {/* Mesh gradients at 10% opacity */}
        <div 
          className="absolute inset-0 opacity-40 mix-blend-screen"
          style={{
            backgroundImage: `
              radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.12) 0%, transparent 40%),
              radial-gradient(circle at 90% 10%, rgba(6, 182, 212, 0.12) 0%, transparent 40%),
              radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.10) 0%, transparent 55%),
              radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.08) 0%, transparent 45%),
              radial-gradient(circle at 20% 70%, rgba(99, 102, 241, 0.08) 0%, transparent 45%)
            `,
          }}
        />

        {/* Animated Light Beams / Spotlights */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[750px] -z-10 pointer-events-none">
          {/* Vertical spotlight beam */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.12),transparent_65%)]" />
          <motion.div 
            animate={{
              opacity: [0.12, 0.25, 0.12],
              scale: [0.95, 1.05, 0.95]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-1/4 right-1/4 h-[450px] bg-gradient-to-b from-indigo-500/10 via-cyan-500/5 to-transparent blur-3xl"
          />
        </div>

        {/* Subtle grid overlay with radial mask */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:3rem_3rem]" 
          style={{
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 35%, #000 60%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 35%, #000 60%, transparent 100%)"
          }}
        />
      </div>

      {/* Floating Glassmorphic Header (Navbar) */}
      <header className="fixed top-4 left-0 right-0 z-50 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pointer-events-none">
        <motion.div 
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          className="w-full bg-[#040406]/50 backdrop-blur-xl border border-white/[0.08] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] pointer-events-auto"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 flex items-center justify-center text-black shadow-lg shadow-cyan-500/20 group-hover:rotate-6 transition-transform duration-300">
                  <ArrowRightLeft className="w-4.5 h-4.5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-base tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                    AWP Post Status
                  </span>
                  <span className="text-[9px] text-cyan-400 font-mono tracking-wider -mt-1 font-bold">WORKFLOW ENGINE</span>
                </div>
              </div>

              {/* Nav links (Desktop) */}
              <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
                <a href="#" className="hover:text-white transition-colors duration-200 py-2 relative group">
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-200 group-hover:w-full" />
                </a>
                <a href="#video" className="hover:text-white transition-colors duration-200 py-2 relative group">
                  Product Video
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-200 group-hover:w-full" />
                </a>
                <a href="#features" className="hover:text-white transition-colors duration-200 py-2 relative group">
                  All Features
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-200 group-hover:w-full" />
                </a>
                <a href="#playground" className="hover:text-white transition-colors duration-200 py-2 relative group">
                  Live Simulator
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-200 group-hover:w-full" />
                </a>
                <a href="#faq" className="hover:text-white transition-colors duration-200 py-2 relative group">
                  FAQ
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-200 group-hover:w-full" />
                </a>
              </nav>

              {/* CTA Button */}
              <div className="hidden md:flex items-center">
                <a
                  href="#download"
                  className="relative inline-flex items-center justify-center px-5 py-2 rounded-xl text-sm font-bold text-white bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] group overflow-hidden"
                >
                  <Download className="w-4 h-4 mr-2 text-cyan-400 group-hover:translate-y-[-1px] transition-transform duration-200" />
                  Download Free
                </a>
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
                <a
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  Home
                </a>
                <a
                  href="#video"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  Product Video
                </a>
                <a
                  href="#features"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  All Features
                </a>
                <a
                  href="#playground"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  Live Simulator
                </a>
                <a
                  href="#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  FAQ
                </a>
                <div className="pt-2">
                  <a
                    href="#download"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center px-4 py-3 rounded-lg text-base font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 transition-opacity"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Free
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </header>

      {/* Hero Section */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative pt-32 pb-16 md:pt-40 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10"
      >
        {/* Version Badge */}
        <motion.div variants={itemVariants} className="inline-block">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 text-xs text-slate-300 font-medium tracking-wide shadow-inner backdrop-blur-md cursor-default transition-all duration-300">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>New Upgrade: Version 2.0 Released</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl sm:text-7xl lg:text-[84px] leading-[1.05] font-black tracking-tighter max-w-5xl mx-auto text-white"
        >
          Take{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 drop-shadow-[0_0_30px_rgba(6,182,212,0.25)] font-black">
            Absolute Control
          </span>{" "}
          Over Your WordPress Post Statuses
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          variants={itemVariants}
          className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          The ultimate SaaS-style status editor, scheduler, and restriction engine for WordPress. Secure publishing pipelines, automate notifications, and build beautiful custom status badges.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          <a
            href="#download"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-black bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 hover:from-cyan-300 hover:via-teal-300 hover:to-blue-400 transition-all duration-300 hover:scale-[1.02] shadow-[0_0_25px_rgba(6,182,212,0.25)] hover:shadow-[0_0_35px_rgba(6,182,212,0.35)]"
          >
            Get Started For Free
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <a
            href="#playground"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            Launch Live Demo
          </a>
        </motion.div>

        {/* Looping Video Showcase (Centerpiece) */}
        <motion.div 
          variants={fadeScaleVariants}
          id="video" 
          className="pt-12 md:pt-16 max-w-5xl mx-auto relative group"
        >
          {/* Subtle glowing ring behind video */}
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500" />
          
          {/* Glowing Box Border Container */}
          <motion.div 
            animate={{
              boxShadow: [
                "inset 0 0 20px rgba(255, 255, 255, 0.03), 0 0 25px rgba(6, 182, 212, 0.12), 0 0 50px rgba(99, 102, 241, 0.08)",
                "inset 0 0 20px rgba(255, 255, 255, 0.03), 0 0 38px rgba(6, 182, 212, 0.22), 0 0 65px rgba(99, 102, 241, 0.18)",
                "inset 0 0 20px rgba(255, 255, 255, 0.03), 0 0 25px rgba(6, 182, 212, 0.12), 0 0 50px rgba(99, 102, 241, 0.08)"
              ]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative rounded-2xl border-[0.5px] border-white/20 bg-[#07070a]/45 backdrop-blur-xl p-1.5 shadow-2xl overflow-hidden"
          >
            {/* Top Dot Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-black/40">
              <div className="flex space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="px-6 py-0.5 rounded bg-white/[0.03] text-[10px] text-slate-400 font-mono tracking-wider">
                awp-post-status-switcher.mp4
              </div>
              <div className="w-8 h-2" />
            </div>

            {/* Video Container */}
            <div className="relative aspect-video w-full rounded-b-xl overflow-hidden bg-slate-950">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover rounded-b-xl" 
                src="https://www.w3schools.com/html/mov_bbb.mp4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040406]/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Play Badge overlay (cosmetic) */}
              <div className="absolute bottom-4 right-4 flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur border border-white/10 text-xs font-semibold text-cyan-400">
                <Play className="w-3.5 h-3.5 fill-cyan-400" />
                <span>Feature Showcase Loop</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Ecosystem/Compatibility Marquee Section */}
      <section className="bg-black/30 border-y border-white/[0.08] py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Plugged Into Your Favorite WordPress Ecosystem
          </p>
        </div>
        
        {/* Infinite scrolling marquee */}
        <div className="relative w-full flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center space-x-16 text-slate-400 font-semibold text-base">
            <span className="flex items-center space-x-2"><span className="text-cyan-400">⚡</span> <span>Gutenberg Editor</span></span>
            <span className="flex items-center space-x-2"><span className="text-cyan-400">⚡</span> <span>Elementor Builder</span></span>
            <span className="flex items-center space-x-2"><span className="text-cyan-400">⚡</span> <span>WooCommerce Products</span></span>
            <span className="flex items-center space-x-2"><span className="text-cyan-400">⚡</span> <span>Advanced Custom Fields (ACF)</span></span>
            <span className="flex items-center space-x-2"><span className="text-cyan-400">⚡</span> <span>Divi Builder</span></span>
            <span className="flex items-center space-x-2"><span className="text-cyan-400">⚡</span> <span>WPBakery Builder</span></span>
            
            {/* Repeated set for infinite look */}
            <span className="flex items-center space-x-2"><span className="text-cyan-400">⚡</span> <span>Gutenberg Editor</span></span>
            <span className="flex items-center space-x-2"><span className="text-cyan-400">⚡</span> <span>Elementor Builder</span></span>
            <span className="flex items-center space-x-2"><span className="text-cyan-400">⚡</span> <span>WooCommerce Products</span></span>
            <span className="flex items-center space-x-2"><span className="text-cyan-400">⚡</span> <span>Advanced Custom Fields (ACF)</span></span>
            <span className="flex items-center space-x-2"><span className="text-cyan-400">⚡</span> <span>Divi Builder</span></span>
            <span className="flex items-center space-x-2"><span className="text-cyan-400">⚡</span> <span>WPBakery Builder</span></span>
          </div>
        </div>
      </section>

      {/* Feature Grid / Interactive Showcase */}
      <section id="features" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Core Capabilities</h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Workflow Engines Crafted For Growth
          </p>
          <p className="text-slate-400 text-base">
            Bring true editor governance to your editorial workflow. Secure publishing permissions, schedule automations, and eliminate mistakes.
          </p>
        </div>

        {/* 6 Premium Neon Hover Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.04] hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300">
              <PlusCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Custom Post Statuses</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Add unlimited new publishing stages (e.g., "Ready for SEO", "Needs Translation", "Archived") to WordPress with custom colored indicators.
            </p>
            <div className="text-xs font-semibold text-cyan-400 flex items-center space-x-1">
              <span>Learn workflow integration</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.04] hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Role Restrictions</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Limit status change controls by WordPress user roles. Prevent junior authors or guest writers from accidentally publishing content.
            </p>
            <div className="text-xs font-semibold text-cyan-400 flex items-center space-x-1">
              <span>View authorization options</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.04] hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Automated Triggers</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Schedule transitions dynamically. Auto-downgrade event listings, archive old news, or revert categories automatically.
            </p>
            <div className="text-xs font-semibold text-cyan-400 flex items-center space-x-1">
              <span>Explore trigger rules</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4 */}
          <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.04] hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300">
              <Grid className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Bulk Status Switcher</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Batch update statuses for pages, posts, or custom post types inside the native WordPress posts list view with simple actions.
            </p>
            <div className="text-xs font-semibold text-cyan-400 flex items-center space-x-1">
              <span>See bulk edit demo</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 5 */}
          <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.04] hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Smart Email Alerts</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Send personalized email alerts when posts transition to specific statuses. Keep editors and authors dynamically connected.
            </p>
            <div className="text-xs font-semibold text-cyan-400 flex items-center space-x-1">
              <span>View email setups</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 6 */}
          <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.04] hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Custom Post Types</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Fully compatible with custom post type rules (WooCommerce, portfolios, event boards, reviews, projects) right out of the box.
            </p>
            <div className="text-xs font-semibold text-cyan-400 flex items-center space-x-1">
              <span>View developers API</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* Live Simulator Playground Section */}
      <section id="playground" className="py-20 md:py-24 bg-black/40 border-y border-white/[0.08] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Simulator Left Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-xs font-bold text-cyan-400 tracking-wide">
                <span>WIDGET SIMULATOR</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Try the Live Status Switcher Playground
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Interact with our actual settings emulator. Toggle user roles and choose custom status values to witness transition logics, email triggers, and status restrictions in real time.
              </p>
              
              {/* Core capabilities bullet list */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3 text-sm">
                  <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Interactive Role Permission Blocking</span>
                </div>
                <div className="flex items-start space-x-3 text-sm">
                  <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Real-time Trigger Notifications &amp; Alert Simulation</span>
                </div>
                <div className="flex items-start space-x-3 text-sm">
                  <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Dynamic WordPress Panel Replica</span>
                </div>
              </div>
            </div>

            {/* Interactive Widget Box Right */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl border border-white/10 bg-[#0d0d12] shadow-2xl overflow-hidden">
                {/* Header Dot */}
                <div className="flex justify-between items-center px-4 py-3.5 bg-[#09090c] border-b border-white/5">
                  <div className="flex items-center space-x-2">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono font-bold text-slate-300">AWP-SWITCHER-SIMULATOR v2.0</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 font-bold font-mono text-[9px] uppercase tracking-wider">
                    Operational
                  </span>
                </div>

                <div className="p-4 sm:p-6 space-y-6">
                  {/* Step 1: select roles */}
                  <div className="space-y-2.5">
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest">1. Select Target User Role:</span>
                    <div className="grid grid-cols-3 gap-2.5">
                      {(["Contributor", "Author", "Editor"] as const).map((r) => (
                        <button
                          key={r}
                          onClick={() => handleRoleChange(r)}
                          className={`py-2 px-3.5 rounded-lg text-xs font-bold border transition-all ${
                            demoRole === r
                              ? "bg-cyan-500 text-black border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)] font-black"
                              : "bg-[#14141c] text-slate-400 border-white/5 hover:border-white/10 hover:text-white"
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Post Panel */}
                  <div className="space-y-2.5">
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest">2. Change Status Dropdown:</span>
                    
                    <div className="rounded-xl border border-white/5 bg-[#14141c] p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <span className="block text-xs font-semibold text-slate-400">Post Title:</span>
                        <span className="block text-sm font-bold text-white">Advanced Gutenberg Blocks.docx</span>
                      </div>

                      {/* Dropdown Box */}
                      <div className="flex flex-wrap gap-2">
                        {["Draft", "In Progress", "Ready for SEO", "Published"].map((status) => (
                          <button
                            key={status}
                            onClick={() => handleDemoStatus(status)}
                            className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${
                              selectedStatus === status
                                ? "bg-cyan-500/10 text-cyan-400 border-cyan-400/50"
                                : "bg-black/40 text-slate-400 border-white/5 hover:border-white/10"
                            }`}
                          >
                            {status}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Simulated Output Logs */}
                  <div className="space-y-2">
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest">3. Activity Logs:</span>
                    <div className="rounded-xl bg-black border border-white/5 p-4 font-mono text-xs text-slate-300 h-28 overflow-y-auto space-y-1.5 scrollbar-thin">
                      {simulatorLogs.map((log, idx) => (
                        <div key={idx} className="flex items-start">
                          <span className="text-cyan-400 mr-2 flex-shrink-0">&gt;&gt;</span>
                          <span className={log.includes("❌") ? "text-rose-400" : log.includes("✉️") ? "text-amber-400" : "text-slate-300"}>
                            {log}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section id="faq" className="py-20 md:py-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Common Inquiries</h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Frequently Asked Questions
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = activeFAQ === idx;
            return (
              <div 
                key={idx}
                className="rounded-xl border border-white/5 bg-[#0a0a0f] overflow-hidden transition-all duration-300 hover:border-white/10"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex justify-between items-center p-5 text-left font-bold text-white hover:text-cyan-400 transition-colors"
                >
                  <span>{item.question}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${isOpen ? "rotate-180 text-cyan-400" : ""}`} />
                </button>
                
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Final Call to Action (CTA) Section */}
      <section id="download" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0c1020] to-slate-950 border border-white/10 px-8 py-16 text-center text-white overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(6,182,212,0.15),transparent)]" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white/5 text-cyan-400 text-xs font-semibold uppercase tracking-wider border border-white/10">
              <span>Secure Publishing Control</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1]">
              Ready to Secure &amp; Automate Your Workflow?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Unlock absolute control. Download AWP Post Status Switcher today and build safe, automated publishing pipelines on your WordPress site.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="#"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-90 shadow-xl shadow-cyan-500/10 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Free Version
              </a>
              <a
                href="#"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                Explore Pro Version
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto border-t border-white/5 text-xs text-slate-500">
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold text-white">10,000+</span>
                <span>Active Sites</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold text-white">4.9 / 5</span>
                <span>User Rating</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold text-white">100%</span>
                <span>Gutenberg Ready</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold text-white">Active</span>
                <span>Updates &amp; Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#030305] text-slate-500 border-t border-white/5 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          
          {/* Brand details */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center text-white">
                <ArrowRightLeft className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-lg text-white">AWP Status</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xs">
              Providing enterprise-grade WordPress post control triggers, role configurations, and automated email alerts.
            </p>
            <div className="flex space-x-4 pt-1">
              <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Github">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Globe">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div className="space-y-3">
            <span className="block text-xs font-bold text-white uppercase tracking-widest">Platform</span>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Plugin Core</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Premium Addons</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing Details</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Developer Logs</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className="space-y-3">
            <span className="block text-xs font-bold text-white uppercase tracking-widest">Resources</span>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Developer API</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Troubleshooting</a></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div className="space-y-3">
            <span className="block text-xs font-bold text-white uppercase tracking-widest">Company</span>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Affiliates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Rules</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
            </ul>
          </div>

          {/* Support Info */}
          <div className="space-y-3 text-xs sm:text-sm">
            <span className="block text-xs font-bold text-white uppercase tracking-widest">Helpdesk</span>
            <p className="text-slate-500">Need direct support?</p>
            <a href="#" className="inline-flex items-center text-xs font-semibold text-cyan-400 hover:text-cyan-300">
              Submit support ticket ➔
            </a>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 space-y-4 md:space-y-0">
          <div>
            &copy; {new Date().getFullYear()} AWP Post Status Switcher. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <span>WordPress Approved</span>
            <span>&middot;</span>
            <span className="flex items-center">
              Built by AWP Team <ExternalLink className="w-3 h-3 ml-1" />
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
