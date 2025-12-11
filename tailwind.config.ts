import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#2563EB", // Blue 600
                secondary: "#64748B", // Slate 500
                accent: "#F59E0B", // Amber 500
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
            }
        },
    },
    plugins: [],
};
export default config;
