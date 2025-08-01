"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const Hero: React.FC = () => {
  const slides = [
    {
      image: "/slide1.jpg",
      title: "Advancing Healthcare through Pharmaceutical Innovation",
      description: "Driving breakthroughs in drug development and therapeutic solutions for a healthier future.",
    },
    {
      image: "/slide2.jpg",
      title: "Sustainable Food Production and Processing",
      description: "Innovative technologies ensuring safe, efficient, and eco-friendly food systems from farm to fork.",
    },
    {
      image: "/slide3.jpg",
      title: "Protecting Our Planet and Climate",
      description: "Empowering environmental stewardship and climate resilience through green technologies and policies.",
    },
  ];

  return (
    <section id="home" className="relative w-full h-screen">
      <div style={{ touchAction: "pan-y" }}>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={5000}
          className="h-full"
        >
          {slides.map((slide, index) => (
            <div key={index} className="relative w-full h-screen">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-4 text-center">
                <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">
                  {slide.title}
                </h1>
                <p className="text-white text-lg md:text-xl max-w-2xl drop-shadow-sm">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;
