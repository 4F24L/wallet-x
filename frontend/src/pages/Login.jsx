import React, { useState } from "react";
import InputBox from "../components/InputBox";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";
import toast, { Toaster } from "react-hot-toast";
import api from "../api";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  

  const navigate = useNavigate();

  const handleClick = async () => {
    if (!username || !password) return toast.error("Empty inputs...");
  
    const loginPromise = api.post(`/api/v1/user/login`, {
      username,
      password,
    });
  
    toast.promise(loginPromise, {
      loading: "Logging in...",
      success: (response) => {
        const token = response?.data?.token;
        if (!token) throw new Error("Token missing in response");
  
        localStorage.setItem("token", token);
        setLoading(true);
        setTimeout(() => {
          navigate("/dashboard");
        }, 3500);
        return response?.data?.message || "Logged in successfully!";
      },
      error: (err) => {
        return err?.response?.data?.message || "Login failed. Try again.";
      },
    });
  };
  

  return (
    <>
      <NavBar onHome={false} />
      <div className="flex justify-center items-center flex-col mt-20 sm:my-3">
        <Toaster position="top-center" />
        <p className="heading">Login</p>
        <p className="sub-heading my-5">Enter Login Credentials</p>

        <InputBox
          width={"sm:w-md"}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
          label={"Username"}
          placeholder={"John123"}
        />

        <InputBox
          width={"sm:w-md"}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          label={"Password"}
          placeholder={"John@12"}
        />

        <button className="btn-custom" onClick={handleClick}>Submit</button>

        <p className="link-text">Don't have an account?{" "} <Link className="link" to={"/signup"}>Sign Up</Link></p>

        {loading && <Loader />}
      </div>
    </>
  );
};

export default Login;
