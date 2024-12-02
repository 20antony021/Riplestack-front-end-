import LineChart from "components/charts/LineChart";
import React from "react";

const AvgOverviewItem = ({ classNames, last, title, rise, value, chartData, chartOption }) => {

  return (
    <div
      className={`${classNames} ${last ? "" : "border-r border-r-gray-300"}`}
    >
      <div className="text-start text-[#3B3A44] font-bold my-1">{title}</div>
      <div className="flex items-center justify-between">
        <div className="h-[100px]">
            <LineChart series={chartData} options={chartOption} classNames={`h-full`} />
        </div>
        <div className="flex flex-col items-center justify-end">
          <div
            className={`flex ${
              rise >= 0 ? "text-[#23C581]" : "text-[#E35A5A]"
            }`}
          >
            <div className="mr-2">{rise}%</div>
            <div>
              {rise >= 0 ? (
                <svg
                  className="h-3 w-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  fill="currentColor"
                >
                  <path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-82.7L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160 384 160z" />
                </svg>
              ) : (
                <svg
                  className="h-3 w-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  fill="currentColor"
                >
                  <path d="M384 352c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-160c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 82.7L342.6 137.4c-12.5-12.5-32.8-12.5-45.3 0L192 242.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0L320 205.3 466.7 352 384 352z" />
                </svg>
              )}
            </div>
          </div>
          <div className="text-lg font-bold dark:!text-navy-900">{value}</div>
        </div>
      </div>
    </div>
  );
};

export default AvgOverviewItem