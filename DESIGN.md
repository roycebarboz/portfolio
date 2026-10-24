---
name: Royce Portfolio (Dyno Sheet)
description: One dyno printout. Every project is a baseline run against a tuned run, with the measured gain marked.
colors:
  sheet: "#f8f9f7"
  ink: "#0c0c0c"
  ink-soft: "#484a45"
  hair: "#c9cbc5"
  baseline-red: "#d01c28"
  tuned-blue: "#1347ff"
  highlighter: "#d5f23a"
typography:
  display-name:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(4.5rem, 3rem + 6vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.88
    letterSpacing: "-0.02em"
    fontVariation: "wdth 62"
  run-name:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.8rem + 3vw, 4rem)"
    fontWeight: 900
    lineHeight: 0.95
    fontVariation: "wdth 62"
  gain-numeral:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "4.5rem"
    fontWeight: 900
    lineHeight: 1
    fontVariation: "wdth 62"
  section-title:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.2rem + 2.4vw, 3rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.01em"
    fontVariation: "wdth 75"
  claim:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.1rem + 1.2vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.2
    fontVariation: "wdth 85"
  body:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  data-label:
    fontFamily: "B612 Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "0.05em"
  button:
    fontFamily: "B612 Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.8125rem"
    fontWeight: 700
    letterSpacing: "0.04em"
  brand:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 800
    fontVariation: "wdth 75"
  figure:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 800
    fontVariation: "wdth 85"
  micro-label:
    fontFamily: "B612 Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    letterSpacing: "0.06em"
  plot-label:
    fontFamily: "B612 Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "11px"
    fontWeight: 700
    letterSpacing: "0.08em"
  plot-name:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
  plot-value:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 800
    fontVariation: "wdth 85"
rounded:
  none: "0"
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  row-pad: "14px"
  section-gap: "clamp(48px, 8vh, 88px)"
  column-gap: "clamp(24px, 4vw, 56px)"
components:
  button-solid:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "44px"
  button-solid-hover:
    backgroundColor: "{colors.highlighter}"
    textColor: "{colors.ink}"
  button-line:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "44px"
  button-line-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
  plot-head:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
    typography: "{typography.data-label}"
    padding: "8px 12px"
  gain-mark:
    backgroundColor: "{colors.highlighter}"
    textColor: "{colors.ink}"
    padding: "2px 6px"
---

# Design System: Royce Portfolio (Dyno Sheet)

## Overview

**Creative North Star: "The Dyno Sheet"**

The page is a single thermal printout from a dyno run. Each project is a baseline run set against a tuned run, with the measured gain read off at the end. Everything is ruled: black rules divide sections, hairline graph grid sits behind plots, and mono captions say what was measured and on what set. The sheet is an off-white paper tone, the ink is near-black, and exactly three inks plus a highlighter carry meaning.

Density is high and flat. Heavy condensed grotesque names and numerals sit against small mono run-data. Nothing is rounded, lifted or glowing; structure comes from rules and the two-column 5fr/7fr split (name and notes left, data right) that every section repeats.

The build diverges from the contract in one value only: the sheet is #f8f9f7, not #fafaf8. The build wins.

**Key Characteristics:**
- Three inks plus highlighter; color always means something (baseline, tuned, gain).
- Condensed heavy Archivo for names and numerals, B612 Mono for measurements, dates and CTAs.
- Rules (2-3px black, 1px black, 1px hair) replace cards, borders-with-radius and shadows.
- Every result carries a caption naming the measure and the set.
- Gains are shown at rest, never hidden behind hover.

## Colors

A near-white thermal sheet, black ink, and a strict semantic palette.

### Primary
- **Baseline Red** (#d01c28): before-values only: baseline traces, dots, "before" column figures.
- **Tuned Blue** (#1347ff): after-values only: tuned traces, dots, "after" column figures. Never used for links, chrome or decoration.

### Secondary
- **Gain Highlighter** (#d5f23a): marks a gain (peak numeral block, `.gain` figures wiped in once), plus hover fill on solid buttons and contact rows, text selection, and nav hover underline band. Always sits behind black ink.

### Neutral
- **Thermal Sheet** (#f8f9f7): page and plot background.
- **Dyno Ink** (#0c0c0c): text, rules, button fill, plot header bar, focus ring.
- **Soft Ink** (#484a45): secondary prose, captions, ticks.
- **Graph Hair** (#c9cbc5): plot grid lines only.

### Named Rules
**The Before/After Rule.** Red means baseline, blue means tuned. A color is never spent on anything else; if a value is neither, it is black.
**The Highlighter Rule.** The highlighter marks a gain or an interactive hover fill, nothing ambient. If it is on screen at rest, it is on a measured improvement.

## Typography

**Display Font:** Archivo Variable (wdth axis, self-hosted via @fontsource-variable), fallback Archivo, system-ui
**Body Font:** Archivo Variable at normal width
**Label/Mono Font:** B612 Mono 400/700 (self-hosted), fallback ui-monospace, Menlo

**Character:** A width-axis grotesque squeezed to 62-85% for headlines gives printout-stencil weight; the mono reads as instrument output.

### Hierarchy
- **Display name** (900, clamp 4.5-6rem, 0.88, wdth 62, uppercase): the hero name.
- **Run name** (900, clamp 2.5-4rem, 0.95, wdth 62, uppercase): project and contact titles.
- **Gain numeral** (900, 4.5rem fixed, wdth 62): peak read-out on the plot; never scaled down on mobile.
- **Section title** (800, clamp 1.75-3rem, 1, wdth 75): sits under a 3px black rule.
- **Claim / result** (700-800, 1.5-2rem, wdth 75-85): hero claim, log results.
- **Body** (400, 1.0625rem, 1.55): prose at max 66ch (`--measure`), soft ink for secondary copy.
- **Label** (B612 Mono, 0.6875-0.8125rem, +0.04-0.08em, uppercase for headers and buttons): captions, table heads, dates, nav, CTAs.
- **Brand and figure** (800, 1.25rem, wdth 75 for the header brand, wdth 85 for table figures): the header name, and before, tuned and gain values in the tally table (1.0625rem at 520px and below).
- **Micro label** (B612 Mono, 0.6875rem, +0.06em, uppercase): table column heads and read-out captions.
- **Plot text** (SVG, fixed px because the plot is drawn at measured width): axis ticks and legend 11px mono, measure names 15px Archivo 600, values and gain chips 18px Archivo 800 wdth 85.

### Named Rules
**The Measurement Mono Rule.** Mono is for measurements, dates, captions and CTAs. Names and numerals that celebrate a gain use the heavy grotesque; tabular-nums on every measured value.

## Layout

A 1280px max wrap with a fluid gutter (16-40px). Hero, runs, log and contact all use the same asymmetric two-column grid (5fr / 7fr; contact 4fr / 8fr; skills 7fr / 5fr) with a clamp(24-56px) gap, collapsing to one column at 900px (760px for contact). Sections are stacked and divided by rules, with clamp(48-88px) of bottom space. Rows inside lists (skills, credentials, log) use 14-24px block padding between 1px black rules. A sticky 60px header with 2px bottom rule hides its nav under 720px, a deliberate simplification: the page is five short screens and Download CV stays pinned. Tables are real tables with caption, right-aligned figures.

## Elevation & Depth

Flat. There are no shadows, no blurs and no layered surfaces. Depth is conveyed by rule weight (3px section, 2px frame, 1px row) and by inverting a bar to black (plot header). Hover is a color swap, not lift.

### Named Rules
**The Rule-Not-Shadow Rule.** Separation is a black rule or a hairline. Do not add shadows or tinted panels.

## Shapes

Square everywhere: zero radius on buttons, plot frame, photo and tables. Borders are 2px ink around framed objects (buttons, plot, portrait). Line ends on traces are square. The portrait is grayscale with slight contrast, 4:5, in a 2px ink frame. A 10x2px dash is the list marker for notes.

## Components

### Buttons
- **Shape:** square (0), 44px min height, including the header, 2px ink border.
- **Solid (primary):** ink fill, sheet text, mono 13px bold uppercase; hover flips to highlighter with ink text, 140ms ease-out.
- **Line:** transparent, ink text; hover fills ink.
- **Focus:** 2px ink outline offset 3px, global.

### Plot (signature)
A framed run chart: black header bar with mono title, hairline graph grid, one dumbbell row per measure with a 5px square-capped black trace from a red baseline dot to a blue tuned dot, labelled values (red before, blue after, black gain chip on the highlighter), a peak block with the gain numeral on highlighter, and a mono ruled caption naming the measure. Each trace draws once (900ms, staggered 160ms) and then its end value fades in; reduced motion shows it all at once.

### Tally table and read-out strip
Caption on top, 2px head rule, 1px row rules, before figures red and after figures blue in heavy condensed type, gains on highlighter wiped in once (600ms). The read-out strip is a flexible row of mono labels over 1.5rem condensed values between a 2px and a 1px rule.

### Log and skills rows
Ruled rows: mono dates or labels left, heavy result or ranked skills right. Lead skills row steps up to 1.25rem bold.

### Navigation
Sticky sheet-colored bar: condensed brand left, mono uppercase links, Download CV solid button right. Link hover paints a highlighter band under the lower 38% of the text.

## Do's and Don'ts

### Do:
- **Do** keep red for baseline and blue for tuned values only, and black for everything else.
- **Do** mark each gain with the highlighter and give every result a mono caption naming the measure and the set.
- **Do** use rules (3px, 2px, 1px) for structure and zero radius throughout.
- **Do** use tabular numerals for all measured values and keep touch targets at least 44px.
- **Do** self-host fonts and keep portrait provenance embedded in the image file.

### Don't:
- **Don't** use blue for links, buttons or decoration.
- **Don't** add gradients, glow, shadows or rounded cards, or the dark-slate card-grid developer template.
- **Don't** hide metrics behind hover, or invent a baseline where none was measured (state results as measured only).
- **Don't** scale the gain numeral down on small screens; crop instead.
