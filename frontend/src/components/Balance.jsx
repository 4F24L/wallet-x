import React, { useState } from 'react'

const Balance = () => {
    const [balance, setBalance] = useState(100)
  return (
    <div className='m-1 p-4 font-medium text-lg w-full'>
    Your Balance : ${balance}
    </div>
  )
}

export default Balance