
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Search } from "lucide-react";

const FoodBankMap = () => {
  // Placeholder for future map integration
  const [mapApiKey, setMapApiKey] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock food banks data
  const foodBanks = [
    { id: 1, name: "Community Food Bank", distance: "0.8 miles", address: "123 Main St, City" },
    { id: 2, name: "Hope Food Pantry", distance: "1.2 miles", address: "456 Elm St, City" },
    { id: 3, name: "Blessing Food Center", distance: "2.5 miles", address: "789 Oak St, City" },
  ];

  return (
    <section id="map" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Nearby Food Banks</h2>
          <p className="text-sharebite-dark/70">
            Locate food banks in your area to schedule a pickup for your surplus food donation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1 space-y-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-4">
                  <Search size={18} className="text-sharebite-primary" />
                  <Input 
                    placeholder="Search by zip code or address"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="focus-visible:ring-sharebite-primary"
                  />
                </div>
                
                <div className="space-y-3 mt-6">
                  <h3 className="font-semibold text-lg">Nearby Food Banks</h3>
                  
                  {foodBanks.map(bank => (
                    <Card key={bank.id} className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold">{bank.name}</h4>
                            <p className="text-sm text-sharebite-dark/70">{bank.address}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-xs bg-sharebite-light px-2 py-1 rounded-full">
                              {bank.distance}
                            </span>
                          </div>
                        </div>
                        <div className="mt-2 flex justify-end">
                          <Button variant="ghost" size="sm" className="text-sharebite-primary">
                            Schedule Pickup
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <div className="text-center mt-4">
              <Button className="bg-sharebite-secondary hover:bg-sharebite-secondary/90">
                See All Food Banks
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-2 bg-sharebite-light rounded-lg overflow-hidden h-[500px] relative">
            {/* Placeholder for actual map integration */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <MapPin size={48} className="text-sharebite-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Interactive Map Coming Soon</h3>
              <p className="text-sharebite-dark/70 max-w-md">
                This map will show nearby food banks and allow you to schedule pickups directly.
              </p>
              
              {/* This input would be replaced with actual map integration */}
              <div className="mt-6 max-w-sm w-full">
                <Input
                  placeholder="Enter Google Maps API Key to activate"
                  value={mapApiKey}
                  onChange={(e) => setMapApiKey(e.target.value)}
                  className="mb-2"
                />
                <Button disabled className="w-full">Activate Map</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodBankMap;
