import Image from 'next/image';
import React from 'react';
import {
  FaFacebook,
  FaFacebookMessenger,
  FaBell,
  FaAngleUp,
} from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import {
  AiFillHome,
  AiOutlineFlag,
  AiOutlinePlayCircle,
  AiOutlineShoppingCart,
  AiOutlineTeam,
} from 'react-icons/ai';

import { CgMenuGridO } from 'react-icons/cg';
import HeaderIcon from './HeaderIcon';

const Header = () => {
  return (
    <div className=" sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md md:w-full">
      <div className="flex items-center ">
        <FaFacebook className="text-blue-700 w-9 h-9" />

        <div className="flex  ml-2 items-center rounded-full bg-gray-100 p-2">
          <FiSearch className="h-8 text-gray-600" />
          <input
            className=" hidden md:inline-flex ml-2 bg-transparent  outline-none placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="Search facebook"
          ></input>
        </div>
      </div>

      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={AiFillHome} />
          <HeaderIcon Icon={AiOutlineFlag} />
          <HeaderIcon Icon={AiOutlinePlayCircle} />
          <HeaderIcon Icon={AiOutlineShoppingCart} />
          <HeaderIcon Icon={AiOutlineTeam} />
        </div>
      </div>

      <div className=" flex items-center  sm:space-x-2 justify-end">
        <p className=" whitespace-nowrap font-semibold pr-3">Santosh Gajurel</p>

        <CgMenuGridO className="icon" />
        <FaFacebookMessenger className="icon" />
        <FaBell className="icon" />
        <FaAngleUp className="icon" />
      </div>
    </div>
  );
};

export default Header;
