import React from 'react';
import Image from "next/image";
import SubStack from './substack';

export const TechStack = () => {

    const STACKS = [
        {
            name: "Deep Learning",
            stack: ["Transformers", "Vision Models", "Image Generation", "Training Pipelines", "Model Evaluation", "Feature Engineering"]
        },
        {
            name: "Natural Language Processing",
            stack: ["Seq2Seq", "Embedding", "Self-Attention", "Sentiment Analysis", "Translation Models", "Language Models"]
        },
        {
            name: "Reinforcement Learning",
            stack: ["DQN", "Environment Design", "Reward-Punishment Training", "Policy Gradients"]
        },
        {
            name: "Machine Learning",
            stack: ["Scikit-learn", "Pandas", "Numpy"]
        },
        {
            name: "Tools",
            stack: ["FastAPI", "N8N Automation", "Model Deployement/Self Hosting", "NGrok", "Github"]
        },
        {
            name: "Frontend",
            stack: ["Next.JS", "TypeScript", "A little bit of Backend :p"]
        },
        {
            name: "Programming Languages",
            stack: ["Python", "C++", "C", "C#", "Java", "TypeScript", "JavaScript"]
        },
    ]

    return (
        <main className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-10 md:px-15 lg:px-25 pb-10 mt-10">
            {STACKS.map((project, index) => (
                <SubStack
                    key={index}
                    stack_name={project.name}
                    stack={project.stack}
                />
            ))}
        </main>
    );
};