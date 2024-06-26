import { PiHandCoinsLight } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { FiBriefcase, FiMessageSquare } from "react-icons/fi";

const Navbar = () => {
  const links = [
    { to: "jobs", label: "Jobs", icon: <FiBriefcase /> },
    { to: "messages", label: "Messages", icon: <FiMessageSquare /> },
    { to: "payments", label: "Payments", icon: <PiHandCoinsLight /> }
  ];
  const commonStyle = 'flex items-center gap-1 py-2 px-3 rounded-full font-medium';
  const activeStyle = "bg-[#dc4a2d] text-white border-2 border-[#fcb4a5]";
  const inActiveStyle = "text-gray-400";

  return (
    <>
      <nav className="w-[60vh] flex justify-between border border-gray-300 rounded-full p-2">
        {
          links.map(link => (
            <NavLink key={link.to} to={link.to} className={({isActive}) => `${commonStyle} ${isActive ? activeStyle : inActiveStyle}`}>
              <span className="relative">
                {link.icon}
                {link.to == 'messages' ? <svg className="w-[9px] h-[19px] absolute -top-3 left-2">
                  <circle r="3" cx="5" cy="15" fill="#dc4a2d" />
                </svg> : null}
              </span>
              {link.label}
            </NavLink>
          ))
        }
      </nav>
    </>
  );
};

export default Navbar;
