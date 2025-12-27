# Quick Fix Guide - Production Readiness

## 5 Priority Fixes (Est. 25 minutes total)

---

## FIX #1: Remove svgo from ssr.external (1 minute)

**File:** `astro.config.mjs`

**Before:**

```javascript
vite: {
  build: {
    minify: 'esbuild',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-animations': ['src/styles/animations.css'],
        },
      },
    },
  },
  ssr: {
    external: ['svgo'],  // ← REMOVE THIS
  },
}
```

**After:**

```javascript
vite: {
  build: {
    minify: 'esbuild',
    cssCodeSplit: true,
  }
}
```

**Why:** `svgo` is not used and not in dependencies. Removes unnecessary config warning.

---

## FIX #2: Remove misconfigured rollup animations config (1 minute)

**File:** `astro.config.mjs`

The rollupOptions reference a non-existent `animations.css` file. This was removed in the quick fix above.

**Why:** Animations are defined inline in components. No separate animations.css file exists.

---

## FIX #3: Remove duplicate Footer import from homepage (2 minutes)

**File:** `src/pages/index.astro`

**Before (lines 1-15):**

```javascript
---
import RootLayout from '../layouts/RootLayout.astro';
import Hero from '../components/Hero.astro';
import Services from '../components/Services.astro';
import Stack from '../components/Stack.astro';
import Portfolio from '../components/Portfolio.astro';
import Consulting from '../components/Consulting.astro';
import VendorNetwork from '../components/VendorNetwork.astro';
import FAQ from '../components/FAQ.astro';
import FinalCTA from '../components/FinalCTA.astro';
import Footer from '../components/Footer.astro';  // ← REMOVE THIS LINE
```

**After:**

```javascript
---
import RootLayout from '../layouts/RootLayout.astro';
import Hero from '../components/Hero.astro';
import Services from '../components/Services.astro';
import Stack from '../components/Stack.astro';
import Portfolio from '../components/Portfolio.astro';
import Consulting from '../components/Consulting.astro';
import VendorNetwork from '../components/VendorNetwork.astro';
import FAQ from '../components/FAQ.astro';
import FinalCTA from '../components/FinalCTA.astro';
```

**Also remove from template (line 43):**

```html
<!-- REMOVE THIS LINE: -->
<!-- <Footer /> -->
```

**Why:** Footer is already rendered by RootLayout. Duplicate causes unnecessary rendering.

---

## FIX #4: Fix hardcoded canonical URL (5 minutes)

**File:** `src/layouts/RootLayout.astro`

**Before (line 28):**

```html
<link rel="canonical" href="https://nozallc.us" />
```

**After:**

```html
<link rel="canonical" href="{Astro.url}" />
```

**Why:** Each page should have its own canonical URL, not always homepage.

---

## FIX #5: Move duplicate animations to global.css (15 minutes)

**File:** `src/styles/global.css`

**Add at the END of global.css:**

```css
/* Animation Keyframes - Global */

@keyframes twinkle {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
}

@keyframes drift {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(50px, 50px);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) translateX(0);
    opacity: 0.5;
  }
  50% {
    transform: translateY(-50px) translateX(30px);
    opacity: 1;
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes expand {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 800px;
  }
}

@keyframes pulse {
  0%,
  60%,
  100% {
    opacity: 0.4;
    transform: scale(0.8);
  }
  30% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse-line {
  0%,
  100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
}

@keyframes spin-orbit {
  0% {
    transform: translate(-50%, -50%) rotateX(75deg) rotateZ(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotateX(75deg) rotateZ(360deg);
  }
}

@keyframes pulse-glow {
  0%,
  100% {
    opacity: 0.5;
    filter: drop-shadow(0 0 8px rgba(0, 212, 255, 0.4));
  }
  50% {
    opacity: 1;
    filter: drop-shadow(0 0 20px rgba(0, 212, 255, 0.8));
  }
}

@keyframes orbit-motion-1 {
  0% {
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
  }
  100% {
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
}

@keyframes orbit-motion-2 {
  0% {
    top: 13.4%;
    left: 84.3%;
  }
  100% {
    top: 100%;
    left: 84.3%;
  }
}

@keyframes orbit-motion-3 {
  0% {
    top: 50%;
    left: 93.3%;
    transform: translateY(-50%);
  }
  100% {
    top: 50%;
    left: -5%;
    transform: translateY(-50%);
  }
}

@keyframes orbit-motion-4 {
  0% {
    bottom: 13.4%;
    right: 15.7%;
  }
  100% {
    bottom: 100%;
    right: 15.7%;
  }
}

@keyframes orbit-motion-5 {
  0% {
    bottom: 0%;
    left: 50%;
    transform: translateX(-50%);
  }
  100% {
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
}

@keyframes orbit-motion-6 {
  0% {
    top: 50%;
    left: 6.7%;
    transform: translateY(-50%);
  }
  100% {
    top: 50%;
    left: 93.3%;
    transform: translateY(-50%);
  }
}
```

**Then remove @keyframes from all these files:**

- `src/pages/services/index.astro`
- `src/pages/websites/index.astro`
- `src/pages/branding/index.astro`
- `src/pages/digital-marketing/index.astro`
- `src/pages/photo-video/index.astro`
- `src/pages/about/index.astro`
- `src/pages/consulting/index.astro`
- `src/pages/vendor-network/index.astro`
- `src/pages/contact/index.astro`
- `src/components/Hero.astro`
- `src/components/Stack.astro`
- `src/components/VendorNetwork.astro`
- `src/components/FAQ.astro`

**Why:** Removes code duplication (saves ~5KB), improves maintainability, allows animations to be updated in one place.

---

## ✅ VERIFICATION STEPS

After applying all fixes:

```bash
# 1. Build and check for errors
npm run build

# 2. Test locally
npm run preview

# 3. Check form works
# Navigate to /contact and test form submission

# 4. Test all links work
# Click through Nav, Footer, and CTA buttons

# 5. Test mobile responsiveness
# Open in mobile browser, test hamburger menu

# 6. Lighthouse check (if running preview)
# Open browser DevTools, run Lighthouse audit
```

Expected results:

- ✓ Build completes without errors
- ✓ All pages load
- ✓ All links work
- ✓ Form submits to Formspree
- ✓ Navigation is smooth
- ✓ Mobile menu toggles properly
- ✓ Lighthouse score >90 (likely >95)

---

## 📊 IMPACT SUMMARY

| Fix                      | File Changes      | Time       | Bundle Impact        |
| ------------------------ | ----------------- | ---------- | -------------------- |
| #1: Remove svgo          | 1 file modified   | 1 min      | -0 bytes (config)    |
| #2: Remove rollup config | 1 file modified   | 1 min      | -0 bytes (config)    |
| #3: Remove Footer dup    | 1 file modified   | 2 min      | -50 bytes            |
| #4: Fix canonical        | 1 file modified   | 5 min      | +5 bytes (Astro.url) |
| #5: Move animations      | 13 files modified | 15 min     | -5KB (removed dups)  |
| **Total**                | **17 files**      | **25 min** | **-5KB**             |

---

## 🚀 DEPLOYMENT

Once all fixes are applied and tested:

1. Commit changes to GitHub
2. Push to main branch
3. Cloudflare Pages will auto-deploy
4. Verify on production URL

No build configuration changes needed. Site is ready! 🎉

---

**Questions?** Refer to full audit: `INFRASTRUCTURE_AUDIT_FINAL.md`
