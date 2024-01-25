import React, { useContext, useEffect, useState } from "react";
import { projects } from "./projects";
import ProjectCard from "./ProjectCard";
import { GlobalContext, InitialContext } from "@/context/GlobalContext";
import Inner from "@/components/Layout/Inner";
import { motion, useAnimate } from "framer-motion";

function ProjectList() {
	const { darkMode } = useContext(GlobalContext) as InitialContext;
	//   const [displayingLiveProjects, setDisplayingLiveProjects] = useState(true);
	const [scope, animate] = useAnimate();

	useEffect(() => {
		animate(
			"#projectsContainer",
			{},
			{
				type: "spring",
				bounce: 0,
				duration: 0.5,
			}
		);
	}, []);

	useEffect(() => {}, []);
	return (
		<Inner>
			<div
				ref={scope}
				className={`${
					darkMode ? "bg-black-1" : "bg-light"
				} flex flex-col self-center min-h-fit items-center p-20`}
			>
				{/* <div className="my-6">
        <button
          className={cn(
            "px-6 py-2  rounded-l-xl",
            !displayingLiveProjects
              ? "bg-main-dark text-light"
              : "bg-gray-500 text-gray-800"
          )}
          onClick={() => setDisplayingLiveProjects(false)}
        >
          Code
        </button>
        <button
          className={cn(
            "px-6 py-2  rounded-r-xl",
            displayingLiveProjects
              ? "bg-main-dark text-light"
              : "bg-gray-500 text-gray-800"
          )}
          onClick={() => setDisplayingLiveProjects(true)}
        >
          Live
        </button>
      </div> */}
				<div
					className="grid h-screen grid-flow-row grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-4"
					id="projectsContainer"
				>
					{projects.map((project) => {
						return <ProjectCard key={project.id} {...project}></ProjectCard>;
					})}
				</div>
			</div>
		</Inner>
	);
}

export default ProjectList;
