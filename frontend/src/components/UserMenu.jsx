import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { UserName } from "../store/atoms/UserData";
import { User } from "lucide-react";

const UserMenu = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const [name, setName] = useRecoilValue(UserName);

  // Close popup if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="relative">
      {/* User Icon (Click to Toggle Popup) */}
      <div
        className="w-12 h-12 bg-gray-800 text-white text-2xl font-medium flex items-center justify-center rounded-full cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {name? name : <User />}
      </div>

      {/* Popup Menu */}
      {open && (
        <div
          ref={menuRef}
          className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 shadow-md rounded-md"
        >
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
