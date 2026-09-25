/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import { PortfolioProject } from '../types/portfolio';
import { ModalPanelArtwork } from './ProjectArtworks';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  triggerRef?: React.RefObject<HTMLElement | null>;
}

export function ProjectModal({ project, onClose, triggerRef }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus trap & Escape key handler
  useEffect(() => {
    if (!project) return;

    // Save previous active element for focus restoration if triggerRef not provided
    const previouslyActive = (triggerRef?.current || document.activeElement) as HTMLElement | null;

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button on mount
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      previouslyActive?.focus?.();
    };
  }, [project, onClose, triggerRef]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      aria-describedby="modal-project-summary"
      className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6 lg:p-8 bg-[#030203]/75 backdrop-blur-none overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full h-full md:h-auto md:max-h-[92vh] max-w-4xl bg-[#FCFBFC] text-[#030203] border-0 md:border-2 md:border-[#030203] md:shadow-[8px_8px_0px_#030203] overflow-y-auto flex flex-col"
      >
        {/* Modal Header Bar with Yellow Accent */}
        <div className="sticky top-0 z-20 bg-[#FCF003] border-b-2 border-[#030203] px-5 sm:px-8 py-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-black uppercase tracking-wider bg-[#030203] text-[#FCFBFC] px-2.5 py-1">
              {project.demoLabel}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#030203]">
              {project.category} · {project.year}
            </span>
          </div>

          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close case study dialog"
            className="min-h-[40px] px-3 py-1.5 bg-[#030203] text-[#FCFBFC] hover:bg-[#E00304] transition-colors font-bold text-sm border border-[#030203] flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#030203]"
          >
            <span aria-hidden="true" className="text-base font-black">✕</span>
            <span className="uppercase text-xs tracking-wider">Close</span>
          </button>
        </div>

        {/* Modal Content Surface */}
        <div className="p-6 sm:p-8 lg:p-10 space-y-8 flex-1">
          {/* Title and Meta */}
          <div className="border-b-2 border-[#030203] pb-6">
            <h2
              id="modal-project-title"
              className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-[-0.04em] text-[#030203]"
            >
              {project.title}
            </h2>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm font-bold text-[#030203]/80">
              <span>Category: {project.category}</span>
              <span aria-hidden="true">·</span>
              <span>Year: {project.year}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#E00304]">{project.demoLabel}</span>
            </div>
          </div>

          {/* Overview & Core Disclaimers */}
          <div className="space-y-4 max-w-[65ch]">
            <div>
              <h3 className="text-xs font-black uppercase tracking-wider text-[#BC8505]">
                Project Overview (Demo Specimen)
              </h3>
              <p
                id="modal-project-summary"
                className="mt-1 text-base sm:text-lg leading-relaxed text-[#030203]"
              >
                {project.summary}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-[#030203]/20">
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-[#030203]">
                  Practitioner Role
                </h4>
                <p className="mt-1 text-sm font-medium leading-normal text-[#030203]/85">
                  {project.role}
                </p>
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-[#030203]">
                  Design Approach
                </h4>
                <p className="mt-1 text-sm font-medium leading-normal text-[#030203]/85">
                  {project.approach}
                </p>
              </div>
            </div>
          </div>

          {/* Multiple Visual Panels */}
          <div className="space-y-6 pt-6 border-t-2 border-[#030203]">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl uppercase tracking-tight text-[#030203]">
                Visual Artifacts & Studies
              </h3>
              <span className="text-xs font-bold text-[#030203]/70">
                {project.visualPanels.length} plates included
              </span>
            </div>

            <div className="space-y-8">
              {project.visualPanels.map((panel, idx) => (
                <div key={panel.id} className="space-y-2">
                  <ModalPanelArtwork panel={panel} />
                  <div className="px-1 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
                    <span className="font-black uppercase text-[#030203]">
                      Plate {idx + 1}: {panel.title}
                    </span>
                    <span className="text-[#030203]/75 font-medium">
                      {panel.caption}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Bottom Close Action */}
          <div className="pt-6 border-t-2 border-[#030203] flex justify-end">
            <button
              onClick={onClose}
              className="btn-primary"
            >
              Done reviewing case study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
