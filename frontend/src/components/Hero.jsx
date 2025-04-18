import React from "react";
import scroll from "../assets/scrollDown.json";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className=" h-[91vh] bg-cover bg-[url('/wave-haikei.svg')] bg-center bg-no-repeat flex flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center mt-6">
        <div className=" text-3xl sm:text-5xl font-medium text-slate-700">
          Your Money Is Where
        </div>
        <div className=" text-[#E06942] text-4xl sm:text-5xl font-medium">
          You Are
        </div>
      </div>

      <div className="flex flex-col text-base sm:text-lg w-lg font-normal items-center justify-center">
        <div>Smart wallet, smarter choices.</div>
        <div>Manage, save, and spend with confidence.</div>
      </div>

      <button
        onClick={() => {
          navigate("/signup");
        }}
        className="btn-custom mt-7 mb-5"
      >
        Get Started
      </button>
      <span className=" h-35 w-35 sm:h-40 sm:w-40 flex">
        <Lottie animationData={scroll} loop={true} />
      </span>
    </div>
  );
};

export default Hero;
