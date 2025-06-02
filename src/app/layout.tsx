// app/layout.tsx
import Header from "@/components/Header"; // Убедись, что путь к Header.tsx корректный
import { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Мебель на заказ в Алматы | MasterMebius",
  description:
    "Проектирование и изготовление мебели на заказ: кухни, шкафы, гардеробные, детские, прихожие.",
  keywords: [
    "мебель на заказ",
    "кухни Алматы",
    "шкафы",
    "гардеробные",
    "мебель Алматы",
  ],
  authors: [{ name: "MasterMebius", url: "https://mastermebius.kz" }],
  openGraph: {
    title: "Мебель на заказ в Алматы | MasterMebius",
    description:
      "Изготавливаем мебель на заказ по индивидуальным проектам. Качественно и точно в срок.",
    url: "https://mastermebius.kz",
    siteName: "MasterMebius",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-[#fdf6ee] text-gray-900 pt-[64px]">
        <Header />
        {children}
      </body>
    </html>
  );
}
