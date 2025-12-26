# NOZA LLC - Deployment & Optimization Guide

## Cloudflare Pages Deployment

### Prerequisites
- Cloudflare account with Pages enabled
- GitHub repository connected to Cloudflare Pages
- Node.js 18+ installed locally

### Deployment Steps

1. **Connect GitHub Repository**
   - Go to Cloudflare Pages Dashboard
   - Click "Create a project" → "Connect to Git"
   - Select your GitHub repository
   - Authorize Cloudflare

2. **Configure Build Settings**
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variables: Add any needed (see `.env.example`)

3. **Deploy**
   - Push to your main branch
   - Cloudflare Pages automatically builds and deploys
   - Visit your site at `https://your-project.pages.dev`

4. **Custom Domain**
   - Go to Pages project settings → Custom domains
   - Add your domain (e.g., `nozallc.us`)
   - Configure DNS records as instructed

### Environment Variables

Create a `.env` file for local development (not committed):
```
# Add your environment variables here
# Example:
# PUBLIC_API_URL=https://api.example.com
```

For production secrets in Cloudflare Pages:
- Go to Settings → Environment variables
- Add Production secrets
- Use `REPLACE_ENV.VARIABLE_NAME` syntax in code

## Performance Optimizations

### ✅ Already Implemented

1. **Astro Framework**
   - Zero JavaScript by default (only HTML/CSS shipped)
   - Automatic code splitting and chunking
   - Built-in image optimization
   - `astro:only` directive for interactive components

2. **Cloudflare Pages Integration**
   - Automatic GZIP compression
   - HTTP/3 support
   - Global CDN distribution
   - Caching headers configured

3. **Code Organization**
   - Components extracted for maintainability
   - Scoped CSS using Astro's `style` tags
   - Shared global styles in `src/styles/global.css`

4. **SEO Enhancements**
   - Schema.org structured data (LocalBusiness + Organization)
   - Open Graph meta tags for social sharing
   - Twitter Card support
   - Canonical URLs
   - Meta descriptions

5. **Build Optimization**
   - CSS code splitting enabled
   - Inline critical CSS
   - Asset inlining for small files
   - Minification via Vite/esbuild

6. **TypeScript**
   - Strict mode enabled
   - Full type checking
   - IntelliSense support

### 🚀 Recommended Further Optimizations

#### 1. Image Optimization (When Adding Images)
Use Astro's Image component:
```astro
import { Image } from 'astro:assets';
import myImage from '../assets/my-image.png';

<Image src={myImage} alt="Description" />
```

Benefits:
- Automatic WebP conversion
- Responsive image sizes
- Lazy loading by default
- Optimal file size

#### 2. Web Vitals Monitoring
Set up monitoring with Cloudflare Analytics Engine:
```javascript
// In components
const analytics = {
  cls: 0.1, // Cumulative Layout Shift
  fid: 0.1, // First Input Delay
  lcp: 2.5, // Largest Contentful Paint
};
```

#### 3. Caching Strategy

Add to `wrangler.toml` for custom caching:
```toml
[[routes]]
pattern = "*.html"
cache_on_cookie = "session"
cache_level = "cache_everything"
cache_default_ttl = 3600
```

#### 4. Security Headers
Add to Cloudflare Pages:
- Content-Security-Policy
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- Referrer-Policy: strict-origin-when-cross-origin

#### 5. Analytics Integration
Options:
- **Cloudflare Web Analytics** - Built-in, no script overhead
- **Plausible** - Privacy-first, lightweight
- **Fathom** - GDPR-compliant
- **Posthog** - Full analytics suite

#### 6. Forms & Contact Integration
Options:
- **Formspree** - Simple form handling
- **Netlify Forms** - Built-in form handling
- **Basin** - Clean, simple forms
- **Custom API** - Cloudflare Workers for backend

### 🔍 Performance Testing

**Local Testing:**
```bash
npm run build
npm run preview
```

Then test with:
- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [WebPageTest](https://www.webpagetest.org/)
- Lighthouse (Chrome DevTools)

**Target Metrics:**
- Lighthouse Score: 90+
- Core Web Vitals:
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1

### 📊 Build Size Reference

Current optimal state:
- HTML: ~15 KB (minified)
- CSS: Inline in HTML (critical path)
- JavaScript: ~2.4 KB (minimal interactivity)
- Total: < 20 KB over the wire

### 🔐 Security Best Practices

1. **Keep Dependencies Updated**
   ```bash
   npm outdated
   npm update
   ```

2. **Security Audit**
   ```bash
   npm audit
   npm audit fix
   ```

3. **Environment Secrets**
   - Never commit `.env` files
   - Use Cloudflare Pages Environment Variables for secrets
   - Review `.gitignore` before committing

4. **CORS Configuration**
   If using external APIs, configure properly in wrangler.toml

## Monitoring & Maintenance

### Weekly
- Check Cloudflare Analytics
- Monitor for errors in build logs
- Review Google Search Console

### Monthly
- Run performance audit
- Update dependencies
- Check security vulnerabilities

### Quarterly
- Full SEO audit
- Competitor analysis
- UX/conversion optimization review

## Troubleshooting

### Build Fails
1. Check `npm run build` output locally
2. Verify all dependencies in `package.json`
3. Check Cloudflare build logs for details

### Slow Performance
1. Run Lighthouse audit
2. Check Network tab in DevTools
3. Monitor Core Web Vitals in Cloudflare Analytics

### 404 Errors
1. Verify route in `src/pages/` matches URL
2. Check for typos in links
3. Use `npm run preview` to test locally

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Web Vitals Guide](https://web.dev/vitals/)
- [SEO Starter Guide](https://developers.google.com/search/docs)

## Support

For deployment issues, contact:
- Cloudflare Support: https://support.cloudflare.com
- Astro Discord: https://astro.build/chat
- GitHub Issues: Check this repository's issues

---

**Last Updated:** December 2025
**Astro Version:** 5.16.6
**Cloudflare Adapter:** Latest
