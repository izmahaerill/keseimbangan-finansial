import prisma from "@/custom-script/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const dataManagemen = req.body;
    try {
      await prisma.managemenPengeluaran.create({
        data: {
          jumlahPengeluaran: dataManagemen.jumlahPengeluaran,
          kategori: "NULL",
          namaPengeluaran: dataManagemen.namaPengeluaran,
          waktuTransaksi: dataManagemen.waktuTransaksi,
        },
      });
      res.status(200).json({ message: "Success" });
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "AAh Error" });
    }
  }
}
