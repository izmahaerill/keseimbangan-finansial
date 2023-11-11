import Artikel from "@/components/Artikel";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbars from "@/components/Navbars";
import Quotes from "@/components/Quotes";
import VidEducation from "@/components/VidEducation";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Home: React.FC = () => {
  return (
    <>
      <Navbars />
      {/* <Nav /> */}
      <div className="">
        <HeroSection />
        <Artikel />
        <Quotes />
        <VidEducation />
        <Footer />
      </div>
    </>
  );
};
export default Home;
