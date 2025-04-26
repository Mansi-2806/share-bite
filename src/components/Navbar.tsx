
import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Heart } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/bab37666-ae08-47f8-ba3a-a91dbd5fc62e.png" 
            alt="Share Bite Logo" 
            className="h-12 w-auto"
          />
          <div className="hidden md:block">
            <h1 className="text-xl font-bold text-sharebite-primary">Share Bite</h1>
            <p className="text-xs text-sharebite-dark">Every bite counts - pass it on</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sharebite-dark hover:text-sharebite-primary transition-colors font-medium">About Us</a>
          <a href="#donate" className="text-sharebite-dark hover:text-sharebite-primary transition-colors font-medium">Donate Food</a>
          <a href="#volunteer" className="text-sharebite-dark hover:text-sharebite-primary transition-colors font-medium">Volunteer</a>
          <a href="#track" className="text-sharebite-dark hover:text-sharebite-primary transition-colors font-medium">Track & Rewards</a>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-1 text-sharebite-primary">
            <MapPin size={16} />
            <span>Find Foodbanks</span>
          </Button>
          <Button className="bg-sharebite-primary hover:bg-sharebite-primary/90">
            <Heart size={16} className="mr-2" />
            <span>Donate Now</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
