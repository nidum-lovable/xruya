
import React from 'react';
import Logo from '@/components/Logo';
import SearchBar from '@/components/SearchBar';
import SourceScanner from '@/components/SourceScanner';
import SearchResults from '@/components/SearchResults';
import Footer from '@/components/Footer';
import { useSearch } from '@/hooks/useSearch';

const Index = () => {
  const {
    query,
    setQuery,
    isSearching,
    sources,
    searchComplete,
    result,
    search,
    feelingCurious
  } = useSearch();

  return (
    <div className="min-h-screen flex flex-col items-center relative px-4">
      <div className={`w-full max-w-2xl mx-auto ${!result ? 'mt-32' : 'mt-8'} mb-20`}>
        <Logo />
        <SearchBar
          query={query}
          setQuery={setQuery}
          onSearch={search}
          onFeelingCurious={feelingCurious}
          isSearching={isSearching}
        />
        <SourceScanner 
          sources={sources} 
          isComplete={searchComplete} 
        />
        {result && (
          <SearchResults 
            tldr={result.tldr}
            answer={result.answer}
            citations={result.citations}
            isVisible={!!result}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Index;
