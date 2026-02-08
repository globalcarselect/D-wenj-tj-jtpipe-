import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'product' | 'news' | 'page';
  url: string;
  image?: string;
}

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get('q');
    if (query) {
      setSearchQuery(query);
      performSearch(query);
    } else {
      setLoading(false);
    }
  }, []);

  const performSearch = (query: string) => {
    setLoading(true);
    
    // Mock search data - in a real implementation, this would come from an API
    const mockData: SearchResult[] = [
      // Products
      {
        id: '1',
        title: 'HDPE Water Supply Pipe',
        description: 'High-density polyethylene pipes for water supply systems, featuring excellent chemical resistance and durability.',
        type: 'product',
        url: '/products/1',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hdpe%20water%20supply%20pipes%2C%20blue%20pipes%2C%20professional%20photography&image_size=square'
      },
      {
        id: '2',
        title: 'PVC Drainage Pipe',
        description: 'Durable PVC drainage pipes designed for efficient wastewater management.',
        type: 'product',
        url: '/products/2',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pvc%20drainage%20pipes%2C%20white%20pipes%2C%20professional%20photography&image_size=square'
      },
      {
        id: '3',
        title: 'PE Elbow Fitting',
        description: 'High-quality PE elbow fittings for directional changes in pipeline systems.',
        type: 'product',
        url: '/products/3',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pe%20pipe%20elbow%20fittings%2C%20professional%20product%20photography&image_size=square'
      },
      {
        id: '4',
        title: 'SRTP Composite Pipe',
        description: 'Steel Wire Reinforced HDPE Composite Pipes for high-pressure applications.',
        type: 'product',
        url: '/products/4',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=srtp%20composite%20pipes%2C%20steel%20wire%20reinforced%2C%20industrial%20setting&image_size=square'
      },
      // News
      {
        id: 'news-1',
        title: 'JTPIPELINE Expands Production Capacity',
        description: 'Our company announces a significant expansion of production facilities to better serve our international clients.',
        type: 'news',
        url: '/news',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=factory%20expansion%20construction%20site%2C%20industrial%20building%2C%20crane%2C%20professional%20photography&image_size=square'
      },
      {
        id: 'news-2',
        title: 'New Certification Achieved: ISO 14001',
        description: 'We are proud to announce that our facility has achieved ISO 14001 certification for environmental management systems.',
        type: 'news',
        url: '/news',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=iso%2014001%20certification%20document%2C%20environmental%20management%20system%2C%20green%20office%20setting%2C%20professional%20photography&image_size=square'
      },
      // Pages
      {
        id: 'page-about',
        title: 'About Us',
        description: 'Learn about Tianjin Zhongxintong International Trade Co., Ltd. - our history, team, and commitment to quality.',
        type: 'page',
        url: '/about'
      },
      {
        id: 'page-certifications',
        title: 'Quality Certifications',
        description: 'Our commitment to quality is evidenced by our comprehensive certification portfolio, ensuring our products meet the highest international standards.',
        type: 'page',
        url: '/certifications'
      }
    ];

    // Filter results based on search query
    const filteredResults = mockData.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    );

    // Simulate API delay
    setTimeout(() => {
      setResults(filteredResults);
      setLoading(false);
    }, 300);
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'product': return 'Product';
      case 'news': return 'News';
      case 'page': return 'Page';
      default: return type;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'product': return 'bg-blue-100 text-blue-800';
      case 'news': return 'bg-green-100 text-green-800';
      case 'page': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Search Results for "{searchQuery}"</h1>
          
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            </div>
          ) : results.length === 0 ? (
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <p className="text-gray-600 mb-4">No results found for "{searchQuery}"</p>
              <p className="text-gray-500">Try using different keywords or check your spelling.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {results.map((result) => (
                <div key={result.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row">
                    {result.image && (
                      <div className="md:w-1/4 h-32 md:h-auto bg-gray-200">
                        <img 
                          src={result.image} 
                          alt={result.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className={`p-6 ${result.image ? 'md:w-3/4' : 'w-full'}`}>
                      <div className="flex justify-between items-start mb-2">
                        <h2 className="text-xl font-semibold text-gray-900">
                          <Link href={result.url} className="hover:text-blue-600 transition-colors">
                            {result.title}
                          </Link>
                        </h2>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(result.type)}`}>
                          {getTypeLabel(result.type)}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{result.description}</p>
                      <Link 
                        href={result.url} 
                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                      >
                        View details
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchPage;