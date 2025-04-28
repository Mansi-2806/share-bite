import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart, Users, Dog } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-20">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative py-16 bg-gradient-to-br from-white to-purple-50"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-sharebite-dark mb-6">
                About Share Bite
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                We're a comprehensive food distribution network focused on two crucial missions: eliminating food waste 
                and ensuring both people and animals receive the nourishment they deserve.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-4 text-sharebite-primary">Human Food Bank</h3>
                  <p className="text-gray-600">
                    Our community food bank provides essential nutrition to families in need, 
                    while working with local grocers and restaurants to prevent food waste and 
                    create sustainable food distribution channels.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-4 text-sharebite-primary">Animal Food Bank</h3>
                  <p className="text-gray-600">
                    Our dedicated animal food bank ensures that shelters, rescues, and pet owners in need 
                    have access to quality pet food, reducing the burden on families and improving animal welfare.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-sharebite-dark">Our Mission & Process</h2>
                <p className="text-gray-600 mb-4">
                  Our human food bank operates through a systematic process to ensure efficient food distribution:
                </p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="font-semibold min-w-[120px]">Collection:</span>
                    We partner with local grocery stores, restaurants, and food manufacturers to collect surplus food that would otherwise go to waste.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold min-w-[120px]">Sorting:</span>
                    Our volunteers carefully sort and inspect all donations to ensure food safety and quality standards are met.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold min-w-[120px]">Distribution:</span>
                    We distribute food through our network of community centers and partner organizations to reach families in need.
                  </li>
                </ul>
                <div className="flex gap-6 mt-8">
                  <div className="flex items-center gap-2">
                    <Heart className="text-sharebite-primary" />
                    <span className="font-medium">1000+ Donations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="text-sharebite-primary" />
                    <span className="font-medium">200+ Volunteers</span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="rounded-lg overflow-hidden shadow-xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1"
                  alt="Food distribution center"
                  className="w-full h-[400px] object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-purple-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-sharebite-dark">Animal Food Bank</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our animal food bank serves as a vital resource for shelters and pet owners in need, ensuring no companion animal goes hungry.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
                  title: "Emergency Support",
                  description: "Providing immediate food assistance to animals in crisis situations."
                },
                {
                  image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
                  title: "Regular Distributions",
                  description: "Scheduled food distributions to registered animal welfare organizations."
                },
                {
                  image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
                  title: "Community Outreach",
                  description: "Supporting pet owners facing temporary financial hardships."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-sharebite-dark">Our Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet the dedicated individuals behind Share Bite who work tirelessly to make our mission possible.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: "Mansi",
                  role: "Founder & Operations Director",
                  description: "Leading our mission to create sustainable food distribution networks."
                },
                {
                  name: "Kalyani Vilas Birajdar",
                  role: "Program Coordinator",
                  description: "Managing our volunteer programs and community partnerships."
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                      <p className="text-sharebite-primary font-medium mb-3">{member.role}</p>
                      <p className="text-gray-600">{member.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
