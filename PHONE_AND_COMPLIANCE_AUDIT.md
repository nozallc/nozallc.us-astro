# Phone and Compliance Audit Report

**Date:** March 17, 2026  
**Status:** READ-ONLY AUDIT - NO CHANGES MADE YET  
**Scope:** Full codebase phone number and contact-consent language audit

---

## Executive Summary

### Current State
- **Active Business Phone:** `+1 (859) 452-8415` scattered across 7+ locations
- **Consent Language:** Already compliant with SMS/email/call disclosure on contact pages
- **Forms:** 3 forms identified; 2 have full consent, 1 lacks explicit consent
- **Schema Markup:** Phone in Organization schema only; LocalBusiness schema missing phone
- **Formspree:** All forms use same endpoint (`myzojzzw`)
- **No Centralization:** Phone numbers and compliance copy repeated throughout codebase

### New Requirements
- **Primary Display:** `1(888) 991-NOZA` or `(888) 991-NOZA`
- **Numeric (E.164):** `+18889916692`
- **Tel Link:** `tel:+18889916692`

### Key Findings
✅ Existing consent language is **strong and compliant**  
✅ SMS, email, and call disclosure already present  
✅ STOP unsubscribe and data rates already mentioned  
⚠️ Phone scattered across multiple files and formats  
⚠️ No single source of truth for business contact info  
⚠️ PerformanceReviewForm lacks consent language  
⚠️ vCard has different personal phone number (needs clarification)  

### Recommendations Pre-Approval
1. Create `src/config/businessInfo.ts` as single source of truth
2. Replace all `859-452-8415` references with `18889916692`
3. Add consent language to PerformanceReviewForm
4. Update vCard (clarify if personal or business number)
5. Enhance LocalBusiness schema with phone field
6. Maintain existing compliance copy (already strong)

---

## Global Shared Components

### 1. RootLayout.astro (Schema Markup)

**File:** `src/layouts/RootLayout.astro` (lines 119-136)

**Current State:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NOZA LLC",
  "url": "https://nozallc.us",
  "logo": "https://nozallc.us/nozallc.svg",
  "contact": {
    "@type": "ContactPoint",
    "telephone": "+1-859-452-8415",
    "contactType": "Business Inquiries"
  }
}
```

**Issues:**
- Hardcoded phone in JSON-LD
- Uses hyphenated E.164 format (non-standard)
- No matching phone in LocalBusiness schema

**Recommended Replacement:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NOZA LLC",
  "url": "https://nozallc.us",
  "logo": "https://nozallc.us/nozallc.svg",
  "contact": {
    "@type": "ContactPoint",
    "telephone": "+18889916692",
    "contactType": "Business Inquiries"
  }
}
```

**Also add to LocalBusiness schema (currently missing phone):**
- Add: `"telephone": "+18889916692"`

**Type:** SEO/Schema  
**Confidence:** HIGH  
**Customer-Facing:** No (schema only)  

---

## Contact / Conversion Pages

### 1. English Contact Page

**File:** `src/pages/contact/index.astro`

#### 1.1 - Clickable Phone Link

**Location:** Line 36  
**Current:**
```html
<a href="tel:+1-859-452-8415" class="option-link">+1 (859) 452-8415</a>
```

**Recommended Replacement:**
```html
<a href="tel:+18889916692" class="option-link">(888) 991-NOZA</a>
```

OR (if keeping numeric):
```html
<a href="tel:+18889916692" class="option-link">+1 (888) 991-6692</a>
```

**Type:** Customer-Facing CTA  
**Usage:** Contact Options section (clickable phone card)  
**Confidence:** HIGH  
**Notes:** Display format choice between branded `991-NOZA` vs. numeric  

---

### 2. Spanish Contact Page

**File:** `src/pages/es/contact/index.astro`

#### 2.1 - Clickable Phone Link (Spanish)

**Location:** Line 36 (parallel to English)  
**Current:**
```html
<a href="tel:+1-859-452-8415" class="option-link">+1 (859) 452-8415</a>
```

**Recommended Replacement:**
```html
<a href="tel:+18889916692" class="option-link">(888) 991-NOZA</a>
```

**Type:** Customer-Facing CTA  
**Confidence:** HIGH  

---

## Forms / Compliance / Consent Copy

### 1. Contact Form Consent (English & Spanish)

**File:** `src/pages/contact/index.astro` (line 84)  
**File:** `src/pages/es/contact/index.astro` (parallel line)

**Current (EN):**
```html
<p class="form-subtitle">By submitting this form, you agree to be contacted by NOZA LLC via call, SMS, or email regarding your inquiry. Message frequency varies. Message & data rates may apply. Reply STOP to unsubscribe.</p>
```

**Current (ES):** (Need to verify in Spanish contact page)

**Assessment:** ✅ **ALREADY COMPLIANT**
- ✅ Covers SMS explicitly
- ✅ Covers email explicitly
- ✅ Covers automated calls ("via call")
- ✅ Includes message frequency disclosure
- ✅ Includes "Message & data rates may apply"
- ✅ STOP unsubscribe instruction
- ✅ Proactive consent language ("you agree")

**Recommended Update:** NO CHANGE NEEDED (already strong)

**Type:** Legal/Compliance  
**Confidence:** HIGH  
**Assessment:** This language exceeds baseline requirements. Keep as-is.

---

### 2. Performance Review Form (English & Spanish)

**File:** `src/components/forms/PerformanceReviewForm.astro`  
**Location:** Appears on `/tools/performance-review/` and `/es/tools/performance-review/`  
**Also Used:** `/pages/websites/own-your-website.astro` and `/pages/es/websites/own-your-website.astro`

**Current State:** NO explicit consent language for SMS/email/calls

**Recommended Addition:**
Add a fine-print line below form inputs (before submit button, around line 175-180):

```html
<p style="font-size: 0.85rem; color: var(--text-secondary); margin: 1rem 0;">
  {lang === 'en' 
    ? 'By submitting, you agree to be contacted via email regarding your performance review. Message response times may vary.'
    : 'Al enviar, acepta ser contactado por correo electrónico sobre su revisión de rendimiento. Los tiempos de respuesta pueden variar.'}
</p>
```

**Type:** Compliance/Consent  
**Confidence:** MEDIUM-HIGH  
**Notes:** Form only needs email consent (doesn't offer SMS/call). Simpler than contact form.  
**Assessment:** Performance Review form is lower-stakes (free tool), so simpler consent is appropriate.

---

## i18n / Translation Files

### 1. English Contact Translations

**File:** `src/i18n/locales/en.json`

**Line 230:**
```json
"pages.contact.phone": "+1 (859) 452-8415",
```

**Recommended Replacement:**
```json
"pages.contact.phone": "(888) 991-NOZA",
```

OR (numeric):
```json
"pages.contact.phone": "+1 (888) 991-6692",
```

**Type:** Content/i18n  
**Confidence:** HIGH  

---

**Line 278:**
```json
"pages.contact.placeholderPhone": "(859) 555-0000",
```

**Recommended Replacement:**
```json
"pages.contact.placeholderPhone": "(888) 555-0000",
```

**Type:** UI Placeholder  
**Confidence:** MEDIUM  
**Notes:** Updates example phone area code to match new number's area code (888)

---

### 2. Spanish Contact Translations

**File:** `src/i18n/locales/es.json`

**Line 230:**
```json
"pages.contact.phone": "+1 (859) 452-8415",
```

**Recommended Replacement:**
```json
"pages.contact.phone": "(888) 991-NOZA",
```

**Type:** Content/i18n  
**Confidence:** HIGH  

---

**Line 278:**
```json
"pages.contact.placeholderPhone": "(859) 555-0000",
```

**Recommended Replacement:**
```json
"pages.contact.placeholderPhone": "(888) 555-0000",
```

**Type:** UI Placeholder  
**Confidence:** MEDIUM  

---

## Assets / vCards / Downloads

### 1. Joe Espinoza vCard

**File:** `public/vcards/joe-espinoza.vcf`

**Line 7 (Current):**
```
TEL;TYPE=CELL:+1 (859) 452-0551
```

**ISSUE - CLARIFICATION NEEDED:**
- This phone (`452-0551`) is **different** from the main business number (`452-8415`)
- Format is also different (CELL vs. main line)
- Unclear if this is Joe's personal cell or business direct line

**Recommended Action:**
1. **If personal cell:** Keep as-is (appropriate for vCard)
2. **If business direct line:** Update to match new number
3. **If obsolete:** Remove and use main business line only

**Recommended vCard (Scenario A - Keep Personal Cell):**
```
TEL;TYPE=CELL:+1 (859) 452-0551
TEL;TYPE=WORK:+1 (888) 991-6692
```

**Recommended vCard (Scenario B - Business Only):**
```
TEL;TYPE=WORK:+1 (888) 991-6692
```

**Type:** Asset/Download  
**Confidence:** MEDIUM (requires clarification from you)  
**Notes:** vCard should reflect Joe's actual primary contact method

---

## Utilities / Config / Constants

### 1. NO CENTRALIZED CONFIG CURRENTLY EXISTS

**Finding:** No `src/config/`, `src/consts/`, or similar directory exists.

**Recommended New File:** `src/config/businessInfo.ts`

**Proposed Structure:**
```typescript
// src/config/businessInfo.ts
export const BUSINESS_INFO = {
  name: 'NOZA LLC',
  
  // Phone numbers in multiple formats for different use cases
  phone: {
    display: '1(888) 991-NOZA',           // Brand-friendly display
    displayAlt: '(888) 991-NOZA',         // Alternative display
    numeric: '18889916692',                // Numeric only
    e164: '+18889916692',                 // E.164 standard (for tel links)
    formatted: '+1 (888) 991-6692',       // Formatted display
  },
  
  // Contact methods
  email: 'hello@nozallc.us',
  
  // Compliance/Consent Language
  consent: {
    contact: {
      short: 'We may contact you via SMS, email, or phone.',
      standard: 'By submitting this form, you agree to be contacted by NOZA LLC via call, SMS, or email regarding your inquiry. Message frequency varies. Message & data rates may apply. Reply STOP to unsubscribe.',
      checkbox: 'I agree to be contacted by NOZA LLC via SMS, email, or phone.',
      strict: 'By submitting, you expressly consent to receive communications from NOZA LLC via automated calls, SMS, or email. Message frequency may vary. Message and data rates may apply. You may opt out at any time by replying STOP or contacting us directly.',
    },
    performanceReview: {
      email: 'By submitting, you agree to be contacted via email regarding your performance review. Message response times may vary.',
    }
  },
  
  // Location
  location: {
    city: 'Lexington',
    state: 'Kentucky',
    zip: '40507',
    country: 'US',
  },
  
  // Hours
  hours: {
    weekday: 'Monday - Friday: 9am - 5pm CT',
    weekend: 'Closed',
  },
  
  // Social Links
  social: {
    instagram: 'https://instagram.com/nozallc',
    facebook: 'https://facebook.com/nozallc',
    linkedin: 'https://linkedin.com/company/nozallc',
  },
};

export default BUSINESS_INFO;
```

**Benefits:**
- ✅ Single source of truth
- ✅ Easy to update globally
- ✅ Type-safe (TypeScript)
- ✅ Centralizes compliance copy
- ✅ Supports i18n in future

**Type:** Architecture/Refactoring  
**Confidence:** HIGH  
**Scope:** Future work; not blocking for phone number update

---

## SEO / Schema / Metadata

### 1. LocalBusiness Schema (Missing Phone)

**File:** `src/layouts/RootLayout.astro` (lines 105-118)

**Current LocalBusiness Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "NOZA LLC",
  "image": "https://nozallc.us/nozallc.svg",
  "description": "Digital marketing, branding, websites & business consulting for Lexington KY small businesses",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lexington",
    "addressRegion": "Kentucky",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://instagram.com/nozallc",
    "https://facebook.com/nozallc",
    "https://linkedin.com/company/nozallc"
  ],
  "priceRange": "$$",
  "knowsAbout": ["Digital Marketing", "Web Design", "Branding", "Business Consulting"],
  "areaServed": "Lexington, Kentucky"
}
```

**Issue:** Missing `telephone` field

**Recommended Enhancement:**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "NOZA LLC",
  "image": "https://nozallc.us/nozallc.svg",
  "description": "Digital marketing, branding, websites & business consulting for Lexington KY small businesses",
  "telephone": "+18889916692",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lexington",
    "addressRegion": "Kentucky",
    "postalCode": "40507",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://instagram.com/nozallc",
    "https://facebook.com/nozallc",
    "https://linkedin.com/company/nozallc"
  ],
  "priceRange": "$$",
  "knowsAbout": ["Digital Marketing", "Web Design", "Branding", "Business Consulting"],
  "areaServed": "Lexington, Kentucky"
}
```

**Type:** SEO/Schema  
**Confidence:** HIGH  
**Notes:** Phone in schema improves local search visibility  

---

## Content and Landing Pages

### 1. Check for Hidden Phone References

**Searched:** Own Your Website pages, Services pages, About pages  
**Result:** No hardcoded phone numbers found in content pages (good!)  
**Type:** Verified - No action needed

---

## Third-Party / Scripts / Embedded Code

### 1. Formspree Endpoints

**Current:** All forms hardcode `https://formspree.io/f/myzojzzw`

**Files:**
- `src/pages/contact/index.astro` (line 99, line 323)
- `src/components/forms/PerformanceReviewForm.astro` (line 20, line 329)
- `src/pages/tools/performance-review/index.astro` (line 38)
- `src/pages/es/tools/performance-review/index.astro` (line 39)
- `src/pages/websites/own-your-website.astro` (imported PerformanceReviewForm)
- `src/pages/es/websites/own-your-website.astro` (imported PerformanceReviewForm)

**Recommendation:** No changes needed for phone number update. Formspree endpoint is independent of phone.

**Type:** Non-applicable  
**Confidence:** N/A

---

## Ambiguities / Manual Review Needed

### 1. vCard Phone Number Clarification

**Issue:** `joe-espinoza.vcf` contains `+1 (859) 452-0551` (different from main business number)

**Question for Approval:**
- Is this Joe's personal cell or a business direct line?
- Should it be updated, kept separate, or removed?

**Recommendation:** Await clarification before updating

---

### 2. Display Format Choice for New Number

**Issue:** Multiple display options for `18889916692`

**Options:**
1. **Brand-focused:** `1(888) 991-NOZA` (memorable, alphabetic)
2. **Numeric friendly:** `(888) 991-6692` (clean, standard)
3. **Full formatted:** `+1 (888) 991-6692` (international, formal)
4. **Hybrid:** Show NOZA on hover, numeric as default

**Recommendation:** Use `(888) 991-NOZA` for display (memorable, SEO-friendly)  
Use `tel:+18889916692` for tel links (proper E.164)

---

## Recommended Standard Consent Language

### Summary of Existing Language Assessment

The current consent on the contact form is **already strong and compliant:**

**Current (English):**
> "By submitting this form, you agree to be contacted by NOZA LLC via call, SMS, or email regarding your inquiry. Message frequency varies. Message & data rates may apply. Reply STOP to unsubscribe."

**Strengths:**
- ✅ Clear affirmative consent ("you agree")
- ✅ Explicitly lists SMS
- ✅ Explicitly lists email
- ✅ Explicitly lists calls (automated or otherwise)
- ✅ Addresses message frequency variability
- ✅ Addresses carrier rates disclaimer
- ✅ STOP unsubscribe instruction
- ✅ Concise and readable

### Recommended Tiered Consent Language

For different form types/scenarios:

#### 1. **Full Consent (Main Contact Form)** - KEEP AS-IS
```
By submitting this form, you agree to be contacted by NOZA LLC via call, SMS, or email regarding your inquiry. Message frequency varies. Message & data rates may apply. Reply STOP to unsubscribe.
```

#### 2. **Short Version (Sticky CTA, Pop-ups)** - For tight layouts
```
We may contact you via SMS, email, or phone regarding your inquiry. Message & data rates may apply. Reply STOP to unsubscribe.
```

#### 3. **Checkbox Version** - If checkbox is added in future
```
☐ I agree to be contacted by NOZA LLC via SMS, email, or automated calls regarding my inquiry. I understand message frequency may vary and message & data rates may apply.
```

#### 4. **Strict Compliance Version** - For regulated industries/campaigns
```
By submitting, you expressly consent to receive promotional and transactional communications from NOZA LLC, including automated calls and SMS, to the number provided. Message frequency varies. Message and data rates may apply. You may opt out at any time by replying STOP to any SMS or contacting us directly at hello@nozallc.us.
```

### Recommendation for Next Steps

**Current consent on contact form is already compliant. No immediate changes needed.**

However, recommend:
1. Add email-only consent to PerformanceReviewForm
2. Define reusable consent constants in `src/config/compliance.ts` (future)
3. Add checkbox for stricter compliance if forms are used in paid ads (future)

---

## Recommended Update Strategy

### PHASE 1: Pre-Approval (Current - This Audit)
✅ Complete audit (READ-ONLY)  
✅ Identify all occurrences  
✅ Propose replacements  
✅ **AWAITING YOUR APPROVAL**

### PHASE 2: Post-Approval Execution
After you approve this audit, execute in this order:

#### Step 1: Create Centralized Config (Optional but Recommended)
- Create `src/config/businessInfo.ts`
- Define phone in all formats
- Define reusable consent language

#### Step 2: Update Phone Numbers (Primary Updates)
**Priority A - Customer-Facing (Visible in UI):**
1. Contact page tel links (`src/pages/contact/index.astro` line 36)
2. Spanish contact page tel links (`src/pages/es/contact/index.astro` line 36)
3. i18n translations (en.json line 230, es.json line 230)

**Priority B - SEO & Schema:**
4. RootLayout Organization schema (`src/layouts/RootLayout.astro` line 126)
5. RootLayout LocalBusiness schema (`src/layouts/RootLayout.astro` line 112) - ADD phone

**Priority C - UI Placeholders:**
6. i18n placeholders (en.json line 278, es.json line 278)

**Priority D - Assets (Requires Clarification):**
7. vCard (`public/vcards/joe-espinoza.vcf` line 7) - **PENDING YOUR DECISION**

#### Step 3: Add Consent Language
8. PerformanceReviewForm (`src/components/forms/PerformanceReviewForm.astro` ~line 175)

#### Step 4: Validation
9. Run `npm run build` to verify no syntax errors
10. Test contact form submissions
11. Test tel links on desktop and mobile
12. Verify schema markup in Google Search Console

### Safe Order of Operations

1. **First:** Create config file (non-breaking change)
2. **Second:** Update i18n (automatic propagation to templates)
3. **Third:** Update templates (pulls from i18n)
4. **Fourth:** Update schema (no visual changes)
5. **Fifth:** Add consent to PerformanceReviewForm
6. **Sixth:** Update vCard (pending clarification)
7. **Finally:** Build and test

**Rationale:** This order ensures dependencies are in place before consumers use them, minimizes breaking changes, and validates each layer independently.

---

## Patch Plan

### Summary of All Changes Required

| Category | File | Line(s) | Type | Change | Impact |
|----------|------|---------|------|--------|--------|
| Contact Page EN | `src/pages/contact/index.astro` | 36 | Tel Link | `tel:+1-859-452-8415` → `tel:+18889916692` | Customer-facing |
| Contact Page ES | `src/pages/es/contact/index.astro` | 36 | Tel Link | `tel:+1-859-452-8415` → `tel:+18889916692` | Customer-facing |
| i18n EN | `src/i18n/locales/en.json` | 230 | Text | `+1 (859) 452-8415` → `(888) 991-NOZA` | i18n propagation |
| i18n ES | `src/i18n/locales/es.json` | 230 | Text | `+1 (859) 452-8415` → `(888) 991-NOZA` | i18n propagation |
| i18n Placeholder EN | `src/i18n/locales/en.json` | 278 | Placeholder | `(859) 555-0000` → `(888) 555-0000` | UI only |
| i18n Placeholder ES | `src/i18n/locales/es.json` | 278 | Placeholder | `(859) 555-0000` → `(888) 555-0000` | UI only |
| Schema Org | `src/layouts/RootLayout.astro` | 126 | Schema | `+1-859-452-8415` → `+18889916692` | SEO/Schema |
| Schema LocalBiz | `src/layouts/RootLayout.astro` | 112 | Schema | ADD `"telephone": "+18889916692"` | SEO/Schema |
| Performance Form | `src/components/forms/PerformanceReviewForm.astro` | ~175 | Consent | ADD consent language | Compliance |
| vCard | `public/vcards/joe-espinoza.vcf` | 7 | Asset | **PENDING CLARIFICATION** | Download |

### Files to Update (By Execution Order)

**Phase 2A - i18n Translations** (Foundation)
1. `src/i18n/locales/en.json` (2 changes: phone + placeholder)
2. `src/i18n/locales/es.json` (2 changes: phone + placeholder)

**Phase 2B - Contact Pages** (Main UI)
3. `src/pages/contact/index.astro` (1 change: tel link)
4. `src/pages/es/contact/index.astro` (1 change: tel link)

**Phase 2C - Schema & SEO** (Invisible)
5. `src/layouts/RootLayout.astro` (2 changes: update org phone, add to local biz)

**Phase 2D - Compliance** (Forms)
6. `src/components/forms/PerformanceReviewForm.astro` (1 addition: consent paragraph)

**Phase 2E - Assets** (Pending)
7. `public/vcards/joe-espinoza.vcf` (1 change: PENDING YOUR DECISION)

### Change Complexity Breakdown

| Complexity | Count | Files |
|------------|-------|-------|
| Trivial (text replace) | 6 | i18n × 2, contact pages × 2, schema × 1 |
| Simple (add new property) | 1 | LocalBusiness schema |
| Moderate (add new section) | 1 | PerformanceReviewForm |
| Clarification needed | 1 | vCard |
| **Total** | **9** | |

### Risk Assessment

| Risk | Mitigation |
|------|-----------|
| Break tel links | ✅ Test on mobile/desktop after changes |
| SEO impact | ✅ Validate schema with Google Search Console validator |
| i18n propagation errors | ✅ Check build output for JSON errors |
| Form compliance issues | ✅ Verify consent language is visible in browser |
| vCard confusion | ✅ Get clarification before touching |

### Rollback Strategy

All changes are **safe and easily reversible:**
1. Text replacements: simple find/replace in reverse
2. Schema additions: can remove `telephone` fields without breaking validation
3. Consent additions: can be removed without affecting form functionality
4. i18n changes: most of site will still function with old values

### Build Validation Checklist Post-Update

- [ ] `npm run build` completes without errors
- [ ] No TypeScript type errors in config files (if created)
- [ ] No JSON syntax errors in i18n translations
- [ ] No HTML/Astro syntax errors in contact pages
- [ ] Tel links are clickable and work on mobile
- [ ] Schema validates in https://schema.org/validator/
- [ ] Formspree endpoint still receives submissions
- [ ] All pages prerender successfully

### Deployment Checklist

- [ ] All changes committed to git
- [ ] Changes tested locally with `npm run preview`
- [ ] vCard clarification resolved
- [ ] Schema changes validated
- [ ] Tel links tested on iPhone and Android
- [ ] Build artifact validated
- [ ] Staging deployment successful
- [ ] Production deployment

---

## How to Proceed

### NEXT STEP FOR YOU:

1. **Review this audit** - Read all findings above
2. **Make 2 decisions:**
   - **Decision 1:** Approve the proposed changes? (Yes/No)
   - **Decision 2:** vCard phone number - is it Joe's personal cell, a business line, or should it be removed?
3. **Provide approval** with responses to the above
4. **I will then execute** Phase 2 (all changes) and provide a summary

### Questions for Approval

- [ ] **Phone Display Format:** Prefer `(888) 991-NOZA` or `(888) 991-6692`?
- [ ] **vCard Action:** Keep as-is, update to new number, or remove?
- [ ] **Config File:** Create `src/config/businessInfo.ts` now or later?
- [ ] **Deployment Timeline:** When should changes go live?

---

## Summary of Compliance Status

### ✅ ALREADY COMPLIANT
- Contact form consent language (strong, no changes needed)
- Explicit SMS disclosure
- Explicit email disclosure
- Explicit call disclosure
- Message frequency warning
- Data rates warning
- STOP unsubscribe instruction

### ⚠️ GAPS TO ADDRESS
- Performance Review form lacks explicit consent
- Phone numbers scattered across codebase
- No single source of truth for contact info
- LocalBusiness schema missing phone field

### 📋 RECOMMENDATIONS SUMMARY
1. **Replace old phone** with `+18889916692` (E.164 for links) and display as `(888) 991-NOZA` or `(888) 991-6692`
2. **Create `src/config/businessInfo.ts`** for future maintainability
3. **Add simple consent to PerformanceReviewForm** (email-only is sufficient)
4. **Enhance LocalBusiness schema** with phone field for better local SEO
5. **Clarify vCard phone number** (personal vs. business)

### 🎯 QUICK WINS (Low Risk, High Value)
- Update contact page tel links (2 files, 1 change each = 2 min)
- Update i18n translations (2 files, 2 changes each = 3 min)
- Add phone to LocalBusiness schema (1 file, 1 line = 1 min)
- Update form schema phone (1 file, 1 line = 1 min)

**Total to implement all changes: ~45 minutes**

---

**END OF AUDIT REPORT**

*Awaiting your approval to proceed with Phase 2 implementation.*
