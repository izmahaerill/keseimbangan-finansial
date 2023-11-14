import prisma from "@/custom-script/prisma";
import argon2 from "argon2";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const registerData = req.body;
  // console.log(registerData);

  const passwordHash = await argon2.hash(registerData.password);

  try {
    const result = await prisma.user.create({
      data: {
        email: registerData.email,
        username: registerData.username,
        password: passwordHash,
      },
      select: {
        email: true,
        username: true,
      },
    });
    // console.log(result);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat melakukan registrasi akun" });
  }
}
