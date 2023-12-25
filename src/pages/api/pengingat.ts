import prisma from "@/custom-script/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const handlePostMethod = async (req: NextApiRequest, res: NextApiResponse) => {
  const dataPengingat = req.body;
  console.log(dataPengingat);
  try {
    await prisma.pengingat.create({
      data: {
        jumlahPengeluaran: parseInt(dataPengingat.jumlahPengeluaran),
        kategori: dataPengingat.kategori,
        namaPengeluaran: dataPengingat.namaPengeluaran,
        waktuDiingatkan: dataPengingat.waktuDiIngatkan,
      },
    });
    res.status(200).json({ message: "Success" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Cannot Post Data" });
  }
};

const handleGetMethod = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const result = await prisma.pengingat.findMany();
    res.status(200).json(result);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Cannot Get Data" });
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    handlePostMethod(req, res);
  }
  if (req.method === "GET") {
    handleGetMethod(req, res);
  }
}
