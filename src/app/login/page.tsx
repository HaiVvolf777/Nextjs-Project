"use client"

import React , {useEffect} from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { toast } from "react-hot-toast";

const LoginPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Login success");
      router.push("/profile");
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setButtonDisabled(!(user.email && user.password));
  }, [user]);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-center text-2xl">Login</h1>
        <hr />

        <div className="flex flex-col my-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            className="border rounded-xl border-gray-300 p-2 w-80 text-black"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>

        <div className="flex flex-col my-2">
          <label htmlFor="password">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              id="password"
              className="border rounded-xl border-gray-300 p-2 pr-10 w-80 text-black"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <button
              type="button"
              className="absolute top-1/2 right-3 transform -translate-y-1/2"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <MdVisibilityOff size={20} className="text-black" />
              ) : (
                <MdVisibility size={20} className="text-black" />
              )}
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-8">
          <button
            className="bg-white text-black border font-semibold hover:bg-black hover:text-white p-2 rounded-xl w-80"
            onClick={onLogin}
            disabled={buttonDisabled || loading}
          >
            {loading ? "Logging in..." : "Login here"}
          </button>
          <a
            href="/signup"
            className="mt-8 bg-black text-center text-white border font-semibold hover:bg-white hover:text-black p-2 rounded-xl w-80"
          >
            Visit Signup
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
