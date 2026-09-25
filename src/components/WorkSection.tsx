/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef } from 'react';
import { FilterCategory, PortfolioProject } from '../types/portfolio';
import { ProjectArtwork } from './ProjectArtworks';
import { ProjectModal } from './ProjectModal';

interface WorkSectionProps {
  projects: PortfolioProject[];
}

const CATEGORIES: FilterCategory[] = ['All', 'Identity', 'Digital', 'Experiments'];

export function WorkSection({ projects }: WorkSectionProps) {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('All');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);
  const triggerRefs = useRef<{ [id: string]: HTMLButtonElement | null }>({});

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const getColSpan = (index: number) => {
    const pairIndex = Math.floor(index / 2);
    const isFirstInPair = index % 2 === 0;
    if (pairIndex % 2 === 0) {
      return isFirstInPair ? 'lg:col-span-7' : 'lg:col-span-5';
    } else {
      return isFirstInPair ? 'lg:col-span-5' : 'lg:col-span-7';
    }
  };

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="py-16 md:py-24 lg:py-28"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        {/* Section Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b-2 border-[#FCFBFC]">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-black uppercase tracking-widest bg-[#FCF003] text-[#030203] px-2.5 py-1">
                Demo Portfolio Archive
              </span>
              <span className="text-sm font-bold text-[#FCFBFC]">
                {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
              </span>
            </div>
            <h2
              id="work-heading"
              className="mt-3 font-display text-[clamp(2rem,4.5vw,4.5rem)] text-[#FCFBFC] uppercase tracking-[-0.04em] leading-[0.95]"
            >
              Project archive
            </h2>
          </div>

          {/* Accessible Filter Controls */}
          <div
            role="toolbar"
            aria-label="Filter projects by discipline"
            className="flex flex-wrap items-center gap-2"
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(cat)}
                  className={`filter-btn ${
                    isActive ? 'filter-btn-active' : 'filter-btn-inactive'
                  }`}
                >
                  {isActive && <span aria-hidden="true" className="font-black text-[#E00304]">■</span>}
                  <span>{cat}</span>
                  <span className="text-xs opacity-75">
                    ({cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Region for Screen Readers */}
        <div aria-live="polite" className="sr-only">
          Showing {filteredProjects.length} demo projects in {activeCategory} category.
        </div>

        {/* Editorial 12-Column Grid with Alternating 7/5 and 5/7 Pairs */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => {
            const colSpanClass = getColSpan(index);

            return (
              <article
                key={project.id}
                className={`group flex flex-col ${colSpanClass} border-2 border-[#030203] bg-[#FCFBFC] transition-all duration-150 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#030203]`}
              >
                {/* Visual Preview Artwork Area */}
                <div className="border-b-2 border-[#030203] bg-[#2C61AA]">
                  <ProjectArtwork projectId={project.id} />
                </div>

                {/* Metadata & Trigger on Solid Paper Reading Surface */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-1 bg-[#FCFBFC] text-[#030203]">
                  <div>
                    {/* Unboxed Metadata Line with Typographic Separator */}
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#BC8505]">
                      <span>{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#E00304]">{project.demoLabel}</span>
                    </div>

                    <h3 className="mt-2 font-display text-2xl md:text-3xl uppercase tracking-[-0.03em] text-[#030203] group-hover:text-[#2C61AA] transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm md:text-base leading-relaxed text-[#030203]/85 line-clamp-3">
                      {project.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#030203]/15 flex items-center justify-between gap-4">
                    <span className="text-xs font-bold text-[#030203]/60 uppercase tracking-wider">
                      Case Study Plate
                    </span>

                    <button
                      ref={(el) => {
                        triggerRefs.current[project.id] = el;
                      }}
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      aria-haspopup="dialog"
                      className="min-h-[44px] px-4 py-2 bg-[#FCF003] text-[#030203] font-bold text-sm border border-[#030203] rounded-[2px] hover:shadow-[3px_3px_0px_#030203] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2"
                    >
                      <span>Explore Case Study</span>
                      <span aria-hidden="true" className="font-black text-xs">→</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Case-study Dialog */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        triggerRef={
          activeModalProject
            ? { current: triggerRefs.current[activeModalProject.id] }
            : undefined
        }
      />
    </section>
  );
}
