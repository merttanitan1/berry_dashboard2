import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <Sidebar>
      <Menu>
        <MenuItem component={<Link to="/statistics" />}> İstatistik</MenuItem>
        <MenuItem component={<Link to="/data" />}> Data</MenuItem>
        <MenuItem component={<Link to="/charts" />}> Grafikler</MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default Dashboard;
