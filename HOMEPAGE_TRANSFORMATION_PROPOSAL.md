# HOMEPAGE TRANSFORMATION PROPOSAL
## NOZA LLC Homepage + Navigation Realignment  
**Phase:** Today's Implementation  
**Date:** March 17, 2026  
**Scope:** Homepage transformation with navigation label alignment  
**Goal:** GBP-aligned homepage + updated nav labels + correct internal links + zero 404s

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
- **Hero section:** Keep component, improve copy (headline + subheadline rewrite)
- **Services section:** Keep component, update service titles/descriptions for GBP alignment
- **Stack section:** Keep component, rename/reposition as "Our Approach" or "Why Choose NOZA"
- **Portfolio section:** Keep component, minor copy update if needed
- **Consulting section:** Keep component on page, but note it as "premium add-on" positioning
- **FAQ section:** Keep component, update with relevant pain points
- **FinalCTA section:** Keep component, update CTA copy

#### 3. Removed from Primary Nav (Today)
- **Services:** Remove from header nav, move to footer (URL stays alive)
- **Vendor Network:** Remove from header nav, remove from homepage (decide: archive or delete URL)

#### 4. Translation Strings Updated (i18n/locales/en.json)
- `nav.digitalMarketing`: "Digital Marketing" → "Local SEO Optimization"
- `nav.websites`: "Websites" → "High-Performance Websites"
- `nav.photoVideo`: "Photo & Video" → "Video & Media Production"
- Add new strings for service card outcomes (business-focused copy)
- Update hero, services, stack, consulting, faq copy per GBP alignment

#### 5. Nav Component Changes (src/components/Nav.astro)
- Update hardcoded nav labels to match i18n strings
- Remove Services nav item HTML
- Remove Vendor Network nav item HTML
- All URLs stay the same (only labels and nav structure change)

#### 6. Homepage Component Changes (src/pages/index.astro)
- Remove `<VendorNetwork lang={currentLang} />` from render order
- Keep all other component renders
- Update page description to reflect GBP alignment

### What will NOT Change Today

#### ❌ Deferred to Later Phases
- Creating `/google-ads` page (Phase 5)
- Creating `/automation` page (Phase 6)
- Splitting `/photo-video` into separate video/photo pages (Phase 4)
- Changing CSS/styling (using existing design system)
- Renaming URLs (keep `/digital-marketing`, `/websites`, `/photo-video`)
- Restructuring component internals (keep existing component layout patterns)
- Creating new components (update existing only)
- Changing page templates or layouts
- Moving portfolio or FAQ sections around (preserve homepage flow)

#### ⏸️ Decisions Needed (See Section C)
- Whether to keep "Services" nav item visible for one more cycle
- Whether to delete or archive `/vendor-network` page URL
- Exact wording for hero subheadline and service descriptions

---

## SECTION B: FINAL HOMEPAGE STRUCTURE FOR TODAY

### Current Structure (Today)
```
1. Hero                  → KEEP (copy rewrite)
2. Services             → KEEP (copy rewrite)
3. Stack                → KEEP (copy rewrite, reposition)
4. Portfolio            → KEEP (minimal changes)
5. Consulting           → KEEP (position as premium add-on)
6. VendorNetwork        → REMOVE (not a core customer offer)
7. FAQ                  → KEEP (minimal changes)
8. FinalCTA             → KEEP (copy alignment)
```

### Proposed Structure After Today
```
1. Hero
   - Update headline for GBP focus
   - Rewrite subheadline to communicate business outcomes
   - Keep CTA structure
   
2. Services (6-Card Grid)
   - Title: "Services That Drive Growth for Lexington Businesses"
   - 6 outcomes-focused cards:
     1. "Local Search Rankings" → /digital-marketing
     2. "High-Performance Websites" → /websites
     3. "Video & Content" → /photo-video
     4. "Brand Identity" → /branding
     5. "Business Strategy" → /consulting
     6. "More Services" → /services
   - All cards link to current live pages
   
3. Why Choose NOZA (Current "Stack" component, repurposed)
   - Rename from tech-stack language to outcome-focused language
   - Keep 4 methodology nodes but reframe context
   - Keep 4 benefits but align to GBP message
   
4. Portfolio ("Real Projects, Real Growth")
   - Keep case studies
   - Minor copy tweaks to emphasize outcomes
   - All case study types remain (brand, ecommerce, marketing, drone, relaunch, growth)
   
5. Consulting Services
   - Keep 6 specialty cards
   - Position as "Premium Strategic Services"
   - Emphasize connection to core digital services
   
6. FAQ Section
   - Keep 6 Q&A structure
   - Update questions to address:
     - Local SEO pain points
     - Website speed/conversion concerns
     - Video ROI
     - Brand clarity
     - Automation curiosities
   
7. Final CTA
   - Keep structure
   - Update copy to align with GBP positioning
```

### Section-by-Section Decisions

#### 1. Hero Section
| Current | Change | Reason | Preserve |
|---------|--------|--------|----------|
| Component | Update copy only | Align with GBP positioning | ✅ Keep component |
| Headline | **KEEP** | "Launch Your Business Into the Future" — preserves competitive, future-focused spirit | ✅ Keep as-is |
| Subheadline | **REWRITE FOR INTENT** | Current uses arrow process flow (too technical) | Replace with broader intent capture |
| CTAs | Keep structure | "Book Discovery Call" + "See Work" are good | ✅ Text OK |
| Location badge | Keep | "Based in Lexington, KY" is core value | ✅ Keep |

**APPROVED Hero Copy:**
- Headline: "Launch Your Business Into the Future" (PRESERVE)
- Subheadline: "For small businesses ready to improve local rankings, uncover competitor gaps, and grow with high-performance websites, strategic marketing, and AI-powered automation."

#### 2. Services Section  
| Current | Change | Reason | Preserve |
|---------|--------|--------|----------|
| Component | Update card data | Current service titles are generic | ✅ Keep 6-card grid |
| Card 1: Digital Marketing Strategy | **Rename & Reframe** | "Local SEO Optimization" — specific, outcome-focused | ✅ Link to /digital-marketing |
| Card 2: Branding & Logo Design | **Keep title** | Clear and validated | ✅ Link to /branding |
| Card 3: Websites (Astro + Cloudflare) | **Rename** | "High-Performance Websites" — remove tech stack language | ✅ Link to /websites |
| Card 4: Social Media Campaigns | **Consider removal or repurposing** | Not a GBP primary category, not a main silo | Could move to secondary or footer |
| Card 5: Photo, Video & Drone Media | **Rename** | "Video & Media Production" — emphasize video primary | ✅ Link to /photo-video |
| Card 6: Business Consulting | **Keep** | Clear and valuable secondary offering | ✅ Link to /consulting |
| Grid layout | Keep | 6 cards is good, no need to change | ✅ Preserve layout |

**Question:** Should we keep Social Media as 4th card, or replace with "More Services" link?  
**Recommendation:** Replace with "More Services" → /services link (or omit entirely if space needed)

**APPROVED Services Card Order:**
1. Local SEO Optimization → /digital-marketing
2. High-Performance Websites → /websites
3. Video & Media Production → /photo-video
4. Brand & Design → /branding
5. Automation Systems → /contact (temporary, future /automation page)
6. Business Consulting → /consulting

**Note:** "Explore All Services" link available as secondary CTA outside card grid if needed (links to /services)

#### 3. Stack Section (Reposition as "Why Choose NOZA")
| Current | Change | Reason | Preserve |
|---------|--------|--------|----------|
| Component | Reframe messaging | Currently positions as "tech stack" (too internal) | ✅ Keep component/layout |
| Title | **Rename** | "A Modern, Limitless Workflow..." → "Why NOZA Delivers Results" or "Our Competitive Advantage" | Update title string |
| Subtitle | **Update** | "The technology that powers..." → "The systems that drive growth for SMBs" | Update subtitle string |
| 4 Nodes | **Reframe** | Keep Builder/GitHub/Astro/Cloudflare but reframe as BENEFITS | ✅ Keep node structure |
| Node Descriptions | **Rewrite** | Translate tech specs into business outcomes | `builderDesc`, `githubDesc`, etc. |
| 4 Benefits | **Keep mostly** | Customization, Speed, SEO, Updates are all valid | Update copy to emphasize outcomes |

**Reframed Stack Section:**
- New Title: "Why NOZA Delivers Results"
- New Subtitle: "Built on proven systems that scale small businesses"
- Node 1: "Easy Updates" (was Visual Editor) — "Client-friendly content changes without technical barriers"
- Node 2: "Version Control" (was GitHub) — "Full history, rollback capability, secure development"
- Node 3: "Lightning-Fast Framework" (was Astro) — "Conversion-optimized speed that wins rankings"
- Node 4: "Global Delivery" (was Cloudflare) — "Instant worldwide performance for local audiences"
- Keep 4 benefits: Customization, Speed, SEO, Updates

#### 4. Portfolio Section ("Real Projects, Real Growth")
| Current | Change | Reason | Preserve |
|---------|--------|--------|----------|
| Component | Minimal update | Current case studies are strong | ✅ Keep component |
| Title | Maybe update | "Real Projects. Real Growth." is good | Consider emphasizing outcomes |
| Case study cards | Minor copy | Update to emphasize business results | Keep existing case study types |
| 6 Studies | Keep | Brand, Ecommerce, Marketing, Drone, Relaunch, Growth | ✅ No structural change |

#### 5. Consulting Services Section
| Current | Change | Reason | Preserve |
|---------|--------|--------|----------|
| Component | Keep | Consulting is premium strategic offering | ✅ Keep component |
| Title | Update context | Position as "Premium Strategic Layer" | Update copy context |
| 6 Cards | Keep | Startup Guidance, Growth Plans, Branding Clarity, Lead Systems, Vendor Connections, Ongoing | ✅ All relevant |
| Positioning | **Clarify** | These are premium services that COMPLEMENT core digital services | Note in intro text |
| Front-End Offer | Note | Free performance/marketing audit is the real front-end offer for lead generation | Not part of homepage consulting section |

**Positioning Note:** Frame consulting as "premium strategic layer" for deeper engagement. Core entry pathway is free performance/marketing audit → then automation/CRM systems → then consulting. Consulting is for serious scaling clients ready for premium strategic partnership.

#### 6. FAQ Section  
| Current | Change | Reason | Preserve |
|---------|--------|--------|----------|
| Component | Update Q&A content | Align to audit-focused, automation-aware, realistic expectations | ✅ Keep 6 Q&A structure |
| Questions | **Rewrite** | Address pain points: local visibility, performance, audits, automation, growth timelines | Update question/answer strings in i18n |
| 6 Topics | Keep count | 6 is good length for homepage FAQ | No structural change |
| Focus | Refined | Support free audit entry point + automation value + realistic growth | Audit funnel clarity |

**APPROVED FAQ Topics (Refined):**
1. "How do I know if my website is losing customers?" → Introduce free performance audit
2. "Why is local SEO critical for Lexington businesses?" → Local visibility importance
3. "How long does it take to see local search results?" → Realistic timelines (30-60 days initial, 3-6 months major)
4. "What does a free performance audit include?" → Explain entry offer
5. "How can automation help my business grow?" → CRM/workflow benefits
6. "What should I expect in our first consultation?" → Discovery call process + free resources

#### 7. Final CTA Section
| Current | Change | Reason | Preserve |
|---------|--------|--------|----------|
| Component | Update copy | Ensure alignment with overall messaging | ✅ Keep component |
| Headline | Update | Finalize based on homepage theme | Update i18n string |
| CTA button | Keep | "Start Growing Today" or similar is good | ✅ Keep link to /contact |

---

## SECTION C: FINAL NAV LABEL PLAN FOR TODAY

### Navigation Label Changes (3 Items)

| Current Label | New Label | Keep in Primary Nav? | URL Change? | Rationale |
|---------------|-----------|----------------------|------------|-----------|
| **Digital Marketing** | **Local SEO Optimization** | ✅ YES | ❌ NO (/digital-marketing stays) | Specific and GBP-aligned. This is our PRIMARY category. |
| **Websites** | **High-Performance Websites** | ✅ YES | ❌ NO (/websites stays) | Reframes from tech to business outcome (performance = conversions). |
| **Photo & Video** | **Video & Media Production** | ✅ YES | ❌ NO (/photo-video stays) | Emphasizes video (GBP category) as primary, photo as secondary. |

### Navigation Removal Decisions (2 Items)

#### Decision 1: Services Nav Item
| Aspect | Decision | Reasoning |
|--------|----------|-----------|
| **Keep in primary nav?** | ❌ NO — Remove today | Redundant. Wastes nav space by linking to hub that just links back to nav items. |
| **Keep URL alive?** | ✅ YES — Keep `/services` | SEO value, existing backlinks, can be accessed via footer/direct URL |
| **Move to footer?** | ✅ YES — "All Services" link | Allows visitors to find comprehensive list without cluttering header |
| **When?** | TODAY | Do it on same deploy as nav label changes |

#### Decision 2: Vendor Network Nav Item
| Aspect | Decision | Reasoning |
|--------|----------|-----------|
| **Keep in primary nav?** | ❌ NO — Remove today | Not a core customer-facing service. B2B partnership, not B2C offer. |
| **Remove from homepage entirely?** | ✅ YES | Don't emphasize to primary audience. Remove VendorNetwork component from homepage render. |
| **Keep URL alive?** | ✅ YES — Archive in place | Keep file/URL available for future use if needed, but don't promote. |
| **When?** | TODAY | Do it on same deploy |

**Vendor Network URL Decision (APPROVED):**
- **Archive in place:** Remove from header nav, remove from homepage, keep URL functional but unpromoted.
- Rationale: May have future use, low cost to keep, no need to destroy.
- Action: Remove nav item HTML, remove component from index.astro, keep /vendor-network page as-is (safe, not promoted).

### Final Primary Navigation Structure (After Today)
```
HOME | LOCAL SEO OPTIMIZATION | HIGH-PERFORMANCE WEBSITES | VIDEO & MEDIA PRODUCTION | BRANDING | CONSULTING | CONTACT
(+ Move "Services" to footer)
(+ Remove Vendor Network entirely)
```

### Nav Item Summary Table

| Nav Item | Current Status | Today's Status | Action | URL Impact |
|----------|----------------|---|--------|-----------|
| Home | ✅ In nav | ✅ In nav | No change | ❌ None |
| Local SEO Optimization | N/A (was "Digital Marketing") | ✅ In nav | Rename label | ❌ /digital-marketing stays |
| High-Performance Websites | N/A (was "Websites") | ✅ In nav | Rename label | ❌ /websites stays |
| Video & Media Production | N/A (was "Photo & Video") | ✅ In nav | Rename label | ❌ /photo-video stays |
| Branding | ✅ In nav | ✅ In nav | Keep | ❌ /branding stays |
| Consulting | ✅ In nav | ✅ In nav | Keep | ❌ /consulting stays |
| Services | ✅ In nav | ❌ Removed | Move to footer | ✅ /services stays (accessible) |
| Vendor Network | ✅ In nav | ❌ Removed | Remove from nav, archive in place | ✅ /vendor-network stays (unpromoted) |
| Contact | ✅ CTA button | ✅ CTA button | Keep | ❌ /contact stays |

---

## SECTION D: HOMEPAGE LINKING MAP FOR TODAY

### Service Cards → Landing Pages

| Homepage Label Shown | CTA Text | Link Destination | Current Page Title | Status | Notes |
|---------------------|----------|------------------|-------------------|--------|-------|
| **Local SEO Optimization** | "Improve Rankings" or "Book Call" | `/digital-marketing` | Digital Marketing | ✅ LIVE | Page will be rewritten Phase 2 (Local SEO focus) |
| **High-Performance Websites** | "Build Website" or "Book Call" | `/websites` | Websites | ✅ LIVE | Page will be rewritten Phase 3 (Performance focus) |
| **Video & Media Production** | "Get Video" or "Book Call" | `/photo-video` | Photo & Video | ✅ LIVE | Page will be expanded Phase 4 (Video primary) |
| **Brand & Design** | "Design Brand" or "Book Call" | `/branding` | Branding | ✅ LIVE | No changes planned |
| **Business Consulting** | "Get Guidance" or "Book Call" | `/consulting` | Consulting | ✅ LIVE | Position as premium add-on |
| **View All Services** | "Explore More" | `/services` | Services (Hub) | ✅ LIVE | Moved to secondary nav/footer |

### Primary CTA Links

| CTA Location | CTA Text | Link | Destination |
|--------------|----------|------|-------------|
| Hero Section | "Book Discovery Call" | `/contact` | Contact form |
| Hero Section | "See Our Work" | Optional: portfolio anchor or `/portfolio` section | Portfolio |
| Services Cards | Individual CTAs | `/[service-url]` | Respective service pages |
| Consulting Section | CTAs | `/consulting` or `/contact` | Consulting page or contact |
| Final CTA | Primary action | `/contact` | Contact form |

### Verification Checklist
- [ ] All service cards point to existing live pages (/digital-marketing, /websites, /photo-video, /branding, /consulting, /services)
- [ ] Contact link goes to /contact (verified live)
- [ ] No links to /google-ads or /automation (don't create false expectations)
- [ ] "More Services" link points to /services (summary hub)
- [ ] Spanish equivalent pages exist for all links (bilingual consistency)

---

## SECTION E: FINAL COPY DIRECTION FOR TODAY

### Guiding Principle
**Speak to business outcomes, not technology or features.**

Example: Instead of "Built with Astro framework," say "Lightning-fast websites that win rankings and convert visitors."

---

### 1. Hero Section

#### Current Copy
- Headline: "Launch Your Business Into the Future"
- Subheadline: "For small Businesses → Embracing AI Revolution → Identify Competitor Weakness → We Optimize Websites & Marketing Campaigns"

#### Problem
- Headline: Preserve ✅
- Subheadline: Arrow process-flow is too technical, needs broader intent capture while staying competitive/future-focused

#### APPROVED New Copy

**Headline:** "Launch Your Business Into the Future" (KEEP AS-IS)

**Subheadline:** "For small businesses ready to improve local rankings, uncover competitor gaps, and grow with high-performance websites, strategic marketing, and AI-powered automation."

**Rationale:**
- Headline preserves competitive, forward-looking spirit
- Subheadline captures: local intent + competitive intelligence + performance focus + automation awareness
- Broader than GBP categories alone, anticipates Automation Systems card

---

### 2. Services Section

#### Current Structure
- Title: "Our Services"
- Subtitle: "Creative solutions powered by innovation"
- 6 cards with generic descriptions

#### Recommended New Copy

**New Title:** "Services That Drive Growth for Lexington Businesses"
**New Subtitle:** "From local search rankings to high-performance websites, we deliver measurable results"

**Card 1: Local SEO Optimization** (was "Digital Marketing Strategy")
- Description: "Get your business found first in local search and Google Maps. We optimize your GBP profile, build local authority, and drive qualified leads to your door."

**Card 2: High-Performance Websites** (was "Websites (Astro + Cloudflare)")
- Description: "Fast websites convert visitors into customers. We build SEO-ready sites that load in milliseconds and turn browsing into buying."

**Card 3: Video & Media Production** (was "Photo, Video & Drone Media")
- Description: "Cinematic content that sells. From property showcases to commercial videos to drone footage—professional media that captures attention and builds trust."

**Card 4: Brand & Design** (was "Branding & Logo Design")
- Description: "Visual identities that stand out. We create distinctive brands that resonate with your market and build lasting recognition."

**Card 5: Automation Systems** (NEW)
- Description: "Scale your business with AI-powered workflows. We implement CRM systems, automate lead management, and build processes that grow revenue while you sleep."
- Link: `/contact` (temporary, will become `/automation` in Phase 6)

**Card 6: Business Consulting** (was "Business Consulting")
- Description: "Strategic guidance for sustainable growth. Premium consulting that complements our core services. We help you clarify direction, optimize operations, and scale profitably."

---

### 3. Why Choose NOZA (Currently "Stack" Section)

#### Current Copy
- Title: "A Modern, Limitless Workflow Built for Speed and Creativity"
- Subtitle: "The technology that powers exceptional results"
- Tech-focused descriptions

#### Recommended New Copy

**New Title:** "Why Lexington Businesses Choose NOZA"
**New Subtitle:** "Built on proven systems that deliver measurable growth"

**4 Methodology Nodes** (Reframe from tech to outcomes):

1. **Easy Updates** (was "Visual Editor")
   - Current: "Client-friendly visual updates (performance-audited)"
   - New: "Content updates without coding knowledge. Simple, safe, fast."

2. **Version Control** (was "GitHub")
   - Current: "Version control & sync"
   - New: "Complete history and rollback ability. No 'oops' moments."

3. **Lightning-Fast Framework** (was "Astro")
   - Current: "Fast framework"
   - New: "Sub-second load times. Speed = rankings + conversions."

4. **Global Delivery** (was "Cloudflare Pages")
   - Current: "Lightning-fast hosting"
   - New: "Worldwide presence delivered locally. Your audience gets instant speed."

**4 Benefits** (Keep mostly, enhance):
1. Customization: "Full creative control with no restrictions"
2. Speed: "Sub-second performance globally" → "Lightning-fast load speeds that win Google rankings"
3. SEO: "Built for search visibility and rankings" → "Strong SEO architecture built into every page"
4. Updates: "Simple content management and deployment" → "Easy updates without expensive developer hours"

---

### 4. Portfolio Section

#### Current Copy
**Title:** "Real Projects. Real Growth."
**Subtitle:** "Case studies that showcase our creative power"

#### Recommendation
Keep title and subtitle as-is. They're strong.

#### Case Study Cards
Consider adding results/metrics if space allows:
- "Brand Identity Redesign" → "Complete visual brand system that increased recognition 40%"
- "E-Commerce Site" → "Ultra-fast Astro site with 3.5" load time, 15% conversion lift"
- "Digital Marketing Campaign" → "Multi-channel strategy driving 25% YoY lead growth"
- "Drone & Video Production" → "Professional cinematic content increasing engagement 300%"
- "Full Brand Relaunch" → "Website, identity & marketing rebrand positioning for growth"
- "Business Growth Strategy" → "Systems & lead generation tripling annual revenue"

(Note: Use actual client metrics if available; otherwise keep descriptions outcome-focused)

---

### 5. Consulting Services Section

#### Current Copy
**Title:** "Strategy, Systems & Support for Real Small Businesses"
**Subtitle:** "Consulting that delivers sustainable growth"

#### Recommendation
Update positioning to clarify as "Premium Strategic Layer":

**New Title:** "Strategic Consulting: The Premium Layer"
**New Subtitle:** "Expert guidance that transforms how your business operates and grows"

**Intro Text:** "Our consulting services complement our core digital offerings. Get strategic clarity, scalable systems, and professional guidance from experienced operators who've been in your shoes."

#### 6 Cards (Keep, can update descriptions)
- Startup Guidance
- Local Business Growth Plans
- Branding Clarity
- Lead Systems
- Vendor Network Connections (**Note:** May need to update since we're removing this)
- Ongoing Support

---

### 6. FAQ Section

#### Current Questions (Unknown — May vary)

#### Recommended Topics
**Question 1:** "Why is local SEO important for my business?"
- Answer: Emphasize that 50% of mobile searches have local intent, local SEO drives foot traffic and phone calls

**Question 2:** "How long does it take to see ranking results?"
- Answer: Realistic timeline: 30-60 days for initial improvements, 3-6 months for major ranking shifts

**Question 3:** "What's the difference between your service and other agencies?"
- Answer: Emphasize GBP focus, custom websites, strategic approach vs. template solutions

**Question 4:** "How does website speed affect sales?"
- Answer: Every 1-second delay = 7% conversion loss. Speed is a ranking factor and profit factor.

**Question 5:** "Should we invest in video marketing?"
- Answer: Video gets 12x more shares than text/images, dominates local search results and social feeds

**Question 6:** "Do you handle Google Ads?"
- Answer: Not yet, but we're adding this service in Q2 2026. Contact us to discuss paid search needs.

---

### 7. Final CTA Section

#### Current Copy (Unknown)

#### Recommended Copy
**Headline:** "Ready to Grow Your Business?"
**Subheadline:** "Schedule a free discovery call to explore how we can help."
**Primary CTA:** "Book Your Discovery Call" → /contact
**Secondary:** Contact phone number or email (if applicable)

---

## SECTION F: FILE-LEVEL IMPLEMENTATION PLAN

### Files Requiring Changes

#### 1. **src/i18n/locales/en.json** — PRIMARY
**Why:** Central store for all navigation labels and component content strings

**Changes Needed:**
| Current Key | Current Value | New Value | Type |
|------------|---------------|-----------|------|
| `nav.digitalMarketing` | "Digital Marketing" | "Local SEO Optimization" | Label rename |
| `nav.websites` | "Websites" | "High-Performance Websites" | Label rename |
| `nav.photoVideo` | "Photo & Video" | "Video & Media Production" | Label rename |
| `hero.headline` | "Launch Your Business Into the Future" | "Rank Local. Grow Fast. Lead Your Market." | Copy rewrite |
| `hero.subheadline` | Arrow process text | "Local search rankings, high-performance websites, and strategic marketing..." | Copy rewrite |
| `services.title` | "Our Services" | "Services That Drive Growth for Lexington Businesses" | Copy rewrite |
| `services.subtitle` | "Creative solutions..." | "From local search rankings to high-performance websites..." | Copy rewrite |
| `services.digitalMarketing.title` | "Digital Marketing Strategy" | "Local SEO Optimization" | Rename |
| `services.digitalMarketing.desc` | Current desc | "Get your business found first in local search..." | Rewrite |
| `services.websites.title` | "Websites (Astro + Cloudflare)" | "High-Performance Websites" | Rename |
| `services.websites.desc` | Current desc | "Fast websites convert visitors into customers..." | Rewrite |
| `services.photoVideo.title` | "Photo, Video & Drone Media" | "Video & Media Production" | Rename |
| `services.photoVideo.desc` | Current desc | "Cinematic content that sells..." | Rewrite |
| `services.branding.title` | "Branding & Logo Design" | "Brand & Design" | Rename |
| `services.consulting.title` | "Business Consulting" | "Business Consulting" | Keep same |
| `stack.title` | "A Modern, Limitless Workflow..." | "Why Lexington Businesses Choose NOZA" | Rename |
| `stack.subtitle` | "The technology that powers..." | "Built on proven systems that deliver measurable growth" | Rewrite |
| `stack.builder` | "Visual Editor" | "Easy Updates" | Rename |
| `stack.github` | "GitHub" | "Version Control" | Rename |
| `stack.astro` | "Astro" | "Lightning-Fast Framework" | Rename |
| `stack.cloudflare` | "Cloudflare Pages" | "Global Delivery" | Rename |
| (descriptions) | Tech-focused | Outcome-focused | Rewrite all 4 |
| `consulting.subtitle` | "Consulting that delivers sustainable growth" | "Expert guidance that transforms operations" (optional) | Consider |
| FAQ questions | Current | Per Section E recommendations | Rewrite 6 Q&A pairs |
| `finalCta.headline` | Current | "Ready to Grow Your Business?" | Update |

**Structural Changes:** None (keep existing key structure)

**Risk Level:** 🟢 **LOW** — Text-only changes, no structural impact

**Estimated Effort:** 45 minutes

---

#### 2. **src/components/Nav.astro** — PRIMARY
**Why:** Navigation labels are hardcoded in HTML, must match i18n updates

**Changes Needed:**
```diff
- <li><a href="/digital-marketing" class="nav-digital-marketing-link">Digital Marketing</a></li>
+ <li><a href="/digital-marketing" class="nav-digital-marketing-link">Local SEO Optimization</a></li>

- <li><a href="/websites" class="nav-websites-link">Websites</a></li>
+ <li><a href="/websites" class="nav-websites-link">High-Performance Websites</a></li>

- <li><a href="/photo-video" class="nav-photo-video-link">Photo & Video</a></li>
+ <li><a href="/photo-video" class="nav-photo-video-link">Video & Media Production</a></li>

- <li><a href="/services" class="nav-services-link">Services</a></li>
+ [DELETE entire line — Remove from primary nav]

- <li><a href="/vendor-network" class="nav-vendor-network-link">Vendor Network</a></li>
+ [DELETE entire line — Remove from primary nav]
```

**Additional Changes:**
- Consider adding `updateNavLinks()` function call for any Spanish equivalents (if bilingual nav routing exists)
- Verify hamburger menu still closes properly
- Verify mobile responsiveness with fewer nav items

**Structural Changes:** Minor (list item removal, no function changes)

**Risk Level:** 🟡 **MEDIUM** — Removes nav items, but no link/script logic changes

**Estimated Effort:** 15 minutes

---

#### 3. **src/pages/index.astro** — SECONDARY
**Why:** Remove VendorNetwork component from homepage render order

**Changes Needed:**
```diff
import RootLayout from '../layouts/RootLayout.astro';
import Hero from '../components/Hero.astro';
import Services from '../components/Services.astro';
import Stack from '../components/Stack.astro';
import Portfolio from '../components/Portfolio.astro';
import Consulting from '../components/Consulting.astro';
- import VendorNetwork from '../components/VendorNetwork.astro';
import FAQ from '../components/FAQ.astro';
import FinalCTA from '../components/FinalCTA.astro';

...

<RootLayout title={pageTitle} description={pageDescription} lang={currentLang} alternateUrl={alternateUrl}>
  <Hero lang={currentLang} />
  <Services lang={currentLang} />
  <Stack lang={currentLang} />
  <Portfolio lang={currentLang} />
  <Consulting lang={currentLang} />
-  <VendorNetwork lang={currentLang} />
  <FAQ lang={currentLang} />
  <FinalCTA lang={currentLang} />
</RootLayout>
```

**Also Update:**
- `pageDescription` to reflect GBP alignment (if needed)
- Example: "Digital marketing, branding, websites & business consulting for Lexington KY small businesses..." → "Local SEO, high-performance websites, video production, and strategic consulting for Lexington businesses."

**Structural Changes:** Minor (component removal, no layout changes)

**Risk Level:** 🟢 **LOW** — Simple import/render removal

**Estimated Effort:** 5 minutes

---

#### 4. **src/i18n/locales/es.json** — DEFERRED
**Why:** Spanish translations deferred until broader site rebuild is more finalized

**Status:** ⏸️ **ENGLISH-ONLY TODAY**
- Focus on English implementation
- Spanish mirror to follow in later phase
- No changes to es.json today

**Future:** When ready, mirror all en.json changes to es.json with proper translations

---

#### 5. **src/components/** (Services, Stack, Consulting, FAQ, FinalCTA) — NO CHANGES
**Why:** Component structure stays same; all content pulled from i18n

**Current Approach:** Components use `i18n.get()` or similar to pull strings from en.json

**No Code Changes Needed:** Just update i18n keys, components auto-reflect new copy

**Risk Level:** 🟢 **LOW** — No component logic changes

---

### Summary Table

| File | Type | Change Type | Risk | Effort | Do Today? |
|------|------|-------------|------|--------|-----------|
| en.json | Config | Content strings + nav labels | 🟢 LOW | 45 min | ✅ YES |
| Nav.astro | Component | Remove items + update labels | 🟡 MED | 15 min | ✅ YES |
| index.astro | Page | Remove component render | 🟢 LOW | 5 min | ✅ YES |
| es.json | Config | Deferred to later phase | — | — | ⏸️ DEFER |
| Service components | Components | None (data-driven from i18n) | — | — | ❌ NO |
| Stack component | Component | None (data-driven from i18n) | — | — | ❌ NO |

**Total Effort (English-only TODAY):** ~65 minutes
**Spanish:** Deferred to later phase when site architecture is more finalized

---

## SECTION G: RISKS TO AVOID ON THIS DEPLOY

### Risk 1: Bilingual Inconsistency
**Risk:** English nav says "Local SEO Optimization" but Spanish still says "Marketing Digital"
**Severity:** 🟡 MEDIUM (confuses international audience)
**Mitigation:** Bundle en.json AND es.json updates in same commit, test both languages before deploy
**Decision:** Do both languages today, or just English? **Recommendation:** Just English today (faster), mirror to Spanish Phase 1

---

### Risk 2: Vendor Network Archive-in-Place
**Risk:** Removing from nav/homepage but keeping URL can cause orphaned content
**Severity:** 🟡 MEDIUM (orphaned page creates minimal debt)
**Mitigation:** 
- Search codebase for all `/vendor-network` references (footer, internal links, etc.)
- Confirm: Keeping URL alive, just unpromoted (not deleting, not redirecting)
- Verify: No primary nav items link to it anymore
- Document: This page is intentionally unpromoted

**Action:** Before deploying, run grep for "vendor-network" to verify only nav/homepage uses it

---

### Risk 3: Services URL Still Referenced
**Risk:** Removed from nav but I'm keeping URL alive. Someone links to `/services` expecting it to be primary navigation
**Severity:** 🟢 LOW (URL works, customer still finds it)
**Mitigation:** Keep `/services` URL alive by keeping component functional, maybe add it to footer
**No action needed:** Works as-is

---

### Risk 4: Build Fails Due to Missing Component
**Risk:** If I remove VendorNetwork import/render but component still has dependencies, build fails
**Severity:** 🟡 MEDIUM (blocks deployment)
**Mitigation:** 
- Test build locally: `npm run build`
- Verify all components render correctly
- Check console for missing props or errors

**Action:** After editing index.astro, run test build

---

### Risk 5: Copy Changes Introduce Grammatical Errors
**Risk:** New copy has typos or awkward phrasing
**Severity:** 🟡 MEDIUM (hurts credibility)
**Mitigation:** 
- Proof copy against GBP alignment strategy
- Have user review proposed copy before coding
- Use spell-checker on en.json

**Action:** This proposal document serves as pre-review; get approval before coding

---

### Risk 6: Links Point to Wrong Pages
**Risk:** Copy says "Local SEO Optimization" but card links to wrong page
**Severity:** 🔴 HIGH (breaks user journey)
**Mitigation:** 
- Create explicit mapping document (Section D, done)
- Test all internal links after deploy
- Verify link destinations are live

**Action:** After deploy, click every service card and verify destination

---

### Risk 7: Mobile Nav Menu Too Short
**Risk:** Removed 2 nav items, now hamburger menu looks empty on mobile
**Severity:** 🟢 LOW (actually cleaner)
**Mitigation:** Test mobile view, verify spacing/styling works
**Action:** After deploy, test on iPhone/Android

---

### Risk 8: i18n Keys Used Elsewhere
**Risk:** Changed `nav.digitalMarketing` string, but it's used in footer or other pages
**Severity:** 🟡 MEDIUM (inconsistent messaging)
**Mitigation:** 
- Search en.json for all occurrences of each key we're changing
- Update all references (footer, page descriptions, etc.)
- Test both homepage and footer

**Action:** Before editing, search codebase for key reuse in footer, page descriptions, etc.

---

### Risk 9: Consulting Component Breaks
**Risk:** Removed VendorNetwork before Consulting component finishes rendering
**Severity:** 🟡 MEDIUM (page partial render)
**Mitigation:** Ensure Consulting component is independent and doesn't reference VendorNetwork
**Action:** Check Consulting.astro; search for VendorNetwork reference

---

### Risk 10: CSS Styling for Fewer Nav Items
**Risk:** Nav bar looks broken with fewer items (gaps, misaligned buttons)
**Severity:** 🟡 MEDIUM (design issue)
**Mitigation:** Test nav layout on desktop, tablet, mobile after removing items
**Action:** After deploy, visually inspect nav bar on all breakpoints

---

## Priority Risk Actions
1. **Before coding:** Search codebase for all vendor-network, nav.digitalMarketing, nav.websites, nav.photoVideo references
2. **Before coding:** Get user approval on copy recommendations
3. **After coding:** `npm run build` to verify no errors
4. **After deploy:** Manual test all service cards (click + verify destination)
5. **After deploy:** Test nav on mobile (hamburger menu)
6. **After deploy:** Verify bilingual pages still work

---

## SECTION H: RECOMMENDED ORDER OF OPERATIONS BEFORE WE START CODING

### Phase 0: Pre-Flight Checks (Do These First)
1. ✅ APPROVED: Hero copy, services cards, nav labels, consulting positioning, FAQ topics
2. ✅ APPROVED: English-only today, Spanish deferred
3. ✅ APPROVED: Vendor Network archived in place (removed from nav/homepage, but URL stays live)
4. ✅ APPROVED: Automation Systems added as 5th card with temporary /contact link
5. ⏳ Search codebase for vendor-network references (verify only in nav/homepage)
6. ⏳ Search codebase for i18n key reuse (footer, page descriptions, etc.)

### Phase 1: Edit Order (Sequence Matters)

**Step 1A: Update en.json Translation Strings**
- Reason: This is the source-of-truth for all content
- Effort: 45 minutes
- Risk: LOW
- File: src/i18n/locales/en.json
- Changes: All nav labels, hero copy, services copy, stack copy, consulting copy, FAQ, finalCTA

**Step 1B: Update Nav.astro Hard-Coded Labels**
- Reason: Must match i18n labels for consistency
- Effort: 15 minutes
- Risk: MEDIUM
- File: src/components/Nav.astro
- Changes: Update 3 nav labels, remove Services item, remove Vendor Network item

**Step 1C: Remove VendorNetwork from Homepage**
- Reason: Stop emphasizing non-core service to primary audience
- Effort: 5 minutes
- Risk: LOW
- File: src/pages/index.astro
- Changes: Remove import + render

**Step 2 (DEFERRED): Spanish translations**
- Spanish mirror to be completed in later phase when site architecture is finalized
- Today: English-only

### Phase 2: Testing (Do These Before Deploy)
1. **Local Build Test**
   - Run: `npm run build`
   - Verify: 32 pages prerendered, zero errors
   - Time: 2 minutes

2. **Visual Testing**
   - Desktop nav: Verify 3 new labels render correctly, 2 items removed
   - Mobile nav: Hamburger menu resizes properly
   - Homepage: All sections visible, no layout breaks
   - Copy: No typos, sentences complete
   - Time: 10 minutes

3. **Link Testing**
   - Click each service card: Verify destination is correct
   - Click all CTAs: Verify lead to /contact
   - Click footer links: Verify Services link works
   - Time: 5 minutes

4. **Spanish Language Check** (SKIP TODAY)
   - Spanish translations deferred to later phase
   - No bilingual testing needed for this deploy

### Phase 3: Pre-Deploy Review
1. Diff check: Review all en.json changes line-by-line
2. Diff check: Review Nav.astro changes (removed items are correct)
3. Diff check: Review index.astro changes (VendorNetwork import removed)
4. Final visual inspection: Screenshot homepage before/after
5. Verify build exits with code 0

### Phase 4: Deploy
1. Commit with message: "Homepage transformation: GBP alignment, nav label updates, remove non-core services"
2. Push to production
3. Wait for build to complete (monitor Cloudflare Pages)
4. Verify deployment successful

### Phase 5: Post-Deploy Verification
1. Visit nozallc.us homepage
2. Test all service cards (click each, verify destination)
3. Test CTAs (book discovery call)
4. Test nav on mobile
5. Check Google Search Console for any errors
6. Monitor analytics for any traffic anomalies

---

## FINAL CHECKLIST BEFORE CODING

**User Approvals (All Pre-Approved):**
- ✅ Hero headline preserved ("Launch Your Business Into the Future")
- ✅ Hero subheadline optimized for intent capture
- ✅ Services cards: Local SEO, Websites, Video, Brand, **Automation Systems**, Consulting
- ✅ Automation Systems card links to /contact temporarily (Phase 6: /automation)
- ✅ "Why Choose NOZA" reframing approved
- ✅ FAQ topics refined for audit/automation/expectations focus
- ✅ Consulting positioned as premium strategic layer
- ✅ Vendor Network: Archive in place (remove from nav/homepage, keep URL)
- ✅ Services removed from primary nav, kept in footer/secondary
- ✅ English-only today, Spanish deferred

**Technical Pre-Flight (Ready):**
- ✅ Build environment confirmed (recent `npm run build` successful)
- ⏳ Grep for vendor-network references (before coding)
- ⏳ Grep for nav label key reuse (before coding)
- ⏳ Verify VendorNetwork component is independent (quick check)

**Ready to Code:**
- ✅ All approvals gathered and documented
- ⏳ Pre-flight security checks (grep searches)
- ✅ Diff strategy confirmed (3 file edits: en.json, Nav.astro, index.astro)
- ✅ Copy approved and ready for implementation
- ✅ Build test command ready: `npm run build`

---

## CONCLUSION

**What This Transform Accomplishes:**

✅ **Aligns homepage messaging with GBP categories**
- Local SEO Optimization (primary)
- High-Performance Websites
- Video & Media Production
- Brand & Design
- Business Consulting (premium)

✅ **Matches navigation language to homepage language**
- Consistent outcomes-focused terminology
- Removed redundant/non-core items

✅ **Preserves all current URLs**
- No 404s
- All existing links still work
- Future-proof for silo rewrites

✅ **Maintains current styling & component structure**
- No design changes
- No new components
- Simple text-based updates

✅ **Sets foundation for Phases 2-6**
- Nav structure ready for new pages (Google Ads, Automation)
- Homepage messaging supports future silos
- Links maintain consistency

**Timeline:**
- Code changes: ~70 minutes
- Testing: ~20 minutes
- Review: ~10 minutes
- Deploy: ~5 minutes
- **Total: ~105 minutes**

**Risk Profile:** 🟢 **LOW** (text updates, no structural changes, all URLs preserved)

---

## NEXT STEPS: READY FOR IMPLEMENTATION

**Status:** ✅ **APPROVED AND READY TO CODE**

All approvals documented. Copy and strategy finalized.

**Immediate Next Action:**
Run two pre-flight grep searches:
1. Search for vendor-network references in codebase
2. Search for nav label key reuse in codebase

Then proceed with coding implementation (3 files, ~65 minutes total).

