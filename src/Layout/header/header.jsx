import React from "react";
import { Link } from "react-router-dom";
import { FaSearchengin } from "react-icons/fa";

export const Header = () => {
  return (
    <div>
      <header className="pt-[13px] pb-[13px] mb-[50px] bg-white">
        <div className="container">
          <ul className="flex items-center justify-between align-center">
            <li>
              <Link to="/">
                <img src="headerLogo.svg" alt="logo" />
              </Link>
            </li>
            <li>
              <button className="px-5 py-2 bg-gradient-to-r from-blue-500 to-red-500 text-white rounded-[8px] flex items-center gap-3 transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500">
                <img src="header-icon3.svg" alt="icon" />
                Katalog
              </button>
            </li>
            <li className="flex items-center mb-[20px]">
              <form className="flex items-center justify-center mt-8">
                <input
                  className="border border-gray-300 py-3 px-4 rounded-lg pl-5 pr-16 text-base outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mr-2"
                  type="text"
                  placeholder="Maxsulotlarni izlash"
                />
                <button className="w-[60px] h-[49px] bg-blue-500 text-white rounded-[8px] flex items-center justify-center transition duration-300 ease-in-out hover:bg-blue-600">
                  <FaSearchengin />
                </button>
              </form>
            </li>
            <li className="flex items-center gap-[80px]">
              <img
                className="cursor-pointer"
                src="header-icon1.svg"
                alt="icon"
              />
              <img
                className="cursor-pointer"
                src="header-icon2.svg"
                alt="icon"
              />
            </li>
            <li>
              <button className="p-3 px-6 bg-gradient-to-r from-blue-300 to-red-300 rounded-[10px] transition duration-300 ease-in-out hover:from-red-300 hover:to-blue-300 hover:text-white">
                Kirish
              </button>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};
