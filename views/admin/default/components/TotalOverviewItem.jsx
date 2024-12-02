import React, { useState } from "react";
import facebookIcon from "../../../../assets/img/marks/facebook.png"
import twitterIcon from "../../../../assets/img/marks/twitter.png"
import instagramIcon from "../../../../assets/img/marks/instagram.png"
import tiktokIcon from "../../../../assets/img/marks/tiktok.png"

const TotalOverviewItem = ({ platform, prev, current, rise }) => {
  return (
    <div className="flex w-full justify-between items-center border-b border-b-gray-400 py-5">
      <div className="flex items-center w-[150px]">
        { platform.toLowerCase() === "facebook" && <img src={facebookIcon} alt="facebook icon" className="w-[32px] h-[32px] rounded-full" /> }
        { (platform.toLowerCase() === "x" || platform.toLowerCase() === "twitter") && <img src={twitterIcon} alt="twitter icon" className="w-[32px] h-[32px] rounded-full" /> }
        { platform.toLowerCase() === "instagram" && <img src={instagramIcon} alt="instagram icon" className="w-[32px] h-[32px] rounded-full" /> }
        { platform.toLowerCase() === "tiktok" && <img src={tiktokIcon} alt="tiktok icon" className="w-[32px] h-[32px] rounded-full" /> }
        <span className="ml-2 text-[#6D6B85]">{`${platform[0].toUpperCase()}${platform.slice(1)}`}</span>
      </div>
      <div className="text-[#6D6B85]">{prev}</div>
      <div className="flex items-center">
        <div className="text-[#23C581] mr-3">{current}</div>
        { rise >= 0 ? <div className="flex items-center text-[#23C581]">
          <span className="mr-2">{rise}%</span>
          <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor"><path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-82.7L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160 384 160z"/></svg>
        </div> : <div className="flex items-center text-[#E35A5A]">
          <span className="mr-2">{rise}%</span>
          <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor"><path d="M384 352c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-160c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 82.7L342.6 137.4c-12.5-12.5-32.8-12.5-45.3 0L192 242.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0L320 205.3 466.7 352 384 352z"/></svg>
        </div> }
      </div>
    </div>
  );
};

export default TotalOverviewItem