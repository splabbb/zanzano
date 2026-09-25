/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#FCF003] focus:text-[#030203] focus:font-bold focus:border-2 focus:border-[#030203] focus:shadow-[3px_3px_0px_#030203] focus:rounded-[2px]"
    >
      Skip to main content
    </a>
  );
}
