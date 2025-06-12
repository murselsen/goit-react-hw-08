import css from "../AppBar/AppBar.module.css";

const Navigation = () => {
  return (
    <>
      <ul className={css.NavList}>
        <li className={css.NavItem}>
          <a href="/" className={css.NavLink}>
            Home
          </a>
        </li>
        <li className={css.NavItem}>
          <a href="/contacts" className={css.NavLink}>
            Contacts
          </a>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
