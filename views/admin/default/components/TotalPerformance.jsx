import React from "react";
import Card from "components/card";
import Traffic from "./Traffic";
import TotalOverview from "./TotalOverview";
import AvgOverview from "./AvgOverview";

const TotalPerformance = () => {
  return (
    <div extra="flex flex-col w-full h-full bg-[#F6F2F7]">
      <div className="flex flex-col 3xl:flex-row w-full">
        <div className="w-full 3xl:w-[67%] h-[450px] pr-0 3xl:pr-[10px]">
          <Traffic transparent={true} />
        </div>
        <div className="w-full 3xl:w-[33%] pl-0 3xl:pl-[10px] mt-5 3xl:mt-0">
          <TotalOverview transparent={true} />
        </div>
      </div>
      <div className="w-full mt-5">
        <AvgOverview />
      </div>
    </div>
  );
};

export default TotalPerformance;
