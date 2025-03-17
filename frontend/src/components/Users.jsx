import React, { useEffect, useState } from "react";
import InputBox from "./InputBox";
import User from "./User";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import api from "../api";
import { DollarSign } from "lucide-react";


function Users() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  const token = localStorage.getItem("token") || "";
  const userId = jwtDecode(token);

  useEffect(() => {
    async function fetchUser() {
      const response = await api.get(
        `/api/v1/User/bulk/?filter=${filter}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      // const response = await axios.get(`http://localhost:3000/api/v1/User/bulk`)
      const filteredUsers = response?.data?.user?.filter(user => user._id !== userId) || [];
      setUsers(filteredUsers);
    }

    fetchUser();
  }, [filter, token]);

  return (
    <div className=" w-full justify-start px-4">
      <div className=" font-bold mt-6 text-2xl flex items-center"><DollarSign /> Send Money</div>
      <InputBox
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        width={"w-full mt-5"}
        placeholder="Search by name"
      />
      {filter && <p className=" font-medium text-lg mb-4">Found {users.length} {users.length>1 ?"results" : "result"}</p>}

      <div className="flex flex-col gap-y-2 w-full mt-2">
        {users.map(user => (
            <User user={user} key={user.id} />
          ))}
      </div>
    </div>
  );
}

export default Users;
