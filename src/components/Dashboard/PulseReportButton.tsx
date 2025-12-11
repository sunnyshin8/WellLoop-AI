"use client";

import React, { useState } from 'react';
import { Sparkles, Loader2, FileText, Download } from 'lucide-react';
import { jsPDF } from "jspdf";
import { cn } from '@/lib/utils';

export function PulseReportButton() {
    const [loading, setLoading] = useState(false);
    const [report, setReport] = useState<{ sentiment: string; score: number; summary: string; recommended_action: string; swot?: any } | null>(null);

    const generateReport = async () => {
        setLoading(true);
        setReport(null);
        try {
            const res = await fetch('/api/analyze', { method: 'POST', body: JSON.stringify({ teamId: 'demo' }) });
            const data = await res.json();
            if (data.error) throw new Error(data.error);
            setReport(data);
        } catch (e) {
            console.error(e);
            // Fallback mock if API fails completely (e.g. timeout)
            setReport({
                sentiment: "Neutral",
                score: 50,
                summary: "We couldn't generate a live detailed report at this moment, but here is a placeholder based on typical patterns.",
                recommended_action: "Check the console logs for API errors and try again."
            });
        } finally {
            setLoading(false);
        }
    };

    const handleDownloadPDF = () => {
        if (!report) return;

        const doc = new jsPDF();

        // Title
        doc.setFontSize(22);
        doc.setTextColor(0, 0, 0); // Black
        doc.text("WellLoop AI - Team Pulse Report", 20, 20);

        // Date
        doc.setFontSize(10);
        doc.setTextColor(100);
        doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 30);

        // Divider
        doc.setLineWidth(0.5);
        doc.line(20, 35, 190, 35);

        // Sentiment
        doc.setFontSize(14);
        doc.setTextColor(0); // Black
        doc.text(`Sentiment Score: ${report.score}/100 (${report.sentiment})`, 20, 45);

        // Summary
        doc.setFontSize(12);
        doc.setTextColor(50);
        const splitSummary = doc.splitTextToSize(report.summary, 170);
        doc.text(splitSummary, 20, 55);

        let yPos = 55 + (splitSummary.length * 7) + 10;

        // Recommended Action
        doc.setFontSize(14);
        doc.setTextColor(0, 102, 204); // Primary Blue-ish
        doc.text("Recommended Action:", 20, yPos);
        yPos += 7;
        doc.setFontSize(12);
        doc.setTextColor(50);
        const splitAction = doc.splitTextToSize(report.recommended_action, 170);
        doc.text(splitAction, 20, yPos);
        yPos += (splitAction.length * 7) + 10;

        // SWOT
        if (report.swot) {
            const sections = ['strengths', 'weaknesses', 'opportunities', 'threats'];

            sections.forEach(sec => {
                if (yPos > 270) {
                    doc.addPage();
                    yPos = 20;
                }
                const title = sec.charAt(0).toUpperCase() + sec.slice(1);
                doc.setFontSize(14);
                doc.setTextColor(0);
                doc.text(title, 20, yPos);
                yPos += 7;

                doc.setFontSize(10);
                doc.setTextColor(60);
                // @ts-ignore
                const points = report.swot[sec] || [];
                points.forEach((point: string) => {
                    const splitPoint = doc.splitTextToSize(`• ${point}`, 170);
                    doc.text(splitPoint, 20, yPos);
                    yPos += (splitPoint.length * 5) + 2;
                });
                yPos += 5;
            });
        }

        doc.save("WellLoop_Pulse_Report.pdf");
    };

    return (
        <div className='relative'>
            <button
                onClick={generateReport}
                disabled={loading}
                className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-medium transition-all shadow-lg shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                {loading ? "Analyzing..." : "Generate AI Pulse Report"}
            </button>

            {report && (
                <div className="absolute top-12 right-0 w-96 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-2xl p-6 z-50 animate-in fade-in slide-in-from-top-2">
                    <div className="flex items-center gap-2 mb-3 text-primary">
                        <FileText className="w-5 h-5" />
                        <h3 className="font-bold">AI Executive Summary</h3>
                        <button
                            onClick={handleDownloadPDF}
                            className="ml-auto flex items-center gap-1 text-xs bg-zinc-100 hover:bg-zinc-200 text-zinc-700 px-2 py-1 rounded transition-colors"
                        >
                            <Download className="w-3 h-3" />
                            PDF
                        </button>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center text-sm border-b pb-2 border-zinc-100 dark:border-zinc-800">
                            <span className="text-zinc-500">Sentiment</span>
                            <span className="font-medium text-amber-600">
                                {report.sentiment || 'Analyzing...'}
                                <span className="ml-1 text-xs opacity-70">
                                    ({typeof report.score === 'number' ? report.score : '--'}/100)
                                </span>
                            </span>
                        </div>

                        <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                            {report.summary}
                        </p>

                        <div className="bg-primary/5 p-3 rounded-lg border border-primary/10">
                            <span className="text-xs font-bold uppercase text-primary tracking-wide block mb-1">Recommended Action</span>
                            <p className="text-xs text-zinc-700 dark:text-zinc-300">
                                {report.recommended_action || "No specific recommendation generated."}
                            </p>
                        </div>

                        {report.swot && (
                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="p-2 bg-emerald-50 dark:bg-emerald-900/10 rounded border border-emerald-100 dark:border-emerald-800/30">
                                    <strong className="text-emerald-700 block mb-1">Strengths</strong>
                                    <ul className="list-disc pl-3 text-emerald-800 dark:text-emerald-200">
                                        {report.swot.strengths?.slice(0, 2).map((s: string, i: number) => <li key={i}>{s}</li>)}
                                    </ul>
                                </div>
                                <div className="p-2 bg-rose-50 dark:bg-rose-900/10 rounded border border-rose-100 dark:border-rose-800/30">
                                    <strong className="text-rose-700 block mb-1">Weaknesses</strong>
                                    <ul className="list-disc pl-3 text-rose-800 dark:text-rose-200">
                                        {report.swot.weaknesses?.slice(0, 2).map((s: string, i: number) => <li key={i}>{s}</li>)}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>

                    <button
                        onClick={() => setReport(null)}
                        className="absolute top-2 right-2 text-zinc-300 hover:text-zinc-500"
                    >
                        ×
                    </button>
                </div>
            )}
        </div>
    );
}
