import React from 'react';
import walletAnimation from "../assets/wallet.json";
import Lottie from "lottie-react";

const Loader = () => {
  return (
    <div className='fixed top-0 left-0 flex w-full h-screen justify-center items-center bg-white z-50'>
        <div className=' h-[8rem] w-[8rem] absolute'>
        <Lottie animationData={walletAnimation} loop={true} />
        </div>
    </div>
  );
};

export default Loader;