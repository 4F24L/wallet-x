import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import User from "../components/User";
import Balance from "../components/Balance";
import axios from "axios";
import Users from "../components/Users";
import {jwtDecode} from "jwt-decode";
import NavBar from "../components/NavBar";
import api from "../api";


const Dashboard = () => {
  const [name, setName] = useState("");
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    api
      .get(`/api/v1/User`)
      .then((res) => {
        const token = localStorage.getItem("token") || "";
        const userId = jwtDecode(token);

        const user = res?.data.find((user) => user._id === userId?.userId);
        const fName =
          user?.firstname.charAt(0).toUpperCase() + user?.firstname.slice(1);
        const lName =
          user?.lastname.charAt(0).toUpperCase() + user?.lastname.slice(1);
        setName(`${fName} ${lName}`);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    async function fetchBalance() {
      const result = await api.get(`/api/v1/account/balance`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setBalance(Number(result?.data?.balance.toFixed(2)));
    }

    fetchBalance();
  }, []);

  return (
    <div className="flex  items-center flex-col w-full">
      <NavBar />

      <div className=" flex justify-start w-full px-4">{`Welcome, ${name} !`}</div>

      <Balance balance={balance} />

      <Users />
    </div>
  );
};

export default Dashboard;
