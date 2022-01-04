import React from "react";
import styles from "./style.module.scss";

const Header = () => {
  return (
    <>
      <header>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.logo}></div>
            <div className={styles.contacts}></div>
            <div className={styles.more}>
              <a href="tel: +375293711041">+375 (29) 371-10-41</a>
              <a href="mailto: info@increase.by">info@increase.by</a>
              <a href="https://increase.by/">www.increase.by</a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
