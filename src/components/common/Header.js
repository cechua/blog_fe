import React from "react";
import MenuLink from "./MenuLink";
import localStorageToken from "../../util/localStorageToken";
const Header = () => {
  const token = localStorageToken.getToken("token");
  const logoutHandler = () => {
    if (token !== null) {
      localStorageToken.removeToken("token");
    }
    window.location.href = "/login";
  };
  return (
    <div className="header">
      <span>Blogs Board</span>
      <div className="header-menu">
        <MenuLink url="/home" name="Home" />
        {token && <MenuLink url="/post/create" name="Add a Post" />}
        {!token && <MenuLink url="/login" name="Login" />}
        {token && (
          <MenuLink
            url="/logout"
            name="Logout"
            onClick={() => logoutHandler()}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
