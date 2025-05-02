
import React from 'react';
import Logo from '@/components/Logo';
import SearchBar from '@/components/SearchBar';
import SourceScanner from '@/components/SourceScanner';
import SearchResults from '@/components/SearchResults';
import Footer from '@/components/Footer';
import UserMenu from '@/components/UserMenu';
import HistorySidebar from '@/components/HistorySidebar';
import { SidebarProvider } from '@/components/ui/sidebar/sidebar-context';
import { useSearch } from '@/hooks/useSearch';
import WelcomePage from '@/components/WelcomePage';

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
    <SidebarProvider className="flex min-h-svh w-full">
      <HistorySidebar />
      <div className="flex-1 flex flex-col items-center relative px-4">
        <UserMenu />
        <div className={`w-full max-w-2xl mx-auto ${!result ? 'mt-32' : 'mt-8'} mb-20`}>
          <Logo />
          <SearchBar
            query={query}
            setQuery={setQuery}
            onSearch={search}
            onFeelingCurious={feelingCurious}
            isSearching={isSearching}
            buttonText={result ? "New Search" : "Search"}
          />
          {!result && !isSearching && (
            <WelcomePage />
          )}
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
    </SidebarProvider>
  );
};

export default Index;
