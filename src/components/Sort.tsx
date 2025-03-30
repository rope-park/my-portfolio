// Sort.tsx - 블로그 정렬 컴포넌트.

"use client";
import React, { useState, useEffect } from "react";

// 정렬 기준
interface SortOption {
    value: string; // 정렬 기준
    label: string;  // 정렬 기준 라벨
}

// Sort 컴포넌트의 props
interface SortProps {
    availableOptions: SortOption[]; // 정렬 기준 목록
    defaultSort?: string; // 기본 정렬 기준
    onSortChange: (sort: string) => void; // 정렬 기준 변경 시 호출할 함수
}

// 정렬 기준을 선택할 수 있는 셀렉트 박스 렌더링.
function Sort({ availableOptions, defaultSort="", onSortChange }: SortProps) {
    const [selectedSort, setSelectedSort] = useState(defaultSort);

    // 정렬 기준 변경 시 호출할 함수
    useEffect(() => {
        onSortChange(selectedSort);
    }, [selectedSort, onSortChange]);
        
    return (
        <div className="flex items-center space-x-2 text-sm">
            <label htmlFor="sort" className="font-medium text-gray-700">
                Sort by:
            </label>
            <select
                id="sort"
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="px-3 py-2 rounded-md border bg-[rgb(var(--color-background))] text-[rgb(var(--color-text))] ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))] transition-all"
            >
                {availableOptions.map(({ value, label }) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Sort;
