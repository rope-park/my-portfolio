// projects.tsx - 프로젝트 목록 화면.

"use client";
import { useEffect, useState, useMemo } from "react";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import ProjectCardSkeleton from "../components/ProjectCardSkeleton";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import { motion } from "framer-motion";

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
];

function Projects() {
  const [projects, setProjects] = useState<Project[]>(dummyProjects);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [filters, setFilters] = useState<{ techStack: string[]; year: string }>({ techStack: [], year: "" });
  const [sort, setSort] = useState("latest");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // 1초 후에 로딩 종료
    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  const displayProjects = useMemo(() => {
    let data = [...projects];

    if (filters.techStack.length > 0) {
      data = data.filter((p) =>
        filters.techStack.every((tech) => p.techStack.includes(tech))
      );
    }

    if (filters.year) {
      data = data.filter((p) => p.date.startsWith(filters.year));
    }

    if (sort === "latest") {
      data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (sort === "oldest") {
      data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    } else if (sort === "alphabetical") {
      data.sort((a, b) => a.title.localeCompare(b.title, "ko-KR"));
    }
    return data;
  }, [projects, filters, sort]);

  return (
    <Layout>
      <section className="container section pt-28">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ once: true }}
          className="mb-10 text-center"
        >
          <h1 className="text-4xl font-bold text-[--color-grape]">Projects</h1>
          <p className="mt-2 text-lg text-[rgb(var(--color-text))] opacity-80">
            다양한 프로젝트를 통해 기술 스택과 경험을 쌓아왔습니다.
            <br />
            아래는 제가 참여한 주요 프로젝트들입니다.
          </p>
        </motion.div>

        {/* 필터 및 정렬 컴포넌트 */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12" data-aos="fade-up">
          <Filter
            availableTechs={["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "TypeScript"]}
            availableYears={["2023", "2022", "2021"]}
            onFilterChange={(f) => setFilters(f)}
          />
          <Sort
            availableOptions={[
              { value: "latest", label: "최신순" },
              { value: "oldest", label: "오래된 순" },
              { value: "alphabetical", label: "제목순" },
            ]}
            defaultSort="latest"
            onSortChange={(s) => setSort(s)}
          />
        </div>

        {/* 프로젝트 카드 목록 */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <ProjectCardSkeleton key={i} />)
            : displayProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
        </div>
      </section>
    </Layout>
  );
}

export default Projects;
