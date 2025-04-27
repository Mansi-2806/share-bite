
import React from 'react';
import Header from '@/components/Header';
import VolunteerForm from '@/components/VolunteerForm';
import { Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const VolunteerPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-16">
        <Header 
          title="Become a Volunteer: Be the Change" 
          description="Join our mission to reduce food waste and support communities. Your time can make a real difference."
          buttonText="Join Our Team"
          buttonIcon={<Users size={16} />}
        />
        <div className="container mx-auto px-4 mt-12">
          <VolunteerForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VolunteerPage;
