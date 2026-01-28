"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"

const addresses = [
    "г. Минск, ул. П. Мстиславца 3",
    "г. Минск, ул. Немига 12",
    "г. Минск, пр. Независимости 58",
]

type FormValues = {
    name: string
    phone: string
    address: string
    agreed: boolean
}

export default function PromoForm() {
    const [isOpen, setIsOpen] = useState(false)

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues: {
            address: addresses[0],
            agreed: false,
        },
    })

    const address = watch("address")

    const onSubmit = (data: FormValues) => {
        console.log(data)
        alert("Форма отправлена!")
    }

    return (
        <div className="min-h-screen bg-[#E85A2B] flex items-center justify-center p-4 z-20">
            <div className="w-full max-w-xl px-6 py-10">
                <h1 className="text-white text-5xl font-bold text-center mb-2">
                    Акция!
                </h1>
                <p className="text-white text-xl text-center mb-8">
                    Запишитесь на БЕСПЛАТНОЕ
                    <br />
                    первое занятие прямо сейчас!
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Имя */}
                    <input
                        type="text"
                        placeholder="Имя"
                        {...register("name", { required: "Введите имя" })}
                        className="w-full px-4 py-4 rounded-md text-[#E85A2B]
                       placeholder:text-[#E85A2B]/70 bg-white outline-none"
                    />
                    {errors.name && (
                        <p className="text-white text-sm">{errors.name.message}</p>
                    )}

                    {/* Адрес (dropdown) */}
                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            className="w-full px-4 py-4 rounded-md text-[#E85A2B]
                         bg-white text-left flex items-center
                         justify-between outline-none"
                        >
                            <span>{address}</span>
                        </button>

                        {isOpen && (
                            <div className="absolute top-full left-0 right-0 mt-1
                              bg-white rounded-md shadow-lg z-10 overflow-hidden">
                                {addresses.map(addr => (
                                    <button
                                        key={addr}
                                        type="button"
                                        onClick={() => {
                                            setValue("address", addr)
                                            setIsOpen(false)
                                        }}
                                        className="w-full px-4 py-3 text-left
                               text-[#E85A2B]
                               hover:bg-[#E85A2B]/10 transition-colors"
                                    >
                                        {addr}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Телефон */}
                    <input
                        type="tel"
                        placeholder="Номер телефона"
                        {...register("phone", {
                            required: "Введите номер телефона",
                            minLength: {
                                value: 7,
                                message: "Слишком короткий номер",
                            },
                        })}
                        className="w-full px-4 py-4 rounded-md text-[#E85A2B]
                       placeholder:text-[#E85A2B]/70 bg-white outline-none"
                    />
                    {errors.phone && (
                        <p className="text-white text-sm">{errors.phone.message}</p>
                    )}

                    {/* Checkbox */}
                    <label className="flex items-center gap-2 cursor-pointer py-2">
                        <input
                            type="checkbox"
                            {...register("agreed", {
                                required: "Необходимо принять условия",
                            })}
                            className="w-4 h-4 accent-white"
                        />
                        <span className="text-white">
              Нажимая на кнопку, я принимаю условия
            </span>
                    </label>
                    {errors.agreed && (
                        <p className="text-white text-sm">
                            {errors.agreed.message}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="w-full py-4 rounded-md border-2
                       border-white text-white font-medium
                       text-lg hover:bg-white/10
                       transition-colors mt-4"
                    >
                        Отправить
                    </button>
                </form>
            </div>
        </div>
    )
}
