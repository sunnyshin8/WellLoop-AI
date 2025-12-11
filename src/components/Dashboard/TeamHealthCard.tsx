import React from 'react';
import { cn } from '@/lib/utils';
import { Activity, TrendingDown, TrendingUp, AlertTriangle } from 'lucide-react';

interface TeamHealthCardProps {
    role: string;
    score: number;
    trend: 'up' | 'down' | 'stable';
    riskLevel: 'low' | 'medium' | 'high';
    insights: string[];
}

export function TeamHealthCard({ role, score, trend, riskLevel, insights }: TeamHealthCardProps) {
    return (
        <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{role}</h3>
                    <p className="text-sm text-zinc-500">Team Health Score</p>
                </div>
                <div className={cn(
                    "flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-full",
                    score >= 80 ? "bg-green-100 text-green-700" :
                        score >= 60 ? "bg-amber-100 text-amber-700" :
                            "bg-red-100 text-red-700"
                )}>
                    {score}/100
                </div>
            </div>

            <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                    {trend === 'down' ? <TrendingDown className="w-4 h-4 text-red-500" /> : <TrendingUp className="w-4 h-4 text-green-500" />}
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">
                        {trend === 'down' ? 'Trending down since last sprint' : 'Trending up from last week'}
                    </span>
                </div>

                {riskLevel === 'high' && (
                    <div className="flex items-center gap-2 text-xs font-semibold text-red-600 bg-red-50 dark:bg-red-900/20 px-3 py-2 rounded-lg border border-red-100 dark:border-red-900/30">
                        <AlertTriangle className="w-4 h-4" />
                        High Burnout Risk Detected
                    </div>
                )}
            </div>

            <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Key Insights</h4>
                {insights.map((insight, i) => (
                    <div key={i} className="text-sm text-zinc-700 dark:text-zinc-300 pl-3 border-l-2 border-primary/20">
                        {insight}
                    </div>
                ))}
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <button className="w-full py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                    View Recommended Actions &rarr;
                </button>
            </div>
        </div>
    );
}
