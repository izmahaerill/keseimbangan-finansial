import Artikel from "@/components/Artikel";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import VidEducation from "@/components/VidEducation";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <Navbars /> */}
      <Nav />
      <div className="">
        <Artikel />
        <VidEducation />
        <Footer />
      </div>
    </>
  );
}
