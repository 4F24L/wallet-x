import React, { useEffect, useState } from "react";
import Balance from "../components/Balance";
import Users from "../components/Users";
import { jwtDecode } from "jwt-decode";
import NavBar from "../components/NavBar";
import api from "../api";
import { useRecoilState } from "recoil";
import { UserBal, UserName } from "../store/atoms/UserData";
import WalletIcons from "../components/WalletIcons";
import TransactionHistory from "../components/TransactionHistory";

const Dashboard = () => {
  const [name, setName] = useRecoilState(UserName);
  const [balance, setBalance] = useRecoilState(UserBal);

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
      <NavBar loggedIn={true} />

      <div className=" flex justify-start w-full px-4 mt-3 text-2xl font-semibold">{`Hello, ${name}`}</div>

      <Balance />
      <WalletIcons />
    
      
    </div>
  );
};

export default Dashboard;
