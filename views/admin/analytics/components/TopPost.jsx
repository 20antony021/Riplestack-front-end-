import React from "react";
import moment from "moment";

import facebookIcon from "../../../../assets/img/marks/facebook.png";
import postImg from "../../../../assets/img/posts/image.png";

const TopPost = ({ date, title, likes, comments, shares }) => {
  return (
    <div className="flex 3xl:flex-col md:flex-row flex-col h-full w-full">
      <div className="w-full md:w-[60%] 3xl:w-full">
        <div className="flex w-full items-center pt-3 text-lg font-bold">
          <span className="mr-2">⭐️</span>
          <span>Top-Performing Post</span>
        </div>
        <div className="mt-5 flex w-full items-center px-1">
          <img className="mr-3 h-5 w-5" src={facebookIcon} alt="platform icon" />
          <div className="text-[#6D6B85]">
            {moment(date).format("MMMM Do, YYYY / h a")}
          </div>
        </div>
        <div className="mt-5 flex w-full items-center px-1">
          <img
            className="mr-3 h-11 w-11 rounded-lg"
            src={postImg}
            alt="post view"
          />
          <div className="text-sm">{title}</div>
        </div>
      </div>
      <div className="flex justify-between w-full md:w-[60%] 3xl:w-full mt-6">
        <div className="flex flex-col items-center justify-center px-3 border-r border-[#EBEBEB] md:border-0 3xl:border-r 3xl:border-[#EBEBEB]">
          <div className="text-md font-bold">{likes}</div>
          <div className="text-[#A09EB5]">Total Likes</div>
        </div>
        <div className="flex flex-col items-center justify-center px-3 border-r border-[#EBEBEB] md:border-0 3xl:border-r 3xl:border-[#EBEBEB]">
          <div className="text-md font-bold">{comments}</div>
          <div className="text-[#A09EB5]">Total Comments</div>
        </div>
        <div className="flex flex-col items-center justify-center px-3">
          <div className="text-md font-bold">{shares}</div>
          <div className="text-[#A09EB5]">Total Shares</div>
        </div>
      </div>
    </div>
  );
};

export default TopPost;
