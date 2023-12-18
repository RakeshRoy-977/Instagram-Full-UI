import React from "react";
import { useNavigate } from "react-router-dom";
import { suggestedusersData } from "./data";

const SuggestUsers = () => {
  const NAV = useNavigate();
  const handelLogout = () => {
    NAV("/");
  };
  return (
    <>
      <div className=" w-[20vw] sticky top-0 h-[100vh] mr-10">
        <div className="flex gap-2 justify-between max-w-[18vw] m-auto mt-16">
          <div className="flex gap-2">
            <img className="rounded-full w-12 h-12" src="Flex.jpeg" />
            <div>
              <p className="text-gray-200">Rakesh.roy.977</p>
              <p className="text-gray-400">RR</p>
            </div>
          </div>
          <button onClick={handelLogout} className="">
            Log out
          </button>
        </div>
        <div>
          <div className="flex justify-between max-w-[18vw] mt-8 m-auto">
            <p>Suggested for you</p>
            <p>See All</p>
          </div>
          <div className="mt-10">
            {suggestedusersData.map((data) => (
              <>
                <div className="flex justify-between max-w-[18vw] m-auto mt-4">
                  <div className="flex gap-2">
                    <img className="rounded-full w-12 h-12" src={data.img} />
                    <div>
                      <p className="text-gray-200">{data.name}</p>
                      <p className="text-gray-400">{data.text}</p>
                    </div>
                  </div>
                  <button className="">Follow</button>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SuggestUsers;
