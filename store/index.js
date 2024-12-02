import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import platformReducer from "./slices/platforms";
import trafficReducer from "./slices/traffic";

export default configureStore({
  reducer: {
    auth: authReducer,
    platforms: platformReducer,
    traffic: trafficReducer
  },
});
