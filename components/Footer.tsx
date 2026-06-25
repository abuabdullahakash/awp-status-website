import React from 'react';
import { ArrowRightLeft, Twitter, Github, Globe, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#030305] text-slate-500 border-t border-white/5 pt-32 pb-4">
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
  );
}
