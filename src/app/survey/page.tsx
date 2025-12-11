import { Navbar } from '@/components/Navbar';
import { RoleSelector } from '@/components/RoleSelector';
import { BrainCircuit, Users, Target, TrendingUp } from 'lucide-react';

export default function SurveyLandingPage() {
    return (
        <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
            <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                        Select Your Role to Begin
                    </h1>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        WellLoop AI uses role-specific intelligence to analyze team health.
                        Select your function below to start a personalized 10-question assessment.
                    </p>
                </div>

                <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl mb-12 flex flex-col items-center">
                    <label className="text-sm font-bold uppercase text-zinc-500 mb-4 tracking-wide">Choose your path</label>
                    <RoleSelector />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-800/30">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100">Role-Adaptive Surveys</h3>
                        </div>
                        <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed">
                            Instead of generic "how are you" questions, WellLoop asks:
                            <br /><br />
                            • <strong>Engineers:</strong> CI/CD friction, technical debt, sprint flow.
                            <br />
                            • <strong>Designers:</strong> Creative autonomy, feedback velocity.
                            <br />
                            • <strong>PMs:</strong> Stakeholder alignment, scope creep.
                        </p>
                    </div>

                    <div className="p-6 bg-purple-50 dark:bg-purple-900/10 rounded-xl border border-purple-100 dark:border-purple-800/30">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600">
                                <BrainCircuit className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-purple-900 dark:text-purple-100">Predictive AI Intelligence</h3>
                        </div>
                        <p className="text-purple-800 dark:text-purple-200 text-sm leading-relaxed">
                            We don't just track scores. We analyze:
                            <br /><br />
                            • <strong>Sentiment:</strong> Detect hidden frustration before burnout.
                            <br />
                            • <strong>SWOT Analysis:</strong> Automated strengths & threats detection.
                            <br />
                            • <strong>Actionable Playbooks:</strong> Concrete next steps for managers.
                        </p>
                    </div>
                </div>

            </div>
        </main>
    );
}
