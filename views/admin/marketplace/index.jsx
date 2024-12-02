import React, { useState } from "react";
// import TopCreatorTable from "./components/TableTopCreators";
import { Table, Checkbox, VStack, IconButton, Button, Pagination } from "rsuite";
import { createColumnHelper } from "@tanstack/react-table";
import Card from "components/card";
import SearchForm from "./components/SearchForm";
import CustomDateRangePicker from "./components/CustomDateRangePicker";
import facebookIcon from "../../../assets/img/marks/facebook.png";
import postImg from "../../../assets/img/posts/image.png";import moment from "moment";

const { Column, HeaderCell, Cell } = Table;

const PersonCell = ({ rowData, dataKey, ...props }) => (
  <Cell {...props} style={{ padding: 0 }}>
    <div className="flex h-full w-[170px] items-center overflow-hidden rounded-lg p-2">
      <img src={rowData.platform[1]} className="h-6 w-6 rounded-full" />
      <div className="ml-3 text-gray-800">{rowData.platform[0]}</div>
    </div>
  </Cell>
);

const CheckCell = ({ rowData, onChange, checkedKeys, dataKey, ...props }) => (
  <Cell {...props} style={{ padding: 0 }}>
    <div style={{ lineHeight: "46px" }}>
      <Checkbox
        value={rowData[dataKey]}
        inline
        onChange={onChange}
        checked={checkedKeys.some((item) => item === rowData[dataKey])}
      />
    </div>
  </Cell>
);

const tableData = Array.from({ length: 20 }, (_, idx) => ({
  platform: [
    "Facebook",
    facebookIcon,
  ],
  thumbnail: postImg,
  title: "Behind-the-scenes at our latest photoshoot!",
  date: moment("2024-11-16T10:00:00").format("DD MM YYYY, hh:mm A"),
  likes: 1200,
  share: 200,
  comments: idx + 1,
  status: "Published",
  id: idx,
  action: "action"
}));

const Posts = () => {

  const itemsPerPage = 11;

  const [checkedKeys, setCheckedKeys] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState(tableData.slice(0, itemsPerPage));

  let checked = false;
  let indeterminate = false;

  if (checkedKeys.length === tableData.length) {
    checked = true;
  } else if (checkedKeys.length === 0) {
    checked = false;
  } else if (checkedKeys.length > 0 && checkedKeys.length < tableData.length) {
    indeterminate = true;
  }

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
        <div className="h-[650px]">
          <Table className="!bg-white" data={data} id="table" fillHeight={true} rowHeight={54}>
            {/* <Column width={50} align="center">
              <HeaderCell style={{ padding: 0 }}>
                <div style={{ lineHeight: "40px" }}>
                  <Checkbox
                    inline
                    checked={checked}
                    indeterminate={indeterminate}
                    onChange={handleCheckAll}
                  />
                </div>
              </HeaderCell>
              <CheckCell
                dataKey="id"
                checkedKeys={checkedKeys}
                onChange={handleCheck}
              />
            </Column> */}
            <Column width={200} align="start" verticalAlign="middle">
              <HeaderCell>Platform</HeaderCell>
              <PersonCell dataKey="platform" />
            </Column>

            <Column width={120} align="start" verticalAlign="middle">
              <HeaderCell>Thumnail</HeaderCell>
              <Cell>{(rowData) => <div className="flex justify-center items-center">
                  <img src={rowData.thumbnail} alt="thumnail" className="rounded-md w-8 h-8" />
                </div>}</Cell>
            </Column>

            <Column width={400} align="start" verticalAlign="middle">
              <HeaderCell>Title</HeaderCell>
              <Cell>
                {(rowData) => <div className="text-gray-800">{rowData.title}</div>}
              </Cell>
            </Column>

            <Column width={150} align="start" verticalAlign="middle">
              <HeaderCell>Date/Time Posted</HeaderCell>
              <Cell>
                {(rowData) => <div className="text-gray-800">{rowData.date}</div>}
              </Cell>
            </Column>

            <Column width={100} align="start" verticalAlign="middle">
              <HeaderCell>Like</HeaderCell>
              <Cell>
                {(rowData) => <div className="text-gray-800">{rowData.likes}</div>}
              </Cell>
            </Column>

            <Column width={100} align="start" verticalAlign="middle">
              <HeaderCell>Share</HeaderCell>
              <Cell>
                {(rowData) => <div className="text-gray-800">{rowData.share}</div>}
              </Cell>
            </Column>

            <Column width={100} align="start" verticalAlign="middle">
              <HeaderCell>Comments</HeaderCell>
              <Cell>
                {(rowData) => <div className="text-gray-800">{rowData.comments}</div>}
              </Cell>
            </Column>

            <Column width={100} align="start" verticalAlign="middle">
              <HeaderCell>Status</HeaderCell>
              <Cell>
                {(rowData) => <div className="flex items-center text-gray-800">
                  <span className={`w-3 h-3 rounded-full mr-2 ${rowData.status.toLowerCase() === 'scheduled' ? 'bg-[#0084D6]' : 'bg-[#23C581]'}`}></span>
                  <span className={`${rowData.status.toLowerCase() === 'scheduled' ? 'text-[#0084D6]' : 'text-[#23C581]'}`}>{rowData.status}</span>
                </div>}
              </Cell>
            </Column>

            <Column width={130} align="center">
              <HeaderCell>Action</HeaderCell>
              <Cell>
                {(rowData) => <div className="flex justify-center items-center">
                    { rowData.status !== "published" && <IconButton circle icon={<svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>} appearance="default" /> }
                    <IconButton className="!text-[#f43f5e] hover:!text-[#fff] active:!text-[#fff]" color="red" circle appearance="subtle" icon={<span><svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"/></svg></span>} />
                  </div>}
              </Cell>
            </Column>
          </Table>
        </div>
        <div className="py-2 px-8 flex justify-between items-center w-full">
          <div className="text-gray-700">{`Showing ${currentPage} to ${Math.ceil(tableData.length / itemsPerPage)} of ${tableData.length} entries`}</div>
          <Pagination className="dark:!text-gray-400" first last ellipsis prev next total={tableData.length} limit={itemsPerPage} activePage={currentPage} onChangePage={(page) => handlePage(page)} />
        </div>
      </Card>
    </div>
  );
};

export default Posts;
const columnHelper = createColumnHelper();
