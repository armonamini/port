# Port — Portfolio Master Spec (Source of Truth)

## Goal
A calm, modern, creative, earth-tone portfolio. NOT a generic AI SaaS template. Typography-led, editorial, spacious.

## Stack
- Next.js (App Router) + React
- Tailwind CSS
- TypeScript
- No UI component libraries (no shadcn, no MUI, no Chakra, no DaisyUI)

## Visual Direction (Must Follow)
### Avoid (hard no)
- No bubble/pill UI (no huge rounded buttons, no pill tags)
- No neon gradients, no glow, no glassmorphism
- No “SaaS landing page” look, no feature-card grids with heavy shadows
- No oversaturated purple/green startup palettes

### Do
- Calm earth-tone light theme
- Typography + whitespace as the primary design
- Thin borders instead of shadows (if needed)
- Subtle background grain texture overlay
- Section background tint shifts with soft fades between sections

## Colors (Locked)
Hero bg:        #F7F5F2
Projects bg:    #ECE7E1
Experience bg:  #F2EFEA
Footer bg:      #E3DED6

Text (primary): #1F2933
Accent:         #3A5A5A
Highlight (sparingly): #A2673F

## Fonts (Locked)
- Headings: Cormorant Garamond (serif)
- Body: Inter (sans)

## Site Structure (Locked)
- One-page scroll: Hero -> Projects -> Experience -> Footer
- Separate page: /resume with Resume download button

### Top Header Behavior
- At TOP (hero area): show full header nav items:
  Home/About, Projects, Experience, Resume
  - Home/About scrolls to #home
  - Projects scrolls to #projects
  - Experience scrolls to #experience
  - Resume routes to /resume

### Floating Nav Behavior (Important)
- Hidden at top
- Appears after ~150px scroll via FADE ONLY
- When floating nav is visible: header becomes NAME ONLY
- When user returns to top: floating nav hides, header returns full nav
- Active section indicator: small accent DOT under the active nav item
- No neon pill active state

### Mobile Nav
- Traditional hamburger menu (Option A)
- When open: simple dropdown/slide-down (not full-screen takeover)
- No floating nav on mobile

## Hero Content (Placeholder, can change later)
Name ABOVE headline: "Armon Amini"
Headline: "Cybersecurity-focused Software Engineer designing and building real-world network and infrastructure systems."
Paragraph: "I’m driven by understanding how systems behave in the real world — building environments that simulate, test, and strengthen modern network infrastructure."
Buttons: View Projects (scroll) and Resume (/resume)

## Projects Section (Placeholders)
- "Project 1", "Project 2", "Project 3"
- Include placeholder tags, dates, and short filler descriptions
- No images yet

## Experience Section (Placeholders)
- Structured entries with breathing room
- Each role gets a subtle vertical accent line on the left (accent @ 15–20% opacity)
- Placeholder roles/dates/bullets ok

## Footer (Locked)
- Minimal
- Left: "Armon Amini" + "Last updated: Month YYYY"
- Right: LinkedIn icon + Gmail icon (clickable)
- No big footer content
