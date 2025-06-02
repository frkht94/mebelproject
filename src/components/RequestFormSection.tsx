// components/RequestFormSection.tsx
import RequestForm from "./RequestForm";

export default function RequestFormSection() {
    return (
        <section id="contact" className="bg-[#fefcf7] rounded-2xl py-20 px-4">
            <div className="max-w-xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Оставить заявку
                </h2>
                <p className="text-gray-700 mb-10">
                    Заполните форму, и мы свяжемся с вами для уточнения деталей
                </p>
                <RequestForm />
            </div>
        </section>
    );
}
