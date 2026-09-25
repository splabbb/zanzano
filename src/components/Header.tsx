/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface HeaderProps {
  portfolioName: string;
}

export function Header({ portfolioName }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-[#2C61AA] border-b border-[#FCFBFC]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 h-16 md:h-18 flex items-center justify-between gap-4">
        {/* Zone 1: Portfolio Name / Wordmark */}
        <a
          href="#main-content"
          className="text-base md:text-lg font-black tracking-tight text-[#FCFBFC] uppercase hover:text-[#FCF003] transition-colors truncate max-w-[280px] sm:max-w-md"
        >
          {portfolioName}
        </a>

        {/* Zone 2 & 3: Anchor Navigation */}
        <nav
          aria-label="Main Navigation"
          className="flex items-center gap-4 sm:gap-6 md:gap-8 text-sm md:text-base font-bold text-[#FCFBFC] shrink-0"
        >
          <a
            href="#work"
            className="hover:text-[#FCF003] hover:underline underline-offset-4 transition-colors py-1"
          >
            Work
          </a>
          <a
            href="#about"
            className="hover:text-[#FCF003] hover:underline underline-offset-4 transition-colors py-1"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-[#FCF003] hover:underline underline-offset-4 transition-colors py-1"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
