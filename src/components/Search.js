import React, { useState } from "react";
import "./Search.css";

// suggestions is an array of objects
// each object has a title and a link
// handleSearch is a function that takes a string as an argument

const Search = ({
  categories = [],
  suggestions = [],
  handleSearch,
  handleSuggestionClick,
}) => {
  categories = [
    { id: 1, name: "All" },
    { id: 2, name: "Title" },
    { id: 3, name: "Author Name is Biggiiie" },
    { id: 4, name: "ISBN" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("");

  const adjustWidth = (event) => {
    const selectedOption =
      event.target.options[event.target.selectedIndex].text;
    let optionWidth = selectedOption.length * 7; // Adjust the multiplier as needed
    if (optionWidth < 55) optionWidth = 55;
    event.target.style.width = optionWidth + "px";
    setSelectedCategory(selectedOption);
  };

  return (
    <>
      <div className="search">
        {/* search category dropdown */}
        <select
          className="search-category"
          value={selectedCategory}
          onChange={adjustWidth}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => handleSearch(e.target.value)}
        />
        <button className="searchIcon-button">
          <i className="fas fa-search searchIcon" />
        </button>
        {/* search suggestion dropdown */}
        <div className="search-suggestion">
          {/** list the suggestions array using for loop*/}
          {suggestions.length > 0 && (
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion.id}
                  onClick={handleSuggestionClick.bind(suggestion)}
                >
                  <span>{suggestion.title}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
