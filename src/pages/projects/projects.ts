import guruImage from "../../../public/guru.png";
import ChatAppImage from "../../../public/angularTodos.png";
import DebateItImage from "../../../public/debateit.png";
import { StaticImageData } from "next/image";

type Project = {
	id: number;
	title: string;
	description: string;
	tags: string[];
	app_url?: string;
	repository_url?: string;
	image: StaticImageData;
	elementId: string;
};

export const projects: Project[] = [
	{
		id: 1,
		elementId: "guru",
		title: "guru - Grocery shop",
		description: "some description",
		tags: ["React", "ChakraUI", "Frontend"],
		repository_url: "https://github.com/MayoNChip/group-project-frontend",
		image: guruImage,
	},
	{
		id: 2,
		title: "do! - Todo's App",
		elementId: "do",
		description: "To-do app.",
		tags: ["AngularJS", "TailwindCSS", "Frontend"],
		repository_url: "https://github.com/MayoNChip/angular-todoapp",
		app_url: "https://angular-todoapp-idoc.vercel.app/",
		image: ChatAppImage,
	},
	{
		id: 3,
		title: "Pet Project",
		elementId: "pet",
		description: "Pet Adoption.",
		tags: ["React", "Frontend", "Backend", "ChakraUI", "MongoDB", "Express"],
		app_url: "https://full-stack-pet-adoption-mayo-n-chip.vercel.app/",
		repository_url:
			"https://github.com/MayoNChip/full-stack-pet-adoption-MayoNChip",
		image: guruImage,
	},
	{
		id: 4,
		title: "Debate It",
		elementId: "debate",
		description: "some description",
		tags: ["AngularJS", "TailwindCSS", "Full Stack"],
		app_url: "http://www.google.com",
		repository_url: "",
		image: DebateItImage,
	},
];

export type project = (typeof projects)[0];
