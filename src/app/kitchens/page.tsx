import KitchenGallerySlider from "@/components/KitchenGallerySlider";
import Link from "next/link";

export const metadata = {
    title: "Изготовление кухонь на заказ | MasterMebius",
    description:
        "Проектирование и изготовление кухонной мебели в Алматы. Индивидуальный подход, качественные материалы, современный дизайн.",
};

export default function KitchenPage() {
    return (
        <main>
            {/* Слайдер */}
            <KitchenGallerySlider />

            {/* SEO-блок */}
            <section className="bg-[#fff7ee] text-gray-900 rounded-2xl shadow-md mx-4 md:mx-auto md:max-w-4xl mt-10 p-6 md:p-10">
                <h1 className="text-3xl font-bold mb-4">Кухни на заказ в Алматы</h1>
                <p className="text-lg mb-4">
                    Мы изготавливаем кухни по индивидуальным проектам с учётом всех ваших пожеланий. Работаем по Алматы и Алматинской области. Используем только качественные материалы и фурнитуру.
                </p>
                <p className="text-lg mb-6">
                    Вы можете выбрать любой стиль: классика, модерн, лофт. Мы поможем с подбором цветов, планировкой, бытовой техникой. Гарантируем точность, сроки и качество.
                </p>
                <div className="text-center mt-10">
                    <Link
                        href="/"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition"
                    >
                        Вернуться на главную
                    </Link>
                </div>

            </section>

        </main>
    );
}
