import React from 'react'
import SendBtn from './SendBtn'
import { useNavigate } from 'react-router-dom';

const User = ({user}) => {
  const navigate = useNavigate();
  return (
    <div key={user.key} className='flex justify-between mx-2 items-center border-2 border-slate-400 mb-2 px-4 rounded-md w-full'>
      <div className='flex items-center gap-2'>

        <div className='rounded-full text-slate-800 bg-fuchsia-300 h-10 w-10 text-xl flex justify-center items-center font-bold'>{user?.firstname?.charAt(0).toUpperCase()}</div>

        <div className='text-xl font-medium'>{user?.firstname} {user?.lastname}</div>

      </div>
    
      <SendBtn onClick={(e)=>{
        navigate("/send?id=" + user?.id + "&name=" + user?.firstname);
        console.log(user);
      }} label={"Send Money"} />
    </div>
  )
}

export default User