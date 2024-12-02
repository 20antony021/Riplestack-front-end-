import React from "react";

const PostItem = ({ imgData, accountImg, date, title }) => {
    return (
        <div className="flex w-full items-center justify-between mt-3">
            <div className="flex">
                <img className="w-11 h-11" src={imgData} alt="post" />
                <div className="text-start pl-3 dark:!text-navy-900">{title.length < 40 ? title : `${title.substring(0, 40)}...`}</div>
            </div>
            <div className="flex items-center">
                <img className="w-4 h-4 mr-2" src={accountImg} alt="social account" />
                <div className="text-[#D1D1D1] text-xs">{date}</div>
            </div>
        </div>
    )
}

export default PostItem