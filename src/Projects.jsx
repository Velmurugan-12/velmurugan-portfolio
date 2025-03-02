import React, { Suspense, useContext } from "react";
import { MyContext } from "./main";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaCircleArrowLeft } from "react-icons/fa6";
import PreviewFallback from "./PreviewFallback";


import ProjectPreview from "./ProjectPreview";

function Projects() {
    const { ytClone } = useContext(MyContext);

    const sideProjects = [
        {
            video: ytClone,
            projectSummary: "YouTube Clone | React",
            projectTitle: "YouTube Clone",
            projectType: "React + Firebase",
            technologies: "React JS, Router, Tailwind CSS, & Redux",
            gitHubUrl: "https://github.com/Velmurugan-12/youtube_clone",
            projectUrl: "https://youtube-clone-six-black.vercel.app/",
        },
    ];

    return (
        <div className="container mx-auto  px-5 sm:px-8 md:px-16 pt-20 md:pt-28 " id="projects">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold flex items-end gap-3">
                    <MdDashboard className="text-gray-500 mb-1" /> Projects
                </h1>
                <Link to="/all_projects" className="md:text-xl underline underline-offset-8 decoration-[#F6CD0A] flex items-center gap-5">
                    All Projects <FaCircleArrowLeft className="text-2xl md:text-3xl text-[#F6CD0A] animate-pulse" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
                {sideProjects.map((project, index) => (
                    <Suspense fallback={<PreviewFallback />} key={index}>
                        <ProjectPreview {...project} />
                    </Suspense>
                ))}
            </div>
        </div>
    );
}

export default Projects;
