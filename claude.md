Build a pixel-perfect clone of cloudstudio.es as a
learning exercise. This is a single-page React website
with advanced scroll animations. Build section by section.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TECH STACK:

- React 18 + TypeScript + Vite
- Tailwind CSS
- Framer Motion (page transitions, entry animations,
  hover effects, card animations)
- GSAP + ScrollTrigger (scroll-pinned sections,
  text fill animation, counter animation)
- Lenis (smooth scroll)
- react-fast-marquee (scrolling ticker)
- Google Fonts: Archivo Black (headings) +
  Inter (body text)

Install all dependencies before starting.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

GLOBAL STYLES:

- Primary color: #7B7FC4 (periwinkle purple)
- Dark: #0a0a0a (near black)
- Cream: #F5F0DC
- White: #ffffff
- Smooth scroll via Lenis on entire page
- Custom cursor: small white circle 16px,
  mix-blend-mode: difference, follows mouse with
  spring physics (Framer Motion)
- Right sidebar: fixed, vertical text showing
  current section name + filled dot indicator.
  Updates as user scrolls through sections.
  Rotate text 90deg, position fixed right 24px.
- Sound off button: fixed bottom right, dark pill

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COMPONENT 1: CursorFollowingEyes

Reusable component used in multiple sections.
Two eyes (large + slightly smaller) inside a
circle of dot particles.

Eyes:

- Cream/off-white circular eye whites
- Dark pupils that follow the cursor using
  Math.atan2 to calculate angle
- Pupils offset from center so they appear to
  look toward cursor
- Subtle spring transition on pupil movement
- Random blink every 2-6 seconds
  (scaleY 1 → 0.05 → 1 in 150ms)

Dot circle:

- 120-150 SVG dots arranged in a circle
- Varying sizes (1-4px) for organic feel
- Slow continuous rotation (20s full rotation)
- In Statement section: dots form a larger ring
  with gap in center (not filled circle)

Props: size (sm | md | lg), variant (filled | ring)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 1: NAVBAR

Fixed top, full width, transparent background.
Left: "cloudstudio*" in Archivo Black, small
Center: Nothing (eyes creature in hero is center)
Right: small eyes icon | "Work" | "FAQ" |
       "Book a call →" (dark pill button)

On scroll: navbar gets subtle backdrop-blur
background so it's readable over content.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 2: HERO

Background: #7B7FC4 full viewport height

Left side (60% width):

- Small ticker line:
  "● AI-NATIVE STUDIO — AGENTS · RAG · CLAUDE · 18+ YRS"
  Small caps, letter-spacing: 0.15em, tiny font
- Main headline: "AI that actually ships."
  Font: Archivo Black
  Size: clamp(72px, 10vw, 140px)
  Line height: 0.9
  Letter spacing: -0.03em
  Color: #0a0a0a (near black)
  "ships." has an oval/ellipse drawn around it:
  Use an SVG ellipse absolutely positioned
  around that word, drawn with stroke-dasharray
  animation on load (draws itself in 1s)
- Below headline: two column layout
  Left: "Book a call →" dark rounded pill button
        (hover: scale 1.02, slight background shift)
  Right: "AI agents, RAG pipelines and Claude
          systems for your real workflows —
          designed, built and run by us.
          Live in weeks, not quarters."
          Small text, max-width 300px

Right side (40% width):

- CursorFollowingEyes component, size="lg"
- Centered vertically

Entry animations (on page load, staggered):

- Ticker fades up: delay 0.1s
- Each headline word slides up from below:
  stagger 0.08s between words
- Ellipse draws itself: delay 0.5s
- Button + description fade up: delay 0.6s
- Eyes creature scales from 0.8 to 1: delay 0.3s

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 3: WHAT WE DO

Background: #e8e8f0 (very light lavender grey)

Sub-section A — Marquee ticker:
Full-width dark (#0a0a0a) bar, ~48px tall.
Infinite scrolling text left to right:
"Creative dev ✦ AI agents ✦ RAG pipelines ✦
Claude ✦ MCP servers ✦ Automation ✦
Digital workers ✦"
Use react-fast-marquee, speed 60, white text.
Two instances scrolling same direction for
seamless loop effect.

Sub-section B — Main content:
Two column layout:
Left (50%):

- "● WHAT WE DO" small label
- Headline: "We don't just call [word]."
  The underlined word cycles through:
  "APIs" → "Scripts" → "demos" → "APIs"...
  Every 2.5 seconds, word fades out and new
  word fades in with slight upward movement.
  Word has an animated underline below it.

Right (50%):

- Paragraph describing the studio
- Four tags: "✦ AI ENGINEERING" "✦ WEB DESIGN"
  "✦ WEB DEVELOPMENT" "✦ CREATIVE DEV"
  Small caps, spaced, with diamond bullet

Sub-section C — Service cards:
Three cards side by side, dark backgrounds:
Card 1 — AI agents:
  Top: animated terminal/agent interface
  (Build as a CSS animation: text appearing
   line by line in a dark terminal window,
   looping every 4s)
  Bottom: "AI agents" title, "01", description

Card 2 — RAG & knowledge:
  Top: animated score/retrieval UI
  (Progress bars that fill and refill,
   looping animation)
  Bottom: "RAG & knowledge" title, "02", desc

Card 3 — Claude & LLM:
  Top: code snippet with syntax highlighting
  that types itself out and loops
  Bottom: "Claude & LLM" title, "03", desc

All cards: fade up on scroll with stagger.
Hover: slight translateY(-4px), shadow deepens.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 4: WHAT WE BUILD (Scroll-pinned stack)

This is the most complex section.

HOW IT WORKS:
The section is pinned (stays in place) while
user scrolls through 5 "cards". Each card
slides up from below, while previous card
scales down to 0.9 and fades slightly.
When new card is fully visible, it becomes
the active card. Navigation dots on left
show which card is active.

Use GSAP ScrollTrigger with pin: true.
Create a timeline for each card transition.

Total section scroll distance: 500vh
(100vh per card transition)

CARD STRUCTURE (each card):
Left side:

- Number nav: "01 —— 02 — 03 — 04 — 05"
  Active number has longer dash, bolder
- Category tag in parentheses:
  "( RETRIEVAL · CITATIONS )"
- Large headline: "RAG & knowledge"
  Font: Archivo Black, ~80px
- Description paragraph
- Meta: "3-5 WKS TYPICAL · ACCURACY EVALS INCLUDED"

Right side:

- Animated diagram/visualization in a
  dark rounded card
  Each card has different animation:
  Card 1 (RAG): Flow diagram — query → rerank
    → vectors/sources. Nodes connected by lines.
    Lines animate (draw themselves, highlight
    active path). Use SVG with stroke-dasharray.
  Card 2 (SaaS): Database rows animation —
    rows fill with striped loading pattern,
    toggle switches between synthetic/live
  Card 3 (Agents): Terminal with agent logs
    appearing line by line
  Card 4 (Claude): API response streaming
    text appearing character by character  
  Card 5 (Creative): Browser window with
    website scrolling

ALTERNATING COLORS:
Card 1: Dark (#0a0a0a) background
Card 2: Lavender (#7B7FC4) background  
Card 3: Dark background
Card 4: Lavender background
Card 5: Dark background

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 5: WORKFORCE

Sub-section A — Stats counter (dark background):
Background: #0a0a0a with subtle particle dots
(Use canvas or CSS to create 30-40 small white
dots scattered randomly, slowly floating)

4 stats in a row:
"18+" YEARS SHIPPING
"5+" AI SYSTEMS LIVE  
"352K+" OPEN SOURCE DOWNLOADS
"<4w" TO FIRST DEPLOY

Each number animates from 0 to final value
when scrolled into view using IntersectionObserver.
CountUp: 1.5s duration, easeOut.
Font: Archivo Black, ~80px, color: #7B7FC4

CursorFollowingEyes: small version,
positioned right of stats.

Sub-section B — Digital Workforce (lavender):
Background: #7B7FC4

Left (50%):

- "( THE DIGITAL WORKFORCE )" label
- Massive headline: "YOUR NEXT HIRE ISN'T A PERSON."
  Archivo Black, ~80px, dark color
  Eyes creature icon embedded IN the headline
  between "YOUR" and "NEXT" —
  actually position it overlapping the Y of YOUR
- Description paragraph

Right (50%):

- Stack of employee "pass" cards
  Cards are slightly rotated/fanned out (CSS transform rotate)
  Top card: "CLOUDSTUDIO · STAFF PASS" header
  Employee details: ROLE, SHIFT, SALARY fields
  A description button at bottom
  
  Cards are stacked 4-5 deep with slight
  rotation differences visible at edges.
  
  Click interaction: Top card slides right
  (x: 400px) and fades out (opacity: 0) via
  Framer Motion exit animation, revealing
  next card beneath. Cards cycle through.

- "CLICK — MEET THE WHOLE TEAM" dark pill button

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 6: SELECTED WORK

Background: #7B7FC4

Large "Selected work" heading — Archivo Black,
~80px, left aligned.

Work list: 4 items in a numbered list
Each item is a full-width row with thin
divider lines above and below.

Row structure:
[01]  [Project Name]    [tag · tag]    [→]

Hover interaction (the key animation):

1. A dark bar sweeps from LEFT to RIGHT across
   the entire row using CSS ::after with
   transform: scaleX(0) → scaleX(1)
   transform-origin: left
   Duration: 0.3s ease
2. Text color inverts to white (transition)
3. A project preview appears on the RIGHT side
   of the screen — a floating card showing
   a browser mockup with project screenshot
   This preview fades + slides in from right

Project previews:
Build 4 simple mock browser screenshots using
CSS — dark browser chrome with URL bar,
content inside. Each project has different
colored content inside.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 7: STATEMENT

Background: #0a0a0a (full dark)

Large text centered: "WE SHIP AI TO PRODUCTION."
Font: Archivo Black
Size: clamp(60px, 8vw, 120px)

THE KEY ANIMATION:
Text starts as OUTLINED/HOLLOW:
  color: transparent
  -webkit-text-stroke: 2px #7B7FC4

As user scrolls through this section, text
gradually FILLS IN from left to right.
Implement using GSAP ScrollTrigger scrub:
  Animate a clip-path or a filled copy of
  the text overlaid on the outlined version,
  scrubbed to scroll position.

OR simpler approach:
Use two overlapping text elements:

  1. Outlined text (always visible)
  2. Filled text (#7B7FC4) with
     clip-path: inset(0 100% 0 0)
  ScrollTrigger scrubs clip-path right edge
  from 100% → 0% as user scrolls

CursorFollowingEyes: large version,
right side, variant="ring" (ring of dots)

Subtitle below:
"Reliability, observability and cost control
aren't add-ons — they're how we build from day one."
Small text, grey color, fade in after text fills.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 8: CONTACT

Background: #7B7FC4

Large headline with STAGGERED ENTRY ANIMATION:
When section scrolls into view:

1. "Let's build" slides up and fades in
   (y: 40 → 0, opacity: 0 → 1, duration 0.5s)
2. 0.3s pause
3. "your AI." pops in with spring bounce
   (scale: 0.8 → 1.05 → 1, like a bounce)

Font: Archivo Black, ~100px
Color: #0a0a0a

CursorFollowingEyes: right side, size="md"

"Book a call →" dark pill button below headline.

Three info columns below:
NEW PROJECTS: <hello@yourname.com>
BASED IN: Your City · Working globally  
HOW IT STARTS: 30-min call → proposal in 5 days
               Fixed price or retainer · no commitment

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

RIGHT SIDEBAR NAVIGATION:

Fixed on right side of screen.
Shows current section name (vertical text,
rotated 90deg clockwise) + a dot.
Dot is filled when on that section,
outline when not.

Sections: HERO · WHAT WE DO · WHAT WE BUILD ·
WORKFORCE · SELECTED WORK · STATEMENT · CONTACT

Updates via IntersectionObserver watching
each section.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

BUILD ORDER:

Phase 1: Setup + global

- Vite + React + TS + Tailwind
- Install all dependencies
- Lenis smooth scroll setup
- Custom cursor component
- Right sidebar navigation
- CursorFollowingEyes component
  (test it works before continuing)
- Google Fonts setup

Phase 2: Hero + Navbar

- Navbar component
- Hero layout + typography
- SVG ellipse around "ships."
- Entry animations
- Verify eyes follow cursor

Phase 3: What We Do

- Marquee ticker bar
- Cycling word animation
- Two column layout
- Three service cards with
  looping CSS animations inside

Phase 4: What We Build (hardest section)

- GSAP ScrollTrigger pin setup
- Card stack transition
- 5 cards with alternating colors
- Animated diagrams inside each card
- Navigation dots

Phase 5: Workforce

- Stats counter with IntersectionObserver
- Canvas particle background
- Staff card stack with click animation

Phase 6: Selected Work

- List layout with dividers
- Hover sweep animation (::after scaleX)
- Project preview on hover
- Color inversion on hover

Phase 7: Statement

- Outlined → filled text scroll animation
- GSAP ScrollTrigger scrub
- Large eyes variant

Phase 8: Contact + Polish

- Staggered entry animation
- Three column info section
- Final responsive adjustments
- Test all animations together
- Fix any GSAP + Framer Motion conflicts

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

IMPORTANT NOTES:

1. Replace all CloudStudio content with your
   own — your name, your projects, your email.
   This is a learning clone, not a copy to publish.

2. The CursorFollowingEyes component appears
   in EVERY section — it's the brand mascot.
   Build it perfectly first, reuse everywhere.

3. For the animated diagrams in the What We Build
   cards — build them as pure CSS/SVG animations,
   no external assets needed. The RAG diagram is
   just boxes connected by animated SVG paths.

4. GSAP ScrollTrigger and Framer Motion can
   conflict. Use GSAP for scroll-driven animations
   (pin, scrub) and Framer Motion for
   interaction-driven animations (hover, click,
   entry). Keep them separate.

5. Test on Chrome first — some CSS properties
   (-webkit-text-stroke) need prefixes.

Build phase by phase. Show me the result
after each phase before moving to the next.
