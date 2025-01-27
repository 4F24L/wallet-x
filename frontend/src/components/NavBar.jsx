import React from 'react'
import Heading from "./Heading"
import Icon from "./Icon"
import img from '../assets/image.png'


const NavBar = () => {
  return (
    <div className=' flex justify-between border-b-slate-700 items-center px-3'>
    <div> <Heading label={"Wallet X"} /> </div>

    {/* //Nav elements */}
    <div className='flex justify-between items-center gap-5'>
        <div>Home</div>
        <div>About</div>
        <div>How to use ?</div>
    </div>

    {/* //User dropdown */}
    <div className='flex justify-between items-center'>
        <div>User</div>
        <div> <Icon shape={"rounded-full"} src={img}/> </div>
    </div>

    </div>
  )
}

export default NavBar