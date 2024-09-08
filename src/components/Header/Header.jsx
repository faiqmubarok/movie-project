import Logo from "../Logo";
import { useEffect, useRef, useState } from "react";
import propTypes from "prop-types";
import {
  IoIosSearch,
  IoIosClose,
  IoIosNotificationsOutline,
} from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

import Search from "../Search/Search";
import Notification from "./Notification";

const Header = ({ onSidebarOpen }) => {
  const [searchActive, setSearchActive] = useState(false);
  const [notificationsActive, setNotificationsActive] = useState(false);
  const [notificationRead, setNotificationRead] = useState(true);

  const notificationRef = useRef(null);
  const notificationButtonRef = useRef(null); 

  useEffect(() => {
    setNotificationRead(true);
  }, [])

  useEffect(() => {

    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target) &&
        notificationButtonRef.current &&
        !notificationButtonRef.current.contains(event.target)
      ) {
        setNotificationsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [notificationsActive]);

  function handleActiveSearch() {
    setSearchActive(!searchActive);
    setNotificationsActive(false);
  }

  function handleCloseActiveSearch() {
    setSearchActive(false);
  }

  function handleActiveNotification() {
    setNotificationsActive(!notificationsActive);
    setNotificationRead(false);
    setSearchActive(false);
  }

  return (
    <header className="sticky top-0 z-20 flex w-full bg-black/50 backdrop-blur-md shadow-lg p-4 flex-col gap-2 ">
      <div className="flex justify-between items-center w-full lg:justify-end">
        <div className="flex-1">
          <button
            className="p-3 rounded-lg hover:bg-secondary lg:hidden"
            onClick={onSidebarOpen}
          >
            <RxHamburgerMenu className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="lg:hidden block mx-5">
          <Logo />
        </div>

        <div className="flex gap-1.5 flex-1 justify-end">
          <button
            className="p-3 rounded-lg hover:bg-secondary lg:hidden"
            onClick={handleActiveSearch}
          >
            {searchActive ? (
              <IoIosClose className="w-6 h-6 text-accent" />
            ) : (
              <IoIosSearch className="w-6 h-6 text-white" />
            )}
          </button>

          <div className="max-w-3xl min-w-80 hidden lg:block">
            <Search
              placeholder={"movie"}
              typeSearch={"movie"}
              onCloseActiveSearch={handleCloseActiveSearch}
            />
          </div>

          <button
            className="p-3 rounded-lg hover:bg-secondary relative group"
            onClick={handleActiveNotification}
            ref={notificationButtonRef}
          >
            <IoIosNotificationsOutline className="w-6 h-6 text-white" />
            <span
              className={`w-2 h-2 bg-accent absolute top-2 right-2 rounded-full ${
                notificationRead ? " animate-pulse" : "opacity-0"
              }`}
            ></span>
          </button>
        </div>

        {/* Dropdown Notification */}
        {notificationsActive && (
          <div ref={notificationRef}>
            <Notification />
          </div>
        )}
      </div>
      {searchActive && (
        <Search
          placeholder={"movie"}
          typeSearch={"movie"}
          onCloseActiveSearch={handleCloseActiveSearch}
        />
      )}
    </header>
  );
};

Header.propTypes = {
  onSidebarOpen: propTypes.func,
};

export default Header;
