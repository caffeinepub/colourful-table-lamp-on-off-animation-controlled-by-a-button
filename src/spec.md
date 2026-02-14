# Specification

## Summary
**Goal:** Build a single-page UI that shows a colourful table lamp illustration with a button to smoothly toggle the lamp between ON and OFF states.

**Planned changes:**
- Create a single-page layout with a colourful table lamp illustration rendered locally (no backend calls).
- Add one control button that toggles lamp state, with English labels reflecting ON/OFF.
- Implement smooth ON/OFF animations (glow/brightening and fade-out) that remain stable under rapid toggling.
- Apply a coherent visual theme (layout/typography/colours) that complements the colourful lamp and avoids blue/purple as the primary palette.
- Add basic accessibility: keyboard activation (Enter/Space) and state indication via ARIA (e.g., `aria-pressed`).

**User-visible outcome:** Users see a colourful lamp on the page and can press a single button (mouse/touch/keyboard) to switch the lamp on and off with a smooth light-up/fade animation and clear English state labels.
