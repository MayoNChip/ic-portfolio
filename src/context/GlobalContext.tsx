"use client";

import useNav from "@/hooks/useNav";
import { usePathname } from "next/navigation";
import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useEffect,
	useState,
} from "react";

type Props = {
	children: ReactNode;
};

export type InitialContext = {
	darkMode: boolean;
	setDarkMode: Dispatch<SetStateAction<boolean>>;
	selectedId: number;
	setSelectedId: Dispatch<SetStateAction<number>>;
};

export const GlobalContext = createContext<InitialContext | null>(null);

const ThemeProvider = ({ children }: Props) => {
	const { routes } = useNav();
	const pathname = usePathname();

	useEffect(() => {
		const selected = routes.filter((item) => item.path === pathname)[0].id;
		setSelectedId(selected);
	}, []);
	const [darkMode, setDarkMode] = useState<boolean>(true);
	const [selectedId, setSelectedId] = useState(1);
	return (
		<GlobalContext.Provider
			value={{ darkMode, setDarkMode, selectedId, setSelectedId }}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default ThemeProvider;
