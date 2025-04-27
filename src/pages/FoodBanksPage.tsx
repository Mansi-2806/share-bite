
import React from 'react';
import Header from '@/components/Header';
import FoodBankMap from '@/components/FoodBankMap';
import { MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FoodBanksPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-16">
        <Header 
          title="Find Nearby Food Banks: Connect and Support" 
          description="Locate food banks in your area. Schedule pickups and make a difference in your community."
          buttonText="Locate Food Banks"
          buttonIcon={<MapPin size={16} />}
        />
        <div className="container mx-auto px-4 mt-12">
          <FoodBankMap />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FoodBanksPage;
