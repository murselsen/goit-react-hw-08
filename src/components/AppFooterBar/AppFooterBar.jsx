import React from "react";
import css from "./AppFooterBar.module.css";

const AppFooterBar = () => {
  return (
    <footer className={css.FooterBar}>
      <h6>
        {"github"}
        <a
          href="https://github.com/murselsen"
          target="_blank"
          title="@murselsen"
        >
          {"@murselsen"}
        </a>
        <a
          href="https://github.com/murselsen/goit-react-hw-08"
          target="_blank"
          title="goit-react-hw-08"
        >
          {"/goit-react-hw-08"}
        </a>
      </h6>
    </footer>
  );
};

export default AppFooterBar;
