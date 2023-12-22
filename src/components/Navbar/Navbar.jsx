import React, { useState } from "react";
import { BsPersonCircle, BsJustify } from "react-icons/bs";
import { Link} from "react-router-dom";
import "./navbar.css"
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
;
  return (
    <>
      <header className="header">
        <div className="menu-icon-header">
          <BsJustify className="icons" onClick={OpenSidebar} />
        </div>
        <div className="header-left">
          <Link to="/admin">
            <img src={''} alt="logo" />
          </Link>
        </div>
        <div className="header-right">
          <BsPersonCircle className="icons" />
        </div>
      </header>
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
    </>
  );
};

export default Navbar;
