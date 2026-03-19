# Portfolio Website - Amritha Raj Herle

A modern, responsive developer portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional dark theme with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **GitHub Integration**: Automatically fetches and displays GitHub repositories
- **StackOverflow Integration**: Shows reputation and badges
- **Performance Optimized**: Fast loading with code splitting and lazy loading
- **SEO Friendly**: Optimized for search engines
- **Accessible**: WCAG AA compliant

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript 5
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Build Tool**: Vite
- **Testing**: Vitest + React Testing Library
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
├── src/
│   ├── components/      # React components
│   │   ├── common/      # Reusable components
│   │   ├── sections/    # Page sections
│   │   └── ui/          # UI components
│   ├── hooks/           # Custom React hooks
│   ├── services/        # API services
│   ├── types/           # TypeScript types
│   ├── utils/           # Utility functions
│   ├── tests/           # Test files
│   └── App.tsx          # Main app component
├── .github/workflows/   # CI/CD configuration
└── Configuration files
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

## 📊 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Bundle Size: < 200KB

## ♿ Accessibility

- Semantic HTML5
- ARIA labels
- Keyboard navigation
- Screen reader friendly
- WCAG AA compliant

## 📝 License

MIT License - feel free to use this project for your own portfolio!

## 👤 Author

**Amritha Raj Herle**
- GitHub: [@herleraja](https://github.com/herleraja)
- LinkedIn: [herleraja](https://www.linkedin.com/in/herleraja/)
- StackOverflow: [Profile](https://stackoverflow.com/users/5227954/amrith-raj-herle)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from React Icons
- Animations powered by Framer Motion
