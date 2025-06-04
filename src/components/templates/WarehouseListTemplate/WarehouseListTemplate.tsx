import React from "react";
import { HeaderNav } from "../../organisms/HeaderNav/HeaderNav";
import { WarehouseTable } from "../../organisms/WarehouseTable/WarehouseTable";

export const WarehouseListTemplate = () => {
  return (
    <div>
      <HeaderNav />
      <WarehouseTable />
    </div>
  );
};
