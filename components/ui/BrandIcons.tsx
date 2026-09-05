import React from 'react';

// ── GitHub ───────────────────────────────────────────────────────────────────
export const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

// ── LinkedIn ─────────────────────────────────────────────────────────────────
export const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

// ── Python ───────────────────────────────────────────────────────────────────
export const PythonIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 256 255" aria-hidden="true">
    <defs>
      <linearGradient id="py-a" x1="12.959%" y1="12.039%" x2="79.639%" y2="78.201%">
        <stop offset="0%" stopColor="#387EB8" />
        <stop offset="100%" stopColor="#366994" />
      </linearGradient>
      <linearGradient id="py-b" x1="19.128%" y1="20.579%" x2="90.742%" y2="88.429%">
        <stop offset="0%" stopColor="#FFE052" />
        <stop offset="100%" stopColor="#FFC331" />
      </linearGradient>
    </defs>
    <path fill="url(#py-a)" d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.221 63.097 36.221 63.097h21.6v-30.356s-1.165-36.221 35.632-36.221h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z" />
    <path fill="url(#py-b)" d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.221-63.096-36.221-63.096h-21.6v30.355s1.165 36.222-35.632 36.222h-61.362s-34.475-.557-34.475 33.319v56.013s-5.235 33.886 62.518 33.886zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z" />
  </svg>
);

// ── Java ─────────────────────────────────────────────────────────────────────
export const JavaIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 256 346" aria-hidden="true">
    <path fill="#5382A1" d="M82.554 267.473s-13.198 7.675 9.393 10.272c27.369 3.122 41.356 2.675 71.517-3.034 0 0 7.93 4.972 19.003 9.279-67.611 28.977-153.019-1.679-99.913-16.517z" />
    <path fill="#5382A1" d="M74.292 229.659s-14.803 10.958 7.805 13.296c29.236 3.016 52.324 3.263 92.276-4.43 0 0 5.526 5.606 14.212 8.666-81.745 23.906-172.798 1.885-114.293-17.532z" />
    <path fill="#E76F00" d="M143.942 165.515c16.66 19.18-4.377 36.44-4.377 36.44s42.301-21.837 22.874-49.183c-18.144-25.5-32.059-38.172 43.268-81.858 0 0-118.238 29.53-61.765 94.6z" />
    <path fill="#5382A1" d="M233.364 295.442s9.767 8.047-10.757 14.273c-39.026 11.823-162.432 15.393-196.714.471-12.323-5.36 10.787-12.8 18.056-14.362 7.581-1.644 11.914-1.34 11.914-1.34-13.714-9.657-88.612 18.957-38.052 27.16 138.405 22.45 252.435-10.105 215.553-26.202z" />
    <path fill="#5382A1" d="M88.9 190.48s-62.771 14.91-22.228 20.323c17.144 2.324 51.202 1.797 82.994-.906 25.977-2.218 52.065-6.931 52.065-6.931s-9.169 3.928-15.8 8.459c-63.822 16.789-187.015 8.975-151.565-8.197 29.981-14.608 54.534-12.748 54.534-12.748z" />
    <path fill="#E76F00" d="M201.054 253.362c64.872-33.701 34.893-66.05 13.944-61.67-5.126 1.066-7.411 1.99-7.411 1.99s1.903-2.98 5.526-4.27c41.37-14.545 73.19 42.897-13.378 65.647 0 0 1.015-.895 1.319-1.697z" />
    <path fill="#E76F00" d="M162.439.371s35.887 35.9-34.037 91.101c-56.071 44.282-12.786 69.53-.023 98.377-32.738-29.517-56.777-55.494-40.645-79.685C111.684 74.49 176.918 57.32 162.439.37z" />
    <path fill="#5382A1" d="M95.268 344.003c62.277 3.986 157.886-2.212 160.13-31.82 0 0-4.349 11.153-51.437 19.989-53.06 9.994-118.507 8.83-157.342 2.42 0 0 7.95 6.576 48.65 9.41z" />
  </svg>
);

// ── JavaScript ───────────────────────────────────────────────────────────────
export const JavaScriptIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 256 256" aria-hidden="true">
    <rect width="256" height="256" rx="20" fill="#F7DF1E" />
    <path fill="#000000" d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.889-3.092 12.889-15.12v-81.798h24.058v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.994M152.381 211.354l19.588-11.358c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.818-24.558" />
  </svg>
);

// ── React ────────────────────────────────────────────────────────────────────
export const ReactIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none" aria-hidden="true">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

// ── HTML5 (Provided by user) ─────────────────────────────────────────────────
export const Html5Icon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <img
    src="/icons/html5.png"
    alt="HTML5"
    className={`${className} object-contain inline-block`}
    loading="lazy"
  />
);

// ── CSS3 (Provided by user) ──────────────────────────────────────────────────
export const Css3Icon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <img
    src="/icons/css3.png"
    alt="CSS3"
    className={`${className} object-contain inline-block`}
    loading="lazy"
  />
);

// ── MongoDB ──────────────────────────────────────────────────────────────────
export const MongoDbIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 256 549" aria-hidden="true">
    <path fill="#599636" d="M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.704 26.234 5.966 63.988 5.966 63.988h17.045s4.26-37.54 5.965-63.987l1.917-1.494c.213.214 228.828-169.78 31.32-421.677z" />
    <path fill="#6CAC48" d="M128.108 479.627s-43.171-32.34-43.171-168.376c0-64.415 22.795-109.084 43.171-137.173" />
    <path fill="#C2BFBF" d="M134.922 541.98c0 0-1.704-14.92-5.538-28.98v-.427l-1.704-1.066s-4.046 37.753-5.75 63.987h17.044s-.64-5.12-4.052-33.514z" />
  </svg>
);

// ── Git ──────────────────────────────────────────────────────────────────────
export const GitIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 256 256" aria-hidden="true">
    <path fill="#F05032" d="M251.17 116.6L139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.21 29.44 29.44a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.6 19.6 0 1 1-11.75 11.06L137.28 95.5v65.19a19.62 19.62 0 1 1-16.13-.57V94.48a19.61 19.61 0 0 1-10.65-25.73L81.18 39.64 4.83 116a16.49 16.49 0 0 0 0 23.32l111.77 111.77a16.49 16.49 0 0 0 23.32 0L251.17 139.9a16.49 16.49 0 0 0 0-23.3z" />
  </svg>
);

// ── Express ──────────────────────────────────────────────────────────────────
export const ExpressIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c-.013-.442-.013-.883-.013-1.325zm1.12-.256h9.58c-.106-3.985-2.81-6.131-5.348-5.505-3.04.733-4.935 3.469-4.232 5.505z" />
  </svg>
);

// ── Wireshark (Provided by user) ─────────────────────────────────────────────
export const WiresharkIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <img
    src="/icons/wireshark.png"
    alt="Wireshark"
    className={`${className} object-contain inline-block`}
    loading="lazy"
  />
);

// ── Burp Suite ───────────────────────────────────────────────────────────────
export const BurpSuiteIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#FF6633" d="M0 0v24h24V0Zm11.063 3.357h1.874v2.756L10.41 9.2h2.527v3.748h4.579l-4.578 5.592v2.104h-1.876v-2.758l2.528-3.088H11.06V10.05H6.485l4.578-5.59z" />
  </svg>
);

// ── Metasploit (Provided by user) ────────────────────────────────────────────
export const MetasploitIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <img
    src="/icons/metasploit.png"
    alt="Metasploit"
    className={`${className} object-contain inline-block`}
    loading="lazy"
  />
);

// ── Elasticsearch / Elastic Stack (Provided by user) ─────────────────────────
export const ElasticIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <img
    src="/icons/elasticsearch.png"
    alt="Elasticsearch"
    className={`${className} object-contain inline-block`}
    loading="lazy"
  />
);

// ── Splunk ───────────────────────────────────────────────────────────────────
export const SplunkIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect width="24" height="24" rx="5" fill="#09090b" stroke="#27272a" strokeWidth="1" />
    <path
      d="M6.5 6L13 12L6.5 18"
      stroke="#EA0029"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="14.5"
      y1="18"
      x2="18.5"
      y2="18"
      stroke="#65A637"
      strokeWidth="2.8"
      strokeLinecap="round"
    />
  </svg>
);

// ── John the Ripper ──────────────────────────────────────────────────────────
export const JohnTheRipperIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="jtr-bg" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1a060a" />
        <stop offset="100%" stopColor="#080103" />
      </linearGradient>
      <linearGradient id="jtr-skull" x1="8" y1="6" x2="24" y2="26" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="60%" stopColor="#E2E8F0" />
        <stop offset="100%" stopColor="#94A3B8" />
      </linearGradient>
    </defs>
    <rect width="32" height="32" rx="7" fill="url(#jtr-bg)" stroke="#E11D48" strokeWidth="1.2" />
    <path
      d="M8 13.5 C8 9 11.5 5.5 16 5.5 C20.5 5.5 24 9 24 13.5 C24 16.5 22.2 19 19.5 20.2 V23.5 C19.5 24.2 18.8 24.8 18 24.8 H14 C13.2 24.8 12.5 24.2 12.5 23.5 V20.2 C9.8 19 8 16.5 8 13.5 Z"
      fill="url(#jtr-skull)"
    />
    <path d="M7 10 L18 18.5" stroke="#E11D48" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="12.5" cy="14.5" r="2.6" fill="#0F172A" stroke="#E11D48" strokeWidth="1.2" />
    <circle cx="19.5" cy="14.5" r="2.4" fill="#0F172A" />
    <circle cx="19.5" cy="14.5" r="1.1" fill="#EF4444" />
    <path d="M16 17 L15.1 19 H16.9 Z" fill="#0F172A" />
    <line x1="14.3" y1="21.5" x2="14.3" y2="24.2" stroke="#0F172A" strokeWidth="1.2" />
    <line x1="16" y1="21.5" x2="16" y2="24.2" stroke="#0F172A" strokeWidth="1.2" />
    <line x1="17.7" y1="21.5" x2="17.7" y2="24.2" stroke="#0F172A" strokeWidth="1.2" />
    <path
      d="M16 5.5 L17.2 8.8 L15.2 10.5 L17 12.5"
      stroke="#E11D48"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ── Nmap ─────────────────────────────────────────────────────────────────────
export const NmapIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="10" stroke="#2563EB" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="6.5" stroke="#3B82F6" strokeWidth="1.2" strokeDasharray="2 2" />
    <circle cx="12" cy="12" r="3" fill="#60A5FA" />
    <path d="M12 2v20M2 12h20" stroke="#2563EB" strokeWidth="1.2" opacity="0.6" />
    <path d="M12 12l7-7" stroke="#93C5FD" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="16" cy="8" r="1.5" fill="#EF4444" />
  </svg>
);
