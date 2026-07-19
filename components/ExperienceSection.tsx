import React from 'react';
import ExperienceCard from './ExperienceCard';

export const ExperienceSection = () => {

    const EXPERIENCES = [
        {
            logoSrc: "/experience/lumiq_logo.png",
            company: "LUMIQ",
            role: "AI Engineer Intern",
            duration: "June 2026 - Present",
        },
        {
            logoSrc: "/experience/gdgsc_logo.png",
            company: "Game Dev Guild Student's Club",
            role: "Vice President",
            duration: "September 2024 - November 2025",
        },
    ];

    return (
        <main className="flex items-center w-full flex-col gap-8 mt-12 pb-24 px-10">
            <div className="flex flex-col gap-6">
                {EXPERIENCES.map((experience, index) => (
                    <ExperienceCard
                        key={index}
                        logoSrc={experience.logoSrc}
                        logoAlt={experience.company}
                        company={experience.company}
                        role={experience.role}
                        duration={experience.duration}
                    />
                ))}
            </div>
        </main>
    );
};
