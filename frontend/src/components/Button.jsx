import React from 'react'

const Button = ({label, onClick}) => {
  return (
    <div className='border-2 border-gray-400 rounded-xl font-medium p-2 px-5 active:outline-none active:bg-slate-700 active:text-white m-4 cursor-pointer'
    onClick={onClick}>
    {label}
    </div>
  )
}

export default Button