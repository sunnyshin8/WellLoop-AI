import { Navbar } from '@/components/Navbar';

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-6">About WellLoop AI</h1>
                <div className="prose dark:prose-invert">
                    <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8 leading-relaxed">
                        WellLoop AI is built on a simple premise: **Teams shouldn't have to burn out to build great things.**
                    </p>

                    <h2 className="text-2xl font-semibold mb-4 text-zinc-800 dark:text-white">Our Mission</h2>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                        We are dedicated to providing engineering leaders with the intelligence they need to support their teams proactively. By combining role-adaptive surveys with predictive AI, we turn vague feelings into actionable data.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4 text-zinc-800 dark:text-white">Why Snowfest?</h2>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        This project was created for the **Snowfest 2025 Hackathon** to demonstrate how AI can be applied to organizational psychology. We believe that by listening to the specific needs of Engineers, Designers, and Product Managers, we can create healthier, more productive work environments.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800">
                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-3">Empathy First</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm">Understanding the human behind the code. We prioritize mental health as a critical metric of success.</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800">
                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 mb-3">Data-Driven</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm">Decisions based on facts, not just feelings. We use advanced analytics to uncover hidden patterns.</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800">
                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-500 mb-3">Proactive Support</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm">Solving problems before they become crises. Early detection is effectively prevention.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
