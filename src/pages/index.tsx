import Artikel from "@/components/Artikel";
import Footer from "@/components/Footer";
import FormSection from "@/components/FormSection";
import HeroImage from "@/components/HeroImage";
import Quotes from "@/components/Quotes";
import SideBar from "@/components/SideBar";
import VidEducation from "@/components/VidEducation";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="">
        {/* <ComplexNavbar /> */}
        <Artikel />
        <Quotes />
        <VidEducation />
        <HeroImage />
        <div>
          <SideBar />
        </div>
        <FormSection />
        <Footer />
      </div>
    </>
  );
}
