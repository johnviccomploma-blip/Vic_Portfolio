"use client";

import React from 'react';
import Image from "next/image";

const BACKGROUND_IMAGE_PATH = "/images/hero-background.jpg";

interface HeroSectionProps {
    title?: string;
    subtitle?: string;
}

export default function HeroSection({
                                        title = "J Vic Art",
                                        subtitle = "Young creative artists bringing ideas to life through diverse digital creations, including both 2D and 3D art."
                                    }: HeroSectionProps) {
    return (
        <section
            className="relative flex items-center min-h-[60vh] sm:min-h-[70vh] px-6 sm:px-12"
            style={{
                backgroundImage: `url(${BACKGROUND_IMAGE_PATH})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-rose-300"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start justify-between w-full max-w-7xl mx-auto space-y-6 sm:space-y-0">

                {/* Left - Text */}
                <div className="sm:w-1/2 text-center sm:text-left text-white">
                    <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-4">
                        {title}
                    </h1>
                    <p className="text-lg sm:text-xl max-w-xl leading-relaxed text-white">
                        {subtitle}
                    </p>
                </div>

                {/* Right - Icon/Image */}
                <div className="sm:w-1/2 flex justify-center sm:justify-end">
                    <div className="bg-white 3xl p-2 shadow-xl">
                        <Image
                            src="/images/VicDP.jpg"
                            alt="Icon"
                            width={300}
                            height={300}
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
