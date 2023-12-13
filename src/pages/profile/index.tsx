import Layout from "@/components/Layout/Layout";
import images from "@/img/profile.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Input, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  return (
    <Layout>
      <div className="ml-14">
        <Typography
          variant="h2"
          color="blue-gray"
          className="font-bold drop-shadow-lg shadow-black text-anjirr"
        >
          Selamat siang, Obi
        </Typography>
        <Typography
          variant="h4"
          color="gray"
          className="font-normal text-anjirr drop-shadow-lg shadow-black"
        >
          Atur profil akun myfinance di sini
        </Typography>
      </div>
      <Link href={""}>
        <div className="flex justify-center">
          <Image src={images} alt=""></Image>
          <div className="flex bg-primary items-center justify-center w-10 h-10 rounded-full absolute mt-28 ml-28 ">
            <Icon
              icon="system-uicons:write"
              className="text-xl text-white w-7 h-7  "
            />
          </div>
        </div>
      </Link>
      <section className="container mx-auto flex my-10 items-center justify-center gap-1 max-h-full">
        <div className="w-1/2 flex flex-col items-center gap-5 px-10">
          <form
            className="flex flex-col gap-5 w-full"
            //  onSubmit={registerHandler}
          >
            <div>
              <Typography variant="h6">Name</Typography>
              <Input
                type="text"
                size="lg"
                id="username"
                name="username"
                placeholder="Username"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                icon={
                  <Icon
                    icon="material-symbols:account-circle"
                    className="text-xl text-gray-900"
                  />
                }
                crossOrigin={undefined}
              />
            </div>
            <div>
              <Typography variant="h6">Email</Typography>
              <Input
                type="email"
                size="lg"
                id="email"
                name="email"
                placeholder="Email"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                icon={
                  <Icon
                    icon="material-symbols:mark-email-unread"
                    className="text-xl text-gray-900"
                  />
                }
                crossOrigin={undefined}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Typography variant="h6">Kata Sandi</Typography>
                <Input
                  type="password"
                  size="lg"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900  w-[328px]"
                  icon={
                    <Icon
                      icon="material-symbols:password-rounded"
                      className="text-xl text-gray-900"
                    />
                  }
                  crossOrigin={undefined}
                />
              </div>
              <div className="flex items-center mt-6 gap-4">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-secondary normal-case px-3 font-normal text-anjirr py-3"
                >
                  Simpan
                </Button>
                <Button
                  size="lg"
                  className=" bg-primary px-3 font-normal normal-case py-3"
                >
                  Ubah Kata Sandi
                </Button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
