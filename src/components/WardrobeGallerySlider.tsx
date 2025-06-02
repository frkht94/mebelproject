"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = ["/kupe1.jpg", "/kupe2.jpg", "/garder1.jpg", "/garder2.jpg"];

export default function WardrobeGallerySlider() {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((i) => (i + 1) % images.length);
    const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length);

    useEffect(() => {
        const timer = setInterval(() => next(), 2500);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-black">
            {images.map((src, i) => (
                <Image
                    key={i}
                    src={src}
                    alt={`Шкаф ${i + 1}`}
                    fill
                    priority={i === 0}
                    className={`object-cover transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"
                        }`}
                />
            ))}
            <button
                onClick={prev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl bg-black/30 hover:bg-black/50 rounded-full p-2"
            >
                ‹
            </button>
            <button
                onClick={next}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl bg-black/30 hover:bg-black/50 rounded-full p-2"
            >
                ›
            </button>
        </div>
    );
}
