import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "store";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import "rsuite/dist/rsuite.min.css";

import App from "./App";
import { AuthProvider } from "context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
    <ToastContainer />
  </BrowserRouter>
);
