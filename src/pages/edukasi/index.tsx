import Layout from "@/components/Layout/Layout";
import SideBar from "@/components/SideBar";
import VideoSec from "@/components/VideoSec";
import { Typography } from "@material-tailwind/react";

export default function Edukasi() {
  return (
    <Layout>
      <div className="ml-14">
        <Typography variant="h2">
          Ingin menambah pengetahuan tentang keuangan?
        </Typography>
        <Typography className="font-normal text-gray-600">
          Yuk, pahami berbagai strategi keuangan untuk menuju finansial yang
          lebih baik
        </Typography>
      </div>
      <div className="flex justify-center items-center mt-20">
        <aside className="-mt-[60rem]">
          <SideBar />
        </aside>
        <div className="flex flex-col gap-8">
          <VideoSec />
          <VideoSec />
          <VideoSec />
        </div>
      </div>
    </Layout>
  );
}
