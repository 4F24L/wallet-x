import React, { useState } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import LinkText from '../components/LinkText'
import Button from '../components/Button'
import axios from 'axios';
import {ToastContainer, toast } from'react-toastify';
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <div className='flex justify-center items-center flex-col grow'>
      <Heading label={"Sign Up"} />
      <SubHeading label={"Enter your details to create a new wallet"} />

      <InputBox  width={"w-md"} value={firstname}
      onChange={e => {
        setFirstname(e.target.value);
      }} label={"First Name"} placeholder={"John"} />

      <InputBox width={"w-md"} value={lastname}
      onChange={e =>{
        setLastname(e.target.value);
      }} label={"Last Name"} placeholder={"Doe"} />

      <InputBox width={"w-md"} value={username}
      onChange={e => {
        setUsername(e.target.value);
      }} label={"Username"} placeholder={"John123"} />

      <InputBox width={"w-md"} value={password}
      onChange={e => {
        setPassword(e.target.value);
      }} label={"Password"} placeholder={"John@12"} />

      <Button onClick={async ()=>{
        const result = await axios.post('http://localhost:3000/api/v1/user/signup', {
          firstname, lastname, username, password
        });
        console.log(result.status)
        result?.status === 200? toast.success(result.data.message) : toast.error(result.data.message);
        localStorage.setItem("token", result?.data?.token);

        setTimeout(()=>{
          navigate("/login");
        }, 3000)

      }} label={"Create Wallet"} />

      <LinkText text={"Already have an account?"} link={"/login"} toText={"Login"} />
    
      <ToastContainer position='top-center' />
    </div>
  )
}

export default SignUp