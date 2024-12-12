import {useState} from "react";
import {IoIosArrowUp} from "react-icons/io";
import {TbLogout2} from "react-icons/tb";
import {Link} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import useRole from "../hooks/useRole";

const ResponsiveNavbar = () => {
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const {user, logOut} = useAuth();
  const [role] = useRole();

  const handleLogOut = async () => {
    try {
      await logOut();
      toast.success("User Logout Successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Logout Failed!");
    }
  };

  return (
    <nav className="flex items-center justify-between w-full bg-[#B0A289] relative">
      <h1 className="text-5xl font-bold pl-8">
        Japanese <span className="text-[#D74037]">Vocab</span>
      </h1>

      <ul className="items-center gap-5 text-lg text-white lg:flex hidden">
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

      <div className="flex items-center gap-4 pr-8">
        {user ? (
          <div
            className="flex items-center gap-2 cursor-pointer relative"
            onClick={() => setAccountMenuOpen((prev) => !prev)}
          >
            <img
              src={user?.photo}
              alt="avatar"
              className="w-9 h-9 rounded-full object-cover"
            />
            <h1 className="text-white font-medium hidden sm:block">
              {user?.displayName}
            </h1>

            <div
              className={`absolute top-[45px] right-0 bg-white rounded-md shadow-md p-3 transition-all duration-300 flex flex-col gap-2 ${
                accountMenuOpen
                  ? "opacity-100 translate-y-0 z-10"
                  : "opacity-0 translate-y-2 z-[-1]"
              }`}
            >
              <Link
                to="/dashboard"
                className={`flex items-center gap-2 p-2 text-gray-600 rounded-md hover:bg-gray-50 ${
                  role === "Admin" ? "" : "hidden"
                }`}
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogOut}
                className="flex items-center gap-2 p-2 text-red-500 rounded-md hover:bg-red-50"
              >
                <TbLogout2 /> Logout
              </button>
            </div>

            <IoIosArrowUp
              className={`transition-transform duration-300 text-gray-600 hidden sm:block ${
                accountMenuOpen ? "rotate-0" : "rotate-180"
              }`}
            />
          </div>
        ) : (
          <Link to="/login" className="text-white hover:text-[#D74037]">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default ResponsiveNavbar;
