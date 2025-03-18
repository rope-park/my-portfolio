// page.tsx - 홈페이지 메인 화면. 사이트 기본 주소로 접속 시 보여지는 화면.
import Layout from "../components/Layout";

function Home() {
    return (
        <Layout>
            <section className="text-center py-20">
                <h1 className="text-4xl font-bold">Welcome to Park Ju eul&apos; Portfolio Blog!</h1>
                <p className="text-gray-500 mt-2">풀스택 공부 및 연습을 위한 포트폴리오용 웹 사이트입니다.</p>
            </section>
        </Layout>
    );
}

export default Home;
