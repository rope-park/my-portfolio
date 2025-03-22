// project.tsx - 프로젝트 목록 화면.
import Layout from "../components/Layout";
// import Image from "next/image";

function Projects() {
    return (
        <Layout>
            <div className="projects-container">
                {/* 프로젝트 목록 섹션 */}
                <section className="py-20">
                    <h1 className="mb-4 text-3xl font-bold">Projects</h1>
                    <p className="mb-10 text-lg text-gray-700">
                        내용 추가
                    </p>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        
                    </div>
                </section>
            </div>
        </Layout>
    );
}

export default Projects;
