// ProjectCard.tsx - 프로젝트 카드 컴포넌트.
// 프로젝트 카드 컴포넌트. 프로젝트 정보를 표시하고, 클릭 시 프로젝트 상세 페이지로 이동.

import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    techStack: string[];
    githubUrl?: string;
    demoUrl?: string;
}

const ProjectCard = ({ title, description, imageUrl, techStack, githubUrl, demoUrl} : ProjectCardProps) => {
    return (
        <div className=""
    )