'use client';

import React from 'react';
import Image from 'next/image';

export default function DigitalPlatforms() {
    return (
        <section
            id="digital-platforms"
            className="w-full bg-gradient-to-r from-[#f0fbf4] via-[#eaf9f1] to-[#f2fdf6] py-20"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                {/* Left Side - Optimized Image */}
                <div className="relative w-full h-64 md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src="/digital-platform.jpg" // Ensure this file exists in your public folder
                        alt="Digital Knowledge Sharing"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Right Side - Content */}
                <div className="space-y-5">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                        Digital Platforms & Knowledge Networks
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        We develop and support tech-enabled platforms that allow communities, researchers, and institutions to exchange indigenous knowledge. These platforms enhance accessibility, collaboration, and long-term preservation.
                    </p>
                </div>
            </div>
        </section>
    );
}
