
import React from 'react';
import Header from '@/components/Header';
import { Star } from 'lucide-react';

const RewardsPage = () => {
  return (
    <div>
      <Header 
        title="View Your Impact Rewards" 
        description="Track your contributions and unlock special rewards for making a difference in your community."
        buttonText="Check Rewards"
        buttonIcon={<Star size={16} />}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl text-sharebite-primary mb-4">🥉</div>
            <h3 className="text-xl font-bold mb-2">Bronze Donor</h3>
            <p className="text-gray-600">Donate 5 meals to unlock</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl text-sharebite-primary mb-4">🥈</div>
            <h3 className="text-xl font-bold mb-2">Silver Supporter</h3>
            <p className="text-gray-600">Donate 15 meals to unlock</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl text-sharebite-primary mb-4">🥇</div>
            <h3 className="text-xl font-bold mb-2">Gold Champion</h3>
            <p className="text-gray-600">Donate 30 meals to unlock</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardsPage;
