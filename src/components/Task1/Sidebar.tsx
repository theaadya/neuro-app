import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  
  return (
    <aside className="mt-40 text-2xl max-md:mt-10">
      <div className="pl-6 text-black max-md:pl-5">
        <button
          onClick={() => navigate("/setpriority")} 
          className="px-10 py-6 bg-rose-300 bg-opacity-50 rounded-[80px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 w-full text-left">
          Set Priority Level
        </button>
        <button className="px-16 py-6 mt-7 bg-rose-300 bg-opacity-50 rounded-[80px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 w-full text-left">
          Set Deadline
        </button>
      </div>
      <button className="px-16 pt-4 pb-1.5 mt-44 max-w-full text-white bg-black rounded-[80px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[309px] max-md:px-5 max-md:mt-10">
        chat with <br />
        NURO
      </button>
    </aside>
  );
};

export default Sidebar;
