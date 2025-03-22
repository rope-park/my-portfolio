// Header.tsx - 웹페이지 상단에 위치하는 헤더 컴포넌트.
// 사이트 로고 클릭 시 홈페이지로 이동.
// About, Projects, Blog, Contact 네비게이션 제공 및 이동.

"use client"; // Next.js 13 이상부터 지원하는 기능. CSR을 명시적으로 사용(기본값 SSR).
//import Link from "next/link";
import Navigation from "./Navigation";
import Toggle from "./Toggle";

const Header = () => {

    return (
        <header className="fixed top-0 left-0 z-50 flex items-center justify-between w-full px-6 py-4 shadow-md bg-white/80 dark:bg-black/80 backdrop-blur-md">
            <div className="flex items-center space-x-4">
                {/* 네비게이션 컴포넌트 */}
                <Navigation />

                {/* 다크 모드 토글 컴포넌트 */}
                <div className="absolute right-6 top-4 z-[60]">
                    <Toggle />
                </div>
            </div>
        </header>
    );
};

export default Header;
