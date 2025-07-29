'use client';

import { motion } from 'framer-motion';
import {
  Rocket,
  ShieldCheck,
  Users,
  Leaf,
  Lightbulb,
  Code,
} from 'lucide-react';

export default function ServicesVerticalList() {
  const services = [
    {
      icon: <Rocket size={28} className="text-blue-600" />,
      title: 'Innovative Solutions',
      description:
        'We specialize in delivering cutting-edge solutions that leverage the latest in technology, data analytics, and design thinking. From strategy to implementation, we help businesses unlock new opportunities and transform operations for long-term success.',
    },
    {
      icon: <ShieldCheck size={28} className="text-green-600" />,
      title: 'Trusted Quality',
      description:
        'Our commitment to excellence ensures that every project meets industry standards, safety regulations, and quality benchmarks. We follow robust testing protocols and continuous improvement practices to guarantee reliability and customer satisfaction.',
    },
    {
      icon: <Users size={28} className="text-orange-500" />,
      title: 'Client-Centric Approach',
      description:
        'We believe every client is unique. Our team works closely with stakeholders to understand their challenges and customize solutions that align with their business objectives, timeline, and budget. Your vision is our blueprint.',
    },
    {
      icon: <Leaf size={28} className="text-emerald-500" />,
      title: 'Eco Commitment',
      description:
        'Sustainability is at the core of our operations. From eco-friendly materials to energy-efficient systems, we ensure our services contribute to a greener future. Our practices align with ESG goals and promote responsible innovation.',
    },
    {
      icon: <Lightbulb size={28} className="text-yellow-500" />,
      title: 'Creative Thinking',
      description:
        'Innovation drives us. Our multidisciplinary team fosters a culture of creative problem-solving, encouraging fresh perspectives and novel ideas that help us deliver high-impact solutions across industries.',
    },
    {
      icon: <Code size={28} className="text-purple-600" />,
      title: 'Modern Technologies',
      description:
        'We harness the power of modern technology stacks—AI, machine learning, automation, IoT, and cloud platforms—to build agile, scalable, and intelligent systems that keep you ahead in the digital age.',
    },
  ];

  return (
    <section className="relative z-10 py-24 px-6 md:px-16 bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden">
      <motion.h2
        className="text-4xl font-bold text-center text-green-900 mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Services
      </motion.h2>

      <div className="space-y-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col sm:flex-row items-start gap-6 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="bg-gray-100 p-3 rounded-full">{service.icon}</div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-3xl">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
