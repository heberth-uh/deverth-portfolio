/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            screens: {
                md: '768px',
                lg: '1024px',
            },
        },
        extend: {
            colors: {
                bg: 'var(--color-bg)',
                'bg-alt': 'var(--color-bg-alt)',
                surface: 'var(--color-surface)',
                'surface-2': 'var(--color-surface-2)',
                border: 'var(--color-border)',
                'border-strong': 'var(--color-border-strong)',
                fg: 'var(--color-fg)',
                'fg-secondary': 'var(--color-fg-secondary)',
                'fg-tertiary': 'var(--color-fg-tertiary)',
                'fg-faint': 'var(--color-fg-faint)',
            },
            fontFamily: {
                display: ['"Space Grotesk"', 'sans-serif'],
                plex: ['"IBM Plex Sans"', 'sans-serif'],
                code: ['"IBM Plex Mono"', 'monospace'],
            },
        }
    },
    plugins: [],
}

