
import React, { useEffect, useRef } from 'react';

interface SourceScannerProps {
  sources: string[];
  isComplete: boolean;
}

const SourceScanner: React.FC<SourceScannerProps> = ({ sources, isComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom when new sources are added
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [sources]);

  // Format URL to show domain and first 30 chars of path
  const formatUrl = (url: string) => {
    try {
      const urlObj = new URL(url);
      const domain = urlObj.hostname;
      const path = urlObj.pathname.substring(0, 30) + (urlObj.pathname.length > 30 ? '...' : '');
      return `${domain}${path}`;
    } catch (e) {
      return url.substring(0, 40) + (url.length > 40 ? '...' : '');
    }
  };

  if (sources.length === 0 && !isComplete) {
    return null;
  }

  return (
    <div className={`w-full max-w-2xl mx-auto mt-6 ${isComplete ? 'animate-slide-up' : ''}`}>
      <div className="border border-gray-300 rounded p-4">
        <h2 className="text-lg font-mono mb-2">Scanning sources...</h2>
        <div 
          ref={containerRef}
          className="font-mono text-sm max-h-60 overflow-y-auto"
        >
          {sources.map((source, index) => (
            <div key={index} className="py-1 border-b border-gray-200 last:border-b-0">
              {index + 1}. {formatUrl(source)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SourceScanner;
