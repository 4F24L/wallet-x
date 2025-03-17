import React from "react";
import { useNavigate } from "react-router-dom";

const User = ({ user }) => {
  const navigate = useNavigate();
  const uName = `${user?.firstname
    .charAt(0)
    .toUpperCase()}${user?.firstname.slice(1)} ${user?.lastname
    .charAt(0)
    .toUpperCase()}${user?.lastname.slice(1)}`;

  return (
    <div
      key={user.id}
      className="flex justify-start gap-3.5 items-center border-2 border-slate-400 rounded-md px-3 py-2.5 w-full cursor-pointer"
      onClick={() => navigate(`/send?id=${user?.id}&name=${uName}`)}
    >
      
        {/* User Avatar */}
        <div className="rounded-full bg-fuchsia-300 text-slate-800 h-12 w-12 text-xl flex justify-center items-center font-bold">
          {user?.firstname?.charAt(0).toUpperCase()}
        </div>

        {/* User Name */}
        <div className="text-xl font-medium">{uName}</div>
      
    </div>
  );
};

export default User;
