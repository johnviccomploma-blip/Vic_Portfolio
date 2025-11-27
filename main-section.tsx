"use client";
import React from 'react';
import Image from 'next/image';

export default function MainSection() {
    const projectTypes = [
        {
            title: "3D PROJECTS",
            description: "High-quality 3D modeling, rigging, texturing, and animation for games, films, and virtual environments.",
            image: "/images/Them4c.png",
        },
        {
            title: "2D PROJECTS",
            description: "Creative concept art, illustration, and 2D animation for games, digital media, and promotional content.",
            image: "/images/2dArt.jpeg",
        },
        {
            title: "FILM PROJECTS",
            description: "visual storytelling in animation.",
            image: "/images/1st scene.png",
        },
    ];

    return (
        <section className="w-full py-20 bg-gradient-to-b from-emerald-50 to-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-12">
                {/* Section Title */}
                <h2 className="text-4xl sm:text-6xl font-extrabold text-emerald-900 text-center uppercase mb-16">

                </h2>

                {/* Column of Images */}
                <div className="flex flex-col space-y-16 items-center">
                    {projectTypes.map((project) => (
                        <div
                            key={project.title}
                            className="w-full sm:w-[90%] bg-white rounded-3xl shadow-2xl p-6 sm:p-8 flex flex-col items-center text-center"
                        >
                            {/* Project Image */}
                            <div className="w-full h-[400px] sm:h-[500px] relative mb-6">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover rounded-2xl"
                                />
                            </div>

                            {/* Project Title */}
                            <h3 className="text-2xl font-bold text-emerald-900 mb-4">{project.title}</h3>

                            {/* Project Description */}
                            <p className="text-gray-700 text-lg mb-6">{project.description}</p>

                            {/* Optional CTA Button */}
                            <a
                                href="#"
                                className="px-6 py-2 bg-rose-300 text-white font-semibold rounded-full hover:bg-rose-transition-colors duration-200"
                            >
                                View Projects
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
