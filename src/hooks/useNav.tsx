import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { debounce } from "lodash"; // Make sure to install lodash

const defaultRoutes = [
	{
		id: 1,
		title: "Home",
		idName: "home",
		path: "/",
	},
	{
		id: 2,
		title: "About Me",
		idName: "about-me",
		path: "/aboutme",
	},
	{
		id: 3,
		title: "Projects",
		idName: "projects",
		path: "/projects",
	},
	{
		id: 4,
		title: "Contact",
		idName: "contact",
		path: "/contactme",
	},
];

type Route = (typeof defaultRoutes)[0];

function useNav() {
	const [routes, setRoutes] = useState<Route[]>(defaultRoutes);
	const [activeRoute, setActiveRoute] = useState<Route>(defaultRoutes[0]);

	const router = useRouter();
	const pathname = usePathname() as
		| "/aboutme"
		| "/"
		| "/contactme"
		| "/projects";

	const handleScroll = debounce((event: WheelEvent) => {
		if (event.deltaY > 0) {
			// Scrolling down
			const nextRoute = defaultRoutes.filter(
				(route) => route.id === activeRoute.id + 1
			)[0];

			if (activeRoute?.id >= 4) {
				setActiveRoute(defaultRoutes[0]);
				router.push("/");
				return;
			}
			setActiveRoute(nextRoute);

			console.log("moving to page", nextRoute?.title);
			router.push(nextRoute.path);
		} else if (event.deltaY < 0) {
			const prevRoute = defaultRoutes.filter(
				(route) => route.id === activeRoute.id - 1
			)[0];

			if (activeRoute?.id <= 1) {
				setActiveRoute(defaultRoutes[3]);
				return router.push("/contactme");
			}
			setActiveRoute(prevRoute);

			console.log("moving to page", prevRoute?.title);
			router.push(prevRoute.path);
		}
	}, 400);

	useEffect(() => {
		console.log("scroll down detected", pathname);

		const currentRoute = defaultRoutes.map((route) => {
			if (route.path === pathname) {
				setActiveRoute(route);
			}
		});
		console.log(pathname, currentRoute[0]);

		// Add event listener
		window.addEventListener("wheel", handleScroll);

		// Clean up
		return () => {
			window.removeEventListener("wheel", handleScroll);
		};
	}, [activeRoute, handleScroll]);
	return {
		routes,
		activeRoute,
		setActiveRoute,
	};
}

export default useNav;
