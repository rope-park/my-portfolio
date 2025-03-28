// _document.tsx - HTML 문서의 <html>, <head>, <body> 등의 최상위 요소를 커스터마이징할 수 있는 파일.

import { Html, Head, Main, NextScript } from "next/document";

function Document() {
    return (
        <Html lang="ko" className="scroll-smooth">
            <Head>
                {/* Google Fonts 추가 */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Nanum+Gothic:wght@400;700;800&family=Racing+Sans+One&family=Slabo+27px&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

export default Document;