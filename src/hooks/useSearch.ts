
import { useState } from 'react';

// Mock data for search results
const MOCK_SOURCES = [
  'https://example.com/quantum-computing-basics',
  'https://academy.edu/quantum-mechanics/introduction',
  'https://research.org/papers/quantum-tunneling-observed',
  'https://science-daily.com/breakthrough-quantum-physics',
  'https://tech-review.com/future-quantum-computing',
  'https://university.edu/physics/quantum-theory',
  'https://quantum-institute.org/research/tunneling',
  'https://physics-journal.com/quantum-phenomena',
  'https://encyclopedia.org/quantum-mechanics',
  'https://science-magazine.com/quantum-breakthroughs'
];

const MOCK_RESULT = {
  tldr: "Quantum tunneling allows particles to pass through energy barriers and occurs regularly at room temperature in everyday devices like transistors.",
  answer: "Quantum tunneling is a quantum mechanical phenomenon where particles pass through energy barriers that would be impossible in classical physics [1]. This effect occurs when a particle's wave function extends beyond a barrier, giving it a probability of appearing on the other side [3]. Remarkably, tunneling happens regularly at room temperature [2] and is essential for numerous technologies, including tunnel diodes, scanning tunneling microscopes, and modern transistors [4]. Without tunneling, many electronic devices would cease functioning [5].",
  citations: [
    {
      id: 1,
      title: "Introduction to Quantum Mechanics: Tunneling Phenomenon",
      url: "https://academy.edu/quantum-mechanics/introduction"
    },
    {
      id: 2,
      title: "Quantum Tunneling Observed at Room Temperature",
      url: "https://research.org/papers/quantum-tunneling-observed"
    },
    {
      id: 3,
      title: "Quantum Physics: Wave-Particle Duality Explained",
      url: "https://encyclopedia.org/quantum-mechanics"
    },
    {
      id: 4,
      title: "Applications of Quantum Tunneling in Modern Technology",
      url: "https://tech-review.com/future-quantum-computing"
    },
    {
      id: 5,
      title: "Everyday Quantum Phenomena in Electronic Devices",
      url: "https://physics-journal.com/quantum-phenomena"
    }
  ]
};

// Random questions for "I'm Feeling Curious"
const RANDOM_QUESTIONS = [
  "How does quantum tunneling work?",
  "What causes the northern lights?",
  "How do black holes evaporate?",
  "Why is the sky blue?",
  "How do noise canceling headphones work?",
  "What causes déjà vu?",
  "How does GPS calculate your position?",
  "What is dark matter?",
  "How do vaccines create immunity?",
  "Why can't we tickle ourselves?"
];

export const useSearch = () => {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [sources, setSources] = useState<string[]>([]);
  const [searchComplete, setSearchComplete] = useState(false);
  const [result, setResult] = useState<{
    tldr: string;
    answer: string;
    citations: {
      id: number;
      title: string;
      url: string;
    }[];
  } | null>(null);

  const search = async () => {
    if (!query.trim() || isSearching) return;
    
    setIsSearching(true);
    setSources([]);
    setResult(null);
    setSearchComplete(false);
    
    // Simulate source scanning with delays
    for (let i = 0; i < MOCK_SOURCES.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 300));
      setSources(prev => [...prev, MOCK_SOURCES[i]]);
    }
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSearchComplete(true);
    
    // Show results after sources fade out
    setTimeout(() => {
      setResult(MOCK_RESULT);
      setIsSearching(false);
    }, 600);
  };

  const feelingCurious = () => {
    const randomQuestion = RANDOM_QUESTIONS[Math.floor(Math.random() * RANDOM_QUESTIONS.length)];
    setQuery(randomQuestion);
    setTimeout(() => {
      search();
    }, 100);
  };

  return {
    query,
    setQuery,
    isSearching,
    sources,
    searchComplete,
    result,
    search,
    feelingCurious
  };
};
