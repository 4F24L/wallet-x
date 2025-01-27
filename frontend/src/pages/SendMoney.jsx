import React from 'react'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import img from '../assets/image.png'


const SendMoney = () => {
  return (
    <div className='p-4 flex flex-col items-center mt-8 justify-center '>

    {/* user name */}
    <div className='flex items-center px-2 gap-2'>
      <img className='h-6 w-6' src={img} alt='user' />
      <div className='text-xl font-medium'>User1 </div>
    </div>

    {/* amount */}
    <InputBox label={"Amount (In Rupees)"} placeholder={"Enter amount"}/>

    {/* send button */}
    <Button label={"Send Money"} />

    </div>
  )
}

export default SendMoney