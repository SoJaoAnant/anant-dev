import React from 'react';
import Image from "next/image";
import ProjectCard from './ProjectCard';

export const ProjectSection = () => {

    const PROJECT_1 = {
        photoPng: "/projects/contextvault/ContextVault.png",
        title: "ContextVault",
        subtitle: "A RAG based AI document assistant",
        stack: ["Python", "JavaScript", "TypeScript", "LangChain", "FastAPI", "Next.js", "Tailwind", "ChromaDB", "Gemini (Embedding-001)"],
        description:
            "The system processes PDFs, DOCX, and TXT files by chunking and embedding their content into a vector database, enabling retrieval and querying. The RAG pipeline retrieves relevant chunks for a query before generating answers. The architecture integrates scalable API endpoints, embedding pipelines, and real-time document preview to deliver an efficient AI assisted document exploration experience.",
        href: "/projects/contextvault",
        color1: "#b260fc",
        color2: "#111827",
        githubHref:"https://github.com/SoJaoAnant/ContextVault",
        deployedHref:"https://context-vault-sigma.vercel.app/",
    };
    
    const PROJECT_2 = {
        photoPng: "/projects/imagegenlab/flower_result.png",
        title: "Image Generation Lab",
        subtitle: "Image generation models : AutoEncoders, GANs, Diffusion Models",
        stack: ["Python", "Pytorch", "TorchVision", "Numpy", "Matplotlib"],
        description:
        "Building and experimenting with deep generative models (AE, GAN, WGAN-GP, Diffusion) for image synthesis across multiple datasets, focusing on adversarial training stability and latent space learning",
        href: "/projects/imagegenlab",
        color1: "#fff836",
        color2: "#599c16",
        githubHref:"https://github.com/SoJaoAnant/image-generation-lab",
    };
    
    const PROJECT_3 = {
        photoPng: "/projects/makemoore/rnn.png",
        title: "MakeMooreAI",
        subtitle: "RNN model for character level name generation",
        stack: ["Python", "Pytorch", "NLTK", "Spacy", "Pandas", "Numpy"],
        description:
        "An AI model that generates more data like its input, which in this context, are names of people. By training on the input names, it can generate new names using Models like RNN, LSTM and GRU.",
        href: "/projects/makemoore",
        color1: "#2d55f7",
        color2: "#01197a",
        githubHref:"https://github.com/SoJaoAnant/Character-level-name-generator",
    };
    
    const PROJECT_4 = {
        photoPng: "/projects/enhimodel/enhi_ai.png",
        title: "English2Hindi Translation Model",
        subtitle: "A Seq2Seq model for english to hindi translation",
        stack: ["Python", "Pytorch", "NLTK", "Spacy"],
        description:
        "Taking inspiration from the research papers about the seq2seq architecture and 'Attention is all you need' by google's scientists. It is a basic vanilla implementation of the said models for translating english sentences to hindi.",
        href: "/projects/enhimodel",
        color1: "#b849ab",
        color2: "#8c0863",
        githubHref:"https://github.com/SoJaoAnant/English-to-Hindi-translation-model-using-Seq2Seq-architecture",
    };
    
    const PROJECT_5 = {
        photoPng: "/projects/vessel/hallowseal.png",
        title: "Vessel",
        subtitle: "A self crafter tree walk interpreter",
        stack: ["Java", "C"],
        description:
            "What's better than writing code in popular interpreted languages like Python, Ruby, or JavaScript? Creating your own interpreter and learning how it all works under the hood. Implementing basic programming tasks such as, Lexical Analysis, Tokenization, Parsing and Tree walking.",
        href: "/projects/vessel",
        color1: "#ffffff",
        color2: "#000000",
        githubHref:"https://github.com/SoJaoAnant/Vessel_Interpreter",
    };
    
    const PROJECT_6 = {
        photoPng: "/projects/cargoesbrr/title.png",
        title: "Car goes brr!!",
        subtitle: "A physics based top-down game",
        stack: ["Unity", "C#", "Aseprite"],
        description:
        "Developed a top-down, physics-driven car game featuring realistic vehicle dynamics, responsive controls, and custom collision handling.",
        href: "/projects/cargoesbrr",
        color1: "#f28429",
        color2: "#479636",
        deployedHref:"https://sojaoanant.itch.io/car-goes-brrrrrr",
    };
    
    const PROJECT_7 = {
        photoPng: "/projects/mazesimulator/title.png",
        title: "Maze Simulator",
        subtitle: "Maze generation and solving algorithms",
        stack: ["Unity", "C#", "Aseprite"],
        description:
        "A small scale but great learning project involving, generating mazes of given size and then solving them using different pathfinding algorithms such as DFS, BFS, A* and more.",
        href: "/projects/mazesimulator",
        color1: "#ffffff",
        color2: "#eca539",
        deployedHref:"https://sojaoanant.itch.io/maze-solving-and-generation",
    };

    return (
        <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 mt-15 px-6 pb-16">
            <ProjectCard
                imageSrc={PROJECT_1.photoPng}
                imageAlt={PROJECT_1.title}
                title={PROJECT_1.title}
                subtitle={PROJECT_1.subtitle}
                stack={PROJECT_1.stack}
                description={PROJECT_1.description}
                href={PROJECT_1.href}
                color1={PROJECT_1.color1}
                color2={PROJECT_1.color2}
                githubHref={PROJECT_1.githubHref}
                deployedHref={PROJECT_1.deployedHref}
            />

            <ProjectCard
                imageSrc={PROJECT_2.photoPng}
                imageAlt={PROJECT_2.title}
                title={PROJECT_2.title}
                subtitle={PROJECT_2.subtitle}
                stack={PROJECT_2.stack}
                description={PROJECT_2.description}
                href={PROJECT_2.href}
                color1={PROJECT_2.color1}
                color2={PROJECT_2.color2}
                githubHref={PROJECT_2.githubHref}
                />

            <ProjectCard
                imageSrc={PROJECT_3.photoPng}
                imageAlt={PROJECT_3.title}
                title={PROJECT_3.title}
                subtitle={PROJECT_3.subtitle}
                stack={PROJECT_3.stack}
                description={PROJECT_3.description}
                href={PROJECT_3.href}
                color1={PROJECT_3.color1}
                color2={PROJECT_3.color2}
                githubHref={PROJECT_3.githubHref}
            />
            
            <ProjectCard
                imageSrc={PROJECT_4.photoPng}
                imageAlt={PROJECT_4.title}
                title={PROJECT_4.title}
                subtitle={PROJECT_4.subtitle}
                stack={PROJECT_4.stack}
                description={PROJECT_4.description}
                href={PROJECT_4.href}
                color1={PROJECT_4.color1}
                color2={PROJECT_4.color2}
                githubHref={PROJECT_4.githubHref}
            />
            
            <ProjectCard
                imageSrc={PROJECT_5.photoPng}
                imageAlt={PROJECT_5.title}
                title={PROJECT_5.title}
                subtitle={PROJECT_5.subtitle}
                stack={PROJECT_5.stack}
                description={PROJECT_5.description}
                href={PROJECT_5.href}
                color1={PROJECT_5.color1}
                color2={PROJECT_5.color2}
                githubHref={PROJECT_5.githubHref}
            />
            
            <ProjectCard
                imageSrc={PROJECT_6.photoPng}
                imageAlt={PROJECT_6.title}
                title={PROJECT_6.title}
                subtitle={PROJECT_6.subtitle}
                stack={PROJECT_6.stack}
                description={PROJECT_6.description}
                href={PROJECT_6.href}
                color1={PROJECT_6.color1}
                color2={PROJECT_6.color2}
                deployedHref={PROJECT_6.deployedHref}
            />
            
            <ProjectCard
                imageSrc={PROJECT_7.photoPng}
                imageAlt={PROJECT_7.title}
                title={PROJECT_7.title}
                subtitle={PROJECT_7.subtitle}
                stack={PROJECT_7.stack}
                description={PROJECT_7.description}
                href={PROJECT_7.href}
                color1={PROJECT_7.color1}
                color2={PROJECT_7.color2}
                deployedHref={PROJECT_7.deployedHref}
            />
        </main>
    );
};