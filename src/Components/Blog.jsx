import React, { useState } from "react";
import "../Styles/Blog.css";
import { Blogpg1, Blogpg2, Blogpg3, Blogpg4, Blogpg5 } from "../assets";

function Blog() {
  const [activeCategory, setActiveCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "React Hooks Best Practices",
      excerpt: "Learn how to use React Hooks effectively in your component development",
      category: "technology",
      date: "Mar 15, 2026",
      readTime: "5 min read",
      image: Blogpg1,
      color: "#5F28FD"
    },
    {
      id: 2,
      title: "Responsive Design Essentials",
      excerpt: "Creating mobile-first interfaces that work across all screen sizes",
      category: "design",
      date: "Mar 10, 2026",
      readTime: "4 min read",
      image: Blogpg2,
      color: "#FF6B9D"
    },
    {
      id: 3,
      title: "Component-Based Architecture",
      excerpt: "Building scalable applications with reusable, maintainable components",
      category: "technology",
      date: "Mar 5, 2026",
      readTime: "6 min read",
      image: Blogpg3,
      color: "#00D4FF"
    },
    {
      id: 4,
      title: "Web Performance Optimization",
      excerpt: "Techniques for improving load times and user experience",
      category: "design",
      date: "Feb 28, 2026",
      readTime: "7 min read",
      image: Blogpg4,
      color: "#FFB82E"
    },
    {
      id: 5,
      title: "CSS Grid vs Flexbox",
      excerpt: "Choosing the right layout method for your frontend projects",
      category: "design",
      date: "Feb 20, 2026",
      readTime: "8 min read",
      image: Blogpg5,
      color: "#1FD28F"
    },
    {
      id: 6,
      title: "Accessibility in Web Design",
      excerpt: "Creating inclusive interfaces that everyone can use",
      category: "design",
      date: "Feb 15, 2026",
      readTime: "9 min read",
      image: Blogpg1,
      color: "#5F28FD"
    }
  ];

  const categories = [
    { id: "all", name: "All Articles" },
    { id: "technology", name: "Technology" },
    { id: "design", name: "Design" }
  ];

  const filteredPosts = activeCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-content">
          <h1>Blog & Articles</h1>
          <p>Frontend development insights, tips, and best practices</p>
          <div className="blog-hero-line"></div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="blog-filter">
        <div className="filter-container">
          <div className="filter-header">
            <h2>Explore Articles</h2>
          </div>
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-posts">
        <div className="blog-grid">
          {filteredPosts.map((post, index) => (
            <article key={index} className="blog-card" style={{ '--accent-color': post.color }}>
              <div className="blog-image-wrapper">
                <img src={post.image} alt={post.title} className="blog-image" />
                <div className="blog-overlay">
                  <button className="read-btn">Read Article</button>
                </div>
              </div>
              <div className="blog-card-content">
                <div className="blog-meta">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-date">{post.date}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-footer">
                  <span className="read-time">{post.readTime}</span>
                  <span className="read-more">→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="blog-newsletter">
        <div className="newsletter-content">
          <h2>Stay Updated</h2>
          <p>Subscribe to receive the latest frontend development insights and tips</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Blog;
