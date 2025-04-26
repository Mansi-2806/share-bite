
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { UserPlus, Truck, Calendar, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const VolunteerForm = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Volunteer Application Received",
      description: "Thank you for your interest in volunteering with us! We'll be in touch soon.",
    });
  };

  return (
    <section id="volunteer" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Volunteer Team</h2>
          <p className="text-sharebite-dark/70">
            Help us fight food waste and hunger by volunteering your time and skills. There are many ways you can contribute.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-sharebite-primary/10 p-4 rounded-lg flex items-center justify-center">
                  <UserPlus className="h-6 w-6 text-sharebite-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Food Recovery Volunteers</h3>
                  <p className="text-sharebite-dark/70">
                    Help collect surplus food from restaurants, grocery stores, and events, and deliver it to food banks.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-sharebite-primary/10 p-4 rounded-lg flex items-center justify-center">
                  <Truck className="h-6 w-6 text-sharebite-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Delivery Partners</h3>
                  <p className="text-sharebite-dark/70">
                    Use your vehicle to help transport donated food from the source to local food banks and shelters.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-sharebite-primary/10 p-4 rounded-lg flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-sharebite-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Event Organizers</h3>
                  <p className="text-sharebite-dark/70">
                    Help plan and execute food drives, awareness campaigns, and community events related to food waste reduction.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-sharebite-primary/10 p-4 rounded-lg flex items-center justify-center">
                  <Heart className="h-6 w-6 text-sharebite-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Food Bank Support</h3>
                  <p className="text-sharebite-dark/70">
                    Assist at local food banks with sorting donations, preparing meals, and distributing food to those in need.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Volunteer Application</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="volunteerType">I'm interested in volunteering as:</Label>
                    <select 
                      id="volunteerType" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="food-recovery">Food Recovery Volunteer</option>
                      <option value="delivery">Delivery Partner</option>
                      <option value="event">Event Organizer</option>
                      <option value="food-bank">Food Bank Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="availability">Availability</Label>
                    <select 
                      id="availability" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="weekdays">Weekdays</option>
                      <option value="weekends">Weekends</option>
                      <option value="both">Both</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Why do you want to volunteer with Share Bite?</Label>
                    <Textarea id="message" placeholder="Tell us a bit about your motivation..." />
                  </div>
                  
                  <Button type="submit" className="bg-sharebite-secondary hover:bg-sharebite-secondary/90 w-full">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerForm;
