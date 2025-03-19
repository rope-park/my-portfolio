// index.tsx - 홈페이지 메인 화면. 사이트 기본 주소로 접속 시 보여지는 화면.
import Layout from "../components/Layout";

function Home() {
    return (
        <Layout>
            {/* 전체 컨테이너 */}
            <div className="flex p-0 m-0 flex-col min-w-0 w-full min-h-screen overflow-auto">
                <main className="flex flex-col min-w-0 w-full fixed z-index h-20 pt-20"> {/*수정필요*/}
                    <section className="text-center py-20">
                        <h1 className="text-4xl font-bold">Welcome to Park Ju eul&apos; Portfolio Blog!</h1>
                        <p className="text-gray-500 mt-2">풀스택 공부 및 연습을 위한 포트폴리오용 웹 사이트입니다.</p>
                    </section>
                </main>
            </div>
        </Layout>
    );
}

export default Home;
