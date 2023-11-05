import Elips from "@/img/Ellipse 859.png";
import img from "@/img/Illustration.png";
import { Icon } from "@iconify/react";
import {
  Button,
  Card,
  Checkbox,
  Input,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";

import Link from "next/link";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen gap-10">
      <div className="bg-primary py-10 pl-10 -pr-10 rounded-md ">
        <div className="mb-10">
          <Typography
            variant="h3"
            className="font-semibold text-white w-[30rem] mb-2"
          >
            The simplest way to manage your money
          </Typography>
          <Typography className="text-white">
            Enter your email to access your account
          </Typography>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            className=""
            src={img}
            width={300}
            height={50}
            priority
            alt="Picture of the author"
          />
          <Image src={Elips} alt="" width={300} height={0} className="-mt-8" />
        </div>
      </div>
      <Card color="transparent" shadow={false}>
        <Typography
          variant="h1"
          color="blue-gray"
          className="flex justify-center font-bold drop-shadow-lg shadow-black text-anjirr"
        >
          Welcome Back!
        </Typography>
        <Typography
          variant="h4"
          color="gray"
          className="flex justify-center mt-1 font-normal text-anjirr"
        >
          Please Enter your details.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              crossOrigin={""}
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              crossOrigin={""}
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="flex justify-between items-center">
            <Checkbox
              crossOrigin={""}
              label={
                <Typography
                  variant="small"
                  className="flex items-center font-semibold text-anjirr"
                >
                  Remember me
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Link href={""}>
              <Typography variant="small" color="gray">
                Forgot Password?
              </Typography>
            </Link>
          </div>
          <Button className="mt-4 mb-4 text-sm bg-secondary" fullWidth>
            sign in
          </Button>
          <div className="flex flex-cols-3 gap-2 justify-center items-center">
            <div className="border border-b-1 w-full border-black"></div>
            <Typography>Or</Typography>
            <div className="border border-b-1 w-full border-black"></div>
          </div>
          <Button
            className="mt-4 text-sm bg-secondary flex items-center justify-center gap-5"
            fullWidth
          >
            <Icon className="text-xl p-0" icon="flat-color-icons:google" /> Log
            in With Google
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            don't have an account?{" "}
            <Link href="" className="font-medium text-gray-900">
              Sign Up
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
