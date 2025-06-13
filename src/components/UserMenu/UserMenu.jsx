import React from "react";
import css from "../AppBar/AppBar.module.css";

const UserMenu = () => {
  return (
    <>
      <ul className={css.NavList}>
        <li className={css.NavItem}>
          <a href="#" className={css.NavLink}>
            <span role="img" aria-label="user">
              👤
            </span>
            {"username"}
          </a>
        </li>
        <li className={css.NavItem}>
          <button className={css.NavButton}>LogOut</button>
        </li>
      </ul>
    </>
  );
};

export default UserMenu;
