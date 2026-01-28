"use client"

import { useEffect, useRef, useState } from "react"

declare global {
    interface Window {
        ymaps: any
    }
}

interface Location {
    coords: [number, number]
    address: string
}

const locations: Location[] = [
    { coords: [53.934, 27.485], address: "Налибокская улица, 38" },
    { coords: [53.932, 27.62], address: "Петра Мстиславца, 3" },
    { coords: [53.88, 27.52], address: "Алибегова, 12Б" },
]

export function YandexMap() {
    const mapRef = useRef<HTMLDivElement>(null)
    const [mapLoaded, setMapLoaded] = useState(false)
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)

    useEffect(() => {
        if (typeof window !== "undefined" && !document.getElementById("yandex-maps-script")) {
            const script = document.createElement("script")
            script.id = "yandex-maps-script"
            script.src = "https://api-maps.yandex.ru/2.1/?apikey=your-api-key&lang=ru_RU"
            script.async = true
            script.onload = () => {
                window.ymaps.ready(() => {
                    setMapLoaded(true)
                })
            }
            document.head.appendChild(script)
        } else if (window.ymaps) {
            window.ymaps.ready(() => {
                setMapLoaded(true)
            })
        }
    }, [])

    useEffect(() => {
        if (mapLoaded && mapRef.current) {
            const map = new window.ymaps.Map(mapRef.current, {
                center: [53.9, 27.55],
                zoom: 11,
                controls: ["zoomControl", "trafficControl", "geolocationControl"],
            })

            locations.forEach((location) => {
                const placemark = new window.ymaps.Placemark(
                    location.coords,
                    {
                        balloonContentHeader: location.address,
                        balloonContentBody: `<p>Адрес: ${location.address}</p>`,
                        hintContent: location.address,
                    },
                    {
                        preset: "islands#blueCircleDotIcon",
                    }
                )
                map.geoObjects.add(placemark)
            })

            return () => {
                map.destroy()
            }
        }
    }, [mapLoaded])

    return (
        <div className="w-full">
            {/* Location buttons */}
            <div className="mb-4 flex flex-wrap gap-2">
                {locations.map((location, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedLocation(location)}
                        className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                            selectedLocation?.address === location.address
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                    >
                        {location.address}
                    </button>
                ))}
            </div>

            {/* Map container */}
            <div className="relative overflow-hidden rounded-xl border border-border">
                <div ref={mapRef} className="h-[400px] w-full md:h-[500px]" />

                {!mapLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-muted">
                        <div className="flex flex-col items-center gap-2">
                            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
                            <p className="text-sm text-muted-foreground">Загрузка карты...</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Selected location info */}
            {selectedLocation && (
                <div className="mt-4 rounded-lg bg-muted p-4">
                    <h3 className="font-semibold text-foreground">{selectedLocation.address}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">г. Минск, Беларусь</p>
                    <a
                        href={`https://yandex.ru/maps/?pt=${selectedLocation.coords[1]},${selectedLocation.coords[0]}&z=16&l=map`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" x2="21" y1="14" y2="3" />
                        </svg>
                        Открыть в Яндекс Картах
                    </a>
                </div>
            )}
        </div>
    )
}
