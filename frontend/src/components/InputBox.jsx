import React from 'react'

const InputBox = ({label, placeholder, onChange, value}) => {
  return (
    <div className='flex flex-col mt-2 w-2xs'>
    <div className='text-sm font-medium text-left py-2'>{label}</div>
    <input onChange={onChange} value={value}
    className='border-2 border-gray-400 rounded-md p-2 focus:outline-none focus:border-slate-700 w-full'
    type="text" placeholder= {placeholder} />
    </div>
  )
}

export default InputBox     