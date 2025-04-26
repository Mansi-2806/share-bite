
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-white to-sharebite-light">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col space-y-6 max-w-xl">
          <div className="space-y-3">
            <h1 className="text-3xl md:text-5xl font-extrabold text-sharebite-dark leading-tight">
              From Surplus to Support: <span className="text-sharebite-primary">Bridging Food and Need</span>
            </h1>
            <p className="text-lg md:text-xl text-sharebite-dark/70 mt-4">
              Every bite counts - pass it on. Join us in reducing food waste while feeding those in need.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-sharebite-primary hover:bg-sharebite-primary/90">
              Donate Surplus Food
            </Button>
            <Button size="lg" variant="outline" className="border-sharebite-secondary text-sharebite-secondary hover:bg-sharebite-secondary hover:text-white">
              Become a Volunteer
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-sharebite-primary">1000+</h3>
              <p className="text-sm text-sharebite-dark/70">Meals Donated</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-sharebite-primary">50+</h3>
              <p className="text-sm text-sharebite-dark/70">Food Banks</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-sharebite-primary">200+</h3>
              <p className="text-sm text-sharebite-dark/70">Happy Donors</p>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-full bg-sharebite-primary/10 animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Food Donation" 
              className="rounded-3xl shadow-xl object-cover w-full h-full"
            />
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-3 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-sharebite-secondary flex items-center justify-center text-white font-bold">
                  <span>+</span>
                </div>
                <div>
                  <p className="text-sm font-semibold">Join 200+ donors</p>
                  <p className="text-xs text-sharebite-dark/60">Make a difference today</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
