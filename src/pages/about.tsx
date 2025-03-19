// about.tsx - about 페이지 컴포넌트. 사이트 기본 주소/about으로 접속 시 보여지는 화면.
// 자기소개, 경력, 기술 스택, 학력 등의 정보 표시.
import Layout from "../components/Layout";
// import Image from "next/image";

/*function About() {
    return (
        /*<Layout>
            <section className="relative flex justify-center w-full min-w-0 px-1rem py-1rem">
                <div className="flex justify-center w-full min-w-0 min-h-0">
                    <div className="flex flex-col w-full max-w-2xl">
                        <div className="fixed left-0 flex flex-col gap-8 pl-6 s-flex-hide top-1/2 transform-translate-y-1/2">
                            <div className="fixed left-0 flex flex-col gap-8 pl-6 m-flex-hide top-1/2 transform-translate-y-1/2 whitespace-nowrap">
                                <div className="flex flex-col gap-3">
                                    {["Introduction", "Work Experience", "Studies", "Technical Skills"].map((item) => (
                                        <div key={item} className="flex items-center gap-2 transition-all duration-200 ease-in-out cursor-pointer">
                                            <div className="flex bg-gray-600 min-w-[2rem] h-[2px]"></div>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-center w-full min-w-0 pl-6 s-flex-col">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default About;*/

// 경력 항목을 위한 컴포넌트
const ExperienceItem = ({ title, company, period, description }
    : {
        title: string,
        company: string,
        period: string,
        description: string
    }) => (
    <div>
        <h4 className="text-xl font-medium">{title}</h4>
        <p className="text-gray-600">{company}</p>
        <p className="text-gray-600">{period}</p>
        <p className="mt-2">{description}</p>
    </div>
);

// 기술 스택 항목을 위한 컴포넌트
const SkillCategory = ({ title, skills }
    : {
        title: string,
        skills: string[]
    }) => (
    <div>
        <h4 className="text-xl font-medium">{title}</h4>
        <ul className="mt-2">
            {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
    </div>
);

function About() {
    return (
        <Layout>
            <div className="about-container">
                {/* 자기소개 섹션 */}
                <section className="py-20">
                    <h2 className="text-3xl font-bold">About Me</h2>
                    <p className="mt-4 text-lg text-gray-700">
                        안녕하세요! 저는 프론트엔드 개발자를 꿈꾸는 박주을입니다.
                        현재는 프론트엔드 개발자로서의 역량을 키우기 위해 노력하고 있습니다.
                    </p>
                </section>

                {/* 경력 섹션 */}
                <section className="py-20">
                    <h3 className="text-2xl font-semibold">Work Experience</h3>
                    <div className="mt-4 space-y-4">
                        <ExperienceItem
                            title="QA 인턴"
                            company="한국정보통신기술협회"
                            period="2024.07 ~ 2024.12"
                            description="GS 인증 업무 정부 주도 프로젝트 K-PaSS 인증 업무를 담당하였습니다."
                        />
                    </div>
                </section>

                {/* 기술 스택 섹션 */}
                <section className="py-20">
                    <h3 className="text-2xl font-semibold">Technical Skills</h3>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <SkillCategory
                            title="Frontend"
                            skills={["HTML, CSS, JavaScript", "React, Next.js, TailwindCSS", "Redux, Context API"]}
                        />
                        <SkillCategory
                            title="Backend"
                            skills={["Node.js, Express, Django", "MongoDB, MySQL"]}
                        />
                        <SkillCategory
                            title="DevOps"
                            skills={["Git, Docker, Kubernetes, Nginx", "AWS"]}
                        />
                    </div>
                </section>

                {/* 학력 섹션 */}
                <section className="py-20">
                    <h3 className="text-2xl font-semibold">Studies</h3>
                    <p className="mt-4">
                        한국기술교육대학교, 컴퓨터공학부 졸업 예정 (2021.03 - 2025.08)
                    </p>
                </section>
            </div>
        </Layout>
    )
}

export default About;