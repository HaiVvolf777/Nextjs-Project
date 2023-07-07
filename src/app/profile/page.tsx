"use client";

import React from "react";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const UserProfilePage = () => {
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

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div>Profilepage</div>
        <hr />
        <button
          onClick={logout}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfilePage;
