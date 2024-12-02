import React, { useEffect, useState } from "react";
// import {
//   MdArrowDropUp,
//   MdOutlineCalendarToday,
//   MdBarChart,
// } from "react-icons/md";
import Card from "components/card";
import BarChart from "components/charts/BarChart";
// import { trafficData, trafficBarchart } from "variables/charts";
import Dropdown from "components/dropdown";
import { useDispatch, useSelector } from "react-redux";
import { axiosApi } from "config";
import { setTraffic } from "store/slices/traffic";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { toast } from "react-toastify";

const Traffic = ({ transparent }) => {
  const platform_colors = {
    facebook: '#C386F1',
    twitter: '#FFCABE',
    instagram: '#B1DFC9',
    tiktok: '#93DAFF',
  };
  
  const [open, setOpen] = useState(false);
  const [duration, setDuratioin] = useState("1 Week");
  const [chartData, setChartData] = useState({ data: [], option: {} });
  const authUser = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigator = useNavigate();

  useEffect(() => {
    let accounts = [];
    authUser.platforms.map(item => {
      accounts.push(item.platform);
    });

    axiosApi.post("/api/user/platforms/traffic", { duration: duration.replace(" ", "").toLowerCase(), accounts })
      .then(res => {
        const { data, option } = res.data;
        dispatch(setTraffic({ data, option }));
        setChartData({ data, option });
      }).catch(err => {
        if(axios.isAxiosError(err)){
          if([401, 403].includes(err.response.status)){
            navigator("/auth/sign-in");
          }
        }
      })
  }, [duration])

  return (
    <Card extra="!p-[20px] text-center h-full bg-gradient-to-b from-[#ffffff] to-[#FDF7FF]">
      <div className="flex justify-between">
        <div className="font-bold text-lg dark:!text-navy-900">Traffic</div>
        <div className="flex items-center text-sm">
          {
            authUser.platforms.map((item, id) => (<div key={`platform-badge-${id}`} className="mr-4 flex items-center text-gray-700">
            <span className={`mr-2 h-3 w-3 rounded-full bg-[${platform_colors[item.platform]}]`}></span>
            {`${item.platform[0].toUpperCase()}${item.platform.slice(1)}`}
          </div>))
          }
          {/* <div className="mr-4 flex items-center text-gray-700">
            <span className="mr-2 h-3 w-3 rounded-full bg-[#C386F1]"></span>
            Facebook
          </div>
          <div className="mr-4 flex items-center text-gray-700">
            <span className="mr-2 h-3 w-3 rounded-full bg-[#FFCABE]"></span>X
          </div>
          <div className="mr-4 flex items-center text-gray-700">
            <span className="mr-2 h-3 w-3 rounded-full bg-[#B1DFC9]"></span>
            Instagram
          </div>
          <div className="mr-4 flex items-center text-gray-700">
            <span className="mr-2 h-3 w-3 rounded-full bg-[#93DAFF]"></span>
            Tiktok
          </div> */}
          <Dropdown
            button={
              <button
                onClick={() => setOpen(!open)}
                open={open}
                className={`text-md flex w-[100px] items-center justify-between rounded-full border border-gray-700 px-2 py-1 hover:cursor-pointer ${
                  transparent
                    ? "bg-none text-gray-700 hover:bg-none active:bg-none"
                    : "bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10"
                } linear justify-center rounded-lg font-bold transition duration-200`}
              >
                {duration}
                {open ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                  </svg>
                )}
              </button>
            }
            animation={
              "origin-top-right transition-all duration-300 ease-in-out"
            }
            classNames={`${transparent ? "top-8" : "top-11"} right-0 w-max`}
            children={
              <div className="z-50 w-max rounded-xl bg-white px-4 py-3 text-sm shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <button
                  onClick={() => {
                    setDuratioin("1 Week");
                  }}
                  disabled={duration === "1 Week"}
                  className="flex cursor-pointer items-center gap-2 text-gray-600 hover:font-bold hover:text-[#333]"
                >
                  <span className="w-3">1</span>
                  <span>Week</span>
                </button>
                <button
                  onClick={() => {
                    setDuratioin("2 Weeks");
                  }}
                  disabled={duration === "2 Weeks"}
                  className="mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:font-bold hover:text-[#333]"
                >
                  <span className="w-3">2</span>
                  <span>Weeks</span>
                </button>
                <button
                  onClick={() => {
                    setDuratioin("1 Month");
                  }}
                  disabled={duration === "1 Month"}
                  className="mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:font-bold hover:text-[#333]"
                >
                  <span className="w-3">1</span>
                  <span>Month</span>
                </button>
                <button
                  onClick={() => {
                    setDuratioin("3 Months");
                  }}
                  disabled={duration === "3 Months"}
                  className="mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:font-bold hover:text-[#333]"
                >
                  <span className="w-3">3</span>
                  <span>Months</span>
                </button>
                <button
                  onClick={() => {
                    setDuratioin("6 Months");
                  }}
                  disabled={duration === "6 Months"}
                  className="mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:font-bold hover:text-[#333]"
                >
                  <span className="w-3">6</span>
                  <span>Months</span>
                </button>
                <button
                  onClick={() => {
                    setDuratioin("1 Year");
                  }}
                  disabled={duration === "1 Year"}
                  className="mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:font-bold hover:text-[#333]"
                >
                  <span className="w-3">1</span>
                  <span>Year</span>
                </button>
              </div>
            }
          />
        </div>
      </div>

      <div className="flex h-full w-full flex-col justify-between sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden">
        <div className="h-full w-full">
          <BarChart chartOptions={chartData.option} chart_data={chartData.data} />
        </div>
      </div>
    </Card>
  );
};

export default Traffic;
