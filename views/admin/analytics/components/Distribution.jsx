import PieChart from "components/charts/PieChart";
import React from "react";
import { Table } from "rsuite";

const { Column, HeaderCell, Cell } = Table;

const FirstCell = ({ rowData, dataKey, ...props }) => (
  <Cell {...props}>
    <div className="flex items-center overflow-hidden">
      <div className={`w-3 h-3 rounded-full mr-2 ${rowData.id === 0 ? 'bg-[#C184F0]' : rowData.id === 1 ? 'bg-[#FDC9BD]' : 'bg-[#B0DEC7]'}`}></div>
      <div>{rowData.age}</div>
    </div>
  </Cell>
);


const Distribution = ({ title, data, chartData, chartOption }) => {
  return (
    <div className="w-full p-3">
      <div className="text-lg font-bold">{title}</div>
      <div className="flex w-full min-h-[300px] justify-center py-7">
        <PieChart series={chartData} options={chartOption} />
      </div>
      <div className="w-full">
        <Table autoHeight data={data} onRowClick={(v) => console.log(v)}>
          <Column align="start">
            <HeaderCell>Age</HeaderCell>
            <FirstCell dataKey="age" />
          </Column>
          <Column flexGrow={1} align="end">
            <HeaderCell>Qt.</HeaderCell>
            <Cell dataKey="qt" />
          </Column>
          <Column align="end">
            <HeaderCell>%</HeaderCell>
            <Cell dataKey="percent" />
          </Column>
        </Table>
      </div>
    </div>
  );
};

export default Distribution;
