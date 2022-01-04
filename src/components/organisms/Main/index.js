import React from "react";
import styles from "./style.module.scss";

const Main = () => {
  return (
    <>
      <main>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <aside className={styles.navigation}>
              <nav>
                <ul>
                  <li className={styles.active}>
                    <a href="#">Создание сайтов</a>
                  </li>
                  <li>
                    <a href="#">Изготовление сайтов "под ключ"</a>
                  </li>
                  <li>
                    <a href="#">Как мы работаем</a>
                  </li>
                  <li>
                    <a href="#">Интеграция с amoCrm</a>
                  </li>
                  <li>
                    <a href="#">Поддержка сайтов</a>
                  </li>
                  <li>
                    <a href="#">Создание сайтов на Wordpress</a>
                  </li>
                  <li>
                    <a href="#">Дизайн сайтов</a>
                  </li>
                  <li>
                    <a href="#">Редизайн сайтов</a>
                  </li>
                  <li>
                    <a href="#">Интернет магазины</a>
                  </li>
                  <li>
                    <a href="#">Создание логотипов</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </nav>
            </aside>
            <div className={styles.content}>
              <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque faucibus, nisi eget suscipit finibus, dui purus
                suscipit ligula, ut dictum felis tellus sit amet dui. Phasellus
                tincidunt tellus id enim vestibulum blandit. Vivamus bibendum mi
                eu elit rhoncus tristique. Proin sit amet lacus ut massa
                vestibulum vestibulum sed et felis. Nunc quis finibus nisl.
                Donec dignissim sagittis pulvinar. Nulla placerat ut justo a
                vestibulum. Nunc non bibendum diam, non eleifend ante. Nam in
                mauris urna. Duis finibus gravida iaculis. Proin malesuada metus
                ut pharetra cursus. Suspendisse potenti. Fusce ultrices, sem
                quis interdum lacinia, libero tortor placerat lectus, eu
                convallis diam nulla a tortor.
              </div>
              <div className={styles.examples}>
                <div className={styles.example}></div>
                <div className={styles.example}></div>
                <div className={styles.example}></div>
                <div className={styles.example}></div>
                <div className={styles.example}></div>
                <div className={styles.example}></div>
                <div className={styles.example}></div>
              </div>
              <div className={styles.wrapperText}>
                <div className={styles.textCopy}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque faucibus, nisi eget suscipit finibus, dui purus
                  suscipit ligula, ut dictum felis tellus sit amet dui.
                  Phasellus tincidunt tellus id enim vestibulum blandit. Vivamus
                  bibendum mi eu elit rhoncus tristique. Proin sit amet lacus ut
                  massa vestibulum vestibulum sed et felis. Nunc quis finibus
                  nisl.
                </div>
                <div className={styles.textCopy}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque faucibus, nisi eget suscipit finibus, dui purus
                  suscipit ligula, ut dictum felis tellus sit amet dui.
                  Phasellus tincidunt tellus id enim vestibulum blandit. Vivamus
                  bibendum mi eu elit rhoncus tristique. Proin sit amet lacus ut
                  massa vestibulum vestibulum sed et felis. Nunc quis finibus
                  nisl.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
