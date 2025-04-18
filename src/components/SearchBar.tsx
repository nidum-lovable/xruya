
import React, { useRef, useEffect } from 'react';

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
  onSearch: () => void;
  onFeelingCurious: () => void;
  isSearching: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  query,
  setQuery,
  onSearch,
  onFeelingCurious,
  isSearching
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus on the search bar when the component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-6">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="w-full flex mb-4">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:border-google-blue"
            disabled={isSearching}
          />
        </div>
        <div className="flex space-x-2">
          <button 
            type="submit"
            className="google-button"
            disabled={isSearching || !query.trim()}
          >
            Search
          </button>
          <button 
            type="button"
            className="google-button"
            onClick={onFeelingCurious}
            disabled={isSearching}
          >
            I'm Feeling Curious
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
