import React, {
  Suspense,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import TableController from "../../molecules/TableController/TableController";
import styles from "./WarehouseTable.module.scss";
import { useAppSelector } from "../../../hooks/redux";
import { Loading } from "../../atoms/Loading/Loading";

const TableCard = React.lazy(() =>
  import("../../molecules/TableCard/TableCard").then((module) => ({
    default: module.TableCard,
  }))
);
const TableRow = React.lazy(() =>
  import("../../molecules/TableRow/TableRow").then((module) => ({
    default: module.TableRow,
  }))
);

type ViewType = "row" | "card";

const getInitialView = (): ViewType => {
  const stored = localStorage.getItem("tableView");
  return stored === "row" || stored === "card" ? stored : "row";
};

export const WarehouseTable = () => {
  const loading = useAppSelector((state) => state.users.loading);

  const [selected, setSelected] = useState<ViewType>(getInitialView);

  const handleViewChange = useCallback((view: ViewType) => {
    setSelected(view);
    localStorage.setItem("tableView", view);
  }, []);

  // Optional: Sync localStorage across browser tabs
  useEffect(() => {
    const syncView = (e: StorageEvent) => {
      if (
        e.key === "tableView" &&
        (e.newValue === "row" || e.newValue === "card")
      ) {
        setSelected(e.newValue);
      }
    };
    window.addEventListener("storage", syncView);
    return () => window.removeEventListener("storage", syncView);
  }, []);

  return (
    <div className={styles.container}>
      <TableController setSelected={handleViewChange} selected={selected} />

      <Suspense fallback={<Loading />}>
        {selected === "row" ? <TableRow /> : <TableCard />}
      </Suspense>
    </div>
  );
};
