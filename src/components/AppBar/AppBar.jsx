// Modules
import {  useSelector } from "react-redux";

// Components
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";

// Css
import css from "./AppBar.module.css";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={css.AppBar}>
      <nav className={css.Nav}>
        <Navigation />
        <div className={css.Logo}>
          <span role="img" aria-label="logo">
            📞
          </span>
          Phonebook
        </div>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </nav>
    </header>
  );
};

export default AppBar;
