import { atom } from "recoil";

export const UserBal = atom({
  key: "balanceState", // Unique key
  default: 0, // Default balance value
});

export const UserName = atom({
    key: "userNameState",
    default: "",
});