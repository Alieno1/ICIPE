# ICIPE 2025 Conference - Official Website

Welcome to the official repository for the **International Conference on Industrial and Production Engineering (ICIPE) 2025** website. This platform acts as the central hub for the event, offering attendees schedules, speaker details, venue and map overviews, as well as submission instructions.

## 🚀 Features
- **Enterprise Aesthetics:** Clean, professional UI driven by modern design concepts (inter/outfit typography and deep slate/blue branding).
- **Responsive Navigation:** Optimized across desktop, tablet, and mobile platforms utilizing dynamic CSS.
- **Micro-Animations:** Seamless, rich interactive hover animations implemented purely through lightweight CSS transitions.
- **Easy Maintenance:** Static architecture (HTML5/CSS3) means easy and transparent file editing without complex build steps.

## 📁 Repository Structure
```
/
├── index.html           # Main landing page (Schedule, Event info, About)
├── commitee.html        # Committee overview
├── speakers.html        # Interactive speaker profiles
├── gallery.html         # Past event galleries
├── Contact us.html      # External communications form
├── assets/              # Core resources directory
│   ├── css/             # Styling logic (main.css, responsive.css)
│   ├── img/             # Images and background assets
│   ├── js/              # Javascript components
│   ├── video/           # Background/informational mp4 clips
│   └── fonts/           # External web icon fonts
└── README.md            # This document
```

## 🛠 Tech Stack
- **HTML5:** Leveraging semantic layout standardizations constraint validation.
- **CSS3 / Vanilla CSS:** Lightweight but powerful styles including CSS Variables, multi-device Media Queries, Gradients, and Transform transitions. 
- **Bootstrap grid framework:** Base utility classes for rapid layout iteration.

## ⚙️ How To Run
The website relies completely on static files, meaning it does not require a backend runtime environment like Node.js or Python to operate.

1. Clone the repository.
2. Double click the `index.html` file to open it in your browser of choice.
3. For local development with live-reloading, run an extension such as **Live Server** on VS Code or `python -m http.server` via your terminal inside the project root directory.

## 🎨 Theme Modification
The official theme values (`#1d4ed8` main blue, `#3b82f6` light enterprise tone) are located primarily in `/assets/css/main.css`. The font family imports (`Inter` & `Outfit`) run through Google Fonts APIs. Modifying these hex values or Google Font URL imports will dynamically adjust the aesthetic presentation layout of the page.

---
*Maintained by the SVNIT Mechanical Engineering Web Department.*
