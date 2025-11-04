
---

## 📘 Step 2: Add JS Doc Comments (inside your files)

Inside your React files, use **JSDoc** format comments to describe what each function or component does.

Example — `src/components/ProjectCard.js`
```js
/**
 * ProjectCard component
 * Displays a project with name, description, and link.
 *
 * @param {Object} props
 * @param {string} props.title - Project title
 * @param {string} props.description - Short summary
 * @param {string} props.link - URL to project repo or demo
 * @returns {JSX.Element}
 */
export default function ProjectCard({ title, description, link }) {
  return (
    <div className="border p-4 rounded-xl hover:shadow-lg">
      <h3 className="text-lg font-bold">{title}</h3>
      <p>{description}</p>
      <a href={link} className="text-blue-500 underline">View Project</a>
    </div>
  );
}
