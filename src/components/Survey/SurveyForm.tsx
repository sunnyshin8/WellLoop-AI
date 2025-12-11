"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

import { ROLES } from '@/data/roles';

// Fallback questions if role not found
const DEFAULT_QUESTIONS = [
    "How is your work-life balance this week?",
    "Do you feel supported by your team?",
    "Are your goals clear?",
    "Do you have the tools you need?",
    "Is feedback provided regularly?",
    "Do you feel valued?",
    "Is communication effective?",
    "Are priorities stable?",
    "Do you have opportunities to learn?",
    "Overall satisfaction?"
];

export default function SurveyForm({ role }: { role: string }) {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [completed, setCompleted] = useState(false);

    const decodedRole = decodeURIComponent(role);

    // Find role definition
    const roleDef = ROLES.find(r => r.title.toLowerCase() === decodedRole.toLowerCase());

    // Generate questions: 2 per skill
    const questions = roleDef
        ? roleDef.skills.flatMap(skill => [
            `How would you rate your proficiency/comfort with ${skill}?`,
            `Do you have the resources/support you need for ${skill}?`
        ])
        : DEFAULT_QUESTIONS;

    const progress = ((currentStep + 1) / questions.length) * 100;

    const handleAnswer = async (score: number) => {
        const newAnswers = { ...answers, [currentStep]: score };
        setAnswers(newAnswers);

        if (currentStep < questions.length - 1) {
            setTimeout(() => setCurrentStep(c => c + 1), 250); // Small delay for UX
        } else {
            setIsSubmitting(true);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            setCompleted(true);
            setTimeout(() => router.push('/dashboard'), 2000);
        }
    };

    if (completed) {
        return (
            <div className="text-center space-y-4 animate-in fade-in zoom-in duration-500">
                <div className="mx-auto w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold">All caught up!</h2>
                <p className="text-zinc-500">Thanks for checking in today.</p>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
            {/* Progress Bar */}
            <div className="h-1 bg-zinc-100 dark:bg-zinc-800 w-full">
                <div
                    className="h-full bg-primary transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <div className="p-8">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2 block">
                    {decodedRole} Check-in • Question {currentStep + 1}/{questions.length}
                </span>

                <h2 className="text-2xl font-semibold mb-8 text-zinc-900 dark:text-white min-h-[4rem]">
                    {questions[currentStep]}
                </h2>

                <div className="grid grid-cols-5 gap-3">
                    {[1, 2, 3, 4, 5].map((score) => (
                        <button
                            key={score}
                            onClick={() => handleAnswer(score)}
                            disabled={isSubmitting}
                            className={cn(
                                "h-14 rounded-xl border-2 font-bold text-lg transition-all active:scale-95 hover:-translate-y-1",
                                answers[currentStep] === score
                                    ? "border-primary bg-primary/10 text-primary"
                                    : "border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:border-primary/50 text-zinc-600"
                            )}
                        >
                            {score}
                        </button>
                    ))}
                </div>

                <div className="mt-8 flex justify-between text-xs text-zinc-400 font-medium px-1">
                    <span>Not at all</span>
                    <span>Absolutely</span>
                </div>
            </div>
        </div>
    );
}
