// app/api/request/route.ts
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, phone, message } = body;

        if (!name || !phone) {
            return NextResponse.json(
                { error: "Имя и телефон обязательны" },
                { status: 400 }
            );
        }

        const newRequest = await prisma.request.create({
            data: { name, phone, message },
        });

        return NextResponse.json({ success: true, request: newRequest });
    } catch (error) {
        return NextResponse.json(
            { error: "Ошибка при отправке заявки" },
            { status: 500 }
        );
    }
}
