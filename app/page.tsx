"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { featuresData } from "../data/features";
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
  Share2,
  Network,
  TrendingUp,
  CalendarClock,
  Clock,
  BookOpen,
  FileX
} from "lucide-react";

const iconMap: Record<string, any> = {
  Network, TrendingUp, CalendarClock, Clock, BookOpen, FileX
};

// Framer Motion Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
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

const fadeScaleVariants: Variants = {
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
    <div className="relative min-h-screen bg-transparent text-slate-100 font-sans overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      {/* Deep Space Background Mesh Gradient */}
      <div className="absolute inset-0 -z-10 bg-transparent overflow-hidden">
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

        {/* Hero Trust Factor */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center pt-8 space-y-2"
        >
          <div className="flex items-center space-x-2 text-sm text-slate-300 font-medium bg-black/40 px-5 py-2.5 rounded-full border border-white/10 backdrop-blur-md shadow-xl">
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="pl-1">Trusted by <span className="text-white font-bold">10,000+</span> WordPress users</span>
          </div>
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
                "inset 0 0 20px rgba(255, 255, 255, 0.05), 0 0 35px rgba(6, 182, 212, 0.2), 0 0 60px rgba(99, 102, 241, 0.12)",
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
            {/* Video Container */}
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover" 
                src="https://www.w3schools.com/html/mov_bbb.mp4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040406]/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Ecosystem/Compatibility Marquee Section */}
      <section className="bg-gradient-to-b from-black/40 to-[#030305] border-y border-white/[0.08] py-12 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 mb-10 text-center relative z-10">
          <h2 className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-white to-slate-400">
            Seamlessly Integrates With Your Stack
          </h2>
        </div>
        
        {/* Infinite scrolling marquee */}
        <div className="relative w-full flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center space-x-12 text-slate-400 font-bold text-lg">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="flex items-center space-x-12 ml-12">
                <div className="flex items-center space-x-3 hover:text-white transition-colors duration-300">
                  <svg className="w-8 h-8 text-[#E64980]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.372 0 0 5.372 0 12c0 6.626 5.372 12 12 12s12-5.372 12-12c0-6.626-5.372-12-12-12ZM9 17H7V7H9Zm8 0H11V15h6Zm0-4H11V11h6Zm0-4H11V7h6Z"/></svg>
                  <span>Elementor</span>
                </div>
                <div className="flex items-center space-x-3 hover:text-white transition-colors duration-300">
                  <svg className="w-8 h-8 text-[#96588a]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M.754 9.58a.754.754 0 00-.754.758v2.525c0 .42.339.758.758.758h3.135l1.431.799-.326-.799h2.373a.757.757 0 00.758-.758v-2.525a.757.757 0 00-.758-.758H.754zm2.709.445h.03c.065.001.124.023.179.067a.26.26 0 01.103.19.29.29 0 01-.033.16c-.13.239-.236.64-.322 1.199-.083.541-.114.965-.094 1.267a.392.392 0 01-.039.219.213.213 0 01-.176.12c-.086.006-.177-.034-.263-.124-.31-.316-.555-.788-.735-1.416-.216.425-.375.744-.478.957-.196.376-.363.568-.502.578-.09.007-.166-.069-.233-.228-.17-.436-.352-1.277-.548-2.524a.297.297 0 01.054-.222c.047-.064.116-.095.21-.102.169-.013.265.065.288.238.103.695.217 1.284.336 1.766l.727-1.387c.066-.126.15-.192.25-.199.146-.01.237.083.273.28.083.441.188.817.315 1.136.086-.844.233-1.453.44-1.828a.255.255 0 01.218-.147zm1.293.36c.056 0 .116.006.18.02.232.05.411.177.53.386.107.18.161.395.161.654 0 .343-.087.654-.26.94-.2.332-.459.5-.781.5a.88.88 0 01-.18-.022.763.763 0 01-.531-.384 1.287 1.287 0 01-.158-.659c0-.342.085-.655.258-.937.202-.333.462-.498.78-.498zm2.084 0c.056 0 .116.006.18.02.236.05.411.177.53.386.107.18.16.395.16.654 0 .343-.086.654-.259.94-.2.332-.459.5-.781.5a.88.88 0 01-.18-.022.763.763 0 01-.531-.384 1.287 1.287 0 01-.16-.659c0-.342.087-.655.26-.937.202-.333.462-.498.78-.498zm4.437.047c-.305 0-.546.102-.718.304-.173.203-.256.49-.256.856 0 .395.086.697.256.906.17.21.418.316.744.316.315 0 .559-.107.728-.316.17-.21.256-.504.256-.883s-.087-.673-.26-.879c-.176-.202-.424-.304-.75-.304zm-1.466.002a1.13 1.13 0 00-.84.326c-.223.22-.332.499-.332.838 0 .362.108.658.328.88.22.223.505.336.861.336.103 0 .22-.016.346-.052v-.54c-.117.034-.216.051-.303.051a.545.545 0 01-.422-.177c-.106-.12-.16-.278-.16-.48 0-.19.053-.348.156-.468a.498.498 0 01.397-.181c.103 0 .212.015.332.049v-.537a1.394 1.394 0 00-.363-.045zm12.414 0a1.135 1.135 0 00-.84.326c-.223.22-.332.499-.332.838 0 .362.108.658.328.88.22.223.506.336.861.336.103 0 .22-.016.346-.052v-.54c-.116.034-.216.051-.303.051a.545.545 0 01-.422-.177c-.106-.12-.16-.278-.16-.48 0-.19.053-.348.156-.468a.498.498 0 01.397-.181c.103 0 .212.015.332.049v-.537a1.394 1.394 0 00-.363-.045zm-9.598.06l-.29 2.264h.579l.156-1.559.395 1.559h.412l.379-1.555.164 1.555h.603l-.304-2.264h-.791l-.12.508c-.03.13-.06.264-.087.4l-.067.352a29.97 29.97 0 00-.258-1.26h-.771zm2.768 0l-.29 2.264h.579l.156-1.559.396 1.559h.412l.375-1.555.165 1.555h.603l-.305-2.264h-.789l-.119.508c-.03.13-.06.264-.086.4l-.066.352c-.063-.352-.15-.771-.26-1.26h-.771zm3.988 0v2.264h.611v-1.031h.012l.494 1.03h.645l-.489-1.019a.61.61 0 00.37-.552.598.598 0 00-.25-.506c-.167-.123-.394-.186-.68-.186h-.713zm3.377 0v2.264H24v-.483h-.63v-.414h.54v-.468h-.54v-.416h.626v-.483H22.76zm-4.793.004v2.264h1.24v-.483h-.627v-.416h.541v-.468h-.54v-.415h.622v-.482h-1.236zm2.025.432c.146.003.25.025.313.072.063.046.091.12.091.227 0 .156-.135.236-.404.24v-.54zm-15.22.011c-.104 0-.205.069-.301.211a1.078 1.078 0 00-.2.639c0 .096.02.2.06.303.049.13.117.198.196.215.083.016.173-.02.27-.106.123-.11.205-.273.252-.492.016-.077.023-.16.023-.246 0-.097-.02-.2-.06-.303-.05-.13-.116-.198-.196-.215a.246.246 0 00-.045-.006zm2.083 0c-.103 0-.204.069-.3.211a1.078 1.078 0 00-.2.639c0 .096.02.2.06.303.049.13.117.198.196.215.083.016.173-.02.27-.106.123-.11.205-.273.252-.492.013-.077.023-.16.023-.246 0-.097-.02-.2-.06-.303-.05-.13-.116-.198-.196-.215a.246.246 0 00-.045-.006zm4.428.006c.233 0 .354.218.354.66-.004.273-.038.46-.098.553a.293.293 0 01-.262.139.266.266 0 01-.242-.139c-.056-.093-.084-.28-.084-.562 0-.436.11-.65.332-.65Z"/></svg>
                  <span>WooCommerce</span>
                </div>
                <div className="flex items-center space-x-3 hover:text-white transition-colors duration-300">
                  <svg className="w-8 h-8" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path fill="#00E3A0" d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0z"/><path fill="#FFF" d="M185.3 162.7v-69.4h-38v21.1h15.2v27.2h-15.2v21.1h38zm-54.3-69.4h-24.1c-14.7 0-22.8 8.1-22.8 22.8v23.8c0 14.7 8.1 22.8 22.8 22.8h24.1v-21.1h-16.6c-4.4 0-6.1-1.7-6.1-6.1v-10.4h22.7v-10.8h-22.7v-10.4c0-4.4 1.7-6.1 6.1-6.1h16.6v-21.1zm-48.4 69.4L61.5 93.3H40l-21.1 69.4h20.1l5.4-19.4h15.4l5.4 19.4h20.4zm-30.8-37.1l-4.1-15.2-4.1 15.2h8.2z"/></svg>
                  <span>ACF</span>
                </div>
                <div className="flex items-center space-x-3 hover:text-white transition-colors duration-300">
                  <svg className="w-8 h-8" viewBox="0 0 142 165" xmlns="http://www.w3.org/2000/svg"><path fill="#0073FF" d="M71.21.32L0 41.36v82l71.21 41.04 71.22-41.04v-82L71.21.32zm0 82.08L24.58 55.43l46.63-26.86 46.64 26.86-46.64 26.97zm0 16.32l46.64-26.98v53.7L71.21 152.3V98.72zm-16.14-9.33L8.44 62.43v53.7l46.63 26.86V89.39z"/></svg>
                  <span>Crocoblock</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-specific Categories Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-cyan-400 uppercase tracking-widest"
          >
            Use Cases
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 bg-[length:200%_auto] animate-text-gradient"
          >
            Tailored For Every Industry
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { id: "general", icon: "📝", title: "General & Blog", subtitle: "9 Workflow States" },
            { id: "woocommerce", icon: "🛒", title: "WooCommerce Store", subtitle: "5 Workflow States" },
            { id: "real-estate", icon: "🏡", title: "Real Estate Portals", subtitle: "5 Workflow States" },
            { id: "job-portal", icon: "💼", title: "Job Portals / Careers", subtitle: "6 Workflow States" },
            { id: "directory", icon: "📍", title: "Business Directories", subtitle: "3 Workflow States" },
            { id: "event", icon: "📅", title: "Events & Calendars", subtitle: "2 Workflow States" },
            { id: "education", icon: "🎓", title: "Education & Courses", subtitle: "2 Workflow States" },
            { id: "automotive", icon: "🚗", title: "Automotive & Rentals", subtitle: "2 Workflow States" },
            { id: "restaurant", icon: "🍔", title: "Restaurants & Menus", subtitle: "3 Workflow States" },
          ].map((category, index) => (
            <Link href={`/categories/${category.id}`} key={category.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                className={`group flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                  index === 0 
                    ? "bg-[#040406] border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.1)]" 
                    : "bg-[#07070a]/60 border-white/5 hover:bg-[#0a0a0e] hover:border-cyan-500/30"
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-3xl transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className={`font-bold text-base transition-colors duration-300 ${index === 0 ? "text-cyan-400" : "text-white group-hover:text-cyan-400"}`}>
                      {category.title}
                    </h3>
                    <p className="text-slate-500 text-xs font-medium mt-0.5">
                      {category.subtitle}
                    </p>
                  </div>
                </div>
                <div className="flex items-center text-cyan-400 text-sm font-bold opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  View <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Feature Grid / Interactive Showcase */}
      <section id="features" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Core Capabilities</h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 bg-[length:200%_auto] animate-text-gradient">
            Workflow Engines Crafted For Growth
          </p>
          <p className="text-slate-400 text-base">
            Bring true editor governance to your editorial workflow. Secure publishing permissions, schedule automations, and eliminate mistakes.
          </p>
        </div>

        {/* Dynamic Top Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.slice(0, 6).map((feature) => {
            const IconComponent = feature.iconName && iconMap[feature.iconName] ? iconMap[feature.iconName] : PlusCircle;
            return (
              <Link href={`/features/${feature.id}`} key={feature.id}>
                <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.04] hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                    {feature.description}
                  </p>
                  <div className="text-xs font-semibold text-cyan-400 flex items-center space-x-1 mt-auto">
                    <span>Learn more</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
          <Link 
            href="/features" 
            className="inline-flex items-center justify-center px-8 py-3 rounded-xl text-base font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] group"
          >
            Explore All 37 Features
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
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
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 bg-[length:200%_auto] animate-text-gradient">
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

      {/* Testimonials / Trust Section */}
      <section id="reviews" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 border-t border-white/[0.08]">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center justify-center gap-2">
            <Star className="w-4 h-4 fill-amber-400" /> 
            Loved by the Community
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 bg-[length:200%_auto] animate-text-gradient">
            See What Our Users Are Saying
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent hover:border-white/20 transition-colors flex flex-col">
            <div className="flex space-x-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              "This plugin completely changed how our editorial team works. We no longer have accidental publishes from guest authors. The status restriction feature is exactly what we needed!"
            </p>
            <div className="flex items-center space-x-3 mt-auto">
              <div className="w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
                JD
              </div>
              <div>
                <span className="block text-sm font-bold text-white">John Doe</span>
                <span className="block text-xs text-slate-500">Managing Editor</span>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent hover:border-white/20 transition-colors flex flex-col">
            <div className="flex space-x-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              "The custom email notifications are a lifesaver. Now my copywriters know exactly when a post is ready for review without me having to slack them every time."
            </p>
            <div className="flex items-center space-x-3 mt-auto">
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                SA
              </div>
              <div>
                <span className="block text-sm font-bold text-white">Sarah Anderson</span>
                <span className="block text-xs text-slate-500">Content Strategist</span>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent hover:border-white/20 transition-colors flex flex-col">
            <div className="flex space-x-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              "I run a WooCommerce site with multiple store managers. AWP Post Status Switcher gave me the exact workflow control I was looking for. Brilliant and lightweight."
            </p>
            <div className="flex items-center space-x-3 mt-auto">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                MK
              </div>
              <div>
                <span className="block text-sm font-bold text-white">Mike K.</span>
                <span className="block text-xs text-slate-500">Store Owner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section id="faq" className="py-20 md:py-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Common Inquiries</h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 bg-[length:200%_auto] animate-text-gradient">
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
