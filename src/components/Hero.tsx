import { useContext } from "react";
import { motion } from "framer-motion";
import { GlobalContext, InitialContext } from "@/context/GlobalContext";
import { cn } from "@/utils/cn";
import Inner from "./Layout/Inner";

// TODO:
// - add responsivness
// - edit the image to not have edges

function Hero() {
	const { darkMode } = useContext(GlobalContext) as InitialContext;

	// useEffect(() => {
	// 	console.log(isPresent);
	// 	if (isPresent) {
	// 		const enterAnimations = async () => {
	// 			animate(
	// 				"#hi",
	// 				{
	// 					opacity: [0, 1],
	// 					y: [0, 0],
	// 					x: [-100, 0],
	// 					scale: [1, 1],
	// 				},
	// 				{ duration: 0.5, ease: "backInOut", delay: 1 }
	// 			);
	// 			animate(
	// 				"#name",
	// 				{
	// 					opacity: [0, 1],
	// 					y: [0, 0],
	// 					x: [-50, 0],
	// 					scale: [1],
	// 				},
	// 				{ duration: 0.5, ease: "backInOut", delay: 1.5 }
	// 			);
	// 			animate(
	// 				"#job",
	// 				{
	// 					opacity: [0, 1],
	// 					y: [-100, 0],
	// 					x: [0],
	// 					scale: [1],
	// 				},
	// 				{ duration: 1, ease: "backInOut", delay: 1.8 }
	// 			);
	// 		};
	// 		enterAnimations();
	// 	} else {
	// 		const exitAnimations = async () => {
	// 			animate(
	// 				"#hi",
	// 				{
	// 					opacity: 0,

	// 					x: 100,
	// 				},
	// 				{ duration: 0.5, ease: "backInOut", delay: 0.5 }
	// 			);
	// 			animate(
	// 				"#name",
	// 				{
	// 					opacity: 0,

	// 					x: 100,
	// 				},
	// 				{ duration: 0.5, ease: "backInOut", delay: 0.6 }
	// 			);
	// 			animate(
	// 				"#job",
	// 				{
	// 					opacity: 0,
	// 					x: 100,
	// 				},
	// 				{ duration: 1, ease: "backInOut", delay: 0.7 }
	// 			);
	// 		};
	// 		exitAnimations();
	// 	}
	// 	// initial={{ opacity: 0, y: 0, x: -100 }}
	// 	// 			animate={{
	// 	// 				opacity: 1,
	// 	// 				y: [0, 200],
	// 	// 				x: [0, -50],
	// 	// 				scale: [1, 0.5],
	// 	// 				transition: { duration: 1, ease: "backInOut" },
	// 	// 			}}
	// }, [pathname]);

	return (
		<Inner>
			<div className="flex items-center justify-center w-full h-screen ">
				<div className="z-[2] flex flex-col whitespace-nowrap">
					<div className="z-[2] flex flex-col whitespace-nowrap">
						<motion.span
							initial={{
								opacity: 0,
								x: -100,
							}}
							animate={{
								opacity: 1,
								x: 0,
							}}
							transition={{ duration: 1, ease: [0.85, 0, 0.15, 1] }}
							id="hi"
							className={cn(
								!darkMode ? "text-black-1" : "text-light",

								"md:text-6xl font-bold text-2xl mr-3 z-[2]"
							)}
						>
							Hey!
						</motion.span>

						<motion.span
							id="name"
							initial={{
								opacity: 0,
								x: -100,
							}}
							animate={{
								opacity: 1,
								x: 0,
							}}
							transition={{
								duration: 1,
								delay: 1,
								ease: [0.85, 0, 0.15, 1],
							}}
							className={cn(
								!darkMode ? "text-black-1" : "text-light",

								"md:text-6xl font-bold text-2xl z-[2] ml-8"
							)}
						>
							I'm Ido Cohen.
						</motion.span>
					</div>
					<motion.span
						id="job"
						initial={{
							opacity: 0,
							y: -100,
						}}
						animate={{
							opacity: 1,
							y: 0,
						}}
						transition={{ duration: 1, delay: 1.5, ease: [0.85, 0, 0.15, 1] }}
						className={cn(
							!darkMode ? "text-black-1" : "text-accent",

							"text-2xl font-semibold md:text-3xl self-center ml-8"
						)}
					>
						a Fullstack Developer
					</motion.span>
					{/* <motion.div
						className="flex w-10 h-10 rounded bg-green"
						initial={{ backgroundColor: "green", x: 0 }}
						animate={{ backgroundColor: "red", x: 100 }}
						exit={{ opacity: 0, x: 400 }}
					></motion.div> */}
				</div>
			</div>
		</Inner>
	);
}

export default Hero;
