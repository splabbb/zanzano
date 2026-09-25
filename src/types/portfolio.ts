/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ProjectCategory = 'Identity' | 'Digital' | 'Experiments';

export type FilterCategory = 'All' | ProjectCategory;

export interface VisualPanel {
  id: string;
  title: string;
  caption: string;
  type: 'poster' | 'matrix' | 'system' | 'vessel' | 'monolith' | 'tactile';
  imageUrl?: string; // Optional path to custom image in /public (e.g. '/my-artifact.jpg')
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  demoLabel: string; // Explicitly "Demo project"
  summary: string;   // Explicitly notes layout demonstration, not real commission
  role: string;      // Clearly labeled placeholder
  approach: string;  // Clearly labeled placeholder
  imageUrl?: string; // Optional path to custom image in /public (e.g. '/project1.jpg')
  visualPanels: VisualPanel[];
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface PortfolioConfig {
  site: {
    portfolioName: string;
    tagline: string;
  };
  hero: {
    heading: string; // "Selected work."
    placeholderIntro: string;
    exploreCtaLabel: string;
    aboutLinkLabel: string;
  };
  projects: PortfolioProject[];
  about: {
    heading: string;
    bioParagraphs: string[];
    practiceAreasHeading: string;
    practiceAreas: string[];
    note: string;
  };
  contact: {
    heading: string;
    // When empty string or null, renders the "Contact details coming soon" state
    email: string | null;
    statusNotice: string;
    socialLinks: SocialLink[];
  };
}
