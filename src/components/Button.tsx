// Button.tsx - 버튼 컴포넌트.
// 버튼의 모양과 크기, 클릭 이벤트 등을 설정할 수 있음.

"use client";
import clsx from "clsx";
import React, { ButtonHTMLAttributes, ReactNode } from 'react';

// 버튼 스타일과 크기를 정의한 타입.
type Variant = "primary" | "secondary" | "outline" | "ghost" | "link";
type Size = "sm" | "md" | "lg";
type IconType = "Text" | "Icon" | "TextIcon";

// 버튼 컴포넌트의 속성을 정의한 ButtonProps 인터페이스.
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant; // 버튼 스타일.
    size?: Size; // 버튼 크기.
    icon?: ReactNode; // 아이콘.
    iconType?: IconType; // 아이콘 표시 방식 (텍스트, 아이콘, 텍스트+아이콘).
}

/**
 * 재사용 가능한 버튼 컴포넌트.
 * 다양한 variant와 size를 지원하여 여러 상황에서 쉽게 활용 가능.
 *
 * @param {string} variant - 버튼 스타일 유형 (기본: primary)
 * @param {string} size - 버튼 크기 (기본: md)
 * @param {string} className - 추가로 적용할 커스텀 클래스
 * @param {ReactNode} children - 버튼 내부 내용 (텍스트, 아이콘 등)
 * @param {boolean} disabled - 비활성화 상태 (disabled가 true면 opacity 조정)
 * @param {ReactNode} icon - 버튼 내부에 표시할 아이콘
 * @param {string} iconType - 아이콘 표시 방식 (텍스트, 아이콘, 텍스트+아이콘)
 * @param props - 기타 버튼 HTML 속성 (예: onClick 등)
 */

// Button 컴포넌트.
const Button = ({
    variant = "primary",
    size = "md",
    className,
    children,
    disabled,
    icon,
    iconType = "Text",
    ...props
}: ButtonProps) => {
    // 기본 버튼 스타일: 레이아웃, 정렬, 모서리 둥글기, 포커스 효과 등
    const baseClasses =
        "inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 active:border-gray-300 cursor-pointer";

    // 버튼 스타일에 따른 클래스 추가
    const variantClasses: Record<Variant, string> = {
        primary:
            "text-[rgb(var(--color-text))] bg-[rgb(var(--color-primary))] border border-transparent shadow-sm hover:bg-[rgb(var(--color-secondary))] focus:ring-[rgb(var(--color-secondary))] disabled:opacity-50 cursor-pointer",
        secondary:
            "text-white bg-[rgb(var(--color-text))] border border-transparent shadow-sm hover:bg-[rgb(var(--color-secondary))] focus:ring-[rgb(var(--color-secondary))] disabled:opacity-50 cursor-pointer",
        outline:
            "text-[rgb(var(--color-text))] bg-[rgba(0,0,0,0.05)] border border-transparent shadow-sm hover:bg-[rgba(0,0,0,0.1)] focus:ring-[rgb(var(--color-secondary))] disabled:opacity-50 cursor-pointer",
        ghost:
            "text-[rgb(var(--color-text))] bg-transparent border border-transparent shadow-sm hover:bg-[rgba(0,0,0,0.05)] focus:ring-[rgb(var(--color-secondary))] disabled:opacity-50 cursor-pointer",
        link:
            "text-[rgb(var(--color-primary))] bg-transparent border border-transparent shadow-none hover:text-[rgb(var(--color-secondary))] focus:ring-[rgb(var(--color-secondary))] disabled:opacity-50 cursor-pointer",
    };

    // 버튼 크기에 따른 패딩 및 폰트 크기
    const sizeClasses: Record<Size, string> = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };

    // 아이콘 여부에 따른 클래스 추가
    const iconSpacing = iconType === "TextIcon" ? "space-x-2" : "";

    return (
        <button
            className={clsx(baseClasses, variantClasses[variant], sizeClasses[size], iconSpacing, className)}
            disabled={disabled}
            {...props}
        >
            {iconType !== "Text" && icon && <span>{icon}</span>}
            {iconType !== "Icon" && children && <span>{children}</span>}
        </button>
    );
};

export default Button;
