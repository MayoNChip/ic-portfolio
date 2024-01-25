import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { GlobalContext, InitialContext } from "@/context/GlobalContext";
import { project } from "./projects";
import { cn } from "@/utils/cn";
import { stagger, useAnimate } from "framer-motion";
function ProjectCard(project: project) {
	const { darkMode } = useContext(GlobalContext) as InitialContext;
	const [scope, animate] = useAnimate();

	useEffect(() => {
		animate(
			scope.current,
			{
				opacity: [0, 1],
				y: [200, 0],
			},
			{
				duration: 0.8,
				delay: project.id === 1 ? 0 : project.id * 0.1,
				ease: [0.85, 0, 0.15, 1],
			}
		);
	}, []);
	return (
		<div
			id={project.elementId}
			ref={scope}
			className={cn(
				darkMode ? "bg-black-2" : "bg-secondary/30",
				"flex flex-col h-fit rounded-md shadow-md w-full"
			)}
		>
			<div className="w-full h-fit">
				<Image className="rounded-t" src={project.image} alt={project.title} />
			</div>
			<div className="flex items-center justify-between w-full px-4 py-4">
				<div className="flex flex-col w-full ">
					<h1
						className={cn(
							darkMode ? " text-light" : "text-secondary",
							"text-2xl font-black h-1/4"
						)}
					>
						{project.title}
					</h1>

					<div className="flex flex-col items-center  w-full min-h-[200px]">
						<div className="min-h-[100px]">
							<h1
								className={cn(
									darkMode ? "text-black-2" : "text-black-1",
									"text-xl font-light "
								)}
							>
								{project.description}
							</h1>
						</div>
						<div
							className={cn(
								!project.app_url || !project.repository_url
									? "justify-center"
									: "justify-between",
								"flex w-full"
							)}
						>
							{project.repository_url && (
								<Link
									href={project.repository_url}
									target="_blank"
									className={cn(
										"self-end px-6 py-2 font-medium transition-colors rounded text-md ",
										darkMode
											? "text-light hover:text-black/50 bg-secondary/60 hover:bg-secondary"
											: "text-black/40 hover:text-secondary/90 bg-bg-secondary/30 hover:bg-secondary/60"
									)}
								>
									Repository
								</Link>
							)}
							{project.app_url && (
								<Link
									href={project.app_url}
									target="_blank"
									className={cn(
										"self-end px-6 py-2 font-medium transition-colors rounded text-md ",
										darkMode
											? "text-light hover:text-light/50 bg-accent hover:bg-accent/50"
											: "text-accent hover:text-accent/40 bg-main hover:bg-secondary"
									)}
								>
									Visit
								</Link>
							)}
						</div>
						{/* TAGS */}
						<div className="grid grid-cols-3 gap-2 mt-6">
							{project.tags.map((tag) => {
								return (
									<div
										key={tag}
										className={cn(
											darkMode ? " bg-secondary/30" : "bg-main-dark/50",
											"flex items-center justify-center px-1 py-1 rounded cursor-default"
										)}
									>
										<p className=" text-light whitespace-nowrap w-fit">{tag}</p>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
