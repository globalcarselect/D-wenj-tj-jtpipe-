'use client';

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* 页面标题和描述 */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">新闻动态</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              了解JTPIPELINE最新动态、行业资讯和技术创新，掌握管道行业发展趋势
            </p>
          </div>
          
          {/* 新闻分类筛选 */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-900">新闻分类</h2>
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {newsArticles.length} 篇文章
              </span>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                全部新闻
              </button>
              <button className="px-6 py-3 bg-white text-gray-700 border border-gray-200 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-gray-50">
                公司动态
              </button>
              <button className="px-6 py-3 bg-white text-gray-700 border border-gray-200 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-gray-50">
                行业资讯
              </button>
              <button className="px-6 py-3 bg-white text-gray-700 border border-gray-200 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-gray-50">
                技术文章
              </button>
            </div>
          </div>
          
          {/* 新闻列表 - 优化布局 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <div 
                key={article.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group"
              >
                {/* 新闻图片 */}
                <div className="h-56 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* 新闻标签 */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg">
                      {article.category}
                    </span>
                  </div>
                  {/* 日期标记 */}
                  <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {article.date}
                  </div>
                </div>
                
                {/* 新闻内容 */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                  
                  {/* 作者和操作 */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-2">
                        {article.author.charAt(0)}
                      </div>
                      <span className="text-gray-500 text-sm">{article.author}</span>
                    </div>
                    <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm font-semibold transform hover:scale-105 shadow-lg">
                      阅读全文
                    </button>
                  </div>
                  
                  {/* 标签 */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {article.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* 加载更多 */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 px-8 py-3 rounded-xl transition-all duration-300 font-semibold transform hover:scale-105 border border-gray-300">
              加载更多新闻
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};


export default NewsPage;