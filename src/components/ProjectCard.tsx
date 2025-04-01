// ProjectCard.tsx - 프로젝트 카드 컴포넌트.
// 프로젝트 카드 컴포넌트. 프로젝트 정보를 표시하고, 클릭 시 프로젝트 상세 페이지로 이동.

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
    title: string; // 프로젝트 제목
    description: string; // 프로젝트 설명
    imageUrl: string; // 프로젝트 이미지 URL
    techStack: string[]; // 기술 스택
    githubUrl?: string; // 깃허브 URL
    demoUrl?: string; // 데모 URL
    slug: string; // 프로젝트 상세 페이지로 이동하기 위한 slug.
}

function ProjectCard({
    title,
    description,
    imageUrl,
    techStack,
    githubUrl,
    demoUrl,
    slug
}: ProjectCardProps) {
    return (
        // 애니메이션 효과를 위한 motion.div 사용
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="bg-[rgb(var(--color-background))] rounded-lg shadow-md hover:shadow-xl p-4 transition-all"
        >
            {/*  프로젝트 이미지 섹션 */}
            <Link
                href={slug ? `/projects/${slug}` : "#"}>
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg cursor-pointer">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover duration-500 rounded-lg transtition-transform hover:scale-105 rounded-t-2xl"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                </div>
            </Link>

            {/* 프로젝트 정보 섹션 */}
            <h3 className="text-lg font-semibold text-[--color-grape] mb-1">
                {title}
            </h3>
            <div className="flex flex-wrap gap-2 text-sm text-[--color-sky-blue]">
                {techStack.map((tag, index) => (
                    <span key={index}>#{tag}</span>
                ))}
            </div>

            <p className="text-sm text-[(var(--color-text))] opacity-90 mt-2">
                {description}
            </p>

            <div className="flex gap-3 mt-4 text-sm">
                {/* 프로젝트 링크 섹션 */}
                {(githubUrl || demoUrl) && (
                    <div className="flex gap-4 mt-2 text-sm">
                        {githubUrl && (
                            <Link
                                href={githubUrl}
                                target="_blank"
                                className="flex text-[rgb(var(--color-french-violet))] hover:underline"
                            >
                                GitHub
                            </Link>
                        )}
                        {demoUrl && (
                            <Link
                                href={demoUrl}
                                target="_blank"
                                className="flex text-[rgb(var(--color-aero))] hover:underline"
                            >
                                Live Demo
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </motion.div >
    );
};

export default ProjectCard;
