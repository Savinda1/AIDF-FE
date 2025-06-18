// src/components/Footer.jsx
import React from 'react';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-sky-900 via-indigo-900 to-sky-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-extrabold text-yellow-400">Horizone</h2>
          <p className="text-sm text-white/80 mt-2">
            Discover unforgettable stays and experiences tailored just for you.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-yellow-300">Quick Links</h3>
          <ul className="space-y-1 text-white/90">
            <li><a href="#" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-400">Explore Rooms</a></li>
            <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-yellow-300">Get in Touch</h3>
          <p className="text-white/80">amilasavindakumara@gmail.com</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="#" className="hover:text-yellow-400"><Facebook /></a>
            <a href="#" className="hover:text-yellow-400"><Instagram /></a>
            <a href="#" className="hover:text-yellow-400"><Twitter /></a>
            <a href="#" className="hover:text-yellow-400"><Mail /></a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-white/10 mt-8 pt-4 text-center text-sm text-white/70">
        &copy; {new Date().getFullYear()} AmilaStay. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
