import React from "react";

const MetricItem = ({ classNames, last, title, value, rise }) => {
  return (
    <div className={`flex flex-col ${classNames} ${!last ? 'border-r border-r-[#EBEBEB] mr-5' : ''} pr-3`}>
      <div className="text-md font-bold">{title}</div>
      <div className="text-sm text-[#6D6B85] mt-3">All</div>
      <div className="flex justify-between w-full mt-5">
        <div className="text-xl font-bold">{value}</div>
        <div className={`flex items-center ${rise >= 0 ? 'text-[#23C581]' : 'text-[#E35A5A]'}`}>
          <span className="mr-2">{rise}%</span>
          <span>
          {rise >= 0 ? (
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="currentColor"
              >
                <path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-82.7L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160 384 160z" />
              </svg>
            ) : (
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="currentColor"
              >
                <path d="M384 352c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-160c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 82.7L342.6 137.4c-12.5-12.5-32.8-12.5-45.3 0L192 242.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0L320 205.3 466.7 352 384 352z" />
              </svg>
            )}
          </span>
        </div>
      </div>
    </div>
  )
}

export default MetricItem