# paulette-portfolio

A dramatic, minimalistic personal portfolio built with React — showcasing projects, skills, and contact information with smooth animations and a bold dark aesthetic.

## Tech Stack

**Frontend**
- React 18 + Vite
- Framer Motion (scroll reveals, stagger animations, page transitions)
- react-type-animation (typewriter effect in Hero)
- react-icons (icon library)
- Canvas API (custom particle background)
- CSS custom properties (design tokens, dark theme)

**Visual Effects**
- Glitch text animation on hero name (CSS keyframes)
- Lag-follow custom cursor (requestAnimationFrame)
- Floating particle network (canvas)
- Scroll-triggered fade/slide animations (Framer Motion useInView)
- Typewriter role cycling (react-type-animation)
- Subtle dot-grid overlay on hero
- Grayscale-to-color image hover on projects

## Recommended Backend

For the contact form and any future API needs:

**Node.js + Express + Nodemailer**
```
backend/
├── server.js         # Express app
├── routes/
│   └── contact.js    # POST /api/contact → send email via Nodemailer
└── .env              # EMAIL_USER, EMAIL_PASS
```

Install: `npm install express nodemailer cors dotenv`

Deploy free on: **Render** or **Railway**

For data storage later: add **MongoDB Atlas** (free tier) with Mongoose.

## Project Structure

```
paulette-portfolio/
├── public/
│   └── images/           # Project screenshots + profile photo
├── src/
│   ├── components/
│   │   ├── Cursor.jsx     # Custom lag-follow cursor
│   │   ├── Navbar.jsx     # Scroll-aware fixed nav
│   │   ├── Hero.jsx       # Glitch name + typewriter role + particles
│   │   ├── Particles.jsx  # Canvas particle animation
│   │   ├── About.jsx      # Bio + geometric image frame + stats
│   │   ├── Skills.jsx     # Animated skill grid
│   │   ├── Portfolio.jsx  # Filterable project cards
│   │   ├── Contact.jsx    # Floating-label form
│   │   └── Footer.jsx     # Social links
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css          # Design tokens + all styles
├── index.html
├── vite.config.js
└── package.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Contact

Dushime Paulette — dushimepaulette36@gmail.com

[LinkedIn](https://linkedin.com/in/paulette-dushime-1581bb319/) · [GitHub](https://github.com/Dushimepaulette1)
