---
name: Azzul Architectural Gallery & Brochure System
colors:
  surface: '#0d141b'
  surface-dim: '#0d141b'
  surface-bright: '#333a42'
  surface-container-lowest: '#080f16'
  surface-container-low: '#151c24'
  surface-container: '#192028'
  surface-container-high: '#242b32'
  surface-container-highest: '#2e353d'
  on-surface: '#dce3ed'
  on-surface-variant: '#bfc8cd'
  inverse-surface: '#dce3ed'
  inverse-on-surface: '#2a3139'
  outline: '#8a9297'
  outline-variant: '#40484c'
  surface-tint: '#90cfec'
  primary: '#90cfec'
  on-primary: '#003546'
  primary-container: '#0d5c75'
  on-primary-container: '#93d3ef'
  inverse-primary: '#1e667f'
  secondary: '#e9c349'
  on-secondary: '#3c2f00'
  secondary-container: '#af8d11'
  on-secondary-container: '#342800'
  tertiary: '#adc7ff'
  on-tertiary: '#002e68'
  tertiary-container: '#0052ae'
  on-tertiary-container: '#b3caff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#bde9ff'
  primary-fixed-dim: '#90cfec'
  on-primary-fixed: '#001f2a'
  on-primary-fixed-variant: '#004d64'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc7ff'
  on-tertiary-fixed: '#001a41'
  on-tertiary-fixed-variant: '#004493'
  background: '#0d141b'
  on-background: '#dce3ed'
  surface-variant: '#2e353d'
typography:
  display-hero:
    fontFamily: Outfit
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Outfit
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Outfit
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.08em
  label-md:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4rem
  space-4xl: 6rem
  gutter-mobile: 1rem
  gutter-tablet: 1.5rem
  gutter-desktop: 2rem
  modal-max-width: 1200px
---

## Brand & Style

The design system embodies the serene confidence and tactile luxury of high-end coastal modernism. Designed for international investors, architectural developers, and prospective coastal homeowners, the UI radiates structural precision, monolithic restraint, and effortless maritime elegance.

Drawing heavily from luxury real estate monographs and modern editorial design movements, the system balances dark, oceanic depths with luminous, sand-tinted highlights. Surfaces convey a feeling of polished slate, anodized architectural metal, and marine glass. The digital reading experience mimics a museum-grade folio: tactile page transitions, pristine document viewing stages, and unobtrusive micro-interactions that elevate architectural renderings, floor plans, and material specifications.

## Colors

The color system is rooted in deep oceanic abyssal tones, providing maximum contrast for architectural blueprints and vibrant coastal project photography.

* **Primary (`#0D5C75`)**: Deep sea cerulean, evoking coastal depth and structural glass facade tints. Used for active navigation anchors, primary interactive frames, and secondary action button states.
* **Secondary (`#D4AF37`)**: Warm brushed gold / refined coastal sand. Reserved for high-value touchpoints: document badges, luxury pricing callouts, active folio indicators, and download affordances.
* **Tertiary (`#007BFF`)**: Vivid cobalt electric blue. Applied selectively for focused digital prompts, prominent "Contact" CTAs, and active network states.
* **Neutral Palette (`#0A1118`)**:
  * Surface Canvas (Base): `#080D13` - Midnight ocean slate.
  * Card Surface: `#0E1722` - Dense structural navy.
  * Elevated Containers & Modals: `#142232` - Translucent oceanic glass layer.
  * Stroke & Hairline Dividers: `rgba(212, 175, 55, 0.15)` and `rgba(255, 255, 255, 0.08)`.
  * Text Hierarchy: Primary text `#F0F4F8` (Off-white ocean mist), Secondary text `#94A3B8` (Coastal quartz), Accent text `#E2C366`.

## Typography

The typography strategy unites structural architectural geometry with editorial readability:

1. **Display & Headings (`Outfit`)**: Geometric, balanced, and confident. Generates commanding project headlines, portfolio chapter titles, and brochure cover accents.
2. **Body & Prose (`Plus Jakarta Sans`)**: Warm, ergonomic humanist grotesque that prevents eye fatigue during architectural plan reading and technical spec exploration.
3. **Labels & Technical Metas (`Space Grotesk`)**: Monospace-leaning technical aesthetic suited for lot numbers, dimension annotations, page counts, scale ratios, and currency values. Always set in slight uppercase tracking for architectural drafting resonance.

## Layout & Spacing

The layout is built around a mobile-first responsive grid system scaled specifically for document sheets and brochure sheet inspection.

* **Mobile (320px - 639px)**: 4 columns, `16px` outer margins, `12px` gutters. Architectural brochure cards render single-column or 2-column compact tiles with vertical sheet aspect ratios (`3:4` or ISO `A4` proportions).
* **Tablet (640px - 1023px)**: 8 columns, `24px` outer margins, `16px` gutters. Folio gallery presents in a balanced 2-column or 3-column layout.
* **Desktop (1024px and above)**: 12 columns, max-width `1440px`, centered with fluid side margins (`32px` minimum). Gallery presents in a calibrated 4-column matrix, mirroring high-density print catalogs.
* **Brochure / Folio Inspection Mode**: Fixed overlay container with a floating architectural canvas. Supports dual-page flip spread on desktop screens (`> 1200px`) and seamless vertical snap-scroll on mobile devices.

## Elevation & Depth

Visual depth is achieved through layered structural glass and oceanic atmospheric lighting rather than flat drop shadows.

* **Level 0 (Floor Canvas)**: Deep slate-navy base `#080D13`.
* **Level 1 (Card Matrix)**: Matte nautical panel `#0E1722` bordered with a low-opacity coastal sand hairline: `1px solid rgba(212, 175, 55, 0.12)`.
* **Level 2 (Hover & Active States)**: Subtle sand-tinted rim highlight `box-shadow: 0 12px 32px -8px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(212, 175, 55, 0.35)`.
* **Level 3 (Brochure Inspection Modal & Overlays)**: Translucent oceanic glass utilizing backdrop filter `backdrop-filter: blur(20px) saturate(160%)` over `rgba(8, 13, 19, 0.85)` with ambient cyan edge diffusion `box-shadow: 0 24px 60px -12px rgba(0, 0, 0, 0.85), inset 0 1px 1px rgba(255, 255, 255, 0.1)`.

## Shapes

To mirror contemporary coastal architecture—characterized by sharp cantilevers, linear glass facades, and tailored concrete edges—the design system utilizes tight, refined corners (`roundedness: 1`).

* Standard card containers: `0.5rem` (`8px`) outer radius, keeping sheets feeling like physical bound folios.
* Interior sheet previews: `0.25rem` (`4px`) inner radius to simulate real archival paper edges.
* Buttons & Controls: Subtle `0.375rem` (`6px`) rounding for high architectural precision, avoiding overly bubbly or informal forms.
* Badges & Format Tags: Crisp chamfered or tight-radius pills (`4px`) for technical drafting legibility.

## Components

### 1. Document & Page Cards
* **Visual Presentation**: Framed in architectural slate blue `#0E1722` with a `1px` subtle border. Cards feature a simulated white or natural bond paper preview insert (`3:4` aspect ratio) showing architectural rendering, master plan, or elevation.
* **Hover Interaction**: Card subtly elevates (`-4px` Y-axis) with a soft golden rim glow (`rgba(212, 175, 55, 0.3)`).
* **Footer Area**: Clean architectural typographic label (`label-md`) displaying sheet index (e.g., `PÁGINA 01`, `CASA GROUND FLOOR`) alongside small utility triggers for quick preview or direct download.

### 2. PDF Download & Primary Actions
* **Primary "Contact" / "Matriz" Button**: Deep ocean blue `#007BFF` or `#0D5C75` gradient fill, crisp text in `Space Grotesk`, paired with architectural iconography.
* **Secondary PDF Action**: Ghost button with gold accent border `1px solid #D4AF37`, rendering micro gold icons (document arrow down). Hover state fills with `rgba(212, 175, 55, 0.1)`.

### 3. Inspection Modal & Page Flip / Folio Reader
* **Modal Framework**: Full viewport takeover with dimmed midnight glass backdrop.
* **Toolbar**: Top floating navigation housing zoom controllers (`+ / - / 100%`), dual-page spread toggle, print affordance, direct PDF download trigger, and close button.
* **Reading Mechanics**: Desktop displays dual-facing architectural brochure sheets with subtle 3D paper curl transition on navigation click. Mobile defaults to smooth vertical scroll with pinch-to-zoom fidelity.

### 4. Filter Chips & Taxonomy Switcher
* Capsule indicators for project phases, building product types (e.g., `Ventanas Térmicas`, `Estructuras`, `Lotes`, `Villas`).
* Default state: `rgba(255, 255, 255, 0.05)` fill with off-white text. Active state: `#0D5C75` ocean fill with golden sand text and indicator dot.

### 5. Input Fields & Lead Capture
* Architectural dark input field `#0A1118` with recessed depth, gold focus outline (`1.5px solid #D4AF37`), and crisp floating labels in `Space Grotesk`.