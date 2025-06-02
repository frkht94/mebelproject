// app/page.tsx
import AboutSection from "@/components/AboutSection";
import ContactMap from "@/components/ContactMap";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import RequestFormSection from "@/components/RequestFormSection";
import ServicesSection from "@/components/ServicesSection";
import WorksGallery from "@/components/WorksGallery";


export default function Home() {
  return (
    <>
      <Header />

      <main className="container mx-auto px-4 py-10 space-y-20">
        <HeroSection />

        <AboutSection />


        <ServicesSection />

        <section id="works" className="text-center">
          <WorksGallery />
        </section>

        <section id="contact" className="text-center">
          <p className="text-gray-700">Заполните форму или позвоните нам, чтобы обсудить проект.</p>

          <h2 className="text-3xl font-semibold mb-4 text-black">Контакты</h2>
          <p className="text-gray-700">г. Алматы, ул. Примерная 123</p>
          <p className="text-gray-700">+7 (777) 123-45-67</p>
          <p className="text-gray-700">info@mebelproject.kz</p>

          <ContactMap />
          <RequestFormSection />

        </section>
      </main>

      <Footer />
    </>
  );
}
