import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Search, Layout, Image } from 'lucide-react';
const WelcomePage = () => {
  return <div className="animate-fade-in mt-12 space-y-6">
      <h2 className="text-2xl font-medium text-center mb-8">Welcome to the future of Search</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-google-blue/10 flex items-center justify-center mb-4">
              <Search className="h-6 w-6 text-google-blue" />
            </div>
            <h3 className="font-medium mb-2">Intelligent Search</h3>
            <p className="text-sm text-muted-foreground">
              Get comprehensive answers with citations from trusted sources
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-google-red/10 flex items-center justify-center mb-4">
              <Star className="h-6 w-6 text-google-red" />
            </div>
            <h3 className="font-medium mb-2">Save Your Searches</h3>
            <p className="text-sm text-muted-foreground">
              Bookmark important searches to access them later
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-google-yellow/10 flex items-center justify-center mb-4">
              <Layout className="h-6 w-6 text-google-yellow" />
            </div>
            <h3 className="font-medium mb-2">Organized Results</h3>
            <p className="text-sm text-muted-foreground">
              Content structured with TL;DR summaries and detailed explanations
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-google-green/10 flex items-center justify-center mb-4">
              <Image className="h-6 w-6 text-google-green" />
            </div>
            <h3 className="font-medium mb-2">Visual Information</h3>
            <p className="text-sm text-muted-foreground">
              Learn from rich visuals and multimedia content in search results
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-8">
        <p className="text-sm text-muted-foreground">
          Try searching for a topic or click "I'm Feeling Curious" to discover something new
        </p>
      </div>
    </div>;
};
export default WelcomePage;