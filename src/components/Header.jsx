import React from "react";
import Logo from "../assets/Logo.jpg";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="h-[12vh] flex justify-between items-center">
      <div>
        <button
          className="btn btn-warning rounded-md btn-sm md:btn-md"
          onClick={() => navigate("/new-idea")}
        >
          + New Idea
        </button>
      </div>
      <div>
        <h1 className="text-2xl font-bold hidden sm:block">Top 20 Ideas</h1>
      </div>
      <div className="w-[3rem] h-[3rem] overflow-hidden rounded-full">
        <img
          src={Logo}
          alt="Logo"
          loading="lazy"
          className="h-[100%] w-[100%] object-cover"
        />
      </div>
    </header>
  );
};

export default Header;
