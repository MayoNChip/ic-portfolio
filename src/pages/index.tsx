"use client";

import Hero from "@/components/Hero";
import Inner from "@/components/Layout/Inner";
import { GlobalContext, InitialContext } from "@/context/GlobalContext";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { useContext } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Home() {
	const { darkMode } = useContext(GlobalContext) as InitialContext;

	return (
		<Inner>
			<motion.div
				className={cn(
					darkMode ? "bg-black-1" : "bg-light",
					"flex flex-col relative h-screen"
				)}
			>
				<div className="flex w-1/2 self-center text-white h-full items-center justify-center"></div>
				<Hero />
				<motion.div
					className="sticky self-center"
					initial={{
						bottom: 0,
					}}
					animate={{
						bottom: [5, 0, 5],
					}}
					transition={{
						// delay: stagger(0.1, [0, 0.4, 0.8, 1]),

						duration: 0.7,
						repeat: Infinity,
					}}
				>
					<motion.div
						style={{
							background: "green",
							left: 0,
							right: 0,
							z: 10000,
							position: "fixed",
							top: 0,
							transformOrigin: "0%",
						}}
					/>
					<MdKeyboardArrowDown className="w-8 h-8 text-white opacity-70 z-10" />
				</motion.div>
			</motion.div>
		</Inner>
	);
}
