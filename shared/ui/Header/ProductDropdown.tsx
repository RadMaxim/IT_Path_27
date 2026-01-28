'use client';

import { productMenuItems } from '@/shared/lib/constants/productMenuItems';
import Link from "next/link";



export const ProductDropdown = () => {
    return (
        <div
            className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2
                 overflow-hidden rounded-3xl bg-white shadow-lg
                 ring-1 ring-gray-900/5 transition-all duration-200"

        >
            <div className="p-4">
                {productMenuItems.map(menuItem => (
                    <div
                        key={menuItem.id}
                        className="group relative flex items-center gap-x-6 rounded-lg
                       p-4 text-sm/6 hover:bg-gray-50"
                    >
                        <div
                            className="flex size-11 flex-none items-center justify-center
                         rounded-lg bg-gray-50 group-hover:bg-white"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                className="size-6 text-gray-600 group-hover:text-indigo-600"
                            >
                                {menuItem.icon}
                            </svg>
                        </div>

                        <div className="flex-auto">
                            <Link href="#" className="block font-semibold text-gray-900">
                                {menuItem.label}
                                <span className="absolute inset-0" />
                            </Link>
                            <p className="mt-1 text-gray-600">
                                {menuItem.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                <a
                    href="#"
                    className="flex items-center justify-center gap-x-2.5 p-3
                     text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                >
                    <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="size-5 flex-none text-gray-400"
                        aria-hidden="true"
                    >
                        <path
                            d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .766.027l3.5 2.25a.75.75 0 0 1 0 1.262l-3.5 2.25A.75.75 0 0 1 8 12.25v-4.5a.75.75 0 0 1 .39-.658Z"
                            clipRule="evenodd"
                            fillRule="evenodd"
                        />
                    </svg>
                    Watch demo
                </a>

                <a
                    href="#"
                    className="flex items-center justify-center gap-x-2.5 p-3
                     text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                >
                    <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="size-5 flex-none text-gray-400"
                        aria-hidden="true"
                    >
                        <path
                            d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                            clipRule="evenodd"
                            fillRule="evenodd"
                        />
                    </svg>
                    Contact sales
                </a>
            </div>
        </div>
    );
};
