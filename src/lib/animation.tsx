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

export const HeroSection: Variants = {
    initial: {
        opacity: 0,
        y: 30,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2,
        },
    },
    exit: {
        opacity: 0,
        y: -30,
    },
}

export const AboutSection: Variants = {
    whileHover: {
        scale: 1.05,
        transition: {
            duration: 0.4,
            type: "spring",
            stiffness: 300,
            damping: 20,
        },
    },
}

export const AboutSectionContent: Variants = {
    initial: {
        opacity: 0,
        x: 40,
    },
    whileInView: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },  
}
