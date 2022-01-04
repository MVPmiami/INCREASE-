import React from "react";
import styles from "./style.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.leftSide}>
            <ul className={styles.list}>
              <li>Пункт 01</li>
              <li>Пункт 02</li>
              <li>Пункт 03</li>
              <li>Пункт 04</li>
              <li>Пункт 05</li>
              <li>Пункт 06</li>
              <li>Пункт 07</li>
            </ul>
            <ul className={styles.list}>
              <li>Пункт 08</li>
              <li>Пункт 09</li>
              <li>Пункт 10</li>
              <li>Пункт 11</li>
              <li>Пункт 12</li>
              <li>Пункт 13</li>
              <li>Пункт 14</li>
            </ul>
          </div>
          <div className={styles.center}>
            <ul className={styles.list}>
              <li>
                <a href="#">Поисковое продвижение сайтов</a>
              </li>
              <li>
                <a href="#">Тариф "Новый"</a>
              </li>
              <li>
                <a href="#">Тариф "Новый"</a>
              </li>
              <li>
                <a href="#">Тариф "Новый"</a>
              </li>
              <li>
                <a href="#">Тариф "Новый"</a>
              </li>
              <li>
                <a href="#">Тариф "Новый"</a>
              </li>
              <li>
                <a href="#">Тариф "Новый"</a>
              </li>
            </ul>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.block}></div>
            <div className={styles.block}></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
