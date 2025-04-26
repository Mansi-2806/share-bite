
import React from 'react';
import Header from '@/components/Header';
import DonationForm from '@/components/DonationForm';
import { Heart } from 'lucide-react';

const DonationPage = () => {
  return (
    <div>
      <Header 
        title="Donate Surplus Food: Making Every Bite Count" 
        description="Transform your excess food into hope. Help us reduce waste and feed those in need."
        buttonText="Start Donating"
        buttonIcon={<Heart size={16} />}
      />
      <div className="container mx-auto px-4 mt-12">
        <DonationForm />
      </div>
    </div>
  );
};

export default DonationPage;
