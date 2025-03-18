// Header.tsx - 웹페이지 상단에 위치하는 헤더 컴포넌트.
// 사이트 로고 클릭 시 홈페이지로 이동.
// About, Projects, Blog, Contact 네비게이션 제공 및 이동.

"use client"; // Next.js 12.0.0 이상부터 지원하는 기능. 서버사이드 렌더링을 사용하지 않는 페이지에서만 사용해야 함.
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    // usePathname() 훅을 사용하여 현재 경로를 가져옴.
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-md z-50">
            <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
                {/* 로고 */}
                <Link href="/" className="text-2xl font-bold text-grey-900 dark:text-white">
                    My Portfolio
                </Link>

                {/* 네비게이션 메뉴 */}
                <ul className="flex space-x-6">
                    {[
                        { name: "About", href: "/about" },
                        { name: "Projects", href: "/projects" },
                        { name: "Blog", href: "/blog" },
                        { name: "Contact", href: "/contact" },
                    ].map((item) => (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                            className={`text-gray-700 dark:text-gray-300 hover:text-blue-500 transition ${
                                pathname === item.href ? "font-semibold text-blue-600 dark:text-blue-400" : ""
                                }`}
                        >
                            {item.name}
                        </Link>
                    </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;