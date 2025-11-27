"use client";

import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

const links = [
    { name: 'HOME', href: '/' },
    { name: 'WORKS', href: '/works' },
    { name: 'ABOUT', href: '/about' },
];

export default function Header() {
    const currentPath = usePathname();
    const router = useRouter();

    const handleNavigation = (href: string) => {
        router.push(href);
    };

    return (
        <header className="bg-gray-700 py-6 sm:py-9 shadow-md sticky top-0 w-full z-20 border-b border-rose-800">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center relative">

                {/* Logo */}
                <div
                    className="text-2xl sm:text-3xl font-extrabold text-white tracking-wider mb-3 sm:mb-0 cursor-pointer text-center sm:text-left z-10"
                    onClick={() => handleNavigation('/')}
                >
                </div>

                {/* Navigation Links (Centered) */}
                <ul className="
                    flex flex-wrap justify-center gap-x-4 sm:space-x-6
                    sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:top-1/2 sm:-translate-y-1/2
                ">
                    {links.map((item) => {
                        const isCurrent =
                            currentPath === item.href || (item.href !== '/' && currentPath?.startsWith(item.href));

                        return (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={`
                                      text-sm sm:text-base font-semibold transition-all duration-200 px-4 py-2 uppercase rounded-xl cursor-pointer block
                                      ${
                                        isCurrent
                                            ? 'text-gray-700 border-2 border-emerald-900 bg-rose-300 shadow-inner'
                                            : 'text-emerald-100 border border-transparent hover:border-white hover:text-white hover:bg-emerald-600'
                                    }
                                    `}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </header>
    );
}
