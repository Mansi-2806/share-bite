
import React from 'react';
import { Link } from "react-router-dom";
import { Info, Home, Users, Star, LogIn, LogOut, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img 
              src="/lovable-uploads/bab37666-ae08-47f8-ba3a-a91dbd5fc62e.png" 
              alt="Share Bite Logo" 
              className="h-12 w-auto"
            />
          </Link>
          <div className="hidden md:block">
            <h1 className="text-xl font-bold text-sharebite-primary">Share Bite</h1>
            <p className="text-xs text-sharebite-dark">Every bite counts - pass it on</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8 ml-auto">
          <Link to="/" className="text-sharebite-dark hover:text-sharebite-primary transition-colors font-medium flex items-center gap-2">
            <Home size={16} />
            Home
          </Link>
          <Link to="/about" className="text-sharebite-dark hover:text-sharebite-primary transition-colors font-medium flex items-center gap-2">
            <Info size={16} />
            About Us
          </Link>
          <Link to="/volunteer" className="text-sharebite-dark hover:text-sharebite-primary transition-colors font-medium flex items-center gap-2">
            <Users size={16} />
            Volunteer
          </Link>
          <Link to="/track" className="text-sharebite-dark hover:text-sharebite-primary transition-colors font-medium flex items-center gap-2">
            <Star size={16} />
            Track Impact
          </Link>
          <Link to="/rewards" className="text-sharebite-dark hover:text-sharebite-primary transition-colors font-medium flex items-center gap-2">
            <Star size={16} />
            View Rewards
          </Link>
          
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-sharebite-dark font-medium flex items-center gap-2">
                <User size={16} />
                {user.email}
              </span>
              <Button 
                onClick={handleSignOut}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <LogOut size={16} />
                Sign Out
              </Button>
            </div>
          ) : (
            <Link to="/auth">
              <Button variant="default" size="sm" className="flex items-center gap-2">
                <LogIn size={16} />
                Sign In
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
