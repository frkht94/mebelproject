"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const images = ["/kid1.jpg", "/kid2.jpg", "/ofice1.jpg", "/ofice2.jpg"];

export default function KidsOfficePage() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);
    const next = () => setIndex((prev) => (prev + 1) % images.length);

    return (
        <div>
            <div className="relative w-full h-[500px] overflow-hidden">
                <Image
                    src={images[index]}
                    alt="Детская и офисная мебель"
                    fill
                    className="object-cover transition-opacity duration-500"
                />
                <button
                    onClick={prev}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={next}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-10 text-center">
                <h1 className="text-3xl font-bold mb-4">Детская и офисная мебель</h1>
                <p className="text-lg text-gray-700 mb-6">
                    Изготавливаем удобную и безопасную мебель для детских комнат и
                    функциональные решения для офисов. Индивидуальный подход и
                    качественные материалы.
                </p>
                <Link
                    href="/"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded"
                >
                    На главную
                </Link>
            </div>
        </div>
    );
}
