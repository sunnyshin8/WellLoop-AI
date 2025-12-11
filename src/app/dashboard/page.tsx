import React from 'react';
import { TeamHealthCard } from '@/components/Dashboard/TeamHealthCard';
import { PulseReportButton } from '@/components/Dashboard/PulseReportButton';

export default function DashboardPage() {
    return (
        <main className="min-h-screen bg-zinc-50/50 dark:bg-zinc-950 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Team Dashboard</h1>
                        <p className="text-zinc-500">Real-time well-being insights across your organization.</p>
                    </div>
                    <PulseReportButton />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <TeamHealthCard
                        role="Engineering"
                        score={65}
                        trend="down"
                        riskLevel="high"
                        insights={[
                            "30% report unclear requirements",
                            "High frustration with legacy code blocks",
                            "Workload perceived as 'Crushing' by Senior devs"
                        ]}
                    />

                    <TeamHealthCard
                        role="Product Design"
                        score={82}
                        trend="stable"
                        riskLevel="low"
                        insights={[
                            "Feeling creative autonomy",
                            "Good feedback loops established",
                            "Minor concern on deadline pressure"
                        ]}
                    />

                    <TeamHealthCard
                        role="Product Management"
                        score={74}
                        trend="up"
                        riskLevel="medium"
                        insights={[
                            "Alignment improving with Eng",
                            "Scope creep is main stressor",
                            "Communication gaps reducing"
                        ]}
                    />
                </div>
            </div>
        </main>
    );
}
