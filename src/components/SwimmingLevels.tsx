import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Waves, Fish, Ship } from 'lucide-react';

const levels = [
  {
    icon: Droplets,
    name: "Beginner",
    color: "bg-blue-100",
    iconColor: "text-blue-500",
    description: "Perfect for first-time swimmers. Learn water safety and basic swimming techniques.",
    skills: ["Water confidence", "Floating", "Basic arm and leg movements", "Breathing techniques"]
  },
  {
    icon: Waves,
    name: "Intermediate",
    color: "bg-teal-100",
    iconColor: "text-teal-500",
    description: "Build on fundamentals and develop proper swimming techniques.",
    skills: ["Freestyle", "Backstroke", "Treading water", "Deep water confidence"]
  },
  {
    icon: Fish,
    name: "Advanced",
    color: "bg-indigo-100",
    iconColor: "text-indigo-500",
    description: "Perfect your strokes and build endurance for longer distances.",
    skills: ["All swim strokes", "Diving", "Advanced techniques", "Endurance training"]
  },
  {
    icon: Ship,
    name: "Competitive",
    color: "bg-purple-100",
    iconColor: "text-purple-500",
    description: "Train for competitions and master advanced swimming techniques.",
    skills: ["Race techniques", "Speed training", "Competition prep", "Advanced strategy"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function SwimmingLevels() {
  return (
    <section id="levels" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Swimming Levels
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {levels.map((level, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`${level.color} rounded-lg p-6 shadow-lg transition-all`}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4"
              >
                <level.icon className={`w-8 h-8 ${level.iconColor}`} />
              </motion.div>
              <h3 className="text-xl font-semibold mb-3">{level.name}</h3>
              <p className="text-gray-700 mb-4">{level.description}</p>
              <ul className="space-y-2">
                {level.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                    className="flex items-center text-gray-600"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}