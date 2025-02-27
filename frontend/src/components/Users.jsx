import React, { useEffect, useState } from "react";
import InputBox from "./InputBox";
import User from "./User";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

function Users() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  const token = localStorage.getItem("token") || "";
  const userId = jwtDecode(token);

  useEffect(() => {
    async function fetchUser() {
      const response = await axios.get(
        `http://localhost:3000/api/v1/User/bulk/?filter=${filter}`,
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
    <div className=" w-full justify-start px-4 mx-3">
      <div className=" font-bold mt-6 text-lg">Users</div>
      <InputBox
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        width={"w-full mb-3"}
        placeholder="Search by name"
      />

      <div className="flex flex-col ">
        {users.map(user => (
            <User user={user} key={user._id} />
          ))}
      </div>
    </div>
  );
}

export default Users;
