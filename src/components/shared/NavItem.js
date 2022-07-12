import React from "react";

const NavItem = (props) => {
  return (
    <li className={`nav-item ${props.activeName === props.name ? "active" : ""}`}>
      <a className="nav-link" name={props.name} onClick={props.onClick}>
        {props.displayName}
      </a>
    </li>
  );
}

export default NavItem