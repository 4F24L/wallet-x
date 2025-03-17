import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { UserBal } from '../store/atoms/UserData'
import toast, { Toaster } from 'react-hot-toast';

const Balance = () => {
  const balance = useRecoilValue(UserBal);
  const [showBal, setShowBal] = useState(false)
  return (
        <div className="bg-gradient-to-r from-black to-[#7e7e7d] mt-7 p-6 rounded-2xl shadow-lg text-white w-[94%] m-3 ">
          <div className="flex justify-between items-center">
            <div>
              <h5 className="text-base font-medium">Total Balance</h5>
              <p
            className={`text-4xl font-bold py-2 rounded-lg transition-all duration-500 w-40 ${
              showBal ? "opacity-100 translate-y-0 mb-1" : "opacity-50 translate-y-2 flex text-3xl pb-0 mb-1 justify-center bg-gray-700"
            }`}
          >
            {showBal ? `$${balance}` : "* * * * *"}
          </p>
            </div>
            {/* <div onClick={()=>{
              toast.error("History not available");
            }} className="bg-white/20 p-2 rounded-2xl mt-6 sm:mt-0">
              <svg className=" w-9 h-9 sm:w-11 sm:h-11 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div> */}
          </div>
          <button onClick={() => {
            setShowBal(!showBal)
          }} className="mt-4 w-full bg-white text-black py-2 rounded-lg text-xl font-medium">
            {showBal? "Hide" : "Show"} Balance
          </button>

          <Toaster/>
        </div>
      );
    };

export default Balance