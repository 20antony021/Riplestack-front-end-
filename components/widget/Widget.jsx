import Card from "components/card";

const Widget = ({ icon, title, subtitle, rise, likes, comments, shares }) => {
  return (
    <Card extra="!flex-col w-full items-center rounded-[20px] px-5 pb-5 bg-gradient-to-b from-[#ffffff] to-[#FDF7FF]">
      <div className="flex w-full flex-grow flex-row items-center justify-between">
        <div className="flex">
          <div className="flex h-[90px] w-auto flex-row items-center">
            <div className="rounded-full dark:bg-navy-700">
              <span className="flex items-center text-brand-500 dark:text-white">
                {icon}
              </span>
            </div>
          </div>

          <div className="h-50 ml-4 flex w-auto flex-col justify-center">
            <h4 className="text-xl font-bold text-navy-700 dark:!text-navy-900">
              {subtitle}
            </h4>
            <p className="font-dm text-sm font-medium !text-gray-600">
              {title}
            </p>
          </div>
        </div>

        <div className={`flex items-center ${rise >= 0 ? `text-[#23C581]` : `text-[#E35A5A]`}`}>
          <span className={rise >= 0 ? `text-[#23C581]` : `text-[#E35A5A]`}>
            {rise}%
          </span>
          <div className="ml-2">
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
          </div>
        </div>
      </div>
      <div className="flex w-full flex-row items-center justify-between">
        <div className="flex flex-col items-center justify-center">
          <div className="font-bold dark:!text-navy-900">{likes}</div>
          <div className="text-sm text-[#A09EB5]">Total Likes</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="font-bold dark:!text-navy-900">{comments}</div>
          <div className="text-sm text-[#A09EB5]">Total Comments</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="font-bold dark:!text-navy-900">{shares}</div>
          <div className="text-sm text-[#A09EB5]">Total Shares</div>
        </div>
      </div>
    </Card>
  );
};

export default Widget;
