import os
import google.generativeai as genai
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

# Configure Gemini
# Ensure GEMINI_API_KEY is set in your environment
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

class WellLoopContextEngine:
    def __init__(self):
        self.model = 'models/embedding-001'
        self.knowledge_base = []
        self.vectors = []

    def embed_text(self, text):
        """Generates embedding for a given text using Gemini."""
        result = genai.embed_content(
            model=self.model,
            content=text,
            task_type="retrieval_document"
        )
        return result['embedding']

    def add_document(self, doc_id, text, metadata={}):
        """Adds a document to the in-memory vector store."""
        vector = self.embed_text(text)
        self.knowledge_base.append({
            'id': doc_id,
            'text': text,
            'metadata': metadata
        })
        self.vectors.append(vector)
        print(f"Indexed document: {doc_id}")

    def find_relevant_context(self, query, top_k=3):
        """Finds the most relevant documents for a user query."""
        if not self.vectors:
            return []

        # Embed query
        query_vector = genai.embed_content(
            model=self.model,
            content=query,
            task_type="retrieval_query"
        )['embedding']

        # Calculate Similarity
        scores = cosine_similarity([query_vector], self.vectors)[0]
        
        # Get Top K indices
        top_indices = np.argsort(scores)[-top_k:][::-1]
        
        results = []
        for idx in top_indices:
            results.append({
                'score': float(scores[idx]),
                'content': self.knowledge_base[idx]['text'],
                'metadata': self.knowledge_base[idx]['metadata']
            })
            
        return results

# --- Example Usage ---
if __name__ == "__main__":
    engine = WellLoopContextEngine()
    
    # Simulate Historical Data
    engine.add_document("doc1", "Engineers are reporting fatigue due to context switching between 3 projects.")
    engine.add_document("doc2", "Design team feels disconnected from product roadmap decisions.")
    engine.add_document("doc3", "High velocity in Sprint 42, but code quality dropped by 15%.")

    # Current Survey Signal
    query = "Why is the engineering team feeling burned out?"
    
    print(f"\nQuery: {query}")
    relevant_docs = engine.find_relevant_context(query)
    
    print("\n--- Relevant Context (RAG) ---")
    for doc in relevant_docs:
        print(f"[{doc['score']:.4f}] {doc['content']}")

    print("\nNote: In production, inject this context into the Gemini Analysis Prompt for higher accuracy.")
