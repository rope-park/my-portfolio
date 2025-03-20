// Header.tsx - 웹페이지 상단에 위치하는 헤더 컴포넌트.
// 사이트 로고 클릭 시 홈페이지로 이동.
// About, Projects, Blog, Contact 네비게이션 제공 및 이동.

"use client"; // Next.js 13 이상부터 지원하는 기능. CSR을 명시적으로 사용(기본값 SSR).
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    // usePathname() 훅을 사용하여 현재 경로를 가져옴.
    const pathname = usePathname();
    const navItems = [
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="fixed left-0 z-50 w-full shadow-md bg-white/80 dark:bg-black/80 backdrop-blur-md">
            <nav className="flex items-center justify-between max-w-6xl px-6 py-4 mx-auto">
                {/* 로고: 클릭 시 홈으로 이동 */}
                <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
                    My Portfolio
                </Link>

                {/* 네비게이션 메뉴 컨테이너 */}
                <div className="flex-1">
                    {/* 네비게이션 메뉴 */}
                    <ul className="fixed left-0 flex justify-center w-full space-x-6 md:bottom-0 md:static md:flex-row md:justify-end bg-white/80 dark:bg-black/80 backdrop-blur-md md:bg-transparent md:backdrop-blur-0">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                {/* 현재 경로와 네비게이션 항목의 href가 일치하면 active 클래스 추가 */}
                                <Link href={item.href}
                                    className={`text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors ${pathname === item.href
                                        ? "font-semibold text-blue-600 dark dark:text-blue-400"
                                        : "text-gray-700 dark:text-gray-300"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
