// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { LuFocus } from "react-icons/lu";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const menus = [
  {
    name: "Dashboard",
    icon: <AiOutlineHome className="mr-2" />,
    link: "profile",
  },
  {
    name: "Message",
    icon: <LuFocus className="mr-2" />,
    link: "message",
  },
  {
    name: "User",
    icon: <BsFillEnvelopeAtFill className="mr-2" />,
    link: "user",
  },
];

const DashboardPage = () => {
  const [isClick, setIsClick] = useState(false);
  return (
    <>
      <section className="font-custom leading-normal tracking-normal">
        <div className="flex md:flex-row-reverse flex-wrap">
          <div className="w-full md:w-[85%] ">
            {/* mobile nav menu */}
            <nav className="md:hidden block ">
              <div className="flex items-center justify-between bg-primary flex-wrap bg-gray-800 p-6 fixed w-full z-10 top-0">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                  <a
                    className="text-white no-underline hover:text-white hover:no-underline"
                    href="#">
                    <span className="text-2xl pl-2">Logo here</span>
                  </a>
                </div>

                <div className="block lg:hidden">
                  <button
                    onClick={() => setIsClick(!isClick)}
                    id="nav-toggle"
                    className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
                    {isClick ? <RxCross2 /> : <BsThreeDots />}
                  </button>
                </div>

                <div
                  className={`${
                    isClick ? "block" : "hidden"
                  } w-full flex-grow lg:flex lg:items-center lg:w-auto pt-6 lg:pt-0`}
                  id="nav-content">
                  <ul className="list-reset lg:flex justify-end flex-1 items-center">
                    <li className="mr-3">
                      <a
                        className="inline-block py-2 px-4 text-white no-underline"
                        href="#">
                        Active
                      </a>
                    </li>
                    <li className="mr-3">
                      <a
                        className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                        href="#">
                        link
                      </a>
                    </li>
                    <li className="mr-3">
                      <a
                        className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                        href="#">
                        link
                      </a>
                    </li>
                    <li className="mr-3">
                      <a
                        className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                        href="#">
                        link
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <div className="flex justify-end items-center py-2">
                <BsThreeDots
                  onClick={handleClick}
                  className="border rounded-full text-3xl p-1 mr-2 cursor-pointer "
                />
                {isClick && (
                  <ul className="relative top-20 -left-5">
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                  </ul>
                )}
              </div> */}
            </nav>
            <Outlet />
          </div>
          {/* Desktop sidebar menu */}
          <div className="w-full md:w-[15%] border-border1 border px-2 text-center fixed bottom-0 md:top-0 md:left-0 h-16 md:h-screen">
            <div className="md:relative mx-auto lg:float-right lg:px-6">
              <ul className="hidden list-none md:flex flex-row md:flex-col text-center md:text-left">
                <li className="my-3 flex-1">
                  <Link
                    to={"/"}
                    className="flex items-center rounded-lg py-3 px-2 align-middle no-underline text-text1 ">
                    <h5>Logo here</h5>
                  </Link>
                </li>
              </ul>
              <ul className="list-none flex flex-row md:flex-col text-center md:text-left">
                {menus.map((menu) => (
                  <li className="my-3 flex-1" key={menu.name}>
                    <NavLink
                      to={menu.link}
                      className={({ isActive }) => {
                        return `${
                          isActive ? "border-secondary" : "border-border1"
                        } flex items-center justify-center rounded-lg py-3 px-2 align-middle no-underline text-text1 border-2 hover:border-secondary`;
                      }}>
                      {menu.icon}
                      {menu.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardPage;
