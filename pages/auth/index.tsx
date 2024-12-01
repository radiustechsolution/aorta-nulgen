import { siteConfig } from "@/config/site";
import AuthenticationLayout from "@/layouts/AuthenticationLayout";
import { Button } from "@nextui-org/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const Authentication = () => {
  // Hooks
  const router = useRouter();

  // State
  const [active, setActive] = useState("SIGN UP");
  const [isSelected, setIsSelected] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  /*
    ====
    Submit 
    Form
  */
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
          //   job_id: query.xbz,
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
          router.push(siteConfig.path.paths.dashboard);
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast("Please enter a valid email address.", {
        type: "error",
        toastId: "akx",
      });
      return;
    }
    if (!password || password.length < 6) {
      toast("Password must be at least 6 characters long.", {
        type: "error",
        toastId: "akd",
      });
      return;
    }

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

  /* == Controls == */
  const Control = [
    {
      title: "SIGN UP",
    },
    {
      title: "SIGN IN",
    },
  ];

  return (
    <AuthenticationLayout>
      <div className="flex justify-center">
        <section className="w-[600px] flex flex-col justify-center mt-14">
          {/* Controll */}
          <div className="flex items-center w-full">
            {Control.map((v) => (
              <div
                key={v.title}
                role="presentation"
                onClick={() => setActive(v.title)}
                className={`w-full cursor-pointer p-3 md:py-5 ${active == v.title && "bg-white"}`}
              >
                <p className={`text-black text-[15px] text-center font-bold`}>
                  {v.title}
                </p>
              </div>
            ))}
          </div>

          {/* Body */}
          <div className="w-full p-6 md:p-10 bg-white ">
            {/* Inputs */}

            {/* Sign Up */}
            <form
              onSubmit={onSubmit}
              className={`${active == "SIGN UP" ? "flex" : "hidden"} flex-col gap-5 w-full`}
            >
              {/* title */}
              <div className="flex flex-col gap-3 w-full items-center">
                <h1 className="text-[25px] md:text-[37px] text-center font-medium text-black">
                  Create your account.
                </h1>
                <p className="text-center text-[14px] md:text-[16px] text-black max-[70%] md:max-w-[70%] opacity-75">
                  Build skills for today, tomorrow, and beyond. Education to
                  future-proof your career.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-black">Name</p>
                  <input
                    name="fullname"
                    type="text"
                    className="h-[40px] md:h-[48px] text-black w-full bg-white rounded-sm border border-gray-300 px-2 outline-[#4368FF]"
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-black">Email</p>
                  <input
                    name="email"
                    type="text"
                    className="h-[40px] md:h-[48px] text-black w-full bg-white rounded-sm border border-gray-300 px-2 outline-[#4368FF]"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col gap-1">
                <p className="text-black">Phone Number</p>
                <input
                  type="tel"
                  className="w-full h-[40px] md:h-[48px] bg-transparent px-4 text-black border-1 rounded-sm"
                  name="phone_number"
                  id=""
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <p className="text-black">Password</p>
                <input
                  type="password"
                  className="w-full h-[40px] md:h-[48px] bg-transparent px-4 text-black border-1 rounded-sm"
                  name="password"
                  id=""
                />
              </div>
              <div className="w-full flex justify-center mt-3">
                <Button
                  type="submit"
                  isLoading={loading}
                  className="font-bold text-white bg-[#2016FF] w-[60%] rounded-none h-[45px] md:h-[55px]"
                >
                  Sign Up
                </Button>
              </div>
            </form>

            {/* Sign In */}

            <form
              onSubmit={handleSubmit}
              className={`${active == "SIGN IN" ? "flex" : "hidden"} flex-col gap-5 w-full`}
            >
              {/* title */}
              <div className="flex flex-col gap-3 w-full items-center">
                <h1 className="text-[25px] md:text-[37px] text-center font-medium text-black">
                  Sign in to your account.
                </h1>
                <p className="text-center text-[14px] md:text-[16px] text-black max-[70%] md:max-w-[70%] opacity-75">
                  Build skills for today, tomorrow, and beyond. Education to
                  future-proof your career.
                </p>
              </div>
              <div className="w-full flex flex-col gap-1">
                <p className="text-black">Email</p>
                <input
                  type="email"
                  className="w-full h-[40px] md:h-[48px] bg-transparent px-4 text-black border-1 rounded-sm"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Update email state
                  id=""
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <p className="text-black">Password</p>
                <input
                  type="password"
                  className="w-full h-[40px] md:h-[48px] bg-transparent px-4 text-black border-1 rounded-sm"
                  name="password"
                  id=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Update password state
                />
              </div>
              <div className="w-full flex justify-center mt-3">
                <Button
                  type="submit"
                  isLoading={loading}
                  className="font-bold text-white bg-[#2016FF] w-[60%] rounded-none h-[45px] md:h-[55px]"
                >
                  Sign In
                </Button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </AuthenticationLayout>
  );
};

export default Authentication;
