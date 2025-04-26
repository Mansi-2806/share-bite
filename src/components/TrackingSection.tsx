
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, TrendingUp, Truck } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const TrackingSection = () => {
  return (
    <section id="track" className="section-padding bg-sharebite-light">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Track Your Impact & Earn Rewards</h2>
          <p className="text-sharebite-dark/70">
            Monitor the status of your donations and see the difference you're making in the community while earning rewards for your contributions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-sharebite-primary" />
                  <span>Track Your Donations</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-sharebite-light p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Donation #12345</span>
                      <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">In Transit</span>
                    </div>
                    <p className="text-sm mb-3">5 trays of pasta - Scheduled for pickup today at 2:00 PM</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Scheduled</span>
                        <span>Picked Up</span>
                        <span>Delivered</span>
                        <span>Distributed</span>
                      </div>
                      <Progress value={50} className="h-2" />
                    </div>
                  </div>
                  
                  <div className="bg-sharebite-light p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Donation #12344</span>
                      <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">Completed</span>
                    </div>
                    <p className="text-sm mb-3">10 kg of vegetables - Delivered to Hope Food Bank on June 15, 2023</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Scheduled</span>
                        <span>Picked Up</span>
                        <span>Delivered</span>
                        <span>Distributed</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <Button variant="outline" className="text-sharebite-primary">
                      View All Donations
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-sharebite-secondary" />
                  <span>Your Impact</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-sharebite-light p-4 rounded-lg text-center">
                    <h4 className="text-3xl font-bold text-sharebite-primary">15</h4>
                    <p className="text-sm text-sharebite-dark/70">Total Donations</p>
                  </div>
                  <div className="bg-sharebite-light p-4 rounded-lg text-center">
                    <h4 className="text-3xl font-bold text-sharebite-primary">75</h4>
                    <p className="text-sm text-sharebite-dark/70">Meals Provided</p>
                  </div>
                  <div className="bg-sharebite-light p-4 rounded-lg text-center">
                    <h4 className="text-3xl font-bold text-sharebite-primary">45 kg</h4>
                    <p className="text-sm text-sharebite-dark/70">Food Rescued</p>
                  </div>
                  <div className="bg-sharebite-light p-4 rounded-lg text-center">
                    <h4 className="text-3xl font-bold text-sharebite-primary">22 kg</h4>
                    <p className="text-sm text-sharebite-dark/70">CO2 Prevented</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button variant="outline" className="text-sharebite-secondary">
                    Download Impact Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-sharebite-accent" />
                  <span>Rewards & Recognition</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-r from-sharebite-primary/20 to-sharebite-accent/20 p-6 rounded-lg text-center mb-6">
                  <div className="flex justify-center mb-4">
                    <div className="h-24 w-24 rounded-full bg-white border-4 border-sharebite-primary flex items-center justify-center">
                      <span className="text-3xl font-bold text-sharebite-primary">350</span>
                    </div>
                  </div>
                  <h4 className="font-bold text-xl mb-1">Reward Points</h4>
                  <p className="text-sm text-sharebite-dark/70 mb-4">Earn points with every donation</p>
                  <Button className="bg-sharebite-accent hover:bg-sharebite-accent/90">
                    Redeem Rewards
                  </Button>
                </div>
                
                <h4 className="font-semibold text-lg mb-4">Your Achievements</h4>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-sharebite-primary/20 flex items-center justify-center">
                      <Award className="h-6 w-6 text-sharebite-primary" />
                    </div>
                    <div>
                      <h5 className="font-medium">First-Time Donor</h5>
                      <p className="text-xs text-sharebite-dark/70">Completed your first donation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-sharebite-secondary/20 flex items-center justify-center">
                      <Award className="h-6 w-6 text-sharebite-secondary" />
                    </div>
                    <div>
                      <h5 className="font-medium">Regular Contributor</h5>
                      <p className="text-xs text-sharebite-dark/70">Made 5+ donations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 opacity-50">
                    <div className="h-12 w-12 rounded-full bg-sharebite-accent/20 flex items-center justify-center">
                      <Award className="h-6 w-6 text-sharebite-accent" />
                    </div>
                    <div>
                      <h5 className="font-medium">Community Champion</h5>
                      <p className="text-xs text-sharebite-dark/70">Donated 50+ meals (25 to go)</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-sharebite-light p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Partner Benefits</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-sharebite-primary mr-2"></span>
                      <span>Tax deduction certificate for all donations</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-sharebite-primary mr-2"></span>
                      <span>Featured on our partner recognition page</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-sharebite-primary mr-2"></span>
                      <span>Monthly impact report for regular donors</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-sharebite-primary mr-2"></span>
                      <span>Share Bite certification badge for your business</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;
