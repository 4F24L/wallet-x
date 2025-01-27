import React from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import User from '../components/User'
import Balance from '../components/Balance'

const Dashboard = () => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <Heading label={"User Dashboard"} />
      
      <SubHeading label={"Welcome, John Doe!"} />

      <InputBox placeholder={"Search user name..."} />

      <Balance/>

      <User/>
      <User/>
      <User/>
      <User/>
    </div>
  )
}

export default Dashboard