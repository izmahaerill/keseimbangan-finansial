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
      <div className="bg-primary p-10 rounded-md">
        <Image
          className=""
          src="https://img.freepik.com/free-vector/working-characters-flat-design-web-banner_1308-128001.jpg?w=740&t=st=1697735071~exp=1697735671~hmac=3d911031ca40a89d087daaf041e39006431d5f6b5d8432e64212edf2db021779"
          width={400}
          height={400}
          priority
          alt="Picture of the author"
        />
      </div>
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to login.
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
          <Checkbox
            crossOrigin={""}
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <Link
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </Link>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6 bg-secondary" fullWidth>
            sign in
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
