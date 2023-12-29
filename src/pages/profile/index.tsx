import Layout from "@/components/Layout/Layout";
import images from "@/img/profile.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Input, Typography } from "@material-tailwind/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  const { data: session } = useSession();

  return (
    <Layout>
      <div className="ml-14 mt-36">
        <Typography
          color="blue-gray"
          className="font-bold text-3xl drop-shadow-lg shadow-black text-anjirr"
        >
          Selamat siang, {session?.user?.name}
        </Typography>
        <Typography
          variant="h4"
          color="gray"
          className="font-normal text-anjirr drop-shadow-lg shadow-black"
        >
          Atur profil akun MyFinance di sini...
        </Typography>
      </div>
      <Link href={""}>
        <div className="flex justify-center my-5">
          <Image
            src={session?.user?.image || images}
            alt=""
            width={120}
            height={500}
            className="rounded-full"
          />
        </div>
      </Link>
      <section className="container mx-auto flex my-5 items-center justify-center gap-1 max-h-full">
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
                  crossOrigin={undefined}
                />
              </div>
              <div className="flex items-center mt-6 gap-4">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-secondary normal-case px-3 font-normal text-anjirr py-3"
                >
                  Batal
                </Button>
                <Button
                  size="lg"
                  className="bg-primary px-3 font-normal normal-case py-3"
                >
                  Simpan
                </Button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
