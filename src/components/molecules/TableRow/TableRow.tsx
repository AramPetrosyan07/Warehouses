import React, { useState } from "react";
import "./TableRow.scss";

interface TableRow {
  id: number;
  name: string;
  organization: string;
  address: string;
  worker: string;
  products: string;
}

export const TableRow: React.FC = () => {
  const [sortColumn, setSortColumn] = useState<string>("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 10;

  const sampleData: TableRow[] = [
    {
      id: 1,
      name: "Razmik's room",
      organization: "ITResources",
      address: "Hakob Hakobyan 3",
      worker: "-",
      products: "573",
    },
    {
      id: 2,
      name: "Razmik's room",
      organization: "ITResources",
      address: "Hakob Hakobyan 3",
      worker: "Pargev",
      products: "573",
    },
    {
      id: 3,
      name: "Razmik's room",
      organization: "ITResources",
      address: "Hakob Hakobyan 3",
      worker: "-",
      products: "573",
    },
    {
      id: 4,
      name: "Razmik's room",
      organization: "ITResources",
      address: "Hakob Hakobyan 3",
      worker: "-",
      products: "573",
    },
    {
      id: 5,
      name: "Razmik's room",
      organization: "ITResources",
      address: "Hakob Hakobyan 3",
      worker: "Pargev, Mane, Razmik",
      products: "573",
    },
    {
      id: 6,
      name: "Razmik's room",
      organization: "ITResources",
      address: "Hakob Hakobyan 3",
      worker: "-",
      products: "573",
    },
    {
      id: 7,
      name: "Razmik's room",
      organization: "ITResources",
      address: "Hakob Hakobyan 3",
      worker: "Pargev",
      products: "573",
    },
    {
      id: 8,
      name: "Razmik's room",
      organization: "ITResources",
      address: "Hakob Hakobyan 3",
      worker: "Pargev",
      products: "573",
    },
    {
      id: 9,
      name: "Razmik's room",
      organization: "ITResources",
      address: "Hakob Hakobyan 3",
      worker: "Pargev",
      products: "573",
    },
    {
      id: 10,
      name: "Razmik's room",
      organization: "ITResources",
      address: "Hakob Hakobyan 3",
      worker: "Pargev, Razmik",
      products: "573",
    },
  ];

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const getSortIcon = (column: string) => {
    if (sortColumn !== column) return "↕";
    return sortDirection === "asc" ? "↑" : "↓";
  };

  const totalPages = Math.ceil(sampleData.length / entriesPerPage);
  const startEntry = (currentPage - 1) * entriesPerPage + 1;
  const endEntry = Math.min(currentPage * entriesPerPage, sampleData.length);

  return (
    <div className="data-table-container">
      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th onClick={() => handleSort("id")} className="sortable">
                H/H {getSortIcon("id")}
              </th>
              <th onClick={() => handleSort("name")} className="sortable">
                Name {getSortIcon("name")}
              </th>
              <th
                onClick={() => handleSort("organization")}
                className="sortable"
              >
                Organization {getSortIcon("organization")}
              </th>
              <th onClick={() => handleSort("address")} className="sortable">
                Address {getSortIcon("address")}
              </th>
              <th onClick={() => handleSort("worker")} className="sortable">
                Worker {getSortIcon("worker")}
              </th>
              <th onClick={() => handleSort("products")} className="sortable">
                Products {getSortIcon("products")}
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sampleData
              .slice(
                (currentPage - 1) * entriesPerPage,
                currentPage * entriesPerPage
              )
              .map((row) => (
                <tr key={row.id}>
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
                    <button className="action-btn view-btn">👁</button>
                    <button className="action-btn menu-btn">⋮</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="pagination-container">
        <div className="pagination-info">
          Showing {startEntry} to {endEntry} of {sampleData.length} entries
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
    </div>
  );
};
