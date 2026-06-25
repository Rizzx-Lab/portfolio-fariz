# 📁 Portfolio Fariz - Struktur Proyek Lengkap

## 🎯 Ringkasan Proyek
**Nama**: Portfolio-Fariz  
**Type**: React + Vite SPA (Single Page Application)  
**Author**: Muhammad Fariz Setiawan  
**Status**: Active Development  
**Deployment**: Vercel

Ini adalah portfolio personal modern yang dibangun dengan React 19, Vite, dan Framer Motion. Menampilkan proyek-proyek, skill, dan form kontak interaktif dengan animasi smooth dan responsive design.

---

## 📊 Stack Teknologi

### Frontend
- **React** v19.1.1 - UI library
- **Vite** v7.1.7 - Build tool & dev server
- **Framer Motion** v12.27.0 - Animation library
- **Lucide React** v0.544.0 - Icon library
- **CSS3** - Styling dengan custom properties

### Dev Tools
- **ESLint** v9.36.0 - Code quality
- **Tailwind CSS** v4.1.13 - Utility CSS framework
- **PostCSS** v8.5.6 - CSS processing
- **Autoprefixer** v10.4.21 - Vendor prefixes

### Package Manager
- **npm** - Dependency management

---

## 📂 Struktur Direktori

```
portfolio-fariz/
│
├── 📄 index.html                    # Entry point HTML
├── 📄 package.json                  # Dependencies & scripts
├── 📄 package-lock.json             # Lock file
├── 📄 vite.config.js                # Vite configuration
├── 📄 eslint.config.js              # ESLint rules
├── 📄 .gitignore                    # Git ignore rules
├── 📄 README.md                     # Project documentation
│
├── 📁 public/                       # Static assets
│   └── vite.svg
│
├── 📁 src/                          # Source code
│   │
│   ├── 📄 main.jsx                  # React 19 entry point
│   ├── 📄 App.jsx                   # Root component
│   ├── 📄 App.css                   # App styles & footer
│   ├── 📄 index.css                 # Global CSS reset
│   │
│   ├── 📁 components/               # React components
│   │   ├── Navbar.jsx               # Navigation bar
│   │   ├── Hero.jsx                 # Hero section
│   │   ├── About.jsx                # About section
│   │   ├── Projects.jsx             # Projects showcase
│   │   └── Contact.jsx              # Contact form
│   │
│   ├── 📁 hooks/                    # Custom React hooks
│   │   └── useScrollReveal.js       # Scroll animation hook
│   │
│   ├── 📁 assets/                   # Images & media
│   │   └── react.svg
│   │
│   └── 📁 styles/                   # CSS files
│       ├── global.css               # Global variables & base styles
│       ├── animations.css           # Keyframe animations
│       │
│       └── 📁 components/           # Component-specific styles
│           ├── navbar.css           # Navigation styles
│           ├── hero.css             # Hero section styles
│           ├── about.css            # About section styles
│           ├── projects.css         # Projects section styles
│           └── contact.css          # Contact section styles
│
└── 📁 .git/                         # Git repository

```

---

## 🔍 Detail File Penting

### Konfigurasi

#### **vite.config.js**
```javascript
- Plugin: @vitejs/plugin-react (Fast Refresh)
- Build optimization:
  - framer-motion dipisah ke chunk terpisah
  - lucide-react dipisah untuk caching lebih baik
- Target: modern browsers
```

#### **package.json**
```json
Scripts:
- dev: "vite" - Development server
- build: "vite build" - Production build
- lint: "eslint ." - Code linting
- preview: "vite preview" - Preview build

Dependencies utama:
- React 19 dengan Hooks API
- Framer Motion untuk animations
- Lucide React untuk icons
- EmailJS (siap integrasi untuk contact form)
```

#### **eslint.config.js**
```javascript
- Recommended: JS + React Hooks + React Refresh rules
- ECMAVersion: 2020
- Parser: JSX enabled
- Custom rules untuk unused vars
```

---

## 🎨 Struktur Komponen

### 1. **Navbar.jsx** ⬆️
**Fungsi**: Navigation bar dengan dark mode toggle

**Features**:
- Fixed navbar dengan blur effect
- Scroll detection (mengubah style saat scroll)
- Dark/Light theme toggle dengan localStorage
- Mobile hamburger menu
- Smooth scroll ke section
- Icons dari Lucide React (Home, User, Briefcase, Mail)

**State Management**:
```javascript
- isOpen: toggle mobile menu
- scrolled: track scroll position
- darkMode: theme preference
```

**Performance**:
- useCallback + requestAnimationFrame untuk throttle scroll events
- localStorage caching untuk theme preference

---

### 2. **Hero.jsx** 🎯
**Fungsi**: Landing section dengan CTA dan profile card

**Features**:
- Animated badge dengan dot pulsing
- Gradient text untuk nama
- Social media cards (GitHub, LinkedIn, Instagram, Email)
- Profile card dengan avatar & meta info
- Stats display (10+ Projects, 5+ Tech Stack, 100% Passionate)
- CTA buttons (View Work, Download CV)
- Floating scroll indicator

**Animations**:
- Framer Motion: stagger container + item variants
- CSS: blob animations, pulse effect, scroll float
- Entry animations only (no infinite loops)

**Responsive**:
- Desktop: 2-column layout (left content, right profile)
- Tablet/Mobile: 1-column layout (profile below content)

---

### 3. **About.jsx** 📚
**Fungsi**: Section tentang diri, pendidikan, dan skills

**Features**:
- Introduction card
- Education timeline dengan year badges
- Skills dengan progress bar (animated fill)
- Skill categories: HTML/CSS, JS, React, Node.js, Express, MongoDB, Git, Responsive Design

**Components Structure**:
```
About Section
├── Left Column
│   ├── Introduction Card
│   └── Education Timeline
└── Right Column
    └── Skills Card (sticky on desktop)
```

**Animations**:
- Scroll reveal dengan whileInView
- Progress bar animation saat scroll ke section
- Hover effects pada skill items

---

### 4. **Projects.jsx** 🚀
**Fungsi**: Portfolio showcase dengan filtering

**Projects Showcase**:
1. Personal Portfolio (React, Vite, Framer Motion)
2. Library Management System (PHP, MySQL)
3. Weather Dashboard (React, OpenWeather API)
4. Weather Dashboard Mobile (Flutter, Dart)

**Features**:
- Featured section dengan special styling
- Filter tabs (All, Web Apps, Full Stack, Mobile, Backend)
- Project cards dengan tech stack badges
- Links: GitHub & Live Demo/Download
- Empty state dengan loading animation
- Hover effects: card lift, scale animations

**State Management**:
```javascript
- filter: active filter category
- filteredProjects: computed from filter
- featuredProjects: marked with featured: true
```

---

### 5. **Contact.jsx** 📧
**Fungsi**: Contact information dan form submission

**Features**:
- Contact info card (email, location, phone)
- Sticky contact form (desktop)
- Form fields: Name, Email, Subject, Message
- Success/Error status messages
- Submit button dengan loading state
- Response time expectation

**Form State**:
```javascript
- formData: {name, email, subject, message}
- status: {type: 'success|error', message: '...'}
- isSubmitting: boolean for loading state
```

**Validation**:
- HTML5 required fields
- Email validation via input type="email"

---

## 🎨 Sistem Styling

### Global CSS Variables (global.css)

**Color Palette**:
```css
Light Mode:
- Primary: #667eea (Purple)
- Secondary: #764ba2 (Dark Purple)
- Text Dark: #1f2937
- Text Gray: #4b5563
- BG White: #ffffff

Dark Mode:
- Text Dark: #f9fafb (inverted)
- BG White: #0f172a (dark navy)
- Adjustments untuk contrast
```

**Gradients**:
```css
- primary-gradient: 135deg #667eea → #764ba2
- secondary-gradient: 135deg #f093fb → #f5576c
- dark-gradient: 135deg #1f2937 → #111827
```

**Spacing System**:
- section-padding: 80px 20px
- mobile-padding: 60px 16px
- Border radius: sm(8px), md(12px), lg(16px), xl(24px), full(9999px)

**Shadows**:
```css
- sm: 0 1px 3px rgba(0,0,0,0.1)
- md: 0 4px 20px rgba(0,0,0,0.1)
- lg: 0 10px 40px rgba(0,0,0,0.15)
- primary: 0 8px 25px rgba(102,126,234,0.3)
```

### Animations (animations.css)

**Keyframes**:
```css
- @keyframes float: translateY + rotate
- @keyframes pulse: opacity pulse
- @keyframes slideInLeft/Right: translateX fade
- @keyframes fadeInUp: translateY fade
- @keyframes scaleIn: scale + fade
- @keyframes glow: box-shadow pulse
- @keyframes spin: rotation 360deg
- @keyframes gradientShift: gradient animation
- @keyframes typing: vertical bounce
```

**Animation Classes**:
- float-animation (6s infinite)
- pulse-animation (2s infinite)
- fade-in-up (0.8s forwards)
- scale-in (0.6s forwards)
- slide-in-left/right (0.8s forwards)
- animate-spin (1s infinite)
- stagger-children (dengan nth-child delays)

### Component Styles

Setiap komponen memiliki CSS file terpisah:

**hero.css** (950+ lines):
- Background blobs dengan animations
- Profile card styling
- Social cards grid
- Stats display
- Scroll indicator
- Responsive breakpoints: 1024px, 768px, 640px, 380px

**about.css** (850+ lines):
- Card styling dengan left border indicator
- Timeline styling
- Skills progress bar
- Grid layout responsive
- Sticky positioning untuk desktop

**projects.css** (900+ lines):
- Featured projects section
- Filter tabs dengan active state
- Project cards dengan hover lift
- Tech tag styling
- Empty state animation
- Grid auto-fill responsive

**contact.css** (750+ lines):
- Contact info cards
- Form styling dengan focus states
- Status message animations
- Sticky form positioning
- Button hover dengan shimmer effect

---

## 🎯 Custom Hooks

### **useScrollReveal.js**
**Purpose**: Scroll animation trigger untuk elements

**Logic**:
```javascript
1. Throttle scroll events dengan requestAnimationFrame
2. Query semua .scroll-reveal elements
3. Check jika element dalam viewport (top < windowHeight * 0.85)
4. Add class 'visible' untuk trigger CSS animations
5. Cleanup listener on unmount
```

**Performance Optimization**:
```javascript
- requestAnimationFrame throttling (max 60x/detik)
- Passive listener (true) untuk scroll events
- Early return jika ticking = true
```

**CSS Integration**:
```css
.scroll-reveal {
  opacity: 0;
  transform: translateY(50px);
}

.scroll-reveal.reveal-visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

## 🚀 Scripts & Commands

### Development
```bash
npm run dev
# Starts Vite dev server pada http://localhost:5173
# HMR (Hot Module Replacement) enabled
```

### Production Build
```bash
npm run build
# Output: dist/ folder
# Optimizations:
#   - Code minification
#   - Tree shaking
#   - Code splitting (framer-motion & lucide-react separate)
#   - CSS optimization
```

### Code Quality
```bash
npm run lint
# Run ESLint checks
```

### Preview Build
```bash
npm run preview
# Preview production build locally
```

---

## 📱 Responsive Design

### Breakpoints
```css
Desktop: 1400px+ (large screens)
Desktop: 1024px (default)
Tablet: 768px
Mobile: 640px
Small Mobile: 480px
Extra Small: 380px
```

### Mobile Optimizations
1. **Performance**:
   - Shorter animations (400ms instead of 600ms)
   - Reduced motion support (prefers-reduced-motion)
   - Disabled heavy CSS animations on low-end devices

2. **Layout**:
   - Single column layouts
   - Hamburger menu untuk navigation
   - Adjusted spacing & padding
   - Touch-friendly button sizes

3. **Typography**:
   - Fluid font sizing dengan clamp()
   - Readable line heights
   - Proper contrast ratios

---

## 🎭 Dark Mode Implementation

### How It Works
1. **Storage**: Theme preference disimpan di localStorage
2. **Toggle**: Button di Navbar mengubah `darkMode` state
3. **Application**: 
   ```javascript
   if (darkMode) {
     document.documentElement.classList.add('dark')
   } else {
     document.documentElement.classList.remove('dark')
   }
   ```
4. **CSS**: Variables di-override di `html.dark` selector

### CSS Variables Change
```css
html.dark {
  --text-dark: #f9fafb;      /* light text */
  --bg-white: #0f172a;       /* dark background */
  --border-color: #475569;   /* lighter borders */
  /* etc */
}
```

---

## ⚡ Performance Features

### Code Splitting
- Hero component: Not lazy (immediate load)
- About, Projects, Contact: Lazy loaded dengan Suspense
- framer-motion & lucide-react: Manual chunk split

### Caching Strategy
- Static assets: Browser cache
- Theme preference: localStorage
- CSS variables: Scoped globally

### Animation Performance
- `will-change: transform` untuk animated elements
- `transform: translateZ(0)` untuk GPU acceleration
- CSS animations prefer dibanding JS untuk performance
- Throttled scroll events dengan rAF

### Build Optimization
- Vite build optimizations
- Rollup configuration untuk manual chunks
- CSS minification & purging
- JavaScript minification

---

## 🔒 Security Features

### XSS Protection
- React auto-escapes content
- No dangerouslySetInnerHTML used
- External links dengan rel="noopener noreferrer"

### Email Security
- Ready untuk EmailJS integration (import tersedia tapi tidak digunakan)
- Form validation HTML5
- No sensitive data exposure

### Code Quality
- ESLint enabled untuk code standards
- React Hooks best practices
- Proper error boundaries ready

---

## 📊 Proses Build

### Development Flow
1. Run `npm run dev`
2. Vite serves files dengan HMR
3. CSS + JS changes reflect instantly
4. Can test locally pada localhost:5173

### Production Flow
1. Run `npm run build`
2. Creates optimized dist/ folder
3. Deploy ke Vercel (configured)
4. Auto builds on git push

### Deployment (Vercel)
- Connected ke repository
- Auto deploy on push ke branch
- Environment: Production
- URL: https://portfolio-fariz-khaki.vercel.app/

---

## 📝 Code Quality Standards

### ESLint Rules
```javascript
- Recommended JS rules enabled
- React Hooks rules enforced
- React Refresh rules enabled
- Unused vars: warned (with patterns ignored)
- Props validation ready untuk TypeScript migration
```

### Naming Conventions
- Components: PascalCase (Hero.jsx, Navbar.jsx)
- Functions: camelCase (useScrollReveal, handleClick)
- Constants: UPPER_SNAKE_CASE (if any)
- CSS classes: kebab-case (.hero-badge, .nav-link)

### File Organization
- Components isolated dengan own CSS
- Styles folder mirrors components
- Assets dalam public/ folder
- Hooks dalam dedicated hooks/ folder

---

## 🎯 Future Enhancements

### Potential Improvements
1. **TypeScript Migration**: Add type safety
2. **CMS Integration**: Dynamic projects from backend
3. **Analytics**: Google Analytics setup
4. **SEO**: Meta tags optimization
5. **Performance**: Image optimization, WebP format
6. **Testing**: Jest + React Testing Library
7. **API Integration**: Real contact form submission
8. **Internationalization**: Multi-language support

### Current TODOs
- Email form integration (EmailJS library ready)
- Resume PDF download functionality
- Blog section dengan Markdown support

---

## 🤝 Contributing

### Branch Strategy
- main: production-ready code
- development: feature branches merge here

### Commit Convention
```
feat: add new feature
fix: bug fix
style: CSS/formatting changes
perf: performance improvements
refactor: code restructuring
docs: documentation updates
```

---

## 📞 Contact & Social

**Email**: muhammadfarizsetiawan1604@gmail.com  
**GitHub**: Rizzx-Lab  
**LinkedIn**: Muhammad Fariz Setiawan  
**Instagram**: farizz04_  
**Location**: Indonesia  
**Status**: Open to opportunities

---

## 📄 License

This portfolio project is personal and not licensed for public use.
All code © Muhammad Fariz Setiawan 2025.

---

## 📚 Additional Resources

### External Links
- Vite Docs: https://vite.dev
- React Docs: https://react.dev
- Framer Motion: https://www.framer.com/motion
- Lucide Icons: https://lucide.dev
- Tailwind CSS: https://tailwindcss.com

### Development Tools Used
- VS Code (IDE)
- Chrome DevTools (Debugging)
- Vercel Dashboard (Deployment)
- GitHub (Version Control)

---

**Last Updated**: 2025  
**Project Status**: ✅ Active  
**Version**: 1.0.0
