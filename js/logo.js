// Shared logo SVG: wave-star mark + stacked name
// Used in nav across all inner pages
// Clicking leads to index.html

const LOGO_SVG = `
<svg width="120" height="40" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" aria-label="Maryam Mokhberi home">
  <!-- Mark: intersecting wave lines evoking sea + stars -->
  <g stroke="#0e2040" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.85">
    <!-- wave arc left -->
    <path d="M4,28 C8,18 14,14 18,20"/>
    <!-- main diagonal -->
    <line x1="6" y1="34" x2="28" y2="6"/>
    <!-- second diagonal crossing -->
    <line x1="14" y1="36" x2="30" y2="10"/>
    <!-- short bottom wave -->
    <path d="M8,32 C13,26 18,30 22,24"/>
    <!-- star dot -->
    <circle cx="26" cy="14" r="1.2" fill="#0e2040" stroke="none"/>
    <circle cx="20" cy="8"  r="0.8" fill="#0e2040" stroke="none" opacity="0.6"/>
  </g>
  <!-- Name: stacked, Cormorant Garamond feel via font-family -->
  <text x="38" y="16" font-family="'Cormorant Garamond',Georgia,serif" font-size="7.5" font-weight="400" letter-spacing="2.5" fill="#1C1C1E" text-anchor="start" dominant-baseline="middle">MARYAM</text>
  <text x="38" y="29" font-family="'Cormorant Garamond',Georgia,serif" font-size="7.5" font-weight="400" letter-spacing="2.5" fill="#1C1C1E" text-anchor="start" dominant-baseline="middle">MOKHBERI</text>
</svg>`;

// For landing page (dark bg compatible, lighter version)
const LOGO_SVG_LIGHT = `
<svg width="120" height="40" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" aria-label="Maryam Mokhberi home">
  <g stroke="rgba(255,255,255,0.55)" stroke-width="1.4" stroke-linecap="round" fill="none">
    <path d="M4,28 C8,18 14,14 18,20"/>
    <line x1="6" y1="34" x2="28" y2="6"/>
    <line x1="14" y1="36" x2="30" y2="10"/>
    <path d="M8,32 C13,26 18,30 22,24"/>
    <circle cx="26" cy="14" r="1.2" fill="rgba(255,255,255,0.55)" stroke="none"/>
    <circle cx="20" cy="8"  r="0.8" fill="rgba(255,255,255,0.4)"  stroke="none"/>
  </g>
  <text x="38" y="16" font-family="'Cormorant Garamond',Georgia,serif" font-size="7.5" font-weight="400" letter-spacing="2.5" fill="rgba(255,255,255,0.6)" text-anchor="start" dominant-baseline="middle">MARYAM</text>
  <text x="38" y="29" font-family="'Cormorant Garamond',Georgia,serif" font-size="7.5" font-weight="400" letter-spacing="2.5" fill="rgba(255,255,255,0.6)" text-anchor="start" dominant-baseline="middle">MOKHBERI</text>
</svg>`;
