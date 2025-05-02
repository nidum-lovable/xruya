
import React from 'react';
import { useSearch } from '@/hooks/useSearch';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Search, Clock } from 'lucide-react';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';

// Mock search history data - in a real app this would come from API or localStorage
const mockSearchHistory = [
  { id: '1', query: 'AI Technology', timestamp: '2025-05-01 14:30:00' },
  { id: '2', query: 'Web Development', timestamp: '2025-05-01 12:15:00' },
  { id: '3', query: 'Machine Learning', timestamp: '2025-04-30 16:45:00' },
  { id: '4', query: 'React Hooks', timestamp: '2025-04-30 09:20:00' },
];

const SearchHistory = () => {
  // In a real application, we would get the search history from a hook or API
  const searchHistory = mockSearchHistory;
  const { setQuery, search } = useSearch();

  const handleSearchAgain = (query: string) => {
    setQuery(query);
    search();
    // Navigate back to the search page in a real implementation
    window.location.href = '/';
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center mb-6">
        <Clock className="w-6 h-6 mr-2" />
        <h1 className="text-2xl font-bold">Search History</h1>
      </div>
      
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Recent Searches</h2>
        </CardHeader>
        <CardContent>
          {searchHistory.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Query</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {searchHistory.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.query}</TableCell>
                    <TableCell>{item.timestamp}</TableCell>
                    <TableCell>
                      <button
                        onClick={() => handleSearchAgain(item.query)}
                        className="flex items-center text-primary hover:underline"
                      >
                        <Search className="w-4 h-4 mr-1" />
                        Search Again
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-gray-500 text-center py-4">No search history found.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SearchHistory;
