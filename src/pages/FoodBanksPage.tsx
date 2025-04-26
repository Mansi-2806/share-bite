
import React from 'react';
import Header from '@/components/Header';
import FoodBankMap from '@/components/FoodBankMap';
import { MapPin } from 'lucide-react';

const FoodBanksPage = () => {
  return (
    <div>
      <Header 
        title="Find Nearby Food Banks: Connect and Support" 
        description="Locate food banks in your area. Schedule pickups and make a difference in your community."
        buttonText="Locate Food Banks"
        buttonIcon={<MapPin size={16} />}
      />
      <div className="container mx-auto px-4 mt-12">
        <FoodBankMap />
      </div>
    </div>
  );
};

export default FoodBanksPage;
