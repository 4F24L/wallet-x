import React, { useState } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import LinkText from '../components/LinkText'
import Button from '../components/Button'

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className='flex justify-center items-center flex-col'>
      <Heading label={"Sign Up"} />
      <SubHeading label={"Enter your details to create a new wallet"} />

      <InputBox value={firstName}
      onChange={e => {
        setFirstName(e.target.value);
      }} label={"First Name"} placeholder={"John"} />

      <InputBox value={lastName}
      onChange={e =>{
        setLastName(e.target.value);
      }} label={"Last Name"} placeholder={"Doe"} />

      <InputBox value={username}
      onChange={e => {
        setUsername(e.target.value);
      }} label={"Username"} placeholder={"John123"} />

      <InputBox value={password}
      onChange={e => {
        setPassword(e.target.value);
      }} label={"Password"} placeholder={"John@12"} />

      <Button label={"Create Wallet"} />

      <LinkText text={"Already have an account?"} link={"/login"} toText={"Login"} />
    </div>
  )
}

export default SignUp