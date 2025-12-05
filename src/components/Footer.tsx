import React from 'react';
import { Activity, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">AI MedKit</span>
                <div className="text-xs text-blue-300">Medical AI Platform</div>
              </div>
            </div>
            <p className="text-white/70 mb-6 max-w-sm leading-relaxed">
              Revolutionizing healthcare with advanced AI diagnostic tools 
              and intelligent medical solutions for the modern practice.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-blue-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/medkit-ai/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-blue-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-blue-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-blue-400 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Platform</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-white/70 hover:text-white transition-colors">AI Features</a></li>
              <li><a href="#pricing" className="text-white/70 hover:text-white transition-colors">Pricing Plans</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">API Documentation</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Compliance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Medical Research</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">AI Training Materials</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Webinars</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">White Papers</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Developer Hub</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Support</h4>
            <ul className="space-y-3">
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">24/7 Live Support</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">System Status</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Early Access</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Implementation</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 mb-4 md:mb-0">
              <p>&copy; 2024 AI MedKit. All rights reserved. Revolutionizing healthcare with artificial intelligence.</p>
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">HIPAA Compliance</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 text-white/40 text-sm">
              <Activity className="h-4 w-4" />
              <span>Powered by Advanced Medical AI Technology</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;