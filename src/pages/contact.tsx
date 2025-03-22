// contact.tsx - 연락처 화면.
import Layout from "../components/Layout";

function Contact() {
    return (
        <Layout>
            <div className="contact-container">
                {/* 연락처 섹션 */}
                <section className="py-20">
                    <h1 className="mb-4 text-3xl font-bold">Contact</h1>
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

export default Contact;
