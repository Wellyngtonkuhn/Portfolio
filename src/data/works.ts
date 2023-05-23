import { useId } from "react";

type Works = {
  id: string
  projectName: string;
  description: string;
  image: string
  link: string
};

const id = useId()

export const MyWorks: Works[] = [
  { id, projectName: "Eyewear", description: "", image: "", link: 'https://e-commerce-seven-indol.vercel.app/' },
];
