import React from "react";
import { Row } from "../../../assets/icons/warehouses/Row";
import { Card } from "../../../assets/icons/warehouses/Card";
import styles from "./Listcard.module.scss";

export const Listcard = ({ setSelected, selected }: any) => {
  // const [selected, setSelected] = React.useState<"row" | "card">("row");

  return (
    <div className={styles.container}>
      <button
        onClick={() => setSelected("row")}
        className={`${styles.item} ${styles.left} ${
          selected === "row" ? styles.selected : ""
        }`}
      >
        <Row selected={selected === "row"} />
      </button>
      <button
        onClick={() => setSelected("card")}
        className={`${styles.item} ${styles.right} ${
          selected === "card" ? styles.selected : ""
        }`}
      >
        <Card selected={selected === "card"} />
      </button>
    </div>
  );
};
