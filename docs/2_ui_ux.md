# ICT Foundation Nepal – UI/UX Specification

## 1. Page Structure (Single Page)
The entire site is a one-page vertical layout with the following sections, each accessible via smooth-scrolling anchor links.

1. **Header** (sticky)
2. **Hero**
3. **About IFN**
4. **Our Publications**
5. **Upcoming Events**
6. **Research and Survey**
7. **How We May Assist You?**
8. **Contact Us**
9. **Footer**

## 2. Navigation & Interaction

- **Desktop Menu**: Horizontal links in the header: Home, About, Publications, Events, Research, Assistance, Contact.
- **Mobile Menu**: Hamburger icon opens a full-screen overlay with the same links.
- **Smooth Scrolling**: Clicking any menu link smoothly scrolls to the corresponding section (using `scroll-behavior: smooth` and `element.scrollIntoView()`).
- **Sticky Header**: Header is transparent initially; after scrolling past the hero, background becomes white with a subtle shadow.
- **Back to Top Button**: A floating button appears after scrolling past the first fold; clicking scrolls to top.
- **Hover Effects**:  
  - Buttons change shade slightly.  
  - Publication images scale up (1.03) and reveal a red overlay with a “View PDF” icon.

## 3. Responsive Breakpoints
Following the original CSS:
- **Desktop**: > 1199px
- **Tablet**: 768px – 1199px
- **Mobile**: < 767px

Stack columns vertically on mobile; reduce font sizes; convert publication grid to single column.

## 4. Component Details

### Header
- Logo max-width: 160px.
- Links styled with Poppins, weight 500.
- Active link underlined with primary blue.

### Hero
- Full-viewport height background image (`image_ifn.jpg`).
- Dark gradient overlay (black at 30% opacity).
- Tagline: `"Elevating Nepal: Pioneering Digital Progress Together."` (Poppins, bold, white).
- CTA button (“Contact Us”): Chivo font, red background `#E33730`, white text, border-radius 5px, padding 12px 32px.

### About Section
- Two-column layout: text left, optional image right.
- Heading: “About IFN” (32px, primary blue, Poppins, bold).
- Body text: 15px, color `#0E2557`, line-height 1.7.

### Publications
- Heading: “Our Publications”.
- Repeating grid of cards: each card has a cover image (with hover effect) and a caption below.
- On click, opens the PDF in a new tab.

### Events
- Event card: includes date (formatted with a decorative top bar), title, short description, and optional “Register” button (if event is future).
- Past events shown as “Completed” without button.

### Research Survey
- Card with cover image, title, description, and a “Download Report” button.

### Assistance Items
- Three-column grid on desktop, each containing an icon (can be from `react-icons`), a title, and a short paragraph.

### Contact
- Two-column layout: left has a form, right has business info (registration number, address, phones, emails).
- Form fields: Name, Email, Subject, Message – all required.
- Submit button matches hero CTA style.
- Success/error feedback as toast notifications.

### Footer
- Simple dark background (`#0E2557`), white text.
- “Find us on” with social icons (links to Facebook, Twitter, LinkedIn – placeholder URLs).
- Copyright: “© [year] ICT Foundation Nepal”.

## 5. Animation & Micro-interactions

- **Section entrance**: As each section scrolls into view, elements fade-in-up using Framer Motion `whileInView`.
- **Hover states**: transition duration 300ms on buttons, cards, and images.
- **Loading state**: While fetching CMS data, a skeleton screen (gray pulsing rectangles) is displayed.
- **Form validation errors**: Shake animation on invalid fields.

## 6. Accessibility
- All images have descriptive `alt` text.
- Form inputs have proper labels.
- Color contrast meets WCAG AA.
- Focus states visible (custom ring).
- Semantic HTML5 elements (`<nav>`, `<main>`, `<section>`, `<footer>`).