# ContextVault

## Overview

ContextVault is a Retrieval Augmented Generation (RAG) assistant focused on grounded answers from user-provided documents.

## What It Does

- Upload and index PDFs, DOCX, and TXT files.
- Chunk and embed document content into a vector store.
- Retrieve relevant context chunks for a query.
- Generate responses with source-aware grounding.

## Architecture

The app combines a Next.js frontend with API services for ingestion and querying. Embedding and retrieval pipelines are separated from the UI layer so indexing and chat can scale independently.

## Tech Stack

- Python
- FastAPI
- LangChain
- Next.js
- Tailwind CSS
- ChromaDB
- Gemini Embeddings
