import React from 'react'
import Heading from "./Heading"
import Icon from "./Icon"
import defUser from '../assets/defaultUser.svg'
import Button from "./Button"
import SubHeading from './SubHeading'
import logo from "../assets/walletLogo.svg"


const NavBar = () => {
  return (
    <div className=' flex justify-between border-b-slate-700 bg-white items-center px-3 h-[9vh]'>
    <div className=' flex  justify-between items-center gap-3'> 
    <span className='' ><img className=' h-9' src={logo}></img></span>
    <Heading label={"Wallet X"} /> 
    </div>

    {/* //Nav elements */}
    <div className='flex justify-between items-center gap-5 font-medium'>
        <div className='cursor-pointer'>Home</div>
        <div className='cursor-pointer'>About</div>
        <div className='cursor-pointer'>How to use ?</div>
    </div>

    <div className='flex justify-between items-center'>
        <SubHeading label={"Login"} classs={" font-medium text-lg m-2 cursor-pointer"}/>
        <SubHeading label={"Sign up"} classs={" border py-1 px-2 rounded-lg bg-slate-700 text-white font-medium text-lg m-2 cursor-pointer"}/>

    </div>

    </div>
  )
}

export default NavBar