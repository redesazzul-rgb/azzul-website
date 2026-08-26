---
name: Azure Horizon
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#444651'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#747782'
  outline-variant: '#c4c6d2'
  surface-tint: '#3d5ca2'
  primary: '#001a48'
  on-primary: '#ffffff'
  primary-container: '#002d72'
  on-primary-container: '#7a97e2'
  inverse-primary: '#b1c5ff'
  secondary: '#00677f'
  on-secondary: '#ffffff'
  secondary-container: '#00ccf9'
  on-secondary-container: '#005266'
  tertiary: '#0a2022'
  on-tertiary: '#ffffff'
  tertiary-container: '#203537'
  on-tertiary-container: '#889ea0'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b1c5ff'
  on-primary-fixed: '#001946'
  on-primary-fixed-variant: '#224489'
  secondary-fixed: '#b7eaff'
  secondary-fixed-dim: '#4cd6ff'
  on-secondary-fixed: '#001f28'
  on-secondary-fixed-variant: '#004e60'
  tertiary-fixed: '#d0e7ea'
  tertiary-fixed-dim: '#b4cbce'
  on-tertiary-fixed: '#091f21'
  on-tertiary-fixed-variant: '#364a4d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  price-display:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 32px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  section-gap: 64px
  container-max: 1280px
---

## Brand & Style

This design system is built for a premium vacation rental marketplace that balances high-end aspiration with functional reliability. The brand personality is serene, professional, and welcoming, aiming to evoke a sense of "planned tranquility" for the user.

The aesthetic leans into **Corporate Modern with a touch of Glassmorphism**. It utilizes a clean, systematic structure inspired by high-end real estate and travel platforms. Key stylistic pillars include:
- **Luminous Surfaces:** Using soft gradients and white-on-light-gray layering to create a sense of airy, coastal space.
- **Precision:** Tight alignment and clear information hierarchy to establish trust.
- **Sophisticated Utility:** Functional elements (like booking widgets) are treated with subtle depth to make them feel tangible yet integrated.

## Colors

The palette is anchored in deep ocean blues and crisp architectural whites, accented by vibrant teals to draw the eye to primary actions.

- **Primary (Deep Blue):** Used for navigation, headings, and high-level branding to provide authority and contrast.
- **Secondary (Teal/Cyan):** Reserved for primary Call-to-Action (CTA) elements and highlights. It represents the "water" and "vibrancy" of a vacation.
- **Tertiary (Soft Sky):** Used for background washes, secondary highlights, or subtle informational banners.
- **Neutral (Slate/Cool Gray):** A range of cool-toned grays used for backgrounds (#F8FAFC), borders (#E2E8F0), and secondary text (#64748B).

**Gradients:**
- **Action Gradient:** Linear 135deg from `secondary` to a slightly deeper teal.
- **Surface Gradient:** Very subtle 180deg from White to `neutral`.

## Typography

The typography system uses a pairing of high-precision sans-serifs. **Hanken Grotesk** provides a sharp, professional character for headlines, while **Plus Jakarta Sans** offers a softer, more legible experience for long-form body text and interface labels.

- **Headlines:** Use a tighter letter-spacing on larger sizes to maintain a premium "editorial" feel.
- **Price Points:** Always rendered in the Primary or Secondary color with bold weights to ensure immediate visibility.
- **Scale:** On mobile devices, the `headline-xl` should scale down to `headline-lg` sizes to prevent overflow and maintain readability.

## Layout & Spacing

The layout follows a **12-column fluid grid** for desktop and a **4-column grid** for mobile. The design philosophy emphasizes "breathable" content regions.

- **Rhythm:** Use an 8px-based spacing system for component internals (padding, gaps between icons and text) and a larger 24px-based system for layout modules.
- **The Booking Widget:** This should remain sticky on desktop scrolls, positioned to the right of the main content (spanning 4 columns), while the description and amenities span 8 columns.
- **Mobile Reflow:** On mobile, the booking widget moves to a fixed bottom bar or stays at the top of the scroll to ensure the primary conversion point is never lost.

## Elevation & Depth

Visual hierarchy is managed through **Tonal Layers** supplemented by **Ambient Shadows**.

1.  **Level 0 (Base):** Neutral background color (`#F8FAFC`).
2.  **Level 1 (Cards/Content):** Pure white surfaces with a very soft, diffused shadow (0px 4px 20px rgba(0, 0, 0, 0.04)) and a 1px border (`#E2E8F0`).
3.  **Level 2 (Active/Floating):** Used for tooltips or the sticky booking widget. Higher shadow intensity (0px 10px 30px rgba(0, 0, 0, 0.08)).
4.  **Glassmorphism:** Navigation bars and specific informational callouts (like the "Construction" banner) use a background blur (12px) and 80% opacity to maintain a sense of depth and context.

## Shapes

The design system utilizes **Rounded** shapes to feel modern and accessible.

- **Standard Elements:** Buttons, input fields, and small cards use a 0.5rem (8px) radius.
- **Large Containers:** Hero images and main layout sections use 1rem (16px) to 1.5rem (24px) for a softer, more premium look.
- **Inputs:** Text fields should have a distinct 8px radius to match buttons, creating a cohesive "interactable" language.

## Components

### Buttons
- **Primary:** Solid Teal gradient background, white text, 8px radius. Subtle lift on hover.
- **Secondary:** Transparent background, Teal border (1px), Teal text.
- **Ghost:** Primary Blue text, no background or border, used for utility links.

### Cards & Amenities
- **Amenity Chips:** White background, 1px light gray border, left-aligned icon in Primary Blue.
- **Property Cards:** Large-scale imagery with a 16px top-radius. Pricing and titles should have generous padding (20px).

### Input Fields
- High-contrast labels (Primary Blue).
- 1px border (`#E2E8F0`), turning Primary Blue on focus.
- Placeholder text in a muted slate gray.

### Feature Banner
- Uses the `tertiary_color` (soft blue) as a background with a thin teal left-border. This is used for highlighting unique selling points like "3D Tours" or "Special Construction."

### Image Gallery
- Large primary image with a 16px radius.
- Secondary thumbnails below with 8px radius and a prominent teal "active" border for the currently viewed image.