// navigation.tsx - 네비게이션 컴포넌트.

"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";

const navItems = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

const Navigation = () => {
    const pathname = usePathname(); // 현재 경로를 가져옴.
    const [isOpen, setIsOpen] = useState(false); // 모바일 네비게이션 메뉴 오픈 상태.
    const toggleMenu = () => setIsOpen(false); // 모바일 네비게이션 메뉴 닫기.

    return (
        <>
            {/* 데스크탑 네비게이션 (768px 이상) */}
            <nav className="items-center justify-center hidden text-gray-900 md:flex backdrop-blur-md bg-white/80 dark:bg-black/80 dark:text-white">
                <ul className="flex space-x-4 md:space-x-6 lg:space-x-8">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`text-gray-900 transition-colors dark:text-white hover:text-gray-700 dark:hover:text-gray-300 ${pathname === item.href ? "font-semibold text-blue-600 dark dark:text-blue-400"
                                    : "text-gray-700 dark:text-gray-300"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* 모바일 네비게이션 (768px 미만) */}
            < div className="md:hidden" >
                <button onClick={() => setIsOpen(!isOpen)} className="p-2">
                    {isOpen ? (
                        <XMarkIcon className="w-6 h-6 text-gray-900 dark:text-gray-200" />
                     ) : (
                        <Bars3Icon className="w-6 h-6 text-gray-900 dark:text-gray-200" />
                    )}
                </button>

                {/* 모바일 메뉴 - 오픈 상태일 때만 표시 */}
                {isOpen && (
                    <div className="absolute left-0 w-full bg-white shadow-md top-16 dark:bg-black">
                        <ul className="flex flex-col items-center py-6 space-y-4">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={`block text-gray-900 transition-colors dark:text-white hover:text-gray-700 dark:hover:text-gray-300 ${pathname === item.href ? "font-semibold text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"
                                            }`}
                                        onClick={() => toggleMenu()}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default Navigation;
