import React from 'react';
import Logo from '../Logo/Logo'
const Footer = () => {
  return (
    <footer class="bg-primary-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
          <div class="flex items-center gap-3 text-slate-800">
            <Logo />
          </div>
          <nav class="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a
              class="text-sm font-medium text-slate-600 hover:text-primary-500 transition-colors"
              href="#"
            >
              About Us
            </a>
            <a
              class="text-sm font-medium text-slate-600 hover:text-primary-500 transition-colors"
              href="#"
            >
              Contact
            </a>
            <a
              class="text-sm font-medium text-slate-600 hover:text-primary-500 transition-colors"
              href="#"
            >
              FAQ
            </a>
            <a
              class="text-sm font-medium text-slate-600 hover:text-primary-500 transition-colors"
              href="#"
            >
              Terms of Service
            </a>
            <a
              class="text-sm font-medium text-slate-600 hover:text-primary-500 transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
          </nav>
          <p class="text-sm text-slate-500 mt-8 md:mt-0">
            © 2024 HostelBites. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;