import logo from "../assets/walletLogo.svg";
import { useNavigate } from "react-router-dom";
import UserMenu from "./UserMenu";

const NavBar = ({ onHome, loggedIn }) => {
  const navigate = useNavigate();
  return (
    <div className=" flex justify-between border-b-slate-700 bg-white items-center px-3 h-[9vh] cursor-pointer w-full">
      <div
        onClick={() => {
          navigate("/");
        }}
        className=" flex  justify-between items-center gap-1 sm:gap-3"
      >
        <span className="">
          <img className=" h-7 sm:h-9" src={logo}></img>
        </span>
        <p className=" heading">Wallet X</p>
      </div>

      {/* //Nav elements */}
      {onHome && (
        <div className="md:flex justify-between hidden items-center gap-5 font-medium text-lg">
          <div className="cursor-pointer">Home</div>
          <div className="cursor-pointer">About</div>
          <div className="cursor-pointer">How to use ?</div>
        </div>
      )}

      {onHome && (
        <div className="flex justify-between items-center">
          <button
            onClick={() => navigate("/login")}
            className="fill-slate-800 font-medium sm:text-lg m-2 cursor-pointer"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className={
              "fill-slate-800 border py-1 px-2 rounded-lg bg-slate-700 text-white font-medium sm:text-lg sm:m-2 cursor-pointer"
            }
          >
            Sign up
          </button>
        </div>
      )}

      {loggedIn && <UserMenu />}
    </div>
  );
};

export default NavBar;
