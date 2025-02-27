import React from "react";
import errorCard from "../assets/broken-credit-card.svg";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col gap-5 pt-36 items-center font-medium bg-amber-50 text-3xl">
      <img src={errorCard} width={"200px"}></img>
      <div className="text-center flex flex-col sm:flex-row sm:gap-4">
        <div className="text-5xl sm:text-3xl">404</div>
        <div className=" text-3xl">Page Not Found</div>
      </div>
    </div>
  );
};

export default NotFound;
