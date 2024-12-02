import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import PlatformButton from "../post/components/PlatformButton";

import facebookIcon from "../../../assets/img/marks/facebook.png";
import twitterIcon from "../../../assets/img/marks/twitter.png";
import instagramIcon from "../../../assets/img/marks/instagram.png";
import tiktokIcon from "../../../assets/img/marks/tiktok.png";
import TopPost from "./components/TopPost";
import Summary from "./components/Summary";
import FollowerTrends from "./components/FollowerTrends";
import PostList from "./components/PostList";
import Distribution from "./components/Distribution";
import GenderDistribution from "./components/GenderDistribution";
import InsightItem from "./components/InsightItem";

const Analytics = () => {
  const referencePlatforms = [
    { name: "facebook", label: "Facebook", avatar: facebookIcon },
    { name: "instagram", label: "Instagram", avatar: instagramIcon },
    { name: "tiktok", label: "TikTok", avatar: tiktokIcon },
    { name: "twitter", label: "X", avatar: twitterIcon },
  ];
  // const periods = ["Weekly", "Monthly", "Yearly"].map((item) => ({
  //   label: item,
  //   value: item,
  // }));
  const labels = ["13 - 18", "18 - 35", "35+"]
  const labels1 = ["Male", "Female", "Non-binary"]
  const chartData = [62.5, 25, 12.5];
  const chartOption = {
    chart: { background: 'transparent' },
    colors: ["#C184F0", "#FDC9BD", "#B0DEC7"],
    dataLabels: { enabled: false },
    labels,
    legend: { show: false },
    plotOptions: { pie: { expandOnClick: false } },
    states: { active: { filter: { type: 'none' } }, hover: { filter: { type: 'none' } } },
    stroke: { width: 0 },
    theme: { mode: 'light' },
    tooltip: { fillSeriesColor: false },
  }
  const chartOption1 = {
    chart: { background: 'transparent' },
    colors: ["#C184F0", "#FDC9BD", "#B0DEC7"],
    dataLabels: { enabled: false },
    labels: labels1,
    legend: { show: false },
    plotOptions: { pie: { expandOnClick: false } },
    states: { active: { filter: { type: 'none' } }, hover: { filter: { type: 'none' } } },
    stroke: { width: 0 },
    theme: { mode: 'light' },
    tooltip: { fillSeriesColor: false },
  }
  const data = [...Array(3)].map((_, id) => ({
    id,
    age: labels[id],
    qt: 108,
    percent: chartData[id]
  }))
  const data1 = [...Array(3)].map((_, id) => ({
    id,
    gender: labels1[id],
    qt: 108,
    percent: chartData[id]
  }))

  const insights = [
    "Your posts perform best on Mondays. Consider scheduling more content for this day.",
    "Videos have 30% higher engagement than static images.",
    "Posts published on weekdays between 1 PM and 3 PM see a 40% higher engagement rate compared to other times.",
    "Videos shared on Instagram stories have a 50% higher click-through rate than those posted in the feed.",
    "Posts that ask questions in the caption experience a 30% increase in comments and interactions."
  ]

  const [platforms, setPlatforms] = useState([])
  const [account, setAccount] = useState("all");
  const authUser = useSelector((state) => state.auth);

  useEffect(() => {
    if(authUser.user){
      setPlatforms([{ name: "all", label: "All Platforms", avatar: null }].concat(authUser.platforms.map(item => referencePlatforms.find(plf => plf.name === item.platform))))
    }
  }, [authUser]);

  return (
    <div className="w-full mt-5">
      <div className="flex w-full">
        {platforms.map((item, idx) => (
          <PlatformButton activeAccount={account} onActiveAccount={(v) => setAccount(v)} key={`platform_btn_${idx}`} {...item} />
        ))}
      </div>
      <div className="flex flex-col 3xl:flex-row w-full mt-5">
        <div className="w-full 3xl:w-[75%] pt-3 pb-9 px-5 bg-gradient-to-b from-[#FFFFFF] to-[#FDF7FF] rounded-xl mr-3">
          <Summary account={account} />
        </div>
        <div className="w-full 3xl:w-[25%] py-3 px-5 bg-gradient-to-b from-[#FFFFFF] to-[#FDF7FF] rounded-xl mt-5 3xl:mt-0">
          <TopPost date={`2024-11-22 14:00:00`} title={`Now Available: The Latest Smartwatch Series`} likes={1800} comments={900} shares={1000} />
        </div>
      </div>
      <div className="flex 3xl:flex-row flex-col w-full">
        <div className="flex flex-col mt-5 3xl:w-[55%] 3xl:mr-5 mr-0 w-full">
          <div className="w-full rounded-xl bg-gradient-to-b from-[#FFFFFF] to-[#FDF7FF]">
            <FollowerTrends />
          </div>
          <div className="w-full p-4 rounded-xl bg-gradient-to-b from-[#FFFFFF] to-[#FDF7FF] mt-5">
            <div className="text-lg font-bold mt-3">Post-Level Analytics</div>
            <div className="mt-3 w-full">
              <PostList />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-5  3xl:w-[45%] w-full">
          <div className="flex md:flex-row flex-col w-full">
            <div className="rounded-xl bg-gradient-to-b from-[#FFFFFF] to-[#FDF7FF] md:w-1/2 w-full md:mr-5 mr-0">
              <Distribution title={`Age Group Distribution`} data={data} chartData={chartData} chartOption={chartOption} />
            </div>
            <div className="rounded-xl bg-gradient-to-b from-[#FFFFFF] to-[#FDF7FF] md:w-1/2 w-full md:mt-0 mt-5">
              <GenderDistribution title={`Gender Distribution`} data={data1} chartData={chartData} chartOption={chartOption1} />
            </div>
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-b from-[#FFFFFF] to-[#FDF7FF] mt-5">
            <div className="text-lg font-bold mt-3 mb-4">Insights & Recommendations</div>
            {
              insights.map((item, id) => (<InsightItem key={`insight-item-${id}`} title={item} color={id % 3 === 0 ? 'bg-[#FEEDE9]' : id % 3 === 1 ? 'bg-[#F5E9FF]' : 'bg-[#E7FAF0]'} />))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
