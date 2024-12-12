import {Outlet} from "react-router-dom";
import Navbar from "../shared/Navbar";

const Dashboard = () => {
  
  return (
    <div>
      <Navbar />
      <div className="bg-[#B0A289] w-1/5 h-screen">sidebar</div>
      <div className="flex-1 md:ml-64 p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
