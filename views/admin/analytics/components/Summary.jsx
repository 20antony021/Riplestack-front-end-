import React, { useEffect, useState } from "react";
import { SelectPicker } from "rsuite";

import MetricItem from "./MetricItem";
import { axiosApi } from "config";
import axios from "axios";
// import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Summary = ({ account }) => {
  const periods = ["Weekly", "Monthly", "Yearly"].map((item) => ({
    label: item,
    value: item,
  }));

  const [duration, setDuration] = useState("Weekly");
  const [metrics, setMetrics] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    if (!duration) {
      toast.warn("Please choose a duration");
    } else {
      axiosApi
        .post("/api/user/analytic/overview", { duration, account })
        .then((res) => {
          setMetrics(res.data.result);
        })
        .catch((err) => {
          if (axios.isAxiosError(err)) {
            if ([401, 403].includes(err.response.status)) {
              navigator("/auth/sign-in");
            }
          }
          console.log(err);
        });
    }
  }, [duration, account]);

  return (
    <div className="h-full w-full">
      <div className="flex items-center justify-between py-3">
        <div className="text-lg font-bold">Summary Metrics</div>
        <div className="flex">
          <SelectPicker
            data={periods}
            searchable={false}
            style={{ width: 100 }}
            placeholder="Period"
            defaultValue="Weekly"
            onChange={(v) => setDuration(v)}
          />
        </div>
      </div>
      <div className="text-md text-[#6D6B85]">
        View your key profile performance metrics from the repoting
      </div>
      <div className="mt-7 flex w-full">
        {metrics.length > 0 &&
          metrics.map((item, id) => (
            <MetricItem
              key={`metric-item-${id}`}
              classNames={`w-1/5`}
              last={id === 4}
              title={item.name}
              value={item.value}
              rise={item.rise}
            />
          ))}
      </div>
    </div>
  );
};

export default Summary;
