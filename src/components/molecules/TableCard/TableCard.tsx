import React from "react";
import "./TableCard.scss";
import { useAppSelector } from "../../../hooks/redux";
import { CardItem } from "../../atoms/CardItem/CardItem";
// import CardItem from "../../atoms/CardItem/CardItem";
interface TableRow {
  id: number;
  name: string;
  organization: string;
  address: string;
  worker: string;
  products: string;
}
export const TableCard = () => {
  const users = useAppSelector((state) => state.users.users);

  const tableData: TableRow[] = users.map((user: any) => ({
    id: user.id,
    name: user.name,
    organization: user.company.name,
    address: user.address.street,
    worker: user.username,
    products: user.email,
  }));

  let item = tableData[0];
  console.log("iteeeeeeeeeem", tableData);

  return (
    <div className="data-table-container-card">
      {tableData[0] && tableData.map((item: any) => <CardItem item={item} />)}
    </div>
  );
};
