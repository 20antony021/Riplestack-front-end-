import Card from "components/card";
import Dropdown from "components/dropdown";
import React, { useEffect, useState } from "react";
import TotalOverviewItem from "./TotalOverviewItem";
import { axiosApi } from "config";

const TotalOverview = ({ transparent }) => {
  const [metric, setMetric] = useState("Engagement");
  const [open, setOpen] = useState(false);
  const [overviewList, setOverviewList] = useState([])

  // const overviewList = [
  //   { platform: "Facebook", prev: "5.2k", current: "6.5k", rise: 9 },
  //   { platform: "X", prev: "5.2k", current: "9.2k", rise: -21 },
  //   { platform: "Instagram", prev: "5.2k", current: "6.5k", rise: 9 },
  //   { platform: "Tiktok", prev: "5.2k", current: "6.5k", rise: 9 },
  // ]

  const handleMetric = (value) => {
    setMetric(value);
  }

  useEffect(() => {
    axiosApi.post("/api/user/platforms/metrics/key", { metricKey: metric.replace(" ", "-").toLowerCase() })
      .then((res) => {
        const { result } = res.data;
        setOverviewList(result);
      }).catch((err) => {
      })
  }, [metric])

  return (
    <Card extra="!p-[20px] text-center h-full bg-gradient-to-b from-[#ffffff] to-[#FDF7FF]">
      <div className="flex justify-between">
        <div className="text-lg font-bold dark:!text-navy-900">By Platform</div>
        <div className="flex">
          <Dropdown
            button={
              <button
                onClick={() => setOpen(!open)}
                open={open}
                className={`text-sm flex w-[150px] items-center justify-between rounded-full border border-gray-700 px-2 py-1 hover:cursor-pointer ${
                  transparent
                    ? "bg-none text-gray-700 hover:bg-none active:bg-none"
                    : "bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10"
                } linear justify-center rounded-lg font-bold transition duration-200`}
              >
                {metric}
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
                    handleMetric("Engagement");
                  }}
                  disabled={metric === "Engagement"}
                  className="flex cursor-pointer items-center gap-2 text-gray-600 hover:text-[#333]"
                >
                  Engagement
                </button>
                <button
                  onClick={() => {
                    handleMetric("Engagement Rate");
                  }}
                  disabled={metric === "Engagement Rate"}
                  className="mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:text-[#333]"
                >
                  Engagement Rate
                </button>
                <button
                  onClick={() => {
                    handleMetric("Impressions");
                  }}
                  disabled={metric === "Impressions"}
                  className="mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:text-[#333]"
                >
                  Impressions
                </button>
                <button
                  onClick={() => {
                    handleMetric("Follower Growth");
                  }}
                  disabled={metric === "Follower Growth"}
                  className="mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:text-[#333]"
                >
                  Follower Growth
                </button>
              </div>
            }
          />
        </div>
      </div>
      {/* Values */}
      <div className="flex flex-col w-full mt-5">
        { overviewList.map((item, id) => <TotalOverviewItem key={`total-overview-item-${id}`} { ...item } />) }
      </div>
    </Card>
  );
};

export default TotalOverview