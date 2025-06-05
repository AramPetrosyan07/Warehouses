import React from "react";
import { ExportArrow } from "../../../assets/icons/warehouses/ExportArrow";
import { Text } from "../typography/Text/Text";
import styles from "./Export.module.scss";

const Export = () => {
  return (
    <button className={styles.export}>
      <ExportArrow />
      <Text
        variant="body2"
        // weight="medium"
        customClassName={styles.dark_blue_50}
      >
        Export PDF
      </Text>
    </button>
  );
};

export default Export;
