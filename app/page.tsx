'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Используем requestAnimationFrame для синхронизации с браузером
        const rafId = requestAnimationFrame(() => {
            setIsVisible(true);
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

                        quality={100}
                    />
                    <div className={`typewriter-text ${isVisible ? 'typewriter-animation' : ''}`}>
                        <h1  className="text-4xl font-bold text-white dark:text-white sm:text-5xl text-wrap">
                            Добро пожаловать в IT-Path
                        </h1>
                        <p className="mt-4 text-lg text-white dark:text-gray-300">
                            Ваш путь к успеху в IT начинается здесь
                        </p>
                    </div>
                </div>
                <style jsx>{`
  .clip-hexagon {
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  }
`}</style>
            </main>
    );
}