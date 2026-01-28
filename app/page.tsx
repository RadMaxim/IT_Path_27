'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";
import {ServicesSection} from "@shared/ui/services/ui/ServicesSection";
import {FAQ} from "@shared/ui/FAQ/FAG";
import PromoForm from "@/features/FromPromo";
import PaymentMethods from "@shared/ui/PaymentMethods/PaymentMethods";
import {YandexMap} from "@shared/ui/YandexMap";

export default function Home() {
    const [isVisibleH1, setIsVisibleH1] = useState(false);
    const [isVisibleP, setIsVisibleP] = useState(false);

    useEffect(() => {
        // Используем requestAnimationFrame для синхронизации с браузером
        const rafId = requestAnimationFrame(() => {
            setIsVisibleH1(true);
            setTimeout(() => setIsVisibleP(true), 3000);
        });

        return () => cancelAnimationFrame(rafId);
    }, []);

    return (
            <main className="flex  flex-col items-center justify-center" style={{marginTop:"5rem"}}>

                {/* Контейнер для текста с фиксированной высотой */}
                <div className="relative w-full h-screen flex items-center justify-center overflow-hidden" >
                    <Image
                        src="/main.png"
                        alt="IT-Path Background"
                        fill
                        className="object-cover brightness-50 group-hover:brightness-75 transition-all duration-300"
                        priority
                        objectPosition="center" // "center", "top", "bottom", "left", "right"

                        quality={75}
                    />
                    <div className={"flex items-center justify-center gap-2"}>
                        <div >
                            <h1 className={`text-4xl font-bold text-white dark:text-white sm:text-5xl text-wrap typewriter-text ${isVisibleH1 ? 'typewriter-animation' : ''}`}>
                                Добро пожаловать в IT-Path
                            </h1>
                            <p className={`mt-4 text-lg text-white dark:text-gray-300 typewriter-text ${isVisibleP ? 'typewriter-animation' : ''}`}>
                                Ваш путь к успеху в IT начинается здесь
                            </p>
                        </div>
                        <PromoForm/>
                    </div>

                </div>
              <ServicesSection/>
                <FAQ/>
                <PaymentMethods/>
                <YandexMap/>
            </main>
    );
}