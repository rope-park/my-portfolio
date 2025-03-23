// sort.tsx - 블로그 정렬 컴포넌트.

"use client";
import React, { useState, useEffect } from "react";

interface SortOption {
    value: string;
    label: string;
}

interface SortProps {
    availableOptions: SortOption[];
    defaultSort?: string;
    onSortChange: (sort: string) => void;
}

function Sort({ availableOptions, defaultSort="", onSortChange }: SortProps) {
    const [selectedSort, setSelectedSort] = useState<string>(defaultSort);

    useEffect(() => {
        onSortChange(selectedSort);
        }, [selectedSort, onSortChange]);
        
    return (
        <div className="flex items-center space-x-2">
            <label htmlFor="sort" className="text-gray-700 dark:text-gray-300">
                Sort by:
            </label>
            <select
                id="sort"
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="px-3 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
                {availableOptions.map((availableOptions) => (
                    <option key={availableOptions.value} value={availableOptions.value}>
                        {availableOptions.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Sort;
