
import React from 'react';

interface Citation {
  id: number;
  title: string;
  url: string;
}

interface SearchResultsProps {
  tldr: string;
  answer: string;
  citations: Citation[];
  isVisible: boolean;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  tldr,
  answer,
  citations,
  isVisible
}) => {
  if (!isVisible) {
    return null;
  }

  // Process answer to include citation references
  const processedAnswer = answer.replace(/\[(\d+)\]/g, '[$1]');

  return (
    <div className={`w-full max-w-2xl mx-auto mt-8 ${isVisible ? 'animate-fade-in' : 'hidden'}`}>
      <div className="text-left">
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">TL;DR:</h2>
          <p>{tldr}</p>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Answer:</h2>
          <p className="mb-4">{processedAnswer}</p>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-2">Sources:</h3>
          <ol className="list-decimal list-inside">
            {citations.map(citation => (
              <li key={citation.id} className="mb-1">
                <a 
                  href={citation.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="google-link"
                >
                  {citation.title}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
