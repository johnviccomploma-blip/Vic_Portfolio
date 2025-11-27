"use client";
import React from "react";
import Image from "next/image";

// Define prop types
interface CardSampleProps {
    title: string;
    description: string;
    image: string;
}

export default function CardSample({ title, description, image }: CardSampleProps) {
    return (
        <div className="w-full sm:w-[100%] bg-white rounded-3xl shadow-2xl p-6 sm:p-8 flex flex-col items-center text-center">
            {/* Image */}
            <div className="w-full h-[200px] sm:h-[400px] relative mb-2">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover rounded-2xl"
                />
            </div>

            {/* Title */}
            <h3 className="text-3xl font-bold text-emerald-900 mb-4">{title}</h3>

            {/* Description */}
            <p className="text-gray-700 text-lg mb-6">{description}</p>

            {/* Optional Button */}
            <a
                href="#"
                className="px-6 py-2 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition-colors duration-200"
            >
                View Projects
            </a>
        </div>
    );
}
