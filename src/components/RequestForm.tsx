"use client";

import { useState } from "react";

export default function RequestForm() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess(false);

        if (isSending) return; // уже отправляется

        setIsSending(true);

        const res = await fetch("/api/telegram", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, phone, message }),
        });

        const data = await res.json();

        if (res.ok) {
            setSuccess(true);
            setName("");
            setPhone("");
            setMessage("");

            // Блокируем отправку на 60 секунд
            setTimeout(() => setIsSending(false), 60000);
        } else {
            setError(data.error || "Ошибка при отправке. Попробуйте позже.");
            setIsSending(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
            <input
                type="text"
                placeholder="Ваше имя"
                className="w-full px-4 py-2 rounded text-gray-900 outline-none focus:ring-2 focus:ring-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="tel"
                placeholder="Телефон"
                className="w-full px-4 py-2 rounded text-gray-900 outline-none focus:ring-2 focus:ring-blue-500"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />
            <textarea
                placeholder="Комментарий"
                className="w-full px-4 py-2 rounded text-gray-900 outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button
                type="submit"
                disabled={isSending}
                className={`w-full font-semibold px-4 py-2 rounded transition ${isSending
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
            >
                {isSending ? "Подождите..." : "Отправить заявку"}
            </button>

            {error && <p className="text-red-600 text-sm">{error}</p>}
            {success && (
                <p className="text-green-600 text-sm">✅ Заявка успешно отправлена!</p>
            )}
        </form>
    );
}
