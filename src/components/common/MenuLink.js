import React from "react";
import { Link, useLocation } from "react-router-dom";

const MenuLink = ({ url, name, onClick }) => {
  const location = useLocation();
  var isActive = location.pathname === url;
  var className = isActive ? "link-item link-item-active" : "link-item";
  return onClick === undefined ? (
    <Link to={url} className={className}>
      {name}
    </Link>
  ) : (
    <button className={className} onClick={onClick}>
      {name}
    </button>
  );
};

export default MenuLink;
