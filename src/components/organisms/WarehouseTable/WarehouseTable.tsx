import TableController from "../../molecules/TableController/TableController";
import { TableRow } from "../../molecules/TableRow/TableRow";
// import "./WarehouseTable.module.scss";
import styles from "./WarehouseTable.module.scss";

export const WarehouseTable = () => {
  return (
    <div className={styles.container}>
      <TableController />
      <TableRow />
      {/* WarehouseTable */}
    </div>
  );
};
