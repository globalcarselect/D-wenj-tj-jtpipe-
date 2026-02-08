'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NewsSection = () => {
  const [visibleNews, setVisibleNews] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const newsItems = [
    {
      id: 1,
      title: '87.43公里管道！又一大型水库项目获批！',
      excerpt: '87.43公里管道！又一大型水库项目获得批准，将为区域供水提供重要保障。',
      date: '2026-01-13',
      category: '行业新闻',
      image: '/images/news/pipeline-project.jpg',
      link: '/news/article1'
    },
    {
      id: 2,
      title: 'MPP管道用于电力电缆保护',
      excerpt: 'MPP管道适用于10KV以上高压输电线路和电缆的保护，提供可靠的安全保障。',
      date: '2026-01-07',
      category: '技术新闻',
      image: '/images/news/mpp-pipes.jpg',
      link: '/news/article2'
    },
    {
      id: 3,
      title: '新年快乐 2026！',
      excerpt: '向所有朋友致以2026年新年的祝福，感谢您一直以来的支持与合作。',
      date: '2026-01-01',
      category: '公司新闻',
      image: '/images/news/new-year.jpg',
      link: '/news/article3'
    },
    {
      id: 4,
      title: 'SRPE管道在印尼电站项目安装完成',
      excerpt: 'SRPE管道成功安装在印尼电站项目中，展现了产品的优异性能和可靠性。',
      date: '2025-12-11',
      category: '项目案例',
      image: '/images/news/srpe-indonesia.jpg',
      link: '/news/article4'
    },
    {
      id: 5,
      title: 'SCH40 PVC管道交付南美客户',
      excerpt: 'SCH40 PVC管道成功交付南美客户，满足当地建筑项目的管道需求。',
      date: '2025-12-04',
      category: '出口新闻',
      image: '/images/news/pvc-south-america.jpg',
      link: '/news/article5'
    },
    {
      id: 6,
      title: 'EN12201 HDPE管道出口欧洲',
      excerpt: '符合EN12201标准的HDPE管道成功出口欧洲，产品质量获得客户高度认可。',
      date: '2025-11-12',
      category: '出口新闻',
      image: '/images/news/en12201-europe.jpg',
      link: '/news/article6'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // Animate news items one by one
          newsItems.forEach((_, index) => {
            setTimeout(() => {
              setVisibleNews(prev => [...prev, index]);
            }, index * 150);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('news-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="news-section" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">最新新闻</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            了解行业动态、公司新闻和技术进展，保持与市场的同步发展
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.slice(0, 3).map((news, index) => (
            <div 
              key={news.id}
              className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${visibleNews.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden group">
                <Image 
                  src={news.image} 
                  alt={news.title} 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={80}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {news.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">{news.date}</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 line-clamp-2">{news.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-3">{news.excerpt}</p>
                <Link 
                  href={news.link}
                  className="text-blue-600 font-medium hover:text-blue-800 flex items-center group"
                >
                  阅读全文
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View More News Button */}
        <div className={`text-center mt-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link 
            href="/news"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            查看所有新闻
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;