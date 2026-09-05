export interface ProjectItem {
  number: string;
  id: string;
  title: string;
  subtitle: string;
  category: 'Cybersecurity' | 'Systems' | 'Networking' | 'Strategy';
  description: string;
  image: string;
  imageFit?: 'cover' | 'contain';
  technologies: string[];
  problem: string;
  solution: string;
  architectureDetails: string[];
  githubUrl?: string;
  demoUrl?: string;
  status: 'Production' | 'Active Development' | 'Research Prototype';
  metrics: { label: string; value: string }[];
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    number: '01',
    id: 'citadel-db',
    title: 'CitadelDB',
    subtitle: 'Stateless Cybersecurity Threat Intelligence Platform',
    category: 'Cybersecurity',
    description: 'Production-grade cybersecurity threat intelligence platform for security researchers, SOC analysts, students, blue teamers, and penetration testers to investigate vulnerabilities and analyze intelligence from a single stateless portal.',
    image: '/images/citadeldb_official.png',
    imageFit: 'cover',
    technologies: ['React', 'Vite', 'TailwindCSS', 'Recharts', 'Node.js', 'Express', 'GROQ SDK (Llama 3.3 70B)', 'NVD API', 'MITRE ATT&CK STIX'],
    problem: 'Cybersecurity analysts require stateless threat investigation tools without persistent database overhead or user tracking risks.',
    solution: 'Engineered a unified threat intelligence portal leveraging GROQ Llama 3.3 AI, NVD CVE feeds, MITRE ATT&CK STIX, and IOC analysis.',
    architectureDetails: [
      'Threat Intelligence Dashboard & CVE Center: Live NVD CVE vulnerability data, trend charts, and deep inspection.',
      'AI Threat Analyst & Explainer: GROQ-powered Llama 3.3 70B Versatile automated threat reports and visual attack-flow diagrams.',
      'Security News Center & MITRE ATT&CK: RSS aggregation with AI summaries and interactive tactics, techniques & defenses browsing.',
      'IOC Analysis & Security Toolkit: Real-time IP, domain, URL, and hash analysis alongside CVSS, hash, URL, and header utilities.',
      'AI Cybersecurity Assistant: Focused security chatbot for rapid incident triage and advisory.'
    ],
    demoUrl: 'https://citadel-db.vercel.app',
    status: 'Production',
    metrics: [
      { label: 'AI Engine', value: 'Llama 3.3 70B' },
      { label: 'Intelligence', value: 'NVD & MITRE' },
      { label: 'Portal Type', value: 'Stateless' }
    ]
  },
  {
    number: '02',
    id: 'deauth-defense',
    title: 'Deauth-Defense',
    subtitle: 'Linux Wi-Fi 802.11 Deauth Attack Detector & Defense CLI',
    category: 'Cybersecurity',
    description: 'Linux-based Wi-Fi protection utility engineered to detect raw 802.11 deauthentication and disassociation frame injection attacks in real time across Monitor and Managed modes, featuring automated defense actions and custom rufuzz CLI launcher.',
    image: '/images/deauth_defense.png',
    imageFit: 'contain',
    technologies: ['Python 3', 'Scapy', 'Linux 802.11', 'airmon-ng', 'iw', 'NetworkManager', 'Bash'],
    problem: '802.11 wireless clients are vulnerable to rogue deauthentication and disassociation frame injection attacks that disrupt network connectivity without built-in telemetry.',
    solution: 'Engineered a dual-mode Python/Scapy detection utility supporting monitor-mode raw frame capture, managed-mode connectivity fallback, tiered attack alerting, incident logging, and automated interface restoration.',
    architectureDetails: [
      'Monitor Mode Packet Capture: Scapy-powered 802.11 frame sniffer capturing deauth & disassociation frames directly off the air.',
      'Managed Mode Fallback Engine: Observes client connectivity telemetry and catches repeated disconnect events when monitor mode is unavailable.',
      'Tiered Alerting & Active Defense: Real-time styled CLI alerts with threshold-based attack classification and automated local defense triggering.',
      'Incident Logging & Forensics: Structured recording of detected attack vectors, MAC signatures, and timestamps to logs/attacks.log.',
      'Automated Interface Restoration: Clean teardown script restoring managed wireless state and NetworkManager services on exit.',
      'System-Wide rufuzz Entrypoint: Automated setup script creating executable symlinks at /usr/local/bin/rufuzz for instantaneous execution.'
    ],
    githubUrl: 'https://github.com/Jebin123Rufus/Deauth-Defense',
    status: 'Production',
    metrics: [
      { label: 'Detection Modes', value: 'Monitor & Managed' },
      { label: 'Core Engine', value: 'Python / Scapy' },
      { label: 'CLI Launcher', value: 'rufuzz' }
    ]
  }
];
