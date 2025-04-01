// Layout.tsx - 웹페이지 전체 레이아웃을 담당하는 컴포넌트.
import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {/* ThemeProvider: 다크 모드 및 라이트 모드 지원을 위한 테마 제공자 */}
    <div className="grid grid-rows-[auto, 1fr, auto] w-full min-w-0 min-h-screen overflow-auto">
      <Header />
      <main className="px-6 py-6 pt-[60px]">{children}</main>
      <Footer />
    </div>
    </ThemeProvider>
  );
};

export default Layout;
