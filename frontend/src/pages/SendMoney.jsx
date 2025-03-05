import React, { useState } from 'react'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import { useSearchParams } from'react-router-dom';
import axios from 'axios';
import api from '../api';
const token = localStorage.getItem('token');
const backendURL = import.meta.env.VITE_API_BASE_URL;


const SendMoney = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const name = searchParams.get('name');

  const [amount, setAmount] = useState(0);
  
  
  return (
    <div className='p-8 flex flex-col items-center mt-8 justify-center border rounded-2xl w-[40%] m-auto gap-5'>

    {/* user name */}
    <div className='flex items-center px-2 gap-2'>
      <div className=' h-7 w-7 rounded-full border flex justify-center items-center text-xl font-bold ' >{name.charAt(0).toUpperCase()}</div>
      <div className='text-xl font-medium'>{name}</div>
    </div>

    {/* amount */}
    <InputBox type={"number"} onChange={(e)=>{
      setAmount(e.target.value);
    }} label={"Amount (In Rupees)"} placeholder={"Enter amount"}/>

    {/* send button */}
    <Button onClick={async () => {
      const result = await api.post(`/api/v1/account/transfer`, {
        sendTo : id,
        amount,
      },{
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
    }} label={"Send Money"} />

    </div>
  )
}

export default SendMoney