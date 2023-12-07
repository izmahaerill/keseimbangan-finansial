import { Lato } from "next/font/google";
import Footer from "../Footer";
import Navbar from "../Navbars";

type LayoutProps = {
  children: React.ReactNode;
};

const lato = Lato({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lato",
});

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={`overflow-hidden ${lato.variable}`}>
      <Navbar />
      <main>{children}</main>
      <div className="mt-96">
        <Footer />
      </div>
    </div>
  );
}
