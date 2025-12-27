# Language Toggle - Quick Reference Guide
## For Developers

---

## 🚀 Quick Start

**Component Location:** `src/components/LanguageToggle.astro`  
**Integration Point:** `src/components/Nav.astro`  
**Status:** ✅ Live on all pages

---

## 📦 What It Does

- Allows users to toggle between English (EN) and Spanish (ES)
- Persists choice via localStorage
- Fully keyboard accessible
- Screen reader friendly
- Respects reduced motion preferences

---

## ♿ Accessibility Features at a Glance

| Feature | Implementation |
|---------|---|
| **Keyboard Support** | Tab, Enter, Space |
| **Screen Readers** | ARIA labels + live region |
| **State** | `aria-pressed` + visual highlight |
| **Focus** | Visible outline + cyan glow |
| **Motion** | Respects `prefers-reduced-motion` |
| **Mobile** | Touch-friendly, 44x44px+ |

---

## 🔧 How to Use (For Developers)

### Get Current Language
```javascript
const lang = localStorage.getItem('preferredLanguage') || 'en';
// Returns: 'en' or 'es'
```

### Listen to Language Changes
```javascript
document.getElementById('languageToggle')?.addEventListener('click', () => {
  const lang = localStorage.getItem('preferredLanguage');
  console.log('Language switched to:', lang);
});
```

### Render Based on Language
```astro
---
const currentLang = localStorage.getItem('preferredLanguage') || 'en';
---

{currentLang === 'es' ? <SpanishContent /> : <EnglishContent />}
```

---

## 📍 File Structure

```
src/components/
├── LanguageToggle.astro  (212 lines)
│   ├── HTML (button, ARIA)
│   ├── CSS (styling, responsive)
│   └── JavaScript (toggle logic, localStorage)
│
└── Nav.astro (modified)
    ├── Import LanguageToggle
    └── Add to nav-container
```

---

## 🎨 CSS Classes

```css
.language-toggle          /* Main button */
.toggle-label            /* EN or ES text */
.toggle-label.secondary  /* Secondary language label */
.toggle-divider          /* The "/" separator */
.sr-only                 /* Screen reader text */
```

---

## 🎯 ARIA Attributes (Dynamic)

```javascript
// English active
aria-label="Switch language to Español"
aria-pressed="false"

// Spanish active
aria-label="Switch language to English"
aria-pressed="true"
```

---

## 📱 Responsive Breakpoints

```css
Desktop (> 768px)
├── Padding: 0.5rem 1rem
├── Font: 0.85rem
├── Gap: Positioned in flex nav-container
└── Always visible

Mobile (≤ 768px)
├── Padding: 0.4rem 0.6rem
├── Font: 0.75rem
├── Touch target: ≥ 44x44px
└── Closes mobile menu on toggle
```

---

## 🧪 Testing Quick Commands

### Check Keyboard Navigation
```
1. Tab to toggle
2. Press Enter or Space
3. Verify toggle activates
4. Check focus outline visible
```

### Test Screen Reader (macOS VoiceOver)
```
1. Cmd+F5 to enable VoiceOver
2. Tab to toggle
3. Hear: "Switch language to Español, toggle button, not pressed"
4. Press Space to toggle
5. Hear: "Language switched to Spanish"
```

### Test Reduced Motion
```
In macOS System Preferences:
Accessibility → Display → Reduce motion
Language toggle animations should disable
```

---

## 🚨 Common Issues & Solutions

### Toggle not working?
- Check localStorage enabled in browser
- Verify component imported in Nav.astro
- Check browser console for errors

### Screen reader not announcing?
- Verify `aria-label` attribute present
- Check live region (sr-announcement div)
- Test with different screen reader

### Mobile layout broken?
- Check `order: 2` CSS applied
- Verify nav-container has gap
- Test on real mobile device

---

## 📊 Performance Notes

- **Size:** ~2KB JavaScript (minified)
- **Dependencies:** None
- **Network calls:** None (localStorage only)
- **Render impact:** Negligible
- **Load time:** Instant

---

## 🔐 Security

- No external dependencies
- No API calls
- No sensitive data
- LocalStorage only stores 'en' or 'es'
- Client-side only

---

## 🚀 For Future Localization

When implementing full Spanish content:

```astro
---
// Get preferred language
const lang = Astro.locals.preferredLanguage || 'en';
---

{lang === 'es' && <SpanishHome />}
{lang === 'en' && <EnglishHome />}
```

---

## 📚 Full Documentation

For complete details, see:
- `LANGUAGE_TOGGLE_ACCESSIBILITY.md` - Full implementation guide
- `ACCESSIBILITY_SUMMARY.md` - Compliance checklist
- Component code: `src/components/LanguageToggle.astro` - Well documented

---

## ✅ Checklist for Maintenance

- [ ] Toggle appears on all pages
- [ ] Keyboard navigation works
- [ ] Screen reader announces correctly
- [ ] Focus state visible
- [ ] Mobile responsive
- [ ] No console errors
- [ ] LocalStorage persists
- [ ] Reduced motion respected

---

**Last Updated:** December 27, 2025  
**Status:** ✅ Production Ready  
**Maintenance:** Minimal (no dependencies)
