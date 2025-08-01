"use client";

import React from "react";

export default function AboutHero() {
    return (
        <section className="relative w-full h-[80vh] bg-white overflow-hidden flex items-center justify-center">

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                
                {/* Left Side Content */}
                <div className="text-left space-y-6">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-green-900 leading-snug">
                        Building a bridge between ancestral knowledge and modern innovation.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700">
                        We are committed to building a bridge between ancestral knowledge and modern advancements. Our mission is to explore, develop, and apply integrated solutions that address ecological, agricultural, and healthcare challenges. By drawing insights from both Indigenous systems and scientific innovation, we strive to create approaches that are locally rooted and globally relevant.
                    </p>
                </div>

                {/* Right Side Image */}
                <div className="w-full h-full flex justify-center items-center">
                    <div className="relative w-full h-72 md:h-[450px] rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src="/about-hero.jpg" // Replace with your image path
                            alt="Innovative Ecology"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
