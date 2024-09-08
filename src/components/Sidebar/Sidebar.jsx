import { useRef, useEffect } from "react";
import propTypes from "prop-types";
import Logo from "../Logo";
import { GoArrowLeft } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { LuTv } from "react-icons/lu";
import { IoPeopleOutline } from "react-icons/io5";
import { RiMovie2Fill } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";



const Sidebar = ({ sidebarOpen, onCloseSidebar }) => {
    const navigation = [
        {
          name: "Home",
          path: "/",
          icon: <IoHome className="w-5 h-5" />,
        },
        {
          name: "Movies",
          path: "/movies",
          icon: <RiMovie2Fill className="w-5 h-5" />,
        },
        {
          name: "Serial",
          path: "/serial",
          icon: <LuTv className="w-5 h-5" />,
        },
        {
          name: "People",
          path: "/people",
          icon: <IoPeopleOutline className="w-5 h-5" />,
        },
    ]
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        if (window.innerWidth < 1024 && sidebarOpen) {
          onCloseSidebar();
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen, onCloseSidebar]);

  return (
    <aside
      ref={sidebarRef}
      className={`absolute left-0 top-0 z-30 flex h-screen w-72 flex-col overflow-y-hidden bg-black/50 backdrop-blur-md duration-300 shadow-lg ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="w-full h-full overflow-y-auto p-4">
        <div className="flex justify-between items-center mb-7">
          <Logo />
          <button className="p-3 rounded-lg hover:bg-black/50 lg:hidden" onClick={onCloseSidebar}>
            <GoArrowLeft className="w-6 h-6 text-third" />
          </button>
        </div>
        <div className="flex flex-col gap-3 border-b border-secondary pb-4">
            {navigation.map((item, index) => (
                <NavLink
                onClick={onCloseSidebar}
                key={index}
                to={item.path}
                 className={
                    ({ isActive }) => (`p-4 rounded-lg  text-sm ${isActive ? "bg-accent text-white hover:bg-accent" : "bg-transparent text-white hover:bg-secondary"}`)
                    }>
                    <div className="flex items-center gap-3">
                        {item.icon}
                        <span className="font-semibold">{item.name}</span>
                    </div>
                </NavLink>
            ))}
        </div>
        <button className="p-4 rounded-lg hover:bg-black/50 mt-3 flex gap-3 items-center w-full text-white">
          <CiHeart className="w-6 h-6"/>
            Watchlist
        </button>
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  sidebarOpen: propTypes.bool.isRequired,
  onCloseSidebar: propTypes.func.isRequired,
};

export default Sidebar;
