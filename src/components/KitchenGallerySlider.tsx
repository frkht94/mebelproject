"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = ["/kitchen1.jpg", "/kitchen2.jpg", "/kitchen3.jpg", "/kitchen4.jpg"];

export default function KitchenGallerySlider() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

    useEffect(() => {
        const interval = setInterval(() => nextSlide(), 3200);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-black">
            {images.map((src, index) => (
                <Image
                    key={index}
                    src={src}
                    alt={`Кухня ${index + 1}`}
                    fill
                    priority={index === 0}
                    className={`object-cover transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                        }`}
                />
            ))}

            {/* Стрелки */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl bg-black/30 hover:bg-black/50 rounded-full p-2"
                aria-label="Предыдущая"
            >
                ‹
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl bg-black/30 hover:bg-black/50 rounded-full p-2"
                aria-label="Следующая"
            >
                ›
            </button>
        </div>
    );
}
