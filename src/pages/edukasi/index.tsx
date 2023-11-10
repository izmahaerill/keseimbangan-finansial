import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import SideBar from "@/components/SideBar";
import VideoSec from "@/components/VideoSec";
import { Typography } from "@material-tailwind/react";

export default function Edukasi() {
  return (
    <div>
      <Nav />
      <div>
        <Typography variant="h3">
          Ingin menambah pengetahuan tentang keuangan?
        </Typography>
        <Typography className="font-normal text-gray-600">
          Yuk, pahami berbagai strategi keuangan untuk menuju finansial yang
          lebih baik
        </Typography>
      </div>
      <div className="flex">
        <aside>
          <SideBar />
        </aside>
        <VideoSec />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
