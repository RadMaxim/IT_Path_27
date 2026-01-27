'use client';

import { useState } from 'react';
import Image from 'next/image';
import {productMenuItems} from "@/shared/lib/constants/productMenuItems";

type MenuItem = {
    id: string
    label: string
    href: string
    hasDropdown?: boolean
}

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    // productMenuItems: MenuItem[];
}

export const MobileMenu = ({ isOpen, onClose}: MobileMenuProps) => {
    const [isMobileProductDropdownOpen, setIsMobileProductDropdownOpen] = useState(false);

    const navigationItems = [
        { id: 'features', label: 'Features', href: '#' },
        { id: 'marketplace', label: 'Marketplace', href: '#' },
        { id: 'company', label: 'Company', href: '#' },
    ];

    const toggleProductDropdown = () => {
        setIsMobileProductDropdownOpen(!isMobileProductDropdownOpen);
    };

    if (!isOpen) return null;

    return (
        <div className="lg:hidden">
            {/* Затемнение фона */}
            <div
                className="fixed inset-0 z-40 bg-black bg-opacity-25"
                onClick={onClose}
            />

            {/* Меню */}
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                    <a href="#" className="-m-1.5 p-1.5" onClick={onClose}>
                        <span className="sr-only">Your Company</span>
                        <Image
                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Company Logo"
                            width={32}
                            height={32}
                            className="h-8 w-auto"
                        />
                    </a>
                    <button
                        type="button"
                        onClick={onClose}
                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Close menu</span>
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="size-6"
                            aria-hidden="true"
                        >
                            <path
                                d="M6 18 18 6M6 6l12 12"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                            {/* Product dropdown в мобильном меню */}
                            <div className="-mx-3">
                                <button
                                    type="button"
                                    onClick={toggleProductDropdown}
                                    className="flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Product
                                    <svg
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className={`size-5 flex-none transition-transform ${
                                            isMobileProductDropdownOpen ? 'rotate-180' : ''
                                        }`}
                                    >
                                        <path
                                            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                            clipRule="evenodd"
                                            fillRule="evenodd"
                                        />
                                    </svg>
                                </button>
                                {isMobileProductDropdownOpen && (
                                    <div className="mt-2 space-y-2">
                                        {productMenuItems.map((item) => (
                                            <a
                                                key={item.id}
                                                href="#"
                                                className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                                                onClick={onClose}
                                            >
                                                {item.label}
                                            </a>
                                        ))}
                                        <a
                                            href="#"
                                            className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                                            onClick={onClose}
                                        >
                                            Watch demo
                                        </a>
                                        <a
                                            href="#"
                                            className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                                            onClick={onClose}
                                        >
                                            Contact sales
                                        </a>
                                    </div>
                                )}
                            </div>

                            {/* Остальные ссылки */}
                            {navigationItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    onClick={onClose}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                        <div className="py-6">
                            <a
                                href="#"
                                className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                onClick={onClose}
                            >
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};