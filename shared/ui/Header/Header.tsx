'use client';

import { useState } from 'react';
import Image from 'next/image';
import {DesktopNav} from "@/shared/ui/Header/DesktopNav";
import {MobileMenu} from "@/shared/ui/Header/MobileMenu";

export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white fixed top-0 left-0 right-0 z-50" style={{height:"5rem"}}>
            {/* Основная навигация */}
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                {/* Логотип */}
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">IT Path</span>
                        <Image
                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Company Logo"
                            width={32}
                            height={32}
                            className="h-8 w-auto"
                        />
                    </a>
                </div>

                {/* Кнопка мобильного меню */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="size-6"
                            aria-hidden="true"
                        >
                            <path
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>

                {/* Десктопная навигация */}
                <DesktopNav

                />
                {/* Кнопка входа */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>

            {/* Мобильное меню */}
            {isMobileMenuOpen && (
                <MobileMenu
                isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}

        />
            )}
        </header>
    );
};