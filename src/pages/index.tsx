import Artikel from "@/components/Artikel";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbars";
import Quotes from "@/components/Quotes";
import VidEducation from "@/components/VidEducation";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Artikel />
      <Quotes />
      <VidEducation />
      <Footer />
    </div>
  );
};
export default Home;
