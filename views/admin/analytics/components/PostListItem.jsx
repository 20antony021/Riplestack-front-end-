import moment from "moment";
import React from "react";

const PostListItem = ({ date, icon, postImage, title, likes, shares, comment, engagementRate, last }) => {
  return (
    <div className={`flex flex-col w-full py-5 ${!last ? 'border-b border-b-[#EBEBEB]' : ''}`}>
      <div className="flex w-full items-center">
        <img src={icon} alt="account icon" className="w-4 h-4 rounded-full mr-2" />
        <div className="text-[#6D6B85]">
          {moment(date).format("MMMM Do, YYYY / h a")}
        </div>
      </div>
      <div className="flex w-full justify-between items-center mt-3">
        <div className="flex items-center">
          <img src={postImage} alt="main post thumbnail" className="w-9 h-9 rounded-lg mr-3" />
          <div className="text-sm">{title}</div>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col items-center justify-center px-5 border-r border-r-[#EBEBEB]">
            <div className="text-md font-bold">{likes}</div>
            <div className="text-[#A09EB5] text-sm">Likes</div>
          </div>
          <div className="flex flex-col items-center justify-center px-5 border-r border-r-[#EBEBEB]">
            <div className="text-md font-bold">{shares}</div>
            <div className="text-[#A09EB5] text-sm">Shares</div>
          </div>
          <div className="flex flex-col items-center justify-center px-5 border-r border-r-[#EBEBEB]">
            <div className="text-md font-bold">{comment}</div>
            <div className="text-[#A09EB5] text-sm">Comment</div>
          </div>
          <div className="flex flex-col items-center justify-center px-5">
            <div className="text-md font-bold">{engagementRate}</div>
            <div className="text-[#A09EB5] text-sm">Engagement Rate</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostListItem