import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const works = await prisma.work.findMany({
            orderBy: { createdAt: "desc" },
        });
        return NextResponse.json(works);
    } catch (error) {
        console.error("Ошибка в /api/works:", error);
        return NextResponse.json(
            { error: "Ошибка при загрузке работ" },
            { status: 500 }
        );
    }
}
