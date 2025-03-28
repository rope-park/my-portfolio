// navigation.tsx - 네비게이션 컴포넌트.

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Button from "./Button";
import Toggle from "./Toggle";

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

    const baseLinkStyle = "transition-colors hover:opacity-80";

    return (
        <>
            {/* 데스크탑 네비게이션 (768px 이상) */}
            <nav className="items-center justify-center hidden md:flex backdrop-blur-md bg-[rgb(var(--color-background))]/80">
                <ul className="flex space-x-4 md:space-x-6 lg:space-x-8">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`${baseLinkStyle} ${
                                    pathname === item.href
                                        ? "font-semibold text-[rgb(var(--color-primary))]"
                                        : "text-[rgb(var(--color-text))]"
                                }`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                {/* 다크 모드 토글 버튼 */}
                <div className="hidden ml-4 md:block">
                    <Toggle />
                </div>
            </nav>

            {/* 모바일 네비게이션 (768px 미만) */}
            < div className="md:hidden" >
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(!isOpen)}
                    icon={
                        isOpen ? (
                            <XMarkIcon className="w-6 h-6" style={{ color: "rgb(var(--color-text))" }} />
                        ) : (
                            <Bars3Icon className="w-6 h-6" style={{ color: "rgb(var(--color-text))" }} />
                        )
                    }
                    iconType="Icon"
                    aria-label="Toggle Menu"
                />
                    
                {/* 모바일 메뉴 - 오픈 상태일 때만 표시 */}
                {isOpen && (
                    <div className="absolute left-0 w-full top-16 shadow-md bg-[rgb(var(--color-background))]">
                        <ul className="flex flex-col items-center py-6 space-y-4">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={`${baseLinkStyle} ${
                                            pathname === item.href
                                                ? "font-semibold text-[rgb(var(--color-primary))]"
                                                : "text-[rgb(var(--color-text))]"
                                        }`}
                                        onClick={toggleMenu}
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
