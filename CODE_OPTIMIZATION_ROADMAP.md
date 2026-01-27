# Code Optimization Plan - Parallel Implementation
**Goal:** Improve Lighthouse scores while you configure Cloudflare

---

## Phase 1: Critical Path Optimizations (30-45 min)

### 1.1 Fix LCP Render Delay (3,680 ms Issue)
**Target:** `src/layouts/RootLayout.astro` + `src/components/Hero.astro`

**Actions:**
- [ ] Add `content-visibility: auto` to defer non-critical element painting
- [ ] Add `font-display: swap` to all @font-face declarations
- [ ] Move hero animations to load after page paint
- [ ] Add `decoding="async"` to hero images
- [ ] Remove unused animations from hero element

**Code Changes:**
```css
/* Add to global.css */
h1, h2, h3 { content-visibility: auto; contain-intrinsic-size: auto 1.2em; }
img { content-visibility: auto; decoding: async; }

@font-face {
  font-family: 'Inter';
  /* Add this line to all @font-face */
  font-display: swap;
}
```

**File locations to check:**
- `src/styles/global.css` - main stylesheet
- `src/components/Hero.astro` - hero section
- `src/layouts/RootLayout.astro` - layout wrapper

---

### 1.2 Optimize CSS Loading (7.2 KiB, 170 ms)
**Target:** `src/layouts/RootLayout.astro`

**Actions:**
- [ ] Add `rel="preload"` to critical CSS
- [ ] Add `rel="preconnect"` to Google Fonts (if used)
- [ ] Move non-critical styles to defer loading
- [ ] Minify inline styles

**Code Changes:**
```astro
<!-- In <head> of RootLayout.astro -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href={stylesheet}>
<link rel="stylesheet" href={stylesheet}>
```

---

## Phase 2: JavaScript Optimization (20-30 min)

### 2.1 Defer Non-Critical Scripts
**Target:** `src/layouts/RootLayout.astro`

**Actions:**
- [ ] Move Google Analytics to end of body with `defer`
- [ ] Move non-critical third-party scripts to `</body>`
- [ ] Add `async` to GTM if can't defer
- [ ] Lazy-load non-critical JavaScript

**Code Changes:**
```html
<!-- Remove from <head>, move to </body> end -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-WKD299X2FT"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-WKD299X2FT');
</script>
```

### 2.2 Identify & Remove Unused JavaScript
**Target:** Review all component scripts

**Actions:**
- [ ] Audit `_astro/page.*.js` for dead code
- [ ] Check component scripts for unused libraries
- [ ] Remove debug code / console.logs
- [ ] Tree-shake unused dependencies

**Quick Checks:**
```bash
# In terminal, check bundle size
npm run build
# Look for warning messages about unused code
```

---

## Phase 3: Image & Asset Optimization (15-25 min)

### 3.1 Image Optimization
**Target:** All `src/components/` with images

**Actions:**
- [ ] Add `loading="lazy"` to below-fold images
- [ ] Convert images to WebP with fallbacks
- [ ] Add `decoding="async"` to all images
- [ ] Set explicit `width` and `height` to prevent layout shift

**Code Pattern:**
```astro
<img 
  src="image.webp" 
  alt="description"
  loading="lazy"
  decoding="async"
  width="800"
  height="600"
/>
```

### 3.2 Optimize Hero Image (High Priority)
**Target:** `src/components/Hero.astro`

**Actions:**
- [ ] Check if hero has image - optimize with WebP
- [ ] Add `fetchpriority="high"` to hero image
- [ ] Preload hero image in RootLayout head
- [ ] Use responsive images with `srcset`

---

## Phase 4: Rendering Optimization (15-20 min)

### 4.1 Reduce Layout Shift
**Target:** All components

**Actions:**
- [ ] Add explicit dimensions to all media
- [ ] Use placeholder backgrounds for images
- [ ] Avoid dynamic font sizing
- [ ] Pre-allocate space for buttons/CTAs

**Code Pattern:**
```css
/* Prevent layout shift */
img { aspect-ratio: 16/9; width: 100%; height: auto; }
button { min-height: 48px; } /* Ensure touch targets stay consistent */
h1 { contain: layout style paint; }
```

### 4.2 Critical Rendering Path
**Target:** `src/layouts/RootLayout.astro`

**Actions:**
- [ ] Identify critical resources (fonts, hero image, above-fold CSS)
- [ ] Preload critical resources
- [ ] Defer everything else
- [ ] Use `rel="dns-prefetch"` for external APIs

**Code Changes:**
```astro
<head>
  <!-- Preload critical assets -->
  <link rel="preload" as="image" href="/hero.webp">
  <link rel="preload" as="font" href="/fonts/inter.woff2" type="font/woff2" crossorigin>
  
  <!-- DNS prefetch for external APIs -->
  <link rel="dns-prefetch" href="https://www.googletagmanager.com">
  <link rel="dns-prefetch" href="https://www.google-analytics.com">
</head>
```

---

## Phase 5: Astro-Specific Optimizations (10-15 min)

### 5.1 Check Astro Config
**Target:** `astro.config.mjs`

**Actions:**
- [ ] Verify `output: "static"` is set (already is)
- [ ] Check `vite.build.minify` is enabled
- [ ] Ensure no unneeded integrations loaded
- [ ] Verify image optimization enabled

**Current Config Check:**
```javascript
// In astro.config.mjs, should have:
export default defineConfig({
  output: 'static',
  vite: {
    build: {
      minify: 'terser',
      cssMinify: true,
    }
  }
});
```

### 5.2 Component Lazy Loading
**Target:** Components below fold

**Actions:**
- [ ] Add `client:lazy` to interactive components below fold
- [ ] Use `client:visible` for components that need interaction when visible
- [ ] Keep above-fold components SSR only

**Code Pattern:**
```astro
<!-- Above fold - SSR only, no hydration -->
<Hero />

<!-- Below fold - lazy hydrate -->
<FeatureSection client:lazy />
```

---

## Implementation Checklist

### Files to Modify:
- [ ] `src/layouts/RootLayout.astro` - Head optimization, script deferral
- [ ] `src/styles/global.css` - CSS optimizations, content-visibility
- [ ] `src/components/Hero.astro` - LCP optimization
- [ ] `src/components/*.astro` - Image optimization, lazy loading
- [ ] `astro.config.mjs` - Build settings verification
- [ ] `package.json` - Check dependencies (if removing unused libs)

### Testing Commands:
```bash
# Build and check size
npm run build

# Run Lighthouse locally (after deploy)
npm run build && npm run preview

# Check bundle analysis
# (optional) npm install -D rollup-plugin-visualizer
```

---

## Priority Order (Do These First)

1. **HIGH PRIORITY** (15 min)
   - [ ] Add `content-visibility: auto` to global.css
   - [ ] Add `font-display: swap` to @font-face
   - [ ] Move GTM script to body end with async
   - [ ] Add image `loading="lazy"` + `decoding="async"`

2. **MEDIUM PRIORITY** (20 min)
   - [ ] Add preload/preconnect links
   - [ ] Add explicit width/height to images
   - [ ] Optimize Hero image specifically
   - [ ] Check Astro config

3. **LOWER PRIORITY** (15 min)
   - [ ] Tree-shake unused JavaScript
   - [ ] Convert images to WebP
   - [ ] Add lazy-load to below-fold components
   - [ ] Cleanup console.logs

---

## Expected Impact

| Change | Effort | Impact | Score Gain |
|--------|--------|--------|-----------|
| content-visibility + font-display | 5 min | HIGH | +15-20 pts |
| GTM deferral | 2 min | HIGH | +10-15 pts |
| Image optimization | 10 min | MEDIUM | +8-12 pts |
| Preload/Preconnect | 5 min | MEDIUM | +5-8 pts |
| CSS optimization | 5 min | LOW | +3-5 pts |
| **TOTAL** | **27 min** | **HIGH** | **+41-60 pts** |

---

## Notes
- Make changes incrementally and test after each phase
- Build takes ~1.6s, so quick feedback loop
- Deploy after each phase to see real impact
- These are complementary to Cloudflare caching fixes
- Combined with Cloudflare work, should hit 95+ easily

**Start when ready - I can implement all of these while you're in Cloudflare!**
