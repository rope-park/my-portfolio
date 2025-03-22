// blog.tsx - 블로그 목록 화면.
import Layout from "../components/Layout";

function Blog() {
    return (
        <Layout>
            <div className="blog-container">
                {/* 블로그 포스트 목록 섹션 */}
                <section className="py-20">
                    <h1 className="mb-4 text-3xl font-bold">Blog</h1>
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

export default Blog;
