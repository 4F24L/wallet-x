import React from 'react';

const SendBtn = ({ label, onClick }) => {
  return (
    <button
      className="text-sm border-2 border-gray-400 rounded-xl font-medium py-2 px-5 
                 bg-slate-950 text-white cursor-pointer transition 
                 hover:bg-gray-800 active:bg-zinc-700 focus:outline-none"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default SendBtn;
