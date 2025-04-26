
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sharebite-dark text-white pt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/bab37666-ae08-47f8-ba3a-a91dbd5fc62e.png" 
                alt="Share Bite Logo" 
                className="h-12 w-auto bg-white p-1 rounded"
              />
              <div>
                <h3 className="font-bold text-xl">Share Bite</h3>
                <p className="text-xs text-gray-300">Every bite counts - pass it on</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              From Surplus to Support: Bridging Food and Need. We connect excess food with those who need it most.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#donate" className="hover:text-white transition-colors">Donate Food</a></li>
              <li><a href="#volunteer" className="hover:text-white transition-colors">Become a Volunteer</a></li>
              <li><a href="#map" className="hover:text-white transition-colors">Find Food Banks</a></li>
              <li><a href="#track" className="hover:text-white transition-colors">Track Donations</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 mt-1" />
                <span>123 Community Lane, Food City, FC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} />
                <a href="mailto:info@sharebite.org" className="hover:text-white transition-colors">info@sharebite.org</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-890</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe to our newsletter to receive updates on our initiatives and impact.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Your email" 
                className="bg-white/10 border-white/20 placeholder:text-gray-400 text-white" 
              />
              <Button className="bg-sharebite-primary hover:bg-sharebite-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Share Bite. All rights reserved. | Every bite counts - pass it on</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
