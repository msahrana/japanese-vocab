import {useState} from "react";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import {TbLogout2} from "react-icons/tb";
import {CiMenuFries} from "react-icons/ci";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import {Link} from "react-router-dom";

const ResponsiveNavbar = () => {
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [productMobileMegaMenu, setProductMobileMegaMenu] = useState(false);
  const [megaMenuSubItem, setMegaMenuSubItem] = useState("");

  return (
    <nav className="flex items-center justify-between w-full relative bg-[#B0A289]">
      <h1 className="text-5xl font-bold pl-8">
        Bunpo <span className="text-[#D74037]">Master</span>
      </h1>
      <ul className="items-center gap-[20px] text-[1rem] text-white lg:flex hidden">
        <li>
          <Link
            className="hover:text-[#D74037] hover:bg-[#a19480] px-2 py-1 rounded"
            to="/lessons"
          >
            Lessons
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-[#D74037] hover:bg-[#a19480] px-2 py-1 rounded"
            to="/tutorials"
          >
            Tutorials
          </Link>
        </li>
      </ul>

      <div className="flex items-center gap-[15px]">
        <div
          className="flex items-center gap-[10px] cursor-pointer relative"
          onClick={() => setAccountMenuOpen(!accountMenuOpen)}
        >
          <div>
            <img
              src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1724605498~exp=1724609098~hmac=7f6fc106bae2c17b0c93af1b2e5483d9d8368f3e51284aaec7c7d50590d2bae5&w=740"
              alt="avatar"
              className="w-[35px] h-[35px] rounded-full object-cover"
            />
          </div>

          <h1 className="text-[1rem] font-[400] text-white sm:block hidden">
            Dhon Deo
          </h1>

          <div
            className={`${
              accountMenuOpen
                ? "translate-y-0 opacity-100 z-[1]"
                : "translate-y-[10px] opacity-0 z-[-1]"
            } bg-white w-max rounded-md boxShadow absolute top-[45px] right-0 p-[10px] flex flex-col transition-all duration-300 gap-[5px]`}
          >
            <Link
              to="/dashboard"
              className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-gray-600 hover:bg-gray-50"
            >
              Dashboard
            </Link>
            <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-gray-600 hover:bg-gray-50">
              Settings
            </p>

            <div className="mt-3 border-t border-gray-200 pt-[5px]">
              <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-red-500 hover:bg-red-50">
                <TbLogout2 />
                Logout
              </p>
            </div>
          </div>

          <IoIosArrowUp
            className={`${
              accountMenuOpen ? "rotate-0" : "rotate-[180deg]"
            } transition-all duration-300 text-gray-600 sm:block hidden`}
          />
        </div>

        <CiMenuFries
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="text-[1.8rem] text-[#424242]c cursor-pointer lg:hidden flex"
        />
      </div>

      <aside
        className={` ${
          mobileSidebarOpen
            ? "translate-x-0 opacity-100 z-20"
            : "translate-x-[200px] opacity-0 z-[-1]"
        } lg:hidden bg-white boxShadow p-4 text-center absolute top-[55px] right-0 sm:w-[300px] w-full rounded-md transition-all duration-300`}
      >
        <ul className="items-start gap-[20px] text-[1rem] text-gray-600 flex flex-col">
          <li
            onClick={() => setProductMobileMegaMenu(!productMobileMegaMenu)}
            className="hover:text-[#3B9DF8] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]"
          >
            Products
            <IoIosArrowDown
              className={`${
                productMobileMegaMenu ? "rotate-0" : "rotate-[180deg]"
              } text-gray-600 group-hover:text-[#3B9DF8] transition-all duration-300`}
            />
          </li>

          {/* product mega menu */}
          <div
            onClick={() => setMegaMenuSubItem("more_product")}
            className={`${
              productMobileMegaMenu ? "hidden" : "block"
            } group font-[500] ml-6`}
          >
            <h4 className="text-left flex items-center gap-[5px]">
              More Products
              <MdOutlineKeyboardArrowRight className="text-[1.2rem]" />
            </h4>

            <ul
              className={`${
                megaMenuSubItem === "more_product" ? "flex" : "hidden"
              } pl-6 mt-3 font-[400] items-start flex-col gap-[10px] text-gray-600`}
            >
              <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-poin ter capitalize">
                Demo App
              </li>
              <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-poin ter capitalize">
                CRM
              </li>
              <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-poin ter capitalize">
                CMS
              </li>
            </ul>
          </div>

          <div
            onClick={() => setMegaMenuSubItem("ecosystem")}
            className={`${
              productMobileMegaMenu ? "hidden" : "block"
            } font-[500] ml-6`}
          >
            <h4 className="text-left flex items-center gap-[5px]">
              Ecosystem
              <MdOutlineKeyboardArrowRight className="text-[1.2rem]" />
            </h4>

            <ul
              className={`${
                megaMenuSubItem === "ecosystem" ? "flex" : "hidden"
              } pl-6 mt-3 font-[400] items-start flex-col gap-[10px] text-gray-600`}
            >
              <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-poin ter capitalize">
                Directory
              </li>
              <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-poin ter capitalize">
                Bookings
              </li>
              <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-poin ter capitalize">
                User feedback
              </li>
              <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-poin ter capitalize">
                Task Manager
              </li>
            </ul>
          </div>

          <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-poin ter capitalize">
            Features
          </li>
          <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-pointer capitalize">
            Support
          </li>
        </ul>
      </aside>
    </nav>
  );
};

export default ResponsiveNavbar;
