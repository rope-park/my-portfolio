// index.tsx - 홈페이지 메인 화면. 사이트 기본 주소로 접속 시 보여지는 화면.

import Layout from "../components/Layout";

function Home() {
    return (
        <Layout>
            {/* 대문 문구 섹션 */}
            <section className="py-20 text-left">
                <div className="container">
                    <h1 className="text-4xl font-bold">
                        Welcome to Park Ju Eul&apos;s Portfolio
                    </h1>
                    <p className="mt-4 text-lg text-gray-700">
                        {/* 내용 추가 */}
                        Hello, I&apos;m a front-end developer based in Seoul, South Korea.
                        I create modern, responsive websites and web applications.
                        {/* 내용 추가 */}
                        I&apos;m passionate about learning new technologies and building cool projects.
                    </p>
                </div>
            </section>
        </Layout>
    );
}

export default Home;
