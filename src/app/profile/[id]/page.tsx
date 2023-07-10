"use client";

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const UserProfilePage = ({ params }: any) => {
  const [data, setData] = useState("nothing");
  const router = useRouter();

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data.username);
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-around min-h-screen py-2">
        <div className="text-2xl font-bold">
          Profile Page{" "}
          <span className="bg-orange-500 text-black px-3 py-2 rounded-lg">
            {params.id}
          </span>
        </div>
        <h2 className="p-1 rounded bg-orange-500">
          {data === "nothing" ? (
            "User Name"
          ) : (
            <Link href={`/profile/${data}`}>{data}</Link>
          )}
        </h2>
        <hr />

        <div className="flex gap-4 mt-5">
          <button
            onClick={logout}
            className="bg-orange-500 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded-lg"
          >
            Logout
          </button>

          <button
            onClick={getUserDetails}
            className="bg-orange-500  hover:bg-orange-800 text-white font-bold py-2 px-4 rounded-lg"
          >
            GetUser Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
 