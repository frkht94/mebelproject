// components/HeroSection.tsx
import Link from "next/link";

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="bg-cover bg-center rounded-2xl bg-no-repeat text-white"
            style={{ backgroundImage: "url('/images/bcg_img.png')" }}
        >
            <div className="py-20 px-4 md:px-0 text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                        Мебель на заказ в Алматы и области
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-6">
                        Изготавливаем кухни, шкафы, гардеробные, детские и другую мебель под ключ
                    </p>
                    <Link
                        href="#contact"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition"
                    >
                        Оставить заявку
                    </Link>
                </div>
            </div>
        </section>
    );
}
