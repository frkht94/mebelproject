// app/thankyou/page.tsx
export default function ThankYouPage() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4 text-green-600">Спасибо!</h1>
                <p className="text-lg text-gray-700 mb-6">
                    Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.
                </p>
                <a
                    href="/"
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    Вернуться на главную
                </a>
            </div>
        </div>
    );
}
