# ICT Foundation Nepal – Design Aspects

## 1. Brand Colors
| Role               | Hex       | Usage                                      |
|--------------------|-----------|--------------------------------------------|
| Primary (Blue)     | `#0C4CA4` | Headings, active links, icons              |
| Accent (Red)       | `#E33831` | Buttons, hover overlays, highlights        |
| Body Text          | `#0E2557` | Paragraphs, secondary text                 |
| Light Background   | `#FFFFFF` | Section backgrounds                        |
| Footer Background  | `#0E2557` | Footer                                     |

## 2. Typography
- **Primary Font**: `'Poppins', sans-serif` – headings, menu, buttons.
- **Secondary Font**: `'Roboto Slab', serif` – may be used for subheadings or quotes (as per original).
- **Accent Font**: `'Chivo', sans-serif` – buttons.
- **Base Size**: body text 15px, headings scale as follows:
  - H1/Hero tagline: ~48px bold
  - H2 (section headings): 32px bold
  - H3 (event titles, card headings): 24px semibold
  - Body: 15px regular, line-height 1.7

## 3. Spacing & Layout
- Section vertical padding: 80px top/bottom on desktop, 60px on mobile.
- Container max-width: 1200px, centered.
- Grid gaps: 24px.
- Button padding: 12px 32px.

## 4. Shadows & Effects
- **Header shadow** (on scroll): `0 2px 10px rgba(0,0,0,0.08)`.
- **Card hover**: slight lift with `translateY(-4px)` and increased shadow.
- **Image overlay**: semi-transparent red `rgba(227, 55, 49, 0.8)` with white icon.

## 5. Iconography
Use simple outline icons from `react-icons/fa` or `react-icons/hi` (e.g., FaPhone, FaEnvelope, FaMapMarkerAlt, FiDownload, FiExternalLink).

## 6. Implementation with Tailwind
Tailwind configuration will extend theme:
```js
colors: {
  primary: '#0C4CA4',
  accent: '#E33831',
  'body-text': '#0E2557',
},
fontFamily: {
  sans: ['Poppins', 'sans-serif'],
  secondary: ['Roboto Slab', 'serif'],
  button: ['Chivo', 'sans-serif'],
}