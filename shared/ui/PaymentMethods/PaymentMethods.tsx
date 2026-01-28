export default function PaymentMethods() {
    return (
        <main className="min-h-screen bg-white py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Title */}
                <h1 className="text-3xl font-bold text-center text-foreground mb-4">
                    Способы оплаты
                </h1>

                {/* Dotted line separator */}
                <div className="border-t-2 border-dotted border-orange-500 mb-8" />

                {/* Payment cards */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Online Payment Card */}
                    <div className="border border-gray-200 rounded-sm overflow-hidden">
                        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 transition-colors">
                            Оплатить онлайн
                        </button>
                        <div className="p-4 space-y-4">
                            <a
                                href="#"
                                className="flex items-start gap-2 text-foreground hover:text-orange-500 transition-colors"
                            >
                                <span className="text-orange-500 mt-0.5">▸</span>
                                <span>
                  Правила оплаты и возврата, безопасность платежей,
                  конфиденциальность информации
                </span>
                            </a>
                            <a
                                href="#"
                                className="flex items-center gap-2 text-foreground hover:text-orange-500 transition-colors"
                            >
                                <span className="text-orange-500">▸</span>
                                <span>Наши реквизиты</span>
                            </a>
                        </div>
                    </div>

                    {/* ERIP Payment Card */}
                    <div className="border border-gray-200 rounded-sm overflow-hidden">
                        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 transition-colors">
                            Мы есть в ЕРИП
                        </button>
                        <div className="p-4 space-y-4">
                            <a
                                href="#"
                                className="flex items-center gap-2 text-foreground hover:text-orange-500 transition-colors"
                            >
                                <span className="text-orange-500">▸</span>
                                <span>Как оплатить через ЕРИП</span>
                            </a>
                            <a
                                href="#"
                                className="flex items-center gap-2 text-foreground hover:text-orange-500 transition-colors"
                            >
                                <span className="text-orange-500">▸</span>
                                <span>Наши реквизиты</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
