// Toggle.tsx - 토글 컴포넌트. 다크 모드 전환 버튼 등.

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

const Toggle = () => {
    const [mounted, setMounted] = useState(false); // 컴포넌트 마운트 여부 상태. (다크 모드 토글 버튼 표시 여부)
    const { theme, systemTheme, setTheme } = useTheme(); // 테마 상태와 테마 변경 함수를 가져옴.

    // 컴포넌트가 마운트되면 mounted 상태를 true로 변경.
    useEffect(() => {
        setMounted(true);
    }, []);

    // 서버에서 렌더링 시 깜빡이는 현상 방지.
    if (!mounted) return null; // 컴포넌트가 마운트되지 않았다면 null 반환. (토글 버튼 표시 X)

    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
        <button
            className="p-2 transition-colors border border-gray-400 rounded-md dark:border-gray-500"
            onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
            aria-label="Toggle Dark Mode"
        >
            {mounted ? (
                currentTheme === "light" ? (
                    <MoonIcon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
                ) : (
                    <SunIcon className="w-6 h-6 text-yellow-400 dark:text-yellow-400" />
                )
            ) : (
                <div className="w-6 h-6 border border-gray-400 rounded-full animate-pulse" />
                // 토글 버튼이 표시되기 전까지는 회색 원 형태의 플래싱 애니메이션 표시.
            )}
        </button>
    );
};

export default Toggle;
