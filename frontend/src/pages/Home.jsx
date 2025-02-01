import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import HeroNext from '../components/HeroNext';


const Home = () => {

const [loading, setLoading] = useState(false);

useEffect(() => {
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, 3500);

}, [])
  return (
    <div className=''>
    {loading && <Loader/>}
    <NavBar/>
    <Hero/>
    <HeroNext/>
  
    </div>
  )
}

export default Home