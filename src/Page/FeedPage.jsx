import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import SuggestUsers from "../Components/SuggestUsers";
import "remixicon/fonts/remixicon.css";
import { feedPostData } from "../Components/data";

const FeedPage = () => {
  const [like, setLike] = useState(true);

  function handelLike() {
    setLike(!like);
  }

  return (
    <>
      <div className="bg-black text-white ">
        <div className="flex gap-20  justify-between ">
          <Sidebar />
          <div className="feedPage ">
            {feedPostData.map((x) => (
              <div className="flex flex-col  mb-10 mt-10 gap-2 flex-wrap w-[30vw]">
                <div className="flex gap-3 items-center">
                  <img className="rounded-full w-10 h-10" src={x.avatarPic} />
                  <p>{x.userName}</p>
                  <p>{x.postTime}</p>
                </div>
                <div>
                  <img
                    className="h-[40rem] w-[33rem]  rounded-md"
                    src={x.postImg}
                    alt="posted pic"
                  />
                </div>
                <div className="flex gap-3 ">
                  <div onClick={handelLike} className="liked">
                    {like ? (
                      <i className="ri-heart-fill text-[30px] cursor-pointer"></i>
                    ) : (
                      <i className="ri-heart-line text-[30px] cursor-pointer"></i>
                    )}
                  </div>

                  <i className="ri-chat-1-line text-[30px] cursor-pointer"></i>
                  <i className="ri-send-plane-2-line text-[30px] cursor-pointer"></i>
                </div>
                <p className="text-gray-300">{x.likes} likes</p>
                <p className="text-gray-300">
                  {x.userName} ~ {x.postDis}
                </p>
                <input
                  className="bg-transparent border-b-2 border-b-gray-700"
                  type="text"
                  placeholder="Add a comment..."
                />
              </div>
            ))}
          </div>
          <SuggestUsers />
        </div>
      </div>
    </>
  );
};

export default FeedPage;
