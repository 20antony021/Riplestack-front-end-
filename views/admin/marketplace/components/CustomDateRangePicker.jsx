import React from "react";
import { DateRangePicker, SelectPicker } from "rsuite";
import moment from "moment";

const CustomDateRangePicker = () => {
  const data = ["Weekly", "Monthly", "Yearly"].map((item) => ({
    label: item,
    value: item,
  }));
  const handleDatePicker = (data) => {
    if (Array.isArray(data)) {
      console.log(data[0]);
      const utcDate = moment(data[0]).utc().format(); // Convert to UTC
      console.log(utcDate);
    }
  };
  return (
    <div className="flex items-center">
      <SelectPicker
        data={data}
        searchable={false}
        style={{ width: 100 }}
        placeholder="Period"
        className="mr-2"
      />
      <DateRangePicker
        onChange={handleDatePicker}
        format="MM/dd/yyyy"
        character=" – "
        placement="bottomEnd"
      />
    </div>
  );
};

export default CustomDateRangePicker;
