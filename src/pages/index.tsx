import React from "react";
import { Inter } from "next/font/google";
import { ComplexNavbar } from "@/components/Navbars";
import Artikel from "@/components/Artikel";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ComplexNavbar />
      <Artikel />
      <div></div>
    </>
  );
}
