// BlogCard.tsx - 블로그 카드 컴포넌트.
// 블로그 정보를 표시하고, 클릭 시 블로그 상세 페이지로 이동.

// BlogCard.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogCardProps {
    date: string;             // 블로그 포스트 작성 날짜
    title: string;            // 블로그 제목
    previewContent: string;   // 내용 미리보기
    techStack: string[];      // 관련 기술 스택 목록
    thumbnail: string;        // 썸네일 이미지 URL
    onFindoutMore: () => void; // '더 알아보기' 버튼 클릭 이벤트 핸들러
    slug: string;             // 블로그 상세 페이지로 이동하기 위한 slug
}

const BlogCard = ({
    date,
    title,
    previewContent,
    techStack,
    thumbnail,
    onFindoutMore,
    slug,
}: BlogCardProps) => {
    return (
        <div className="relative flex flex-col transition-shadow bg-white border border-gray-200 shadow-sm dark:bg-gray-900 dark:border-gray-700 rounded-2xl hover:shadow-lg">
            {/* 썸네일 이미지 섹션 */}
            <Link href={`/blogs/${slug}`}>
                <div className="relative w-full h-56 overflow-hidden cursor-pointer">
                    <Image
                        src={thumbnail}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover rounded-t-2xl"
                    />
                </div>
            </Link>

            {/* 블로그 정보 섹션 */}
            <div className="flex flex-col flex-grow p-4">
                <div className="text-sm text-gray-500 dark:text-gray-400">{date}</div>
                <h3 className="mt-1 text-xl font-semibold text-gray-900 dark:text-white">
                    {title}
                </h3>
                <p className="flex-grow mt-2 text-gray-600 dark:text-gray-300">
                    {previewContent}
                </p>

                {techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                        {techStack.map((tech, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 rounded-full dark:bg-gray-800 dark:text-gray-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                <button
                    onClick={onFindoutMore}
                    className="self-start mt-4 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                    더 알아보기
                </button>
            </div>
        </div>
    );
};

export default BlogCard;
