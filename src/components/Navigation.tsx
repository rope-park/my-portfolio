// navigation.tsx - 네비게이션 컴포넌트.

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

interface NavigationProps {
    mobileOnly?: boolean;
}

const Navigation = ({ mobileOnly = false }: NavigationProps) => {
    const pathname = usePathname(); // 현재 경로를 가져옴.
    const [isOpen, setIsOpen] = useState(false); // 모바일 네비게이션 메뉴 오픈 상태.
    const menuRef = useRef<HTMLDivElement>(null); // 메뉴 DOM 참조.
    const toggleMenu = () => setIsOpen((prev) => !prev); // 메뉴 토글 함수.
    const closeMenu = () => setIsOpen(false); // 메뉴 닫기 함수.
    const baseLinkStyle = "transition-colors hover:opacity-80";

    {/* 메뉴 외부 클릭 시 메뉴 닫기 */ }
    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                closeMenu(); // 메뉴 외부 클릭 시 메뉴 닫기.
            }
        };

        {/* Esc 키 클릭 시 메뉴 닫기 */ }
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                closeMenu(); // Escape 키 클릭 시 메뉴 닫기.
            }
        };

        const handleScroll = () => {
            if (isOpen) {
                closeMenu(); // 스크롤 시 메뉴 닫기.
            };

            if (isOpen) {
                window.addEventListener("scroll", handleScroll); // 스크롤 이벤트 리스너 등록.
            }

            return () => {
                window.removeEventListener("scroll", handleScroll); // 스크롤 이벤트 리스너 해제.
            };
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleOutsideClick); // 메뉴 오픈 시 외부 클릭 이벤트 리스너 등록.
            document.addEventListener("keydown", handleEscape); // 메뉴 오픈 시 Esc 키 이벤트 리스너 등록.
            document.addEventListener("scroll", handleScroll); // 메뉴 오픈 시 스크롤 이벤트 리스너 등록.
            document.body.style.overflow = ""; // 스크롤 복구
        };
    }, [isOpen]); // isOpen 상태가 변경될 때마다 실행.

    return (
        <>
            {/* 데스크탑 네비게이션 (768px 이상) */}
            {!mobileOnly && (
                <nav className="items-center hidden space-x-6 md:flex">
                    <ul className="flex flex-1 space-x-4 md:space-x-6 lg:space-x-8">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`${baseLinkStyle} ${pathname === item.href
                                        ? "font-semibold text-[rgb(var(--color-primary))]"
                                        : "text-[rgb(var(--color-text))]"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}

            {/* 모바일 네비게이션 (768px 미만) */}
            {mobileOnly && (
                <div className="flex items-center gap-2 md:hidden">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={toggleMenu}
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
                </div>
            )}

            {/* 모바일 메뉴 - 오픈 상태일 때만 표시 */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* 오버레이 */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed z-40 bg-black backdrop-blur-sm"
                        />

                        {/* 메뉴 */}
                        <motion.div
                            ref={menuRef}
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 24 }}
                            className="fixed left-0 z-50 w-full overflow-hidden bg-white rounded-b-lg shadow-md top-16"
                        >
                            <ul className="flex flex-col space-y-2 divide-y divide-gray-200">
                                {navItems.map((item) => (
                                    <li key={item.href} className="w-full">
                                        <Link
                                            href={item.href}
                                            className={`block w-full py-4 text-center text-lg ${baseLinkStyle} ${pathname === item.href
                                                ? "font-semibold text-[rgb(var(--color-primary))]"
                                                : "text-[rgb(var(--color-text))]"
                                                }`}
                                            onClick={closeMenu}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;
