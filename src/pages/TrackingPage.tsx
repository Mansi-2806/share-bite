
import React from 'react';
import Header from '@/components/Header';
import TrackingSection from '@/components/TrackingSection';
import { Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const TrackingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-16">
        <Header 
          title="Track Your Donations: Your Impact Matters" 
          description="See how your food donations are making a difference. Earn rewards and track your contributions."
          buttonText="View Rewards"
          buttonIcon={<Star size={16} />}
        />
        <div className="container mx-auto px-4 mt-12">
          <TrackingSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrackingPage;
