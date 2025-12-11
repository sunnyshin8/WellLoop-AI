import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "WellLoop AI - Intelligent Team Well-being",
    description: "Prevent burnout before it happens with role-adaptive intelligence.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} min-h-screen relative overflow-x-hidden selection:bg-purple-100 dark:selection:bg-purple-900`}>
                <div className="fixed inset-0 z-[-50] opacity-70 pointer-events-none">
                    <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                    <div className="absolute inset-0 bg-white/50 dark:bg-zinc-950/80 backdrop-blur-[1px]"></div>
                </div>
                <Navbar />
                {children}
            </body>
        </html>
    );
}

