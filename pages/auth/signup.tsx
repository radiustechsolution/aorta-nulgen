import NavbarJobBoard from "@/components/job-board/navbar";
import { siteConfig } from "@/config/site";
import { Button, Checkbox } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";

const SignUp = () => {
  const router = useRouter();
  const [isSelected, setIsSelected] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const fullname = formData.get("fullname");
    const email: any = formData.get("email");
    const password = formData.get("password");
    const phone_number = formData.get("phone_number");
    const passwordConfirm = formData.get("passwordConfirm");

    // Validation conditions
    if (!fullname) {
      toast("Full name is required.", { type: "error", toastId: "ak" });
      return;
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast("Please enter a valid email address.", {
        type: "error",
        toastId: "akx",
      });
      return;
    }

    if (!phone_number) {
      toast("Phone number is required.", { type: "error", toastId: "akaa" });
      return;
    }

    if (!password || password.length < 6) {
      toast("Password must be at least 6 characters long.", {
        type: "error",
        toastId: "akd",
      });
      return;
    }

    if (!passwordConfirm || passwordConfirm !== password) {
      toast("Passwords do not match.", { type: "error", toastId: "awk" });
      return;
    }

    if (!isSelected) {
      toast("You must accept the Terms & Conditions to register.", {
        type: "error",
        toastId: "rrak",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          email,
          phone_number,
          password,
        }),
      });

      const json = await response.json();

      if (response.status === 201) {
        // Automatically sign in the user using next-auth after registration
        const loginRes = await signIn("credentials", {
          redirect: false, // Avoid automatic redirect on login
          email, // Pass the email and password used for registration
          password,
        });

        if (loginRes?.ok) {
          // If login was successful, redirect to dashboard
          router.push("/dashboard");
          toast("success", { type: "success", toastId: "xkqa" });
        } else {
          toast(
            "Registration succeeded, but login failed. Please try to login.",
            { type: "error", toastId: "akxx" }
          );
        }
      } else {
        console.log(json);
        toast(json.message || "Something went wrong", {
          type: "error",
          toastId: "ammak",
        });
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast("An error occurred during registration.", {
        type: "error",
        toastId: "aeek",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-svh w-full flex overflow-y-scroll">
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
        <NavbarJobBoard hideRight />
        <div className="max-w-[1100px] px-2 sm:px-5 xl:px-0 flex flex-col lg:flex-row w-full items-center gap-10">
          {/* Left */}
          <div className="bg-white p-5 md:p-14 rounded-md w-full border border-gray-400">
            <div className="flex flex-col gap-0 md:gap-2">
              <h1 className="text-[24px] md:text-[33px] font-[600] leading-[37.996px] text-[#232535]">
                Create account
              </h1>
              <p className="text-[15px] md:text-[18px] text-[#484b62] leading-[26px]">
                Already have an account?{" "}
                <Link
                  href={siteConfig.path.paths.signin}
                  className="underline underline-offset-4 font-semibold"
                >
                  Sign in.
                </Link>
              </p>
            </div>

            <div className="mt-4 md:mt-7 flex flex-col gap-7">
              <form
                onSubmit={onSubmit}
                className="flex flex-col gap-4 md:gap-7"
              >
                {/* Double */}
                <div className="flex items-center gap-3">
                  <div className="flex flex-col gap-1 md:gap-3 w-full">
                    <p className="text-[15px] font-[500] text-[#232535] leading-[17.99px]">
                      Name
                    </p>
                    <input
                      name="fullname"
                      type="text"
                      placeholder="John Doe"
                      className="h-[38px] text-black md:h-[45px] w-full bg-white rounded-md border border-gray-300 px-2 outline-[#4368FF]"
                    />
                  </div>
                  <div className="flex flex-col gap-1 md:gap-3 w-full">
                    <p className="text-[15px] font-[500] text-[#232535] leading-[17.99px]">
                      Email
                    </p>
                    <input
                      name="email"
                      type="text"
                      placeholder="example@xyz.com"
                      className="h-[38px] text-black md:h-[45px] w-full bg-white rounded-md border border-gray-300 px-2 outline-[#4368FF]"
                    />
                  </div>
                </div>
                {/* Single */}
                <div className="flex flex-col gap-1 md:gap-3 w-full">
                  <p className="text-[15px] font-[500] text-[#232535] leading-[17.99px]">
                    Phone Number
                  </p>
                  <input
                    name="phone_number"
                    type="tel"
                    placeholder="Your Phone Number"
                    className="h-[38px] text-black md:h-[45px] w-full bg-white rounded-md border border-gray-300 px-2 outline-[#4368FF]"
                  />
                </div>
                {/* Single */}
                <div className="flex flex-col gap-1 md:gap-3 w-full">
                  <p className="text-[15px] font-[500] text-[#232535] leading-[17.99px]">
                    Password
                  </p>
                  <input
                    name="password"
                    type="text"
                    placeholder="Your password"
                    className="h-[38px] text-black md:h-[45px] w-full bg-white rounded-md border border-gray-300 px-2 outline-[#4368FF]"
                  />
                </div>
                {/* Single */}
                <div className="flex flex-col gap-1 md:gap-3 w-full">
                  <p className="text-[15px] font-[500] text-[#232535] leading-[17.99px]">
                    Confirm Password
                  </p>
                  <input
                    name="passwordConfirm"
                    type="text"
                    placeholder="Confirm password"
                    className="h-[38px] text-black md:h-[45px] w-full bg-white rounded-md border border-gray-300 px-2 outline-[#4368FF]"
                  />
                </div>

                {/* Consent */}
                <div className="mt-1 md:mt-3 flex flex-col gap-5">
                  <div className="flex items-start gap-1">
                    <Checkbox
                      color="secondary"
                      radius="sm"
                      className="text-white"
                      isSelected={isSelected}
                      onValueChange={setIsSelected}
                    />
                    <p className="text-[14px] md:text-[16px] font-medium text-[#484b62] mt-[-5px] max-w-[100%] md:max-w-[80%]">
                      I have read and accepted the Jobboardly App Ltd. Terms &
                      Conditions and Privacy Policy.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    isLoading={loading}
                    disabled={loading}
                    className="bg-gradient-to-b from-[#3670FF] to-[#5D5BFF] text-white rounded-md font-semibold border w-full p-3"
                  >
                    Register
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Right */}
          <div className="w-full hidden lg:flex  flex-col justify-center items-center">
            <div className="flex flex-col gap-2">
              <h1 className="text-[33px] text-center font-[600] leading-[37.996px] text-[#232535]">
                Our numbers
              </h1>
              <p className="text-[18px] text-center text-[#484b62] leading-[26px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />{" "}
                sed do eiusmod tempor incididunt ut labore et.
              </p>
            </div>

            <div className="w-full mt-10 flex flex-col gap-7">
              <div className="w-full flex items-center gap-6">
                <div className="w-full border border-gray-300 px-6 py-7 bg-white text-center rounded-lg">
                  <h1 className="text-[#232535] text-[39px] font-bold leading-[47.988px]">
                    20,583<span className="text-[#3670FF]">+</span>
                  </h1>
                  <p className=" uppercase text-gray-400">Job posted</p>
                </div>
                <div className="w-full border border-gray-300 px-6 py-7 bg-white text-center rounded-lg">
                  <h1 className="text-[#232535] text-[39px] font-bold leading-[47.988px]">
                    3,896<span className="text-[#3670FF]">+</span>
                  </h1>
                  <p className=" uppercase text-gray-400">successful hires</p>
                </div>
              </div>
              <div className="w-full flex items-center gap-6">
                <div className="w-full border border-gray-300 px-6 py-7 bg-white text-center rounded-lg">
                  <h1 className="text-[#232535] text-[39px] font-bold leading-[47.988px]">
                    20,583<span className="text-[#3670FF]">+</span>
                  </h1>
                  <p className=" uppercase text-gray-400">Job posted</p>
                </div>
                <div className="w-full border border-gray-300 px-6 py-7 bg-white text-center rounded-lg">
                  <h1 className="text-[#232535] text-[39px] font-bold leading-[47.988px]">
                    3,896<span className="text-[#3670FF]">+</span>
                  </h1>
                  <p className=" uppercase text-gray-400">successful hires</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
