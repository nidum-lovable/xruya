
import React, { useState } from 'react';
import { useSearch } from '@/hooks/useSearch';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Search, Clock, Star } from 'lucide-react';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock search history data - in a real app this would come from API or localStorage
const mockSearchHistory = [
  { id: '1', query: 'AI Technology', timestamp: '2025-05-01 14:30:00', saved: false },
  { id: '2', query: 'Web Development', timestamp: '2025-05-01 12:15:00', saved: true },
  { id: '3', query: 'Machine Learning', timestamp: '2025-04-30 16:45:00', saved: false },
  { id: '4', query: 'React Hooks', timestamp: '2025-04-30 09:20:00', saved: true },
  { id: '5', query: 'Tailwind CSS', timestamp: '2025-04-29 11:10:00', saved: false },
];

const SearchHistory = () => {
  const [savedSearches, setSavedSearches] = useState(
    mockSearchHistory.filter(item => item.saved)
  );
  const [recentSearches, setRecentSearches] = useState(
    mockSearchHistory.filter(item => !item.saved)
  );
  
  const { setQuery, search } = useSearch();

  const handleSearchAgain = (query: string) => {
    setQuery(query);
    search();
    // Navigate back to the search page in a real implementation
    window.location.href = '/';
  };

  const toggleSave = (id: string, currentlySaved: boolean) => {
    if (currentlySaved) {
      // Remove from saved
      const itemToMove = savedSearches.find(item => item.id === id);
      if (itemToMove) {
        setSavedSearches(savedSearches.filter(item => item.id !== id));
        setRecentSearches([...recentSearches, {...itemToMove, saved: false}]);
      }
    } else {
      // Add to saved
      const itemToMove = recentSearches.find(item => item.id === id);
      if (itemToMove) {
        setRecentSearches(recentSearches.filter(item => item.id !== id));
        setSavedSearches([...savedSearches, {...itemToMove, saved: true}]);
      }
    }
  };

  const renderSearchTable = (items: typeof mockSearchHistory, isSaved: boolean) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Query</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="w-[250px]">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.length > 0 ? (
          items.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.query}</TableCell>
              <TableCell>{item.timestamp}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleSearchAgain(item.query)}
                  >
                    <Search className="w-4 h-4 mr-1" />
                    Search Again
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSave(item.id, isSaved)}
                  >
                    <Star className={`w-4 h-4 mr-1 ${isSaved ? 'fill-yellow-400' : ''}`} />
                    {isSaved ? 'Unsave' : 'Save'}
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={3} className="text-center py-4 text-gray-500">
              No {isSaved ? 'saved' : 'recent'} searches found.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <Clock className="w-6 h-6 mr-2" />
        <h1 className="text-2xl font-bold">Search History</h1>
      </div>
      
      <Tabs defaultValue="recent" className="w-full">
        <TabsList>
          <TabsTrigger value="recent">
            <Clock className="w-4 h-4 mr-2" />
            Recent Searches
          </TabsTrigger>
          <TabsTrigger value="saved">
            <Star className="w-4 h-4 mr-2" />
            Saved Searches
          </TabsTrigger>
        </TabsList>
        <TabsContent value="recent">
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Recent Searches</h2>
            </CardHeader>
            <CardContent>
              {renderSearchTable(recentSearches, false)}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="saved">
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Saved Searches</h2>
            </CardHeader>
            <CardContent>
              {renderSearchTable(savedSearches, true)}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SearchHistory;
