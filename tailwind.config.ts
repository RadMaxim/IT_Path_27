import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                textBtn:{
                    DEFAULT: '#ED5226', // Основной цвет
                    light: '#FF7A52',   // Светлый вариант
                    dark: '#C73A15',    // Темный вариант
                    hover: '#ffad97',   // Цвет для hover
                    active: '#B23D1B',  // Цвет для active
            }
            // ... ваш кастомный theme
        },
    }},
    plugins: [],
}
export default config