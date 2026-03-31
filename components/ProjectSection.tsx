import React from 'react';
import Image from "next/image";
import ProjectCard from './ProjectCard';

export const ProjectSection = () => {

    const PROJECTS = [
        {
            photoPng: "/projects/contextvault/ContextVault.png",
            title: "ContextVault",
            subtitle: "A RAG based AI document assistant",
            stack: ["Python", "JavaScript", "TypeScript", "LangChain", "FastAPI", "Next.js", "Tailwind", "ChromaDB", "Gemini (Embedding-001)"],
            description:
                "The system processes PDFs, DOCX, and TXT files by chunking and embedding their content into a vector database, enabling retrieval and querying. The RAG pipeline retrieves relevant chunks for a query before generating answers. The architecture integrates scalable API endpoints, embedding pipelines, and real-time document preview to deliver an efficient AI assisted document exploration experience.",
            href: "/projects/contextvault",
            color1: "#b260fc",
            color2: "#111827",
            githubHref: "https://github.com/SoJaoAnant/ContextVault",
            deployedHref: "https://context-vault-sigma.vercel.app/",
        },
        {
            photoPng: "/projects/imagegenlab/flower_result.png",
            title: "Image Generation Lab",
            subtitle: "Image generation models : AutoEncoders, GANs, Diffusion Models",
            stack: ["Python", "Pytorch", "TorchVision", "Numpy", "Matplotlib"],
            description:
                "Building and experimenting with deep generative models (AE, GAN, WGAN-GP, Diffusion) for image synthesis across multiple datasets, focusing on adversarial training stability and latent space learning",
            href: "/projects/imagegenlab",
            color1: "#fff836",
            color2: "#599c16",
            githubHref: "https://github.com/SoJaoAnant/image-generation-lab",
        },
        {
            photoPng: "/projects/makemoore/rnn.png",
            title: "MakeMooreAI",
            subtitle: "RNN model for character level name generation",
            stack: ["Python", "Pytorch", "NLTK", "Spacy", "Pandas", "Numpy"],
            description:
                "An AI model that generates more data like its input, which in this context, are names of people. By training on the input names, it can generate new names using Models like RNN, LSTM and GRU.",
            href: "/projects/makemoore",
            color1: "#2d55f7",
            color2: "#01197a",
            githubHref: "https://github.com/SoJaoAnant/Character-level-name-generator",
        },
        {
            photoPng: "/projects/enhimodel/enhi_ai.png",
            title: "English2Hindi Translation Model",
            subtitle: "A Seq2Seq model for english to hindi translation",
            stack: ["Python", "Pytorch", "NLTK", "Spacy"],
            description:
                "Taking inspiration from the research papers about the seq2seq architecture and 'Attention is all you need' by google's scientists. It is a basic vanilla implementation of the said models for translating english sentences to hindi.",
            href: "/projects/enhimodel",
            color1: "#b849ab",
            color2: "#8c0863",
            githubHref: "https://github.com/SoJaoAnant/English-to-Hindi-translation-model-using-Seq2Seq-architecture",
        },
        {
            photoPng: "/projects/vessel/hallowseal.png",
            title: "Vessel",
            subtitle: "A self crafter tree walk interpreter",
            stack: ["Java", "C"],
            description:
                "What's better than writing code in popular interpreted languages like Python, Ruby, or JavaScript? Creating your own interpreter and learning how it all works under the hood. Implementing basic programming tasks such as, Lexical Analysis, Tokenization, Parsing and Tree walking.",
            href: "/projects/vessel",
            color1: "#ffffff",
            color2: "#000000",
            githubHref: "https://github.com/SoJaoAnant/Vessel_Interpreter",
        },
        {
            photoPng: "/projects/cargoesbrr/title.png",
            title: "Car goes brr!!",
            subtitle: "A physics based top-down game",
            stack: ["Unity", "C#", "Aseprite"],
            description:
                "Developed a top-down, physics-driven car game featuring realistic vehicle dynamics, responsive controls, and custom collision handling.",
            href: "/projects/cargoesbrr",
            color1: "#f28429",
            color2: "#479636",
            deployedHref: "https://sojaoanant.itch.io/car-goes-brrrrrr",
        },
        {
            photoPng: "/projects/mazesimulator/title.png",
            title: "Maze Simulator",
            subtitle: "Maze generation and solving algorithms",
            stack: ["Unity", "C#", "Aseprite"],
            description:
                "A small scale but great learning project involving, generating mazes of given size and then solving them using different pathfinding algorithms such as DFS, BFS, A* and more.",
            href: "/projects/mazesimulator",
            color1: "#ffffff",
            color2: "#eca539",
            deployedHref: "https://sojaoanant.itch.io/maze-solving-and-generation",
        }
    ];

    return (
        <main className="flex items-center w-full flex-col gap-8 mt-12 pb-24 px-10">
            <div className="flex flex-col gap-6">
                {PROJECTS.map((project, index) => (
                    <ProjectCard
                        key={index}
                        imageSrc={project.photoPng}
                        imageAlt={project.title}
                        title={project.title}
                        subtitle={project.subtitle}
                        stack={project.stack}
                        description={project.description}
                        href={project.href}
                        color1={project.color1}
                        color2={project.color2}
                        githubHref={project.githubHref}
                        deployedHref={project.deployedHref}
                    />
                ))}
            </div>
        </main>
    );
};