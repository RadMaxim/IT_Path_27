"use client";

import { useState } from "react";

const faqData = [
    {
        question: "С какого возраста можно начинать обучение программированию?",
        answer:
            "Начинать обучение можно с любого возраста, минимальный возраст для занятий в нашем клубе — 5 лет.",
    },
    {
        question: "Какие проекты дети смогут создать после завершения курса?",
        answer:
            "После завершения курса дети смогут создавать собственные игры, анимации, интерактивные истории и простые приложения.",
    },
    {
        question:
            "Чем могут быть полезны ваши курсы для моего ребёнка в будущем, если он захочет стать программистом?",
        answer:
            "Наши курсы закладывают фундаментальные знания логики, алгоритмического мышления и основ программирования, которые станут отличной базой для дальнейшего обучения.",
    },
    {
        question:
            "Как я смогу понять, что у моего ребёнка есть успехи на занятиях?",
        answer:
            "Мы регулярно предоставляем отчёты о прогрессе ребёнка, проводим открытые уроки и демонстрации проектов.",
    },
    {
        question: "У меня дочь. Будет ли ей интересно на занятиях?",
        answer:
            "Конечно! Наши курсы разработаны так, чтобы быть интересными для всех детей, независимо от пола. У нас много успешных учениц.",
    },
    {
        question: "Есть ли у вас онлайн-формат обучения?",
        answer:
            "Да, мы предлагаем как очные занятия, так и онлайн-формат обучения с использованием современных платформ.",
    },
    {
        question: "А домашние задания задаете?",
        answer:
            "Да, мы даём небольшие домашние задания для закрепления материала, но они не занимают много времени.",
    },
    {
        question: "А если ребенок еще не умеет читать? Можно записаться?",
        answer:
            "Да, для самых маленьких у нас есть специальные курсы, где обучение построено на визуальных элементах и не требует навыков чтения.",
    },
];

function PlusIcon({ className = "" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            className={className}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M12 5v14" />
            <path d="M5 12h14" />
        </svg>
    );
}

function MinusIcon({ className = "" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            className={className}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M5 12h14" />
        </svg>
    );
}

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number>(0);

    const toggle = (index: number) => {
        setOpenIndex(prev => (prev === index ? -1 : index));
    };

    return (
        <section className="mx-auto max-w-3xl px-4 py-12">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
                Вопрос-ответ
            </h2>

            <div className="w-full divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
                {faqData.map((item, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <div key={index} className="px-4">
                            <button
                                type="button"
                                onClick={() => toggle(index)}
                                className="group flex w-full items-start gap-3 py-4 text-left"
                                aria-expanded={isOpen}
                                aria-controls={`faq-panel-${index}`}
                            >
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center text-orange-500">
                  {isOpen ? (
                      <MinusIcon className="size-5" />
                  ) : (
                      <PlusIcon className="size-5" />
                  )}
                </span>

                                <span className="font-medium text-orange-500">
                  {item.question}
                </span>

                                <span className="ml-auto mt-1 h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200 group-hover:text-gray-500">
                  {/* маленькая стрелка (опционально) */}
                                    <svg
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className={`h-5 w-5 ${isOpen ? "rotate-180" : ""}`}
                                        aria-hidden="true"
                                    >
                    <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z"
                        clipRule="evenodd"
                    />
                  </svg>
                </span>
                            </button>

                            {/* Контент (без библиотек). Анимация через max-height */}
                            <div
                                id={`faq-panel-${index}`}
                                className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                }`}
                            >
                                <div className="overflow-hidden">
                                    <div className="pb-4 pl-8 text-gray-600">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
