import Artikel from "@/components/Artikel";
import HeroSection from "@/components/HeroSection";
import Layout from "@/components/Layout/Layout";
import Quotes from "@/components/Quotes";
import VidEducation from "@/components/VidEducation";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <Artikel />
      <Quotes />
      <VidEducation />
    </Layout>
  );
};
export default Home;
