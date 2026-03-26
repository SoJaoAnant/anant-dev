import React from 'react';
import Image from "next/image";
import SubStack from './substack';

export const TechStack = () => {

    const machine_learning = [
        "Python",
        "NumPy",
        "Pandas",
        "Scikit-learn",
        "Linear Regression",
        "Logistic Regression",
        "Random Forest",
        "Gradient Boosting",
        "Model Evaluation",
        "Feature Engineering"
        ];
        
    const deep_learning = [
        "PyTorch",
        "Torchvision",
        "Neural Networks",
        "CNNs",
        "RNNs",
        "LSTMs",
        "GRUs",
        "Transformers",
        "Training Pipelines",
        "Model Optimization"
        ];

    const natural_language_processing = [
        "NLTK",
        "SpaCy",
        "Tokenization",
        "Text Preprocessing",
        "Sequence to Sequence Modeling",
        "Text and Sentence Embedding",
        "Attention Mechanisms",
        "Text Classification",
        "Sentiment Analysis",
        "Machine Translation"
        ];

    const generative_ai = [
        "LLMs",
        "Prompt Engineering",
        "LangChain",
        "Hugging Face Transformers",
        "Ollama",
        "Model Orchestration",
        "Text Generation",
        "Diffusion Models",
        "GANs",
        "Autoencoders"
        ];

    const rag_systems = [
        "Retrieval-Augmented Generation",
        "LangChain",
        "ChromaDB",
        "FAISS",
        "Embedding Models",
        "Vector Databases",
        "Semantic Search",
        "Document Chunking"
        ];
  
    const reinforcement_learning = [
        "Markov Decision Processes (MDPs)",
        "Q-Learning",
        "Deep Q Networks (DQN)",
        "Policy Gradients",
        "Actor-Critic Methods",
        "Exploration vs Exploitation",
        "Reward Optimization",
        "Environment Design",
        "Gymnasium (OpenAI Gym)",
        "RL Training Loops"
        ];

    const backend_and_production = [
        "FastAPI",
        "REST APIs",
        "N8N",
        "Model Deployment",
        "API Design",
        "System Design",
        "Scalable Architectures"
        ];
    
    const programming_languages = [
        "Python",
        "C",
        "C++",
        "C#",
        "Java"
        ];

  return (
    <main className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-25 pb-10 mt-10">

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