import React, { useState } from "react";

export default function Header({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  // Handle input change and trigger the search
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query); // Call the onSearch function with the query
  };

  return (
    <>
      <h1>Example Blog</h1>
      <label htmlFor="search">Search Blog:</label>
      <input
        type="search"
        name="search"
        id="search"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search by title, body, or author"
      />
    </>
  );
}
