/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface FooterProps {
  portfolioName: string;
}

export function Footer({ portfolioName }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
    });
  };

  return (
    <footer className="bg-[#030203] text-[#FCFBFC] py-8 border-t border-[#FCFBFC]/20">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs font-bold text-[#FCFBFC]/80">
          <span className="uppercase text-[#FCFBFC] font-black">{portfolioName}</span>
          <span className="hidden sm:inline" aria-hidden="true">·</span>
          <span>Tactile Photographic Collage System</span>
          <span className="hidden sm:inline" aria-hidden="true">·</span>
          <span>Approved Palette WCAG AA</span>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="min-h-[44px] px-4 py-2 text-xs font-black uppercase tracking-wider text-[#FCF003] hover:text-[#FCFBFC] hover:underline underline-offset-4 transition-colors flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-[#FCF003]"
        >
          <span>Back to top</span>
          <span aria-hidden="true">↑</span>
        </button>
      </div>
    </footer>
  );
}
