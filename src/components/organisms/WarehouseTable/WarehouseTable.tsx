import { useState } from "react";
import { TableCard } from "../../molecules/TableCard/TableCard";
import TableController from "../../molecules/TableController/TableController";
import { TableRow } from "../../molecules/TableRow/TableRow";
// import "./WarehouseTable.module.scss";
import styles from "./WarehouseTable.module.scss";

type ViewType = "row" | "card";

export const WarehouseTable = () => {
  const [selected, setSelected] = useState<ViewType>(
    () => (localStorage.getItem("tableView") as ViewType) || "row"
  );

  const handleViewChange = (view: ViewType) => {
    setSelected(view);
    localStorage.setItem("tableView", view);
  };

  return (
    <div className={styles.container}>
      <TableController setSelected={handleViewChange} selected={selected} />
      {selected === "row" ? <TableRow /> : <TableCard />}
      {/* <TableRow /> */}
      {/* <TableCard /> */}
    </div>
  );
};
