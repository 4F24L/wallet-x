import React, { useState } from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import LinkText from "../components/LinkText";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const backendURL = import.meta.env.VITE_API_BASE_URL;

  const handleClick = async () => {
      try {
       
        const response = await axios.post(
          `${backendURL}/api/v1/user/login`,
          { username, password }
        );

        console.log(response);
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

  const navigate = useNavigate();

  return (
    <>
      <NavBar onHome={false} />
      <div className="flex justify-center items-center flex-col mt-20 sm:my-3">
        <Toaster position="top-center" />
        <Heading label={"Login"} />
        <SubHeading label={"Enter Login Credentials"} classs={"my-5"}/>

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

        <Button onClick={handleClick}
          label={"Submit"}
        />

        <LinkText
          link={"/signup"}
          text={"Don't have an account?"}
          toText={"Sign Up"}
        />

        {loading && <Loader />}
      </div>
    </>
  );
};

export default Login;
