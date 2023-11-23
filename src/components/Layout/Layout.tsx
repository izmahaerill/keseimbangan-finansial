import { Lato } from "next/font/google";
import Footer from "../Footer";
import Navbar from "../Navbars";

type LayoutProps = {
  children: React.ReactNode;
};

const lato = Lato({ subsets: ["latin"], weight: "400" });

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={`${lato.className}`}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
