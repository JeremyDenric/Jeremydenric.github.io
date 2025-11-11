# Jeremy Denric - Developer Portfolio

**Live Site:** [jeremydenric.github.io](https://jeremydenric.github.io)
**GitHub Repo:** [Jeremydenric/Jeremydenric.github.io](https://github.com/Jeremydenric/Jeremydenric.github.io)

---

## About This Project

Welcome to my personal portfolio website! This is a clean, minimal showcase of my projects and skills as a developer. Built with pure HTML and CSS, it demonstrates my ability to create beautiful, responsive web experiences without relying on frameworks.

This site represents my journey as both a developer and a lifelong learner, with a focus on C++, Python, and web development.

---

## Features

- Clean, modern design with smooth animations
- Fully responsive layout
- Project showcase section with tech stack tags
- About section highlighting my background and interests
- Contact links to GitHub and other platforms
- Hosted on GitHub Pages for fast, free deployment

---

## Tech Stack

| Technology | Purpose |
|-----------|----------|
| HTML5 | Structure and content |
| CSS3 | Styling, animations, and layout |
| GitHub Pages | Free hosting and deployment |

---

## Project Structure

```
Jeremydenric.github.io/
├── index.html          # Main homepage
├── styles.css          # All styles and layout
├── README.md           # This file
└── .git/               # Git repository
```

---

## How to Use

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Jeremydenric/Jeremydenric.github.io.git
   cd Jeremydenric.github.io
   ```

2. **Open locally:**
   Simply open `index.html` in your browser to view the site locally.

3. **Customize:**
   - Edit `index.html` to add your own projects, about info, and contact links
   - Modify `styles.css` to change colors, fonts, and layout
   - Update project cards in the Projects section with your actual work

---

## Customization Guide

### Adding a New Project

In `index.html`, find the `<section id="projects">` and add a new project card:

```html
<div class="project-card">
  <h3>Your Project Name</h3>
  <p>Description of what the project does and what you learned.</p>
  <div class="tech-stack">
    <span class="tech-tag">Python</span>
    <span class="tech-tag">Flask</span>
  </div>
  <a href="https://github.com/yourusername/project" class="project-link">View Project →</a>
</div>
```

### Changing Colors

The site uses a dark theme with gold accents. Main colors in `styles.css`:
- Background: `#0c0c0c` (near black)
- Text: `#e6e6e6` (soft white)
- Accent: `#d4af37` (gold)
- Links: `#5EC4FF` (blue)

### Updating Contact Info

In the contact section of `index.html`, update the links:
```html
<a href="https://github.com/yourusername" target="_blank">GitHub</a>
<a href="mailto:your.email@example.com">Email</a>
<a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
```

---

## Deployment

This site is automatically deployed via **GitHub Pages**. Any changes pushed to the main branch will be live within a few minutes.

To enable GitHub Pages:
1. Go to repository Settings
2. Navigate to Pages section
3. Select "Deploy from a branch"
4. Choose `main` branch and `/` (root) folder
5. Save

Your site will be available at `https://yourusername.github.io`

---

## Future Enhancements

- [ ] Add a blog section for technical articles
- [ ] Implement dark/light theme toggle
- [ ] Add project filtering by technology
- [ ] Create individual project detail pages
- [ ] Add animations on scroll

---

## License

Feel free to fork this project and make it your own! No attribution required.

---

## Contact

- **GitHub:** [@Jeremydenric](https://github.com/Jeremydenric)
- **Email:** Update in contact section

---

Built with care by Jeremy Denric © 2025
