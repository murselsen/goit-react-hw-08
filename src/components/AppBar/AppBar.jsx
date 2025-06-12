import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import css from "./AppBar.module.css";

const AppBar = () => {
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
        <AuthNav />
      </nav>
    </header>
  );
};

export default AppBar;
