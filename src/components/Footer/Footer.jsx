import React from 'react';
import Logo from '../Logo/Logo'
const Footer = () => {
  return (
    <footer className="bg-primary-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
          <div className="flex items-center gap-3 text-slate-800">
            <Logo />
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              href="#"
            >
              About Us
            </a>
            <a
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              href="#"
            >
              Contact
            </a>
            <a
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              href="#"
            >
              FAQ
            </a>
            <a
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
          </nav>
          <p className="text-sm text-slate-500 mt-8 md:mt-0">
            © 2024 HostelBites. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;