import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
const Button = ({
  text,
  onClick = () => null,
  className = "",
  isLink = false,
  urlLink = "",
}) => {
  return isLink && urlLink ? (
    <Link to={urlLink} className={clsx("button-base", className)}>
      {text}
    </Link>
  ) : (
    <button className={clsx("button-base", className)} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
