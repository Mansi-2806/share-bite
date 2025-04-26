
import React from 'react';
import Header from '@/components/Header';
import VolunteerForm from '@/components/VolunteerForm';
import { Users } from 'lucide-react';

const VolunteerPage = () => {
  return (
    <div>
      <Header 
        title="Become a Volunteer: Be the Change" 
        description="Join our mission to reduce food waste and support communities. Your time can make a real difference."
        buttonText="Join Our Team"
        buttonIcon={<Users size={16} />}
      />
      <div className="container mx-auto px-4 mt-12">
        <VolunteerForm />
      </div>
    </div>
  );
};

export default VolunteerPage;
