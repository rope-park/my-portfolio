// Header.tsx - 웹페이지 상단에 위치하는 헤더 컴포넌트.
// 사이트 로고 클릭 시 홈페이지로 이동.
// About, Projects, Blog, Contact 네비게이션 제공 및 이동.

"use client"; // Next.js 13 이상부터 지원하는 기능. CSR을 명시적으로 사용(기본값 SSR).
import Logo from "./Logo";
import Navigation from "./Navigation";
import Toggle from "./Toggle";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 z-50 flex items-center justify-between w-full h-16 px-6 shadow-md backdrop-blur-3xl bg-[rgb(var(--color-background))]/80">
            {/* 로고 컴포넌트 */}
            <div className="flex items-center w-1/3">
                <Logo />
            </div>

            {/* 네비게이션 컴포넌트 */}
            <div className="justify-center flex-1 hidden w-1/3 md:flex">
                <Navigation />
            </div>

            {/* 다크 모드 토글 버튼 */}
            <div className="flex justify-end w-1/3 gap-2">
                <Toggle />
                <div className="md:hidden">
                    <Navigation mobileOnly />
                </div>
                
            </div>
        </header >
    );
};

export default Header;
