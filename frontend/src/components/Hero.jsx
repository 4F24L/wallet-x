import React from "react";
import Button from "./Button";
import scroll from "../assets/scrollDown.json";
import Lottie from "lottie-react";

const Hero = () => {
  return (
    <div className=" h-[91vh] bg-cover bg-[url('/wave-haikei.svg')] bg-center bg-no-repeat flex flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center">
        <div className="text-5xl font-medium text-slate-700">
          Your Money Is Where
        </div>
        <div className=" text-[#E06942] text-5xl font-medium">You Are</div>
      </div>

      <div className="flex flex-col text-lg w-lg font-normal items-center justify-center">
        <div>Smart wallet, smarter choices.</div>
        <div>Manage, save, and spend with confidence.</div>
      </div>

      <Button label={"Get Started"} className={"mt-10 mb-5"} />

      <span className="h-40 w-40 flex">
        <Lottie animationData={scroll} loop={true} />
      </span>
    </div>
  );
};

export default Hero;
