import css from "../AppBar/AppBar.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <ul className={css.NavList}>
        <li className={css.NavItem}>
          <a href="/" className={css.NavLink}>
            Home
          </a>
        </li>
        {isLoggedIn && (
          <li className={css.NavItem}>
            <a href="/contacts" className={css.NavLink}>
              Contacts
            </a>
          </li>
        )}
      </ul>
    </>
  );
};

export default Navigation;
