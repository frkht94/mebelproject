"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 border-b border-gray-100">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link
                    href="/"
                    className="text-2xl font-extrabold text-gray-900 tracking-tight"
                >
                    MebelProject
                </Link>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-800">
                    <Link href="/#about" className="hover:text-blue-600 transition">
                        О нас
                    </Link>
                    <Link href="/#services" className="hover:text-blue-600 transition">
                        Услуги
                    </Link>
                    <Link href="/#works" className="hover:text-blue-600 transition">
                        Наши работы
                    </Link>
                    <Link href="/#contact" className="hover:text-blue-600 transition">
                        Контакты
                    </Link>
                </nav>

                <Link
                    href="/#contact"
                    className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition text-sm font-semibold"
                >
                    Оставить заявку
                </Link>

                <button
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden px-4 pb-4 text-gray-900">
                    <Link href="/#about" className="block py-2">
                        О нас
                    </Link>
                    <Link href="/#services" className="block py-2">
                        Услуги
                    </Link>
                    <Link href="/#works" className="block py-2">
                        Наши работы
                    </Link>
                    <Link href="/#contact" className="block py-2">
                        Контакты
                    </Link>
                    <Link
                        href="/#contact"
                        className="block mt-2 bg-blue-600 text-white px-4 py-2 rounded text-center"
                    >
                        Оставить заявку
                    </Link>
                </div>
            )}
        </header>
    );
}
