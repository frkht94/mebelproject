// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-700 mt-10 border-t border-gray-200">
            <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between text-sm">
                <div>
                    <h4 className="font-bold mb-2">MebelProject</h4>
                    <p>Мебель на заказ в Алматы и области</p>
                </div>

                <div className="mt-4 md:mt-0 space-y-1">
                    <p>Тел: +7 (777) 000 00 00</p>
                    <p>Email: info@mebelproject.kz</p>
                    <p>Адрес: ул. Примерная 123, г. Алматы</p>
                </div>

                <div className="mt-4 md:mt-0 text-right">
                    <Link href="#contact" className="hover:underline block">Связаться с нами</Link>
                    <Link href="#works" className="hover:underline block">Примеры работ</Link>
                </div>
            </div>

            <div className="text-center text-xs py-4 border-t border-gray-200 bg-gray-50">
                &copy; {new Date().getFullYear()} MebelProject. Все права защищены.
            </div>
        </footer>
    );
}
