import React from "react";
import { BsCart3 } from "react-icons/bs";
import "./sidebar.css";
import { Link } from "react-router-dom";
import img2 from "../../assets/2.svg";
import img3 from "../../assets/3.svg";
import img4 from "../../assets/4.svg";
import img5 from "../../assets/5.svg";
import img6 from "../../assets/6.svg";
import img7 from "../../assets/7.svg";
import img8 from "../../assets/8.svg";
import img9 from "../../assets/9.svg";
import img10 from "../../assets/10.svg";
import img11 from "../../assets/11.svg";
import img12 from "../../assets/12.svg";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" />
          ADMIN
        </div>
        <span className="icons close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/" className="sidebar-link">
            <img src={img2} alt="" />
            Home
          </Link>
        </li>

        <li className="sidebar-list-item">
          <Link to="/" className="sidebar-link">
            <img src={img3} alt="" />
            Orders
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/" className="sidebar-link">
            <img src={img4} alt="" />
            Products
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/" className="sidebar-link">
            <img src={img5} alt="" />
            Delivery
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/" className="sidebar-link">
            <img src={img6} alt="" />
            Marketing
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/" className="sidebar-link">
            <img src={img7} alt="" />
            Analytics
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/" className="sidebar-link">
            <img src={img8} alt="" />
            Payouts
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/" className="sidebar-link">
            <img src={img9} alt="" />
            Discounts
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/" className="sidebar-link">
            <img src={img10} alt="" />
            Audience
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/" className="sidebar-link">
            <img src={img11} alt="" />
            Appearance
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/" className="sidebar-link">
            <img src={img12} alt="" />
            Plugings
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
