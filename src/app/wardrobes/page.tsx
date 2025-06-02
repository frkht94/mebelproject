import WardrobeGallerySlider from "@/components/WardrobeGallerySlider";
import Link from "next/link";

export const metadata = {
    title: "Шкафы-купе и гардеробные на заказ | MasterMebius",
    description:
        "Изготовление шкафов-купе и гардеробных в Алматы под заказ. Индивидуальные решения, качественные материалы, точные замеры.",
};

export default function WardrobesPage() {
    return (
        <main>
            <WardrobeGallerySlider />

            <section className="bg-[#fff7ee] text-gray-900 rounded-2xl shadow-md mx-4 md:mx-auto md:max-w-4xl mt-10 p-6 md:p-10">
                <h1 className="text-3xl font-bold mb-4">Шкафы-купе и гардеробные</h1>
                <p className="text-lg mb-4">
                    Мы проектируем и изготавливаем шкафы-купе и гардеробные по индивидуальному заказу. Каждое решение адаптируется под вашу планировку.
                </p>
                <p className="text-lg mb-6">
                    Широкий выбор фасадов, наполнения, цветов. Монтаж и замеры включены в стоимость. Работаем быстро и качественно.
                </p>
                <div className="text-center">
                    <Link
                        href="/"
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
                    >
                        Вернуться на главную
                    </Link>
                </div>
            </section>
        </main>
    );
}
