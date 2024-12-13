import {useState} from "react";
import {Link} from "react-router-dom";
import logo from "/small-logo.png";
import {AiOutlineBars} from "react-icons/ai";
import MenuItem from "./MenuItem";
import useAuth from "../hooks/useAuth";
import {MdDashboardCustomize} from "react-icons/md";
import {GrLogout} from "react-icons/gr";
import AdminMenu from "./AdminMenu";
import toast from "react-hot-toast";

const Sidebar = () => {
  const [isActive, setActive] = useState(false);
  const {logOut} = useAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
      toast.success("User Logout Successfully!");
    } catch (error) {
      
      toast.error("Logout Failed!");
    }
  };

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                width="100"
                height="100"
                className="w-full rounded-lg"
              />
            </Link>
          </div>
        </div>
        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#B0A289] w-72 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex p-2 bg-slate-400 shadow-lg rounded-lg justify-center items-center mx-auto">
              <Link to="/">
                <img
                  src={logo}
                  alt="logo"
                  width="100"
                  height="100"
                  className="w-full rounded-lg"
                />
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/*  Menu Items */}
            <nav>
              {/* Dashboard */}
              <MenuItem
                label="AdminDashboard"
                address="/dashboard"
                icon={MdDashboardCustomize}
              />
              <AdminMenu />
            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* logout */}
          <button
            onClick={handleLogOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
