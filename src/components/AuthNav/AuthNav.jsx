import css from "../AppBar/AppBar.module.css";

const AuthNav = () => {
  return (
    <>
      <ul className={css.NavList}>
        <li className={css.NavItem}>
          <a href="/register" className={css.NavLink}>
            Register
          </a>
        </li>
        <li className={css.NavItem}>
          <a href="/login" className={css.NavLink}>
            Log In
          </a>
        </li>
      </ul>
    </>
  );
};

export default AuthNav;
