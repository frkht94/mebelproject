"use client";

import { useEffect, useState } from "react";

interface Work {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
}

export default function WorksGallery() {
    const [works, setWorks] = useState<Work[]>([]);
    const [expanded, setExpanded] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedWork, setSelectedWork] = useState<Work | null>(null);

    useEffect(() => {
        fetch("/api/works")
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setWorks(data);
                } else {
                    setError("Ошибка при загрузке данных");
                }
            })
            .catch(() => {
                setError("Ошибка при подключении к серверу");
            });
    }, []);

    return (
        <section className="bg-[#fefcf7]/50 rounded-2xl p-6 shadow relative" id="works">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">
                    Примеры наших работ
                </h2>

                {error && (
                    <p className="text-red-600 text-center mb-6">{error}</p>
                )}

                <div
                    className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 transition-all duration-700 ${expanded ? "max-h-full" : "max-h-[380px] overflow-hidden relative"
                        }`}
                >
                    {works.map((work) => (
                        <div
                            key={work.id}
                            className="overflow-hidden rounded-lg shadow hover:shadow-lg transition bg-white cursor-pointer"
                            onClick={() => setSelectedWork(work)}
                        >
                            <img
                                src={work.imageUrl}
                                alt={work.title}
                                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                            />
                            <div className="p-4">
                                <h3 className="font-semibold text-lg text-gray-800 mb-1">
                                    {work.title}
                                </h3>
                                <p className="text-sm text-gray-600">{work.description}</p>
                            </div>
                        </div>
                    ))}
                    {!expanded && (
                        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#fefcf7]/80 via-[#fefcf7]/60 to-transparent pointer-events-none" />
                    )}
                </div>

                <div className="text-center mt-6">
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="text-blue-600 hover:underline font-medium"
                    >
                        {expanded ? "Скрыть" : "Смотреть все"}
                    </button>
                </div>
            </div>

            {selectedWork && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4" onClick={() => setSelectedWork(null)}>
                    <div className="bg-white rounded-lg max-w-lg w-full p-6 relative" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            onClick={() => setSelectedWork(null)}
                        >
                            ✕
                        </button>
                        <img src={selectedWork.imageUrl} alt={selectedWork.title} className="rounded mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{selectedWork.title}</h3>
                        <p className="text-gray-600 text-sm">{selectedWork.description}</p>
                    </div>
                </div>
            )}
        </section>
    );
}
