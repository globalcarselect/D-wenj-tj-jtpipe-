'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SocialFeed from '@/components/SocialFeed';

const SocialPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">社交媒体</h1>
          <p className="text-xl text-blue-100">关注我们的最新动态和行业资讯</p>
        </div>
      </section>
      
      {/* Social Media Links */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8 text-center">关注我们</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Facebook */}
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white rounded-lg shadow p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-3xl">f</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Facebook</h3>
              <p className="text-gray-600 mb-4">关注我们的 Facebook 页面，获取最新产品信息和行业动态</p>
              <span className="text-blue-600 font-medium flex items-center group-hover:translate-x-2 transition-transform duration-300">
                访问页面 →
              </span>
            </a>
            
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white rounded-lg shadow p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-3xl">in</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-600 mb-4">在 LinkedIn 上关注我们，了解行业见解和公司发展</p>
              <span className="text-blue-700 font-medium flex items-center group-hover:translate-x-2 transition-transform duration-300">
                访问页面 →
              </span>
            </a>
            
            {/* Instagram */}
            <a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white rounded-lg shadow p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-3xl">ig</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Instagram</h3>
              <p className="text-gray-600 mb-4">关注我们的 Instagram，查看工厂实景和产品应用案例</p>
              <span className="text-pink-600 font-medium flex items-center group-hover:translate-x-2 transition-transform duration-300">
                访问页面 →
              </span>
            </a>
            
            {/* Twitter */}
            <a 
              href="https://www.twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white rounded-lg shadow p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-3xl">t</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Twitter</h3>
              <p className="text-gray-600 mb-4">关注我们的 Twitter，获取实时行业新闻和公司动态</p>
              <span className="text-blue-400 font-medium flex items-center group-hover:translate-x-2 transition-transform duration-300">
                访问页面 →
              </span>
            </a>
            
            {/* YouTube */}
            <a 
              href="https://www.youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white rounded-lg shadow p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-3xl">▶</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">YouTube</h3>
              <p className="text-gray-600 mb-4">访问我们的 YouTube 频道，观看产品演示和安装教程</p>
              <span className="text-red-600 font-medium flex items-center group-hover:translate-x-2 transition-transform duration-300">
                访问页面 →
              </span>
            </a>
          </div>
        </div>
      </section>
      
      {/* Recent Posts Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8 text-center">最新动态</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-4">Facebook 动态</h3>
              <SocialFeed platform="facebook" />
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">LinkedIn 动态</h3>
              <SocialFeed platform="linkedin" />
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl font-medium mb-4">Instagram 动态</h3>
            <SocialFeed platform="instagram" />
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">加入我们的社交媒体社区</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            关注我们的社交媒体账号，获取最新的产品信息、行业动态和公司新闻
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-blue-800 px-6 py-3 rounded-full font-medium hover:bg-blue-100 transition-colors duration-300"
            >
              访问 Facebook
            </a>
            
            <a 
              href="https://www.linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-blue-800 px-6 py-3 rounded-full font-medium hover:bg-blue-100 transition-colors duration-300"
            >
              访问 LinkedIn
            </a>
            
            <a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-blue-800 px-6 py-3 rounded-full font-medium hover:bg-blue-100 transition-colors duration-300"
            >
              访问 Instagram
            </a>
            
            <a 
              href="https://www.twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-blue-800 px-6 py-3 rounded-full font-medium hover:bg-blue-100 transition-colors duration-300"
            >
              访问 Twitter
            </a>
            
            <a 
              href="https://www.youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-blue-800 px-6 py-3 rounded-full font-medium hover:bg-blue-100 transition-colors duration-300"
            >
              访问 YouTube
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SocialPage;