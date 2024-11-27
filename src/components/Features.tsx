import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Shield, Trophy } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: "Expert Instructors",
    description: "Learn from certified swimming professionals with years of experience."
  },
  {
    icon: Users,
    title: "Small Class Sizes",
    description: "Personalized attention with maximum 4 students per instructor."
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "State-of-the-art facilities with trained lifeguards always on duty."
  },
  {
    icon: Trophy,
    title: "Achievement Program",
    description: "Track your progress with our structured level advancement system."
  }
];

export function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4"
              >
                <feature.icon className="w-8 h-8 text-blue-500" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}