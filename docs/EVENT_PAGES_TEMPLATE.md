# Event Pages Template Guide

## How to Create Similar Event Pages

This is a template guide to help you create similar event pages for other events.

### File Structure
```
src/app/
├── digital-nepal-conclave/
│   ├── page.tsx          (Main event page)
│   └── layout.tsx        (Layout wrapper)
├── digital-karnali-conclave/
│   ├── page.tsx
│   └── layout.tsx
└── ... (other events)
```

### Quick Steps to Create a New Event Page:

1. **Create folder**: `src/app/[event-name-kebab-case]/`
2. **Copy & modify** the Digital Nepal Conclave files
3. **Update these sections**:
   - Event title and description
   - Date and location
   - Overview text
   - Key themes
   - Contact information

### Key Sections in the Template:

```tsx
// 1. HERO SECTION
- Background image (update: /images/hero-bg.jpg)
- Headline text
- Description
- CTA buttons

// 2. EVENT DETAILS
- Date, Location, Contact info

// 3. OVERVIEW
- Event purpose and description

// 4. WHAT TO EXPECT (6 Cards)
- Keynote Speakers
- Networking Opportunities
- Interactive Workshops
- Startup Showcase
- Policy Discussions
- Award Ceremonies

// 5. KEY THEMES (5 Items)
- Customize with event-specific themes

// 6. REGISTRATION CTA
- Call-to-action section

// 7. FAQ
- Frequently Asked Questions
```

### Variables to Replace:

For **Digital Nepal Conclave**, replace with your event details:

```
- Event Title: "Digital Nepal Conclave" → Your Event Name
- Event Description: Main description → Your description
- Date: "TBD" → Your event date
- Location: "Kathmandu, Nepal" → Your location
- Contact: info@ictfoundation.org.np → Your contact
- Key Themes: 5 themes → Customize for your event
- What to Expect: 6 items → Customize for your event
```

### Example: Creating Digital Karnali Conclave Page

1. Create folder: `src/app/digital-karnali-conclave/`
2. Copy `page.tsx` and `layout.tsx` from Digital Nepal Conclave
3. Replace:
   ```tsx
   - Title: "Digital Nepal Conclave" → "Digital Karnali Conclave"
   - Description: Nepal's → Karnali's
   - Location: "Kathmandu, Nepal" → "Karnali Region, Nepal"
   - Themes: Adjust to focus on Karnali's specific challenges
   - Overview: Update with Karnali-specific content
   ```

### Image Placeholders:

Update the hero image path:
```tsx
src="/images/hero-bg.jpg"  // Replace with your event image
```

### Navigation Links:

The Header component automatically links to your pages if you add them to the navigation structure.

### Color & Styling:

- Primary Color: `#2563eb` (blue - adjust in tailwind config)
- Text Color: `#0E2557` (dark blue)
- Background: White, Gray-50, Gradient backgrounds

### Features Included:

✅ Responsive design (mobile, tablet, desktop)
✅ Smooth scroll animations
✅ Interactive FAQ section
✅ Multiple content sections
✅ Call-to-action buttons
✅ Event details cards
✅ Related events section (can be added)
✅ Newsletter signup (can be added)

### Tips:

1. **Use placeholders** for TBD information (dates, locations, etc.)
2. **Customize themes** to match each event's focus
3. **Update descriptions** to be event-specific
4. **Keep header/footer** consistent across all pages
5. **Test responsiveness** on mobile devices

### Next Steps:

Create pages for:
- Digital Karnali Conclave
- Digital Madhesh Conclave
- ICT Award
- Digital Leadership Dialogue
- Pre-Budget ICT Discourse
- Nepal AI Summit

Each following the same template structure!
