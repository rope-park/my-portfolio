// Input.tsx - 입력 컴포넌트 (접근성 및 UX 최적화 포함).

import React, { InputHTMLAttributes, forwardRef, useState } from "react";
import clsx from "clsx";

// InputProps 타입 정의: HTML 기본 input 속성 + 확장 속성들
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string; // 입력 필드 레이블
    error?: string; // 에러 메시지
    icon?: React.ReactNode; // 아이콘 요소
};

// forwardRef 함수로 외부에서 ref 접근 가능하게 처리
const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, icon, className = "", maxLength, onBlur, onChange, ...props }, ref) => {
        const inputId = props.id || label?.toLowerCase().replace(/\s+/g, "-");
        const [touched, setTouched] = useState(false); // 입력 필드가 터치되었는지 여부

        const handelBlur = (e: React.FocusEvent<HTMLInputElement>) => {
            setTouched(true); // 입력 필드가 터치되었을 때 상태 변경
            onBlur?.(e); // 부모 컴포넌트의 onBlur 이벤트 핸들러 호출
        };

        const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (!touched) setTouched(true); // 입력 필드가 변경되었을 때 상태 변경
            onChange?.(e); // 부모 컴포넌트의 onChange 이벤트 핸들러 호출
        };

        return (
            <div className="flex flex-col w-full gap-1">
                {/* 라벨 렌더링 */}
                {label && (
                    <label htmlFor={inputId} className="text-sm font-medium text-[rgb(var(--color-text))]">
                        {label}
                    </label>
                )}

                {/* 입력 필드 wrapper: 아이콘 포함을 위해 flex 구성 */}
                <div
                    className={clsx(
                        "flex items-center px-4 py-3 rounded-md ring-1 ring-transparent transition-all",
                        "bg-[rgb(var(--color-background))] text-[rgb(var(--color-text))]",
                        touched && error && "ring-[rgb(var(--color-secondary))] ring-2",
                        !error && touched && "ring-[rgb(var(--color-primary))] ring-2",
                        className
                    )}
                >
                    {/* 아이콘 렌더링 */}
                    {icon && <span className="mr-2 text-lg text-[rgb(var(--color-primary))]">{icon}</span>}

                    {/* 입력 필드 */}
                    <input
                        ref={ref} // ref 속성 추가
                        id={inputId} // id 속성 추가
                        aria-invalid={!!error} // 에러 상태에 따라 aria-invalid 속성 추가
                        aria-label={label} // 라벨 텍스트를 aria-label로 추가
                        aria-describedby={error ? `${inputId}-error` : undefined}
                        maxLength={maxLength} // 글자수 제한 적용
                        onBlur={handelBlur} // 블러 이벤트 핸들러
                        onChange={handelChange} // 변경 이벤트 핸들러
                        {...props}  // 나머지 속성 전달
                        className={clsx(
                            "w-full px-3 py-2 border-2 bg-gray-transparent outline-none placeholder:text-gray-400 rounded-lg",
                            error && touched
                                ? "border-[rgb(var(--color-secondary))]"
                                : touched
                                    ? "border-[rgb(var(--color-primary))]"
                                    : "border-gray-300/50",
                        )}
                    />
                </div>

                {/* 에러 메시지 렌더링 */}
                {touched && error && (
                    <p id={`${inputId}-error`} className="text-sm text-[rgb(var(--color-secondary))] mt-1 animate-shake">
                        {error}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";
export default Input;
