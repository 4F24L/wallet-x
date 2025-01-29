import React from 'react'

const SendBtn = ({label, onClick}) => {
  return (
    <div className=' text-xs border-2 border-gray-400 rounded-xl font-medium p-2 px-5 active:outline-none active:bg-zinc-600  bg-slate-950 text-white m-4 cursor-pointer'
    onClick={onClick}>
    {label}
    </div>
  )
}

export default SendBtn