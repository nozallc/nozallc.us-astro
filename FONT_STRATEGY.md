# Font Loading Strategy

## Current Status: System Fonts Only ✅

**Date**: January 14, 2026

### Font Stack (global.css)
```css
font-family:
  -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
  Cantarell, sans-serif;
```

### Fonts in Use
- **Apple system fonts** (macOS/iOS)
- **Segoe UI** (Windows)
- **Roboto, Oxygen, Ubuntu, Cantarell** (Linux)
- **Generic sans-serif fallback**

### Benefits
✅ **Zero network requests** – fonts already available on user devices  
✅ **Instant render** – no FOIT (Flash of Invisible Text)  
✅ **Fast LCP** – headline paints immediately  
✅ **Lower bandwidth** – no font files to download  
✅ **Optimal CLS** – no font swap reflows  

### External Font Status
- ❌ **No Google Fonts imported** (preconnect was orphaned, now removed)
- ❌ **No custom @font-face declarations**
- ❌ **No Typekit/Adobe fonts**
- ❌ **No FontAwesome** (emojis used for icons instead)

## Future Customization (If Needed)

If custom fonts are added in the future, follow this pattern:

### Self-Hosted Fonts (Recommended for Performance)
1. Download `.woff2` files locally to `/public/fonts/`
2. Add @font-face to global.css:
   ```css
   @font-face {
     font-family: 'CustomFont';
     src: url('/fonts/custom.woff2') format('woff2');
     font-display: swap;  /* CRITICAL: Allow system font during load */
     font-weight: 400;
     font-style: normal;
   }
   ```
3. Apply to specific elements only (not body):
   ```css
   h1, h2, h3 { font-family: 'CustomFont', sans-serif; }
   ```

### Font-Display Strategy
- **`font-display: swap`** – Recommended (use system font immediately, swap to custom when ready)
- **`font-display: optional`** – Use custom only if it loads quickly
- **`font-display: block`** – ❌ Avoid (causes FOIT delay)

### Performance Checklist
- [ ] Preload only critical font weights/styles
- [ ] Limit to max 2 font families
- [ ] Host fonts locally (not CDN unless Cloudflare)
- [ ] Use modern formats (.woff2)
- [ ] Apply variable fonts if many weights needed
- [ ] Test LCP impact with Lighthouse

## Current Production Status
✅ System fonts only → **No changes needed**  
✅ No external font requests → **LCP unaffected**  
✅ Strategy documented → **Ready for future customization**
