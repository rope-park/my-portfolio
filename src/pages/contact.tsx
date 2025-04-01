// contact.tsx - 연락처 화면.

"use client";

import { motion } from "framer-motion";
import Layout from "../components/Layout";
import Form from "../components/Form";

function Contact() {
    return (
        <Layout>
            <section
                id="contact"
                className="flex flex-col items-center justify-center gap-8 pt-28"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold text-[rgb(var(--color-primary))]">
                        Wanna Connect?
                    </h2>
                    <p className="text-lg mt-2 text-[rgb(var(--color-text))] opacity-80">
                        활짝 열려 있습니다! 언제든지 연락 주세요! 💌
                    </p>
                </motion.div>
                
                {/* 연락 폼 */}
                <Form />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-10 text-sm text-[rgb(var(--color-text))] space-y-2"
                >
                    <p>
                        <strong>📧 Email:</strong>
                    </p>
                    <p>
                        <strong>💼 LinkedIn:</strong> linkedin.com
                    </p>
                    <p>
                        <strong> 🖥 GitHub:</strong> github.com/rope-park
                    </p>
                </motion.div>
            </section>
        </Layout>
    );
}

export default Contact;
