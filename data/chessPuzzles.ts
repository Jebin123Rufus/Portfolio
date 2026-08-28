export interface ChessPuzzle {
  id: string;
  title: string;
  fen: string; // Forsyth-Edwards Notation
  turn: 'w' | 'b';
  solutionMove: { from: string; to: string };
  hint: string;
  strategicParallel: string;
  explanation: string;
  securityAnalogy: string;
}

export const CHESS_PUZZLES: ChessPuzzle[] = [
  {
    id: 'puzzle-tactical-pin',
    title: 'Puzzle #01: Tactical Pin & Overloaded Defender',
    fen: 'r1b2rk1/pp3ppp/2n5/1B1p4/3P4/2P2N2/P4PPP/R3R1K1 w - - 0 15',
    turn: 'w',
    solutionMove: { from: 'b5', to: 'c6' },
    hint: 'White to move. Neutralize the key defensive knight pinning Black to the queenside structure.',
    strategicParallel: 'Targeting the single point of failure in a system before launching an attack.',
    explanation: 'By capturing c6, White forces Black to accept isolated pawn weaknesses or lose tactical coordination across the c-file.',
    securityAnalogy: 'In vulnerability research, eliminating a single authentication layer forces the remaining defense architecture into exposed fallbacks.'
  },
  {
    id: 'puzzle-fork-exploit',
    title: 'Puzzle #02: Knight Fork (Multi-Vector Threat)',
    fen: 'r2qk2r/ppp2ppp/2n5/3np3/2B5/2P2Q1P/P1PP1PP1/R1B2RK1 w kq - 0 10',
    turn: 'w',
    solutionMove: { from: 'f3', to: 'd5' },
    hint: 'White to move. Utilize queen tactical positioning to strike exposed central targets.',
    strategicParallel: 'Creating simultaneous dilemmas where defense cannot cover both entry vectors.',
    explanation: 'Queen takes on d5 immediately exploits Black\'s uncoordinated central defense, threatening both f7 checkmate and capturing free material.',
    securityAnalogy: 'A dual-vector attack forces incident responders to choose between mitigating data exfiltration or preserving service availability.'
  },
  {
    id: 'puzzle-back-rank',
    title: 'Puzzle #03: Back-Rank Vulnerability (Missing Guard)',
    fen: '3r2k1/5ppp/8/8/8/8/5PPP/3R2K1 w - - 0 1',
    turn: 'w',
    solutionMove: { from: 'd1', to: 'd8' },
    hint: 'White to move. Exploit the un-defended back rank for an immediate checkmate.',
    strategicParallel: 'Capitalizing on unmonitored legacy infrastructure.',
    explanation: 'Rook to d8 delivers back-rank checkmate because Black\'s pawns prevent the king from escaping forward, and Black has no defensive rooks left to interpose.',
    securityAnalogy: 'Leaving an legacy internal API port open without egress filtering allows an attacker to bypass all perimeter defenses straight to root access.'
  }
];

export const CHESS_PARALLELS = [
  {
    title: 'Calculation & Deep Search',
    chessConcept: 'Calculating 4-6 moves deep in high-complexity tactical positions.',
    systemsConcept: 'Predicting execution paths, call stack unwinding, and concurrency race conditions.',
    quote: 'Calculation without evaluation is blind; evaluation without calculation is impotent.'
  },
  {
    title: 'Pattern Recognition',
    chessConcept: 'Spotting Tactical Motifs (pins, forks, skewers, weak back-ranks) in seconds.',
    systemsConcept: 'Identifying anomaly signatures in raw PCAP dumps or suspicious log spikes immediately.',
    quote: 'Tactics is knowing what to do when there is something to do; strategy is knowing what to do when there is nothing to do.'
  },
  {
    title: 'Defense in Depth',
    chessConcept: 'Over-protecting key squares, maintaining pawn structure integrity, and keeping piece harmony.',
    systemsConcept: 'Zero-trust architecture, multi-factor auth, least-privilege permissions, and network segmentation.',
    quote: 'A weak square is like a unpatched zero-day—it eventually becomes the gateway for total penetration.'
  },
  {
    title: 'Proactive Initiative vs. Reactive Defense',
    chessConcept: 'Seizing the initiative forces opponent into responding to your threats rather than building their plan.',
    systemsConcept: 'Active threat hunting, red-teaming, and defensive hardening before an incident occurs.',
    quote: 'The best defense is a well-orchestrated threat model that dictates the terms of engagement.'
  }
];
