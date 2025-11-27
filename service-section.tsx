"use client";

import React from 'react';
import Image from 'next/image';

export default function ServiceSection() {
    const services = [
        {
            title: "3D Modeling",
            description: "Create detailed 3D assets for games and films with texturing and rigging.",
            icon: "/images/3d-icon.png",
        },
        {
            title: "2D Illustration",
            description: "Concept art, character design, and illustrations for promotional content and film assets.",
            icon: "/images/2d-icon.png",
        },
        {
            title: "Animation",
            description: "High-quality animations for 2D/3D projects including cinematic cutscenes and motion graphics.",
            icon: "/images/animation-icon.png",
        },
        {
            title: "CG Production",
            description: "Cinematic simulations and computer graphics to enhance storytelling and visual impact.",
            icon: "/images/cg-icon.png",
        },
    ];

    return (
        <section className="w-full py-20 bg-gradient-to-b from-emerald-50 to-emerald-100">
            <div className="max-w-7xl mx-auto px-6 sm:px-12">

                {/* Section Title */}
                <h2 className="text-4xl sm:text-6xl font-extrabold text-emerald-900 text-center uppercase mb-16">
                  Services
                </h2>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="bg-white rounded-3xl shadow-2xl p-6 flex flex-col items-center text-center hover:-translate-y-4 transition-transform duration-300"
                        >
                            <div className="w-20 h-20 mb-4 relative">
                                <Image
                                    src={service.icon}
                                    alt={service.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-emerald-900 mb-2">{service.title}</h3>
                            <p className="text-gray-700 text-sm sm:text-base">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
