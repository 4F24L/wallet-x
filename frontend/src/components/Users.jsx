import React, { useEffect, useState } from 'react'
import InputBox from './InputBox'
import User from './User'
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect( () => {
        async function fetchUser() {
        const response = await axios.get(`http://localhost:3000/api/v1/User/bulk/?filter=${filter}`, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          }
        })
        // const response = await axios.get(`http://localhost:3000/api/v1/User/bulk`)
        setUsers(response?.data?.user);
    }
    
    fetchUser();
  
    }, [filter])
    

  return (
    <div className=' w-full justify-start px-4 mx-3'>
    <div className=' font-bold mt-6 text-lg'>Users</div>
    <InputBox onChange={(e)=>{
        setFilter(e.target.value);
        CSSTranslate.log(`Searching for: ${e.target.value}`  );
    }} width={"w-full mb-3"}  placeholder="Search by name" />

    <div className='flex flex-col '>
        {users.map(user => <User user={user} key={user.id} />)}
    </div>
    </div>
  )
}

export default Users