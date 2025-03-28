// index.tsx - 홈페이지 메인 화면. 사이트 기본 주소로 접속 시 보여지는 화면.

import Layout from "../components/Layout";
import Button from "../components/Button";

function Home() {
    return (
        <Layout>
            {/* 대문 문구 섹션 */}
            <section className="flex flex-col item-start justify-center h-[90vh] px-6 container space-y-6">
                <div className="space-y-4">
                    <p className="text-xl"></p>
                    <h1 className="text-5xl tracking-tight font-extralight">
                        Welcome to Park Ju Eul&apos;s Portfolio
                    </h1>
                    <h2 className="text-2xl text-[rgb(var(--color-text))] opacity-80">
                        {/* 내용 추가 */}
                        Hello, I&apos;m a front-end developer based in Seoul, South Korea.
                        I create modern, responsive websites and web applications.
                        {/* 내용 추가 */}
                        I&apos;m passionate about learning new technologies and building cool projects.
                    </h2>
                </div>
                {/* 버튼 그룹 */}
                <div className="flex flex-wrap gap-4">
                    <Button variant="primary" size="md">
                        🔗View Projects
                    </Button>
                    <Button variant="outline" size="md">
                        📄Resume
                    </Button>
                </div>
            </section>

            {/* About 섹션 */}
            <section className="container grid items-center grid-cols-1 gap-10 px-6 py-20 md:grid-cols-2">
                <div className="w-full h-64 bg-gray-200 rounded-lg" /> {/* 이미지 추가 */}
                <div className="space-y-4">
                    <h2 className="text-3xl font-semibold">About Me</h2>
                    {/* 내용 추가 */}
                    <p>👋 컴퓨터공학 졸업예정생</p>
                    <p>💻 웹 풀스택 개발자 지망</p>
                    <p>🛠️ Skills: React, Next.js, TypeScript, Tailwind</p>
                    <p>🎓 학력 및 경험 요약 가능</p>
                </div>
            </section>
    
            {/* Projects 섹션 */}
            <section className="container px-6 py-20">
                <h2 className="mb-8 text-3xl font-semibold">💡 Featured Projects</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* 프로젝트 카드 1 */}
                    <div className="p-4 border shadow-md rounded-xl">Project Card 1</div>
                    {/* 프로젝트 카드 2 */}
                    <div className="p-4 border shadow-md rounded-xl">Project Card 2</div>
                    {/* 프로젝트 카드 3 */}
                    <div className="p-4 border shadow-md rounded-xl">Project Card 3</div>
                </div>
            </section>

            {/* Blog 섹션 */}
            <section className="container px-6 py-20">
                <h2 className="mb-8 text-3xl font-semibold">📝 Blog</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* 블로그 카드 1 */}
                    <div className="p-4 border rounded-lg shadow-sm">Blog Card 1</div>
                    {/* 블로그 카드 2 */}
                    <div className="p-4 border rounded-lg shadow-sm">Blog Card 2</div>
                    {/* 블로그 카드 3 */}
                    <div className="p-4 border rounded-lg shadow-sm">Blog Card 3</div>
                </div>
            </section>

            {/* Contact 섹션 */}
            <section className="container px-6 py-20 text-center">
                <h2 className="mb-4 text-3xl font-semibold">📬 Contact Me</h2>
                <p className="mb-6 text-gray-600 dark:text-gray-400">Feel free to reach out via email or check out my social links below!</p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Button variant="link" size="md">
                        📧 Email
                    </Button>
                    <Button variant="link" size="md">
                        🔗 LinkedIn
                    </Button>
                    <Button variant="link" size="md">
                        🔗 GitHub
                    </Button>
                </div>
            </section>
        </Layout>
    );
}

export default Home;
