import { IconButton, Tooltip, Zoom } from "@mui/material";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { VscClose } from "react-icons/vsc";

function SearchBar({ searchQuery, setSearchResults }) {
  const [searchVal, setSearchVal] = useState("");

  const date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[date.getMonth()];

  const handleSearchResultSubmit = () => {
    searchQuery(searchVal);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchResultSubmit();
    }
  };

  const handleCancelSearchResults = () => {
    setSearchResults(null);
    setSearchVal("");
  };

  return (
    <section className="searchBarComp">
      <div className="mainDiv">
        <div>
          <Tooltip title="click or press enter" TransitionComponent={Zoom}>
            <IconButton onClick={handleSearchResultSubmit}>
              <FiSearch size={"1.5rem"} />
            </IconButton>
          </Tooltip>
          <input
            type="text"
            placeholder="Search for news"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        {searchVal && (
          <div>
            <Tooltip title="back to home page or cancel search">
              <IconButton onClick={handleCancelSearchResults}>
                <VscClose />
              </IconButton>
            </Tooltip>
          </div>
        )}
      </div>
      <p>
        {date.getDate()}
        {(() => {
          switch (date.getDate()) {
            case 1:
            case 21:
            case 31:
              return "st";
            case 2:
            case 22:
              return "nd";
            case 3:
            case 23:
              return "rd";
            default:
              return "th";
          }
        })()}
        &nbsp;
        {month}, {date.getFullYear()}
      </p>
    </section>
  );
}

export default SearchBar;
