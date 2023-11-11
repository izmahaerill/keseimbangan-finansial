import Ellipse from "@/img/Ellipse 859.png";
import Illustration from "@/img/Illustration.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Input, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  return (
    <section className="container mx-auto flex my-10 items-center justify-center gap-1 max-h-full">
      <div className="bg-primary p-20 rounded-lg w-1/2">
        <Typography variant="h3" color="white" className="mb-2">
          The simplest way to manage your money
        </Typography>
        <Typography variant="paragraph" color="white">
          Enter your email to access your account
        </Typography>
        <div className="flex flex-col items-center my-16">
          <Image
            src={Illustration}
            alt="Illustration"
            width={450}
            height={460}
          />
          <Image
            src={Ellipse}
            alt="Ellipse"
            width={250}
            height={75}
            className="-mt-8"
          />
        </div>
      </div>
      <div className="w-1/2 flex flex-col items-center gap-5 px-10">
        <div className="text-center">
          <Typography
            variant="h1"
            color="blue-gray"
            className="flex justify-center font-bold drop-shadow-lg shadow-black text-anjirr mb-5"
          >
            Welcome Back!
          </Typography>
          <Typography
            variant="h4"
            color="gray"
            className="font-normal text-anjirr drop-shadow-lg shadow-black"
          >
            Please enter your detail
          </Typography>
        </div>
        <form className="flex flex-col gap-5 w-full">
          <div>
            <Typography variant="h6">Email*</Typography>
            <Input
              type="email"
              size="lg"
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
          <div>
            <Typography variant="h6">Password*</Typography>
            <Input
              type="password"
              size="lg"
              placeholder="Password"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              icon={
                <Icon
                  icon="material-symbols:password-rounded"
                  className="text-xl text-gray-900"
                />
              }
              crossOrigin={undefined}
            />
            <Typography variant="small" className="font-normal text-right">
              Must be at least 8 characters
            </Typography>
          </div>

          <Button
            type="submit"
            size="lg"
            fullWidth
            className="bg-primary normal-case"
          >
            Sign In
          </Button>
        </form>
        <div className="flex gap-3 items-center w-full">
          <span className="h-0.5 bg-black w-full" />
          <Typography variant="h6">or</Typography>
          <span className="h-0.5 bg-black w-full" />
        </div>
        <Button
          size="lg"
          fullWidth
          className="bg-secondary flex items-center gap-2 justify-center text-black normal-case"
        >
          <Icon icon="logos:google-icon" className="text-xl" />
          Log in With Google
        </Button>
        <Typography variant="small" color="gray" className="w-full mt-5">
          Don’t have an account ?{" "}
          <Link href="/auth/signin" className="text-black font-bold">
            Sign Up
          </Link>
        </Typography>
      </div>
    </section>
  );
}
