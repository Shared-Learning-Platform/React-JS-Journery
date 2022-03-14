import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import backButton from "../../../../image/Arrow Back button.png";

const LoginAsWaiterJSX = (handleForm) => {
    return (
      <div
      className="max-w-[700px] mx-auto h-screen  bg-white  rounded-lg relative overflow-hidden py-28 px-10 sm:px-10 md:px-[1px] justify-center ">
  
      <div className="text-center font-bold text-2xl py-5 text-blue-600">
        {/* <a href="index.html"> */}
          <button >  
            <img src={backButton} className="absolute left-3 h-18 top-36 border-none" alt="logo" />
          </button>
        Log In Waiter
      </div>
      <form method="POST" 
            onSubmit={(e)=> handleForm(e)} >
        <div className=" text-md  absolute left-3 right-3 ">Email or UserName
          <input
          
            type="text" 
            placeholder="Email or Phone Number"
            className=" w-full rounded-lg  py-3 px-5 bg-[#eaedf0] mt-3 mb-3"  
            name="waiterEmail" />
          Password
          <input type="text" placeholder="Password" className=" w-full rounded-lg  py-3 px-5 bg-[#eaedf0] mt-3 " name="waiterPassword" />
          <button 
            type="submit"
            className=" w-full rounded-lg text-white font-bold py-3 px-5 mt-8 bg-[#4690da] text-center "
            >
            Login
          </button>
        </div>
      </form>
      <div className="text-center p-3 mt-72">
        <Link to="#" className=" text-blue-600 underline underline-offset-1">forgot Password?</Link>
      </div>
    </div>
    );
}

export default LoginAsWaiterJSX;
