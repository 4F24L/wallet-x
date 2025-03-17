import { Plus, Send, Wallet, History, QrCode } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WalletIcons = () => {
    const navigate = useNavigate();
  return (
    <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-5 w-[94%] border-t-2 pt-8 ">
      <button className="flex flex-col items-center justify-center bg-gradient-to-r from-black to-gray-800 p-4 rounded-xl transition-all duration-300 hover:brightness-125">
        <Plus className="text-white w-6 h-6" />
        <span className="mt-2 text-sm font-medium text-white">Add Money</span>
      </button>
      
      <button onClick={()=>{
        navigate("/SendMoney");
      }} className="flex flex-col items-center justify-center bg-gradient-to-r from-black to-gray-800 p-4 rounded-xl transition-all duration-300 hover:brightness-125">
        <Send className="text-white w-6 h-6" />
        <span className="mt-2 text-sm font-medium text-white">Send Money</span>
      </button>

      <button className="flex flex-col items-center justify-center bg-gradient-to-r from-black to-gray-800 p-4 rounded-xl transition-all duration-300 hover:brightness-125">
        <Wallet className="text-white w-6 h-6" />
        <span className="mt-2 text-sm font-medium text-white">Withdraw</span>
      </button>

      <button className="flex flex-col items-center justify-center bg-gradient-to-r from-black to-gray-800 p-4 rounded-xl transition-all duration-300 hover:brightness-125">
        <History className="text-white w-6 h-6" />
        <span className="mt-2 text-sm font-medium text-white">History</span>
      </button>

      <button className="flex flex-col items-center justify-center bg-gradient-to-r from-black to-gray-800 p-4 rounded-xl transition-all duration-300 hover:brightness-125 col-span-2 md:col-span-1">
        <QrCode className="text-white w-6 h-6" />
        <span className="mt-2 text-sm font-medium text-white">Scan QR</span>
      </button>
    </div>
  );
};

export default WalletIcons;
