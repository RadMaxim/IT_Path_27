import Link from "next/link"

const navigationLinks = [
    { label: "Об IT-клубе", href: "#" },
    { label: "Наши курсы", href: "#" },
    { label: "Экспресс-курсы", href: "#" },
    { label: "Договор", href: "#" },
    { label: "Правила безопасности", href: "#" },
    { label: "Политика конфиденциальности", href: "#" },
]

const contacts = [
    { address: "г. Минск, ул. П. Мстиславца 3", phone: "+375 29 688-46-66" },
    { address: "г. Минск, ул. Налибокская 38", phone: "+375 29 688-46-66" },
    { address: "г. Минск, ул. Притыцкого, 34-1", phone: "+375 29 688-46-66" },
    { address: "г. Минск, ул. Алибегова 12б", phone: "+375 44 570-16-12" },
]

const partners = [
    { address: "аг. Ратомка, ул. Новая 22", phone: "+375 29 771-91-03" },
    { address: "г. Гродно, ул. Советская 5/16", phone: "+375 29 781-11-11" },
]

export function Footer() {
    return (
        <footer className="relative bg-white overflow-hidden">
            {/* Decorative wave */}
            <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
                <svg
                    viewBox="0 0 1440 60"
                    className="absolute top-0 w-full h-auto min-w-[1440px]"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,30 Q200,60 400,30 T800,30 T1200,30 T1440,30"
                        fill="none"
                        stroke="#F97316"
                        strokeWidth="8"
                        strokeLinecap="round"
                    />
                    <path
                        d="M0,15 Q300,45 600,15 T1200,15 T1440,15"
                        fill="none"
                        stroke="#FB923C"
                        strokeWidth="4"
                        strokeLinecap="round"
                        opacity="0.6"
                    />
                </svg>
            </div>

            <div className="container mx-auto px-4 pt-20 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {/* Logo Section */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-3 mb-4">
                            {/* Logo Icon */}
                            <div className="relative w-16 h-16">
                                <svg viewBox="0 0 64 64" className="w-full h-full">
                                    <circle cx="32" cy="32" r="30" fill="none" stroke="#F97316" strokeWidth="2" />
                                    <path
                                        d="M32 12 L28 28 L38 28 L32 52 L36 36 L26 36 Z"
                                        fill="#F97316"
                                    />
                                    <circle cx="22" cy="20" r="3" fill="#F97316" />
                                    <circle cx="42" cy="44" r="3" fill="#F97316" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-[10px] text-orange-500 font-medium tracking-wide uppercase">
                                    IT-клуб программирования и робототехники
                                </div>
                                <div className="text-2xl font-bold text-gray-800 tracking-wider">КОДВАРТС</div>
                            </div>
                        </div>

                        <p className="text-gray-600 text-sm mb-6 text-center md:text-left max-w-xs">
                            IT-клуб программирования и робототехники в Минске для ребят от 5 до 15 лет
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-3">
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
                                aria-label="Telegram"
                            >
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
                                aria-label="Instagram"
                            >
                            </Link>
                        </div>
                    </div>

                    {/* Navigation Section */}
                    <div>
                        <h3 className="text-orange-500 font-semibold text-lg mb-6">Навигация</h3>
                        <nav>
                            <ul className="space-y-3">
                                {navigationLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-700 hover:text-orange-500 transition-colors flex items-center gap-2 text-sm"
                                        >
                                            <span className="text-orange-500">▸</span>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Contacts Section */}
                    <div>
                        <h3 className="text-orange-500 font-semibold text-lg mb-6">Контакты</h3>
                        <div className="space-y-4 mb-8">
                            {contacts.map((contact, index) => (
                                <div key={index} className="flex items-start gap-2">
                                    <div>
                                        <p className="text-gray-700 text-sm">{contact.address}</p>
                                        <p className="text-gray-600 text-sm">{contact.phone}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h3 className="text-orange-500 font-semibold text-lg mb-4">Наши партнеры</h3>
                        <div className="space-y-4">
                            {partners.map((partner, index) => (
                                <div key={index} className="flex items-start gap-2">
                                    <div>
                                        <p className="text-gray-700 text-sm">{partner.address}</p>
                                        <p className="text-gray-600 text-sm">{partner.phone}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="bg-gray-800 py-4">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} КОДВАРТС. Все права защищены.
                    </p>
                </div>
            </div>
        </footer>
    )
}
