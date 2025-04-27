
import React from 'react';
import Header from '@/components/Header';
import DonationForm from '@/components/DonationForm';
import { Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const DonationPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-16">
        <Header 
          title="Donate Surplus Food: Making Every Bite Count" 
          description="Transform your excess food into hope. Help us reduce waste and feed those in need."
          buttonText="Start Donating"
          buttonIcon={<Heart size={16} />}
        />
        <div className="container mx-auto px-4 mt-12">
          <DonationForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DonationPage;
