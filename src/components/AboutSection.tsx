/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PortfolioConfig } from '../types/portfolio';

interface AboutSectionProps {
  about: PortfolioConfig['about'];
}

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-[#FCFBFC] text-[#030203] py-16 md:py-24 lg:py-28 border-y-2 border-[#030203]"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Editable Biography */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block bg-[#030203] text-[#FCFBFC] px-3 py-1 text-xs font-black uppercase tracking-widest">
              Editorial Statement
            </div>

            <h2
              id="about-heading"
              className="font-display text-[clamp(2rem,4vw,3.75rem)] text-[#030203] uppercase tracking-[-0.04em] leading-[0.95]"
            >
              {about.heading}
            </h2>

            <div className="space-y-5 text-base md:text-lg leading-relaxed max-w-[65ch] text-[#030203]">
              {about.bioParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-[#030203]/20">
              <p className="text-xs font-bold text-[#BC8505] tracking-wide">
                {about.note}
              </p>
            </div>
          </div>

          {/* Right Column: Practice Areas & Restrained Yellow/Red Graphic Continuity Detail */}
          <div className="lg:col-span-5 bg-[#FCFBFC] p-6 sm:p-8 border-2 border-[#030203] shadow-[6px_6px_0px_#030203] space-y-6">
            <div className="flex items-center justify-between pb-4 border-b-2 border-[#030203]">
              <h3 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-[#030203]">
                {about.practiceAreasHeading}
              </h3>

              {/* Small Yellow/Red Graphic Detail for Continuity (Restrained) */}
              <div
                aria-hidden="true"
                className="w-10 h-10 bg-[#FCF003] border-2 border-[#030203] flex items-center justify-center shadow-[2px_2px_0px_#030203]"
              >
                <div className="w-4 h-4 bg-[#E00304] border border-[#030203] rotate-45" />
              </div>
            </div>

            <ul className="space-y-3.5" role="list">
              {about.practiceAreas.map((area, idx) => (
                <li
                  key={idx}
                  className="flex items-baseline gap-3 text-sm md:text-base font-bold text-[#030203]"
                >
                  <span
                    aria-hidden="true"
                    className="font-black text-xs text-[#E00304]"
                  >
                    0{idx + 1}.
                  </span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-[#030203]/15">
              <span className="text-xs font-bold uppercase tracking-wider text-[#030203]/70">
                Core Disciplines · Clear Boundaries
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
