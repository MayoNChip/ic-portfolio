"use client";
import { motion, Variants } from "framer-motion";
function Inner({ children }: { children: React.ReactNode }) {
	const anim = (variants: Variants) => {
		return {
			initial: "initial",
			animate: "enter",
			exit: "exit",
			variants,
		};
	};

	const firstSlide: Variants = {
		initial: {
			top: "100vh",
		},
		enter: {
			top: "100vh",
		},
		exit: {
			top: "-100vh",
			transition: { duration: 1.5, ease: [0.85, 0, 0.15, 1] },
		},
	};
	const secondSlide: Variants = {
		initial: {
			top: "100vh",
		},
		enter: {
			top: "100vh",
		},
		exit: {
			top: "0",
			transition: { duration: 1.5, ease: [0.85, 0, 0.15, 1] },
		},
	};

	const opacity: Variants = {
		initial: { opacity: 0 },
		enter: { opacity: 1 },
		exit: { opacity: 0 },
	};

	return (
		<div className="relative w-full h-full">
			<motion.div
				id="firstSlide"
				className="bg-accent absolute top-0 w-full h-full z-10"
				{...anim(firstSlide)}
			/>

			<motion.div
				id="secondSlide"
				className="bg-black-1 absolute top-0 w-full h-full z-10"
				{...anim(secondSlide)}
			/>

			<motion.div {...anim({ opacity })}>{children}</motion.div>
		</div>
	);
}

export default Inner;
