# NAVIGATION ARCHITECTURE AUDIT
## nozallc.us Header/Primary Navigation Realignment  
**Date:** March 17, 2026  
**Phase:** Pre-Homepage Finalization  
**Purpose:** Align primary navigation with GBP categories and ensure practical homepage linking today

---

## EXECUTIVE SUMMARY

**Current State:**
- 9 navigation items (including Contact CTA)
- 3 items misaligned with GBP primary focus
- 2 items diluting primary web real estate
- 2 future service categories missing entirely from nav

**Business Problem:**
Header currently treats all pages equally—so competing for clicks is "Services" (a hub), "Digital Marketing" (vague), "Photo & Video" (too broad), and "Vendor Network" (non-core). This makes it unclear to visitors what the company's PRIMARY offers are.

**Strategic Fix:**
Restructure primary nav to reflect GBP categories in priority order. Remove Non-core items toward footer. Prepare to rename/rewrite 3 pages as silos are completed, without breaking links today.

**What We're Doing Today:**
✅ Audit current header structure  
✅ Classify each nav item  
✅ Recommend future primary nav  
✅ Create practical homepage linking plan  
✅ Preserve current URLs for launch  

**What We're NOT Doing Today:**
❌ No code changes to Nav.astro yet  
❌ No new URLs created (Google Ads, Automation pages come later)  
❌ Homepage links still point to current pages (even if they'll be rewritten)  

---

## SECTION A: HEADER / NAVIGATION ALIGNMENT SUMMARY

### Current GBP Primary Category
**Internet Marketing Service** — Best represented by "Local SEO Optimization" + paid search + lead generation messaging.

### Current GBP Additional Categories  
1. **Media Company** → Photo & Video (exists, currently paired)
2. **Marketing Agency** → Digital Marketing (exists, too vague)
3. **Advertising Agency** → Google Ads (MISSING from nav)
4. **Automation Company** → AI/CRM Automation (MISSING from nav)
5. **Video Production Service** → Photo & Video (exists, lumped together)

### Current Header Structure Problems

| Problem | Current Symptom | Impact | Fix Timing |
|---------|-----------------|--------|------------|
| **Services is redundant** | Nav item links to page that links right back to nav items | Wastes nav space, confuses navigation | Move to footer (Phase 1) |
| **Digital Marketing too vague** | Generic "data-driven" language, doesn't say "Local SEO" clearly | GBP misalignment, loses keyword relevance | Rewrite page + rename label (Phase 2) |
| **Websites focuses on tech stack** | Emphasizes Astro/Cloudflare, not business outcomes | Fails to communicate value to business owners | Rewrite page + rename label (Phase 3) |
| **Photo & Video lumped together** | Combines photography + videography as one service | Video production undersold (GBP category requires separation) | Split into separate nav items (Phase 4) |
| **Vendor Network in primary nav** | Non-core service competing with primary offers | Dilutes message, wrong audience for primary nav | Move to footer/resources (Phase 1) |
| **Google Ads missing** | "Advertising Agency" GBP category has zero visibility | Lost opportunity, traffic leak to competitors | Create new page + nav item (Phase 5) |
| **Automation missing** | "Automation Company" GBP category invisible | Lost opportunity, service invisible to prospects | Create new page + nav item (Phase 6) |
| **Consulting unclear positioning** | Good content but GBP doesn't require it as primary | Premium add-on competing with silos | Keep in nav (secondary), link from primary silos |

---

## SECTION B: CURRENT NAV ITEM AUDIT TABLE

| Priority | Nav Label | Current URL | Page Status | GBP Alignment | Clarity | SMB Value | Recommendation |
|----------|-----------|-------------|-------------|--------------|---------|-----------|-----------------|
| 1️⃣ | **Digital Marketing** | `/digital-marketing` | Generic content | ❌ Poor (vague) | ❌ Confusing | ✅ High (if specific) | KEEP / RENAME / REWRITE |
| 2️⃣ | **Websites** | `/websites` | Tech-focused narrative | ❌ Poor (not outcome-focused) | ❌ Too technical | ✅ High (if reframed) | KEEP / RENAME / REWRITE |
| 3️⃣ | **Photo & Video** | `/photo-video` | Hybrid photo + video | ⚠️ Partial (media mentioned) | ✅ Clear | ✅ High | KEEP (split in Phase 4) |
| 4️⃣ | **Branding** | `/branding` | Strong branding page | ✅ Good | ✅ Clear | ✅ Moderate | KEEP (no changes) |
| 5️⃣ | **Consulting** | `/consulting` | Strategic consulting | ⚠️ Good foundation | ✅ Clear | ✅ Moderate | KEEP (secondary tier) |
| 6️⃣ | **Services** | `/services` | Umbrella/hub page | ❌ Redundant | ❌ Confusing | ⚠️ Low | MOVE TO FOOTER |
| 7️⃣ | **Vendor Network** | `/vendor-network` | Referral network | ❌ Non-core | ⚠️ Neutral | ❌ Low for primary | REMOVE FROM PRIMARY NAV |

**Supporting Pages (Always in Nav as Expected):**
- **Home** (/) — Logo link + nav item (essential)
- **Contact** (/contact) — CTA button (essential)

---

## SECTION C: KEEP / RENAME / REWRITE / REPURPOSE / REMOVE DECISIONS

### TIER 1: PRIMARY GBP SILO HUBS (Keep in Primary Nav)

#### 1. **Digital Marketing** → Rename to "Local SEO Optimization"
- **Current URL:** `/digital-marketing`
- **Current Label:** Digital Marketing  
- **Current Content:** Generic marketing strategies
- **Problem:** Doesn't specify this is about LOCAL SEO (primary GBP category)
- **Decision:** `KEEP URL | RENAME LABEL | REWRITE PAGE (Phase 2)`
- **Future Label:** "Local SEO Optimization" or "Local Business Marketing"
- **Action Now:** Homepage will link to `/digital-marketing` with label "Local SEO Optimization"
- **Action Later (Phase 2):** Rewrite page content to emphasize:
  - Google Business Profile optimization
  - Local search rankings
  - Map visibility
  - Local review strategy
  - Location-based keywords
- **Why This Works:** One URL, one destination, clearer messaging, anticipates full silo rewrite

---

#### 2. **Websites** → Rename to "High-Performance Websites"
- **Current URL:** `/websites`
- **Current Label:** Websites
- **Current Content:** Astro + Cloudflare technical pitch
- **Problem:** Tech-focused language doesn't speak to SMB pain points (slow sites lose customers)
- **Decision:** `KEEP URL | RENAME LABEL | REWRITE PAGE (Phase 3)`
- **Future Label:** "High-Performance Websites" or "Website Performance Optimization"
- **Action Now:** Homepage will link to `/websites` with label "High-Performance Websites"
- **Action Later (Phase 3):** Rewrite page to emphasize:
  - Site speed = conversions
  - Mobile-first design
  - Core Web Vitals optimized
  - SEO-ready architecture
  - Conversion optimization
  - Not the tech stack details
- **Why This Works:** Reframes from "cool tech" to "business outcomes"

---

#### 3. **Photo & Video** → Rename to "Video & Media Production"
- **Current URL:** `/photo-video`
- **Current Label:** Photo & Video
- **Current Content:** Hybrid photography + videography
- **Problem:** Page exists, but future GBP strategy wants "Video Production Service" as separate silo
- **Decision:** `KEEP URL | RENAME LABEL | EXPAND PAGE (Phase 4)`
- **Future Label:** "Video & Media Production" (emphasis on video)
- **Action Now:** Homepage will link to `/photo-video` with label "Video & Media Production"
- **Action Later (Phase 4):** Could eventually split into separate nav items:
  - `/video-production` (primary)
  - `/photography` (secondary/footer)
- **Why This Works:** Acceptable middle ground—renames to reflect GBP emphasis, keeps URL intact today

---

#### 4. **Branding** → Keep As-Is
- **Current URL:** `/branding`
- **Current Label:** Branding
- **Current Content:** Logo design + brand identity
- **Problem:** None. Page is clear, valuable, well-written.
- **Decision:** `KEEP URL | KEEP LABEL | NO CHANGES`
- **Action Now:** Homepage links to `/branding` with label "Brand & Design"
- **Action Later:** Minimal changes (possibly link to consulting for strategy)

---

#### 5. **Consulting** → Keep in Secondary Tier
- **Current URL:** `/consulting`
- **Current Label:** Consulting
- **Current Content:** Strategic business consulting
- **Problem:** None for the page itself. But GBP doesn't require it as primary offer.
- **Decision:** `KEEP URL | KEEP LABEL | NOTE AS SECONDARY TIER`
- **Action Now:** Keep in primary nav (it's a strong offering) but link from other silos
- **Action Later:** Position as "premium add-on" that complements digital strategy

---

### TIER 2: REMOVE FROM PRIMARY NAV (Move to Footer)

#### 6. **Services** → Repurpose to Footer
- **Current URL:** `/services`
- **Current Label:** Services
- **Current Content:** Umbrella hub page listing all services
- **Problem:** Wastes primary nav space by linking to a page that just links back to nav items. Redundant.
- **Decision:** `KEEP URL | REMOVE FROM PRIMARY NAV | KEEP IN FOOTER`
- **Action Now:** Remove from Header nav, add to Footer nav or "All Services" link
- **Action Later:** Keep URL alive for SEO/backlinks, but no primary navigation emphasis
- **Why This Works:** Reduces nav clutter, keeps URL working, supports SEO

---

#### 7. **Vendor Network** → Remove from Primary Nav (Delete or Repurpose)
- **Current URL:** `/vendor-network`
- **Current Label:** Vendor Network
- **Current Content:** Referral network of local businesses
- **Problem:** NOT a NOZA core service. This is a B2B partnership/ecosystem play, not a B2C client offer.
- **Decision:** `REMOVE FROM PRIMARY NAV | PLAN FOR DELETION OR ARCHIVAL (Phase 1)`
- **Action Now:** Remove from Header nav. Client will not see this in primary navigation.
- **Action Later (Phase 1):** 
  - Option A: Delete the page entirely (low traffic, not core mission)
  - Option B: Archive it as `/resources/vendor-network` (if keeping ecosystem page)
  - Option C: Convert to internal-only resource
- **Why This Works:** Clears noise, focuses on client-facing services only

---

### NOT IN NAV BUT ON HOMEPAGE (Essential Pages)

#### 8. **Home** (/) — Keep As-Is
- Logo link redirects here
- Nav also includes "Home" link for mobile clarity
- No changes

#### 9. **Contact** (/contact) — Keep As-Is
- CTA button in primary nav (styled separately)
- No changes

---

## SECTION D: RECOMMENDED FUTURE PRIMARY NAVIGATION STRUCTURE

### TODAY's Primary Navigation (Current State)
```
HOME | SERVICES* | WEBSITES | BRANDING | DIGITAL MARKETING | PHOTO & VIDEO | CONSULTING | VENDOR NETWORK* | CONTACT
(*problems to solve)
```

### RECOMMENDED Future Primary Navigation (After Phase 2-4)
```
HOME | LOCAL SEO | HIGH-PERFORMANCE WEBSITES | VIDEO & MEDIA | BRAND & DESIGN | CONSULTING | CONTACT
+ GOOGLE ADS (Phase 5) | + AUTOMATION (Phase 6)
```

### Ultimate Future Navigation (Post-Phase 6)
```
HOME | LOCAL SEO* | WEBSITES* | VIDEO PRODUCTION* | PHOTOGRAPHY | BRAND & DESIGN | GOOGLE ADS** | AUTOMATION** | CONSULTING | CONTACT
(*rewritten) (**new pages)
```

### Navigation Structure Philosophy

**Tier 1: Primary GBP Service Silos (Main Nav)**
- Local SEO Optimization (current: Digital Marketing) — Phase 2
- High-Performance Websites (current: Websites) — Phase 3
- Video & Media Production (current: Photo & Video) — Phase 4

**Tier 2: Secondary/Premium Offerings (Main Nav)**
- Brand & Design (current: Branding) — Keep as-is
- Consulting (current: Consulting) — Keep as-is

**Tier 3: Advertising/Automation (New, Main Nav)**
- Google Ads (future: /google-ads) — Phase 5
- Automation (future: /automation) — Phase 6

**Tier 4: Support/Resource Pages (Footer/Secondary)**
- Services (overview page, move to footer)
- About
- Contact
- Tools (Performance Review)

**Removed from Primary Nav:**
- Vendor Network (not core client offering)

### Why This Structure Works

1. **Clarity:** Primary nav items are SERVICES, not hubs or partnerships
2. **GBP Alignment:** Every nav item maps to a GBP category or strategic service
3. **SEO Power:** Each nav item is a potential silo hub with outbound links and topical authority
4. **Business Outcomes:** Navigation leads with outcomes ("Local SEO") not features ("Digital Marketing")
5. **Mobile Friendly:** Reduced from 9 items to 6 items (cleaner hamburger menu)
6. **Future-Proof:** Architecture anticipates Phase 5-6 new pages without breaking today

---

## SECTION E: HOMEPAGE LINKING PLAN FOR TODAY

### Reality Constraint
**Homepage must go live today. All links must point to existing, live pages. No 404s.**

### Mapping Strategy
Each homepage section/card will map to a current live page, with notes about future rewrites.

---

### HOMEPAGE SERVICE SECTIONS → CURRENT LIVE PAGES

| Homepage Section | Hero/CTA | Link Destination | Current Page | Status | Future State | Notes |
|------------------|----------|------------------|--------------|--------|--------------|-------|
| **Local SEO Optimization** | "Ranking Your Business First in Local Search" | `/digital-marketing` | Digital Marketing hub | Live | Rewrite Phase 2 | Page will be rewritten to focus on Local SEO specifically |
| **High-Performance Websites** | "Websites That Convert Visitors to Customers" | `/websites` | Websites page | Live | Rewrite Phase 3 | Page will be rewritten to focus on performance/outcomes, not tech stack |
| **Video & Media Production** | "Cinematic Content That Sells Your Story" | `/photo-video` | Photo & Video page | Live | Expand Phase 4 | Can split to separate /video-production later; URL will redirect |
| **Brand & Design** | "Visual Identity That Stands Out" | `/branding` | Branding page | Live | Keep as-is | No changes planned |
| **Business Consulting** | "Strategic Guidance for Growth" | `/consulting` | Consulting page | Live | Enhance later | No changes needed; link from other silos when ready |
| **Google Ads Management** | "Turn Clicks Into Leads & Customers" | `/contact` or `/services` | Contact or Services | Live | Create Phase 5 | New page will be created; for now homepage notes "coming soon" or links to Contact for inquiry |
| **Automation & CRM** | "Systems That Scale Your Business" | `/contact` or `/services` | Contact or Services | Live | Create Phase 6 | New page will be created; for now homepage notes "coming soon" or links to Contact |

---

### DETAILED HOMEPAGE LINKING DECISIONS

#### Option 1: Create HOME LINK TILES (RECOMMENDED)
Homepage hero section could offer 6-8 card/tiles with service overviews:

**Layout:**
```
HERO

SERVICE CARDS (6 Cards):
1. "Local SEO Optimization" → /digital-marketing
2. "High-Performance Websites" → /websites  
3. "Video & Media Production" → /photo-video
4. "Brand & Design" → /branding
5. "Business Consulting" → /consulting
6. "More Services" → /services (links to Services hub)

CTA BUTTONS:
- Primary: "Book Discovery Call" → /contact
- Secondary: "See Our Work" → /portfolio or similar
```

**Pros:**
- Clear service categorization
- Each card links to a live page
- Future pages can be added/updated without changing homepage structure
- Respects GBP categories

**Cons:**
- Longer homepage (requires scrolling)
- Must decide on typography/styling

---

#### Option 2: SIMPLE NAV-BASED LINKING
Homepage simply mirrors primary nav and links to those pages in context.

**Layout:**
```
HERO

SOLUTIONS SECTION:
- "Grow Local Search Rankings" → /digital-marketing
- "Build High-Performance Websites" → /websites
- "Professional Video & Photo" → /photo-video
- "Design Your Brand" → /branding
- "Get Strategic Guidance" → /consulting
```

**Pros:**
- Simple, consistent with structure
- Less maintenance
- Nav changes flow to homepage

**Cons:**
- Less visual interest
- Harder to distinguish service value

---

#### Option 3: PHASE APPROACH (RESERVED SPACE)
Homepage has structure for Google Ads and Automation, but shows "Coming Soon" for those.

**Layout:**
```
HERO

MAIN SERVICES:
1. "Local SEO Optimization" → /digital-marketing
2. "High-Performance Websites" → /websites
3. "Video & Media Production" → /photo-video
4. "Brand & Design" → /branding
5. "Business Consulting" → /consulting

COMING SOON:
6. "Google Ads Management" (Coming Q2)
7. "AI Automation & CRM" (Coming Q3)

CTA: "Explore All Services" → /services
```

**Pros:**
- Anticipates future pages
- Sets expectation for growth
- Buyers know more is coming

**Cons:**
- Complex structure
- May confuse buyers if services aren't live

---

### RECOMMENDED APPROACH: **Option 1 + Partial Option 3**

**Recommendation:**
1. Homepage has 6 service card tiles pointing to live pages
2. Cards are labeled with SERVICE OUTCOMES (not company names)
3. Two additional "Coming Soon" placeholders for Google Ads and Automation
4. Footer links to Services hub and other support pages

**Card Labels:**
```
1. Local SEO Optimization → /digital-marketing
2. High-Performance Websites → /websites
3. Video & Media Production → /photo-video
4. Brand & Design → /branding
5. Business Consulting → /consulting
6. Google Ads Management (Coming Soon) → /contact for inquiry
7. Automation & CRM (Coming Soon) → /contact for inquiry
```

**Why This Works:**
✅ All links are live TODAY (no 404s)
✅ Future pages can be added seamlessly (just update the link)
✅ Clear business value messaging (outcomes, not features)
✅ GBP aligned (matches categories)
✅ Mobile friendly (scrollable card grid)
✅ Conservative (doesn't promise unavailable services)

---

## SECTION F: IMMEDIATE HOMEPAGE IMPLEMENTATION NOTES

### Translation String Updates Needed (i18n/locales/en.json)

Current nav labels will be used on homepage. Update labels BEFORE finalizing homepage copy:

```json
CURRENT:
"nav.digitalMarketing": "Digital Marketing"
"nav.websites": "Websites"
"nav.photoVideo": "Photo & Video"

PROPOSED RENAMES (Today or Phase 2):
"nav.digitalMarketing": "Local SEO Optimization"
"nav.websites": "High-Performance Websites"
"nav.photoVideo": "Video & Media Production"

NEW STRINGS (Phase 5-6):
"nav.googleAds": "Google Ads Management"
"nav.automation": "Automation & CRM"
```

### Homepage Copy Alignment

**Current Homepage Section Names** (from HOMEPAGE_GBP_ALIGNMENT_AUDIT.md):
- Hero (Clear, keep)
- Services (Will map to 6 cards above)
- Stack (Technology benefits, OK but rename subsection)
- Portfolio (Case studies, keep)
- Consulting Services (Keep but relate to business growth)
- FAQ (Address pain points, keep)
- VendorNetwork (REMOVE or HIDE from primary section)
- FinalCTA (Keep)

**Tomorrow's Recommendation:**
When implementing full homepage copy from HOMEPAGE_GBP_ALIGNMENT_AUDIT.md:
1. Replace "Services" section with 6-card grid (Local SEO, Websites, Video, Brand, Consulting, + Coming Soon cards)
2. Update each card's copy to emphasize OUTCOMES not features
3. Remove or hide "Vendor Network" section (it's not a primary offer)
4. Keep consulting and FAQ sections but reframe around business growth

---

## SECTION G: RISKS TO AVOID BEFORE UPDATING HOMEPAGE LINKS

### Risk 1: 404 Links
**Risk:** Homepage links to non-existent pages  
**Mitigation:**  ✅ All links point to verified live pages (tested today)  
**Status:** LOW RISK

### Risk 2: Inconsistent Navigation Labels
**Risk:** Homepage says "Local SEO" but nav still says "Digital Marketing"  
**Mitigation:** Update nav label + i18n string when homepage launches (minor code change)  
**Status:** MEDIUM RISK — Requires Nav.astro + i18n update on same day as homepage deploy

### Risk 3: Future URL Changes Break Links
**Risk:** When we rename /digital-marketing to /local-seo in Phase 2, homepage breaks  
**Mitigation:** Use current URLs today, set up 301 redirects before renaming (Phase 1 planning)  
**Status:** MANAGED — Plan redirects before page rewrites

### Risk 4: Vendor Network Link Still Active
**Risk:** Vendor Network removed from nav but homepage still links to it  
**Mitigation:** Remove from primary homepage section (keep in footer if needed)  
**Status:** LOW RISK — Remove link entirely

### Risk 5: Premature Promises (Google Ads / Automation)
**Risk:** Homepage promises services that don't exist yet (Phase 5-6)  
**Mitigation:** Mark as "Coming Soon" or link to Contact inquiry form  
**Status:** MEDIUM RISK — Be honest about launch timeline

### Risk 6: Nav Item Mismatch Between English and Spanish
**Risk:** English says "Local SEO Optimization" but Spanish still says "Marketing Digital"  
**Mitigation:** Update BOTH en.json and es.json in single deploy  
**Status:** MEDIUM RISK — Bilingual sync required

---

## DECISION MATRIX: WHAT CHANGES TODAY vs. LATER

| Item | Today (Homepage Launch) | Phase 1 | Phase 2 | Phase 3 | Phase 4 | Phase 5 | Phase 6 |
|------|----------------------|---------|---------|---------|---------|---------|---------|
| **Digital Marketing nav label** | Update to "Local SEO Optimization" | — | Rewrite page content | — | — | — | — |
| **Websites nav label** | Update to "High-Performance Websites" | — | — | Rewrite page content | — | — | — |
| **Photo & Video nav label** | Update to "Video & Media Production" | — | — | — | Expand page, plan split | — | — |
| **Homepage service cards** | Create 6-card grid with new labels | — | — | — | — | — | — |
| **Services nav item** | Remove from primary nav, move to footer | ✅ Archive page URL | — | — | — | — | — |
| **Vendor Network nav item** | Remove from primary nav | ✅ Decide: delete or archive | — | — | — | — | — |
| **Google Ads nav item** | Note as "Coming Soon" placeholder | — | — | — | — | ✅ Create /google-ads page | — |
| **Automation nav item** | Note as "Coming Soon" placeholder | — | — | — | — | — | ✅ Create /automation page |

---

## IMPLEMENTATION CHECKLIST FOR TOMORROW

### Before Homepage Launch
- [ ] Confirm page link destinations (run test URLs)
- [ ] Update i18n labels (nav.digitalMarketing, nav.websites, nav.photoVideo)
- [ ] Update homepage service card content with new labels
- [ ] Remove Vendor Network from primary section
- [ ] Test bilingual nav consistency (en vs es)
- [ ] Verify Contact link works from all CTAs
- [ ] Build and test locally

### Phase 1 (Architecture Planning)
- [ ] Move Services nav item to footer
- [ ] Archive or delete Vendor Network page
- [ ] Plan 301 redirects for future page renames
- [ ] Document URL mapping for roadmap

### Phase 2-4 (Silo Rewrites)
- [ ] Rewrite /digital-marketing (Local SEO focus)
- [ ] Rewrite /websites (Performance focus)
- [ ] Expand /photo-video, plan split

### Phase 5-6 (New Pages)
- [ ] Create /google-ads page
- [ ] Create /automation page
- [ ] Update homepage to activate new nav items

---

## CONCLUSION

The current header suffers from:
1. ❌ Redundant nav items (Services)
2. ❌ Vague labels (Digital Marketing)
3. ❌ Non-core offerings (Vendor Network)
4. ❌ Missing strategic categories (Google Ads, Automation)

**The fix:**
1. ✅ Rename 3 nav items to emphasize outcomes (Local SEO, Websites, Video)
2. ✅ Remove non-core items from primary nav
3. ✅ Keep all current URLs (no 404s today)
4. ✅ Plan for new pages in Phase 5-6

**Today's homework:**
Finish homepage with 6-card service grid pointing to live pages, using new outcome-based labels. All links work. No promises about unavailable services. Structure anticipates future silos.

**Result:**
Clearer navigation that speaks to business owners' needs (outcomes), aligns with GBP categories, and supports controlled phased rewrites over next 10-12 weeks.

