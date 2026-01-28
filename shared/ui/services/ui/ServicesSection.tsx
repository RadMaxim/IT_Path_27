"use client"

import { useState } from "react"

const services = [
    {
        id: 1,
        title: "Банкротство физических лиц",
        description:
            "Процедуру банкротства физических лиц в России регулирует закон «О несостоятельности (банкротстве)».",
    },
    {
        id: 2,
        title: "Сопровождение сделок",
        description:
            "Инициирование, оформление, осуществление сделки и достижение результата — это именно то, чем мы занимаемся каждый день.",
    },
    {
        id: 3,
        title: "Корпоративные споры",
        description:
            "Корпоративные споры – споры, связанные с созданием юрлица, управлением или участием в нем.",
    },
    {
        id: 4,
        title: "Недвижимость и строительство",
        description:
            "Консультируем по различным вопросам в области недвижимости, включая градостроительное регулирование, земельные отношения.",
    },
    {
        id: 5,
        title: "Возврат страховых премий",
        description:
            "Для возврата страховой премии нужно подготовить следующий пакет документов: паспорт страхователя, оригинал страхового полиса.",
    },
    {
        id: 6,
        title: "Налоговое право и споры",
        description:
            "Сопровождение налоговых проверок на любой стадии, анализ и подготовка документов, защита при налоговых спорах.",
    },
]

export function ServicesSection() {
    const [activeCard, setActiveCard] = useState(2)

    return (
        <section className="py-16 px-4 bg-background">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-4 tracking-wide">
                        НАШИ УСЛУГИ
                    </h2>
                    <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Давно выяснено, что при оценке дизайна и композиции читаемый текст
                        мешает сосредоточиться. Lorem Ipsum используют потому, что тот
                        обеспечивает более или менее стандартное заполнение шаблона.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            onMouseEnter={() => setActiveCard(service.id)}
                            className={`
                relative p-8 rounded-sm cursor-pointer transition-all duration-300
                ${
                                activeCard === service.id
                                    ? "bg-[#2B8BFC] text-white shadow-lg"
                                    : "bg-[#F8F9FA] text-foreground hover:shadow-md"
                            }
              `}
                        >
                            {/* Icon */}
                            <div className="flex justify-center mb-6">
                                <div
                                    className={`
                    w-12 h-12 flex items-center justify-center
                    ${activeCard === service.id ? "text-white" : "text-[#2B8BFC]"}
                  `}
                                >
                                </div>
                            </div>

                            {/* Title */}
                            <h3
                                className={`
                  text-lg font-semibold text-center mb-4
                  ${activeCard === service.id ? "text-white" : "text-foreground"}
                `}
                            >
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p
                                className={`
                  text-sm text-center leading-relaxed
                  ${activeCard === service.id ? "text-white/90" : "text-muted-foreground"}
                `}
                            >
                                {service.description}
                            </p>

                            {/* Decorative dashed border for active card */}
                            {activeCard === service.id && (
                                <div className="absolute inset-4 border border-dashed border-white/40 rounded-sm pointer-events-none" />
                            )}
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="flex justify-center">
                    <button className="px-8 py-3 bg-[#2B8BFC] text-white font-medium rounded-sm hover:bg-[#1a7ae8] transition-colors duration-300 tracking-wide">
                        ВСЕ УСЛУГИ
                    </button>
                </div>
            </div>
        </section>
    )
}
