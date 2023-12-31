import prisma from "@/custom-script/prisma";
import argon from "argon2";
import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const loginData = req.body;
  // console.log(loginData);

  const userData = await prisma.user.findUnique({
    where: {
      email: loginData.email,
    },
  });

  if (!userData) return res.status(404).json({ message: "Not Found bu!!" });

  const jwtToken = jwt.sign(
    {
      email: userData.email,
      username: userData.username,
    },
    "financeBalanceYaww"
  );
  // checked password
  const passwordValidate = await argon.verify(
    userData.password,
    loginData.password
  );
  console.log(passwordValidate);
  if (!passwordValidate) return res.status(401).json({ message: "yahahahh" });

  const Cookie = [
    `token=${jwtToken}; HttpOnly; path="/"; SameSite=Lax; Secure`,
    `username=${userData.username}; HttpOnly; path="/"; SameSite=Lax; Secure`,
  ];
  res.setHeader("Set-Cookie", Cookie);

  res.status(200).json({
    email: userData.email,
    username: userData.username,
    token: jwtToken,
  });
}
