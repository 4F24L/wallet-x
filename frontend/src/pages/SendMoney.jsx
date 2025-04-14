import React, { useEffect, useState } from "react";
import InputBox from "../components/InputBox";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import api from "../api";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { recieverName, SentMoney, UserBal } from "../store/atoms/UserData";
import NavBar from "../components/NavBar";
import toast, { Toaster } from "react-hot-toast";
const token = localStorage.getItem("token");
import { jwtDecode } from "jwt-decode";
const backendURL = import.meta.env.VITE_API_BASE_URL;

const SendMoney = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const recipientName = `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
  const navigate = useNavigate();

  const [amount, setAmount] = useRecoilState(SentMoney);
  const [note, setNote] = useState("");
  const userBal = useRecoilValue(UserBal);
  const setReciever = useSetRecoilState(recieverName);

  const decoded = jwtDecode(token);

  useEffect(() => {
    setReciever(recipientName);
  }, [name]);

  const handleClick = async () => {
    if (!(amount > 0)) {
      toast.error("Please enter amount");
      return;
    }

    if (decoded?.userId === id) return toast.error("You can't send money to yourself");

    if (amount > userBal) {
      toast.error("Insufficient balance");
      return;
    }

    const transferPromise = api.post(
      `/api/v1/account/transfer`,
      {
        sendTo: id,
        amount,
        note,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    toast.promise(transferPromise, {
      loading: "Processing transfer...",
      success: () => {
        // Post-transfer UI logic
        setTimeout(() => {
          navigate("/receipt", {
            state: {
              recipient: recipientName,
              amount: amount,
            },
          });
        }, 1500);
        setAmount(0);
        return "Transfer successful!";
      },
      error: (err) => {
        return err?.response?.data?.message || "Failed to send money";
      },
    });
  };

  return (
    <>
      <NavBar loggedIn={true} />
      <div className="bg-gradient-to-r from-slate-900 to-[#83817f]  mt-7 p-6 rounded-2xl shadow-lg text-white w-[94%] m-3">
        {/* user name */}
        <div className="flex items-center mb-3 gap-3">
          <div className=" h-14 w-14 rounded-full border flex justify-center items-center text-3xl font-bold ">
            {name.charAt(0).toUpperCase()}
          </div>
          <div className="text-3xl font-medium">{recipientName}</div>
        </div>

        {/* amount */}
        <InputBox
          type={"number"}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          label={"Enter amount"}
          placeholder={"Enter amount"}
        />

        <InputBox
          type={"text"}
          label={"Note :"}
          placeholder={"Description for payment"}
          onChange={(e) => {
            setNote(e.target.value);
          }}
        />

        <div className="flex justify-around gap-5">
          <button
            onClick={handleClick}
            className="mt-4 w-full bg-white text-black py-2 rounded-lg text-xl font-medium"
          >
            Send
          </button>
          <button
            onClick={() => {
              toast.error("Coming soon...");
            }}
            className="mt-4 w-full bg-white text-black py-2 rounded-lg text-xl font-medium"
          >
            Request
          </button>
        </div>
      </div>

      <Toaster />
    </>
  );
};

export default SendMoney;
