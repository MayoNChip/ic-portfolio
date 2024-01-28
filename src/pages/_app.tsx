import Inner from "@/components/Layout/Inner";
import { Navbar } from "@/components/Navbar";
import ThemeProvider from "@/context/GlobalContext";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
	return (
		<div className="relative flex flex-col items-center w-full h-screen overflow-hidden bg-black-1">
			<ThemeProvider>
				<Navbar />
				<AnimatePresence mode="wait">
					<Component key={router.route} {...pageProps} />
				</AnimatePresence>
			</ThemeProvider>
		</div>
	);
}
