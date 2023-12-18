import React from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const NAV = useNavigate();
  function handelLogin() {
    NAV("/Feed");
  }
  return (
    <>
      <div className="flex justify-center gap-[300px] items-center h-[100vh] bg-black text-white">
        <div className="right">
          <img src="https://i.ibb.co/Q8X79RK/image.png" alt="instagram" />
        </div>

        <div className="left flex flex-col gap-5">
          <div className="flex flex-col gap-5 justify-center items-center w-[450px] border-2 border-gray-50 pt-5 pb-5 rounded-lg">
            <img
              className="h-[150px]"
              src="instagram_Logo.png"
              alt="instagram logo"
            />
            <input
              className="w-[75%] rounded-md  h-8 p-2 bg-transparent"
              type="text"
              placeholder="Email or Phone number"
            />
            <input
              className="w-[75%] rounded-md h-8 p-2 bg-transparent"
              type="password"
              placeholder="Password"
            />
            <button
              onClick={handelLogin}
              className="w-[75%] h-8 bg-blue-500 rounded-md"
            >
              Log in
            </button>

            <div className="flex justify-center items-center gap-2">
              <div className="h-[2px] w-14 bg-gray-50"></div>
              OR
              <div className="h-[2px] w-14 bg-gray-50"></div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <img
                className="h-5"
                src="facebook_logo.png"
                alt="facebook icon"
              />
              <p className="">login with Facebook</p>
            </div>
          </div>

          <div className="border-2  border-gray-50 text-center pt-5 pb-5 rounded-lg">
            <p>
              Don't have an account? <span>Sign up</span>
            </p>
          </div>
          <p className="text-center text-white">Get the app.</p>
          <div className="appLinks flex gap-2 justify-center">
            <img
              className="h-10"
              src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
            />
            <img
              className="h-10"
              src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
