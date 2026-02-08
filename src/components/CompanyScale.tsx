import { useContent } from '@/contexts/ContentContext';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const CompanyScale = () => {
  const { companyScale } = useContent();
  const [animatedValues, setAnimatedValues] = useState<Record<string, string>>({
    '成立年份': '',
    '员工人数': '',
    '工厂面积': '',
    '年产能': '',
    '出口国家': '',
    '全球客户': ''
  });
  const [isVisible, setIsVisible] = useState(false);

  const scaleData = [
    { label: '成立年份', value: companyScale.established, icon: '📅' },
    { label: '员工人数', value: companyScale.employees, icon: '👥' },
    { label: '工厂面积', value: companyScale.factoryArea, icon: '🏭' },
    { label: '年产能', value: companyScale.annualCapacity, icon: '📦' },
    { label: '出口国家', value: companyScale.exportCountries, icon: '🌍' },
    { label: '全球客户', value: companyScale.globalCustomers, icon: '🤝' },
  ];

  // Animation effect for numbers
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // Animate values one by one
          const newAnimatedValues: Record<string, string> = {};
          scaleData.forEach((item, index) => {
            setTimeout(() => {
              newAnimatedValues[item.label] = item.value;
              setAnimatedValues(prev => ({ ...prev, [item.label]: item.value }));
            }, index * 200);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('company-scale-section');
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
    <section id="company-scale-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">关于我们</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">天津中信通国际贸易有限公司 - 专业管道及配件解决方案提供商</p>
        </div>
        
        {/* Company Scale Data */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {scaleData.map((item, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-2 border border-blue-100"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <div className="text-3xl font-bold text-blue-700 mb-3 transition-all duration-1000 ease-out">
                {animatedValues[item.label] || '0'}
              </div>
              <div className="text-gray-600 font-medium">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Company Introduction */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">公司简介</h3>
            <div className="text-gray-700 space-y-4 text-lg">
              <p>
                {companyScale.description}
              </p>
              <p>
                我们致力于为全球客户提供高质量的管道解决方案，满足不同行业的需求。公司注重技术创新和产品质量，拥有一支专业的研发团队和严格的质量管理体系，确保产品符合国际标准和客户要求。
              </p>
              <div className="mt-8">
                <Link 
                  href="/about" 
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  了解更多
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-6">
            <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/images/background/aerial-panorama.jpg" 
                alt="公司全景" 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-110"
                quality={85}
                priority
              />
            </div>
            <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/images/background/workshop1.jpg" 
                alt="生产车间" 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-110"
                quality={85}
              />
            </div>
            <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/images/background/laboratory.jpg" 
                alt="实验室" 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-110"
                quality={85}
              />
            </div>
            <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/images/about/company-overview.jpg" 
                alt="公司概览" 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-110"
                quality={85}
              />
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">核心价值观</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">品质至上</h4>
              <p className="text-gray-600">坚持严格的质量控制标准，确保每一件产品都符合国际要求</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">创新驱动</h4>
              <p className="text-gray-600">不断研发新技术、新产品，满足客户日益增长的需求</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="text-4xl mb-4">👥</div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">客户导向</h4>
              <p className="text-gray-600">以客户需求为中心，提供个性化的解决方案和优质服务</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">诚信经营</h4>
              <p className="text-gray-600">坚持诚信为本，与客户、供应商建立长期互信合作关系</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyScale;