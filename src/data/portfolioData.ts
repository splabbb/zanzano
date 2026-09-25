/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PortfolioConfig } from '../types/portfolio';

export const initialPortfolioConfig: PortfolioConfig = {
  site: {
    portfolioName: '[PORTFOLIO / STUDIO NAME]',
    tagline: '[Disciplines: Visual Systems, Editorial Design, Spatial Articulation]',
  },
  hero: {
    heading: 'Selected work.',
    placeholderIntro:
      '[Editable Introduction Placeholder: This portfolio layout demonstrates a tactile, saturated poster-derived design system. Replace this text with your authentic introduction, studio philosophy, or focus area. No awards, client claims, or artificial credentials are included.]',
    exploreCtaLabel: 'Explore work',
    aboutLinkLabel: 'About this portfolio',
  },
  projects: [
    {
      id: 'demo-01',
      title: 'Chromatypic Poster Form',
      category: 'Identity',
      year: '2025',
      demoLabel: 'Demo project',
      summary:
        'Demo project: This entry is a layout demonstration created to show asymmetric editorial composition and color balance. It does not represent a commercial client or real commission.',
      role: '[Role Placeholder: Art Direction, Editorial Grid Prototyping]',
      approach:
        '[Approach Placeholder: Investigating diagonal typography planes, high-contrast yellow-and-ink hierarchy, and restrained cyan accents without secondary decoration.]',
      visualPanels: [
        {
          id: 'p1-1',
          title: 'Primary Form Articulation',
          caption: 'Editorial poster specimen combining diagonal typographic rotation and saturated field blocking.',
          type: 'poster',
        },
        {
          id: 'p1-2',
          title: 'Color & Ratio Calibration',
          caption: 'Approved palette ratio study: 45% blue foundation, 25% yellow foreground, 12% red accents.',
          type: 'matrix',
        },
      ],
    },
    {
      id: 'demo-02',
      title: 'Kinetic Packaging Matrix',
      category: 'Experiments',
      year: '2025',
      demoLabel: 'Demo project',
      summary:
        'Demo project: A structural packaging layout demonstration exploring flat folding creases, bold warning typography, and cylindrical container geometry. Not a commissioned product.',
      role: '[Role Placeholder: Structural Package Exploration & Typography]',
      approach:
        '[Approach Placeholder: Utilizing bold commercial packaging lettering, die-cut silhouette shapes, and electric-green grounding accents.]',
      visualPanels: [
        {
          id: 'p2-1',
          title: 'Dieline & Cylinder Study',
          caption: 'Packaging silhouette exploration featuring electric-green volume and red warning cylinder.',
          type: 'system',
        },
        {
          id: 'p2-2',
          title: 'Typographic Packaging Detail',
          caption: 'Commercial uppercase lettering, hazard stamps, and tactile material callouts.',
          type: 'tactile',
        },
      ],
    },
    {
      id: 'demo-03',
      title: 'Signal Grid Interface',
      category: 'Digital',
      year: '2024',
      demoLabel: 'Demo project',
      summary:
        'Demo project: An experimental screen interface layout demonstrating unboxed tabular readouts, hard ink borders, and solid paper reading surfaces.',
      role: '[Role Placeholder: Interface Design & Information Architecture]',
      approach:
        '[Approach Placeholder: Rejecting soft glassmorphism and generic cards in favor of tactile editorial dividers and high-contrast ink boundaries.]',
      visualPanels: [
        {
          id: 'p3-1',
          title: 'Digital Surface Topology',
          caption: 'Screen architecture pairing solid ink headers with yellow control indicators.',
          type: 'matrix',
        },
        {
          id: 'p3-2',
          title: 'Micro-Typography & Readouts',
          caption: 'Localized cyan lettering accents and unboxed metadata aligned to strict baseline grids.',
          type: 'monolith',
        },
      ],
    },
    {
      id: 'demo-04',
      title: 'Tactile Modular System',
      category: 'Identity',
      year: '2024',
      demoLabel: 'Demo project',
      summary:
        'Demo project: Visual system demonstration testing the juxtaposition of everyday geometrical objects: dice facets, circular beadwork, and hard-edge emblems.',
      role: '[Role Placeholder: Visual Identity & Specimen Design]',
      approach:
        '[Approach Placeholder: Balancing diagonal offset angles (-10 to +10 degrees) while maintaining completely upright and accessible typography.]',
      visualPanels: [
        {
          id: 'p4-1',
          title: 'Modular Symbol Array',
          caption: 'Shield insignia, dice facet geometries, and circular beadwork perimeter studies.',
          type: 'tactile',
        },
        {
          id: 'p4-2',
          title: 'Chromatic Stress Test',
          caption: 'Testing contrast integrity across yellow, red, and ink background planes.',
          type: 'poster',
        },
      ],
    },
    {
      id: 'demo-05',
      title: 'Spectral Vessel Prototype',
      category: 'Experiments',
      year: '2024',
      demoLabel: 'Demo project',
      summary:
        'Demo project: Volumetric 2D vector study examining the visual grounding effect of dark pot and electric-green bottle forms against blue space.',
      role: '[Role Placeholder: Form & Material Simulation]',
      approach:
        '[Approach Placeholder: Layering opaque vector silhouettes with hard ink offset shadows to create tactile physical presence without photographic rasterization.]',
      visualPanels: [
        {
          id: 'p5-1',
          title: 'Vessel Silhouette Calibration',
          caption: 'Grounding dark pot geometry with ochre rim and electric-green bottle counterweight.',
          type: 'vessel',
        },
        {
          id: 'p5-2',
          title: 'Material Contrast Mapping',
          caption: 'Glossy plastic highlight simulations, crumpled paper angles, and metallic sheen accents.',
          type: 'system',
        },
      ],
    },
    {
      id: 'demo-06',
      title: 'Monolithic Typeflow',
      category: 'Digital',
      year: '2023',
      demoLabel: 'Demo project',
      summary:
        'Demo project: Typographic publication demonstration testing display-scale uppercase treatments, disciplined 65-character line measures, and solid paper panels.',
      role: '[Role Placeholder: Editorial Typography & Grid Layout]',
      approach:
        '[Approach Placeholder: Deploying the dual font stack with strict display heading tracking and clean interface text clarity.]',
      visualPanels: [
        {
          id: 'p6-1',
          title: 'Monolithic Type Grid',
          caption: 'Dense uppercase display lockups paired with restrained starburst motifs.',
          type: 'monolith',
        },
        {
          id: 'p6-2',
          title: 'Editorial Column Hierarchy',
          caption: 'Two-column editorial reading layout adhering to strict WCAG AA contrast rules.',
          type: 'poster',
        },
      ],
    },
  ],
  about: {
    heading: 'About the practice',
    bioParagraphs: [
      '[Editable Biography Placeholder: Paragraph 1. Replace this section with your authentic background, studio philosophy, and design methodology. This portfolio template intentionally contains no fabricated client logos, ghost metrics, or unverified achievements.]',
      '[Editable Biography Placeholder: Paragraph 2. Describe your specific expertise across visual identity, physical packaging, digital systems, or material prototyping. All layout structures here are designed to keep essential prose on solid paper surfaces for optimal reading.]',
    ],
    practiceAreasHeading: 'Practice areas',
    practiceAreas: [
      '[Practice Area 01: Visual Identity & Brand Architecture]',
      '[Practice Area 02: Editorial, Book & Poster Typography]',
      '[Practice Area 03: Packaging Systems & Material Prototyping]',
      '[Practice Area 04: Digital Interfaces & Accessible Systems]',
    ],
    note: '[Notice: Portfolio owner credentials and client work are left as neutral placeholders in accordance with project constraints.]',
  },
  contact: {
    heading: 'Start a conversation.',
    // Set to null or a string. When set to null, renders "Contact details coming soon".
    // When populated, renders the direct action button and clipboard copy with fallback.
    email: 'studio.placeholder@example.com',
    statusNotice: 'Contact details coming soon',
    socialLinks: [
      // Only render real URLs when configured
      { platform: 'Repository / Code', url: 'https://github.com' },
    ],
  },
};
