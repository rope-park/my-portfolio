// Form.tsx - 폼 컴포넌트.

import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import Input from "./Input";
import Button from "./Button";

// 폼 입력값 유효성 검사 스키마.
const formSchema = z.object({
    name: z.string().min(2, "이름은 최소 2자 이상 입력해주세요.").max(50, "이름은 최대 50자까지 입력 가능합니다."),
    email: z.string().email("유효한 형식의 이메일 주소를 입력해주세요."),
    message: z.string().min(10, "메시지는 최소 10자 이상 입력해주세요.").max(1000, "메시지는 최대 1000자까지 입력 가능합니다."),
});

// 폼 입력값 유효성 검사 스키마를 사용하여 useForm 훅 초기화.
type FormData = z.infer<typeof formSchema>;

// 폼 인터페이스 정의. 
interface FormProps {
    isAdmin?: boolean; // 관리자 폼 여부.
    onSubmitAction?: (data: FormData) => void; // 폼 제출 시 실행할 함수.
}

function Form({ isAdmin = false, onSubmitAction }: FormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        mode: "onChange", // 입력값 변경 시 유효성 검사.
    });

    const [sent, setSent] = useState(false); // 폼 제출 여부 상태.

    const onSubmit = (data: FormData) => {
        onSubmitAction?.(data); // 폼 제출 시 실행할 함수가 존재하면 실행.
        setSent(true); // 폼 제출 상태 변경.
        setTimeout(() => setSent(false), 5000); // 5초 후 폼 제출 상태 초기화.
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)} // 폼 제출 시 onSubmit 함수 실행.
            className="grid w-full max-w-xl gap-6"
            data-aos="fade-up"
            noValidate
        >
            <Input
                type="text"
                label="이름"
                placeholder="이름을 입력해주세요."
                error={errors.name?.message}
                {...register("name")}
            />
            <Input
                type="email"
                label="이메일"
                placeholder="이메일 주소를 입력해주세요."
                error={errors.email?.message}
                {...register("email")}
            />
            {!isAdmin && (
                <Input
                    type="textarea"
                    label="메시지"
                    placeholder="메시지를 입력해주세요."
                    error={errors.message?.message}
                    {...register("message")}
                />
            )}

            <motion.div whileTap={{ scale: 0.96 }}>
                <Button
                    type="submit"
                    variant={isAdmin ? "primary" : "ghost"}
                    size="md"
                    disabled={isSubmitting || isSubmitSuccessful} // 폼 제출 중 또는 제출 완료 시 버튼 비활성화.
                    aria-live="polite"
                >
                    {isSubmitSuccessful && sent ? "전송 완료" : isAdmin ? "로그인" : "메시지 보내기"}
                </Button>
            </motion.div>
        </form>
    );
};

export default Form;
