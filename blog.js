document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const blogId = urlParams.get("id");

  fetch("blogs.json")
    .then((response) => response.json())
    .then((blogs) => {
      const blog = blogs[blogId];
      if (blog) {
        document.getElementById("blog-title").textContent = blog.title;
        document.getElementById("blog-content").innerHTML = blog.content;
      } else {
        document.getElementById("blog-title").textContent =
          "Blog Post Not Found";
        document.getElementById("blog-content").textContent =
          "The blog post you are looking for does not exist.";
      }
    });
});
