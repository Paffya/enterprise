import "../App.css"
import React from "react";
import { Link } from "react-router-dom"

const DropdownMenu = () => {
  return (
    <div className="dropdown-menu" style={{position:'absolute' }}>
      <ul className="menudrop">
      <li style={{color:'black'}}><Link to={'./'}>Menu 1</Link></li>
        <li style={{color:'black'}}><Link to={'./'}>Menu 2</Link></li>
        <li style={{color:'black'}}><Link to={'./'}>Menu 3</Link></li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
