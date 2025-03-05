import React, { useState } from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import LinkText from "../components/LinkText";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import toast, { Toaster } from "react-hot-toast";
const backendURL = import.meta.env.VITE_API_BASE_URL;

const SignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <>
      <NavBar onHome={false} />
      <div className="flex justify-center items-center flex-col grow mt-9">
        <Heading label={"Sign Up"} />
        <SubHeading label={"Enter your details to create a new wallet"} />

        <InputBox
          width={"sm:w-md"}
          value={firstname}
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
          label={"First Name"}
          placeholder={"John"}
        />

        <InputBox
          width={"sm:w-md"}
          value={lastname}
          onChange={(e) => {
            setLastname(e.target.value);
          }}
          label={"Last Name"}
          placeholder={"Doe"}
        />

        <InputBox
          width={"sm:w-md"}
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          label={"Username"}
          placeholder={"John123"}
        />

        <InputBox
          width={"sm:w-md"}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          label={"Password"}
          placeholder={"John@12"}
        />

        <Button
          onClick={async () => {
            try {
              const result = await axios.post(
                `${backendURL}/api/v1/user/signup`,
                {
                  firstname,
                  lastname,
                  username,
                  password,
                }
              );
              // console.log(result.status);
              result?.status === 200
                ? toast.success(result.data.message)
                : toast.error(result.data.message);
              localStorage.setItem("token", result?.data?.token);

              setTimeout(() => {
                navigate("/login");
              }, 3000);
            } catch (error) {
              toast.error("Please try again.");
            }
          }}
          label={"Create Wallet"}
        />

        <LinkText
          text={"Already have an account?"}
          link={"/login"}
          toText={"Login"}
        />

        <div><Toaster position="top-center" /></div>
      </div>
    </>
  );
};

export default SignUp;
