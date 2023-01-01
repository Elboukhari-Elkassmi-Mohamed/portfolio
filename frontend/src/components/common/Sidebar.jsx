import { Link } from "react-router-dom";
import React from "react";

function Sidebar() {
  

  return (
    <div className="sidebar">
      <div className="logo-details">
        <i className="bx bx-store-alt"></i>
        <span className="logo_name">Portfolio</span>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/admin/dashboard">
            <i className="bx bx-grid-alt"></i>
            <span className="links_name">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/sectionOne">
            <i className="bx bx-box"></i>
            <span className="links_name">SectionOne</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/orders">
            <i className="bx bx-book-alt"></i>
            <span className="links_name">SectionTwo</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/categories">
            <i className="bx bx-category"></i>
            <span className="links_name">SectionThree</span>
          </Link>
        </li>

        <li className="log_out">
          <p>
            <i className="bx bx-log-out"></i>
            <span className="links_name">Log out</span>
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
