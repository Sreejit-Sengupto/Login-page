import React from "react";
import { BsGoogle } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

function LoginPage() {
  return (
    <div className="flex justify-center items-center flex-col mt-20" >
        <h1 className="text-center text-2xl my-3">&lt; Your site name /&gt;</h1>
      <div className="w-[80%] max-w-xl mx-auto rounded-xl bg-white border-[#d3d3d3] border-2">
        <h1 className="w-32 mx-auto my-8 text-center text-4xl leading-[3.5rem] border-b-4 border-b-green-400">
          Log in
        </h1>

        <div className="flex justify-center items-center text-4xl">
          <div className="flex justify-center items-center border-2 border-[#d3d3d3] rounded-[50%] hover:border-lime-400 transition-colors hover:text-red-600">
            <BsGoogle className="p-[6px]" />
          </div>
          <div className="flex justify-center items-center mx-4 border-2 border-[#d3d3d3] rounded-[50%] hover:border-lime-400 transition-colors">
            <BsGithub className="p-[6px] hover:text-purple-900" />
          </div>
          <div className="flex justify-center items-center border-2 border-[#d3d3d3] rounded-[50%] hover:border-lime-400 transition-colors hover:text-[#00acee]">
            <BsTwitter className="p-[6px]" />
          </div>
        </div>

        <fieldset className="p-5 border-2 rounded-xl border-[#ffe35c] w-[90%] my-3 mx-auto flex flex-col items-center justify-center">
          <legend>or Login using E-mail</legend>

          <div className="flex justify-center items-center flex-col w-full">
            <input
              type="email"
              required
              placeholder="Enter your E-mail"
              className="border-none bg-[#eaffc0] p-3 w-[90%] rounded-3xl my-3 text-center focus:outline-none focus:ring focus:ring-lime-400 hover:shadow-shadow transition-all"
            />
            <input
              type="password"
              required
              placeholder="Enter your password"
              className="border-none bg-[#eaffc0] p-3 w-[90%] rounded-3xl text-center focus:outline-none focus:ring focus:ring-lime-400 hover:shadow-shadow transition-all"
            />
          </div>

          <div className="flex justify-between items-center w-full m-5 text-xs sm:text-base">
            <div>
              <input type="checkbox" id="checkbox" className="align-middle" />
              <label htmlFor="checkbox">Remember Me</label>
            </div>
            <a href="#">Forgot Password?</a>
          </div>

          <button className="bg-gradient-to-r from-[#4aeb4a] to-[lime] focus:ring focus:ring-green-500 hover:scale-105 hover:bg-gradient-to-r hover:from-[lime] hover:to-[#4aeb4a] transition-all rounded-3xl py-2.5 px-[32px]">
            Login
          </button>
        </fieldset>
      </div>
    </div>
  );
}

export default LoginPage;
