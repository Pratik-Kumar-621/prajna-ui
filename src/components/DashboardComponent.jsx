import { IconButton, MenuItem, Select, Tooltip } from "@mui/material";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import ImageSVG from "../images/edit.svg";
import LogoImage from "../images/background.png";

const DashboardComponent = ({ children }) => {
  const location = useLocation();
  console.log(location);
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
                  : "dashboard-left-links-item-link"
              }
            >
              Database Connection
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
                  : "dashboard-left-links-item-link"
              }
            >
              Training Data
            </NavLink>
          </div>
          <div className="dashboard-left-links-item">
            <NavLink
              to="/chat"
              className={({ isActive, isPending }) =>
                isPending
                  ? "dashboard-left-links-item-chat-pending"
                  : isActive
                  ? "dashboard-left-links-item-chat-active"
                  : "dashboard-left-links-item-chat-link"
              }
            >
              <span>Chat Agent</span>
              <Tooltip title="New Chat">
                <IconButton>
                  <EditIcon fontSize="small" />
                  {/* <img src={ImageSVG} alt="" /> */}
                </IconButton>
              </Tooltip>
            </NavLink>
          </div>
        </div>
        <div className="dashboard-left-history">
          <div className="dashboard-left-history-label">Today</div>
          <hr />
          <div className="dashboard-left-history-item">
            give me the top performing roas with value
          </div>
        </div>
        {location.pathname === "/chat" && (
          <div className="dashboard-left-dropdown">
            <div className="dashboard-left-dropdown-item">
              <div className="dashboard-left-dropdown-item-name">Language</div>
              <div className="dashboard-left-dropdown-item-select">
                <Select
                  fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  defaultValue="english"
                  label="English"
                >
                  <MenuItem value="english">English</MenuItem>
                  <MenuItem value="dutch">Dutch</MenuItem>
                </Select>
              </div>
            </div>
            <div className="dashboard-left-dropdown-item">
              <div className="dashboard-left-dropdown-item-name">
                DB Connection
              </div>
              <div className="dashboard-left-dropdown-item-select">
                <Select
                  fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  defaultValue="sponsered"
                  label=""
                >
                  <MenuItem value="sponsered">SPDB</MenuItem>
                  <MenuItem value="sponsedred">SPffDB</MenuItem>
                </Select>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="dashboard-right">
        <div className="dashboard-right-heading">
          <div className="dashboard-right-heading-image">
            <img src={LogoImage} alt="" />
          </div>
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
