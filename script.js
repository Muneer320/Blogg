document.addEventListener("DOMContentLoaded", () => {
  const blogPostsContainer = document.getElementById("blog-posts");

  fetch("blogs.json")
    .then((response) => response.json())
    .then((blogs) => {
      blogs.forEach((blog, index) => {
        const blogPost = document.createElement("div");
        blogPost.className = "blog-post";
        blogPost.addEventListener("click", () => {
          window.location.href = `blog.html?id=${index}`;
        });
        
        const blogTitle = document.createElement("h2");
        blogTitle.textContent = blog.title;
        blogPost.appendChild(blogTitle);

        const blogExcerpt = document.createElement("p");
        blogExcerpt.textContent = blog.excerpt;
        blogPost.appendChild(blogExcerpt);

        blogPostsContainer.appendChild(blogPost);
      });
    });
});
