// navigation.tsx - 네비게이션 컴포넌트.

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

const Navigation = () => {
    const pathname = usePathname(); // 현재 경로를 가져옴.

    return (
        <>
            {/* 데스크탑 네비게이션 (768px 이상) */}
            < nav className="fixed top-0 left-0 z-50 hidden w-full shadow-md md:justify-between md:flex md:items-center bg-white/80 dark:bg-black/80 backdrop-blur-md">
                <div className="flex items-center justify-between max-w-6xl px-6 py-4 mx-auto">
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
                </div>
            </nav >

            {/* 모바일 네비게이션 (768px 미만) */}
            <nav className="fixed bottom-0 left-0 z-50 w-full shadow-inner md:hidden bg-white/80 dark:bg-black/80 backdrop-blur-md" >
                {/* 네비게이션 메뉴 */}
                <div className="flex justify-center p-4 space-x-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors ${pathname === item.href
                                    ? "font-semibold text-blue-600 dark:text-blue-400"
                                    : "text-gray-700 dark:text-gray-300"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </nav >
        </>
    );
};

export default Navigation;
