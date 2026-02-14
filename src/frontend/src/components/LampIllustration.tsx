interface LampIllustrationProps {
  isOn: boolean;
}

export default function LampIllustration({ isOn }: LampIllustrationProps) {
  return (
    <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
      <svg
        viewBox="0 0 400 500"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients for the lamp shade */}
          <linearGradient id="shadeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.75 0.15 40)" />
            <stop offset="50%" stopColor="oklch(0.70 0.18 35)" />
            <stop offset="100%" stopColor="oklch(0.65 0.20 30)" />
          </linearGradient>

          {/* Gradient for the lamp base */}
          <linearGradient id="baseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.55 0.12 25)" />
            <stop offset="100%" stopColor="oklch(0.45 0.15 20)" />
          </linearGradient>

          {/* Light glow gradient */}
          <radialGradient id="lightGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.95 0.15 85)" stopOpacity="0.9" />
            <stop offset="30%" stopColor="oklch(0.90 0.18 75)" stopOpacity="0.7" />
            <stop offset="60%" stopColor="oklch(0.85 0.20 65)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="oklch(0.80 0.15 55)" stopOpacity="0" />
          </radialGradient>

          {/* Light cone gradient */}
          <linearGradient id="lightCone" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.92 0.18 80)" stopOpacity="0.8" />
            <stop offset="50%" stopColor="oklch(0.88 0.20 70)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="oklch(0.85 0.15 60)" stopOpacity="0.1" />
          </linearGradient>

          {/* Bulb gradient */}
          <radialGradient id="bulbGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.95 0.12 85)" />
            <stop offset="70%" stopColor="oklch(0.88 0.15 75)" />
            <stop offset="100%" stopColor="oklch(0.80 0.18 65)" />
          </radialGradient>
        </defs>

        {/* Light cone (only visible when on) */}
        <g
          className={`transition-all duration-700 ease-in-out ${
            isOn ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <path
            d="M 200 180 L 120 450 L 280 450 Z"
            fill="url(#lightCone)"
            className="lamp-light-cone"
          />
        </g>

        {/* Ambient glow (only visible when on) */}
        <circle
          cx="200"
          cy="180"
          r="120"
          fill="url(#lightGlow)"
          className={`transition-all duration-700 ease-in-out ${
            isOn ? 'opacity-100 lamp-glow-pulse' : 'opacity-0'
          }`}
        />

        {/* Lamp shade with decorative stripes */}
        <g className="lamp-shade">
          {/* Main shade body */}
          <path
            d="M 150 100 L 120 180 L 280 180 L 250 100 Z"
            fill="url(#shadeGradient)"
            stroke="oklch(0.50 0.20 30)"
            strokeWidth="2"
            className={`transition-all duration-500 ${
              isOn ? 'brightness-110' : 'brightness-90'
            }`}
          />
          
          {/* Decorative stripes on shade */}
          <line
            x1="145"
            y1="120"
            x2="125"
            y2="170"
            stroke="oklch(0.80 0.22 45)"
            strokeWidth="3"
            opacity="0.6"
            className={`transition-all duration-500 ${
              isOn ? 'opacity-80' : 'opacity-40'
            }`}
          />
          <line
            x1="170"
            y1="115"
            x2="150"
            y2="175"
            stroke="oklch(0.75 0.20 40)"
            strokeWidth="3"
            opacity="0.6"
            className={`transition-all duration-500 ${
              isOn ? 'opacity-80' : 'opacity-40'
            }`}
          />
          <line
            x1="230"
            y1="115"
            x2="250"
            y2="175"
            stroke="oklch(0.75 0.20 40)"
            strokeWidth="3"
            opacity="0.6"
            className={`transition-all duration-500 ${
              isOn ? 'opacity-80' : 'opacity-40'
            }`}
          />
          <line
            x1="255"
            y1="120"
            x2="275"
            y2="170"
            stroke="oklch(0.80 0.22 45)"
            strokeWidth="3"
            opacity="0.6"
            className={`transition-all duration-500 ${
              isOn ? 'opacity-80' : 'opacity-40'
            }`}
          />

          {/* Shade rim */}
          <ellipse
            cx="200"
            cy="100"
            rx="50"
            ry="8"
            fill="oklch(0.60 0.18 35)"
            stroke="oklch(0.45 0.20 30)"
            strokeWidth="1.5"
          />
        </g>

        {/* Light bulb */}
        <g className="lamp-bulb">
          <ellipse
            cx="200"
            cy="165"
            rx="25"
            ry="30"
            fill="url(#bulbGradient)"
            stroke="oklch(0.70 0.10 70)"
            strokeWidth="1.5"
            className={`transition-all duration-500 ${
              isOn
                ? 'brightness-150 drop-shadow-[0_0_20px_oklch(0.90_0.20_75)]'
                : 'brightness-75 opacity-60'
            }`}
          />
          
          {/* Bulb base */}
          <rect
            x="190"
            y="190"
            width="20"
            height="15"
            rx="2"
            fill="oklch(0.65 0.08 60)"
            stroke="oklch(0.55 0.10 55)"
            strokeWidth="1"
            className={`transition-all duration-500 ${
              isOn ? 'brightness-110' : 'brightness-80'
            }`}
          />
        </g>

        {/* Lamp stand/neck */}
        <g className="lamp-stand">
          <rect
            x="195"
            y="205"
            width="10"
            height="120"
            fill="url(#baseGradient)"
            stroke="oklch(0.40 0.15 25)"
            strokeWidth="1.5"
          />
          
          {/* Decorative rings on stand */}
          <circle
            cx="200"
            cy="240"
            r="8"
            fill="oklch(0.70 0.18 40)"
            stroke="oklch(0.55 0.20 35)"
            strokeWidth="1"
          />
          <circle
            cx="200"
            cy="290"
            r="8"
            fill="oklch(0.70 0.18 40)"
            stroke="oklch(0.55 0.20 35)"
            strokeWidth="1"
          />
        </g>

        {/* Lamp base */}
        <g className="lamp-base">
          {/* Base platform */}
          <ellipse
            cx="200"
            cy="340"
            rx="60"
            ry="12"
            fill="url(#baseGradient)"
            stroke="oklch(0.40 0.15 25)"
            strokeWidth="2"
          />
          
          {/* Base middle section */}
          <ellipse
            cx="200"
            cy="335"
            rx="50"
            ry="10"
            fill="oklch(0.60 0.15 30)"
            stroke="oklch(0.45 0.18 28)"
            strokeWidth="1.5"
          />
          
          {/* Decorative accent on base */}
          <ellipse
            cx="200"
            cy="330"
            rx="35"
            ry="6"
            fill="oklch(0.75 0.20 42)"
            opacity="0.7"
          />
        </g>
      </svg>
    </div>
  );
}
