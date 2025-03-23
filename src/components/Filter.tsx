// Filter.tsx - 블로그 필터 컴포넌트.
// 블로그 및 프로젝트 목록을 필터링하기 위한 컴포넌트.

"use client";

import React, { useState, useEffect } from "react";

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
        onFilterChange({ techStack: selectedTechs, year: selectedYear});
    }, [selectedTechs, selectedYear, onFilterChange]);

    const handleTechToggle = (tech: string) => {
        setSelectedTechs((prev) =>
            prev.includes(tech)? prev.filter((t) => t !== tech) : [...prev, tech]
        );
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Filter</h2>

            {/* 기술 스택 필터 */}
            <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">Technology</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                    {availableTechs.map((tech) => (
                        <label key={tech} className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="text-blue-600 form-checkbox"
                                checked={selectedTechs.includes(tech)}
                                onChange={() => handleTechToggle(tech)}
                            />
                            <span className="text-gray-700 dark:text-gray-300">{tech}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* 연도 필터 */}
            <div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">Year</h3>
                <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="block w-full px-3 py-2 mt-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
                >
                    <option value={""}>All Years</option>
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
