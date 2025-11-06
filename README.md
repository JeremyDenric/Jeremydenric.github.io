
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-6 space-y-12">

      {/* HERO SECTION (Leave yours as is) */}

      <section>
        <h2 className="text-2xl font-bold mb-4">Personal Systems</h2>
        <div className="border rounded p-4 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">Personal Decision Engine</h3>
          <p className="text-gray-600">
            A self-built reflection tool I use to improve reasoning, track predictions vs outcomes, 
            and develop long-term decision-making clarity.
          </p>
          <Link href="/decisions">
            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded">
               Open Tool →
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}




# 🌐 Jeremy's Hub — Personal Portfolio

**Live Site:** [jeremts-hub.vercel.app](https://jeremts-hub.vercel.app)  
**GitHub Repo:** [Jeremydenric.github.io](https://github.com/Jeremydenric/Jeremydenric.github.io)

---

## 💻 About This Project
Welcome to **Jeremy’s Hub**, my personal portfolio and blog built with **Next.js + React**.  
It’s designed to showcase my **C++ & Python projects** while sharing insights on **fitness, gym, and health**.

This site represents my journey as both a **developer** and a **lifelong learner**.

---

## 🚀 Features
- 🧩 **Project Showcase** — highlights of my coding work (C++ / Python)
- 📝 **Health & Gym Blog** — fitness and lifestyle insights
- 🌈 **Modern UI** — clean, responsive, and 2025-ready
- ⚡ **Deployed on Vercel** — fast & globally distributed
- 🧠 **Markdown-powered blogs** — easy to write and maintain

---

## 🧰 Tech Stack
| Tool | Purpose |
|------|----------|
| [Next.js 14](https://nextjs.org/) | Framework for React apps |
| [React 18](https://react.dev/) | UI library |
| [Tailwind CSS](https://tailwindcss.com/) | Styling & layout |
| [Vercel](https://vercel.com/) | Deployment & hosting |
| Markdown | Blog content management |

---

## 📁 Project Structure
```bash
📦 jeremts-hub/
├── public/             # Images, icons, static files
├── src/
│   ├── app/            # Next.js 14 app router pages
│   ├── components/     # Reusable UI components
│   ├── posts/          # Markdown blog posts
│   └── styles/         # Global styles (Tailwind)
├── package.json
├── README.md
└── next.config.js
