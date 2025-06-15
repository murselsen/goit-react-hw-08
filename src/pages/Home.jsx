import React from "react";
import pageCss from './styles/Page.module.css';
import css from "./styles/Home.module.css";

// Redux
import { useSelector } from "react-redux";

import { selectAuthUser } from "../redux/auth/selectors";
const Home = () => {
  const user = useSelector(selectAuthUser);
  return (
    <div className={pageCss.Container}>
      <div className={css.Home}>
        <div className={css.HomeRow}>
          {user?.name ? (
            <h1 className={css.Title}>Welcome, {user.name}! 👋</h1>
          ) : (
            <h1 className={css.Title}>
              Welcome to the PhoneBook Application 📞
            </h1>
          )}

          <br />
          <p className={css.Description}>
            {user?.name
              ? 'Click on the "Contacts" tab above to browse your phone book.'
              : "Please login or register to continue."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
