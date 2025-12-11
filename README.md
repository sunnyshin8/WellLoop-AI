# WellLoop AI
> **Predict and prevent team burnout with AI.**

WellLoop AI is an intelligent organizational psychology platform built for **Snowfest 2025**. It moves beyond generic surveys to provide role-adaptive insights and predictive burnout detection for engineering teams.

![WellLoop AI Dashboard](/public/logo.png)

## 🚀 Impact
Teams shouldn't have to burn out to build great things. WellLoop AI serves:
- **Engineers**: By reducing context switching and identifying blockers early.
- **Product Managers**: By highlighting alignment gaps before they cause delays.
- **Designers**: By protecting creative time and ensuring clear specs.

## ✨ Key Features
- **🔮 Predictive AI Dashboard**: Detects attrition risk and collaboration gaps 24 hours ahead using Google Gemini 2.5 Flash.
- **🎭 Role-Adaptive Surveys**: Questions that adapt dynamically to the user's role (Eng, Design, PM).
- **📊 AI Pulse Reports**: Instant SWOT analysis of team health with actionable recommendations.
- **📑 PDF Infrastructure**: Export executive summaries for leadership reviews.

## 🛠️ Tech Stack
- **Frontend**: Next.js 14, React, Tailwind CSS
- **AI/Backend**: Google Gemini API (`gemini-2.5-flash`), Node.js Edge Runtime
- **Visualization**: Lucide React
- **Language**: TypeScript

## 🧠 Advanced AI Architecture (Python)
(See `python_ai/` directory)
We include a **Python RAG (Retrieval-Augmented Generation) Module** designed to:
- Generate vector embeddings for survey responses.
- improved context awareness for the LLM.
- Perform semantic search to link current blockers with historical solutions.

## 🏁 Getting Started

### Prerequisites
- Node.js 18+
- Google Gemini API Key

### Installation
1. Clone the repo:
   ```bash
   git clone https://github.com/sunnyshin8/WellLoop-AI.git
   cd wellloop-ai
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create `.env.local`:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```
4. Run the dev server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000).

---
Built with ❤️ for Snowfest 2025.
