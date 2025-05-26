import React from "react";
import { motion } from "framer-motion";
import facebook_icon from "./images/facebook_icon.png";
import insta_icon from "./images/insta_icon.png";
import twitch_icon from "./images/twitch_icon.png";
import youtube_icon from "./images/youtube_icon.png";

function Footer() {
  const socialIcons = [
    { src: facebook_icon, alt: "Facebook" },
    { src: insta_icon, alt: "Instagram" },
    { src: youtube_icon, alt: "YouTube" },
    { src: twitch_icon, alt: "Twitch" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center text-2xl font-bold mb-10">
          Need help? <span className="text-yellow-400">Call 0731342112</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-base text-gray-300">
          <div>
            <div className="text-yellow-400 text-2xl font-montserrat font-bold mb-4">QuickAssist</div>
            <div className="flex gap-6 mt-4">
              {socialIcons.map((icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="transition-transform duration-300"
                >
                  <img src={icon.src} alt={icon.alt} className="w-8 h-8" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-white text-xl font-semibold mb-3">Quick Links</div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Our Services</a></li>
              <li><a href="#" className="hover:text-white">Register as Professional</a></li>
              <li><a href="#" className="hover:text-white">Login / Sign up</a></li>
            </ul>
          </div>

          <div>
            <div className="text-white text-xl font-semibold mb-3">Support</div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
            </ul>
          </div>

          <div>
            <div className="text-white text-xl font-semibold mb-3">Contact</div>
            <ul className="space-y-2">
              <li><a href="mailto:contact@abc.com" className="hover:text-white">contact@abc.com</a></li>
              <li><a href="tel:+911201234211" className="hover:text-white">+91 1201234211</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 mt-12">
          &copy; 2025 QuickAssist. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
