// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { LuFocus } from "react-icons/lu";
import { BsFillEnvelopeAtFill } from "react-icons/bs";

const menus = [
  {
    name: "Dashboard",
    icon: <AiOutlineHome className="mr-2" />,
    link: "/dashboard",
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
  return (
    <>
      <section className="font-custom leading-normal tracking-normal">
        <div className="flex md:flex-row-reverse flex-wrap">
          <div className="w-full md:w-[85%] bg-section1">
            <div className="container bg-section1 pt-16 px-6">
              <Outlet />
            </div>
          </div>

          <div className="w-full md:w-[15%] bg-primary md:bg-primary px-2 text-center fixed bottom-0 md:top-0 md:left-0 h-16 md:h-screen">
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
                    <Link
                      to={menu.link}
                      className="flex items-center justify-center rounded-lg py-3 px-2 align-middle no-underline text-text1 border-2 border-border1 hover:border-secondary">
                      {menu.icon}
                      {menu.name}
                    </Link>
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
