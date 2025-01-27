import React from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import NavBar from '../components/NavBar'

const Home = () => {
  return (
    <>
    <NavBar />
    <Heading label={"Sign Up"} />
    <SubHeading label={"Enter your info to signup"}/>
    <InputBox placeholder={"John Doe"} label={"Your Name"}/>
    </>
  )
}

export default Home