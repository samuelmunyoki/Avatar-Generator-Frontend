import React from "react";
import logo from "./assets/logo.png";

export const Signup = () => {
  return (
    <div className="bg-[#e7e9eb] flex flex-col w-screen h-screen fixed items-center justify-center text-primary500 gap-y-2">
      <img src={logo} alt="logo" className="w-[300px] " />
      <p className="tetx-[24px] font-semibold">Create Account</p>
      <p className="text-[14px] ">Email Address</p>
      <input name="email" className="border w-[300px]" />
      <p className="text-[14px] ">Password</p>
      <input name="password" type="password" className="border w-[300px]" />
      <p className="text-[14px] ">Confirm Password</p>
      <input
        name="confrimpassword"
        type="password"
        className="border w-[300px]"
      />
      <button className="bg-alternative900  px-[15px] py-[8px] text-[#ffffff] rounded-[5px] w-[300px] cursor-pointer hover:bg-alternative600 font-bold">
        Create account
      </button>
    </div>
  );
};
