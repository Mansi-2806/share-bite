
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Box, Utensils, Apple, Milk, Package } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const FoodCategoryCard = ({ title, icon: Icon, description }) => (
  <Card className="cursor-pointer hover:shadow-md transition-all border-2 hover:border-sharebite-primary">
    <CardContent className="p-6 flex flex-col items-center text-center">
      <Icon size={36} className="text-sharebite-primary mb-4" />
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-sharebite-dark/70">{description}</p>
    </CardContent>
  </Card>
);

const DonationForm = () => {
  const [selectedTab, setSelectedTab] = useState("details");
  const { toast } = useToast();
  
  const handleSchedulePickup = () => {
    toast({
      title: "Pickup Scheduled",
      description: "Thank you for your donation! Our team will be in touch soon.",
    });
    setSelectedTab("details");
  };

  return (
    <section id="donate" className="section-padding bg-sharebite-light">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Donate Surplus Food</h2>
          <p className="text-sharebite-dark/70">
            Your surplus food can make a difference. Schedule a pickup or drop-off to donate your excess food to local food banks.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="details">Food Details</TabsTrigger>
              <TabsTrigger value="schedule">Schedule Pickup</TabsTrigger>
              <TabsTrigger value="confirm">Confirm</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Select Food Category</CardTitle>
                  <CardDescription>Choose the type of surplus food you'd like to donate</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <FoodCategoryCard 
                      title="Cooked Food" 
                      icon={Utensils} 
                      description="Prepared meals, leftovers from events or restaurants"
                    />
                    <FoodCategoryCard 
                      title="Fresh Produce" 
                      icon={Apple} 
                      description="Fruits, vegetables, and other farm products"
                    />
                    <FoodCategoryCard 
                      title="Groceries" 
                      icon={Package} 
                      description="Packaged foods, canned goods, dry goods"
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Food Details</CardTitle>
                  <CardDescription>Help us understand what you're donating</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="foodName">Food Name/Description</Label>
                      <Input id="foodName" placeholder="E.g., Pasta dishes from event" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="quantity">Approximate Quantity</Label>
                      <Input id="quantity" placeholder="E.g., 5 trays, 10 kg, etc." />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="details">Additional Details</Label>
                    <Textarea id="details" placeholder="Include details about packaging, dietary info, etc." />
                  </div>

                  <div className="space-y-3">
                    <Label>Food Condition</Label>
                    <RadioGroup defaultValue="fresh">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="fresh" id="fresh" />
                        <Label htmlFor="fresh">Fresh (prepared today)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="day-old" id="day-old" />
                        <Label htmlFor="day-old">Day old (prepared yesterday)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="packaged" id="packaged" />
                        <Label htmlFor="packaged">Packaged (check expiry date)</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="pt-4">
                    <Button onClick={() => setSelectedTab("schedule")} className="bg-sharebite-primary hover:bg-sharebite-primary/90 w-full">
                      Next: Schedule Pickup
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="schedule">
              <Card>
                <CardHeader>
                  <CardTitle>Schedule a Pickup</CardTitle>
                  <CardDescription>Let us know when your donation will be ready</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="pickupDate">Pickup Date</Label>
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-sharebite-primary" />
                        <Input id="pickupDate" type="date" className="flex-1" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pickupTime">Preferred Time</Label>
                      <Input id="pickupTime" type="time" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Pickup Address</Label>
                    <Input id="address" placeholder="Enter full address" />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input id="zip" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="instructions">Special Instructions</Label>
                    <Textarea id="instructions" placeholder="E.g., Ring bell, call on arrival, etc." />
                  </div>

                  <div className="flex items-start space-x-2 py-2">
                    <Checkbox id="terms" />
                    <div className="grid gap-1.5 leading-none">
                      <Label htmlFor="terms">
                        I confirm the food is safe to consume and properly stored
                      </Label>
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button variant="outline" onClick={() => setSelectedTab("details")}>
                      Back to Details
                    </Button>
                    <Button onClick={() => setSelectedTab("confirm")} className="bg-sharebite-primary hover:bg-sharebite-primary/90">
                      Review Donation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="confirm">
              <Card>
                <CardHeader>
                  <CardTitle>Confirm Your Donation</CardTitle>
                  <CardDescription>Please review your donation details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="bg-sharebite-light p-4 rounded-lg">
                      <h3 className="font-semibold text-lg mb-2">Food Details</h3>
                      <div className="grid grid-cols-2 gap-2">
                        <p className="text-sm font-medium">Type:</p>
                        <p className="text-sm">Cooked Food</p>
                        <p className="text-sm font-medium">Quantity:</p>
                        <p className="text-sm">5 trays</p>
                        <p className="text-sm font-medium">Condition:</p>
                        <p className="text-sm">Fresh (prepared today)</p>
                      </div>
                    </div>
                    
                    <div className="bg-sharebite-light p-4 rounded-lg">
                      <h3 className="font-semibold text-lg mb-2">Pickup Information</h3>
                      <div className="grid grid-cols-2 gap-2">
                        <p className="text-sm font-medium">Date:</p>
                        <p className="text-sm">Selected date</p>
                        <p className="text-sm font-medium">Time:</p>
                        <p className="text-sm">Selected time</p>
                        <p className="text-sm font-medium">Address:</p>
                        <p className="text-sm">Entered address</p>
                      </div>
                    </div>
                    
                    <div className="bg-sharebite-light p-4 rounded-lg">
                      <h3 className="font-semibold text-lg mb-2">Donation Impact</h3>
                      <p className="text-sm mb-2">
                        Your donation could potentially help feed up to 15 people and prevent 
                        approximately 7.5 kg of CO2 emissions from food waste.
                      </p>
                      <div className="flex items-center">
                        <div className="h-2 bg-sharebite-primary rounded-full w-3/4"></div>
                        <span className="ml-2 text-xs font-medium">75%</span>
                      </div>
                      <p className="text-xs text-sharebite-dark/70 mt-1">
                        Progress toward monthly community impact goal
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button variant="outline" onClick={() => setSelectedTab("schedule")}>
                      Edit Details
                    </Button>
                    <Button onClick={handleSchedulePickup} className="bg-sharebite-primary hover:bg-sharebite-primary/90">
                      Confirm & Schedule Pickup
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default DonationForm;
