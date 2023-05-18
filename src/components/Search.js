import React from "react";
import "./Search.css";

// suggestions is an array of objects
// each object has a title and a link
// handleSearch is a function that takes a string as an argument

/* const suggestions = [
    {
        id: 1,
        title: "React"
    }
] */

const Search = ({ suggestions = [], handleSearch, handleSuggestionClick }) => {
  return (
    <>
      <div className="search">
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
