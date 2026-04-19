🌿 Down Town Cafe — Official Website
> Pure Vegetarian Restaurant | Ludhiana, Punjab  
> A modern, fully responsive multi-section website built with vanilla HTML, CSS & JavaScript.
---
📋 Table of Contents
About the Project
Live Demo
Features
Tech Stack
Project Structure
Sections Overview
Getting Started
Deployment
SEO & Accessibility
Screenshots
Contact
---
🏠 About the Project
This is the official website for Down Town Cafe, a 100% pure vegetarian restaurant located in Model Town, Ludhiana, Punjab. The site is designed to showcase the cafe's menu, ambiance, customer reviews, and contact information — all in a clean, elegant, and mobile-friendly layout.
The design language uses warm vegetarian branding colors — Forest Green, Saffron Orange, and Cream Beige — paired with editorial typography to give the cafe a premium yet welcoming feel.
---
🔗 Live Demo
> Deploy the site and paste your URL here.
```
https://down-town-cafe-phi.vercel.app/

```
---
✨ Features
Core Sections
Hero Banner — Full-screen landing with tagline, CTA buttons, animated counters, and a direct Call button
Menu Section — 12 vegetarian dishes across 5 categories with images, descriptions, and category filters
Gallery — Asymmetric CSS Grid photo gallery with a keyboard-accessible lightbox
Reviews — Customer testimonial cards with star ratings
Contact — Address, phone, Google Map embed, and a validated contact form
Footer — Opening hours, quick links, social media icons, and WhatsApp link
Special Features
🌙 Dark Mode Toggle — Class-based dark theme, saved to `localStorage`
📌 Sticky Navbar — Transparent on top, blurred on scroll, with active link highlighting
🍔 Mobile Hamburger Menu — Smooth animated mobile navigation
☎️ Floating Call Button — Direct `tel:` link always visible bottom-right
📅 Floating Reserve Table Button — Anchors to contact section
⬆️ Scroll-to-Top Button — Appears after scrolling 400px, smooth animation
🔢 Animated Counters — Stats animate in using easing when scrolled into view
🎞️ Lightbox Gallery — Arrow key navigation, Escape to close, click-outside to close
🃏 Scroll Reveal Animations — Cards animate in via `IntersectionObserver`
🛒 Add Button Feedback — Visual confirmation on menu item add
✅ Form Validation — Live inline validation with accessible error messages
🖼️ Lazy Loading Images — Native `loading="lazy"` on all images for performance
---
🛠️ Tech Stack
Technology	Usage
HTML5	Semantic structure, SEO meta tags
CSS3	Flexbox, Grid, custom properties, animations
Vanilla JavaScript	Interactivity, DOM manipulation
Google Fonts	Playfair Display, Fraunces, DM Sans
Unsplash	Placeholder food & cafe images
Google Maps Embed	Contact section map
No frameworks. No dependencies. No build tools required.
---
📁 Project Structure
```
downtown-cafe/
│
├── index.html       # Main HTML — all sections
├── style.css        # All styles, dark mode, responsive breakpoints
├── script.js        # All interactivity and JS features
└── README.md        # Project documentation
```
---
📄 Sections Overview
1. Navbar
Sticky top navigation with smooth scroll links, dark mode toggle, and a hamburger menu for mobile. Active link updates as you scroll through sections.
2. Hero
Full-viewport hero with animated background orbs, a dot-pattern texture, vegetarian badge, main heading, subheading, dual CTAs (Explore Menu + Call Now), and animated stat counters (Happy Guests, Veg Dishes, Satisfaction %).
3. Menu
Category filter buttons (All, Snacks, Pizza, Mains, Beverages, Desserts). Cards show a dish image, name, description, Veg badge, and an Add button with click feedback. Cards animate in on scroll.
4. Gallery
CSS Grid layout with spanning cells for visual variety. Clicking any image opens a full-screen lightbox with caption, previous/next navigation, and keyboard support.
5. Reviews
Six customer testimonial cards. The featured card is highlighted with an accent border. Each card shows avatar initials, name, city, star rating, review text, and date.
6. Contact
Two-column layout with info cards (address, phone, hours, email), an embedded Google Map, and a contact form. Form validates all required fields inline and shows a success message on submission.
7. Footer
Four-column footer with brand info, quick links, opening hours table, and contact details. Includes social links for Instagram, Facebook, YouTube, and WhatsApp.
---
🚀 Getting Started
Run Locally
No installation needed. Just open the HTML file in any modern browser.
```bash
# Clone or download the project
git clone https://github.com/your-username/downtown-cafe.git

# Open in browser
cd downtown-cafe
open index.html
```
Or use VS Code with the Live Server extension for hot-reload during development.
---
🌐 Deployment
Option 1 — Netlify Drop (Easiest)
Go to netlify.com/drop
Drag and drop the project folder
Your site is live instantly — no account needed
Option 2 — Netlify via GitHub
Push the project to a GitHub repository
Log in to netlify.com → New site from Git
Select your repo → Deploy
Done. Auto-deploys on every push to `main`
Option 3 — Vercel
Push the project to GitHub
Go to vercel.com → New Project → Import your repo
No configuration needed for a static site — click Deploy
Option 4 — GitHub Pages
Push to GitHub
Go to repo → Settings → Pages
Set source branch to `main`, root folder `/`
Your site will be live at `https://your-username.github.io/downtown-cafe`
---
🔍 SEO & Accessibility
Semantic HTML5 tags (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`)
SEO meta tags: `description`, `keywords`, `author`, Open Graph tags
All images have descriptive `alt` text
All interactive elements have `aria-label` or `aria-hidden`
Form fields use `aria-required` and `aria-live` for error announcements
Lightbox uses `role="dialog"` and `aria-modal`
Keyboard navigation supported throughout (Tab, Enter, Escape, Arrow keys)
Color contrast meets WCAG AA standards
`focus-visible` outlines for keyboard users
---

📞 Contact
Down Town Cafe  
Model Town, Ludhiana, Punjab – 141002
📞 Phone: 084270 24999
✉️ Email: hello@downtowncafe.in
💬 WhatsApp: wa.me/918427024999
---
📝 License
This project is built for Down Town Cafe, Ludhiana. All rights reserved © 2025 Down Town Cafe.
---
Made with 🌿 in Ludhiana, Punjab
