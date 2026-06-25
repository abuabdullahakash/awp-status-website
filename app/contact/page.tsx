"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageSquare, Send, CheckCircle2, ChevronDown } from "lucide-react";

const INQUIRY_CATEGORIES = [
  { id: "Technical Help", label: "Technical Help", icon: "🛠️", border: "border-blue-500/50", activeBg: "bg-blue-500/10" },
  { id: "License & Billing", label: "License & Billing", icon: "💳", border: "border-cyan-500/50", activeBg: "bg-cyan-500/10" },
  { id: "Custom Development", label: "Custom Development", icon: "🚀", border: "border-purple-500/50", activeBg: "bg-purple-500/10" },
  { id: "General / Partnership", label: "General / Partnership", icon: "🤝", border: "border-emerald-500/50", activeBg: "bg-emerald-500/10" },
  { id: "Feature Request", label: "Feature Request / Improvement", icon: "💡", border: "border-amber-500/50", activeBg: "bg-amber-500/10" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Technical Help",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0 });
  const [userAnswer, setUserAnswer] = useState("");
  const [captchaError, setCaptchaError] = useState(false);

  React.useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ num1, num2 });
    setUserAnswer("");
    setCaptchaError(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (parseInt(userAnswer) !== captcha.num1 + captcha.num2) {
      setCaptchaError(true);
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "Technical Help", message: "" });
      generateCaptcha();
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen bg-[#040406] text-white pt-24 pb-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-[40rem] h-[40rem] bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[5%] w-[35rem] h-[35rem] bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-[10%] left-[30%] w-[50rem] h-[50rem] bg-indigo-500/5 rounded-full blur-[150px]" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
          }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-6 uppercase tracking-wider">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500">
              How can we help you today?
            </h1>
            <p className="text-lg text-slate-400">
              Whether you have a technical question, want to request a custom feature, or have suggestions for improvement—we're here to listen.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-[#07070a]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Email Support</p>
                    <a href="mailto:support@awppoststatus.com" className="text-base font-medium text-white hover:text-cyan-400 transition-colors">
                      support@awppoststatus.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">General Inquiries</p>
                    <p className="text-base font-medium text-white">
                      Available Mon-Fri, 9am - 5pm EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                    <MapPin className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Headquarters</p>
                    <p className="text-base font-medium text-white">
                      123 Developer Way<br />
                      Tech District, NY 10001
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links or FAQ hint */}
            <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/10 border border-cyan-500/20 rounded-2xl p-8 shadow-xl">
              <h4 className="text-lg font-bold mb-2 text-white">Looking for quick answers?</h4>
              <p className="text-sm text-slate-400 mb-4">
                Check out our comprehensive documentation and FAQ section before reaching out. It might save you some time!
              </p>
              <a href="/resources" className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors">
                View Documentation &rarr;
              </a>
            </div>
          </motion.div>

          {/* Contact Form (Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-[#07070a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 lg:p-10 shadow-2xl relative overflow-hidden">
              {/* Form border top highlight */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" />
              
              <h3 className="text-2xl font-bold mb-8 text-white">Send us a Message</h3>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6 border border-green-500/30">
                    <CheckCircle2 className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-slate-400">
                    Thank you for reaching out. We've received your message and our team will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Subject/Topic */}
                  <div className="space-y-3">
                    <label className="block text-sm font-bold text-slate-300 uppercase tracking-wider">
                      Select Inquiry Category
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {INQUIRY_CATEGORIES.map((category) => {
                        const isSelected = formData.subject === category.id;
                        return (
                          <button
                            type="button"
                            key={category.id}
                            onClick={() => setFormData({ ...formData, subject: category.id })}
                            className={`flex flex-col items-start p-4 rounded-xl border text-left transition-all duration-300 ${
                              isSelected 
                                ? `${category.activeBg} ${category.border}` 
                                : "bg-black/30 border-white/5 hover:bg-black/50 hover:border-white/10"
                            }`}
                          >
                            <span className="text-xl mb-3">{category.icon}</span>
                            <span className={`text-sm font-medium ${isSelected ? "text-white" : "text-slate-400"}`}>
                              {category.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300">
                      Message Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all resize-none"
                      placeholder="Please describe your request, suggestion, or issue in detail..."
                    ></textarea>
                  </div>

                  {/* Security Check */}
                  <div className="bg-black/20 border border-white/5 rounded-xl p-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Security Check</span>
                        <div className="bg-blue-500/10 border border-blue-500/30 text-blue-400 px-3 py-1 rounded-lg font-mono text-sm font-bold">
                          {captcha.num1} + {captcha.num2} = ?
                        </div>
                      </div>
                      <button 
                        type="button" 
                        onClick={generateCaptcha}
                        className="text-xs text-slate-500 hover:text-white border-b border-dashed border-slate-500 hover:border-white transition-colors"
                      >
                        Refresh Equation
                      </button>
                    </div>
                    <div>
                      <input
                        type="number"
                        required
                        value={userAnswer}
                        onChange={(e) => {
                          setUserAnswer(e.target.value);
                          if (captchaError) setCaptchaError(false);
                        }}
                        className={`w-full bg-black/40 border rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none transition-all ${
                          captchaError 
                            ? "border-red-500/50 focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50" 
                            : "border-white/10 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50"
                        }`}
                        placeholder="Solve equation to verify you are human..."
                      />
                      {captchaError && (
                        <p className="text-red-400 text-xs mt-2">Incorrect answer. Please try again.</p>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center py-4 px-6 rounded-xl text-white font-bold transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] ${
                      isSubmitting 
                        ? "bg-slate-800 cursor-not-allowed opacity-70" 
                        : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-[1.01]"
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
