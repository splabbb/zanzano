/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { VisualPanel } from '../types/portfolio';

interface ProjectArtworkProps {
  projectId: string;
  className?: string;
}

/**
 * Main project preview artwork for the 12-column editorial grid.
 * Saturated, tactile, local vector SVG using strictly approved tokens.
 */
export function ProjectArtwork({ projectId, className = '' }: ProjectArtworkProps) {
  switch (projectId) {
    case 'demo-01':
      // Chromatypic Poster Form
      return (
        <div className={`relative overflow-hidden bg-[#2C61AA] p-4 flex items-center justify-center ${className}`}>
          <svg
            viewBox="0 0 500 340"
            className="w-full h-full max-h-[360px] select-none"
            aria-hidden="true"
            role="presentation"
          >
            {/* Background blue plane with ink border */}
            <rect width="500" height="340" fill="#2C61AA" />
            {/* Diagonal yellow poster block (-6°) */}
            <g transform="rotate(-6 250 170)">
              <rect
                x="80"
                y="30"
                width="340"
                height="280"
                fill="#FCF003"
                stroke="#030203"
                strokeWidth="3"
                style={{ filter: 'drop-shadow(6px 6px 0px #030203)' }}
              />
              {/* Red diagonal stripe */}
              <polygon points="80,100 420,70 420,130 80,160" fill="#E00304" />
              <text
                x="100"
                y="140"
                fill="#FCFBFC"
                fontFamily="'Arial Black', Arial, sans-serif"
                fontWeight="900"
                fontSize="22"
                letterSpacing="-0.04em"
              >
                POSTER SPECIMEN
              </text>
              {/* Ink typographic block */}
              <text
                x="100"
                y="220"
                fill="#030203"
                fontFamily="'Arial Black', Arial, sans-serif"
                fontWeight="900"
                fontSize="36"
                letterSpacing="-0.04em"
              >
                CHROMATYPIC
              </text>
              {/* Circular stamp with cyan micro-accent */}
              <circle cx="340" cy="235" r="38" fill="#030203" stroke="#FCFBFC" strokeWidth="2" />
              <circle cx="340" cy="235" r="26" fill="#BC8505" />
              <text
                x="340"
                y="239"
                textAnchor="middle"
                fill="#9EFBF1"
                fontFamily="Arial, sans-serif"
                fontWeight="bold"
                fontSize="8"
              >
                DEMO 01
              </text>
            </g>
          </svg>
        </div>
      );

    case 'demo-02':
      // Kinetic Packaging Matrix
      return (
        <div className={`relative overflow-hidden bg-[#2C61AA] p-4 flex items-center justify-center ${className}`}>
          <svg
            viewBox="0 0 500 340"
            className="w-full h-full max-h-[360px] select-none"
            aria-hidden="true"
            role="presentation"
          >
            <rect width="500" height="340" fill="#2C61AA" />
            {/* Structural package fold plane (+5°) */}
            <g transform="rotate(5 250 170)">
              {/* Paper packaging carton */}
              <rect
                x="90"
                y="40"
                width="320"
                height="260"
                fill="#FCFBFC"
                stroke="#030203"
                strokeWidth="3"
                style={{ filter: 'drop-shadow(6px 6px 0px #030203)' }}
              />
              {/* Dieline dashed score line */}
              <line x1="200" y1="40" x2="200" y2="300" stroke="#030203" strokeWidth="2" strokeDasharray="6,4" />
              {/* Red warning cylinder graphic */}
              <rect x="110" y="60" width="70" height="150" rx="14" fill="#E00304" stroke="#030203" strokeWidth="2" />
              <rect x="120" y="80" width="50" height="60" fill="#FCFBFC" />
              <line x1="125" y1="95" x2="165" y2="95" stroke="#030203" strokeWidth="3" />
              <line x1="125" y1="108" x2="165" y2="108" stroke="#E00304" strokeWidth="2" />
              {/* Electric green tab */}
              <rect x="220" y="60" width="160" height="40" fill="#01D408" stroke="#030203" strokeWidth="2" />
              <text
                x="230"
                y="86"
                fill="#030203"
                fontFamily="'Arial Black', Arial, sans-serif"
                fontWeight="900"
                fontSize="16"
              >
                MATRIX // 750
              </text>
              {/* Commercial Barcode */}
              <g transform="translate(220, 120)">
                <rect width="160" height="45" fill="#FCFBFC" stroke="#030203" strokeWidth="1.5" />
                <line x1="15" y1="5" x2="15" y2="40" stroke="#030203" strokeWidth="3" />
                <line x1="25" y1="5" x2="25" y2="40" stroke="#030203" strokeWidth="2" />
                <line x1="35" y1="5" x2="35" y2="40" stroke="#030203" strokeWidth="5" />
                <line x1="50" y1="5" x2="50" y2="40" stroke="#030203" strokeWidth="2" />
                <line x1="65" y1="5" x2="65" y2="40" stroke="#030203" strokeWidth="4" />
                <line x1="80" y1="5" x2="80" y2="40" stroke="#030203" strokeWidth="2" />
                <line x1="95" y1="5" x2="95" y2="40" stroke="#030203" strokeWidth="6" />
                <line x1="115" y1="5" x2="115" y2="40" stroke="#030203" strokeWidth="2" />
                <line x1="130" y1="5" x2="130" y2="40" stroke="#030203" strokeWidth="4" />
              </g>
              {/* Yellow label pill with cyan text */}
              <rect x="220" y="185" width="160" height="30" fill="#FCF003" stroke="#030203" strokeWidth="2" />
              <text
                x="300"
                y="205"
                textAnchor="middle"
                fill="#030203"
                fontFamily="'Arial Black', Arial, sans-serif"
                fontWeight="900"
                fontSize="11"
              >
                TACTILE FOLD MATRIX
              </text>
              <rect x="220" y="230" width="160" height="45" fill="#030203" />
              <text
                x="300"
                y="257"
                textAnchor="middle"
                fill="#9EFBF1"
                fontFamily="Arial, sans-serif"
                fontWeight="bold"
                fontSize="12"
              >
                PROTOTYPE // 02
              </text>
            </g>
          </svg>
        </div>
      );

    case 'demo-03':
      // Signal Grid Interface
      return (
        <div className={`relative overflow-hidden bg-[#2C61AA] p-4 flex items-center justify-center ${className}`}>
          <svg
            viewBox="0 0 500 340"
            className="w-full h-full max-h-[360px] select-none"
            aria-hidden="true"
            role="presentation"
          >
            <rect width="500" height="340" fill="#2C61AA" />
            {/* Screen interface plate (-4°) */}
            <g transform="rotate(-4 250 170)">
              {/* Solid Ink Window Frame */}
              <rect
                x="70"
                y="30"
                width="360"
                height="280"
                fill="#030203"
                stroke="#FCFBFC"
                strokeWidth="2"
                style={{ filter: 'drop-shadow(6px 6px 0px #030203)' }}
              />
              {/* Header Bar */}
              <rect x="70" y="30" width="360" height="35" fill="#FCF003" />
              <text
                x="85"
                y="54"
                fill="#030203"
                fontFamily="'Arial Black', Arial, sans-serif"
                fontWeight="900"
                fontSize="13"
              >
                SIGNAL GRID SYSTEM // SPEC 03
              </text>
              {/* Sub-grid of unboxed panels */}
              <rect x="85" y="80" width="160" height="100" fill="#FCFBFC" stroke="#030203" strokeWidth="2" />
              <text
                x="95"
                y="105"
                fill="#030203"
                fontFamily="'Arial Black', Arial, sans-serif"
                fontWeight="900"
                fontSize="24"
              >
                100%
              </text>
              <text x="95" y="125" fill="#E00304" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="11">
                VECTOR FIDELITY
              </text>
              <rect x="95" y="140" width="130" height="12" fill="#01D408" />

              {/* Cyan localized readout panel */}
              <rect x="260" y="80" width="155" height="100" fill="#320A0B" stroke="#030203" strokeWidth="2" />
              <text
                x="275"
                y="105"
                fill="#9EFBF1"
                fontFamily="'Arial Black', Arial, sans-serif"
                fontWeight="900"
                fontSize="18"
              >
                ACCESSIBLE
              </text>
              <text x="275" y="128" fill="#FCFBFC" fontFamily="Arial, sans-serif" fontSize="11">
                WCAG AA DISCIPLINE
              </text>
              <line x1="275" y1="145" x2="395" y2="145" stroke="#BC8505" strokeWidth="3" />

              {/* Bottom solid paper data readout row */}
              <rect x="85" y="195" width="330" height="95" fill="#FCFBFC" stroke="#030203" strokeWidth="2" />
              <rect x="95" y="210" width="90" height="25" fill="#E00304" />
              <text
                x="140"
                y="227"
                textAnchor="middle"
                fill="#FCFBFC"
                fontFamily="'Arial Black', Arial, sans-serif"
                fontWeight="900"
                fontSize="11"
              >
                SOLID SURFACE
              </text>
              <text
                x="200"
                y="228"
                fill="#030203"
                fontFamily="'Arial Black', Arial, sans-serif"
                fontWeight="900"
                fontSize="14"
              >
                UNBOXED METADATA
              </text>
              <line x1="95" y1="248" x2="405" y2="248" stroke="#030203" strokeWidth="1.5" />
              <text x="95" y="270" fill="#030203" fontFamily="Arial, sans-serif" fontSize="12">
                Pure solid paper reading layer with zero texture interference.
              </text>
            </g>
          </svg>
        </div>
      );

    case 'demo-04':
      // Tactile Modular System
      return (
        <div className={`relative overflow-hidden bg-[#2C61AA] p-4 flex items-center justify-center ${className}`}>
          <svg
            viewBox="0 0 500 340"
            className="w-full h-full max-h-[360px] select-none"
            aria-hidden="true"
            role="presentation"
          >
            <rect width="500" height="340" fill="#2C61AA" />
            {/* Modular planes (+6°) */}
            <g transform="rotate(6 250 170)">
              {/* Yellow background base */}
              <rect
                x="80"
                y="35"
                width="340"
                height="270"
                fill="#FCF003"
                stroke="#030203"
                strokeWidth="3"
                style={{ filter: 'drop-shadow(6px 6px 0px #030203)' }}
              />
              {/* Circular beadwork ring */}
              <circle cx="180" cy="150" r="70" fill="#BC8505" stroke="#030203" strokeWidth="2" />
              <circle cx="180" cy="150" r="54" fill="#320A0B" />
              {[...Array(12)].map((_, i) => {
                const angle = (i * 360) / 12;
                const rad = (angle * Math.PI) / 180;
                const x = 180 + Math.cos(rad) * 62;
                const y = 150 + Math.sin(rad) * 62;
                return (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="5"
                    fill={i % 2 === 0 ? '#E00304' : '#FCFBFC'}
                    stroke="#030203"
                    strokeWidth="1"
                  />
                );
              })}

              {/* Pair of dice rotated */}
              <g transform="translate(280, 80) rotate(-10 35 35)">
                <rect width="70" height="70" rx="8" fill="#FCFBFC" stroke="#030203" strokeWidth="3" />
                <circle cx="20" cy="20" r="6" fill="#E00304" />
                <circle cx="50" cy="20" r="6" fill="#E00304" />
                <circle cx="35" cy="35" r="7" fill="#E00304" />
                <circle cx="20" cy="50" r="6" fill="#E00304" />
                <circle cx="50" cy="50" r="6" fill="#E00304" />
              </g>

              {/* Restrained Starburst Detail */}
              <g transform="translate(300, 190)">
                <path
                  d="M 40,10 L 45,25 L 60,18 L 54,33 L 70,36 L 58,47 L 70,58 L 54,61 L 60,76 L 45,69 L 40,84 L 35,69 L 20,76 L 26,61 L 10,58 L 22,47 L 10,36 L 26,33 L 20,18 L 35,25 Z"
                  fill="#030203"
                  stroke="#FCFBFC"
                  strokeWidth="2"
                />
                <circle cx="40" cy="47" r="10" fill="#9EFBF1" />
              </g>

              {/* Lower text block */}
              <rect x="95" y="240" width="180" height="45" fill="#030203" />
              <text
                x="185"
                y="268"
                textAnchor="middle"
                fill="#FCFBFC"
                fontFamily="'Arial Black', Arial, sans-serif"
                fontWeight="900"
                fontSize="14"
              >
                MODULAR TACTILITY
              </text>
            </g>
          </svg>
        </div>
      );

    case 'demo-05':
      // Spectral Vessel Prototype
      return (
        <div className={`relative overflow-hidden bg-[#2C61AA] p-4 flex items-center justify-center ${className}`}>
          <svg
            viewBox="0 0 500 340"
            className="w-full h-full max-h-[360px] select-none"
            aria-hidden="true"
            role="presentation"
          >
            <rect width="500" height="340" fill="#2C61AA" />
            {/* Vessel Composition (-5°) */}
            <g transform="rotate(-5 250 170)">
              {/* Paper backing plane */}
              <rect
                x="80"
                y="35"
                width="340"
                height="270"
                fill="#FCFBFC"
                stroke="#030203"
                strokeWidth="3"
                style={{ filter: 'drop-shadow(6px 6px 0px #030203)' }}
              />

              {/* Electric Green Bottle Profile */}
              <g transform="translate(110, 60)">
                <rect x="25" y="0" width="20" height="15" fill="#FCF003" stroke="#030203" strokeWidth="2" />
                <path
                  d="M 30 15 L 30 50 Q 0 80 0 130 L 0 200 Q 0 210 15 210 L 55 210 Q 70 210 70 200 L 70 130 Q 70 80 40 15 Z"
                  fill="#01D408"
                  stroke="#030203"
                  strokeWidth="3"
                />
                <rect x="10" y="100" width="50" height="70" fill="#FCFBFC" stroke="#030203" strokeWidth="1.5" />
                <line x1="15" y1="120" x2="55" y2="120" stroke="#E00304" strokeWidth="3" />
                <line x1="15" y1="135" x2="55" y2="135" stroke="#030203" strokeWidth="2" />
              </g>

              {/* Dark Pot Silhouette with Ochre Rim */}
              <g transform="translate(230, 90)">
                <ellipse cx="80" cy="50" rx="65" ry="18" fill="#BC8505" stroke="#030203" strokeWidth="2.5" />
                <ellipse cx="80" cy="48" rx="55" ry="13" fill="#030203" />
                <path
                  d="M 15 50 Q 10 140 80 150 Q 150 140 145 50 Z"
                  fill="#320A0B"
                  stroke="#030203"
                  strokeWidth="3"
                />
                <path d="M 30 65 Q 25 130 80 135 Q 135 130 130 65 Z" fill="#030203" />
                {/* Yellow Bowl Accent */}
                <ellipse cx="80" cy="120" rx="35" ry="12" fill="#FCF003" stroke="#030203" strokeWidth="1.5" />
              </g>

              {/* Cyan Accent Label at bottom */}
              <rect x="95" y="245" width="310" height="35" fill="#030203" />
              <text
                x="110"
                y="268"
                fill="#9EFBF1"
                fontFamily="'Arial Black', Arial, sans-serif"
                fontWeight="900"
                fontSize="12"
              >
                VESSEL GROUNDING // CALIBRATION 05
              </text>
            </g>
          </svg>
        </div>
      );

    case 'demo-06':
    default:
      // Monolithic Typeflow
      return (
        <div className={`relative overflow-hidden bg-[#2C61AA] p-4 flex items-center justify-center ${className}`}>
          <svg
            viewBox="0 0 500 340"
            className="w-full h-full max-h-[360px] select-none"
            aria-hidden="true"
            role="presentation"
          >
            <rect width="500" height="340" fill="#2C61AA" />
            {/* Monolithic Typeflow Composition (+4°) */}
            <g transform="rotate(4 250 170)">
              {/* Yellow background poster plane */}
              <rect
                x="80"
                y="35"
                width="340"
                height="270"
                fill="#FCF003"
                stroke="#030203"
                strokeWidth="3"
                style={{ filter: 'drop-shadow(6px 6px 0px #030203)' }}
              />
              {/* Heavy Uppercase Headline Lockup */}
              <text
                x="100"
                y="90"
                fill="#030203"
                fontFamily="'Arial Black', Arial, sans-serif"
                fontWeight="900"
                fontSize="38"
                letterSpacing="-0.04em"
              >
                MONOLITH
              </text>
              <rect x="100" y="105" width="200" height="8" fill="#E00304" />
              <text
                x="100"
                y="155"
                fill="#030203"
                fontFamily="'Arial Black', Arial, sans-serif"
                fontWeight="900"
                fontSize="38"
                letterSpacing="-0.04em"
              >
                TYPEFLOW
              </text>

              {/* Solid Paper Quote Block with strict 65ch measure simulation */}
              <rect x="100" y="180" width="300" height="80" fill="#FCFBFC" stroke="#030203" strokeWidth="2" />
              <text x="115" y="205" fill="#030203" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="13">
                DUAL FONT STACK ARCHITECTURE
              </text>
              <line x1="115" y1="216" x2="385" y2="216" stroke="#030203" strokeWidth="1" />
              <text x="115" y="235" fill="#030203" fontFamily="Arial, sans-serif" fontSize="11">
                Display: Arial Black / Heavy Uppercase.
              </text>
              <text x="115" y="250" fill="#030203" fontFamily="Arial, sans-serif" fontSize="11">
                Body & Interface: Arial / Disciplined Line Length.
              </text>

              {/* Cyan Accent Badge */}
              <g transform="translate(325, 65)">
                <circle cx="25" cy="25" r="22" fill="#030203" />
                <circle cx="25" cy="25" r="16" fill="#9EFBF1" />
                <text
                  x="25"
                  y="29"
                  textAnchor="middle"
                  fill="#030203"
                  fontFamily="'Arial Black', Arial, sans-serif"
                  fontWeight="900"
                  fontSize="9"
                >
                  06
                </text>
              </g>
            </g>
          </svg>
        </div>
      );
  }
}

/**
 * Visual Panel Renderer for the Case-Study Modal Dialog.
 * Each project contains multiple distinct panels demonstrating different study facets.
 */
export function ModalPanelArtwork({ panel }: { panel: VisualPanel }) {
  return (
    <div className="bg-[#2C61AA] p-4 sm:p-6 border-2 border-[#030203]">
      <div className="aspect-[16/10] w-full flex items-center justify-center overflow-hidden">
        {panel.type === 'poster' && (
          <svg viewBox="0 0 540 320" className="w-full h-full" aria-hidden="true">
            <rect width="540" height="320" fill="#2C61AA" />
            <g transform="rotate(-3 270 160)">
              <rect x="60" y="30" width="420" height="260" fill="#FCF003" stroke="#030203" strokeWidth="3" />
              <rect x="80" y="50" width="140" height="30" fill="#E00304" />
              <text x="90" y="71" fill="#FCFBFC" fontFamily="'Arial Black', Arial, sans-serif" fontWeight="900" fontSize="14">
                PLATE I: SPECIMEN
              </text>
              <text x="80" y="130" fill="#030203" fontFamily="'Arial Black', Arial, sans-serif" fontWeight="900" fontSize="36" letterSpacing="-0.04em">
                TACTILE STUDY
              </text>
              <rect x="80" y="150" width="380" height="100" fill="#FCFBFC" stroke="#030203" strokeWidth="2" />
              <text x="100" y="185" fill="#030203" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="14">
                Color calibration: 45% Blue, 25% Yellow, 12% Red, 8% Green.
              </text>
              <text x="100" y="215" fill="#030203" fontFamily="Arial, sans-serif" fontSize="13">
                All essential reading text remains completely upright on solid paper.
              </text>
              <circle cx="430" cy="85" r="28" fill="#9EFBF1" stroke="#030203" strokeWidth="2" />
              <text x="430" y="90" textAnchor="middle" fill="#030203" fontFamily="'Arial Black', Arial, sans-serif" fontWeight="900" fontSize="10">
                CYAN
              </text>
            </g>
          </svg>
        )}

        {panel.type === 'matrix' && (
          <svg viewBox="0 0 540 320" className="w-full h-full" aria-hidden="true">
            <rect width="540" height="320" fill="#2C61AA" />
            <g transform="rotate(2 270 160)">
              <rect x="50" y="30" width="440" height="260" fill="#030203" stroke="#FCFBFC" strokeWidth="2" />
              <rect x="50" y="30" width="440" height="40" fill="#FCF003" />
              <text x="70" y="56" fill="#030203" fontFamily="'Arial Black', Arial, sans-serif" fontWeight="900" fontSize="14">
                PLATE II: SYSTEM METRICS & GRID COGNITION
              </text>
              <g transform="translate(70, 90)">
                <rect width="180" height="75" fill="#FCFBFC" stroke="#030203" strokeWidth="2" />
                <text x="15" y="30" fill="#030203" fontFamily="'Arial Black', Arial, sans-serif" fontWeight="900" fontSize="20">
                  GRID 12-COL
                </text>
                <text x="15" y="55" fill="#E00304" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="12">
                  7/5 & 5/7 PAIRING
                </text>
              </g>
              <g transform="translate(270, 90)">
                <rect width="200" height="75" fill="#01D408" stroke="#030203" strokeWidth="2" />
                <text x="15" y="30" fill="#030203" fontFamily="'Arial Black', Arial, sans-serif" fontWeight="900" fontSize="20">
                  CONTRAST AA
                </text>
                <text x="15" y="55" fill="#030203" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="12">
                  WCAG CERTIFIED
                </text>
              </g>
              <g transform="translate(70, 185)">
                <rect width="400" height="85" fill="#FCFBFC" stroke="#030203" strokeWidth="2" />
                <text x="20" y="35" fill="#030203" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="13">
                  UNBOXED METADATA WITH TYPOGRAPHIC SEPARATORS
                </text>
                <text x="20" y="60" fill="#030203" fontFamily="Arial, sans-serif" fontSize="12">
                  Identity · Experiments · Digital · Demo Layout Archival Standards
                </text>
              </g>
            </g>
          </svg>
        )}

        {panel.type === 'system' && (
          <svg viewBox="0 0 540 320" className="w-full h-full" aria-hidden="true">
            <rect width="540" height="320" fill="#2C61AA" />
            <g transform="rotate(-4 270 160)">
              <rect x="70" y="30" width="400" height="260" fill="#FCFBFC" stroke="#030203" strokeWidth="3" />
              <rect x="90" y="50" width="100" height="180" rx="16" fill="#E00304" stroke="#030203" strokeWidth="2" />
              <rect x="105" y="70" width="70" height="70" fill="#FCFBFC" />
              <line x1="110" y1="90" x2="165" y2="90" stroke="#030203" strokeWidth="3" />
              <line x1="110" y1="105" x2="165" y2="105" stroke="#E00304" strokeWidth="3" />
              <rect x="220" y="50" width="220" height="80" fill="#FCF003" stroke="#030203" strokeWidth="2" />
              <text x="235" y="85" fill="#030203" fontFamily="'Arial Black', Arial, sans-serif" fontWeight="900" fontSize="16">
                PACKAGING FLAT
              </text>
              <text x="235" y="110" fill="#320A0B" fontFamily="Arial, sans-serif" fontSize="12">
                Dielines, creasing & folding matrix
              </text>
              <rect x="220" y="150" width="220" height="80" fill="#01D408" stroke="#030203" strokeWidth="2" />
              <text x="235" y="185" fill="#030203" fontFamily="'Arial Black', Arial, sans-serif" fontWeight="900" fontSize="16">
                ELECTRIC GREEN TAB
              </text>
              <text x="235" y="210" fill="#030203" fontFamily="Arial, sans-serif" fontSize="12">
                Grounding visual weight
              </text>
            </g>
          </svg>
        )}

        {panel.type === 'vessel' && (
          <svg viewBox="0 0 540 320" className="w-full h-full" aria-hidden="true">
            <rect width="540" height="320" fill="#2C61AA" />
            <g transform="rotate(3 270 160)">
              <rect x="70" y="30" width="400" height="260" fill="#FCF003" stroke="#030203" strokeWidth="3" />
              <rect x="90" y="50" width="160" height="220" fill="#FCFBFC" stroke="#030203" strokeWidth="2" />
              {/* Bottle */}
              <g transform="translate(140, 70)">
                <rect x="15" y="0" width="20" height="15" fill="#FCF003" stroke="#030203" strokeWidth="2" />
                <path d="M 20 15 L 20 40 Q 0 65 0 110 L 0 160 Q 0 170 15 170 L 35 170 Q 50 170 50 160 L 50 110 Q 50 65 30 15 Z" fill="#01D408" stroke="#030203" strokeWidth="2.5" />
              </g>
              {/* Pot */}
              <g transform="translate(280, 70)">
                <ellipse cx="65" cy="40" rx="55" ry="16" fill="#BC8505" stroke="#030203" strokeWidth="2" />
                <ellipse cx="65" cy="38" rx="46" ry="12" fill="#030203" />
                <path d="M 10 40 Q 5 130 65 140 Q 125 130 120 40 Z" fill="#320A0B" stroke="#030203" strokeWidth="2.5" />
                <rect x="10" y="160" width="110" height="28" fill="#030203" />
                <text x="65" y="179" textAnchor="middle" fill="#9EFBF1" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="10">
                  GROUNDING MASS
                </text>
              </g>
            </g>
          </svg>
        )}

        {panel.type === 'monolith' && (
          <svg viewBox="0 0 540 320" className="w-full h-full" aria-hidden="true">
            <rect width="540" height="320" fill="#2C61AA" />
            <g transform="rotate(-2 270 160)">
              <rect x="60" y="30" width="420" height="260" fill="#030203" stroke="#FCFBFC" strokeWidth="2" />
              <text x="85" y="80" fill="#FCF003" fontFamily="'Arial Black', Arial, sans-serif" fontWeight="900" fontSize="36" letterSpacing="-0.04em">
                SCALE & MEASURE
              </text>
              <rect x="85" y="95" width="280" height="6" fill="#E00304" />
              <rect x="85" y="120" width="370" height="145" fill="#FCFBFC" stroke="#030203" strokeWidth="2" />
              <text x="105" y="150" fill="#030203" fontFamily="'Arial Black', Arial, sans-serif" fontWeight="900" fontSize="16">
                TYPOGRAPHIC SPECIFICATION
              </text>
              <line x1="105" y1="165" x2="435" y2="165" stroke="#030203" strokeWidth="1.5" />
              <text x="105" y="190" fill="#030203" fontFamily="Arial, sans-serif" fontSize="13">
                Line measure constrained to 60–65 characters per line.
              </text>
              <text x="105" y="215" fill="#030203" fontFamily="Arial, sans-serif" fontSize="13">
                Dual font stacks with zero Google Fonts dependencies.
              </text>
              <text x="105" y="240" fill="#2C61AA" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="13">
                Unboxed metadata · Pure vector performance
              </text>
            </g>
          </svg>
        )}

        {panel.type === 'tactile' && (
          <svg viewBox="0 0 540 320" className="w-full h-full" aria-hidden="true">
            <rect width="540" height="320" fill="#2C61AA" />
            <g transform="rotate(4 270 160)">
              <rect x="60" y="30" width="420" height="260" fill="#FCF003" stroke="#030203" strokeWidth="3" />
              <g transform="translate(100, 70)">
                <circle cx="50" cy="50" r="45" fill="#BC8505" stroke="#030203" strokeWidth="2" />
                <circle cx="50" cy="50" r="35" fill="#320A0B" />
                {[...Array(8)].map((_, i) => (
                  <circle
                    key={i}
                    cx={50 + Math.cos((i * Math.PI) / 4) * 40}
                    cy={50 + Math.sin((i * Math.PI) / 4) * 40}
                    r="4"
                    fill="#E00304"
                  />
                ))}
              </g>
              <g transform="translate(230, 60)">
                <rect width="60" height="60" rx="8" fill="#FCFBFC" stroke="#030203" strokeWidth="2.5" />
                <circle cx="18" cy="18" r="5" fill="#E00304" />
                <circle cx="42" cy="42" r="5" fill="#E00304" />
                <circle cx="30" cy="30" r="6" fill="#030203" />
              </g>
              <rect x="90" y="190" width="360" height="75" fill="#FCFBFC" stroke="#030203" strokeWidth="2" />
              <text x="110" y="225" fill="#030203" fontFamily="'Arial Black', Arial, sans-serif" fontWeight="900" fontSize="14">
                GEOMETRIC COUPLING
              </text>
              <text x="110" y="248" fill="#030203" fontFamily="Arial, sans-serif" fontSize="12">
                Dice facets, circular beadwork perimeter, and hard ink offset shadows.
              </text>
            </g>
          </svg>
        )}
      </div>
    </div>
  );
}
