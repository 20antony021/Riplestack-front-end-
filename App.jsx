import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="main/*" element={<AdminLayout />} />
      <Route path="/" element={<Navigate to="/main" replace />} />
    </Routes>
  );
};

export default App;