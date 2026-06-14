---
name: Monolith Ultra
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#383939'
  surface-container-lowest: '#0d0e0f'
  surface-container-low: '#1b1c1c'
  surface-container: '#1f2020'
  surface-container-high: '#292a2a'
  surface-container-highest: '#343535'
  on-surface: '#e3e2e2'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e3e2e2'
  inverse-on-surface: '#303031'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#ffffff'
  on-tertiary: '#313030'
  tertiary-container: '#e5e2e1'
  on-tertiary-container: '#656464'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c9c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#121414'
  on-background: '#e3e2e2'
  surface-variant: '#343535'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 96px
    fontWeight: '700'
    lineHeight: 100%
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '600'
    lineHeight: 110%
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 110%
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 120%
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 160%
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 160%
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 100%
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  section-gap: 160px
---

## Brand & Style

This design system is built for high-end digital agencies and individual portfolios that require a sophisticated, authoritative presence. The brand personality is **Elite, Precise, and Avant-Garde**. It avoids the clutter of traditional corporate design in favor of a cinematic, high-contrast aesthetic that feels both futuristic and timeless.

The visual direction combines **Ultra-Minimalism** with **Glassmorphism**. Key characteristics include:
- **Monochromatic Authority:** A strict black and white palette that places focus entirely on typography and imagery.
- **Atmospheric Depth:** The use of 20px background blurs and thin, translucent borders to create a sense of physical layering in a digital space.
- **Glow Accents:** Subtle, high-intensity white glows that act as "light sources" within a dark environment, guiding the eye to primary calls to action.

## Colors

The palette is intentionally restrictive to maintain a premium feel. 

- **Foundation:** The background is anchored in `Deep Black (#050505)`, providing a near-infinite depth that makes white text "pop" without the harshness of pure #000.
- **Surface & Glass:** `Dark Gray (#1A1A1A)` is used for secondary surfaces. Glassmorphic elements utilize a semi-transparent white border (`rgba(255, 255, 255, 0.1)`) to define edges against the dark background.
- **Interaction:** Pure `White (#FFFFFF)` is reserved for primary text, icons, and high-priority buttons. 
- **Glow:** Subtle radial gradients of white at low opacity are used as background "blobs" to create depth behind glass containers.

## Typography

The typography strategy focuses on the tension between the technical, geometric nature of **Space Grotesk** and the invisible utility of **Inter**.

- **Headlines:** Use Space Grotesk for all display and headline levels. Tighten the letter-spacing on larger sizes to create a "locked-in" architectural feel. 
- **Body:** Inter is used for all long-form text and descriptions. Its neutral character ensures readability against high-contrast backgrounds.
- **Metadata:** Small labels and tags should use Space Grotesk in All Caps with increased letter-spacing to evoke a "technical datasheet" or "blueprint" aesthetic.

## Layout & Spacing

This design system utilizes a **12-column fixed grid** for desktop, centered within the viewport. 

- **Vertical Rhythm:** A massive `160px` section gap is used to provide "breathing room," reinforcing the minimalist agency vibe.
- **Density:** Components within cards use a tight 8px grid, while the overall page uses generous white space to signify luxury.
- **Responsive Behavior:** 
  - **Desktop:** 12 columns, 80px side margins.
  - **Tablet:** 8 columns, 40px side margins.
  - **Mobile:** 4 columns, 20px side margins. Large display type scales down significantly to fit the narrower viewport width while maintaining its bold weight.

## Elevation & Depth

Depth is not achieved through traditional shadows, but through **Tonal Stacking** and **Optical Blurs**.

1.  **Level 0 (Base):** Deep Black (#050505).
2.  **Level 1 (Inlay):** Dark Gray (#1A1A1A) surfaces with no borders, used for subtle grouping.
3.  **Level 2 (Glass):** Semi-transparent layers with `backdrop-filter: blur(20px)`. These must have a 1px solid border at 10% white opacity.
4.  **Level 3 (Interactive):** Elements that are hovered or active gain a subtle outer "white glow" (box-shadow: 0 0 15px rgba(255, 255, 255, 0.15)).

Shadows should never be black; they should be expressed as "negative light" or ignored entirely in favor of the glassmorphic border definition.

## Shapes

The shape language is **Refined and Rounded**. While the grid is rigid and brutalist, the elements themselves use a consistent 0.5rem (8px) radius to soften the high-contrast "attack" of the black and white palette.

- **Standard Elements:** 0.5rem (8px) corner radius.
- **Containers/Cards:** 1rem (16px) corner radius.
- **Pills/Tags:** Full-round (pill-shaped) for status indicators and category chips to contrast against the rectangular grid.

## Components

### Buttons
- **Primary:** Pure White background with Deep Black text. Space Grotesk Bold. No border.
- **Secondary (Glass):** Blurred background, 1px white border (10% opacity), White text.
- **Hover State:** Primary buttons should "glow" slightly on hover; Glass buttons should increase their background opacity from 5% to 15%.

### Input Fields
- **Style:** Underlined (bottom-border only) for a minimal look, or fully enclosed Glassmorphic containers for search bars. 
- **Active State:** The bottom border transforms from 10% opacity white to 100% white.

### Chips & Tags
- Small, pill-shaped containers.
- Use the `label-sm` typography style.
- Background: #1A1A1A or transparent with a thin border.

### Cards (Portfolio/Case Study)
- Feature a large image with a slight zoom-on-hover effect.
- Text overlays use the Glassmorphism style (blur + thin border) positioned at the bottom or floating in the center.

### Navigation
- A floating "Glass Dock" at the top or bottom of the screen. 
- Icons should be stroke-based (linear), avoiding filled-in glyphs to maintain the "light" aesthetic.