import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const ExportData = () => {
  const [visibleStats, setVisibleStats] = useState<boolean>(false);
  const [visibleCharts, setVisibleCharts] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const exportStats = [
    { label: '出口国家', value: '30+', color: 'bg-blue-600', icon: '🌍' },
    { label: '年出口量', value: '55,000+ 吨', color: 'bg-green-600', icon: '📦' },
    { label: '出口收入', value: '8000+ 万美元', color: 'bg-purple-600', icon: '💰' },
    { label: '出口增长率', value: '每年 15%', color: 'bg-orange-600', icon: '📈' }
  ];

  const marketDistribution = [
    { region: '北美', percentage: 30, color: 'bg-blue-500' },
    { region: '欧洲', percentage: 25, color: 'bg-green-500' },
    { region: '中东', percentage: 15, color: 'bg-yellow-500' },
    { region: '东南亚', percentage: 12, color: 'bg-purple-500' },
    { region: '非洲', percentage: 10, color: 'bg-red-500' },
    { region: '其他', percentage: 8, color: 'bg-gray-500' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleStats(true);
          // Delay chart animation
          setTimeout(() => {
            setVisibleCharts(true);
          }, 500);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Calculate pie chart segments
  const calculatePieSegments = () => {
    let cumulativePercentage = 0;
    return marketDistribution.map((market, index) => {
      const startAngle = cumulativePercentage * 3.6;
      cumulativePercentage += market.percentage;
      const endAngle = cumulativePercentage * 3.6;
      
      // Calculate path for SVG arc
      const radius = 80;
      const centerX = 100;
      const centerY = 100;
      
      const startX = centerX + radius * Math.cos((startAngle - 90) * Math.PI / 180);
      const startY = centerY + radius * Math.sin((startAngle - 90) * Math.PI / 180);
      const endX = centerX + radius * Math.cos((endAngle - 90) * Math.PI / 180);
      const endY = centerY + radius * Math.sin((endAngle - 90) * Math.PI / 180);
      
      const largeArcFlag = market.percentage > 50 ? 1 : 0;
      
      const pathData = `M ${centerX} ${centerY} L ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY} Z`;
      
      return { ...market, startAngle, endAngle, pathData };
    });
  };

  const pieSegments = calculatePieSegments();

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">外贸出口数据</h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          我们的产品远销全球多个国家和地区，建立了稳定的国际市场份额
        </p>

        {/* Export Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {exportStats.map((stat, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg shadow-md p-6 text-center transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl ${visibleStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`${stat.color} text-white text-3xl rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 mb-6`}>
                {stat.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3">{stat.label}</h3>
              <p className="text-2xl font-bold text-gray-900 transition-all duration-1000 ease-out">
                {visibleStats ? stat.value : '0'}
              </p>
            </div>
          ))}
        </div>

        {/* Market Distribution */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h3 className="text-xl font-semibold mb-8 text-center">市场分布</h3>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Pie Chart */}
            <div className="lg:w-1/2 flex justify-center">
              <div className={`relative w-64 h-64 transition-all duration-1000 ease-out ${visibleCharts ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <svg width="200" height="200" viewBox="0 0 200 200" className="transform -rotate-90">
                  {pieSegments.map((segment, index) => (
                    <path 
                      key={index} 
                      d={segment.pathData} 
                      fill={segment.color.replace('bg-', '#').replace('-500', '')} 
                      className="transition-all duration-1000 ease-out"
                      style={{ 
                        transitionDelay: `${index * 200}ms`,
                        opacity: visibleCharts ? 1 : 0
                      }}
                    />
                  ))}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">100%</div>
                    <div className="text-sm text-gray-600">全球市场</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Market Details */}
            <div className="lg:w-1/2 w-full">
              <div className="space-y-4">
                {marketDistribution.map((market, index) => (
                  <div key={index} className={`transition-all duration-500 ${visibleCharts ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                    <div className="flex justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${market.color}`}></div>
                        <span className="text-gray-700 font-medium">{market.region}</span>
                      </div>
                      <span className="text-gray-700 font-medium">{market.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`${market.color} h-3 rounded-full transition-all duration-1000 ease-out`} 
                        style={{ 
                          width: visibleCharts ? `${market.percentage}%` : '0%',
                          transitionDelay: `${index * 150 + 500}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Key Export Markets */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 text-center">主要出口市场</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src="/images/products/srtp-pipe.jpg" 
                  alt="出口产品" 
                  fill 
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  quality={80}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-xl font-semibold">主要出口产品</h4>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 text-gray-700">
                  {[
                    { name: 'HDPE 管道', percentage: '40%' },
                    { name: 'SRTP 钢丝增强管', percentage: '25%' },
                    { name: 'PE 管道配件', percentage: '20%' },
                    { name: 'PVC 管道系统', percentage: '15%' }
                  ].map((product, index) => (
                    <li key={index} className="flex flex-col">
                      <div className="flex justify-between mb-1">
                        <span className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {product.name}
                        </span>
                        <span className="text-gray-600 font-medium">{product.percentage}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: visibleCharts ? product.percentage : '0%',
                            transitionDelay: `${index * 100 + 1000}ms`
                          }}
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src="/images/background/aerial-panorama.jpg" 
                  alt="全球市场" 
                  fill 
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  quality={80}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-xl font-semibold">主要出口地区</h4>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-3">
                  {['美国', '德国', '阿联酋', '澳大利亚', '巴西', '俄罗斯', '沙特阿拉伯', '印度'].map((country, index) => (
                    <div 
                      key={index} 
                      className="bg-gray-50 rounded-lg p-3 text-center hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                    >
                      <span className="text-gray-700 font-medium">{country}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/export" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block"
          >
            查看详细出口信息
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExportData;