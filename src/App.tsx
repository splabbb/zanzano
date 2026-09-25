/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { initialPortfolioConfig } from './data/portfolioData';
import { SkipLink } from './components/SkipLink';
import { Header } from './components/Header';
import { HeroCollage } from './components/HeroCollage';
import { WorkSection } from './components/WorkSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [config] = useState(initialPortfolioConfig);

  return (
    <div id="top" className="min-h-screen bg-[#2C61AA] text-[#FCFBFC] font-body selection:bg-[#FCF003] selection:text-[#030203]">
      {/* Keyboard Accessible Skip Link */}
      <SkipLink />

      {/* Sticky Header */}
      <Header portfolioName={config.site.portfolioName} />

      <main id="main-content">
        {/* Hero Section */}
        <section
          aria-labelledby="hero-title"
          className="bg-blue-grain py-16 md:py-24 lg:py-32 overflow-hidden border-b border-[#FCFBFC]/25"
        >
          <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
            {/* Asymmetric 12-Column Desktop Grid: 5 cols text, 7 cols artwork */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Text & CTAs (5 Columns on Desktop) */}
              <div className="lg:col-span-5 space-y-8 z-10">
                <div className="space-y-4">
                  <div className="inline-block bg-[#030203] text-[#FCFBFC] px-3 py-1 text-xs font-black uppercase tracking-widest border border-[#FCFBFC]">
                    Demo Portfolio Layout
                  </div>

                  <h1
                    id="hero-title"
                    className="font-display text-[clamp(3rem,8vw,8rem)] text-[#FCFBFC] uppercase leading-[0.95] tracking-[-0.04em]"
                  >
                    {config.hero.heading}
                  </h1>
                </div>

                {/* Editable Introduction clearly marked as a placeholder */}
                <p className="text-base sm:text-lg leading-relaxed text-[#FCFBFC] max-w-[60ch]">
                  {config.hero.placeholderIntro}
                </p>

                {/* Action Controls */}
                <div className="flex flex-wrap items-center gap-5 pt-2">
                  <a
                    href="#work"
                    className="btn-primary"
                  >
                    <span>{config.hero.exploreCtaLabel}</span>
                    <span aria-hidden="true" className="ml-2 font-black">↓</span>
                  </a>

                  <a
                    href="#about"
                    className="text-sm font-bold text-[#FCFBFC] underline underline-offset-4 hover:text-[#FCF003] transition-colors py-2"
                  >
                    {config.hero.aboutLinkLabel}
                  </a>
                </div>
              </div>

              {/* Right Column: Dense Original Collage of Local Demo Artwork (7 Columns on Desktop) */}
              <div className="lg:col-span-7 flex justify-center lg:justify-end">
                <HeroCollage />
              </div>
            </div>
          </div>
        </section>

        {/* Selected Work Section */}
        <WorkSection projects={config.projects} />

        {/* About Section */}
        <AboutSection about={config.about} />

        {/* Contact Section */}
        <ContactSection contact={config.contact} />
      </main>

      {/* Footer */}
      <Footer portfolioName={config.site.portfolioName} />
    </div>
  );
}
