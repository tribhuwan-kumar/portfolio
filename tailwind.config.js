/** @type {import('tailwindcss').Config} */
import portfolio from './src/portfolio'

module.exports = {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {

        },
    },
    plugins: [],
}

