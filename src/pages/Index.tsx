
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DonationForm from '@/components/DonationForm';
import FoodBankMap from '@/components/FoodBankMap';
import VolunteerForm from '@/components/VolunteerForm';
import TrackingSection from '@/components/TrackingSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-16">
        <Hero />
        <section id="about" className="section-padding bg-white">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
              <p className="text-sharebite-dark/70">
                At Share Bite, we're dedicated to reducing food waste while addressing hunger in our communities.
                We collect surplus food from restaurants, households, grocery stores, and vegetable shops,
                and redistribute it to food banks and those in need.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-sharebite-light p-6 rounded-lg hover:shadow-md transition-all">
                <div className="bg-sharebite-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-sharebite-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Reduce Food Waste</h3>
                <p className="text-sharebite-dark/70">
                  We save edible food from being wasted and convert inedible food into organic fertilizers for farmers.
                </p>
              </div>
              
              <div className="text-center bg-sharebite-light p-6 rounded-lg hover:shadow-md transition-all">
                <div className="bg-sharebite-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-sharebite-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Help Those in Need</h3>
                <p className="text-sharebite-dark/70">
                  We ensure that excess food reaches NGOs, food banks, and communities who need it most.
                </p>
              </div>
              
              <div className="text-center bg-sharebite-light p-6 rounded-lg hover:shadow-md transition-all">
                <div className="bg-sharebite-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-sharebite-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Build Community</h3>
                <p className="text-sharebite-dark/70">
                  We connect donors, volunteers, and recipients to create a sustainable food sharing ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <DonationForm />
        <FoodBankMap />
        <VolunteerForm />
        <TrackingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
