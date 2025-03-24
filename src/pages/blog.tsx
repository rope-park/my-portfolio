// pages/blog.tsx - 블로그 목록 화면.

import { useState } from "react";
import Layout from "../components/Layout";
import BlogCard from "../components/BlogCard";
import Filter from "../components/Filter";
import Sort from "../components/Sort";

// 블로그 포스트 데이터 타입 정의
interface BlogPost {
    id: number; // 블로그 포스트 ID
    date: string; // 블로그 포스트 작성 날짜
    title: string; // 블로그 제목
    previewContent: string; // 내용 미리보기
    techStack: string[]; // 관련 기술 스택 목록
    thumbnail: string; // 썸네일 이미지 URL
    slug: string; // 블로그 상세 페이지로 이동하기 위한 slug
}

// 임시 데이터 (실제 DB/API 연동 시 삭제)
const dummyBlogs: BlogPost[] = [
    {
        id: 1,
        date: "2023-03-15",
        title: "React Hooks 깊이 이해하기",
        previewContent:
            "React Hooks의 기본 개념부터 고급 패턴까지 상세히 설명합니다.",
        techStack: ["React", "Hooks"],
        thumbnail: "/images/react-hooks.png",
        slug: "react-hooks",
    },
    {
        id: 2,
        date: "2023-02-10",
        title: "Next.js와 SEO 최적화",
        previewContent:
            "Next.js를 이용한 SEO 최적화 방법과 사례를 소개합니다.",
        techStack: ["Next.js", "SEO"],
        thumbnail: "/images/nextjs-seo.png",
        slug: "nextjs-seo",
    },
    {
        id: 3,
        date: "2023-01-05",
        title: "Tailwind CSS 활용법",
        previewContent:
            "Tailwind CSS를 효과적으로 사용하는 다양한 팁을 공유합니다.",
        techStack: ["Tailwind CSS", "CSS"],
        thumbnail: "/images/tailwind.png",
        slug: "tailwind-css",
    },
];

function Blog() {
    // 필터와 정렬이 적용된 블로그 포스트 목록을 상태로 관리
    const [filteredBlogs, setFilteredBlogs] = useState(dummyBlogs);
    // 선택된 정렬 기준을 저장하는 상태
    const [, setSortOrder] = useState("latest");

    // availableTechs: 모든 블로그 포스트에서 고유한 기술 스택 목록 추출
    const availableTechs = Array.from(
        new Set(dummyBlogs.flatMap((blog) => blog.techStack))
    );

    const availableYears = Array.from(
        new Set(dummyBlogs.map((blog) => blog.date.split("-")[0]))
    );

    const handlerFilterChange = (filters: { techStack: string[]; year: string }) => {
        let blogs = dummyBlogs;

        if (filters.techStack.length > 0) {
            blogs = blogs.filter((blog) =>
                filters.techStack.every((tech) => blog.techStack.includes(tech))
            );
        }

        if (filters.year) {
            blogs = blogs.filter((blog) => blog.date.startsWith(filters.year));
        }

        setFilteredBlogs(blogs);
    };

    const handleSortChange = (sort: string) => {
        const sortedBlogs = [...filteredBlogs];

        if (sort === "latest") {
            sortedBlogs.sort(
                (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            );
        } else if (sort === "oldest") {
            sortedBlogs.sort(
                (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
            );
        } else if (sort === "alphabetical") {
            sortedBlogs.sort((a, b) => a.title.localeCompare(b.title, "ko-KR"));
        }

        setSortOrder(sort);
        setFilteredBlogs(sortedBlogs);
    };

    const sortOptions = [
        { value: "latest", label: "최신순" },
        { value: "oldest", label: "오래된 순" },
        { value: "alphabetical", label: "제목순" },
    ];

    return (
        <Layout>
            <div className="container px-4 py-6 mx-auto sm:px-6 md:px-8">
                <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Blog</h1>

                {/* 필터링 및 정렬 UI */}
                <div className="flex flex-col gap-4 mb-6 md:flex-row md:items-center md:justify-between">
                    <Filter
                        availableTechs={availableTechs}
                        availableYears={availableYears}
                        onFilterChange={handlerFilterChange}
                    />
                    <Sort
                        availableOptions={sortOptions}
                        defaultSort="latest"
                        onSortChange={handleSortChange}
                    />
                </div>

                {/* 블로그 포스트 목록 */}
                {filteredBlogs.length > 0 ? (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredBlogs.map((blog) => (
                            <BlogCard
                                key={blog.id}
                                date={blog.date}
                                title={blog.title}
                                previewContent={blog.previewContent}
                                techStack={blog.techStack}
                                thumbnail={blog.thumbnail}
                                slug={blog.slug}
                                onFindoutMore={() => {
                                    // 블로그 상세 페이지로 이동하는 로직
                                    console.log(`Find out more about ${blog.title}`);
                                }}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-600 dark:text-gray-300">
                        해당 블로그 포스트를 찾을 수 없습니다.
                    </p>
                )}
            </div>
        </Layout>
    );
}

export default Blog;
