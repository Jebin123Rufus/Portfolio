export type SkillCategory =
  | 'NETWORKING'
  | 'LINUX'
  | 'CYBERSECURITY'
  | 'PROGRAMMING'
  | 'WEB DEVELOPMENT'
  | 'SYSTEMS'
  | 'TOOLS & VERSION CONTROL';

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  iconName: string;
}

export const SKILLS_DATA: SkillItem[] = [
  // ── NETWORKING ─────────────────────────────────────────────────────────────
  {
    id: 'net-virtual',
    name: 'Virtual Networking',
    category: 'NETWORKING',
    iconName: 'Network',
  },
  {
    id: 'net-nmap',
    name: 'Network Reconnaissance — Nmap',
    category: 'NETWORKING',
    iconName: 'NmapIcon',
  },
  {
    id: 'net-wireshark',
    name: 'Packet Inspection — Wireshark',
    category: 'NETWORKING',
    iconName: 'WiresharkIcon',
  },
  {
    id: 'net-subnetting',
    name: 'IP Addressing & Subnetting',
    category: 'NETWORKING',
    iconName: 'Route',
  },
  {
    id: 'net-protocols',
    name: 'Networking Foundations & Protocols',
    category: 'NETWORKING',
    iconName: 'Server',
  },

  // ── LINUX ──────────────────────────────────────────────────────────────────
  {
    id: 'linux-cli',
    name: 'Linux CLI',
    category: 'LINUX',
    iconName: 'Terminal',
  },
  {
    id: 'linux-admin',
    name: 'Linux System Administration',
    category: 'LINUX',
    iconName: 'ServerCog',
  },
  {
    id: 'linux-bash',
    name: 'Bash & Shell Scripting',
    category: 'LINUX',
    iconName: 'Code',
  },

  // ── CYBERSECURITY ──────────────────────────────────────────────────────────
  {
    id: 'sec-pentest',
    name: 'Penetration Testing',
    category: 'CYBERSECURITY',
    iconName: 'Crosshair',
  },
  {
    id: 'sec-webapp',
    name: 'Web Application Security',
    category: 'CYBERSECURITY',
    iconName: 'ShieldCheck',
  },
  {
    id: 'sec-ai',
    name: 'AI/LLM Security',
    category: 'CYBERSECURITY',
    iconName: 'BrainCircuit',
  },
  {
    id: 'sec-cve',
    name: 'Vulnerability Research & CVE Analysis',
    category: 'CYBERSECURITY',
    iconName: 'Bug',
  },
  {
    id: 'sec-threat',
    name: 'Threat Intelligence',
    category: 'CYBERSECURITY',
    iconName: 'Radar',
  },
  {
    id: 'sec-research',
    name: 'Security Research',
    category: 'CYBERSECURITY',
    iconName: 'ScanSearch',
  },
  {
    id: 'sec-siem',
    name: 'SIEM & Security Monitoring',
    category: 'CYBERSECURITY',
    iconName: 'MonitorDot',
  },
  {
    id: 'sec-burp',
    name: 'Burp Suite',
    category: 'CYBERSECURITY',
    iconName: 'BurpSuiteIcon',
  },
  {
    id: 'sec-metasploit',
    name: 'Metasploit Framework',
    category: 'CYBERSECURITY',
    iconName: 'MetasploitIcon',
  },
  {
    id: 'sec-jtr',
    name: 'John the Ripper',
    category: 'CYBERSECURITY',
    iconName: 'JohnTheRipperIcon',
  },
  {
    id: 'sec-elastic',
    name: 'Elasticsearch / Elastic Stack',
    category: 'CYBERSECURITY',
    iconName: 'ElasticIcon',
  },
  {
    id: 'sec-splunk',
    name: 'Splunk',
    category: 'CYBERSECURITY',
    iconName: 'SplunkIcon',
  },
  {
    id: 'sec-scripting',
    name: 'Custom Scripting & Tool Automation',
    category: 'CYBERSECURITY',
    iconName: 'FileCode',
  },
  {
    id: 'sec-cli',
    name: 'CLI Tool Development',
    category: 'CYBERSECURITY',
    iconName: 'TerminalSquare',
  },

  // ── PROGRAMMING ────────────────────────────────────────────────────────────
  {
    id: 'prog-java',
    name: 'Java (Core)',
    category: 'PROGRAMMING',
    iconName: 'JavaIcon',
  },
  {
    id: 'prog-python',
    name: 'Python (Pentesting & Automation)',
    category: 'PROGRAMMING',
    iconName: 'PythonIcon',
  },
  {
    id: 'prog-js',
    name: 'JavaScript',
    category: 'PROGRAMMING',
    iconName: 'JavaScriptIcon',
  },

  // ── WEB DEVELOPMENT ────────────────────────────────────────────────────────
  {
    id: 'web-fullstack',
    name: 'Full-Stack Web Development',
    category: 'WEB DEVELOPMENT',
    iconName: 'Layers',
  },
  {
    id: 'web-secure',
    name: 'Secure Web Design',
    category: 'WEB DEVELOPMENT',
    iconName: 'ShieldAlert',
  },
  {
    id: 'web-rest',
    name: 'REST API Development',
    category: 'WEB DEVELOPMENT',
    iconName: 'Globe',
  },
  {
    id: 'web-api',
    name: 'API Integration',
    category: 'WEB DEVELOPMENT',
    iconName: 'Link',
  },
  {
    id: 'web-ai',
    name: 'AI Integration',
    category: 'WEB DEVELOPMENT',
    iconName: 'Bot',
  },
  {
    id: 'web-react',
    name: 'React.js',
    category: 'WEB DEVELOPMENT',
    iconName: 'ReactIcon',
  },
  {
    id: 'web-express',
    name: 'Express.js',
    category: 'WEB DEVELOPMENT',
    iconName: 'ExpressIcon',
  },
  {
    id: 'web-html',
    name: 'HTML5',
    category: 'WEB DEVELOPMENT',
    iconName: 'Html5Icon',
  },
  {
    id: 'web-css',
    name: 'CSS3',
    category: 'WEB DEVELOPMENT',
    iconName: 'Css3Icon',
  },
  {
    id: 'web-mongo',
    name: 'MongoDB',
    category: 'WEB DEVELOPMENT',
    iconName: 'MongoDbIcon',
  },

  // ── SYSTEMS ────────────────────────────────────────────────────────────────
  {
    id: 'sys-arch',
    name: 'System Architecture',
    category: 'SYSTEMS',
    iconName: 'Binary',
  },
  {
    id: 'sys-virt',
    name: 'Virtualization',
    category: 'SYSTEMS',
    iconName: 'Database',
  },
  {
    id: 'sys-isolation',
    name: 'System Isolation & Trust Boundaries',
    category: 'SYSTEMS',
    iconName: 'Lock',
  },
  {
    id: 'sys-multienv',
    name: 'Multi-System Environment Design',
    category: 'SYSTEMS',
    iconName: 'Network',
  },

  // ── TOOLS & VERSION CONTROL ────────────────────────────────────────────────
  {
    id: 'tool-git',
    name: 'Git',
    category: 'TOOLS & VERSION CONTROL',
    iconName: 'GitIcon',
  },
  {
    id: 'tool-github',
    name: 'GitHub',
    category: 'TOOLS & VERSION CONTROL',
    iconName: 'GithubIcon',
  },
];
