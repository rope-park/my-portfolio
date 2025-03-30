// Filter.tsx - 블로그 필터 컴포넌트.
// 블로그 및 프로젝트 목록을 필터링하기 위한 컴포넌트.

"use client";

import React, { useState, useEffect } from "react";
import Button from "./Button";

interface FilterCriteria {
    techStack: string[];
    year: string;
}

interface FilterProps {
    availableTechs: string[];
    availableYears: string[];
    onFilterChange: (filters: FilterCriteria) => void;
}

function Filter({ availableTechs, availableYears, onFilterChange }: FilterProps) {
    const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
    const [selectedYear, setSelectedYear] = useState<string>("");

    // 필터 상태 변경될 때마다 부모 컴포넌트에게 알림
    useEffect(() => {
        const activeFilters: FilterCriteria = {
            techStack: selectedTechs,
            year: selectedYear,
        };

        onFilterChange(activeFilters);
    }, [selectedTechs, selectedYear, onFilterChange]);

    const handleTechToggle = (tech: string) => {
        setSelectedTechs((prev) =>
            prev.includes(tech)
                ? prev.filter((t) => t !== tech)
                : [...prev, tech]
        );
    };

    return (
        <div className="p-4 bg-[rgb(var(--color-background))] rounded-lg shadow-md ring-1 ring-gray-200 w-full max-w-sm">
            <h3 className="mb-4 text-lg font-semibold text-[rgb(var(--color-text))]">Filter</h3>

            {/* 기술 스택 필터 */}
            <div className="mb-6">
                <p className="mb-1 font-medium">Tech Stack</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {availableTechs.map((tech) => (
                        <Button
                            key={tech}
                            variant="outline"
                            size="sm"
                            className={`${
                                selectedTechs.includes(tech)
                                    ? "bg-blue-600 text-white"
                                    : "text-gray-700"
                            }`}
                            onClick={() => handleTechToggle(tech)}
                        >
                            {tech}
                        </Button>
                    ))}
                </div>
            </div>

            {/* 연도 필터 */}
            <div>
                <p className="mb-1 font-medium">Year</p>
                <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="block w-full mt-1 px-3 py-2 rounded-md border ring-1 ring-gray-300 bg-[rgb(var(--color-background))] text-[rgb(var(--color-text))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))] transition"
                >
                    <option value="">All Years</option>
                    {availableYears.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default Filter;
