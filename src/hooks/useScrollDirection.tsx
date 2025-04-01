// useScrollDirection.tsx - 스크롤 방향을 감지하는 커스텀 훅.

import { useEffect, useState } from "react";

export type ScrollDirection = "up" | "down";

export const useScrollDirection = (): ScrollDirection => {
    const [direction, setDirection] = useState<ScrollDirection>("up");

    useEffect(() => {
        // 스크롤 방향을 감지하기 위한 변수 초기화
        let lastScrollY = window.scrollY;

        // 스크롤 이벤트 핸들러 정의
        const updateScrollDirection = () => {
            // 현재 스크롤 위치를 가져옴
            const currentScrollY = window.scrollY;
            // 스크롤 방향을 결정
            const newDirection = currentScrollY > lastScrollY ? "down" : "up";

            // 스크롤 방향이 변경된 경우 상태 업데이트
            if (newDirection !== direction && Math.abs(currentScrollY - lastScrollY) > 10) {
                setDirection(newDirection);
            }

            lastScrollY = currentScrollY; // 마지막 스크롤 위치 업데이트
        };

        window.addEventListener("scroll", updateScrollDirection); // 스크롤 이벤트 리스너 등록
        
        return () => window.removeEventListener("scroll", updateScrollDirection); // 컴포넌트 언마운트 시 리스너 제거
    }, [direction]); // direction이 변경될 때마다 effect 실행

    return direction; // 현재 스크롤 방향 반환
};
