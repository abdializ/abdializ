# Sir Abdisalam’s Blog – Hugo Site Notes

## 🎨 What This Project Is  
This is my blog built with [Hugo](https://gohugo.io/). I kept it simple: fast, lightweight, and clean. Dark mode uses gold/orange highlights, light mode uses blue. It’s responsive and easy to maintain as I keep adding posts.  

---

## 🚀 Recent Updates
### Blog Layout
- New blog list page (`layouts/blog/list.html`) to scroll posts in order.  
- Tag filtering is fixed — no more duplicates even if the case is different.  
- Previews now show plain text only, with reading time and word count.  

### Tags
- Case-insensitive handling ("Philosophy", "philosophy", etc. → one tag).  
- URLs are lowercase (like `/tags/philosophy/`).  
- First capitalization you use sticks for display.  

### Reading Flow
- “Back to Blog” shows only on blog posts.  
- Previous/Next navigation between posts.  
- Cleaner footers with tags laid out nicely.  

### Visual Tweaks
- Borders use different opacities so the layout feels natural.  
- Blog previews skip images for consistency.  
- Works smoothly from phone to 4K.  

---

## 🎨 Colors
**Dark Mode**  
- Text: `#928585`  
- Accent: `#ffb255`  
- Background: `#090b09`  

**Light Mode**  
- Text: `#0a1f44`  
- Accent: `#1a73e8`  
- Background: `#fff1e1`  

**Border hierarchy:**  
- Blog header = strongest  
- Post header & nav = medium  
- Footers/separators = light  

---

## 🔧 Setup Notes
**File Structure**  
```plaintext
layouts/
  _default/
    baseof.html
    single.html
    list.html
    home.html
  blog/
    list.html
  partials/
    normalize-tags.html   # tag deduplication logic

static/css/
  sirabdi.css            # main stylesheet

hugo.toml                # config 

**Features**  
- **Tag Normalization** (`normalize-tags.html`): merges duplicates, keeps first style.  
- **Smart Previews**: text-only snippets, no images.  
- **Conditional Nav**: “Back to Blog” only where it makes sense.  

---

## 📱 Responsiveness & Modes
- Mobile-first layout.  
- Typography scales well.  
- Dark/Light mode switch with smooth transitions.  

---

## 🛠 Maintenance
**Adding Posts**  
- Drop Markdown in `content/blog/`.  
- Tags can be in any format — system normalizes.  
- Add a description in frontmatter for a nice preview.  

**Customizing**  
- Colors: tweak CSS variables.  
- Fonts/spacing: edit `sirabdi.css`.  
- Layout: adjust Hugo templates.  

---

## 📊 Performance
- Very little JavaScript (mostly CSS + Hugo).  
- Tag handling done via partials.  
- Hugo’s static build keeps it fast.  
- Image handling optimized automatically.  

---

Built with Hugo. Straightforward and built to last.