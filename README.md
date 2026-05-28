# Portfolio Website - Amritha Raj Herle

A modern, responsive developer portfolio website built with React, TypeScript, and Tailwind CSS.

🌐 **Live Demo**: [herleraja.netlify.app](https://herleraja.netlify.app/)

## 🚀 Features

- **Modern Design**: Clean, professional dark theme with smooth animations and 3D card effects
- **Responsive**: Fully responsive design that works on all devices
- **Internationalization**: Multi-language support (14+ languages) using React Intl
- **GitHub Integration**: Automatically fetches and displays GitHub repositories
- **StackOverflow Integration**: Shows reputation and badges
- **Certificates Section**: Displays professional certifications and achievements
- **Interactive Elements**: Rain effect, music player, and smooth scroll animations
- **Performance Optimized**: Fast loading with code splitting and lazy loading
- **SEO Friendly**: Optimized for search engines with React Helmet Async
- **Accessible**: WCAG AA compliant with keyboard navigation
- **Code Quality**: ESLint, Prettier, Husky, and lint-staged for consistent code

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript 5.9
- **Styling**: Tailwind CSS + PostCSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Internationalization**: React Intl + FormatJS
- **Routing**: React Router DOM
- **Build Tool**: Vite 8
- **Testing**: Vitest + React Testing Library + Coverage
- **Code Quality**: ESLint + Prettier + Husky + lint-staged
- **Deployment**: Netlify
- **CI/CD**: GitHub Actions

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:ci

# Lint code
npm run lint

# Format code
npm run format

# Check code formatting
npm run format:check

# Extract i18n messages
npm run extract

# Compile i18n messages
npm run compile
```

## 🌐 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_GITHUB_USERNAME=herleraja
VITE_STACKOVERFLOW_ID=5227954
VITE_GITHUB_TOKEN=optional_for_higher_rate_limits
```

## 📁 Project Structure

```
portfolio-website/
├── public/              # Static assets
│   ├── data/            # JSON data files (certificates)
│   ├── favicon.svg      # Favicon
│   ├── icons.svg        # SVG sprite icons
│   └── robots.txt       # SEO robots file
├── src/
│   ├── assets/          # Images and media
│   ├── components/      # React components
│   │   ├── common/      # Reusable components (Navigation, Card3D, RainEffect, etc.)
│   │   └── sections/    # Page sections (Hero, About, Skills, Projects, Certificates, Contact)
│   ├── hooks/           # Custom React hooks (useGitHub, useStackOverflow, useCertificates)
│   ├── locales/         # i18n message files (14+ languages)
│   ├── services/        # API services (GitHub, StackOverflow)
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions and constants
│   ├── tests/           # Test setup and files
│   ├── i18n.ts          # Internationalization messages
│   ├── App.tsx          # Main app component
│   ├── AppWrapper.tsx   # App wrapper with providers
│   └── main.tsx         # Entry point
├── .github/workflows/   # CI/CD configuration
├── .husky/              # Git hooks
└── Configuration files  # ESLint, Prettier, Tailwind, Vite, etc.
```

## 🚀 Deployment

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Add environment variables in Netlify dashboard
5. Deploy!

### GitHub Actions

The project includes a GitHub Actions workflow that automatically:
- Runs linting
- Runs tests
- Builds the project
- Deploys to Netlify

## 🌍 Internationalization

The portfolio supports 14+ languages:
- English (en)
- German (de)
- Spanish (es)
- French (fr)
- Italian (it)
- Japanese (ja)
- Korean (ko)
- Polish (pl)
- Portuguese (pt)
- Russian (ru)
- Swedish (sv)
- Chinese Simplified (zh)
- Chinese Traditional (zh-TW)
- Esperanto (eo)

Language can be switched using the language selector in the navigation bar.

## 📊 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Bundle Size: Optimized with code splitting

## ♿ Accessibility

- Semantic HTML5
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- WCAG AA compliant
- Focus management

## 📝 License

MIT License - feel free to use this project for your own portfolio!

## 👤 Author

**Amritha Raj Herle**
- GitHub: [@herleraja](https://github.com/herleraja)
- LinkedIn: [herleraja](https://www.linkedin.com/in/herleraja/)
- StackOverflow: [Profile](https://stackoverflow.com/users/5227954/amrith-raj-herle)

## 🎨 Key Components

- **Hero Section**: Animated introduction with call-to-action buttons
- **About Section**: Professional background with GitHub and StackOverflow stats
- **Skills Section**: Categorized technical skills with icons
- **Projects Section**: GitHub repositories with live demos
- **Certificates Section**: Professional certifications with 3D card effects
- **Contact Section**: Social links and contact information
- **Navigation**: Responsive navigation with language selector
- **Rain Effect**: Optional ambient rain animation with music

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from React Icons
- Animations powered by Framer Motion
- Internationalization with React Intl and FormatJS
