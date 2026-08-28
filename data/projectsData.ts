export interface ProjectItem {
  number: string;
  id: string;
  title: string;
  subtitle: string;
  category: 'Cybersecurity' | 'Systems' | 'Networking' | 'Strategy';
  description: string;
  technologies: string[];
  problem: string;
  solution: string;
  architectureDetails: string[];
  githubUrl: string;
  demoUrl?: string;
  status: 'Production' | 'Active Development' | 'Research Prototype';
  metrics: { label: string; value: string }[];
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    number: '01',
    id: 'aegis-netpulse',
    title: 'Aegis NetPulse',
    subtitle: 'High-Throughput Packet Inspector & Anomaly Detection Engine',
    category: 'Networking',
    description: 'A real-time network traffic inspector designed to capture raw Ethernet frames, analyze protocol distributions, and flag port scans or anomaly patterns in under 1 millisecond.',
    technologies: ['Rust', 'Raw Sockets', 'React', 'TypeScript', 'Tailwind CSS', 'WebSockets'],
    problem: 'Standard packet analysis tools like GUI Wireshark consume significant memory during sustained gigabit network captures, making live headless telemetry hard to parse on edge hardware.',
    solution: 'Engineered a Rust daemon using eBPF / Libpcap bindings that streams filtered packet telemetry to a sleek reactive web dashboard via low-overhead WebSockets.',
    architectureDetails: [
      'Zero-copy packet decoding pipeline utilizing Rust ring-buffers.',
      'Sliding window frequency analyzer to identify stealthy TCP SYN port scans.',
      'Web interface with real-time bandwidth sparklines and payload preview.'
    ],
    githubUrl: 'https://github.com/rufuzz/aegis-netpulse',
    demoUrl: '#',
    status: 'Production',
    metrics: [
      { label: 'Packet Throughput', value: '1.2M pps' },
      { label: 'Parse Latency', value: '< 0.45ms' },
      { label: 'Zero-Copy Overhead', value: '0.02%' }
    ]
  },
  {
    number: '02',
    id: 'vaultsec-cli',
    title: 'VaultSec CLI',
    subtitle: 'Zero-Trust Local Secret Vault with Argon2 Key Derivation',
    category: 'Cybersecurity',
    description: 'A zero-dependency Linux command-line password and API key manager with hardware-bound encryption key derivation and memory scrubbing.',
    technologies: ['C++', 'OpenSSL', 'Linux PAM', 'Argon2id', 'AES-256-GCM'],
    problem: 'Storing development API keys and environment credentials in plain text or standard dotfiles creates massive risk during supply-chain attacks or compromised developer machines.',
    solution: 'Built a C++ binary utilizing Argon2id hashing for key derivation, memory-locked pages (`mlock`) to prevent secret swapping to disk, and AES-256-GCM for authenticated encryption.',
    architectureDetails: [
      'Enforces POSIX `mlock()` to prevent sensitive memory blocks from dumping into swap files.',
      'Integrates with Linux PAM for biometric and local user password authentication.',
      'Automatic clipboard auto-wipe timer after 15 seconds of payload copy.'
    ],
    githubUrl: 'https://github.com/rufuzz/vaultsec-cli',
    status: 'Production',
    metrics: [
      { label: 'KDF Iterations', value: 'Argon2id 64MB' },
      { label: 'Encryption Standard', value: 'AES-256-GCM' },
      { label: 'Memory Lock Guarantee', value: '100% mlock()' }
    ]
  },
  {
    number: '03',
    id: 'cyberlab-topology',
    title: 'CyberLab Sandbox Orchestrator',
    subtitle: 'Automated Containerized PenTest Environment Topology Builder',
    category: 'Systems',
    description: 'Declarative CLI tool to instantly spin up isolated multi-node vulnerable network topologies in Docker containers for red-team CTF exercises and security research.',
    technologies: ['Go', 'Docker API', 'Bash', 'Linux Bridge', 'YAML'],
    problem: 'Setting up multi-subnet test environments with vulnerable services, router nodes, and monitoring agents manually takes hours of network bridge configuration.',
    solution: 'Designed a lightweight orchestrator that parses single YAML topology definitions and provisions isolated network namespaces, bridges, and vulnerable target containers in seconds.',
    architectureDetails: [
      'Custom veth pair linking and IP subnet routing inside Linux kernel namespaces.',
      'Built-in Traffic Shaper to emulate high-latency WAN links and packet drop scenarios.',
      'Exportable Wireshark PCAP recording of all intra-container subnet communication.'
    ],
    githubUrl: 'https://github.com/rufuzz/cyberlab-topology',
    demoUrl: '#',
    status: 'Active Development',
    metrics: [
      { label: 'Provisioning Time', value: '< 3.2 seconds' },
      { label: 'Supported Topologies', value: 'Subnet Mesh' },
      { label: 'Kernel overhead', value: 'Negligible' }
    ]
  },
  {
    number: '04',
    id: 'chess-eval-engine',
    title: 'Grandmaster Tactics Visualizer',
    subtitle: 'Wasm-Powered Chess Position Evaluator & Threat Heatmap',
    category: 'Strategy',
    description: 'An interactive chess engine visualizer that highlights controlled squares, tactical weaknesses, and strategic line branches to demonstrate pattern recognition in complex decision trees.',
    technologies: ['TypeScript', 'Chess.js', 'Next.js', 'Canvas API', 'Web Workers'],
    problem: 'Standard chess GUIs present engine evaluation numbers without explaining why specific tactical moves control key diagonals or defend critical outpost squares.',
    solution: 'Developed a custom board overlay engine that computes tactical piece influence maps, king safety indices, and pawn structure weaknesses in real time.',
    architectureDetails: [
      'Bitboard representation for ultra-fast alpha-beta pruning search tree.',
      'Heatmap overlay rendering square control matrices directly onto the SVG/Canvas board.',
      'Direct mapping between chess positional calculation and cybersecurity attack graph analysis.'
    ],
    githubUrl: 'https://github.com/rufuzz/chess-tactics-visualizer',
    demoUrl: '#',
    status: 'Production',
    metrics: [
      { label: 'Search Speed', value: '450k NPS' },
      { label: 'Tactical Overlay', value: 'Real-time' },
      { label: 'Wasm Acceleration', value: 'Enabled' }
    ]
  }
];
