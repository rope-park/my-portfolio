// Layout.tsx - 웹페이지 전체 레이아웃을 담당하는 컴포넌트.
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
