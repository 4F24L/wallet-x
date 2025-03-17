import React, { useEffect, useState } from "react";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { recieverName, SentMoney } from "../store/atoms/UserData";
import toast, { Toaster } from "react-hot-toast";

const generateTransactionID = () => {
  return `TXN-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
};

const getCurrentDateTime = () => {
  const options = { month: "long", day: "numeric", hour: "numeric", minute: "numeric", hour12: true };
  return new Date().toLocaleString("en-US", options);
};

const Receipt = ({ }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [txnID, setTxnID] = useState("");
  const [currentDate, setCurrentDate] = useState("");
//   const amount = useRecoilValue(SentMoney);
//   const recipient = useRecoilValue(recieverName);
const { recipient, amount } = location.state


  useEffect(() => {
    setTxnID(generateTransactionID());
    setCurrentDate(getCurrentDateTime());
  }, []);

  return (
    <div className="bg-[#EBE6DC] min-h-screen flex flex-col pt-24 items-center justify-start p-6">
      <div className="w-full max-w-md bg-[#222222] text-white rounded-2xl shadow-xl p-6 border border-gray-700">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => navigate(-1)} className="text-gray-400 hover:text-white">
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-lg font-semibold">Transaction Receipt</h2>
          <div></div>
        </div>

        {/* Success Icon */}
        <div className="flex flex-col items-center gap-2">
          <CheckCircle size={50} className="text-green-500" />
          <h3 className="text-xl font-semibold">Transaction Successful</h3>
        </div>

        {/* Transaction Details */}
        <div className="mt-6 space-y-4 bg-gray-800 p-4 font-medium rounded-xl shadow-lg">
          <div className="flex justify-between text-gray-300">
            <span>Recipient</span>
            <span className="text-white font-medium">{recipient}</span>
          </div>
          <div className="flex justify-between text-gray-300">
            <span>Amount</span>
            <span className="text-white font-medium">$ {amount}</span>
          </div>
          <div className="flex justify-between text-gray-300">
            <span>Time</span>
            <span className="text-white font-medium">{currentDate}</span>
          </div>
          <div className="flex justify-between text-gray-300">
            <span>Transaction ID</span>
            <span className="text-white font-medium">{txnID}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button onClick={()=>{
            toast.error("Coming soon...")
          }} className="w-full bg-gray-700 text-gray-300 py-3 rounded-xl font-medium hover:bg-gray-600 transition-all">
            Download
          </button>
          <button onClick={()=>{
            toast.error("Coming soon...")
          }} className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-500 transition-all">
            Share
          </button>
        </div>
      </div>

      <p className=" text-xl mt-5 font-medium">Redirect to <span onClick={()=>{
        navigate("/dashboard")
      }} className=" text-green-600">Dashboard</span></p>

      <Toaster/>
    </div>
  );
};

export default Receipt;
