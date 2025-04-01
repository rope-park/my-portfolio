// animation.tsx - framer-motion 애니메이션 관련 타입과 상수 정의.

import { Variants } from "framer-motion"

// 페이지 전환용 애니메이션
export const PageTransition: Variants = {
    initial: {
        opacity: 0,
        y: -10,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
    exit: { 
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.4,
            ease: "easeIn",
        },
    },
};

//
export const ScrollDown: Variants = {

};

export const ScrollUp: Variants = {

};

export const Button: Variants = {

};

export const Text: Variants = {

};

export const Image: Variants = {

};

export const Card: Variants = {
    
}