import { axiosApi } from "config";
import React, { createContext, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Loader } from "rsuite";
import { login } from "store/slices/auth";

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [checking, setChecking] = useState(false);
  const auth = useSelector((state) => state.auth);
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const token = localStorage.getItem("Riplestack_info");
  axiosApi.defaults.headers.common["Authorization"] = token;

  //   useEffect(() => {
  //     console.log(token);
  //     console.log("token is set in header")
  //     if (!token) {
  //       navigator("/auth/sign-in");
  //     } else if (token && !auth.user) {
  //       setChecking(true);
  //       axiosApi
  //         .post("/api/user/info", {})
  //         .then((res) => {
  //           const { platforms, token: newToken, user } = res.data;
  //           axiosApi.defaults.headers.common["Authorization"] = newToken;
  //           localStorage.setItem("Riplestack_info", newToken);
  //           dispatch(login({ platforms, token: newToken, user }));
  //           setChecking(false);
  //         })
  //         .catch(() => {
  //           console.log("3333333333333333333333333333");
  //           toast.error("Please Log In");
  //           navigator("/auth/sign-in");
  //           setChecking(false);
  //         });
  //     }
  //   }, [auth]);

  return (
    <AuthContext.Provider value={{ auth }}>
      {useMemo(() => {
        if (
          window.location.pathname === "/auth/sign-in" ||
          (token && auth.user)
        )
          return children;
        if (!token || token === null) {
          window.location.pathname = `/auth/sign-in`
          return null;
        } else if (!auth.user) {
          setChecking(true);
          axiosApi
            .post("/api/user/info", {})
            .then((res) => {
              const { platforms, token: newToken, user } = res.data;
              axiosApi.defaults.headers.common["Authorization"] = newToken;
              localStorage.setItem("Riplestack_info", newToken);
              dispatch(login({ platforms, token: newToken, user }));
              setChecking(false);
            })
            .catch(() => {
              toast.error("Please Log In");
              window.location.pathname = `/auth/sign-in`
              setChecking(false);
            });
        } else if (auth.user) {
          return children;
        }
        return null;
      }, [auth])}
      {checking && (
        <div className="lef-0 fixed bottom-0 right-0 top-0 z-[1001] flex h-[100vh] w-[100vw] items-center justify-center bg-[#000] bg-opacity-70">
          <Loader
            size="lg"
            inverse
            center
            content={<div className="text-xl">Authenticating...</div>}
          />
        </div>
      )}
    </AuthContext.Provider>
  );
};
