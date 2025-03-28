// Logo.tsx - 웹페이지 상단에 위치하는 로고 컴포넌트. 사이트 로고 클릭 시 메인 페이지로 이동.

"use client"
import Link from "next/link";

const Logo = () => {
    return (
        <Link
            href="/"
            className="flex items-center space-x-2 cursor-pointer"
        >
            {/* 모바일 및 데스크탑 대응 (svg 또는 이미지 사용 가능) */}
            <div className="relative z-50 w-10 h-10 md:w-12 md:h-12">
            </div>
            <span 
                className="text-lg font-semibold tracking-wide md:text-xl"
                style={{ color: "rgb(var(--color-text))" }}
            >
                My Portfolio
            </span>            
        </Link>
    );
};

export default Logo;
