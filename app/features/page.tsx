"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { featuresData, featureCategories } from '../../data/features';
import { 
  ArrowLeft, Search, Filter, ChevronDown, PlusCircle, ChevronLeft, ChevronRight,
  Network, TrendingUp, CalendarClock, Clock, BookOpen, FileX, 
  Columns, Users, Archive, ShoppingCart, Zap, Award, Tag, Home, Star, 
  ArrowDownCircle, Eye, CheckCircle, Lock, AlertCircle, Globe, Briefcase, PauseCircle, Box,
  BadgeCheck, Flag, MapPin, CalendarRange, CalendarX, GraduationCap, ShieldCheck, ChefHat, Leaf, Flame
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Network, TrendingUp, CalendarClock, Clock, BookOpen, FileX, Columns, Users, Archive, 
  ShoppingCart, Zap, Award, Tag, Home, Star, ArrowDownCircle, Eye, CheckCircle, 
  Lock, AlertCircle, Globe, Briefcase, PauseCircle, Box,
  BadgeCheck, Flag, MapPin, CalendarRange, CalendarX, GraduationCap, ShieldCheck, ChefHat, Leaf, Flame
};

const slideShowData = [
  {
    title: "Advanced Workflow Controls",
    subtitle: "Manage permissions effortlessly",
    bg: "from-cyan-500/20 to-blue-500/20",
    icon: <Lock className="w-16 h-16 text-cyan-400 mb-4" />
  },
  {
    title: "Automate Your Pipeline",
    subtitle: "Time-decay and Expiration Rules",
    bg: "from-purple-500/20 to-pink-500/20",
    icon: <CalendarClock className="w-16 h-16 text-purple-400 mb-4" />
  },
  {
    title: "Boost E-commerce Sales",
    subtitle: "Flash Sales & Trending Tags",
    bg: "from-emerald-500/20 to-teal-500/20",
    icon: <ShoppingCart className="w-16 h-16 text-emerald-400 mb-4" />
  }
];

export default function FeaturesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("A-Z");
  const [visibleCount, setVisibleCount] = useState(8);
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll function for categories
  const scrollCategories = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Slideshow effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideShowData.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Filter and sort logic
  const filteredFeatures = featuresData
    .filter(feature => selectedCategory === "All" || feature.category === selectedCategory)
    .filter(feature => 
      feature.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      feature.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "A-Z") return a.title.localeCompare(b.title);
      if (sortOrder === "Z-A") return b.title.localeCompare(a.title);
      return 0;
    });

  const visibleFeatures = filteredFeatures.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 8);
  };

  return (
    <div className="min-h-screen bg-[#040406] text-slate-100 font-sans pt-24 pb-16 relative">
      {/* Global Background Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] opacity-70 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Hero Section */}
        <div className="relative pt-12 pb-24 mb-16 border-b border-white/5">
          {/* Animated Background Icons (GSAP Style) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            <motion.div
              animate={{ y: [0, -30, 0], x: [0, 20, 0], rotate: [0, 45, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute top-10 left-[10%] text-cyan-500/10"
            >
              <Zap className="w-32 h-32" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 40, 0], x: [0, -30, 0], rotate: [0, -45, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-10 right-[15%] text-purple-500/10"
            >
              <Lock className="w-40 h-40" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -20, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 right-[40%] text-blue-500/10"
            >
              <CheckCircle className="w-20 h-20" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 30, 0], rotate: [0, 90, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute top-40 left-[40%] text-emerald-500/10"
            >
              <Box className="w-24 h-24" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Explore All <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Powerful Features
              </span>
            </h1>
            <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
              Discover how AWP Post Status Switcher transforms your WordPress workflow. From automation to deep e-commerce integrations, explore all 37 capabilities tailored for growth.
            </p>
          </div>
          
          {/* Slideshow */}
          <div className="relative h-[300px] md:h-[400px] rounded-2xl border border-white/10 bg-[#0d0f16] overflow-hidden shadow-2xl flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute inset-0 bg-gradient-to-br ${slideShowData[currentSlide].bg} flex flex-col items-center justify-center p-8 text-center`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  {slideShowData[currentSlide].icon}
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-2xl font-bold text-white mb-2"
                >
                  {slideShowData[currentSlide].title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="text-slate-300"
                >
                  {slideShowData[currentSlide].subtitle}
                </motion.p>
              </motion.div>
            </AnimatePresence>
            
            {/* Slide Indicators */}
            <div className="absolute bottom-6 flex space-x-2">
              {slideShowData.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? "bg-cyan-400 w-6" : "bg-white/30 hover:bg-white/50"}`}
                />
              ))}
            </div>
            </div>
          </div>
        </div>

      </div>

      {/* Filters and Controls - Full Width Sticky Background */}
      <div className="sticky top-0 z-40 bg-[#040406]/95 backdrop-blur-2xl border-b border-white/10 w-full pt-24 pb-4 shadow-2xl mb-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          
          {/* Category Tabs with Scroll Arrows */}
          <div className="flex items-center gap-2 w-full md:w-auto overflow-hidden">
            <button 
              onClick={() => scrollCategories('left')}
              className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-cyan-500/20 hover:text-cyan-400 hover:border-cyan-500/30 transition-all flex-shrink-0"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div 
              ref={scrollRef}
              className="flex overflow-x-auto gap-2 hide-scrollbar scroll-smooth w-full md:w-[600px] lg:w-[700px]"
              style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
            >
              <button
                onClick={() => { setSelectedCategory("All"); setVisibleCount(8); }}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex-shrink-0 ${
                  selectedCategory === "All" 
                    ? "bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.4)]" 
                    : "bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                All
              </button>
              {featureCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => { setSelectedCategory(cat); setVisibleCount(8); }}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex-shrink-0 ${
                    selectedCategory === cat 
                      ? "bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.4)]" 
                      : "bg-white/5 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <button 
              onClick={() => scrollCategories('right')}
              className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-cyan-500/20 hover:text-cyan-400 hover:border-cyan-500/30 transition-all flex-shrink-0"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Search and Sort */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-cyan-400 transition-colors" />
              <input
                type="text"
                placeholder="Search features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder-slate-500"
              />
            </div>
            
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-slate-300 focus:outline-none focus:border-cyan-500/50 transition-all appearance-none cursor-pointer"
            >
              <option value="A-Z" className="bg-black text-white">Sort A-Z</option>
              <option value="Z-A" className="bg-black text-white">Sort Z-A</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Results Counter */}
        <div className="mb-6 text-slate-400 text-sm font-medium">
          Showing <span className="text-cyan-400">{visibleFeatures.length}</span> of <span className="text-cyan-400">{filteredFeatures.length}</span> features
        </div>

        {/* Features Grid */}
        {visibleFeatures.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            <AnimatePresence mode="popLayout">
              {visibleFeatures.map((feature, index) => {
                const IconComponent = feature.iconName && iconMap[feature.iconName] ? iconMap[feature.iconName] : Box;
                return (
                  <motion.div
                    layout
                    key={feature.id}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200, 
                      damping: 20, 
                      mass: 0.8,
                      opacity: { duration: 0.3 },
                      delay: index * 0.04 
                    }}
                  >
                    <Link href={`/features/${feature.id}`} className="block h-full">
                      <div className="bg-[#0d0f16] border border-white/[0.05] hover:border-cyan-500/50 hover:bg-[#131722] hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300 rounded-2xl p-6 h-full flex flex-col group cursor-pointer relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:to-cyan-500/5 transition-colors duration-500 pointer-events-none" />
                        
                        <div className="flex items-center justify-between mb-5 z-10">
                          <div className="w-12 h-12 rounded-xl bg-slate-800/50 border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-all duration-300 shadow-sm">
                            <IconComponent className="w-6 h-6 text-slate-300 group-hover:text-cyan-400 transition-colors" />
                          </div>
                          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider bg-white/5 px-2 py-1 rounded">
                            {feature.category.split(' ')[0]}
                          </span>
                        </div>
                        
                        <h3 className="font-bold text-[17px] mb-3 text-slate-100 group-hover:text-white transition-colors z-10">
                          {feature.title}
                        </h3>
                        
                        <p className="text-sm text-slate-400 leading-relaxed flex-grow z-10">
                          {feature.description}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10">
            <Search className="w-12 h-12 text-slate-500 mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-bold text-white mb-2">No features found</h3>
            <p className="text-slate-400">Try adjusting your search query or changing the category filter.</p>
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < filteredFeatures.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center justify-center px-8 py-3 rounded-xl text-sm font-bold text-white bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 group"
            >
              <PlusCircle className="w-5 h-5 mr-2 text-cyan-400 group-hover:rotate-90 transition-transform duration-300" />
              Load More Features
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
