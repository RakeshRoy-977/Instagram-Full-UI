import React from "react";
import Sidebar from "../Components/Sidebar";
import { ProfilePics, tabsIcons } from "../Components/data";
import "remixicon/fonts/remixicon.css";

const Profile = () => {
  return (
    <div className="bg-black text-white flex">
      <Sidebar />
      <div className="flex">
        <div className="flex flex-col   items-center w-[85vw] ">
          <div className="flex  gap-12 h-[30vh] mt-6 justify-center items-center">
            <div className="rounded-full w-[221px] h-[231px] bg-gray-400 z-10">
              <img
                className="rounded-full w-[220px] h-[230px]"
                src="Flex.jpeg"
              />
            </div>

            <div className="flex flex-col gap-3">
              <p>Rakesh.Roy.977</p>
              <div className="flex gap-5 text-gray-400">
                <p>69 posts</p>
                <p>1884 followers</p>
                <p>6800 following</p>
              </div>
              <p>Be a warrior 💪</p>
            </div>
          </div>

          <div className="text-white flex mt-12 gap-[160px] border-t-2 border-t-gray-400 pt-5">
            {tabsIcons.map((x, i) => (
              <div key={i} className="flex gap-2 cursor-pointer">
                <i className={x.icon}></i>
                <p>{x.name}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-10 justify-center flex-wrap w-[1000px] mb-10">
            {ProfilePics.map((x) => (
              <div
                key={x.id}
                className="bg-div flex justify-center items-center bg-center bg-cover"
                style={{
                  backgroundImage: `url(${x.picUrl})`,
                  height: "309px",
                  width: "309px",
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
