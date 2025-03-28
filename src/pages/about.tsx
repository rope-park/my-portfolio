// about.tsx - about 페이지 컴포넌트. 사이트 기본 주소/about으로 접속 시 보여지는 화면.
// 자기소개, 경력, 기술 스택, 학력 등의 정보 표시.

import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
/*
// 경력 항목을 위한 컴포넌트
const ExperienceItem = ({ title, company, period, description }
    : {
        title: string,
        company: string,
        period: string,
        description: string
    }) => (
    <div className="space-y-1">
        <h4 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h4>
        <p className="text-sm text-gray-500">{company} &bull; {period}</p>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
);

// 기술 스택 항목을 위한 컴포넌트
const SkillCategory = ({ title, skills }
    : {
        title: string,
        skills: string[]
    }) => (
    <div>
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h4>
        <ul className="mt-2 space-y-1">
            {skills.map((skill, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300">
                    {skill}
                </li>
            ))}
        </ul>
    </div>
);
*/
function About() {
    return (
        <Layout>
            <main className="space-y-24">
                <section className="flex flex-col items-center justify-between gap-8 px-6 reverse pt-28 md:flex-row md:px-12">
                    <div className="flex-1 space-y-4 text-center md:text-left">
                        <h1 className="text-4xl font-bold text-[rgb(var(--color-text))]">Hi, I&apos;m Jueul Park.</h1>
                        <p className="text-lg text-[rgb(var(--color-text))]">
                            Fullstack Developer based in South Korea<br />
                            I create modern, responsive websites and web applications.
                        </p>
                        <div className="flex justify-center gap-4 md:justify-start">
                            <Link href="https://github.com/rope-park" className="text-[rgb(var(--color-primary))] hover:underline">
                            🔗 GitHub
                            </Link>
                            <Link href="https://linkedin.com" className="text-[rgb(var(--color-primary))] hover:underline">
                            🔗 LinkedIn
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1">
                        <Image
                            src="/images/profile_temp.jpg"
                            alt="Profile Image"
                            width={300}
                            height={300}
                            className="mx-auto shadow-md rounded-xl"
                        />
                    </div>
                </section>

                {/* Tech Stack 섹션 */}
                <section className="px-6 text-center md:px-12">
                    <h2 className="mb-6 text-2xl font-semibold">🧩 Tech Stack</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {["React", "Next.js", "TailwindCSS", "TypeScript", "Node.js", "Express", "MongoDB", "MySQL"].map((tech) => (
                            <span 
                                key={tech}
                                className="px-4 py-2 text-sm font-medium text-blue-800 transition bg-blue-100 rounded-full shadow-sm hover:shadow-md"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

                {/* 교육 및 경험 섹션 */}
                <section className="px-6 md:px-12">
                    <h2 className="mb-6 text-2xl font-semibold">🎓 Education & 💼 Experience</h2>
                    <div className="pl-6 space-y-6 border-l-2 border-gray-300 dark:border-gray-600">
                        <div>
                            <h3 className="font-bold">한국기술교육대학교 컴퓨터공학부</h3>
                            <p className="text-sm text-[rgb(var(--color-text))]">내용추가</p>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    )
}

export default About;
