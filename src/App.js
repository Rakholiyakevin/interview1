import React, { useState } from "react";
import BlogComponent from "./BlogComponent";
import Header from "./Header";
import blogData from "./posts.json"; // Import the JSON data

export default function App() {
  const [filteredBlogData, setFilteredBlogData] = useState(blogData);

  // Search function to filter blog data based on query
  const handleSearch = (query) => {
    if (!query) {
      setFilteredBlogData(blogData); // If no query, show all blogs
    } else {
      const filteredData = blogData.filter(
        (post) =>
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.body.toLowerCase().includes(query.toLowerCase()) ||
          post.author.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredBlogData(filteredData);
    }
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <BlogComponent blog={filteredBlogData} />
    </div>
  );
}
