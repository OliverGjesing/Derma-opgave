import React from "react";
import { NavLink } from 'react-router-dom'
import { slide as Menu } from "react-burger-menu";
import "./Menu.css"

const Sidebar = (props) => {
  return (
    <div className="burgermenu">
    <Menu {...props}  >
    <div className="menuknapper">
    <NavLink className="menu-item" to="/">Mine projekter</NavLink>
    <br/>

    <NavLink className="menu-item" to="/omMig">Om mig</NavLink>
    </div>
    </Menu></div>
  );
};
export default Sidebar