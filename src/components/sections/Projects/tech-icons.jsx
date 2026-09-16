import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiJavascriptLine, RiNextjsLine, RiSupabaseLine } from "react-icons/ri";
import { TbBrandTypescript, TbBrandPrisma, TbBrandMongodb, TbBrandTailwind } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { AiOutlinePython } from "react-icons/ai";

export const TECH_ICONS = [
  { id: 1, name: "javascript", title: "JavaScript", icon: <RiJavascriptLine /> },
  { id: 2, name: "typescript", title: "TypeScript", icon: <TbBrandTypescript /> },
  { id: 3, name: "next", title: "Next JS", icon: <RiNextjsLine /> },
  { id: 4, name: "react", title: "React JS", icon: <FaReact /> },
  { id: 5, name: "express", title: "Express.js", icon: <SiExpress /> },
  { id: 6, name: "node", title: "Node.js", icon: <FaNodeJs /> },
  { id: 7, name: "python", title: "Python", icon: <AiOutlinePython /> },
  { id: 8, name: "tailwind", title: "Tailwind CSS", icon: <TbBrandTailwind /> },
  { id: 9, name: "mysql", title: "MySQL", icon: <GrMysql /> },
  { id: 10, name: "mongodb", title: "MongoDB", icon: <TbBrandMongodb /> },
  { id: 11, name: "prisma", title: "Prisma", icon: <TbBrandPrisma /> },
  { id: 12, name: "supabase", title: "Supabase", icon: <RiSupabaseLine /> },
  { id: 13, name: "aws", title: "AWS", icon: <FaAws /> },
];
