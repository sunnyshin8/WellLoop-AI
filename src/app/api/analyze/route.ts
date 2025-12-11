import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Initialize Gemini
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
        // Using gemini-2.5-flash as verified by model test script.
        const model = genAI.getGenerativeModel({
            model: "gemini-flash-latest",
            generationConfig: { responseMimeType: "application/json" }
        });

        let analysis;

        if (process.env.GEMINI_API_KEY) {
            const prompt = `
            You are an expert HR analyst and organizational psychologist. 
            Analyze the team health data and provide a COMPREHENSIVE SWOT analysis.
            
            Context: Team ID: ${body.teamId}. This is an Engineering team facing some deadlines. 
            Recent survey signals: High clarity on tasks, but frequent blocks. Workload is nearing 'Heavy'.

            For each Strength, Weakness, Opportunity, and Threat, provide a detailed explanation (2-3 sentences) explaining the "WHY" and the potential impact.
            Also provide a sentiment score (0-100), a detailed executive summary paragraph, and a specific, actionable recommendation plan.

            Refurn ONLY valid JSON conforming to this structure:
            {
                "sentiment": "Positive" | "Neutral" | "Negative" | "Mixed",
                "score": number,
                "summary": "string (detailed paragraph)",
                "swot": {
                    "strengths": ["string (detailed)", "string (detailed)"],
                    "weaknesses": ["string (detailed)", "string (detailed)"],
                    "opportunities": ["string (detailed)", "string (detailed)"],
                    "threats": ["string (detailed)", "string (detailed)"]
                },
                "recommended_action": "string (detailed plan)"
            }
            `;

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();

            if (text) {
                analysis = JSON.parse(text);
            }
        }

        // Fallback if no API key or error/empty response
        if (!analysis) {
            analysis = {
                sentiment: "Mixed",
                score: 72,
                summary: "The engineering team is reporting increased friction with deployment processes. While clarity on tasks is high (4.2/5), blockers are frequent (3.8/5). (Fallback Data)",
                swot: {
                    strengths: ["High task clarity", "Strong team support"],
                    weaknesses: ["Frequent blockers", "Rising workload"],
                    opportunities: ["Process automation for deployments", "Clarify blockage resolution paths"],
                    threats: ["Burnout risk if 'Heavy' workload persists"]
                },
                recommended_action: "Schedule a 'Blocker-Busting' retro this Friday and review the deployment CI/CD pipeline logs."
            };
        }

        return NextResponse.json(analysis);
    } catch (error) {
        console.error('Gemini API Error:', error);
        // Return a mock response on error so the UI doesn't break, but log the error
        return NextResponse.json({
            sentiment: "Error",
            score: 0,
            summary: "Unable to generate live report due to an API error. Please check the logs.",
            recommended_action: "Contact system administrator.",
            swot: {
                strengths: [],
                weaknesses: [],
                opportunities: [],
                threats: []
            }
        });
    }
}
