import React from 'react'
import { Link } from 'react-router-dom'

const LinkText = ({text, link, toText}) => {
  return (
    <div className='flex justify-center text-lg mt-3'>
    <div>{text}</div>
    <Link to={link} className=' font-medium ml-2 text-sky-500 hover:text-blue-700'>{toText}</Link>
    </div>
  )
}

export default LinkText