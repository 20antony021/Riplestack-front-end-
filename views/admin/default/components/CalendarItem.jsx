import moment from "moment";
import React from "react";

import facebookIcon from "assets/img/marks/facebook.png";
import twitterIcon from "assets/img/marks/twitter.png";
import instagramIcon from "assets/img/marks/instagram.png";
import tiktokIcon from "assets/img/marks/tiktok.png";
import Dropdown from "components/dropdown";

const CalendarItem = ({
  classNames,
  title,
  thumbnail,
  date,
  status,
  accounts,
  no
}) => {
  const platforms = [
    { name: "facebook", icon: facebookIcon },
    { name: "twitter", icon: twitterIcon },
    { name: "instagram", icon: instagramIcon },
    { name: "tiktok", icon: tiktokIcon },
  ];
  const transparent = true;

  return (
    <div className={`relative ${classNames} p-2`}>
      <div className="px-3 py-1 rounded-lg bg-white shadow-lg">
        <div className="">{no}</div>
        <div className="flex w-full items-center pr-3">
          <img
            className="mr-3 h-11 w-11 rounded-lg"
            src={thumbnail}
            alt="post thumbnail"
          />
          <div className="text-start text-xs">{title}</div>
        </div>
        <div className="mt-3 flex w-full items-center justify-between">
          <div className="flex items-center text-xs text-[#333333]">
            <svg
              className="mr-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
            </svg>
            {moment(date).format("DD MMM YYYY, hh:mm A")}
          </div>
          <div className="bg-opacity-6 rounded-lg border-2 border-[#BE9811] bg-[#be98115c] p-1 text-xs">{`${status[0].toUpperCase()}${status
            .slice(1)
            .toLowerCase()}`}</div>
        </div>
        <div className="mt-3 flex w-full items-center">
          {accounts.map((acc, id) => (
            <img
              className="mr-2 h-5 w-5"
              src={platforms.find((item) => item.name === acc).icon}
              alt="platform icon"
            />
          ))}
        </div>
        <div className="absolute right-0 top-2">
          <Dropdown
            button={
              <button
                className={`text-md flex items-center justify-between px-2 py-1 text-[#000] hover:cursor-pointer ${
                  transparent
                    ? "bg-none text-gray-700 hover:bg-none active:bg-none"
                    : "bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10"
                } linear justify-center rounded-lg font-bold transition duration-200`}
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 512"
                  fill="currentColor"
                >
                  <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                </svg>
              </button>
            }
            animation={
              "origin-top-right transition-all duration-300 ease-in-out"
            }
            classNames={`${transparent ? "top-0" : "top-11"} right-0 w-max`}
            children={
              <div className="z-50 w-max rounded-xl bg-white px-4 py-3 text-sm shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <button className="flex cursor-pointer items-center gap-2 text-gray-600 hover:font-bold hover:text-[#333]">
                  Edit
                </button>
                <button className="flex cursor-pointer items-center gap-2 text-gray-600 hover:font-bold hover:text-[#333]">
                  Remove
                </button>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarItem;
