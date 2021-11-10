import React, { useEffect, useState } from "react";
import SlidingPanel from "react-sliding-side-panel";
import { useMediaQuery } from "react-responsive";
const Navbar = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1024px)",
  });
  const [openPanel, setOpenPanel] = useState(false);
  return isMobile ? (
    <div>
      <nav className="flex justify-between mx-32 mt-5 pb-2 items-center">
        <div className="flex">
          <a className="text-2xl font-bold my-auto">COMPANY</a>
        </div>
        <div>
          <button
            className="my-auto items-center"
            onClick={() => setOpenPanel(true)}
          >
            <img className="btn" src="/hamburger.png" alt="" />
          </button>
        </div>
      </nav>
      <SlidingPanel type={"right"} isOpen={openPanel} size={20}>
        <div>
          <div className="flex flex-col text-center justify-center">
            <div className="hover:bg-gray-200 overflow-hidden dropdown ">
              <a
                href="#"
                className="flex py-4 px-4 leading-normal no-underline flex items-center justify-center justify-center"
              >
                ABOUT
              </a>
              <div className="dropdown-content flex flex-col text-left absolute z-10">
                <a
                  href="#"
                  className="hover:bg-gray-200 bg-white w-48 py-4 pl-4"
                >
                  HISTORY
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-200 bg-white w-48 py-4 pl-4"
                >
                  VISION MISSION
                </a>
              </div>
            </div>
            <div className="hover:bg-gray-200">
              <a
                href="#"
                className="flex py-4 px-4 leading-normal no-underline flex items-center justify-center"
              >
                OUR WORK
              </a>
            </div>
            <div className="hover:bg-gray-200">
              <a
                href="#"
                className="flex py-4 px-4 leading-normal no-underline flex items-center justify-center"
              >
                OUR TEAM
              </a>
            </div>
            <div className="hover:bg-gray-200">
              <a
                href="#"
                className="flex py-4 px-4 leading-normal no-underline flex items-center justify-center"
              >
                CONTACT
              </a>
            </div>
          </div>
          <button
            className="flex mt-20 p-1 justify-center mx-auto hover:bg-gray-200 hover:text-black bg-black text-white"
            onClick={() => setOpenPanel(false)}
          >
            close
          </button>
        </div>
      </SlidingPanel>
      <style>
        {`
        .btn {
          height: 25px;
        }
        .panel {
          background: #fff;
        }
        .dropdown-content {
          display: none;
        }
        .dropdown:hover .dropdown-content {
          display: flex;
        }
        `}
      </style>
    </div>
  ) : (
    <div>
      <nav className="flex justify-between mx-32 mt-5 pb-2">
        <div className="flex">
          <a className="text-2xl font-bold my-auto">COMPANY</a>
        </div>
        <div className="flex flex-row">
          <div className="hover:bg-gray-200 overflow-hidden dropdown">
            <a
              href="#"
              className="flex py-2 px-4 leading-normal no-underline flex items-center"
            >
              ABOUT
            </a>
            <div className="dropdown-content flex flex-col text-left absolute z-10">
              <a href="#" className="hover:bg-gray-200 bg-white w-48 py-4 pl-4">
                HISTORY
              </a>
              <a href="#" className="hover:bg-gray-200 bg-white w-48 py-4 pl-4">
                VISION MISSION
              </a>
            </div>
          </div>
          <div className="hover:bg-gray-200">
            <a
              href="#"
              className="flex py-2 px-4 leading-normal no-underline flex items-center"
            >
              OUR WORK
            </a>
          </div>
          <div className="hover:bg-gray-200">
            <a
              href="#"
              className="flex py-2 px-4 leading-normal no-underline flex items-center"
            >
              OUR TEAM
            </a>
          </div>
          <div className="hover:bg-gray-200">
            <a
              href="#"
              className="flex py-2 px-4 leading-normal no-underline flex items-center"
            >
              CONTACT
            </a>
          </div>
        </div>
      </nav>
      <style>
        {`
        .dropdown-content {
          display: none;
        }

        .dropdown:hover .dropdown-content {
          display: flex;
        }
      `}
      </style>
    </div>
  );
};

export default Navbar;
