# System Architecture & Workflow

## 🏗️ Technical Architecture
WellLoop AI utilizes a **Hybrid Architecture** combining a high-performance Next.js Frontend with a specialized Python RAG Engine for complex analysis.

```mermaid
graph TD
    subgraph "Frontend Layer (vercel)"
        UI[Next.js 14 UI] -->|User Interaction| API[Next.js API Routes]
        API -->|JSON Response| UI
    end

    subgraph "Logic Layer"
        API -->|HTTP/Shell Call| RAG[Python Context Engine]
        RAG -->|JSON Data| API
    end

    subgraph "AI & Data Layer"
        RAG --"1. Vectorize"--> GEMINI[Google Gemini API]
        GEMINI --"2. Embeddings"--> RAG
        RAG --"3. Cosine Sim"--> VEC[Vector Store (In-Memory)]
    end

    classDef next fill:#000000,stroke:#fff,color:#fff;
    classDef py fill:#3776ab,stroke:#fff,color:#fff;
    classDef google fill:#8e24aa,stroke:#fff,color:#fff;
    
    class UI,API next;
    class RAG,VEC py;
    class GEMINI google;
```

---

## 🔄 Data Workflow: From Survey to Insight
This sequence diagram illustrates how a user's role-based response is processed into a predictive insight.

```mermaid
sequenceDiagram
    participant User as 👤 Engineer
    participant FE as 🖥️ Dashboard
    participant API as ⚙️ Next.js API
    participant PY as 🐍 Python RAG
    participant AI as 🧠 Gemini Flash

    User->>FE: Submits "I'm blocked by too many meetings."
    FE->>API: POST /api/analyze-blocker
    API->>PY: Call context_engine.py with text
    
    rect rgb(240, 248, 255)
        Note over PY, AI: Retrieval Augmented Generation
        PY->>AI: Generate Embedding for query
        AI-->>PY: Vector [0.12, -0.45, ...]
        PY->>PY: Calculate Cosine Similarity
        PY->>PY: Retrieve Top-K Historical Docs
    end

    PY->>AI: Send Prompt + Retrieved Context
    AI-->>PY: "High burnout risk detected. Recommendation: No-Meeting Wed."
    PY-->>API: Return Insight Object
    API-->>FE: Display Insight Card
    
    FE->>User: Shows "Burnout Risk: High"
```
