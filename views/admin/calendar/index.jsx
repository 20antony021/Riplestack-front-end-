import React, { useState } from "react";
import { Table, Checkbox, Pagination } from "rsuite";
import Card from "components/card";
import moment from "moment";

import SearchForm from "views/admin/marketplace/components/SearchForm";
import CustomDateRangePicker from "views/admin/marketplace/components/CustomDateRangePicker";
import facebookIcon from "../../../assets/img/marks/facebook.png";

import postImg from "../../../assets/img/posts/image.png";
import CalendarItem from "../default/components/CalendarItem";

const tableData = Array.from({ length: 20 }, (_, idx) => ({
  platform: [
    "Facebook",
    facebookIcon,
  ],
  thumbnail: postImg,
  title: "Behind-the-scenes at our latest photoshoot!",
  date: "2024-11-16T10:00:00",
  likes: 1200,
  share: 200,
  comments: idx + 1,
  status: "scheduled",
  id: idx,
  action: "action",
  accounts: ['facebook', 'twitter']
}));

const CalendarView = () => {

  const itemsPerPage = 16;

  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState(tableData.slice(0, itemsPerPage));

  // const handleCheckAll = (value, checked) => {
  //   const keys = checked ? tableData.map((item) => item.id) : [];
  //   setCheckedKeys(keys);
  // };
  // const handleCheck = (value, checked) => {
  //   const keys = checked
  //     ? [...checkedKeys, value]
  //     : checkedKeys.filter((item) => item !== value);
  //   setCheckedKeys(keys);
  // };

  const handlePage = (page) => {
    console.log(page)
    setCurrentPage(page);
    setData(tableData.slice((page - 1) * itemsPerPage, page * itemsPerPage));
  }

  return (
    <div className="relative mt-3">
      <Card extra={"w-full sm:overflow-auto px-6 py-5"}>
        <header className="relative flex items-center justify-between py-4">
          {/* <div className="text-xl font-bold text-navy-700 dark:text-white">
            Recent Post
          </div> */}
          <div></div>

          <div className="linear flex items-center rounded-full px-4 py-2 text-base font-medium text-brand-500">
            <SearchForm />
            <CustomDateRangePicker />
          </div>
        </header>
        {/* <TopCreatorTable extra="mb-5" tableData={tableData} columns={columns} /> */}
        <div className="w-full min-h-[650px]">
        <div className="grid 3xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 w-full">
          {
            data.map((item, id) => <CalendarItem key={`calendar-item-${id}`} no={(currentPage - 1 ) * itemsPerPage + (id + 1)} classNames={`h-[150px]`} title={item.title} thumbnail={item.thumbnail} date={item.date} status={item.status} accounts={item.accounts} />)
          }
        </div>
        </div>
        <div className="py-2 px-8 flex justify-between items-center w-full">
          <div className="text-gray-700">{`Showing ${currentPage} to ${Math.ceil(tableData.length / itemsPerPage)} of ${tableData.length} entries`}</div>
          <Pagination className="dark:!text-gray-400" first last ellipsis prev next total={tableData.length} limit={itemsPerPage} activePage={currentPage} onChangePage={(page) => handlePage(page)} />
        </div>
      </Card>
    </div>
  );
};

export default CalendarView;
