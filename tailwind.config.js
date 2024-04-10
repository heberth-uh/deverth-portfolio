/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'content-blue': '#022F42',
                'dark-blue': '#021323',
                'darker-blue': '#020C18',
                'sky-blue': '#15C7FF',
            },
            fontFamily: {
                body: ['Poppins', 'sans-serif']
            },
            dropShadow: {
                '4xl': [
                    '0 35px 35px rgba(0, 0, 0, 0.25)',
                    '0 45px 65px rgba(0, 0, 0, 0.15)'
                ]
            },
            backgroundImage: {
                'hero-pattern': 'url("/src/images/squares-pattern.svg")',
                'hero-pattern-dark': 'url("/src/images/squares-pattern-dark.svg")',
            },
            backgroundSize: {
                'y-middle': '100% 50%',
            }
        }
    },
    plugins: [],
}

