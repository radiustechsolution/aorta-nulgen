import NavbarJobBoard from "@/components/job-board/navbar";
import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.ok) {
      router.push("/dashboard");
    } else {
      if (result) {
        if (result.error == "CredentialsSignin") {
          toast("Email or password is incorrect", {
            type: "error",
            toastId: "lmxs",
          });
        } else {
          toast(result.error, { type: "error", toastId: "lmxs" });
        }
      }
    }
    setLoading(false);
  };

  return (
    <div className="relative h-svh w-full flex">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/asset/auth-bg1.jpg"
          layout="fill"
          quality={40}
          priority
          objectFit="cover"
          alt="hero background"
          className="z-0"
        />
      </div>

      <div className="z-10 flex flex-col items-center justify-center w-full">
        {/* Back Button */}
        <div className="max-w-[100%] md:max-w-max px-2 sm:px-5 xl:px-0 flex flex-col w-full items-center gap-0">
          <NavbarJobBoard hideRight />
          {/* Left */}
          <div className="bg-white p-5 md:p-14 rounded-md w-full border border-gray-400">
            <div className="flex flex-col gap-0 md:gap-2">
              <h1 className="text-[24px] md:text-[33px] font-[600] leading-[37.996px] text-[#232535]">
                Welcome back
              </h1>
              <p className="text-[14px] max-w-[100%] sm:max-w-[100%] md:text-[18px] text-[#484b62] leading-[26px]">
                Please fill in your email and password to sign in.
              </p>
            </div>

            {/* Display error message */}
            <form
              onSubmit={handleSubmit}
              className="mt-4 md:mt-7 flex flex-col gap-4 md:gap-7"
            >
              {/* Single */}
              <div className="flex flex-col gap-1 md:gap-3 w-full">
                <p className="text-[15px] font-[500] text-[#232535] leading-[17.99px]">
                  Email
                </p>
                <input
                  required
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Update email state
                  placeholder="example@xyz.com"
                  className="h-[38px] text-black md:h-[45px] w-full bg-white rounded-md border border-gray-300 px-2 outline-[#4368FF]"
                />
              </div>
              {/* Single */}
              <div className="flex flex-col gap-1 md:gap-3 w-full">
                <p className="text-[15px] font-[500] text-[#232535] leading-[17.99px]">
                  Password
                </p>
                <input
                  required
                  name="password"
                  type="password" // Change to password type
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Update password state
                  placeholder="Your password"
                  className="h-[38px] text-black md:h-[45px] w-full bg-white rounded-md border border-gray-300 px-2 outline-[#4368FF]"
                />
                <div className="w-full flex items-center justify-between">
                  {/* <div className="flex items-start gap-1">
                    <Checkbox
                      color="secondary"
                      radius="sm"
                      className="text-white"
                      isSelected={isSelected}
                      onValueChange={setIsSelected}
                    />
                    <p className="text-[14px] md:text-[16px] font-medium text-[#484b62] mt-[-1px] max-w-[100%] md:max-w-[80%]">
                      Remember me
                    </p>
                  </div> */}
                  <div></div>
                  <div className="flex items-end text-right gap-1">
                    <Link
                      href="/auth/forgot-password" // Update the link to the forgot password page
                      className="text-[14px] md:text-[16px] underline underline-offset-4 font-medium text-[#484b62] mt-[-3px]"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </div>
              </div>

              {/* Consent */}
              <div className="mt-5 md:mt-3 flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <Button
                    isLoading={loading}
                    type="submit" // Set button type to submit
                    className={`bg-gradient-to-b from-[#3670FF] to-[#5D5BFF] text-white rounded-md font-semibold border w-full p-2 md:p-3 ${loading ? "opacity-50 cursor-not-allowed" : ""}`} // Disable button during loading
                    disabled={loading} // Disable button if loading
                  >
                    Sign In
                  </Button>
                  <p className="text-center text-[14px] md:text-[15px] text-[#484b62]">
                    Don’t have an account?{" "}
                    <Link
                      href={siteConfig.path.paths.signup}
                      className="font-semibold underline underline-offset-4"
                    >
                      Sign up today
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
