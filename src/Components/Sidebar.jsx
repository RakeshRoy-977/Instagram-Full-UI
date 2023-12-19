import React from "react";
import { SidebarData } from "./data";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const NAV = useNavigate();
  function handelViewProfile() {
    NAV("/profile");
  }
  return (
    <>
      <div className="text-white border-r-2 border-r-gray-400 h-[100vh] w-[18vw] pt-10 top-0 sticky ">
        <div className=" pl-14">
          <img className="h-[100px] cursor-pointer" src="instagram_Logo.png" />
        </div>
        <div className="flex gap-5 flex-col pt-10 cursor-pointer ">
          {SidebarData.map((d) => (
            <div className="flex gap-5 pl-14 items-center hover:bg-zinc-800 transition-all">
              <i className={`${d.tag} text-[30px]`}></i>
              <p>{d.name}</p>
            </div>
          ))}
          <div
            onClick={handelViewProfile}
            className="flex items-center gap-5 pl-12  hover:bg-zinc-800 transition-all"
          >
            <img className="rounded-full w-9 h-9" src="Flex.jpeg" />
            <p>Profile</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
