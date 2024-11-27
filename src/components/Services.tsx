import React from 'react';
import { Users, User, Trophy, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Users,
    title: "Group Lessons",
    description: "Learn swimming in a fun, social environment with our group classes designed for all skill levels."
  },
  {
    icon: User,
    title: "Private Coaching",
    description: "One-on-one instruction tailored to your specific needs and goals."
  },
  {
    icon: Trophy,
    title: "Competitive Training",
    description: "Advanced training for competitive swimmers looking to excel in the sport."
  },
  {
    icon: Heart,
    title: "Aqua Fitness",
    description: "Combine swimming with fitness in our specialized aqua workout sessions."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Services
        </motion.h2>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-md transition-shadow hover:shadow-xl"
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <service.icon className="h-12 w-12 text-blue-500 mb-4" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}