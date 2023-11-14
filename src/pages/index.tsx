import Artikel from "@/components/Artikel";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbars from "@/components/Navbars";
import Quotes from "@/components/Quotes";
import VidEducation from "@/components/VidEducation";

const Home: React.FC = () => {
  return (
    <>
      <Navbars />
      <main>
        <HeroSection />
        <Artikel />
        <Quotes />
        <VidEducation />
      </main>
      <Footer />
    </>
  );
};
export default Home;
