# HOMEPAGE TRANSFORMATION PROPOSAL — FINAL APPROVED VERSION
## NOZA LLC Homepage + Navigation Realignment  
**Phase:** Today's Implementation  
**Date:** March 17, 2026  
**Scope:** Homepage transformation with navigation label alignment  
**Goal:** GBP-aligned homepage + updated nav labels + correct internal links + zero 404s  
**Status:** ✅ **APPROVED AND READY FOR CODING**

---

## SECTION A: TODAY'S APPROVED SCOPE

### What WILL Change Today

#### 1. Navigation Labels (3 items)
```
Digital Marketing          → Local SEO Optimization
Websites                   → High-Performance Websites
Photo & Video              → Video & Media Production
```

#### 2. Homepage Copy & Structure
- **Hero section:** Keep component, **PRESERVE headline** "Launch Your Business Into the Future", optimize subheadline
- **Services section:** Keep component, update service titles/descriptions, add Automation Systems card
- **Stack section:** Keep component, reposition as "Why Choose NOZA" (outcome-focused)
- **Portfolio section:** Keep component, minimal changes needed
- **Consulting section:** Keep component, position as premium strategic layer (not primary entry point)
- **FAQ section:** Keep component, update with audit/automation/expectation-focused topics
- **FinalCTA section:** Keep component, update CTA copy

#### 3. Removed from Primary Nav (Today)
- **Services:** Remove from header nav, move to footer (URL stays live)
- **Vendor Network:** Remove from header nav, remove from homepage, **archive in place** (URL stays live but unpromoted)

#### 4. Translation Strings Updated (i18n/locales/en.json)
- `nav.digitalMarketing`: "Digital Marketing" → "Local SEO Optimization"
- `nav.websites`: "Websites" → "High-Performance Websites"
- `nav.photoVideo`: "Photo & Video" → "Video & Media Production"
- Update hero, services, stack, consulting, faq copy per approvals
- Add Automation Systems card description

#### 5. Nav Component Changes (src/components/Nav.astro)
- Update hardcoded nav labels to match i18n strings (3 items)
- Remove Services nav item HTML
- Remove Vendor Network nav item HTML
- All URLs stay the same (only labels and nav structure change)

#### 6. Homepage Component Changes (src/pages/index.astro)
- Remove `<VendorNetwork lang={currentLang} />` from render order
- Keep all other component renders (including Services, even though removed from nav)
- Keep page description as-is (or minor update)

### What will NOT Change Today

#### ❌ Deferred to Later Phases
- Creating `/google-ads` page (Phase 5)
- Creating `/automation` page (Phase 6) — homepage uses temporary /contact link
- Splitting `/photo-video` into separate video/photo pages (Phase 4)
- Changing CSS/styling (using existing design system)
- Renaming URLs (keep current URLs for all services)
- Restructuring component internals
- Spanish translations (English-only today)

#### ✅ Preserved
- Hero component and styling
- All service page URLs
- Contact URL
- Layout/structure of all components
- Mobile responsiveness logic

---

## SECTION B: FINAL HOMEPAGE STRUCTURE FOR TODAY

### Approved Structure After Today
```
1. Hero
   - Headline: "Launch Your Business Into the Future" [PRESERVED]
   - Subheadline: "For small businesses ready to improve local rankings, uncover competitor gaps, and grow with high-performance websites, strategic marketing, and AI-powered automation."
   - CTAs: Keep as-is
   
2. Services (6-Card Grid) — APPROVED CARD ORDER
   1. Local SEO Optimization → /digital-marketing
   2. High-Performance Websites → /websites
   3. Video & Media Production → /photo-video
   4. Brand & Design → /branding
   5. Automation Systems → /contact (temporary, future /automation)
   6. Business Consulting → /consulting
   
3. Why Choose NOZA (Current "Stack" component, reframed)
   - Outcome-focused methodology + benefits
   
4. Portfolio ("Real Projects, Real Growth")
   - Keep case studies as-is
   
5. Consulting Services (Premium Strategic Layer)
   - 6 specialty cards
   - Positioned as premium layer, not primary entry point
   - Free performance/marketing audit is real entry point
   
6. FAQ Section (6 Approved Topics)
   - Focus on local visibility, performance, free audits, automation, realistic timelines
   
7. Final CTA
   - Keep link to /contact
```

---

## SECTION C: FINAL NAV LABEL PLAN FOR TODAY

### Navigation Label Changes (3 Items) — APPROVED

| Current Label | New Label | Keep in Primary Nav? | URL Change? | Rationale |
|---------------|-----------|----------------------|------------|-----------|
| **Digital Marketing** | **Local SEO Optimization** | ✅ YES | ❌ NO (/digital-marketing stays) | Specific and GBP-aligned. Primary category. |
| **Websites** | **High-Performance Websites** | ✅ YES | ❌ NO (/websites stays) | Reframes from tech to business outcome. |
| **Photo & Video** | **Video & Media Production** | ✅ YES | ❌ NO (/photo-video stays) | Emphasizes video as primary. |

### Navigation Removal Decisions (2 Items) — APPROVED

#### Decision 1: Services Nav Item
| Aspect | Decision | Reasoning |
|--------|----------|-----------|
| **Keep in primary nav?** | ❌ NO — Remove today | Redundant. Wastes nav space. |
| **Keep URL alive?** | ✅ YES — Keep `/services` | SEO value, existing backlinks |
| **Move to footer?** | ✅ YES — "Explore All Services" link | Secondary access point |

#### Decision 2: Vendor Network Nav Item — APPROVED ARCHIVE IN PLACE
| Aspect | Decision | Reasoning |
|--------|----------|-----------|
| **Keep in primary nav?** | ❌ NO — Remove today | Not core customer-facing service. |
| **Remove from homepage?** | ✅ YES — Remove component | Don't emphasize to primary audience. |
| **Keep URL alive?** | ✅ YES — Archive in place | Keep for possible future use, low cost to maintain. |
| **Action** | Remove nav item HTML + remove homepage component (keep page URL unpromoted) | Safe, simple, reversible. |

### Final Primary Navigation Structure (After Today)
```
HOME | LOCAL SEO OPTIMIZATION | HIGH-PERFORMANCE WEBSITES | VIDEO & MEDIA PRODUCTION | BRANDING | CONSULTING | CONTACT
+ Footer: "Explore All Services" → /services
```

---

## SECTION D: HOMEPAGE LINKING MAP FOR TODAY

### Service Cards → Landing Pages (All Live URLs)

| Homepage Label | Link Today | Current Page | Status | Future |
|---|---|---|---|---|
| **Local SEO Optimization** | `/digital-marketing` | Digital Marketing | ✅ LIVE | Rewrite Phase 2 |
| **High-Performance Websites** | `/websites` | Websites | ✅ LIVE | Rewrite Phase 3 |
| **Video & Media Production** | `/photo-video` | Photo & Video | ✅ LIVE | Expand Phase 4 |
| **Brand & Design** | `/branding` | Branding | ✅ LIVE | Keep as-is |
| **Automation Systems** | `/contact` | Contact form | ✅ LIVE | Create /automation Phase 6 |
| **Business Consulting** | `/consulting` | Consulting | ✅ LIVE | Premium layer |

### Primary CTAs
- Hero "Book Discovery Call" → `/contact`
- Hero "See Our Work" → Portfolio section anchor (no nav change)
- Service cards → Respective pages (as above)
- Consulting section → `/consulting` or `/contact`
- Final CTA → `/contact`

---

## SECTION E: FINAL APPROVED COPY DIRECTION

### 1. Hero Section — APPROVED

**Headline (PRESERVED):** "Launch Your Business Into the Future"

**Subheadline (NEW):** "For small businesses ready to improve local rankings, uncover competitor gaps, and grow with high-performance websites, strategic marketing, and AI-powered automation."

---

### 2. Services Section — 6 CARDS APPROVED

**Section Title:** "Services That Drive Growth for Lexington Businesses"
**Section Subtitle:** "From local search rankings to high-performance websites, we deliver measurable results"

**Card 1: Local SEO Optimization**
- "Get your business found first in local search and Google Maps. We optimize your GBP profile, build local authority, and drive qualified leads to your door."

**Card 2: High-Performance Websites**
- "Fast websites convert visitors into customers. We build SEO-ready sites that load in milliseconds and turn browsing into buying."

**Card 3: Video & Media Production**
- "Cinematic content that sells. From property showcases to commercial videos to drone footage—professional media that captures attention and builds trust."

**Card 4: Brand & Design**
- "Visual identities that stand out. We create distinctive brands that resonate with your market and build lasting recognition."

**Card 5: Automation Systems** (NEW)
- "Scale your business with AI-powered workflows. We implement CRM systems, automate lead management, and build processes that grow revenue while you sleep."
- Link: `/contact` (temporary, will become `/automation` Phase 6)

**Card 6: Business Consulting**
- "Strategic guidance for sustainable growth. Premium consulting that complements our core services and accelerates scaling for serious business owners."

---

### 3. Why Choose NOZA — APPROVED REFRAME

**Title:** "Why Lexington Businesses Choose NOZA"
**Subtitle:** "Built on proven systems that deliver measurable growth"

**4 Methodology Nodes (Outcome-Focused):**

1. **Easy Updates** — "Content updates without coding knowledge. Simple, safe, fast."
2. **Version Control** — "Complete history and rollback ability. No 'oops' moments."
3. **Lightning-Fast Framework** — "Sub-second load times. Speed = rankings + conversions."
4. **Global Delivery** — "Worldwide presence delivered locally. Your audience gets instant speed."

**4 Benefits:**
1. "Full creative control with no restrictions"
2. "Lightning-fast load speeds that win Google rankings"
3. "Strong SEO architecture built into every page"
4. "Easy updates without expensive developer hours"

---

### 4. Portfolio Section — MINIMAL CHANGES

**Title:** "Real Projects. Real Growth." (Keep as-is)
**Subtitle:** "Case studies that showcase real business impact" (Optional minor update)

Keep all 6 case studies as-is.

---

### 5. Consulting Services Section — APPROVED PREMIUM LAYER POSITIONING

**Title:** "Strategy, Systems & Support for Real Small Businesses"
**Subtitle:** "Premium consulting that accelerates your growth"

**Intro Context:** "Our consulting services deepen our core digital offerings. These are for serious business owners ready for premium strategic partnership. Most clients start with our free performance audit, then choose core services (Local SEO, Websites, Automation), then add consulting for accelerated growth."

Keep all 6 cards as currently structured.

---

### 6. FAQ Section — APPROVED 6 TOPICS

**Question 1:** "How do I know if my website is losing customers?"
- **Answer:** "Introduce the free performance audit—explains how it reveals conversion leaks, speed issues, and ranking opportunities."

**Question 2:** "Why is local SEO critical for Lexington businesses?"
- **Answer:** "50% of mobile searches have local intent. Local SEO drives foot traffic, phone calls, and online visibility in your market."

**Question 3:** "How long does it take to see local search results?"
- **Answer:** "Realistic timeline: 30-60 days for initial improvements, 3-6 months for major ranking shifts. Depends on current state and competitiveness."

**Question 4:** "What does a free performance audit include?"
- **Answer:** "Explain the entry offer—website speed analysis, local SEO assessment, competitor gaps, conversion opportunities, actionable recommendations."

**Question 5:** "How can automation help my business grow?"
- **Answer:** "CRM automation reduces manual work, improves lead follow-up, scales sales processes, and builds recurring revenue. HighLevel integration mentioned."

**Question 6:** "What should I expect in our first consultation?"
- **Answer:** "Discovery call process—we listen, ask about your goals, audit your current state, explain opportunities, and share free resources and recommendations."

---

## SECTION F: FILE-LEVEL IMPLEMENTATION PLAN

### Files Requiring Changes

#### 1. **src/i18n/locales/en.json** — PRIMARY
**Effort:** ~45 minutes
**Risk:** 🟢 LOW (text-only, no structure changes)

**Changes Summary:**
- 3 nav label renames
- Hero headline (keep), hero subheadline (rewrite)
- Services title, subtitle, card titles/descriptions
- Stack title, subtitle, 4 node titles/descriptions, 4 benefits
- Consulting subtitle/intro (optional minor update)
- 6 FAQ question/answer pairs
- Final CTA headline

**Key Strings to Update:**
```
NAV LABELS:
"nav.digitalMarketing" → "Local SEO Optimization"
"nav.websites" → "High-Performance Websites"  
"nav.photoVideo" → "Video & Media Production"

HERO:
"hero.headline" → KEEP "Launch Your Business Into the Future"
"hero.subheadline" → NEW subheadline text

SERVICES:
"services.title" → "Services That Drive Growth for Lexington Businesses"
"services.subtitle" → "From local search rankings to high-performance websites, we deliver measurable results"
"services.digitalMarketing.title" → "Local SEO Optimization"
"services.digitalMarketing.desc" → "Get your business found first in local search..."
"services.websites.title" → "High-Performance Websites"
"services.websites.desc" → "Fast websites convert visitors..."
"services.photoVideo.title" → "Video & Media Production"
"services.photoVideo.desc" → "Cinematic content that sells..."
"services.branding.title" → "Brand & Design" (Minor rename)
+ ADD NEW: "services.automation.title" → "Automation Systems"
+ ADD NEW: "services.automation.desc" → "Scale your business with AI-powered workflows..."

STACK:
"stack.title" → "Why Lexington Businesses Choose NOZA"
"stack.subtitle" → "Built on proven systems that deliver measurable growth"
(4 node titles and descriptions)
(4 benefits revised)

FAQ:
(6 question/answer pairs per approved topics)

FINAL CTA:
(Minor updates for consistency)
```

---

#### 2. **src/components/Nav.astro** — PRIMARY
**Effort:** ~15 minutes
**Risk:** 🟡 MEDIUM (removes nav items, but no JavaScript logic changes)

**Changes:**
```diff
Remove/Update these lines:

- <li><a href="/services" class="nav-services-link">Services</a></li>
+ [DELETE this line entirely]

- <li><a href="/vendor-network" class="nav-vendor-network-link">Vendor Network</a></li>
+ [DELETE this line entirely]

Update labels for these items:

- <li><a href="/digital-marketing" class="nav-digital-marketing-link">Digital Marketing</a></li>
+ <li><a href="/digital-marketing" class="nav-digital-marketing-link">Local SEO Optimization</a></li>

- <li><a href="/websites" class="nav-websites-link">Websites</a></li>
+ <li><a href="/websites" class="nav-websites-link">High-Performance Websites</a></li>

- <li><a href="/photo-video" class="nav-photo-video-link">Photo & Video</a></li>
+ <li><a href="/photo-video" class="nav-photo-video-link">Video & Media Production</a></li>
```

---

#### 3. **src/pages/index.astro** — SECONDARY
**Effort:** ~5 minutes
**Risk:** 🟢 LOW (simple component removal)

**Changes:**
```diff
Remove this import line:
- import VendorNetwork from '../components/VendorNetwork.astro';

Remove this component render:
- <VendorNetwork lang={currentLang} />

Keep all other imports and renders as-is.
```

---

#### 4. **src/i18n/locales/es.json** — DEFERRED
**Status:** ⏸️ **DEFERRED TO LATER PHASE** (Spanish-only, English complete first)

---

### Summary Table

| File | Type | Changes | Risk | Effort | Status |
|------|------|---------|------|--------|--------|
| en.json | Config | Nav labels + copy strings | 🟢 LOW | 45 min | ✅ TODAY |
| Nav.astro | Component | 3 label updates + 2 item removals | 🟡 MED | 15 min | ✅ TODAY |
| index.astro | Page | Remove VendorNetwork import + render | 🟢 LOW | 5 min | ✅ TODAY |
| es.json | Config | Deferred translations | — | 30 min | ⏸️ LATER |

**Total Effort (Today):** ~65 minutes  
**Build + Test:** ~20 minutes  
**Deploy Verification:** ~10 minutes  
**Total Time:** ~95 minutes

---

## SECTION G: RISKS & MITIGATIONS

### Risk 1: Vendor Network Archive-in-Place
**Issue:** Keeping URL live but unpromoted can still be confusing  
**Mitigation:** 
- Search for all vendor-network references before deploy
- Confirm: Only in nav/homepage components (which we're removing)
- Verify no footer or page link to it
**Action:** Run grep before coding

### Risk 2: i18n Keys Used Multiple Places
**Issue:** Nav label reuse in footer or page descriptions  
**Mitigation:**
- Search en.json for all occurrences of nav keys
- Update all references consistently
**Action:** Run grep for key reuse before coding

### Risk 3: Build Fails
**Issue:** Missing dependency or syntax error after edits  
**Mitigation:** Run `npm run build` locally after coding, before deploy
**Action:** Test build before pushing

### Risk 4: Copy Errors
**Issue:** Typos or incomplete sentences in new copy  
**Mitigation:** Proof all new copy line-by-line against this document
**Action:** Visual review before deploy

### Risk 5: VendorNetwork Component Independence
**Issue:** Component has hidden dependencies  
**Mitigation:** Quick search for VendorNetwork imports in other components
**Action:** Verify before removing from homepage

---

## SECTION H: IMPLEMENTATION CHECKLIST

### Pre-Flight Security Checks
- [ ] Grep search: "vendor-network" (verify references)
- [ ] Grep search: "nav.digitalMarketing", "nav.websites", "nav.photoVideo" (find all uses)
- [ ] Check VendorNetwork.astro for dependencies (quick scan)
- [ ] Confirm build environment ready

### Code Changes (65 minutes)
**Step 1A (45 min):** Update src/i18n/locales/en.json
- 3 nav label renames
- Hero subheadline new copy
- Services section copy + add Automation card
- Stack section copy
- Consulting intro (optional)
- 6 FAQ pairs
- Final CTA minor updates

**Step 1B (15 min):** Update src/components/Nav.astro
- Remove 2 nav items (Services, Vendor Network)
- Update 3 nav labels

**Step 1C (5 min):** Update src/pages/index.astro
- Remove VendorNetwork import
- Remove VendorNetwork component render

### Testing & Validation (30 minutes)
- [ ] `npm run build` (2 min) — Verify 32 pages, zero errors
- [ ] Visual test: Chrome desktop (5 min)
  - [ ] Nav labels display correctly (3 renamed, 2 removed)
  - [ ] Homepage copy renders correctly
  - [ ] All sections visible, no layout breaks
- [ ] Visual test: Mobile/hamburger (3 min)
  - [ ] Fewer nav items fit well
  - [ ] Hamburger menu opens/closes
- [ ] Link testing (10 min)
  - [ ] Click each of 6 service cards
  - [ ] Verify destinations correct
  - [ ] Click all CTAs → /contact
  - [ ] Test footer "Explore All Services" → /services
- [ ] Copy check (3 min)
  - [ ] No obvious typos
  - [ ] Sentences complete
  - [ ] Grammar OK
- [ ] Build verification (2 min)
  - [ ] `npm run build` exits code 0

### Pre-Deploy Review
- [ ] Diff check: Review en.json changes (5 min)
- [ ] Diff check: Review Nav.astro changes (3 min)
- [ ] Diff check: Review index.astro changes (2 min)
- [ ] Screenshot homepage before/after (2 min)

### Deploy
- [ ] Commit with message: "Homepage transformation: GBP alignment, nav labels, remove non-core services, add Automation Systems card"
- [ ] Push to production
- [ ] Monitor Cloudflare Pages build
- [ ] Verify deployment successful

### Post-Deploy Verification
- [ ] Visit nozallc.us homepage (live)
- [ ] Click all 6 service cards (verify destinations)
- [ ] Test hero CTAs (→ /contact)
- [ ] Test nav on mobile
- [ ] Check Google Search Console
- [ ] Monitor analytics for anomalies

---

## APPROVAL STATUS

### ✅ Pre-Approved (All Items)
- ✅ Hero headline preserved: "Launch Your Business Into the Future"
- ✅ Hero subheadline optimized for intent capture
- ✅ 6 service cards: Local SEO, Websites, Video, Brand, **Automation Systems**, Consulting
- ✅ Automation Systems temporary link to /contact (will become /automation Phase 6)
- ✅ "Why Choose NOZA" outcome-focused reframe
- ✅ Consulting positioned as premium strategic layer
- ✅ Free performance/marketing audit noted as primary entry point
- ✅ 6 approved FAQ topics
- ✅ Vendor Network archived in place (no URL deletion)
- ✅ Services removed from primary nav, kept in footer
- ✅ English-only today, Spanish deferred

### 🟢 Ready for Implementation
All approvals documented, copy finalized, strategy locked.

**Next:** Run pre-flight grep searches, then proceed with coding.

---

## SUMMARY

**What Changes Today:**
1. Homepage copy optimization (hero subheadline, all service cards, stack, FAQ)
2. Navigation label clarity (3 labels renamed for outcomes focus)
3. Homepage service card refresh (Automation Systems added as 5th card)
4. Removed from homepage/nav but archived (Vendor Network, Services from primary nav)
5. All URLs preserved, zero 404s, future-proof for Phase 2-6 silos

**When Complete:**
✅ Homepage aligned with GBP categories  
✅ Navigation clearly emphasizes business outcomes  
✅ Consulting positioned as premium layer  
✅ Free audit entry point clarified  
✅ Automation Systems visibility increased  
✅ All current links functional  
✅ Ready for Phase 2 silo rewrites  

**Timeline:** ~95 minutes (code + test + review + deploy)

**Risk Profile:** 🟢 **LOW** (text updates, no structural changes, all URLs preserved)

---

## READY TO CODE

**Status:** ✅ **ALL APPROVALS FINALIZED, READY FOR IMPLEMENTATION**

Pre-flight grep searches, then proceed with 3-file edits and deploy.

