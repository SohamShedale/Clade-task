import { IoIosNotificationsOutline } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import Navbar from "../Menu/Navbar";
import { Outlet } from "react-router-dom";
import atlassianImage from '../../assets/atlassian.png'

const Header = () => {

  return (
    <>
      <div className="flex justify-between items-center py-5 px-12">
        {/* logo */}
        <div className="bg-gray-300 py-2 px-3 text-orange-500">
          <span className="font-semibold">Logo</span>
        </div>

        {/* nav */}
        <Navbar />

        {/* notification, menu */}
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="relative">
            <IoIosNotificationsOutline className="text-2xl" />
            <svg className="w-[9px] h-[19px] absolute -top-3 left-3">
              <circle r="3" cx="5" cy="15" fill="#dc4a2d" />
            </svg>
          </span>
          <div className="flex items-center">
            <img
              className="w-7 h-7 rounded-full"
              src={atlassianImage}
              alt="atlassian-logo"
            />
            <MdKeyboardArrowDown />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
