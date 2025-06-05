import React, { useState } from "react";
import "./SearchComponent.scss";
import { Text } from "../../atoms/typography/Text/Text";

export const SearchComponent = () => {
  const [searchBy, setSearchBy] = useState("Search by");
  const [likeFilter, setLikeFilter] = useState("LIKE");
  const [searchValue, setSearchValue] = useState("Search");
  const [showSearchByDropdown, setShowSearchByDropdown] = useState(false);
  const [showLikeDropdown, setShowLikeDropdown] = useState(false);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);

  const searchByOptions = ["Search by", "Name", "Category", "Date", "Status"];
  const likeOptions = ["LIKE", "EQUALS", "CONTAINS", "STARTS WITH"];
  const searchOptions = [
    "Search",
    "Recent searches",
    "Popular items",
    "Saved filters",
  ];

  return (
    <div className="search-container">
      <div className="search-wrapper">
        {/* Search By Dropdown */}
        <div className="dropdown-container">
          <button
            className="dropdown-button"
            onClick={() => setShowSearchByDropdown(!showSearchByDropdown)}
          >
            <Text
                variant="body2"
                // weight="medium"
                customClassName={"button-text"}
            >
            {searchBy}
            </Text>
            <svg
              className="dropdown-arrow"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </button>
          {showSearchByDropdown && (
            <div className="dropdown-menu">
              {searchByOptions.map((option) => (
                <div
                  key={option}
                  className="dropdown-item"
                  onClick={() => {
                    setSearchBy(option);
                    setShowSearchByDropdown(false);
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* LIKE Dropdown */}
        <div className="dropdown-container">
          <button
            className="dropdown-button like-button"
            onClick={() => setShowLikeDropdown(!showLikeDropdown)}
          >
            {likeFilter}
            <svg
              className="dropdown-arrow"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </button>
          {showLikeDropdown && (
            <div className="dropdown-menu">
              {likeOptions.map((option) => (
                <div
                  key={option}
                  className="dropdown-item"
                  onClick={() => {
                    setLikeFilter(option);
                    setShowLikeDropdown(false);
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Search Input with Dropdown */}
        <div className="dropdown-container search-input-container">
          <button
            className="dropdown-button search-input"
            onClick={() => setShowSearchDropdown(!showSearchDropdown)}
          >
            {searchValue}
            <svg
              className="dropdown-arrow"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </button>
          {showSearchDropdown && (
            <div className="dropdown-menu">
              {searchOptions.map((option) => (
                <div
                  key={option}
                  className="dropdown-item"
                  onClick={() => {
                    setSearchValue(option);
                    setShowSearchDropdown(false);
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Add Button */}
      <button className="add-button">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
    </div>
  );
};
