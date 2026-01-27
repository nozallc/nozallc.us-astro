# Lighthouse Performance Optimization Plan
**Goal:** Achieve 95+ across the board

---

## Current Issues Summary

### Critical Issues (High Impact)
1. **LCP Element Render Delay: 3,680 ms** ⚠️ CRITICAL
   - The h1 "Launch Your Business Into the Future" has excessive render delay
   - This is the main performance blocker
   
2. **Unused JavaScript: 75.2 KiB** ⚠️ HIGH
   - Google Tag Manager: 140.1 KiB file with 75% unused code
   - Est savings: 75.2 KiB

3. **Render Blocking CSS: 7.2 KiB, 170 ms** 
   - CSS blocks initial page paint
   - Est savings: possible inline/defer strategy

### Medium Issues
4. **Cache TTL Mismatch**
   - `/cloudflare-static/email-decode.min.js` has only 47m 53s TTL (should be 1y+)
   - Est savings: 5 KiB
   - Beacon.min.js already has 1d (good)

---

## Quick Win Action Plan

### PRIORITY 1: Fix LCP Render Delay (3,680 ms) → Est +20-30 points
**Root Cause:** Large hero element or unoptimized font loading

**Actions:**
- [ ] Check if hero image/video is blocking render
- [ ] Defer non-critical hero animations
- [ ] Use `content-visibility: auto` on below-fold elements
- [ ] Ensure fonts are system stack or web fonts with `font-display: swap`
- [ ] Move non-critical JavaScript to end of body or defer attribute

**Implementation:**
```css
/* Add to global CSS */
h1.hero-headline { content-visibility: auto; }
img, video { content-visibility: auto; }
```

---

### PRIORITY 2: Defer Google Tag Manager (75.2 KiB) → Est +15-20 points
**Root Cause:** GTM loaded synchronously, 75% unused on load

**Quick Win Options:**
1. **Move GTM to end of body** (safest)
2. **Use async GTM loading** (better)
3. **Remove GTM if not critical** (best for performance)

**Implementation:**
```html
<!-- Instead of <head>, move to </body> end -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-WKD299X2FT"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-WKD299X2FT');
</script>
```

---

### PRIORITY 3: Configure Cloudflare Caching (5 KiB + faster repeats) → Est +5-10 points

**Required Steps:**
1. Log into Cloudflare Dashboard
2. Go to: **Caching** → **Cache Rules** OR **Page Rules** (depending on plan)
3. Set cache rules:

**Option A - Cache Rules (Recommended, newer):**
```
Caching > Cache Rules > Create Rule

Set 1: Static Assets
- Path: *.min.js, *.css, *.svg, *.png, *.jpg, *.webp
- Cache Level: Cache Everything
- Browser TTL: 1 year
- Edge TTL: 1 year

Set 2: Email Decode Script
- URL Path: /cloudflare-static/email-decode.min.js
- Cache Level: Cache Everything  
- Browser TTL: 1 year
- Edge TTL: 1 month
```

**Option B - Page Rules (Legacy):**
```
Page Rules > Create Page Rule

Rule 1:
URL: nozallc.us/*/cloudflare-static/*
- Cache Level: Cache Everything
- Browser Cache Expiration: 1 year

Rule 2:
URL: nozallc.us/*.{js,css,svg,png,jpg,webp}
- Cache Level: Cache Everything
- Browser Cache Expiration: 1 year
```

**Also Enable:**
- Caching → Default Cache Control: `max-age=31536000` (1 year)
- Speed → Minify: Enable all (JS, CSS, HTML)
- Speed → Brotli Compression: Enable

---

### PRIORITY 4: Optimize CSS Loading (7.2 KiB, 170 ms) → Est +5-8 points

**Quick Wins:**
- [ ] Add `rel="preload"` to critical CSS
- [ ] Defer non-critical CSS with media queries
- [ ] Remove unused CSS classes
- [ ] Minify CSS (already done by Astro, verify in build)

**Implementation:**
```html
<!-- In <head> -->
<link rel="preload" as="style" href="/_astro/index.XIELWYF6.css">
<link rel="stylesheet" href="/_astro/index.XIELWYF6.css">
```

---

## Implementation Roadmap

### Phase 1 (Today) - Cloudflare Configuration
1. Set up Cache Rules in Cloudflare (10 min)
   - Static assets: 1 year cache
   - email-decode.min.js: 1 year cache
   - Enable Minify (JS, CSS, HTML)
   - Enable Brotli compression

2. Enable additional optimizations:
   - Auto Minify
   - Rocket Loader (if not interfering with functionality)

**Expected Impact:** +5-10 points

### Phase 2 (Next) - LCP Investigation & Fix
1. Run PageSpeed Insights again to identify LCP element
2. Apply content-visibility and font optimization
3. Test with DevTools Performance profiler
4. Measure impact

**Expected Impact:** +20-30 points

### Phase 3 - GTM Deferral
1. Move GTM script to end of body
2. Or implement async loading
3. Test analytics still firing

**Expected Impact:** +15-20 points

---

## Cloudflare Dashboard Quick Reference

**Path to Cache Rules:**
1. Caching (left sidebar) → Cache Rules
2. Create Rule:
   - **When:** (Custom filter expression)
   - **Then:** Cache Level: Cache Everything + TTLs
3. Save and deploy

**Path to Page Rules:**
1. Page Rules (left sidebar)
2. Create Page Rule:
   - URL pattern: `nozallc.us/*`
   - Actions: Cache Level, Browser Cache Expiration
3. Order matters (top rule takes precedence)

**Key Settings:**
- Cache Level: "Cache Everything" = cache all responses
- Browser TTL: How long browser keeps before revalidation
- Edge TTL: How long Cloudflare keeps before origin check

---

## Success Metrics

| Metric | Current | Target | Gain |
|--------|---------|--------|------|
| LCP | 3.68s | <1.8s | ~50 points |
| FCP | Unknown | <1.8s | ~20 points |
| Unused JS | 75.2 KiB | <10 KiB | ~15 points |
| Cache Score | Low | High | ~10 points |
| **Total Potential** | **~65%** | **95%+** | **+30 points** |

---

## Notes
- Est savings are Lighthouse estimates, actual improvements vary
- GTM deferral has biggest payoff (75.2 KiB) but verify analytics still work
- LCP delay is unusual at 3,680ms - likely a hero element issue
- Once Cloudflare caching is set, repeat visitors will see dramatic improvements
