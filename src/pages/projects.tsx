// project.tsx - 프로젝트 목록 화면.

import { useState } from "react";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import Filter from "../components/Filter";
import Sort from "../components/Sort";

interface Project {
    id: number; // 프로젝트 ID
    date: string; // 프로젝트 생성일
    title: string; // 프로젝트 제목
    description: string; // 프로젝트 설명
    imageUrl: string; // 프로젝트 이미지 URL
    techStack: string[]; // 기술 스택
    githubUrl?: string; // 깃허브 URL
    demoUrl?: string; // 데모 URL
    slug: string; // 프로젝트 URL
}

// 더미 프로젝트 데이터 (나중에 API 연동 시 삭제)
const dummyProjects: Project[] = [
    {
        id: 1,
        date: "2023-03-15",
        title: "프로젝트 A",
        description:
          "이 프로젝트는 Next.js와 Tailwind CSS를 활용하여 제작한 예제 프로젝트입니다.",
        imageUrl: "/images/project-a.jpg",
        techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
        githubUrl: "https://github.com/username/project-a",
        demoUrl: "https://project-a.example.com",
        slug: "project-a",
      },
      {
        id: 2,
        date: "2022-12-10",
        title: "프로젝트 B",
        description:
          "React 기반의 웹 애플리케이션으로, 사용자 인터랙션에 중점을 두었습니다.",
        imageUrl: "/images/project-b.jpg",
        techStack: ["React", "Redux", "CSS"],
        githubUrl: "https://github.com/username/project-b",
        demoUrl: "https://project-b.example.com",
        slug: "project-b",
      },
      {
        id: 3,
        date: "2023-01-05",
        title: "프로젝트 C",
        description:
          "Node.js와 Express를 활용한 API 서버 예제 프로젝트입니다.",
        imageUrl: "/images/project-c.jpg",
        techStack: ["Node.js", "Express", "MongoDB"],
        githubUrl: "https://github.com/username/project-c",
        demoUrl: "https://project-c.example.com",
        slug: "project-c",
      },
]

function Projects() {
    return (
        <Layout>
            <div className="projects-container">
                {/* 프로젝트 목록 섹션 */}
                <section className="py-20">
                    <h1 className="mb-4 text-3xl font-bold">Projects</h1>
                    <p className="mb-10 text-lg text-gray-700">
                        내용 추가
                    </p>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        
                    </div>
                </section>
            </div>
        </Layout>
    );
}

export default Projects;
