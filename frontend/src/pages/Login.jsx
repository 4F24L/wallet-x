import React, { useState } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import LinkText from '../components/LinkText'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className='flex justify-center items-center flex-col'>
      <Heading label={"Login"} />
      <SubHeading label={"Enter Login Credentials"} />

      <InputBox onChange={e =>{
        setUsername(e.target.value)
      }}
      value={username} label={"Username"} placeholder={"John123"} />

      <InputBox onChange={e =>{
        setPassword(e.target.value)
      }}
      value={password} label={"Password"} placeholder={"John@12"} />

      <Button onClick={()=>{
        setPassword("");
        setUsername("");
      }} label={"Submit"}/>

      <LinkText link={"/signup"} text={"Don't have an account?"} toText={"Sign Up"} />
      
    </div>
  )
}

export default Login