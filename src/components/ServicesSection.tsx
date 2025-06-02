import { LayoutPanelTop, SquareStack, UtensilsCrossed, } from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
    const services = [
        {
            icon: <UtensilsCrossed className="w-8 h-8 text-blue-600" />,
            title: "Изготовление кухонь",
            href: "/kitchens",
        },
        {
            icon: <SquareStack className="w-8 h-8 text-blue-600" />,
            title: "Шкафы-купе и гардеробные",
            href: "/wardrobes",
        },
        {
            icon: <LayoutPanelTop className="w-8 h-8 text-blue-600" />,
            title: "Детская и офисная мебель",
            href: "/kids-office",
        },
    ];

    return (
        <section id="services" className="bg-gray-50/60 rounded-2xl py-20 px-4">
            <div className="max-w-6xl mx-auto text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">
                    Наши услуги
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {services.map((s, idx) => (
                        <Link
                            key={idx}
                            href={s.href}
                            className="block bg-white border rounded-lg p-6 shadow hover:shadow-md transition hover:border-blue-500"
                        >
                            <div className="mb-4">{s.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-800">
                                {s.title}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
