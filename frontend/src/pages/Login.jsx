import React, { useState } from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import LinkText from "../components/LinkText";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../components/Loader";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3500);
  };

  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center flex-col">
      <ToastContainer position="top-center" autoClose={2000} />
      <Heading label={"Login"} />
      <SubHeading label={"Enter Login Credentials"} />

      <InputBox
        width={"w-md"}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        value={username}
        label={"Username"}
        placeholder={"John123"}
      />

      <InputBox
        width={"w-md"}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
        label={"Password"}
        placeholder={"John@12"}
      />

      <Button
        onClick={async () => {
          const response = await axios.post(
            "http://localhost:3000/api/v1/user/login",
            { username, password }
          );

          console.log(response);
          response?.status === 200
            ? toast.success(response?.data?.message)
            : toast.error(response?.data?.message);
          localStorage.setItem("token", response?.data?.token);

          setTimeout(() => {
            navigate("/dashboard");
          }, 3500);

          handleClick();
        }}
        label={"Submit"}
      />

      <LinkText
        link={"/signup"}
        text={"Don't have an account?"}
        toText={"Sign Up"}
      />

      {loading && <Loader />}
    </div>
  );
};

export default Login;
