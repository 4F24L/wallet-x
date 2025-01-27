import React from 'react'
import Icon from './Icon'
import img from '../assets/image.png'
import SendBtn from './SendBtn'

const User = () => {
  return (
    <div className='flex justify-between mx-2 items-center border-2 border-slate-400 mb-2 px-4 rounded-md w-full'>
    <div className='flex items-center gap-2'>
    <Icon shape={"rounded-xl"} src={img}/>
    <div className='text-xl font-medium'>User1</div>
    </div>
    
    <SendBtn label={"Send Money"} />
    </div>
  )
}

export default User