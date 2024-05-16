# Blogg

Welcome to **Blogg**, a minimalist, glassmorphic-themed personal blog template. This project allows you to showcase your blog posts with a clean, modern design. The content is stored in a JSON file and rendered dynamically using JavaScript, making it easy to update and manage.

## Features

- Minimalist and glassmorphic design.
- Responsive layout.
- Dynamically loaded blog content from a JSON file.
- Supports rich content including text, images, and videos.

## Getting Started

### Prerequisites

You'll need a web browser to view the project. No additional software or libraries are required.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/muneer320/Blogg.git
   ```
2. Navigate to the project directory:
   ```sh
   cd Blogg
   ```
3. Open index.html in your web browser to view the main page.

### File Structure

- index.html: The main page of the blog.
- blog.html: The individual blog post page.
- styles.css: The CSS file for styling the pages.
- script.js: The JavaScript file for dynamically loading blog posts on the main page.
- blog.js: The JavaScript file for loading content of an individual blog post.
- blogs.json: The JSON file containing blog post data.

### Adding New Blog Posts

1. Open blogs.json.
2. Add a new blog object to the array with title, excerpt, and content fields. The content field can include HTML tags for rich formatting.

#### Example:

    ```json
[
{
"title": "Blog Post 1: Exploring Minimalism",
"excerpt": "Minimalism is more than just a design trend; it's a lifestyle choice...",
"content": "<p>Minimalism is more than just a design trend; it's a lifestyle choice. In this post, I delve into the principles of minimalism and how it can help simplify your life and increase your focus.</p><p>Here's an example of an embedded image:</p><img src='image1.jpg' alt='Minimalism'><p>And here's a video:</p><iframe width='560' height='315' src='https://www.youtube.com/embed/dQw4w9WgXcQ' frameborder='0' allowfullscreen></iframe>"
},
{
"title": "Blog Post 2: The Benefits of Meditation",
"excerpt": "Meditation has been proven to reduce stress, improve concentration...",
"content": "<p>Meditation has been proven to reduce stress, improve concentration, and promote overall well-being. Here, I share my personal journey with meditation and tips on how to get started.</p><p>Here's an example of an embedded image:</p><img src='image2.jpg' alt='Meditation'><p>And here's a video:</p><iframe width='560' height='315' src='https://www.youtube.com/embed/dQw4w9WgXcQ' frameborder='0' allowfullscreen></iframe>"
}
]
    ```

## Credits
This project was created by Muneer Alam with significant assistance from ChatGPT, an AI developed by OpenAI. The project is made almost entirely by ChatGPT with just some slight modifications made by Muneer Alam.

## License
This project is licensed under the MIT License - see the LICENSE file for details.