/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function HeroCollage() {
  return (
    <div
      aria-hidden="true"
      className="relative w-full max-w-[560px] mx-auto lg:max-w-none select-none"
    >
      {/* Decorative SVG Collage translating the visual source of truth */}
      <svg
        viewBox="0 0 640 760"
        className="w-full h-auto overflow-visible"
        style={{ filter: 'drop-shadow(8px 8px 0px #030203)' }}
        role="presentation"
      >
        <defs>
          {/* Subtle drop shadow filter for tactile object planes */}
          <filter id="inkShadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow
              dx="4"
              dy="4"
              stdDeviation="0"
              floodColor="#030203"
              floodOpacity="1"
            />
          </filter>
          <filter id="subtleShadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow
              dx="2"
              dy="2"
              stdDeviation="0"
              floodColor="#030203"
              floodOpacity="0.7"
            />
          </filter>
        </defs>

        {/* 1. Underlying Blue Canvas Base Plate */}
        <rect
          x="10"
          y="10"
          width="620"
          height="740"
          fill="#2C61AA"
          stroke="#030203"
          strokeWidth="3"
        />

        {/* Diagonal packaging planes in background */}
        {/* Top-Right Yellow Commercial Packaging Plane (Rotated -5°) */}
        <g transform="rotate(-5 440 180)" filter="url(#inkShadow)">
          <rect
            x="280"
            y="40"
            width="320"
            height="260"
            fill="#FCF003"
            stroke="#030203"
            strokeWidth="3"
          />
          {/* Packaging typography & layout blocks */}
          <rect x="300" y="60" width="120" height="24" fill="#030203" />
          <text
            x="305"
            y="77"
            fill="#FCFBFC"
            fontFamily="'Arial Black', Arial, sans-serif"
            fontWeight="900"
            fontSize="14"
            letterSpacing="-0.02em"
          >
            BATCH // 09
          </text>
          <text
            x="300"
            y="125"
            fill="#030203"
            fontFamily="'Arial Black', Arial, sans-serif"
            fontWeight="900"
            fontSize="32"
            letterSpacing="-0.04em"
          >
            EXTRA
          </text>
          <text
            x="300"
            y="158"
            fill="#E00304"
            fontFamily="'Arial Black', Arial, sans-serif"
            fontWeight="900"
            fontSize="32"
            letterSpacing="-0.04em"
          >
            SATURATED
          </text>
          <line
            x1="300"
            y1="175"
            x2="570"
            y2="175"
            stroke="#030203"
            strokeWidth="2"
          />
          {/* Barcode representation */}
          <g transform="translate(300, 190)">
            <rect width="160" height="40" fill="#FCFBFC" stroke="#030203" strokeWidth="1.5" />
            <line x1="10" y1="5" x2="10" y2="35" stroke="#030203" strokeWidth="3" />
            <line x1="18" y1="5" x2="18" y2="35" stroke="#030203" strokeWidth="1.5" />
            <line x1="24" y1="5" x2="24" y2="35" stroke="#030203" strokeWidth="4" />
            <line x1="34" y1="5" x2="34" y2="35" stroke="#030203" strokeWidth="2" />
            <line x1="42" y1="5" x2="42" y2="35" stroke="#030203" strokeWidth="5" />
            <line x1="55" y1="5" x2="55" y2="35" stroke="#030203" strokeWidth="1.5" />
            <line x1="64" y1="5" x2="64" y2="35" stroke="#030203" strokeWidth="3" />
            <line x1="74" y1="5" x2="74" y2="35" stroke="#030203" strokeWidth="4" />
            <line x1="86" y1="5" x2="86" y2="35" stroke="#030203" strokeWidth="2" />
            <line x1="94" y1="5" x2="94" y2="35" stroke="#030203" strokeWidth="5" />
            <line x1="108" y1="5" x2="108" y2="35" stroke="#030203" strokeWidth="2" />
            <line x1="118" y1="5" x2="118" y2="35" stroke="#030203" strokeWidth="3" />
            <line x1="130" y1="5" x2="130" y2="35" stroke="#030203" strokeWidth="4" />
            <line x1="144" y1="5" x2="144" y2="35" stroke="#030203" strokeWidth="2" />
          </g>
          {/* Ochre stamp detail */}
          <circle cx="530" cy="210" r="30" fill="#BC8505" stroke="#030203" strokeWidth="2" />
          <text
            x="530"
            y="215"
            textAnchor="middle"
            fill="#FCFBFC"
            fontFamily="'Arial Black', Arial, sans-serif"
            fontSize="10"
            fontWeight="bold"
          >
            COLLAGE
          </text>
        </g>

        {/* 2. Red Fire Extinguisher Silhouette (Rotated -7°) */}
        <g transform="rotate(-7 200 240)" filter="url(#inkShadow)">
          {/* Cylinder Body */}
          <rect
            x="140"
            y="100"
            width="100"
            height="260"
            rx="20"
            fill="#E00304"
            stroke="#030203"
            strokeWidth="3"
          />
          {/* Cylinder Top Dome */}
          <path
            d="M 140 120 Q 190 70 240 120 Z"
            fill="#E00304"
            stroke="#030203"
            strokeWidth="3"
          />
          {/* Metal Valve & Handle */}
          <rect x="175" y="55" width="30" height="20" fill="#320A0B" stroke="#030203" strokeWidth="2" />
          <path d="M 180 55 L 160 30 L 175 25 L 190 55 Z" fill="#FCFBFC" stroke="#030203" strokeWidth="2" />
          <path d="M 200 55 L 235 45 L 235 60 L 205 65 Z" fill="#030203" />
          {/* Pressure Gauge */}
          <circle cx="160" cy="65" r="14" fill="#FCF003" stroke="#030203" strokeWidth="2" />
          <line x1="160" y1="65" x2="168" y2="58" stroke="#E00304" strokeWidth="2" />
          {/* White Instruction Label Panel */}
          <rect
            x="152"
            y="145"
            width="76"
            height="110"
            fill="#FCFBFC"
            stroke="#030203"
            strokeWidth="2"
          />
          <line x1="160" y1="160" x2="220" y2="160" stroke="#030203" strokeWidth="3" />
          <line x1="160" y1="172" x2="220" y2="172" stroke="#E00304" strokeWidth="4" />
          <line x1="160" y1="184" x2="210" y2="184" stroke="#030203" strokeWidth="2" />
          <line x1="160" y1="194" x2="205" y2="194" stroke="#030203" strokeWidth="2" />
          <line x1="160" y1="204" x2="215" y2="204" stroke="#030203" strokeWidth="2" />
          {/* Black Base Rim */}
          <rect x="138" y="340" width="104" height="25" rx="4" fill="#030203" />
        </g>

        {/* 3. Black Sports Badge / Crest (Rotated 4°) */}
        <g transform="rotate(4 360 350)" filter="url(#inkShadow)">
          <path
            d="M 320 280 L 410 280 Q 420 350 365 385 Q 310 350 320 280 Z"
            fill="#030203"
            stroke="#FCFBFC"
            strokeWidth="3"
          />
          {/* Inner Badge Border */}
          <path
            d="M 330 290 L 400 290 Q 408 342 365 372 Q 322 342 330 290 Z"
            fill="#030203"
            stroke="#FCF003"
            strokeWidth="1.5"
          />
          {/* Star motif inside badge */}
          <polygon
            points="365,305 370,320 385,320 373,330 378,345 365,335 352,345 357,330 345,320 360,320"
            fill="#FCF003"
            stroke="#030203"
            strokeWidth="1"
          />
        </g>

        {/* 4. Yellow Bowl with Circular Beadwork Motif (Circular Motif) */}
        <g transform="translate(430, 370)" filter="url(#inkShadow)">
          {/* Yellow Bowl Body */}
          <ellipse cx="60" cy="70" rx="90" ry="55" fill="#FCF003" stroke="#030203" strokeWidth="3" />
          <ellipse cx="60" cy="60" rx="80" ry="42" fill="#BC8505" stroke="#030203" strokeWidth="2" />
          <ellipse cx="60" cy="58" rx="65" ry="30" fill="#320A0B" />
          {/* Circular Beadwork Perimeter */}
          {[...Array(16)].map((_, i) => {
            const angle = (i * 360) / 16;
            const rad = (angle * Math.PI) / 180;
            const x = 60 + Math.cos(rad) * 94;
            const y = 70 + Math.sin(rad) * 58;
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="5"
                fill={i % 2 === 0 ? '#E00304' : '#030203'}
                stroke="#FCFBFC"
                strokeWidth="1"
              />
            );
          })}
        </g>

        {/* 5. Restrained Starburst Motif (Rotated 8°) */}
        <g transform="rotate(8 470 290)" filter="url(#subtleShadow)">
          <path
            d="M 470,240 L 476,258 L 495,250 L 488,268 L 507,272 L 493,285 L 507,298 L 488,302 L 495,320 L 476,312 L 470,330 L 464,312 L 445,320 L 452,302 L 433,298 L 447,285 L 433,272 L 452,268 L 445,250 L 464,258 Z"
            fill="#FCF003"
            stroke="#030203"
            strokeWidth="2.5"
          />
          <circle cx="470" cy="285" r="14" fill="#E00304" stroke="#030203" strokeWidth="2" />
        </g>

        {/* 6. Pair of Diagonal Dice Cubes (Rotated +9°) */}
        <g transform="rotate(9 270 410)" filter="url(#inkShadow)">
          {/* Die 1 */}
          <rect
            x="240"
            y="370"
            width="55"
            height="55"
            rx="6"
            fill="#FCFBFC"
            stroke="#030203"
            strokeWidth="2.5"
          />
          {/* Pips - 5 face */}
          <circle cx="252" cy="382" r="4.5" fill="#E00304" />
          <circle cx="283" cy="382" r="4.5" fill="#E00304" />
          <circle cx="267.5" cy="397.5" r="5" fill="#E00304" />
          <circle cx="252" cy="413" r="4.5" fill="#E00304" />
          <circle cx="283" cy="413" r="4.5" fill="#E00304" />

          {/* Die 2 (Rotated -12 relative) */}
          <g transform="translate(60, 20) rotate(-12 30 30)">
            <rect
              x="0"
              y="0"
              width="50"
              height="50"
              rx="6"
              fill="#FCFBFC"
              stroke="#030203"
              strokeWidth="2.5"
            />
            {/* Pips - 3 face */}
            <circle cx="12" cy="12" r="4" fill="#030203" />
            <circle cx="25" cy="25" r="4" fill="#030203" />
            <circle cx="38" cy="38" r="4" fill="#030203" />
          </g>
        </g>

        {/* 7. Crumpled Paper Fragment with Localized Cyan Lettering Accent */}
        <g transform="rotate(-4 310 490)" filter="url(#subtleShadow)">
          <polygon
            points="230,470 380,455 395,510 375,525 240,515 225,490"
            fill="#FCFBFC"
            stroke="#030203"
            strokeWidth="2"
          />
          {/* Small Cyan Lettering Accent as specified */}
          <text
            x="242"
            y="492"
            fill="#2C61AA"
            fontFamily="'Arial Black', Arial, sans-serif"
            fontWeight="900"
            fontSize="10"
            letterSpacing="-0.02em"
          >
            SPEC NO. 2026 //
          </text>
          <rect x="330" y="478" width="52" height="18" fill="#030203" />
          <text
            x="334"
            y="491"
            fill="#9EFBF1"
            fontFamily="Arial, sans-serif"
            fontWeight="bold"
            fontSize="9"
            letterSpacing="0.04em"
          >
            COLLAGE
          </text>
        </g>

        {/* 8. Dark Pot Anchoring Lower Center (Brown & Ink Grounding) */}
        <g transform="translate(230, 480)" filter="url(#inkShadow)">
          {/* Pot Handles */}
          <path
            d="M 50 120 C 10 120 10 160 50 170"
            fill="none"
            stroke="#320A0B"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <path
            d="M 50 120 C 10 120 10 160 50 170"
            fill="none"
            stroke="#030203"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M 230 120 C 270 120 270 160 230 170"
            fill="none"
            stroke="#320A0B"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <path
            d="M 230 120 C 270 120 270 160 230 170"
            fill="none"
            stroke="#030203"
            strokeWidth="8"
            strokeLinecap="round"
          />

          {/* Main Pot Body */}
          <path
            d="M 50 100 Q 40 210 140 215 Q 240 210 230 100 Z"
            fill="#320A0B"
            stroke="#030203"
            strokeWidth="3.5"
          />
          {/* Inner Shadow / Pot Core */}
          <path
            d="M 65 110 Q 55 195 140 200 Q 225 195 215 110 Z"
            fill="#030203"
          />
          {/* Pot Ochre Rim */}
          <ellipse
            cx="140"
            cy="100"
            rx="92"
            ry="24"
            fill="#BC8505"
            stroke="#030203"
            strokeWidth="3"
          />
          {/* Pot Interior Void */}
          <ellipse
            cx="140"
            cy="98"
            rx="80"
            ry="18"
            fill="#030203"
          />
          {/* Glossy highlight line */}
          <path
            d="M 85 130 Q 75 175 110 185"
            fill="none"
            stroke="#FCFBFC"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.35"
          />
        </g>

        {/* 9. Large Electric-Green Bottle Anchoring Lower Left */}
        <g transform="rotate(3 100 520)" filter="url(#inkShadow)">
          {/* Bottle Cap */}
          <rect x="75" y="320" width="36" height="22" rx="2" fill="#FCF003" stroke="#030203" strokeWidth="2.5" />
          {/* Bottle Neck */}
          <path
            d="M 83 342 L 83 395 Q 50 435 50 490 L 50 670 Q 50 685 65 685 L 120 685 Q 135 685 135 670 L 135 490 Q 135 435 103 395 L 103 342 Z"
            fill="#01D408"
            stroke="#030203"
            strokeWidth="3.5"
          />
          {/* Glass Highlight Sheen */}
          <path
            d="M 60 490 L 60 660"
            stroke="#FCFBFC"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.5"
          />
          {/* Bottle Label Plane */}
          <rect
            x="53"
            y="495"
            width="80"
            height="135"
            fill="#FCFBFC"
            stroke="#030203"
            strokeWidth="2"
          />
          {/* Label Type */}
          <rect x="58" y="505" width="70" height="22" fill="#E00304" />
          <text
            x="93"
            y="520"
            textAnchor="middle"
            fill="#FCFBFC"
            fontFamily="'Arial Black', Arial, sans-serif"
            fontWeight="900"
            fontSize="11"
          >
            NO. 01
          </text>
          <text
            x="93"
            y="545"
            textAnchor="middle"
            fill="#030203"
            fontFamily="'Arial Black', Arial, sans-serif"
            fontWeight="900"
            fontSize="14"
            letterSpacing="-0.04em"
          >
            ELECTRIC
          </text>
          <text
            x="93"
            y="565"
            textAnchor="middle"
            fill="#2C61AA"
            fontFamily="'Arial Black', Arial, sans-serif"
            fontWeight="900"
            fontSize="13"
          >
            GREEN
          </text>
          <line x1="60" y1="578" x2="125" y2="578" stroke="#030203" strokeWidth="2" />
          {/* Small Cyan localized text accent on label */}
          <rect x="62" y="590" width="62" height="15" fill="#030203" />
          <text
            x="93"
            y="601"
            textAnchor="middle"
            fill="#9EFBF1"
            fontFamily="Arial, sans-serif"
            fontWeight="bold"
            fontSize="8"
          >
            750 ML / SPEC
          </text>
        </g>
      </svg>
    </div>
  );
}
