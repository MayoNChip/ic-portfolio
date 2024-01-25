"use client";
import { useContext, useEffect, useState } from "react";
import { stagger, useAnimate, motion } from "framer-motion";
import { IoGlassesOutline } from "react-icons/io5";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import { GlobalContext, InitialContext } from "@/context/GlobalContext";
import useNav from "@/hooks/useNav";

export function Navbar() {
	const [scope, animate] = useAnimate();
	const { routes, activeRoute, setActiveRoute } = useNav();

	useEffect(() => {
		const animateMenu = async () => {
			await animate(scope.current, {
				y: [-200, 0, 0],
				// top: [-200, 0, 0],
				// justifyContent: ["center", "space-around"],
			});

			await animate(scope.current, {
				width: ["32px", "500px"],
				padding: ["0px 0px", "0px 68px"],
			});

			await animate("#icon", {
				x: ["0%", "-650%"],
			});

			await animate("#menuItems", {
				display: ["none", "none", "flex"],
				flexDirection: ["column", "column"],
			});

			animate(
				"#menuItem",
				{
					opacity: [0, 1, 1],
				},
				{ delay: stagger(0.05, { ease: [0.24, 0.31, 0.6, 0.9] }) }
			);
		};
		animateMenu();
	}, []);

	return (
		<div
			// className="relative flex items-center justify-around w-8 min-h-[32px] p-[2px] rounded-full bg-accent"
			className="absolute self-center flex justify-around items-center w-full my-10 min-h-[32px] z-[999]"
			key="something"
			// ref={scope}
		>
			<div
				ref={scope}
				className="relative flex items-center justify-around w-8 min-h-[32px] whitespace-nowrap bg-accent rounded-full"
			>
				<IoGlassesOutline
					id="icon"
					className="absolute z-10 w-8 h-8 text-black-1"
				/>
				{/* <Link href={"/aboutme"}></Link> */}

				{routes.map((route) => {
					return (
						<div
							id="menuItems"
							key={route.id}
							className="relative items-end hidden h-full"
						>
							{activeRoute.id === route.id ? (
								<motion.div
									layoutId="selectedItem"
									className={
										"absolute w-full border-b-[2px] bottom-0 border-secondary"
									}
								></motion.div>
							) : null}
							<motion.div
								id="menuItem"
								className="relative w-full items-center text-light"
							>
								{/* <motion.div
									className={cn(
										activeRoute === route.id ? "bg-black-1/20" : "bg-accent",
										"absolute bottom-0 px-4 w-full h-[95%] flex items-center rounded-t-2xl z-[-20]"
									)}
								/> */}
								<Link
									href={route.path}
									key={route.id}
									className="w-full h-full z-10"
									onClick={() => setActiveRoute(route)}
								>
									{route.title}
								</Link>
							</motion.div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
