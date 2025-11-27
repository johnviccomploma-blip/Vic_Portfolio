"use client";

import React from 'react';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-gray-600 p-6 mt-auto w-full">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-white">

                {/* Contact Info Centered */}
                <div className="flex flex-col items-center mt-4 sm:mt-0 text-center">
                    <p className="text-sm font-medium">Contact me through</p>
                    <p className="text-sm font-semibold">johnvic.comploma@my.jru.edu</p>
                    <p className="text-sm font-semibold">09483153886</p>
                </div>

                {/* Right Side - Social Icons */}
                <div className="flex space-x-6 mt-4 sm:mt-0">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/FBS.png"
                            alt="Facebook"
                            width={24}
                            height={24}
                            className="hover:opacity-80 transition"
                        />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/TWT.png"
                            alt="Twitter"
                            width={24}
                            height={24}
                            className="hover:opacity-80 transition"
                        />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/IGS.png"
                            alt="Instagram"
                            width={24}
                            height={24}
                            className="hover:opacity-80 transition"
                        />
                    </a>
                </div>

            </div>
        </footer>
    );
}
