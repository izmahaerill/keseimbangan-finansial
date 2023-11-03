import ilustration from "@/img/Illustration.png";
import { Input, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

export default function Register() {
  return (
    <>
      <div>
        <div className="flex justify-center items-center w-screen h-screen gap-10">
          <div className="bg-primary text-white ">
            <Typography variant="h2" className="">
              To simplest way to manage your money
            </Typography>
            <Typography variant="h6">
              Enter your email to access your account
            </Typography>
            <Image src={ilustration} alt="" width={471.78} height={479}></Image>
          </div>
          <div>
            <div>
              <Typography>Create Account</Typography>
              <Typography>
                Nice to meet you! Enter your details to register.
              </Typography>
            </div>
            <form action="w-[50rem] h-[50rem]">
              <label htmlFor="">Your Name</label>
              <Input type="text" crossOrigin={""} />
              <label htmlFor="">Your Email</label>
              <Input type="text" crossOrigin={""} />
              <label htmlFor="">Your Password</label>
              <Input type="password" crossOrigin={""} />
              <label htmlFor="">Confirm Your Password</label>
              <Input type="text" crossOrigin={""} />
              <button>Sign Up</button>
              <div>
                <Typography>Sudah Punya Akun?</Typography>
                <Link href={""}>Sign In</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="container flex justify-center items-center w-screen h-screen">
        <div className="flex gap-10 items-center justify-center">
          <div className=" w-1/2 my-10">
            <div className="flex flex-col bg-primary w-96 h-screen ">
              <div className="">
                <Typography variant="paragraph" className="text-4xl ">
                  To simplest way to manage your money
                </Typography>
                <Typography>
                  {" "}
                  Enter your email to access your account
                </Typography>
              </div>
              <div>
                <Image
                  src={ilustration}
                  width={250}
                  height={250}
                  priority
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
          <div>
            <Card color="transparent" className="mt-5">
              <div className="flex flex-col items-center gap-2">
                <Typography variant="h2" color="blue-gray">
                  Create Account
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  Nice to meet you! Enter your details to register.
                </Typography>
              </div>
              <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-3">
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Nama Anda
                  </Typography>
                  <Input
                    crossOrigin={""}
                    size="md"
                    placeholder="your name"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Email Anda
                  </Typography>
                  <Input
                    crossOrigin={""}
                    size="md"
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
                    size="md"
                    placeholder="********"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    konfirmasi Password
                  </Typography>
                  <Input
                    crossOrigin={""}
                    type="password"
                    size="md"
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
                  Daftar
                </Button>
                <Typography
                  color="gray"
                  className="mt-4 text-center font-normal"
                >
                  Sudah Punya Akun?{" "}
                  <Link
                    href="/form/SignIn"
                    className="font-medium text-gray-900"
                  >
                    Sign In
                  </Link>
                </Typography>
              </form>
            </Card>
          </div>
        </div>
      </div> */}
    </>
  );
}
