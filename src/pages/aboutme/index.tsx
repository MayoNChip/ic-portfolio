import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import aboutMeImage from "../../../public/me.jpeg";
import { GlobalContext, InitialContext } from "@/context/GlobalContext";
import Inner from "@/components/Layout/Inner";
import {
	AnimatePresence,
	motion,
	stagger,
	useAnimate,
	useInView,
	usePresence,
} from "framer-motion";

function AboutMe() {
	const { darkMode } = useContext(GlobalContext) as InitialContext;
	const [imageAnimComplete, setImageAnimComplete] = useState(false);
	const contentRef = useRef<HTMLDivElement>(null);
	const paragraphRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(paragraphRef, { root: contentRef, once: true });
	const [scope, animate] = useAnimate();
	const [isPresent, safeToRemove] = usePresence();

	const imageAnimFinish = (e: any) => {
		setImageAnimComplete(true);
	};

	useEffect(() => {
		const enterAnimations = async () => {
			console.log(isInView, isPresent);
			if (isPresent) {
				await animate(
					"h1",
					{
						x: [-200, 0],
						opacity: [0, 1],
					},
					{ delay: stagger(0.2) }
				);
			} else {
				safeToRemove();
			}
		};

		enterAnimations();
	}, [isInView, isPresent]);
	return (
		<Inner>
			<div
				ref={scope}
				className={`${
					darkMode ? "bg-black-1" : "bg-light "
				} flex h-screen items-center p-8 justify-center`}
			>
				<div className="relative w-[500px] flex p-8  justify-center overflow-scroll no-scrollbar">
					<AnimatePresence>
						{!imageAnimComplete && (
							<motion.div
								key="imageUnderline"
								initial={{ width: "0%" }}
								animate={{ width: "100%" }}
								exit={{ width: "0%" }}
								transition={{ duration: 0.2 }} // Adjust duration as needed
								className="absolute bottom-0 z-10 self-center h-[1px] bg-light"
							></motion.div>
						)}
					</AnimatePresence>
					<motion.div
						initial={{
							y: 600,
						}}
						animate={{
							y: 0,
						}}
						whileHover={{}}
						transition={{ delay: 0.2, duration: 1, type: "spring" }}
						// onTransitionEnd={() => {
						// 	console.log("hello");
						// }}
						onAnimationComplete={imageAnimFinish}
						className="relative flex items-center w-[95%]"
					>
						<Image
							src={aboutMeImage}
							alt="Me"
							className=" rounded-xl border-light border-2"
						/>
					</motion.div>
				</div>

				<div
					id="content"
					ref={contentRef}
					className="text-xl space-y-6 text-light flex flex-col p-4 h-fit w-1/2 mx-16 text-left "
				>
					<h1 className="text-6xl font-semibold">Hi there!</h1>
					<h1 className={`my-5 ${!darkMode && "text-black-2"}`}>
						My name is Ido and I am a self-proclaimed tech-nerd and lover of all
						things innovative. Based in Israel, I have been fascinated with
						technology from a young age and my passion has only continued to
						grow. I am a lifelong learner, with a love for science and an
						insatiable curiosity about how things work. This drive led me to
						complete an intensive full-stack bootcamp at ITC (Israel Tech
						Challenge), where I honed my skills in coding and software
						development, and have since been working as a dev team manager at
						Partner for the past 4 years, on a product in the call centers and
						telephony field. My expertise in this field and strong
						problem-solving skills have allowed me to effectively lead my team
						and bring innovative solutions to the table.
					</h1>
					<h1 className={`${!darkMode && "text-black-2"}`}>
						But what sets me apart from your average developer is my eclectic
						mix of interests and hobbies. I have a deep love for photography and
						even had the privilege of turning my passion into a business as an
						independent studio owner. In addition, I have studied 3D modeling
						and animation, fueling my secret dream of one day creating my own
						video game. I am also an avid gamer, movie buff, and tech
						enthusiast, always keeping up with the latest advancements in the
						industry. These diverse pursuits add depth to my perspective and
						allow me to approach problem-solving from a unique angle.
					</h1>
					<h1 className={`my-5 ${!darkMode && "text-black-2"}`}>
						I am now eager to bring my passion for development and love for all
						things tech to a new company, where I can continue growing as a
						developer and making a positive impact. Whether I&apos;m snapping
						the perfect shot, creating a virtual world, or finding new ways to
						use technology for good, I am always on the lookout for the next
						adventure and eager to learn and grow along the way.
					</h1>
				</div>
			</div>
		</Inner>
	);
}

export default AboutMe;
