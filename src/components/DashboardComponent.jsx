import React from "react";
import { NavLink } from "react-router-dom";

const DashboardComponent = ({ children }) => {
  return (
    <div className="dashboard">
      <div className="dashboard-left">
        <div className="dashboard-left-links">
          <div className="dashboard-left-links-item">
            <NavLink
              to="/connection-strings"
              className={({ isActive, isPending }) =>
                isPending
                  ? "dashboard-left-links-item-pending"
                  : isActive
                  ? "dashboard-left-links-item-active"
                  : ""
              }
            >
              Connection Strings
            </NavLink>
          </div>
          <div className="dashboard-left-links-item">
            <NavLink
              to="/training-data"
              className={({ isActive, isPending }) =>
                isPending
                  ? "dashboard-left-links-item-pending"
                  : isActive
                  ? "dashboard-left-links-item-active"
                  : ""
              }
            >
              Training Data
            </NavLink>
          </div>
          <div className="dashboard-left-links-item">
            <NavLink to="/chat" className="dashboard-left-links-item-chat">
              + New Chat
            </NavLink>
          </div>
        </div>
      </div>
      <div className="dashboard-right">
        <div className="dashboard-right-heading">
          <div className="dashboard-right-heading-main">AHAM.ai</div>
          <div className="dashboard-right-heading-sub">
            Get data anywhere anytime
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default DashboardComponent;
