# Graph Report - .  (2026-06-11)

## Corpus Check
- Large corpus: 176 files · ~547,544 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 466 nodes · 598 edges · 62 communities (37 shown, 25 thin omitted)
- Extraction: 90% EXTRACTED · 10% INFERRED · 0% AMBIGUOUS · INFERRED: 57 edges (avg confidence: 0.83)
- Token cost: 2,800 input · 1,800 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Page Layouts & Navigation|Page Layouts & Navigation]]
- [[_COMMUNITY_Home & About Pages|Home & About Pages]]
- [[_COMMUNITY_Design System & Branding|Design System & Branding]]
- [[_COMMUNITY_Patrons & Slideshow Hero|Patrons & Slideshow Hero]]
- [[_COMMUNITY_Project Dependencies|Project Dependencies]]
- [[_COMMUNITY_Header, Footer & Collaborators|Header, Footer & Collaborators]]
- [[_COMMUNITY_Media & News Section|Media & News Section]]
- [[_COMMUNITY_TypeScript Configuration|TypeScript Configuration]]
- [[_COMMUNITY_Root App Layout|Root App Layout]]
- [[_COMMUNITY_Digital Conclave Events|Digital Conclave Events]]
- [[_COMMUNITY_Event Data Model|Event Data Model]]
- [[_COMMUNITY_Contact API & Server|Contact API & Server]]
- [[_COMMUNITY_Contact Form Pipeline|Contact Form Pipeline]]
- [[_COMMUNITY_Build Configuration|Build Configuration]]
- [[_COMMUNITY_Event Promo & Logos|Event Promo & Logos]]
- [[_COMMUNITY_Event Photography|Event Photography]]
- [[_COMMUNITY_Google Program Pages|Google Program Pages]]
- [[_COMMUNITY_Hero & Program Logos|Hero & Program Logos]]
- [[_COMMUNITY_International Partners|International Partners]]
- [[_COMMUNITY_IFN Brand & Patron Photos|IFN Brand & Patron Photos]]
- [[_COMMUNITY_Publications & Media Assets|Publications & Media Assets]]
- [[_COMMUNITY_Industry Collaborators|Industry Collaborators]]
- [[_COMMUNITY_IFN Publications|IFN Publications]]
- [[_COMMUNITY_Team Portraits|Team Portraits]]
- [[_COMMUNITY_News Cards & Types|News Cards & Types]]
- [[_COMMUNITY_Event Banners & Hero|Event Banners & Hero]]
- [[_COMMUNITY_Contact Form Docs|Contact Form Docs]]
- [[_COMMUNITY_Government Partners|Government Partners]]
- [[_COMMUNITY_DNC Layout|DNC Layout]]
- [[_COMMUNITY_Scroll Animation Docs|Scroll Animation Docs]]
- [[_COMMUNITY_Framework SVG Icons|Framework SVG Icons]]
- [[_COMMUNITY_Framer Motion Animation|Framer Motion Animation]]
- [[_COMMUNITY_ESLint Config|ESLint Config]]
- [[_COMMUNITY_Placeholder Images|Placeholder Images]]
- [[_COMMUNITY_Next.js Config|Next.js Config]]
- [[_COMMUNITY_PostCSS Config|PostCSS Config]]
- [[_COMMUNITY_UI Utility Icons|UI Utility Icons]]
- [[_COMMUNITY_Team Duplicate Photos|Team Duplicate Photos]]
- [[_COMMUNITY_NewsArticle Interface|NewsArticle Interface]]
- [[_COMMUNITY_DS Layout Component|DS Layout Component]]
- [[_COMMUNITY_Startup Event Photo|Startup Event Photo]]
- [[_COMMUNITY_Patron Guna Keshari|Patron Guna Keshari]]
- [[_COMMUNITY_Patron Manish Pokharel|Patron Manish Pokharel]]
- [[_COMMUNITY_Patron Manohar Bhattarai|Patron Manohar Bhattarai]]
- [[_COMMUNITY_Patron Placeholder|Patron Placeholder]]
- [[_COMMUNITY_Patron Subarna Shakya|Patron Subarna Shakya]]
- [[_COMMUNITY_Patron Vivek Rana|Patron Vivek Rana]]
- [[_COMMUNITY_README|README]]
- [[_COMMUNITY_Team Razan Lamsal|Team Razan Lamsal]]
- [[_COMMUNITY_Team Resham Bhandari|Team Resham Bhandari]]
- [[_COMMUNITY_Team Sujal Shrestha|Team Sujal Shrestha]]
- [[_COMMUNITY_Team Sushil Pokharel|Team Sushil Pokharel]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 18 edges
2. `Event Pages Template Guide` - 13 edges
3. `AnimatedSection()` - 9 edges
4. `ICT Foundation Nepal Recovered Website Content` - 9 edges
5. `PublicationsPage()` - 7 edges
6. `useMetadata()` - 7 edges
7. `ICT Foundation Nepal Design System` - 7 edges
8. `TeamPage()` - 6 edges
9. `NewsAndBlogsSection()` - 6 edges
10. `allMediaItems` - 6 edges

## Surprising Connections (you probably didn't know these)
- `ScrollToTop()` --conceptually_related_to--> `Static Site Architecture (Next.js)`  [INFERRED]
  src/components/ScrollToTop.tsx → docs/1_architecture.md
- `SupportInnovationCTA()` --implements--> `AnimatedSection Scroll-in Pattern`  [INFERRED]
  src/components/SupportInnovationCTA.tsx → docs/2_ui_ux.md
- `TypeScript Configuration` --conceptually_related_to--> `Static Site Architecture (Next.js)`  [INFERRED]
  tsconfig.json → docs/1_architecture.md
- `Lucky Draw Winners PDF` --conceptually_related_to--> `IFN Site Identity`  [AMBIGUOUS]
  public/lucky_draw_winners.pdf → docs/4_global_css.txt
- `ReachSection()` --implements--> `AnimatedSection Scroll-in Pattern`  [INFERRED]
  src/components/ReachSection.tsx → docs/2_ui_ux.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **IFN Event Pages (Conclave Series)** — digital_nepal_conclave_page_dncpage, digital_karnali_conclave_page_dkcpage, digital_madhesh_conclave_page_dmcpage, digital_leadership_dialogue_page_dldpage [INFERRED 0.95]
- **Contact Form Data Pipeline** — docs_7_contactform_contactform, contact_route_contactapiroute, concept_contactformvalidation_zodschema, concept_resend_emailservice [INFERRED 0.85]
- **Project Configuration Files** — root_nextconfig_nextconfig, root_packagejson_packagejson, root_postcssconfigmjs_postcssconfig, root_eslintconfig_eslintconfig [INFERRED 0.90]
- **IFN-Organized Events in Nepal** —  [INFERRED 0.95]

## Communities (62 total, 25 thin omitted)

### Community 0 - "Page Layouts & Navigation"
Cohesion: 0.05
Nodes (22): About IFN Page, CollaborationLayout(), CollaborationPage(), EventPageHeroProps, initiativeLinks, quickLinks, NavLink, navLinks (+14 more)

### Community 1 - "Home & About Pages"
Cohesion: 0.07
Nodes (28): metadata, AboutSection(), coreValues, objectives, AnimatedSection(), Props, CollaboratorsSection(), PartnerGroup (+20 more)

### Community 2 - "Design System & Branding"
Cohesion: 0.07
Nodes (36): Accent Color Red (#E33831), Body Text Color (#0E2557), IFN Brand Colors, Chivo Font (Accent/Buttons), ICT Foundation Nepal Design System, IFN Iconography (react-icons), Poppins Font (Primary), Primary Color Blue (#0C4CA4) (+28 more)

### Community 3 - "Patrons & Slideshow Hero"
Cohesion: 0.09
Nodes (25): PatronsGrid(), ReachSection(), Action, Breadcrumb, Props, Slide, Slide Type, SlideshowHero() (+17 more)

### Community 4 - "Project Dependencies"
Cohesion: 0.07
Nodes (28): dependencies, framer-motion, @hookform/resolvers, next, react, react-dom, react-hook-form, react-hot-toast (+20 more)

### Community 5 - "Header, Footer & Collaborators"
Cohesion: 0.11
Nodes (21): BackToTop(), CollaboratorsGrid(), CollaboratorsGridProps, Footer(), Header(), HeaderDark(), NavLink, navLinks (+13 more)

### Community 6 - "Media & News Section"
Cohesion: 0.18
Nodes (17): MediaCard(), MediaCardProps, NewsAndBlogsSection(), YouTubeCard, MediaSection(), YouTubeCard(), YouTubeCardProps, Microlink API for Metadata Fetching (+9 more)

### Community 7 - "TypeScript Configuration"
Cohesion: 0.09
Nodes (21): compilerOptions, allowJs, baseUrl, esModuleInterop, ignoreDeprecations, incremental, isolatedModules, jsx (+13 more)

### Community 8 - "Root App Layout"
Cohesion: 0.17
Nodes (10): AGENTS.md — Next.js Agent Rules, chivo, metadata, poppins, robotoSlab, ScrollToTop(), Headless CMS Decoupled Content, Static Site Architecture (Next.js) (+2 more)

### Community 9 - "Digital Conclave Events"
Cohesion: 0.17
Nodes (12): Digital Karnali Conclave Event, Digital Leadership Dialogue Event, Digital Madhesh Conclave Event, Digital Nepal Conclave Event, Digital Karnali Conclave Layout, Digital Karnali Conclave Page, Digital Leadership Dialogue Layout, Digital Leadership Dialogue Page (+4 more)

### Community 10 - "Event Data Model"
Cohesion: 0.36
Nodes (7): EventHero(), EventHeroProps, Event, Event Interface, events, getAllEventSlugs(), getEventBySlug()

### Community 11 - "Contact API & Server"
Cohesion: 0.22
Nodes (6): contactSchema, app, { createServer }, handle, next, { parse }

### Community 12 - "Contact Form Pipeline"
Cohesion: 0.29
Nodes (7): Contact Form Zod Validation Schema, Resend Email Service Integration, Contact API Route (Active), HeroProps, HeroSection(), Contact API Route Handler (Doc), Client-Side Contact Form (Doc)

### Community 13 - "Build Configuration"
Cohesion: 0.33
Nodes (6): Static Export Mode (Next.js output:export), ESLint Configuration, Next.js Configuration, Package.json (Project Dependencies), PostCSS Configuration, Custom Next.js HTTP Server

### Community 14 - "Event Promo & Logos"
Cohesion: 0.33
Nodes (6): AI Summit Event Promotional Image, Digital Nepal Conclave Event Hall Photo, Digital Karnali Conclave 2024 Panel Discussion Photo, Digital Leadership Dialogue Logo, Digital Madhesh Conclave Logo, Digital Nepal Conclave Logo

### Community 15 - "Event Photography"
Cohesion: 0.40
Nodes (6): Digital Leadership Dialogue 1.2 Panel Discussion Event Photo, Digital Madhesh Conclave 2025 Chief Guest Speech Event Photo, Google Career Certificates Scholarship Program Promotional Illustration, Grow with Google Career Certificates Scholarship Program Banner, ICT Gyan School Students Audience Event Photo, ICT Awards Nepal Group Photo of Winners on Stage

### Community 17 - "Hero & Program Logos"
Cohesion: 0.33
Nodes (6): Hero Slideshow Image 2 - Digital Health Panel Discussion, Hero Slideshow Image 3 - Digital Nepal Conclave 2025 Speaker, Hero Slideshow Image 4 - Digital Leadership Dialogue 1.2 Panel, Hero Slideshow Image 5 - Digital Nepal Conclave 2025 Group Photo, ICT Award Logo, ICT Gyan Logo

### Community 18 - "International Partners"
Cohesion: 0.73
Nodes (6): Digital Samvad Logo - Going for DIGITAL, Digital Karnali Conclave Logo, Huawei Logo, inDrive Logo, TAF (The Asia Foundation) Logo, upGrad Logo

### Community 19 - "IFN Brand & Patron Photos"
Cohesion: 0.33
Nodes (6): IFN Organization Logo, IFN Logo White Variant, Nepal AI Summit 2026 Logo, Ananda Raj Khanal - Patron Portrait, Birendra Mishra - Patron Portrait, Ganesh Shah - Patron Portrait

### Community 20 - "Publications & Media Assets"
Cohesion: 0.33
Nodes (6): Startup & Idea Fest Logo, Report on e-Governance Assessment and Stocktaking Study in Nepal – 2081, Event Report: Pre-Budget ICT Discourse 2083, Inventory of ICT Industry in Nepal Survey 2024 – Data Report, IFN Placeholder Publication Cover, Hariram Rimal – Team Member Portrait

### Community 21 - "Industry Collaborators"
Cohesion: 1.00
Nodes (6): CAN Federation Logo, FNCCI - Federation of Nepalese Chambers of Commerce and Industry Logo, NAS-IT - Nepal Association for Software and IT Services Companies Logo, Nepal Academy of Science and Technology (NAST) Logo, Nepal Chamber of Commerce Logo, upGrad Logo

### Community 22 - "IFN Publications"
Cohesion: 0.40
Nodes (6): Budget Recommendations for Tech Sector, Digital Pradesh Paridrishya (Digital Province Landscape) - Volume 1, Digital Pradesh Paridrishya (Digital Province Landscape) - Volume 2, Digital Nepal Conclave 2022 Event Report, Digital Nepal Conclave 2023 Event Report, Digital Nepal Conclave 2024 Event Report

### Community 23 - "Team Portraits"
Cohesion: 0.73
Nodes (6): Hempal Shrestha, Team Member Portrait (IMG_2517), Kabir Rajbanshi, Krishpana Poudel, Nidesh Maskey, Rachana Kharel

### Community 24 - "News Cards & Types"
Cohesion: 0.80
Nodes (3): NewsCard(), NewsFeed(), NewsArticle

### Community 25 - "Event Banners & Hero"
Cohesion: 0.40
Nodes (5): IFN Google Career Certificates Scholarship Program Banner, Incubation Program Group Photo - Participants Outside Building, Pre-Budget ICT Discourse 2083 Panel Discussion Event Photo, Digital Lumbini Samvad 4.0 ICT Policy Dialogue Event Photo, IFN Official Event Stage Group Photo - Hero Banner

### Community 27 - "Government Partners"
Cohesion: 0.83
Nodes (4): DoIT - Department of Information Technology Nepal Logo, IEDI - Institute of Engineering and Development Institute Logo (teal triangle with compass), MoCIT - Ministry of Communication and Information Technology Nepal Logo, NTA - Nepal Telecommunications Authority Logo

### Community 30 - "Framework SVG Icons"
Cohesion: 0.67
Nodes (3): Next.js Wordmark SVG Logo, Vercel Triangle Logo SVG, Browser Window SVG Icon

## Ambiguous Edges - Review These
- `UpcomingEventsSection()` → `events`  [AMBIGUOUS]
  src/components/UpcomingEventsSection.tsx · relation: shares_data_with
- `IFN Site Identity` → `Lucky Draw Winners PDF`  [AMBIGUOUS]
  public/lucky_draw_winners.pdf · relation: conceptually_related_to

## Knowledge Gaps
- **199 isolated node(s):** `HeroProps`, `contactSchema`, `formSchema`, `FormData`, `Props` (+194 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **25 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `UpcomingEventsSection()` and `events`?**
  _Edge tagged AMBIGUOUS (relation: shares_data_with) - confidence is low._
- **What is the exact relationship between `IFN Site Identity` and `Lucky Draw Winners PDF`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `UpcomingEventsSection()` connect `Patrons & Slideshow Hero` to `Home & About Pages`, `Event Data Model`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **Why does `events` connect `Event Data Model` to `Patrons & Slideshow Hero`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **Why does `AnimatedSection()` connect `Home & About Pages` to `Patrons & Slideshow Hero`, `Media & News Section`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Event Pages Template Guide` (e.g. with `Body Text Color (#0E2557)` and `Tailwind Theme Configuration`) actually correct?**
  _`Event Pages Template Guide` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `HeroProps`, `contactSchema`, `formSchema` to the rest of the system?**
  _201 weakly-connected nodes found - possible documentation gaps or missing edges._