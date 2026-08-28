export interface SkillItem {
  id: string;
  name: string;
  category: 'NETWORKING' | 'LINUX' | 'CYBERSECURITY' | 'PROGRAMMING' | 'WEB' | 'SYSTEMS';
  level: number; // 1-100
  proficiency: 'Advanced' | 'Proficient' | 'Intermediate' | 'Core Focus';
  description: string;
  iconName: string;
  tools: string[];
  telemetry: {
    latency: string;
    protocol: string;
    status: string;
  };
}

export const SKILLS_DATA: SkillItem[] = [
  // NETWORKING
  {
    id: 'net-wireshark',
    name: 'Packet Inspection & Wireshark',
    category: 'NETWORKING',
    level: 90,
    proficiency: 'Advanced',
    description: 'Deep PCAP packet analysis, TCP stream reconstruction, dissecting custom payloads, detecting beaconing & data exfiltration.',
    iconName: 'Network',
    tools: ['Wireshark', 'TShark', 'Tcpdump', 'Zeek'],
    telemetry: { latency: '0.4ms', protocol: 'TCP/IP', status: 'ACTIVE_MONITORING' }
  },
  {
    id: 'net-routing',
    name: 'Routing & Switching (OSI Model)',
    category: 'NETWORKING',
    level: 85,
    proficiency: 'Proficient',
    description: 'BGP/OSPF concept modeling, VLAN segmentation, subnetting, NAT, dynamic routing table inspection.',
    iconName: 'Route',
    tools: ['Cisco IOS', 'GNS3', 'Netcat', 'Iperf3'],
    telemetry: { latency: '1.2ms', protocol: 'BGP/OSPF', status: 'SYNCHRONIZED' }
  },
  {
    id: 'net-protocols',
    name: 'Network Protocols & Sockets',
    category: 'NETWORKING',
    level: 88,
    proficiency: 'Advanced',
    description: 'Low-level socket programming in C & Rust, HTTP/2 & HTTP/3 frame parsing, TLS handshake analysis.',
    iconName: 'Server',
    tools: ['Raw Sockets', 'OpenSSL', 'DNS', 'TLS 1.3'],
    telemetry: { latency: '0.8ms', protocol: 'TLS/HTTPS', status: 'SECURE' }
  },

  // LINUX
  {
    id: 'linux-admin',
    name: 'Linux System Administration',
    category: 'LINUX',
    level: 92,
    proficiency: 'Advanced',
    description: 'Kernel tuning, systemd unit management, user/group permission security, SELinux/AppArmor profiles, process management.',
    iconName: 'Terminal',
    tools: ['Debian/Arch/Fedora', 'systemd', 'htop', 'journalctl'],
    telemetry: { latency: '0.1ms', protocol: 'POSIX', status: 'KERNEL_READY' }
  },
  {
    id: 'linux-shell',
    name: 'Bash & Shell Automation',
    category: 'LINUX',
    level: 95,
    proficiency: 'Advanced',
    description: 'Complex shell scripting, regex stream processing (sed/awk), automated incident log parsing, CI pipeline automation.',
    iconName: 'Code',
    tools: ['Bash', 'Zsh', 'Awk', 'Sed', 'Cron'],
    telemetry: { latency: '0.2ms', protocol: 'TTY/ZSH', status: 'EXECUTING' }
  },
  {
    id: 'linux-hardening',
    name: 'OS Hardening & Container Isolation',
    category: 'LINUX',
    level: 86,
    proficiency: 'Proficient',
    description: 'Linux cgroups, namespaces, Docker container security, kernel sysctl security parameters, SSH key governance.',
    iconName: 'ShieldAlert',
    tools: ['Docker', 'Podman', 'UFW/Iptables', 'Chroot'],
    telemetry: { latency: '0.3ms', protocol: 'CGROUPSv2', status: 'HARDENED' }
  },

  // CYBERSECURITY
  {
    id: 'sec-pentest',
    name: 'Offensive Security & Recon',
    category: 'CYBERSECURITY',
    level: 88,
    proficiency: 'Advanced',
    description: 'Network mapping, active/passive OSINT, vulnerability assessments, Metasploit framework exploitation mechanics.',
    iconName: 'Crosshair',
    tools: ['Nmap', 'Burp Suite', 'Metasploit', 'Gobuster'],
    telemetry: { latency: '2.1ms', protocol: 'RECON_V2', status: 'SCANNING' }
  },

  {
    id: 'sec-threat',
    name: 'Threat Modeling & Risk Defense',
    category: 'CYBERSECURITY',
    level: 85,
    proficiency: 'Proficient',
    description: 'STRIDE framework analysis, attack path graph construction, credential theft mitigation, defense-in-depth architecture.',
    iconName: 'Lock',
    tools: ['STRIDE', 'MITRE ATT&CK', 'SIEM', 'Suricata'],
    telemetry: { latency: '0.5ms', protocol: 'ATT&CK_MAP', status: 'VERIFIED' }
  },
  {
    id: 'sec-crypto',
    name: 'Applied Cryptography',
    category: 'CYBERSECURITY',
    level: 82,
    proficiency: 'Proficient',
    description: 'Symmetric/Asymmetric encryption algorithms (AES-GCM, RSA, ECC), cryptographic hashing (SHA-256, Argon2), PKI.',
    iconName: 'Key',
    tools: ['Libsodium', 'OpenSSL', 'JWT', 'GPG'],
    telemetry: { latency: '0.2ms', protocol: 'AES-256-GCM', status: 'ENCRYPTED' }
  },

  // PROGRAMMING
  {
    id: 'prog-cpp',
    name: 'C / C++ Systems Programming',
    category: 'PROGRAMMING',
    level: 87,
    proficiency: 'Advanced',
    description: 'Manual memory management, pointers/references, data structures, low-level OS interfaces, buffer overflow analysis.',
    iconName: 'Cpu',
    tools: ['GCC/Clang', 'Valgrind', 'GDB', 'Make/CMake'],
    telemetry: { latency: '0.05ms', protocol: 'NATIVE_BIN', status: 'COMPILED' }
  },
  {
    id: 'prog-rust',
    name: 'Rust Systems & Security',
    category: 'PROGRAMMING',
    level: 80,
    proficiency: 'Intermediate',
    description: 'Ownership & borrowing memory safety, safe concurrency, building high-speed network CLI utilities.',
    iconName: 'Zap',
    tools: ['Cargo', 'Tokio', 'Serde', 'Clap'],
    telemetry: { latency: '0.08ms', protocol: 'RUSTC', status: 'ZERO_COST' }
  },
  {
    id: 'prog-ts',
    name: 'TypeScript & JavaScript',
    category: 'PROGRAMMING',
    level: 92,
    proficiency: 'Advanced',
    description: 'Strict type systems, asynchronous event loops, custom AST transformations, high-performance web runtime logic.',
    iconName: 'FileCode',
    tools: ['TypeScript', 'Node.js', 'ESNext', 'Bun'],
    telemetry: { latency: '0.3ms', protocol: 'V8_AST', status: 'TYPE_SAFE' }
  },

  // WEB
  {
    id: 'web-next',
    name: 'Next.js & Modern React',
    category: 'WEB',
    level: 90,
    proficiency: 'Advanced',
    description: 'App Router architecture, Server Components, SSR/ISR optimization, dynamic streaming interfaces, Motion animations.',
    iconName: 'Globe',
    tools: ['Next.js 14', 'React 18', 'Tailwind', 'Framer Motion'],
    telemetry: { latency: '12ms', protocol: 'HTTP/3_PUSH', status: 'RENDERED' }
  },
  {
    id: 'web-security',
    name: 'Web Application Security',
    category: 'WEB',
    level: 89,
    proficiency: 'Advanced',
    description: 'Mitigating OWASP Top 10 vulnerabilities (XSS, CSRF, SQLi, SSRF), CSP header hardening, CORS policies, secure cookies.',
    iconName: 'ShieldCheck',
    tools: ['Burp Suite', 'OWASP ZAP', 'CSP', 'OAuth 2.0'],
    telemetry: { latency: '1.0ms', protocol: 'HEADERS_STRICT', status: 'HARDENED' }
  },

  // SYSTEMS
  {
    id: 'sys-arch',
    name: 'Computer Architecture & OS Internal',
    category: 'SYSTEMS',
    level: 84,
    proficiency: 'Proficient',
    description: 'CPU register set mechanics, cache hierarchy (L1/L2/L3), paging, virtual memory translation, interrupt handlers.',
    iconName: 'Binary',
    tools: ['x86_64', 'ARM64', 'GDB', 'QEMU'],
    telemetry: { latency: '0.01ms', protocol: 'SYS_CALL', status: 'INTERRUPT_OK' }
  },
  {
    id: 'sys-git',
    name: 'Git & Linux Workflow',
    category: 'SYSTEMS',
    level: 94,
    proficiency: 'Advanced',
    description: 'Advanced Git rebase, cherry-pick, submodules, sign commits with GPG, automated releases & GitHub Actions pipelines.',
    iconName: 'GitBranch',
    tools: ['Git', 'GPG', 'GitHub Actions', 'Vim/Neovim'],
    telemetry: { latency: '0.2ms', protocol: 'SSH_GIT', status: 'VERIFIED_COMMIT' }
  }
];
