
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Heart, Users } from "lucide-react";
import { Link } from 'react-router-dom';

interface HeaderProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonVariant?: 'primary' | 'secondary';
  buttonIcon?: React.ReactNode;
  backgroundVariant?: 'light' | 'gradient';
}

const Header: React.FC<HeaderProps> = ({
  title = "From Surplus to Support: Bridging Food and Need",
  description = "Every bite counts - pass it on. Join us in reducing food waste while feeding those in need.",
  buttonText = "Donate Surplus Food",
  buttonVariant = 'primary',
  buttonIcon = <Heart size={16} />,
  backgroundVariant = 'gradient'
}) => {
  return (
    <section className={`relative pt-24 pb-16 md:pt-32 md:pb-24 ${
      backgroundVariant === 'gradient' 
        ? 'bg-gradient-to-br from-white to-sharebite-light' 
        : 'bg-sharebite-light'
    }`}>
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-sharebite-dark leading-tight mb-4">
            {title.split(':').map((part, index) => (
              <React.Fragment key={index}>
                {index === 1 ? (
                  <span className="text-sharebite-primary">{part}</span>
                ) : (
                  part
                )}
                {index === 0 && ': '}
              </React.Fragment>
            ))}
          </h1>
          <p className="text-lg md:text-xl text-sharebite-dark/70 mb-6">
            {description}
          </p>
          <Button 
            size="lg" 
            className={
              buttonVariant === 'primary' 
                ? 'bg-sharebite-primary hover:bg-sharebite-primary/90' 
                : 'border-sharebite-secondary text-sharebite-secondary hover:bg-sharebite-secondary hover:text-white'
            }
            asChild
          >
            <Link to="/donate">
              {buttonIcon}
              <span className="ml-2">{buttonText}</span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
