import React from 'react';
import Image from "next/image";
import SubStack from './substack';

export const TechStack = () => {

    const machine_learning = [
        "Python", "NumPy", "Pandas", "Scikit-learn", "Matplotlib"
    ];

    const deep_learning = [
        "PyTorch", "Torchvision", "CNNs", "RNNs", "Transformers"
    ];

    const natural_language_processing = [
        "NLTK", "SpaCy", "Hugging Face", "Seq2Seq", "Attention Mechanisms"
    ];

    const generative_ai = [
        "LLMs", "LangChain", "Ollama", "Diffusion Models", "GANs"
    ];

    const rag_systems = [
        "LangChain", "ChromaDB", "FAISS", "Vector Databases", "Semantic Search"
    ];

    const reinforcement_learning = [
        "Q-Learning", "DQN", "Policy Gradients", "Actor-Critic", "Gymnasium"
    ];

    const backend_and_production = [
        "FastAPI", "REST APIs", "N8N", "Docker", "System Design"
    ];

    const programming_languages = [
        "Python", "C", "C++", "C#", "Java"
    ];
    
    return (
        <main className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-10 md:px-15 lg:px-25 pb-10 mt-10">

            <SubStack
                stack_name={'Machine Learning'}
                stack={machine_learning}
            />

            <SubStack
                stack_name={'Deep Learning'}
                stack={deep_learning}
            />
            <SubStack
                stack_name={'NLP - Natural Language Processing'}
                stack={natural_language_processing}
            />
            <SubStack
                stack_name={'Generative AI'}
                stack={generative_ai}
            />
            <SubStack
                stack_name={'RAG Systems'}
                stack={rag_systems}
            />
            <SubStack
                stack_name={'Reinforcement Learning'}
                stack={reinforcement_learning}
            />
            <SubStack
                stack_name={'Backend, Development and Automation'}
                stack={backend_and_production}
            />
            <SubStack
                stack_name={'Programming Languages'}
                stack={programming_languages}
            />

        </main>
    );
};