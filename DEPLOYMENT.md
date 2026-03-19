# Deployment Guide

## Prerequisites

- Node.js 18+ installed
- GitHub account
- Netlify account (free tier)

## Step 1: Prepare Your Repository

1. Initialize git repository (if not already done):
```bash
cd portfolio-website
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

2. Create a new repository on GitHub

3. Push your code:
```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Netlify

### Option A: Netlify UI (Recommended for first deployment)

1. Go to [Netlify](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" and authorize Netlify
4. Select your portfolio repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18
6. Add environment variables:
   - `VITE_GITHUB_USERNAME`: herleraja
   - `VITE_STACKOVERFLOW_ID`: 5227954
7. Click "Deploy site"

### Option B: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize Netlify site
netlify init

# Deploy
netlify deploy --prod
```

## Step 3: Configure GitHub Actions (Optional but Recommended)

1. Go to your GitHub repository settings
2. Navigate to "Secrets and variables" → "Actions"
3. Add the following secrets:
   - `NETLIFY_AUTH_TOKEN`: Get from Netlify → User Settings → Applications → Personal access tokens
   - `NETLIFY_SITE_ID`: Get from Netlify → Site settings → General → Site details → API ID

4. Push any changes to trigger automatic deployment:
```bash
git add .
git commit -m "Update portfolio"
git push
```

## Step 4: Custom Domain (Optional)

1. In Netlify, go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the instructions to configure your DNS

## Step 5: Verify Deployment

1. Visit your Netlify URL (e.g., `https://your-site-name.netlify.app`)
2. Check all sections load correctly
3. Verify GitHub API integration works
4. Test contact form
5. Check mobile responsiveness

## Troubleshooting

### Build Fails

- Check Node version is 18+
- Verify all dependencies are installed
- Check for TypeScript errors: `npm run build`

### API Rate Limits

- Add `VITE_GITHUB_TOKEN` environment variable with a GitHub personal access token
- This increases rate limit from 60 to 5000 requests/hour

### Environment Variables Not Working

- Ensure variables start with `VITE_`
- Rebuild and redeploy after adding variables
- Clear browser cache

## Performance Optimization

After deployment, run these checks:

1. **Lighthouse Audit**:
   - Open Chrome DevTools
   - Go to Lighthouse tab
   - Run audit
   - Target: 90+ score in all categories

2. **PageSpeed Insights**:
   - Visit https://pagespeed.web.dev
   - Enter your site URL
   - Check both mobile and desktop scores

3. **Bundle Size**:
```bash
npm run build
# Check dist folder size (should be < 500KB)
```

## Monitoring

- Enable Netlify Analytics (optional, paid feature)
- Set up error tracking with Sentry (optional)
- Monitor API usage in GitHub settings

## Updates

To update your portfolio:

```bash
# Make changes
git add .
git commit -m "Description of changes"
git push

# GitHub Actions will automatically deploy
# Or manually deploy with Netlify CLI:
netlify deploy --prod
```

## Rollback

If something goes wrong:

1. Go to Netlify dashboard
2. Click "Deploys"
3. Find a previous successful deploy
4. Click "Publish deploy"

## Support

- Netlify Docs: https://docs.netlify.com
- Vite Docs: https://vitejs.dev
- React Docs: https://react.dev

---

**Your portfolio is now live! 🎉**

Share your portfolio URL:
- LinkedIn
- GitHub profile
- Resume
- Social media