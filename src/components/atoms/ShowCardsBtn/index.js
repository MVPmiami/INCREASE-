import React from "react";
import styles from "./style.module.scss";

const ShowCardsBtn = ({ personPerPage, changeAmountCards, amount }) => {
  return (
    <button
      className={`${styles.amountCards} ${
        personPerPage === amount ? styles.active : ""
      }`}
      onClick={() => {
        changeAmountCards(amount);
      }}
    >
      {amount}
    </button>
  );
};

export default ShowCardsBtn;