import React from 'react';
import { FaFacebook } from 'react-icons/fa';
const login = () => {
  return (
    <div className=" grid grid-col-2">
      <div className=" bg-primary h-screen grid place-items-center">
        <FaFacebook className=" text-white  text-[200px]" />
      </div>

      <div className="grid place-items-center bg-black">
        <div className="flex gap-4 bg-[#fff] p-4 px-4 items-center rounded-[6px] cursor-pointer"></div>
      </div>
    </div>
  );
};

export default login;
