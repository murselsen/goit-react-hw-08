import React from "react";
import { useSelector } from "react-redux";

// Redux selectors
import { selectAuthUser } from "../../redux/auth/selectors";
// Styles
import css from "../AppBar/AppBar.module.css";

const UserMenu = () => {
  const { name } = useSelector(selectAuthUser);

  return (
    <>
      <ul className={css.NavList}>
        <li className={css.NavItem}>
          <a href="#" className={css.NavLink}>
            <span role="img" aria-label="user">
              👤
            </span>
            {name}
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
