"use client";
import Image from 'next/image';
import React from "react";

export default function AboutHero() {
    return (
        <section className="relative w-full min-h-[80vh] bg-white flex items-center py-16 md:py-24 overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                {/* Left Content */}
                <div className="space-y-6 text-left">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-900 leading-tight">
                        Building a bridge between ancestral knowledge and modern innovation.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        We are committed to building a bridge between ancestral knowledge and modern advancements. Our mission is to explore, develop, and apply integrated solutions that address ecological, agricultural, and healthcare challenges. By drawing insights from both Indigenous systems and scientific innovation, we strive to create approaches that are locally rooted and globally relevant.
                    </p>
                </div>

                {/* Right Image */}
                <div className="w-full h-72 md:h-[450px] relative rounded-2xl overflow-hidden shadow-xl">
                    <Image
                        src="/about-hero.jpg" // Make sure this file exists in /public
                        alt="Innovative Ecology"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
