# WellLoop AI: Predict and Prevent Team Burnout

![WellLoop AI Banner](/public/logo.png)

## 💡 Inspiration
In the high-pressure world of software development, burnout isn't just a personal feeling—it's a systemic failure. We noticed a recurring pattern: **Engineers** drowning in context switching, **Product Managers** misaligned on priorities, and **Designers** feeling disconnected from the roadmap.

Existing tools operate on lag indicators—surveys that tell you a team is unhappy *after* they've already started quitting. We wanted to build something **predictive**. We asked ourselves: *What if an AI could detect the subtle signals of burnout 24 hours before they become a crisis?*

Thus, **WellLoop AI** was born.

## 🏗️ How We Built It
We built WellLoop AI as a hybrid application, leveraging the speed of a modern web framework with the analytical power of Python for heavy lifting.

### The Stack
- **Frontend**: Next.js 14 and Tailwind CSS for a responsive, accessible dashboard.
- **AI Core**: Google Gemini 2.5 Flash for rapid inference and summarization.
- **RAG Engine**: A custom Python module using `google.generativeai` embeddings.

### The Intelligence Layer
The heart of our system is the `WellLoopContextEngine`. We moved beyond simple keyword matching to **Semantic Search**. We use the Gemini `models/embedding-001` to vectorize team sentiment.

To match a current blocker (query) with historical solutions (documents), we calculate the **Cosine Similarity** between their vector embeddings.

$$
\text{similarity}(\mathbf{A}, \mathbf{B}) = \frac{\mathbf{A} \cdot \mathbf{B}}{\|\mathbf{A}\| \|\mathbf{B}\|} = \frac{\sum_{i=1}^{n} A_i B_i}{\sqrt{\sum_{i=1}^{n} A_i^2} \sqrt{\sum_{i=1}^{n} B_i^2}}
$$

Where:
- \\( \mathbf{A} \\) is the vector for the user's current query (e.g., "Engineering fatigue").
- \\( \mathbf{B} \\) is the vector for a historical document in our knowledge base.

This math allows us to mathematically quantify "relevance" and surface insights that a simple keyword search would miss.

## 🧩 Challenges We Faced
### 1. The "Cold Start" Problem
One of our biggest challenges was handling the "cold start" problem for new teams. Without historical data, the RAG engine had nothing to retrieve.
**Solution**: We implemented a "seed" database of anonymized organizational psychology patterns. This gave the AI a baseline of wisdom to draw from on Day 1, which improves as the team adds their own data.

### 2. Hybrid Environment Complexity
Connecting a Next.js Edge execution environment with a Python logic layer presented latency hurdles.
**Solution**: We optimized our architecture to keep the "hot path" (UI interactions) purely in Node.js, calling out to the Python context engine only for deep-dive analysis requests.

## 🚀 Accomplishments & What We Learned
- **Gemini's Versatility**: We learned that Gemini isn't just a chat bot; its embedding models (`task_type="retrieval_document"`) are incredibly powerful for classification tasks.
- **Mathematical Intuition**: Implementing the vector math from scratch gave us a deeper appreciation for how high-dimensional space works in AI.

## 🔮 What's Next for WellLoop AI
We plan to introduce **Manager Auto-Pilot**—an agent that doesn't just report burnout, but automatically drafts calendar adjustments (like "No-Meeting Wednesdays") for approval when risk levels spike.
