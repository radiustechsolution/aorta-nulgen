import type { NextApiRequest, NextApiResponse } from "next";

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email, password, ...otherData } = req.body;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        ...otherData,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (response.status === 201) {
      return res.status(201).json({ message: "User registered successfully" });
    } else {
      return res
        .status(response.status)
        .json({ message: json.message || "Registration failed" });
    }
  } catch (error) {
    console.error("Registration error:", error);
    return res
      .status(500)
      .json({ message: "An error occurred during registration" });
  }
}
