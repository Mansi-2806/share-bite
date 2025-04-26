
import React from 'react';
import Header from '@/components/Header';
import TrackingSection from '@/components/TrackingSection';
import { Star } from 'lucide-react';

const TrackingPage = () => {
  return (
    <div>
      <Header 
        title="Track Your Donations: Your Impact Matters" 
        description="See how your food donations are making a difference. Earn rewards and track your contributions."
        buttonText="View Rewards"
        buttonIcon={<Star size={16} />}
      />
      <div className="container mx-auto px-4 mt-12">
        <TrackingSection />
      </div>
    </div>
  );
};

export default TrackingPage;
