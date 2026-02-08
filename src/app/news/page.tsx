import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Define types for news articles
interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
  tags: string[];
}

const NewsPage = () => {
  // Mock data for news articles
  const newsArticles: NewsArticle[] = [
    {
      id: 1,
      title: 'JTPIPELINE Expands Production Capacity to Meet Growing Global Demand',
      excerpt: 'Our company announces a significant expansion of production facilities to better serve our international clients.',
      content: 'TIANJIN ZHONGXINTONG INTERNATIONAL TRADE CO.,LTD. is pleased to announce a major expansion of our production capacity. This strategic investment will enable us to meet the growing demand for our high-quality pipes and fittings in international markets...',
      date: '2024-01-15',
      author: 'John Smith',
      category: 'Company News',
      imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=factory%20expansion%20construction%20site%2C%20industrial%20building%2C%20crane%2C%20professional%20photography&image_size=landscape_4_3',
      tags: ['expansion', 'production', 'growth']
    },
    {
      id: 2,
      title: 'New Certification Achieved: ISO 14001 Environmental Management',
      excerpt: 'We are proud to announce that our facility has achieved ISO 14001 certification for environmental management systems.',
      content: 'Environmental responsibility is a core value at JTPIPELINE. We are delighted to announce that our manufacturing facility has successfully achieved ISO 14001 certification for environmental management systems...',
      date: '2024-01-10',
      author: 'Jane Doe',
      category: 'Certifications',
      imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=iso%2014001%20certification%20document%2C%20environmental%20management%20system%2C%20green%20office%20setting%2C%20professional%20photography&image_size=landscape_4_3',
      tags: ['certification', 'environment', 'iso']
    },
    {
      id: 3,
      title: 'Innovative PE Pipe Solution for Challenging Terrain',
      excerpt: 'Our engineering team has developed a new PE pipe solution specifically designed for difficult terrain conditions.',
      content: 'JTPIPELINE\'s R&D department has been working on innovative solutions to address the challenges faced in difficult terrains. Our new PE pipe solution features enhanced flexibility and durability...',
      date: '2024-01-05',
      author: 'Robert Johnson',
      category: 'Technology',
      imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=engineers%20working%20on%20pipeline%20installation%20in%20mountainous%20terrain%2C%20challenging%20environment%2C%20professional%20photography&image_size=landscape_4_3',
      tags: ['innovation', 'technology', 'pe pipes']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">News & Updates</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about the latest developments, industry trends, and company news from JTPIPELINE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <article 
              key={article.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">{article.date}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h2>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <button className="text-blue-600 font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Stay Updated</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news, product updates, and industry insights directly to your inbox.
          </p>
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-r-md transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};


export default NewsPage;