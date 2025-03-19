// _app.tsx - Next.js에서 기본 App 컴포넌트를 재정의, 페이지 초기화(페이지 간 탐색 시 상태 유지 등)를 가능하게 해주는 파일.
// 전역 스타일을 해당 파일에서 import하여 사용.
import "../styles/globals.css";

import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
