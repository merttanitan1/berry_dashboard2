import React, { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {Chart1Content, Chart2Content, DashboardContent, UsersContent} from './siders';


import { Toggle } from "../";

import "./dashboard.css";

const Dashboard = () => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const [selectedMenuItem, setSelectedMenuItem] = useState("");

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };


  return (
    <div className="container">
      <header>
        <Toggle handleChange={toggleTheme} isChecked={theme === "dark"} />
      </header>
      <Sidebar className="sidebar" style={{ backgroundColor: "green" }}>
      <Menu>
          <MenuItem>
            <h2>Admin</h2>
          </MenuItem>
          <SubMenu label="Charts">
            <MenuItem onClick={() => handleMenuItemClick("Chart 1")}>Chart 1</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("Chart 2")}>Chart 2</MenuItem>
          </SubMenu>
          <MenuItem onClick={() => handleMenuItemClick("Dashboard")}>Dashboard</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Users")}>Users</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        {selectedMenuItem === "Chart 1" && <Chart1Content />}
        {selectedMenuItem === "Chart 2" && <Chart2Content />}
        {selectedMenuItem === "Dashboard" && <DashboardContent />}
        {selectedMenuItem === "Users" && <UsersContent />}
      </main>
    </div>
  );
};

export default Dashboard;
