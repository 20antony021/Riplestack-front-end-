import { createSlice } from "@reduxjs/toolkit";

export const trafficSlice = createSlice({
  name: "traffic",
  initialState: {
    chartDataXX: null,
    chartOptionXX: null,
  },
  reducers: {
    setTraffic: (state, action) => {
      state.chartDataXX = action.payload.data;
      state.chartOptionXX = action.payload.option;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setTraffic } = trafficSlice.actions;

export default trafficSlice.reducer;
