import React from "react";

export default function BlogComponent({ blog }) {
  console.log(blog); // Log to verify the structure of the blog array

  
  const styles = {
    blogCard: {
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      padding: "20px",
      margin: "20px auto",
      width: "80%",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "all 0.3s ease",
    },
    blogCardHover: {
      transform: "scale(1.02)",
    },
    blogDetail: {
      marginBottom: "15px",
    },
    blogDetailLabel: {
      fontSize: "1.2em",
      color: "#333",
    },
    blogDetailText: {
      fontSize: "1em",
      color: "#555",
      lineHeight: "1.5",
    },
    tags: {
      fontStyle: "italic",
      color: "#007BFF",
    },
    noPosts: {
      textAlign: "center",
      fontSize: "1.5em",
      color: "#888",
      marginTop: "50px",
    },
    author: {
      fontSize: "1.1em",
      color: "#333",
      fontStyle: "italic",
      marginTop: "10px",
    },
  };

  return (
    <>
      {blog && Array.isArray(blog) && blog.length > 0 ? (
        blog.map((post, index) => {
          const tags = Array.isArray(post.tags) ? post.tags.join(", ") : "No tags available";
          
          const blogDetails = [
            { label: "Title", value: post.title },
            { label: "Body", value: post.body },
            { label: "Tags", value: tags },
            { label: "Author", value: post.author.name }, 
          ];

          return (
            <div
              className="blog-card"
              style={styles.blogCard}
              key={index}
              onMouseEnter={(e) => e.currentTarget.style.transform = styles.blogCardHover.transform} 
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} 
            >
              {blogDetails.map((detail, index) => (
                <div style={styles.blogDetail} key={index}>
                  <strong style={styles.blogDetailLabel}>{detail.label}:</strong>
                  <p style={styles.blogDetailText}>{detail.value}</p>
                </div>
              ))}
            </div>
          );
        })
      ) : (
        <p style={styles.noPosts}>No blog posts available</p>
      )}
    </>
  );
}  
