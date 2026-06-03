# Maryam Mokhberi — Personal Website

## File Structure

```
maryam-website/
├── index.html              ← Homepage
├── css/
│   └── style.css           ← ALL styles (edit CSS variables at top to change colors)
├── js/
│   ├── main.js             ← Navigation, animations, blog rendering
│   └── blog-posts.js       ← ★ BLOG DATA — edit this to add/update posts
├── pages/
│   ├── research.html       ← Research projects page
│   ├── expertise.html      ← Skills & expertise page
│   ├── publications.html   ← Publications & talks
│   ├── blog.html           ← Blog listing
│   ├── post.html           ← Individual post renderer (auto)
│   └── contact.html        ← Contact page
└── assets/                 ← Put your photo here as maryam.jpg
```

---

## How to Update: Common Tasks

### ✏️ Add a new blog post
Open `js/blog-posts.js` and add a new object to the `BLOG_POSTS` array:

```javascript
{
  id: "my-post-slug",           // URL-friendly ID, no spaces
  date: "June 1, 2026",
  category: "Responsible AI",   // or: Care AI, Agentic AI, Research, Reflections
  title: "My Post Title",
  excerpt: "Short summary shown on the listing page...",
  readTime: "7 min read",
  content: `
    <p>Your full post content here. HTML is supported.</p>
    <h3>Section heading</h3>
    <p>More content...</p>
  `
}
```

Add it to the TOP of the array to appear first (newest).

### 🖼️ Add your photo
1. Put your photo in `assets/maryam.jpg` (or any filename)
2. In `index.html`, find the `portrait-img` div and uncomment:
   ```html
   <img src="assets/maryam.jpg" alt="Maryam Mokhberi" style="width:100%;height:100%;object-fit:cover;border-radius:4px;">
   ```
3. Delete the `<span class="portrait-placeholder">MM</span>` line

### 🎨 Change colors
In `css/style.css`, edit the `:root` variables at the top:
```css
--color-amber: #C9913A;       /* Main accent color */
--color-slate: #2D3142;       /* Dark sections */
--color-bg: #F7F4EF;          /* Page background */
```

### 📄 Add a publication
In `pages/publications.html`, copy a `pub-item` div and fill in the details.

### 📝 Update bio/content
Each page is a standalone HTML file — just edit the text directly.

### 🔗 Add social links
In `js/main.js`, edit the `FOOTER_HTML` and `NAV_HTML` strings — 
or search for "LinkedIn" across all files to find all link instances.

---

## Deployment Options

- **Netlify (free):** Drag the `maryam-website/` folder to netlify.com/drop
- **GitHub Pages:** Push to a GitHub repo, enable Pages in Settings
- **Vercel:** Connect GitHub repo, auto-deploys on push
- **Any static host:** All HTML/CSS/JS, no server required

---

## Photo Placeholder
The current hero shows "MM" initials. To add your photo, place it at `assets/maryam.jpg`
and update `index.html` as described above.
