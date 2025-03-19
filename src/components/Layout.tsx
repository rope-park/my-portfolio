// Layout.tsx - 웹페이지 전체 레이아웃을 담당하는 컴포넌트.
import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex p-0 m-0 flex-col min-w-0 w-full min-h-[100vh] overflow-auto">
      <Header />
      <main className="flex-row">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
