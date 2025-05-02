
import React, { useState } from 'react';
import { Share2, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

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
  const { toast } = useToast();
  const [favorite, setFavorite] = useState(false);
  
  if (!isVisible) {
    return null;
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      description: "Link copied to clipboard!",
    });
  };

  const handleFavorite = () => {
    setFavorite(!favorite);
    toast({
      description: favorite ? "Removed from favorites" : "Added to favorites",
    });
  };

  // Process answer to include citation references
  const processedAnswer = answer.replace(/\[(\d+)\]/g, '[$1]');

  return (
    <div className={`w-full max-w-2xl mx-auto mt-8 ${isVisible ? 'animate-fade-in' : 'hidden'}`}>
      <div className="text-left">
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold mb-2">TL;DR:</h2>
            <div className="flex gap-2">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleFavorite}
                className={favorite ? "text-red-500 hover:text-red-500" : ""}
              >
                <Heart 
                  className={`w-4 h-4 mr-2 ${favorite ? "fill-red-500" : ""}`} 
                />
                {favorite ? "Favorited" : "Favorite"}
              </Button>
              <Button variant="ghost" size="sm" onClick={handleShare}>
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
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
