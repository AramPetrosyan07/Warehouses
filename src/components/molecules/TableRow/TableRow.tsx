import React, { useState } from "react";
import "./TableRow.scss";
import { Eye } from "../../../assets/icons/warehouses/Eye";
import { useAppSelector } from "../../../hooks/redux";

interface TableRow {
  id: number;
  name: string;
  organization: string;
  address: string;
  worker: string;
  products: string;
}

export function TableRow() {
  const users = useAppSelector((state) => state.users.users);
  const [sortColumn, setSortColumn] = useState<string>("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 10;

  const tableData: TableRow[] = users.map((user: any) => ({
    id: user.id,
    name: user.name,
    organization: user.company.name,
    address: user.address.street,
    worker: user.username,
    products: user.email,
  }));

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const getSortArrows = (column: string) => {
    const isActive = sortColumn === column;
    return (
      <span className={`sort-arrows ${isActive ? "active" : ""}`}>
        <span
          className={`arrow up ${
            isActive && sortDirection === "asc" ? "active" : ""
          }`}
        >
          ▲
        </span>
        <span
          className={`arrow down ${
            isActive && sortDirection === "desc" ? "active" : ""
          }`}
        >
          ▼
        </span>
      </span>
    );
  };

  const sortedData = React.useMemo(() => {
    if (!sortColumn) return tableData;

    return [...tableData].sort((a, b) => {
      const aValue = a[sortColumn as keyof TableRow];
      const bValue = b[sortColumn as keyof TableRow];

      // Handle numeric sorting for id and products
      if (sortColumn === "id" || sortColumn === "products") {
        const aNum = typeof aValue === "string" ? parseInt(aValue) : aValue;
        const bNum = typeof bValue === "string" ? parseInt(bValue) : bValue;
        return sortDirection === "asc" ? aNum - bNum : bNum - aNum;
      }

      // Handle string sorting
      const aStr = String(aValue).toLowerCase();
      const bStr = String(bValue).toLowerCase();

      if (sortDirection === "asc") {
        return aStr.localeCompare(bStr);
      } else {
        return bStr.localeCompare(aStr);
      }
    });
  }, [sortColumn, sortDirection, tableData]);

  const totalPages = Math.ceil(sortedData.length / entriesPerPage);
  const startEntry = (currentPage - 1) * entriesPerPage + 1;
  const endEntry = Math.min(currentPage * entriesPerPage, sortedData.length);

  return (
    <>
      <div className="data-table-container">
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th onClick={() => handleSort("id")} className="sortable">
                  <span className="sort_lable">H/H</span>

                  {getSortArrows("id")}
                </th>
                <th onClick={() => handleSort("name")} className="sortable">
                  <span className="sort_lable">Name</span>

                  {getSortArrows("name")}
                </th>
                <th
                  onClick={() => handleSort("organization")}
                  className="sortable"
                >
                  <span className="sort_lable">Organization</span>

                  {getSortArrows("organization")}
                </th>
                <th onClick={() => handleSort("address")} className="sortable">
                  <span className="sort_lable">Address</span>

                  {getSortArrows("address")}
                </th>
                <th onClick={() => handleSort("worker")} className="sortable">
                  <span className="sort_lable">Worker</span>
                  {getSortArrows("worker")}
                </th>
                <th onClick={() => handleSort("products")} className="sortable">
                  <span className="sort_lable">Products</span>

                  {getSortArrows("products")}
                </th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sortedData
                .slice(
                  (currentPage - 1) * entriesPerPage,
                  currentPage * entriesPerPage
                )
                .map((row) => (
                  <tr key={row.id} className="data-row">
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.organization}</td>
                    <td>{row.address}</td>
                    <td>{row.worker}</td>
                    <td>
                      <a href="#" className="product-link">
                        {row.products}
                      </a>
                    </td>
                    <td className="action-cell">
                      <button className="action-btn view-btn">
                        <Eye />
                      </button>
                      <button className="action-btn menu-btn">⋮</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="pagination-container">
        <div className="pagination-info">
          Showing {startEntry} to {endEntry} of {sortedData.length} entries
        </div>
        <div className="pagination">
          <button
            className="pagination-btn"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            ‹
          </button>

          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                className={`pagination-btn ${
                  currentPage === page ? "active" : ""
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            );
          })}

          <button
            className="pagination-btn"
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
          >
            ›
          </button>

          <div className="page-input-container">
            <span>Go</span>
            <input
              type="text"
              className="page-input"
              placeholder="Type page"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  const page = parseInt(e.currentTarget.value);
                  if (page >= 1 && page <= totalPages) {
                    setCurrentPage(page);
                    e.currentTarget.value = "";
                  }
                }
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
