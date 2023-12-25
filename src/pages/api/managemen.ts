import prisma from "@/custom-script/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const handlePostMethod = async (req: NextApiRequest, res: NextApiResponse) => {
  const dataManagemen = req.body;
  try {
    await prisma.managemenPengeluaran.create({
      data: {
        jumlahPengeluaran: parseInt(dataManagemen.jumlahPengeluaran),
        kategori: dataManagemen.kategori,
        namaPengeluaran: dataManagemen.namaPengeluaran,
        waktuTransaksi: dataManagemen.waktuTransaksi,
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
    const result = await prisma.managemenPengeluaran.findMany();
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
