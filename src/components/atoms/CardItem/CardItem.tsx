import React from "react";
import { Eye } from "../../../assets/icons/warehouses/Eye";
// import { Eye, MoreVertical } from "lucide-react";
// InfoCard.scss styles are embedded below
import "./CardItem.scss";

interface TableRow {
  id: number;
  name: string;
  organization: string;
  address: string;
  worker: string;
  products: string;
}

export const CardItem = ({ item }: { item: TableRow }) => {
  console.log("item", item);

  const cardData = [
    { label: "H/H", value: item.id.toString() },
    { label: "Name", value: item.name },
    { label: "Organization", value: item.organization },
    { label: "Address", value: item.address },
    { label: "Worker", value: item.worker },
    { label: "Products", value: item.products, isLink: true },
  ];

  return (
    <div className="info-card">
      <div className="card-header">
        <button className="icon-button">
          <Eye />
        </button>
        <span className="icon-button">
          <button className="action-btn menu-btn">⋮</button>
        </span>
      </div>

      <div className="card-content">
        {cardData.map((item, index) => (
          <div key={index} className="info-row">
            <span className="label">{item.label}</span>
            <span className={`value ${item.isLink ? "link" : ""}`}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
