import Link from "next/link";
import { RoleSelector } from "@/components/RoleSelector";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">


            <div className="relative flex flex-col items-center place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] before:-z-10 after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
                <h1 className="text-5xl font-bold text-center tracking-tight text-slate-900 dark:text-white sm:text-7xl mb-8">
                    Prevent Burnout <br />
                    <span className="text-primary">Before It Happens</span>
                </h1>

                <div className="flex flex-col sm:flex-row gap-4 items-center animate-in fade-in slide-in-from-bottom-4 duration-700 w-full sm:w-auto px-6 sm:px-0 mt-4">
                    <a
                        href="/dashboard"
                        className="w-full sm:w-auto text-center rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-8 py-3.5 font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                    >
                        View Dashboard
                    </a>
                    <span className="text-sm text-zinc-400 font-medium hidden sm:inline-block">or</span>
                    <span className="text-sm text-zinc-400 font-medium sm:hidden my-1">- OR -</span>
                    <div className="w-full sm:w-auto shadow-sm">
                        <RoleSelector />
                    </div>
                </div>
            </div>

            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left gap-4">
                <Link
                    href="/survey"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30"
                >
                    <h2 className="mb-3 text-2xl font-semibold">
                        Role-Adaptive{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        Intelligent surveys tailored to Engineers, Designers, and PMs.
                    </p>
                </Link>

                <Link
                    href="/dashboard"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30"
                >
                    <h2 className="mb-3 text-2xl font-semibold">
                        Predictive AI{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        Detect burnout, attrition, and collaboration gaps 24h ahead.
                    </p>
                </Link>

                <a
                    href="/dashboard"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30 bg-primary/10"
                >
                    <h2 className="mb-3 text-2xl font-semibold text-primary">
                        Try Demo{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        See the Manager Dashboard and Insights in action.
                    </p>
                </a>
            </div>
        </main>
    );
}
