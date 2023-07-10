"use client";

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const UserProfilePage = () => {
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
    setData(res.data.data._id);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center h-[20vh] py-2">
        <div className="text-2xl font-bold text-orange-500">Profile Page</div>

        <div className="flex gap-4 mt-5">
          <button
            onClick={logout}
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Logout
          </button>

          <button
            onClick={getUserDetails}
            className="bg-orange-500  hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            GetUser Details
          </button>
        </div>
      </div>

      <div className="h-[80vh] flex justify-center items-center">
      <div className="w-1/2 h-60 border flex justify-center items-center border-orange-800 bg-orange-500 bg-opacity-20 rounded-xl">
      <h2 className="p-1 rounded ">
        {data === "nothing" ? (
          "Link"
        ) : (
          <Link className="bg-orange-500 rounded-lg px-3 py-2" href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>
      </div>
      </div>

    </div>
  );
};

export default UserProfilePage;
