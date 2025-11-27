# Almation - AI Business Automation Agency Website

## Project Overview
A premium, interactive multi-page website for Almation, an AI agency specializing in business automation. The website emphasizes 24/7 operations without human engagement and features a luxurious, calming design with tea green (#D0F0C0) and sage green (#9DC183) color scheme.

## Technology Stack
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **3D Graphics**: Three.js for interactive particle background
- **Data Management**: JSON for content configuration
- **Server**: Python HTTP server (backend-ready structure)
- **Fonts**: Montserrat (body), Playfair Display (headings)

## Project Structure
```
/
├── index.html          # Home page
├── about.html          # About page
├── contact.html        # Contact page
├── server.py           # Simple HTTP server
├── css/
│   └── style.css       # Main stylesheet with premium design
├── js/
│   ├── main.js         # Main JavaScript (navigation, animations, form)
│   └── 3d-background.js # Three.js 3D particle system
├── data/
│   └── content.json    # Content configuration (backend-ready)
└── images/             # Image assets folder
```

## Key Features
1. **3D Interactive Background**: Particle system with green color palette that responds to mouse movement
2. **Multi-Page Navigation**: Three distinct pages (Home, About, Contact)
3. **Premium Design**: Luxurious typography and calming color scheme
4. **Responsive Layout**: Mobile-friendly design with hamburger menu
5. **Scroll Animations**: Smooth fade-in animations for content sections
6. **3D Card Effects**: Interactive tilt effects on hover
7. **Contact Form**: Validated form with backend-ready structure
8. **JSON Configuration**: Content can be managed via JSON files
9. **Backend-Ready**: Form submissions stored in localStorage, ready for API integration

## Pages

### Home Page (index.html)
- Hero section with compelling call-to-action
- Services grid showcasing 6 AI solutions
- Benefits section highlighting 24/7 operations
- Pricing section with "Contact for Pricing" CTAs
- Footer with navigation and contact info

### About Page (about.html)
- Company story and mission
- Vision and values
- 4-step approach methodology
- Animated statistics counter
- CTA section

### Contact Page (contact.html)
- Validated contact form
- Service selection dropdown
- Contact information cards
- FAQ section
- Form submission handling

## Design System

### Colors
- **Tea Green**: #D0F0C0 (accent, highlights)
- **Sage Green**: #9DC183 (primary actions, gradients)
- **Dark Green**: #6B8E5C (text, buttons)
- **Deep Green**: #4A6B3E (headings, footer)
- **Light Background**: #F8FBF6
- **White**: #FFFFFF

### Typography
- **Display Font**: Playfair Display (headings, hero titles)
- **Body Font**: Montserrat (paragraphs, UI elements)

### Interactions
- Smooth transitions (0.4s cubic-bezier)
- 3D card tilt effects on hover
- Parallax scrolling on hero content
- Animated counters for statistics
- Scroll-triggered fade-in animations

## Backend Integration Guide

### Contact Form
The contact form in `contact.html` is ready for backend integration:

```javascript
// Current implementation (localStorage):
localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

// Replace with API call:
await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

### Content Management
All content is structured in `data/content.json`. To dynamically load:

1. Set up API endpoint: `GET /api/content`
2. Update `js/main.js` loadContentFromJSON() function
3. Implement content rendering functions

## Running the Website

The website is served using Python's HTTP server on port 5000:
```bash
python3 server.py
```

Server configured to:
- Bind to 0.0.0.0:5000 (accessible in Replit)
- Disable caching for development
- Serve all static files

## Recent Changes
- 2024-11-23: Initial project setup with complete structure
- Created all three HTML pages with premium content
- Implemented 3D background using Three.js
- Added comprehensive CSS styling with green theme
- Developed interactive JavaScript features
- Set up JSON-based content configuration
- Configured Python HTTP server for static file serving

## User Preferences
- Uses HTML, CSS, JavaScript, and JSON as requested
- Premium design with luxurious fonts and calming aesthetics
- Tea green (#D0F0C0) and sage green (#9DC183) color scheme
- Emphasis on 24/7 automation without human engagement
- Backend-ready structure for future integration
- Interactive 3D elements for modern feel

## Future Enhancements
- Backend API for form submissions
- CMS integration for dynamic content
- Blog section for case studies
- Video testimonials
- Advanced 3D product demonstrations

# Customization Guide

**Purpose**

This document explains, in plain language, how to change every piece of visible content and the main colors of the website. Designed for someone who does not know web development. Step-by-step instructions, exact file names, sample edits, and simple troubleshooting tips are included.

---

## Quick preview (open the site locally)

1. Open the project folder `AlmationAutomate`.
2. Double-click `index.html` to open it in your browser for a quick look (works for static parts).
3. For a more accurate preview, run a simple local server inside the project folder:

```bash
# from inside the AlmationAutomate folder
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

Alternatively, run `server.py` if present and meant for local testing: `python3 server.py`.

---

## Project layout — where things live (important files)

```
AlmationAutomate/
├─ index.html         # home page
├─ about.html         # about page
├─ contact.html       # contact page
├─ css/style.css      # all main styles and color variables
├─ js/main.js         # javascript behavior and content loader
├─ data/content.json  # the main editable content file (text shown on site)
├─ images/            # logos, pictures used on the site
└─ server.py          # optional: simple server for local preview
```

When told to edit content, start with `data/content.json`. When told to edit colors or fonts, open `css/style.css`.

---

## How content is organized (simple explanation)

The site reads most text from `data/content.json`. That JSON file contains keys like `company`, `hero`, `services`, `testimonials`, and `faq`.

Example (shortened) structure:

```json
{
  "company": {
    "name": "Almation",
    "tagline": "Transforming businesses...",
    "email": "hello@almation.ai"
  },
  "hero": {
    "title": "Transform Your Business with AI Automation",
    "subtitle": "Run your business 24/7...",
    "primaryCTA": "Get Started",
    "secondaryCTA": "Explore Solutions"
  },
  "services": [
    {"title": "Service 1", "description": "Short text", "icon": "images/Picture1.png"}
  ]
}
```

### Where to change plain text (the simple path)

1. Open `data/content.json` with a plain text editor (Notepad on Windows, TextEdit on Mac in plain-text mode, or VS Code / Sublime if available).
2. Find the section to edit (search for `"hero"`, `"company"`, or `"services"`).
3. Replace the text between quotes. Keep the same punctuation and commas.
4. Save the file and refresh the browser preview.

**Important:** JSON is strict: every key must be in quotes, strings must use double quotes `"`, and items in lists must be separated by commas. A missing comma or a stray quote will break the file and the site may not show updated content.

**Quick safety tip:** Before editing, make a copy of `data/content.json` named `content.json.backup` so changes can be undone.

---

## How to add or edit services, testimonials, or FAQ entries

These sections use arrays in the JSON file.

### Add a service

1. Open `data/content.json` and locate the `"services"` array.
2. Add a new object following the format of existing services. Example:

```json
{
  "title": "Inventory Automation",
  "description": "Automatically track stock levels and reorder.",
  "icon": "images/inventory.png"
}
```

3. If adding at the end of the list, ensure the previous item ends with a comma. Save and refresh.

### Add a testimonial or FAQ

Follow the same pattern: copy an existing entry, edit the `question` / `answer` or `name` / `quote` fields, then save.

---

## How images work and how to replace them

Images are in the `images/` folder. If a JSON entry references an image (`icon`, `logo`, or `hero`), the path is relative to the project root, for example `images/logo.png`.

Steps to replace an image:

1. Prepare the new image file. Keep web-friendly sizes (e.g., 1000 px max width for large images, 300–500 px for icons).
2. Put the new file into the `images/` folder.
3. If replacing an existing file with the exact same filename, just overwrite it (keep a backup).
4. If using a new filename, update the reference in `data/content.json` or in the HTML where it’s used.
5. Refresh the page to see the change.

Optimizing tip: JPG for photos, PNG for images with transparent background, and SVG for logos when available.

---

## How to change colors (the main part non-devs will care about)

All main colors are defined at the top of `css/style.css` inside the `:root` block as CSS variables. Open `css/style.css` and look for `:root { ... }` near the top.

Example variables found in this project:

```css
:root {
  --tea-green: #D0F0C0;
  --sage-green: #9DC183;
  --dark-green: #6B8E5C;
  --deep-green: #4A6B3E;

  --bg-dark:  #f0e9e9;
  --bg-dark-secondary: #abeeeeff;
  --bg-dark-card: #57b0beff;
  --bg-dark-hover: #69c5b6ff;
  --text-light: #000000ff;
  --text-muted: #3e453eff;
  --accent: #83cfedff;

  --font-display: 'Playfair Display', serif;
  --font-body: 'Montserrat', sans-serif;
}
```

To change the site color scheme, change these color codes. Examples:

* To change the main background, update `--bg-dark` to a new hex color like `#ffffff` or `#0f172a`.
* To change primary accent/buttons, update `--accent`.
* To change text color, update `--text-light` and `--text-muted`.

### Simple theme examples

**Light theme** (paste inside `:root` replacing current values):

```css
--bg-dark: #ffffff;
--bg-dark-card: #f7f7f9;
--text-light: #0b1220;
--accent: #0ea5a0; /* teal */
```

**Dark theme**:

```css
--bg-dark: #0b1220;
--bg-dark-card: #111827;
--text-light: #e6eef6;
--accent: #60a5fa; /* blue */
```

After saving `css/style.css`, refresh the preview.

### Buttons, borders, hover states

Buttons and other elements use the variables above. If a button still uses a specific color in CSS and not a variable, search for color hex codes in `css/style.css` and replace them with a variable (for example `var(--accent)`) or directly change the hex.

---

## Fonts and typography

Fonts used here are set with `--font-display` and `--font-body`. To change fonts:

1. Replace the font name in `:root` with a new font (for example `--font-body: 'Poppins', sans-serif;`).
2. If using a new Google Font, add the link to the font in the HTML head (`index.html`). Example:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
```

3. Save and refresh.

---

## Editing layout or page text directly (if JSON does not cover it)

Some text or small layout bits may be directly inside `index.html`, `about.html`, or `contact.html`. To edit those:

1. Open the HTML file in a text editor.
2. Look for readable text (the visible words are in the file). Edit the words between the tags and save.
3. If you see HTML code and it looks intimidating, only change the visible text between `>` and `</` for that element.

Example: change the title `\u003ch1\u003eCurrent Title\u003c/h1\u003e` to `\u003ch1\u003eNew Title\u003c/h1\u003e`.

---

## Common problems and fixes

**The site shows old content after edit**

* Refresh the browser with a hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac).

**JSON edits break the site**

* Restore `content.json.backup` or fix JSON using a validator like [https://jsonlint.com](https://jsonlint.com) (paste the JSON and validate). Look for missing commas or extra commas.

**Image not showing**

* Check the image filename and path in `data/content.json` or HTML. Paths are case-sensitive on some systems.

**Colors not changing**

* Confirm variables changed inside `:root` in `css/style.css`. If a color still looks the old way, search the CSS file for the hex code and change all instances.

---

## Best small edits for a non-developer (quick wins)

* Change the company name and tagline (in `data/content.json` under `company`).
* Update the hero title and CTA buttons (in `hero`).
* Replace the logo (overwrite `images/logo.png`).
* Swap primary accent (`--accent`) color in `css/style.css`.

---

## Backup and versioning

Copy any file before changing it. Example:

```bash
cp data/content.json data/content.json.backup
cp css/style.css css/style.css.backup
```

If Git is available, using commits is helpful: `git add . && git commit -m "customized content"`.

---

## Where to get help next

If something looks broken, attach the changed file (the one edited) and a short note describing what was changed and what looks wrong. That file is usually `data/content.json` or `css/style.css`.

---

## Short checklist before saving edits

1. Make a backup copy of the file you will edit.
2. Edit only the text in the JSON or the variables in `:root`.
3. Save the file and hard refresh the browser.
4. If nothing changed, check for typos or JSON errors.

---

## Appendix: Example edits (copy-paste-ready)

**Change hero title** (open `data/content.json` and replace the `title` value):

```json
"hero": {
  "title": "Your new headline here",
  "subtitle": "Short supporting sentence",
  "primaryCTA": "Get Started",
  "secondaryCTA": "Contact Sales"
}
```

**Set a sunny yellow accent** (open `css/style.css` and inside `:root` replace `--accent`):

```css
--accent: #ffd166;
```

**Add a new FAQ item** (append to the `faq` array in `data/content.json`):

```json
{
  "question": "How long does setup take?",
  "answer": "Typical setup takes 2-4 weeks depending on scope."
}
```

---

## Editing content inside HTML files

Some parts of the site show text that isn’t stored in `content.json`. Those pieces live directly in the HTML files like `index.html`, `about.html`, and `contact.html`. Editing them is simple.

### What can be changed in HTML

* Page titles (`<h1>`, `<h2>`, etc)
* Paragraphs (`<p>`)
* Button labels
* Footer text
* Navigation menu items
* Contact info shown directly inside the file

### Steps to edit HTML text

1. Open the file (for example `index.html`) in any text editor.
2. Scroll until you find readable text. Visible text always sits between tags. Example:

   ```html
   <h2>Automate everything today</h2>
   ```
3. Replace only the words between the tags. Keep the tags themselves as they are.
4. Save the file and refresh the browser.

### Example edits

**Change a heading:**

```html
<h1>Welcome to Almation Automate</h1>
```

becomes

```html
<h1>Your new heading here</h1>
```

**Change navigation text:**

```html
<li><a href="about.html">About Us</a></li>
```

becomes

```html
<li><a href="about.html">Our Story</a></li>
```

**Change footer contact info:**

```html
<p>Email: hello@almation.ai</p>
```

becomes

```html
<p>Email: yourmail@example.com</p>
```

