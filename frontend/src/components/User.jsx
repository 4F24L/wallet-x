import React from "react";
import SendBtn from "./SendBtn";
import { useNavigate } from "react-router-dom";

const User = ({ user }) => {


  const uName = `${user?.firstname.charAt(0).toUpperCase()}${user?.firstname.slice(1)} ${user?.lastname.charAt(0).toUpperCase()}${user?.lastname.slice(1)}`;
  const navigate = useNavigate();

  return (
    <div
      key={user.id}
      className="flex justify-between items-center border-2 border-slate-400 rounded-md px-4 py-3 w-full"
    >
      {/* Left Side - Avatar & Name */}
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => navigate(`/send?id=${user?.id}&name=${user?.firstname}`)}
      >
        {/* User Avatar */}
        <div className="rounded-full bg-fuchsia-300 text-slate-800 h-10 w-10 text-xl flex justify-center items-center font-bold">
          {user?.firstname?.charAt(0).toUpperCase()}
        </div>

        {/* User Name */}
        <div className="text-lg font-medium">
          {uName}
        </div>
      </div>

      {/* Send Money Button */}
      <SendBtn
        onClick={() => navigate(`/send?id=${user?.id}&name=${uName}`)}
        label="Send Money"
      />
    </div>
  );
};

export default User;
