import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import Posts from "views/admin/marketplace";
import Profile from "views/admin/profile";
import Analytic from "views/admin/analytics";
// import RTLDefault from "views/rtl/default";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdBarChart,
  MdPerson,
  MdSettings,
} from "react-icons/md";

const routes = [
  {
    name: "Dashboard",
    layout: "/main",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Posts",
    layout: "/main",
    path: "posts",
    icon: <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><path d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"/></svg>,
    component: <Posts />,
    secondary: true,
  },
  {
    name: "Analytics",
    layout: "/main",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "analytic",
    component: <Analytic />,
  },
  {
    name: "Settings",
    layout: "/main",
    path: "profile",
    icon: <MdSettings className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdPerson className="h-6 w-6" />,
    component: <SignIn />,
  }
];

export const specificRoutes = [
  {
    name: "Create New Post",
    layout: "/main",
    path: "posts/new"
  },
  {
    name: "Calendar",
    layout: "/main",
    path: "posts/calendar"
  }
];

export default routes;
