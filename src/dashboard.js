import React from "react";
import logo from "./assets/logo.png";

export const Dashboard = () => {
  return (
    <div className="bg-[#e7e9eb] flex flex-col w-screen h-screen fixed">
      <div className=" h-[50px] w-full bg-[#CED2D6] flex flex-row px-[260px] items-center">
        <img src={logo} alt="logo" className="w-[160px] h-[30px]" />

        <div className="flex flex-row items-center w-full justify-end font-bold text-primary700 text-[14px]">
          <div className="flex flex-row items-center gap-5">
            <p className="cursor-pointer hover:primary600">example@mail.com</p>
            <button className="bg-alternative900 px-[15px] py-[5px] text-[#ffffff] rounded-[5px] cursor-pointer hover:bg-alternative600 font-bold">
              Log Out
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-20 items-center h-full gap-y-2">
        <p className="tetx-[28px] text-primary700 font-bold mb-[10px]">Generate Now</p>
        <p className="text-[14px] ">Number of Avatars</p>
        <input name="number_of_avatars" type="number" className="border w-[300px]" />
        <p className="text-[10px] text-secondary600">Maximum of 20 Avatars</p>


        <button className="bg-alternative900  px-[15px] py-[8px] text-[#ffffff] rounded-[5px] w-[300px] cursor-pointer hover:bg-alternative600 font-bold">
          Generate
        </button>
      </div>
    </div>
  );
};
