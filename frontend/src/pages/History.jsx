import React from 'react'
import NavBar from '../components/NavBar'
import TransactionHistory from '../components/TransHistory'

const History = () => {
  return (
    <div className=' flex flex-col items-center'>
    <NavBar onHome={false} loggedIn={true}/>
    <TransactionHistory/>

    </div>
  )
}

export default History