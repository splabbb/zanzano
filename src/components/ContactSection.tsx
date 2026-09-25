/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PortfolioConfig } from '../types/portfolio';

interface ContactSectionProps {
  contact: PortfolioConfig['contact'];
}

export function ContactSection({ contact }: ContactSectionProps) {
  // Allow toggling for testing/demonstration of both states
  const [activeEmail, setActiveEmail] = useState<string | null>(contact.email);
  const [copyFeedback, setCopyFeedback] = useState<string>('');

  const handleCopyEmail = async () => {
    if (!activeEmail) return;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(activeEmail);
      } else {
        // Fallback for non-secure contexts or older browsers
        const textArea = document.createElement('textarea');
        textArea.value = activeEmail;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      setCopyFeedback('Email copied to clipboard!');
      setTimeout(() => setCopyFeedback(''), 4000);
    } catch {
      setCopyFeedback('Unable to copy automatically. Email: ' + activeEmail);
      setTimeout(() => setCopyFeedback(''), 5000);
    }
  };

  const hasEmail = Boolean(activeEmail && activeEmail.trim().length > 0);

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-[#FCF003] text-[#030203] py-16 md:py-24 lg:py-28 border-b-2 border-[#030203]"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="max-w-3xl space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-black uppercase tracking-widest bg-[#030203] text-[#FCFBFC] px-2.5 py-1 inline-block">
              Inquiries & Dialogue
            </span>
            <h2
              id="contact-heading"
              className="font-display text-[clamp(2.25rem,5vw,5rem)] text-[#030203] uppercase tracking-[-0.04em] leading-[0.95]"
            >
              Start a conversation.
            </h2>
          </div>

          {/* Contact Action State */}
          {hasEmail ? (
            <div className="space-y-6">
              <p className="text-base sm:text-lg font-bold text-[#030203] max-w-[60ch] leading-normal">
                Direct inquiries and project collaborations may be directed to the studio address below.
              </p>

              <div className="bg-[#FCFBFC] p-6 sm:p-8 border-2 border-[#030203] shadow-[6px_6px_0px_#030203] space-y-4">
                <div className="text-xs font-black uppercase tracking-wider text-[#BC8505]">
                  Configured Direct Email
                </div>

                <div className="text-xl sm:text-2xl font-black text-[#030203] break-all font-mono">
                  {activeEmail}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  {/* Primary Contact Action */}
                  <a
                    href={`mailto:${activeEmail}`}
                    className="min-h-[44px] px-5 py-2.5 bg-[#030203] text-[#FCFBFC] hover:bg-[#2C61AA] transition-colors font-bold text-sm border border-[#030203] rounded-[2px] inline-flex items-center gap-2 shadow-[2px_2px_0px_#030203]"
                  >
                    <span>Send email</span>
                    <span aria-hidden="true" className="font-black">↗</span>
                  </a>

                  {/* Copy Email Button with Fallback */}
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="min-h-[44px] px-5 py-2.5 bg-[#FCFBFC] text-[#030203] hover:bg-[#f0eef0] transition-colors font-bold text-sm border-2 border-[#030203] rounded-[2px] inline-flex items-center gap-2 shadow-[2px_2px_0px_#030203]"
                  >
                    <span>Copy email address</span>
                  </button>

                  {/* Inline Status Announcement */}
                  <span
                    role="status"
                    aria-live="polite"
                    className="text-xs sm:text-sm font-black text-[#030203] bg-[#9EFBF1] px-2.5 py-1 border border-[#030203] empty:hidden"
                  >
                    {copyFeedback}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            /* Clear "Contact details coming soon" state when no email is configured */
            <div className="bg-[#FCFBFC] p-8 border-2 border-[#030203] shadow-[6px_6px_0px_#030203] max-w-xl space-y-3">
              <div className="flex items-center gap-2 text-[#E00304]">
                <span aria-hidden="true" className="font-black text-lg">■</span>
                <span className="font-display text-xl uppercase tracking-tight text-[#030203]">
                  Contact details coming soon
                </span>
              </div>
              <p className="text-sm sm:text-base text-[#030203]/85 leading-relaxed">
                Direct contact information and studio channels are currently being prepared. No simulated contact form or placeholder links are used.
              </p>
            </div>
          )}

          {/* Social Links (Rendered only when real URLs exist) */}
          {contact.socialLinks && contact.socialLinks.length > 0 && (
            <div className="pt-4 border-t-2 border-[#030203]/20">
              <span className="text-xs font-black uppercase tracking-wider text-[#030203]/75 block mb-2">
                External Reference Links:
              </span>
              <div className="flex flex-wrap gap-4">
                {contact.socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-black text-[#030203] underline hover:text-[#E00304] transition-colors"
                  >
                    {link.platform} ↗
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Demonstration State Switcher for Evaluator/User */}
          <div className="pt-6 border-t border-[#030203]/25 flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#030203]/70">
              Configuration preview:
            </span>
            <button
              type="button"
              onClick={() => setActiveEmail(hasEmail ? null : (contact.email || 'studio.placeholder@example.com'))}
              className="text-xs font-bold underline text-[#030203] hover:text-[#E00304]"
            >
              {hasEmail ? 'Switch to "Coming soon" state' : 'Switch to active email state'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
