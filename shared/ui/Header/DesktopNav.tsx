'use client';

import {useCallback, useState} from 'react';
import {navigationItems} from "@/shared/lib/constants/navigationItems";
import {ProductDropdown} from "@shared/ui/Header/ProductDropdown";
import Link from "next/link";
import ArrowBTN from "@shared/assets/icons/arrow";

export const DesktopNav = () => {
    const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

    const handleMouseEnter = useCallback(() => {
        setIsProductDropdownOpen(true);
    },[]);

    const handleMouseLeave = useCallback(() => {
        setIsProductDropdownOpen(false);
    },[]);

    const toggleDropdown = useCallback(() => {
        setIsProductDropdownOpen(!isProductDropdownOpen);
    },[isProductDropdownOpen]);

    return (
        <div className="hidden lg:flex lg:gap-x-12">
            {navigationItems.map((item) => (
                <div key={item.id} className="relative">
                    {item.hasDropdown ? (
                        <>
                            <button
                                type="button"
                                onClick={toggleDropdown}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                className="flex items-center gap-x-1 text-sm/6 font-semibold text-textBtn "
                            >
                                {item.label}
                               <ArrowBTN isProductDropdownOpen={isProductDropdownOpen} />
                            </button>

                            {/* Dropdown меню */}
                            {isProductDropdownOpen && (
                                        <ProductDropdown/>
                            )}
                        </>
                    ) : (
                        <Link
                            href={item.href}
                            className="text-sm/6 font-semibold  text-textBtn"
                        >
                            {item.label}
                        </Link>
                    )}
                </div>
            ))}
        </div>
    );
};