import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Index";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [currentTheme, setCurrentTheme] = useState("dark");
  return (
    <div data-theme={currentTheme} className="min-w-[100%] min-h-[100vh]">
      <div className="container px-5">
        <Header />
        <Outlet context={[setCurrentTheme]} />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <ToastContainer />
    </div>
  );
}

export default App;
