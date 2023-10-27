import Ellipse from "@/img/Ellipse 859.png";
import Illustration from "@/img/Illustration.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Input, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  return (
    <section className="container mx-auto flex my-10 items-center justify-center gap-28">
      <div className="bg-primary p-20 rounded-lg w-1/2">
        <Typography variant="h3" color="white">
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
          <Typography variant="h2">Create Account</Typography>
          <Typography variant="h5">Please enter your detail</Typography>
        </div>
        <form className="flex flex-col gap-5 w-full">
          <div>
            <Typography variant="h6">First name*</Typography>
            <Input
              type="text"
              size="lg"
              placeholder="Username"
              className="focus:!border-t-gray-900"
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
            <Typography variant="h6">Email*</Typography>
            <Input
              type="email"
              size="lg"
              placeholder="Email"
              className="focus:!border-t-gray-900"
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
              className="focus:!border-t-gray-900"
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
          </div>
          <div>
            <Typography variant="h6">Confirm Password*</Typography>
            <Input
              type="password"
              size="lg"
              placeholder="Confirm Password"
              className="focus:!border-t-gray-900"
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
          </div>
          <Button type="submit" size="lg" fullWidth className="bg-primary">
            Create Account
          </Button>
        </form>
        <Button
          size="lg"
          fullWidth
          className="bg-secondary flex items-center gap-2 justify-center text-black"
        >
          <Icon icon="logos:google-icon" className="text-xl" />
          Log in With Google
        </Button>
        <Typography variant="small" color="gray" className="w-full mt-5">
          Already have an account?{" "}
          <Link href="/auth/signin" className="text-black font-bold">
            Log in
          </Link>
        </Typography>
      </div>
    </section>
  );
}
