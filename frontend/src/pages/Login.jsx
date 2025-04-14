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
    try {
      const response = await api.post(`/api/v1/user/login`, {
        username,
        password,
      });

      if (response?.status === 200) {
        toast.success(response?.data?.message);
        setLoading(true);
        localStorage.setItem("token", response?.data?.token);

        setTimeout(() => {
          navigate("/dashboard");
        }, 3500);
      } else {
        setLoading(false);
        toast.error(response?.data?.message);
      }
    } catch (error) {
      toast.error("Failed to login. Please try again.");
    }
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
