// app/api/telegram/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { name, phone, message } = await req.json();

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
        return NextResponse.json({ error: "Missing token or chat ID" }, { status: 500 });
    }

    const text = `
🛠 Новая заявка с сайта:
👤 Имя: ${name}
📞 Телефон: ${phone}
💬 Сообщение: ${message || "—"}
  `;

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: chatId,
                text,
                parse_mode: "HTML",
            }),
        });

        if (!res.ok) {
            throw new Error("Telegram API error");
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        return NextResponse.json({ error: "Ошибка отправки в Telegram" }, { status: 500 });
    }
}
