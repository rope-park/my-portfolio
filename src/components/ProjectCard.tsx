// ProjectCard.tsx - 프로젝트 카드 컴포넌트.
// 프로젝트 카드 컴포넌트. 프로젝트 정보를 표시하고, 클릭 시 프로젝트 상세 페이지로 이동.

import Link from "next/link";
import Image from "next/image";
import React from "react";

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    techStack: string[];
    githubUrl?: string;
    demoUrl?: string;
    slug: string; // 프로젝트 상세 페이지로 이동하기 위한 slug.
}

const ProjectCard = ({
    title,
    description,
    imageUrl,
    techStack,
    githubUrl,
    demoUrl,
    slug
}: ProjectCardProps) => {
    return (
        <div className="relative flex flex-col items-start justify-between transition-shadow bg-white border border-gray-200 shadow-sm rounded-2xl dark:bg-gray-900 dark:border-gray-700 hover:shadow-lg">
            {/*  프로젝트 이미지 섹션 */}
            <Link
                href={slug ? `/projects/${slug}` : "#"}
            >
                <div className="relative w-full h-56 overflow-hidden cursor-pointer">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover rounded-t-2xl"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                </div>
            </Link>

            {/* 프로젝트 정보 섹션 */}
            <div className="flex flex-col flex-grow p-4">
                <h3 className="text-gray-900 dark:text-white">
                    {title}
                </h3>
                <p className="flex-grow mt-2 text-gray-600 dark:text-gray-300">
                    {description}
                </p>

                {techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                        {techStack.map((tech, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 rounded-full dark:text-gray-300 dark:bg-gray-800"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                {/* 프로젝트 링크 섹션 */}
                {(githubUrl || demoUrl) && (
                    <div className="flex mt-4 space-x-4">
                        {githubUrl && (
                            <Link
                                href={githubUrl}
                                target="_blank"
                                className="flex text-blue-600 hover:underline dark:text-blue-400"
                            >
                                GitHub
                            </Link>
                        )}
                        {demoUrl && (
                            <Link
                                href={demoUrl}
                                target="_blank"
                                className="flex text-green-600 hover:underline dark:text-green-400"
                            >
                                Live Demo
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;