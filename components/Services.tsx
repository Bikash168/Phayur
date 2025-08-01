'use client';

import { motion } from 'framer-motion';
import {
  BookOpenCheck,
  FlaskConical,
  TestTube,
  Sprout,
  HeartPulse,
  Globe2,
} from 'lucide-react';
import Image from 'next/image';

export default function ServicesVerticalList() {
  const services = [
    {
      icon: <BookOpenCheck size={28} className="text-green-800" />,
      title: '🔬 Research & Documentation',
      description:
        'We conduct in-depth studies to document Indigenous Knowledge Systems (IKS) and explore their intersections with modern science. Our team works with local communities, researchers, and practitioners to capture traditional practices in agriculture, healthcare, and environmental management.',
      image: '/images/service-1.jpg',
    },
    {
      icon: <FlaskConical size={28} className="text-green-700" />,
      title: '🌱 Product Development & Validation',
      description:
        'Our team co-develops innovative products by blending traditional formulations with contemporary scientific approaches. From herbal therapeutics to organic agricultural inputs, each product is tested and refined for modern-day relevance and impact.',
      image: '/images/service-2.jpg',
    },
    {
      icon: <TestTube size={28} className="text-green-600" />,
      title: '🧪 Formulation & Standardization',
      description:
        'We specialize in standardizing traditional formulations for wider applications in pharmaceuticals, nutraceuticals, and food processing. Our goal is to maintain the authenticity of indigenous methods while ensuring they meet quality benchmarks.',
      image: '/images/service-3.jpg',
    },
    {
      icon: <Sprout size={28} className="text-green-600" />,
      title: '🌾 Agro-Ecological Practices',
      description:
        'We support farmers and community groups in adopting sustainable agricultural models inspired by indigenous techniques. These services focus on soil health, crop diversity, organic inputs, and climate-smart strategies for resilient food systems.',
      image: '/images/service-4.jpg',
    },
    {
      icon: <HeartPulse size={28} className="text-green-700" />,
      title: '🌿 Healthcare and Healing Practices',
      description:
        'We work with traditional healers and medical experts to document and preserve native healing systems. These efforts support therapeutic innovation, community health outreach, and integration with holistic wellness solutions.',
      image: '/images/service-5.jpg',
    },
    {
      icon: <Globe2 size={28} className="text-green-800" />,
      title: '🌍 Environment and Biodiversity Solutions',
      description:
        'From seed conservation to natural resource management, we implement ecosystem-friendly practices rooted in indigenous ecological wisdom. These services promote biodiversity and help mitigate climate impacts.',
      image: '/images/service-6.jpg',
    },
  ];

  return (
   <section className="relative z-10 py-2 px-6 md:px-16 bg-white overflow-hidden">

      <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-cover bg-center pointer-events-none" />

      <motion.h2
        className="text-4xl font-bold text-center text-green-900 mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Services
      </motion.h2>

      <div className="space-y-8 relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row justify-between items-center gap-6 border border-green-200 bg-white/80 backdrop-blur-lg rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Left Side Content */}
            <div className="flex flex-col sm:flex-row items-start gap-4 max-w-3xl">
              <div className="bg-green-100 p-3 rounded-full">{service.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-green-900 mb-1">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Right Side Image */}
            <div className="w-full sm:w-56 md:w-48 lg:w-64">
              <Image
                src={service.image}
                alt={service.title}
                width={256}
                height={192}
                className="rounded-xl object-cover w-full h-auto"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
