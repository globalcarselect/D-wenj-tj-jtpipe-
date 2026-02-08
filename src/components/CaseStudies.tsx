'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CaseStudies = () => {
  const [visibleCases, setVisibleCases] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const caseStudies = [
    {
      id: 1,
      title: '靖通PE管道参与北京大兴国际机场建设',
      description: '靖通PE管道/双壁波纹PE管道参与北京大兴国际机场建设项目，为机场供水系统提供可靠保障。',
      image: '/images/case/daxing-airport.jpg',
      location: '中国北京',
      date: '2023年',
      category: '大型基建',
      link: '/case/daxing-airport'
    },
    {
      id: 2,
      title: 'HDPE管道用于美国德克萨斯Range油田',
      description: '靖通HDPE管道出口用于美国德克萨斯州Range油田项目，满足石油行业特殊需求。',
      image: '/images/case/texas-oilfield.jpg',
      location: '美国德克萨斯',
      date: '2023年',
      category: '石油天然气',
      link: '/case/texas-oilfield'
    },
    {
      id: 3,
      title: '1600mm HDPE管道用于亚洲供水项目',
      description: '800mm HDPE管道用于亚洲大型供水项目，解决区域供水难题，提升供水效率。',
      image: '/images/case/asia-water-supply.jpg',
      location: '亚洲',
      date: '2023年',
      category: '水利工程',
      link: '/case/asia-water-supply'
    },
    {
      id: 4,
      title: 'SRTP管道在印尼电站项目应用',
      description: '钢带增强聚乙烯螺旋波纹管在印尼电站项目中成功应用，展现优异性能和可靠性。',
      image: '/images/products/srtp-pipe.jpg',
      location: '印度尼西亚',
      date: '2023年',
      category: '电力工程',
      link: '/case/indonesia-power-station'
    },
    {
      id: 5,
      title: 'CPVC管道用于中东电缆保护',
      description: 'CPVC管道用于中东地区电缆保护项目，提供优异的耐腐蚀性和绝缘性能。',
      image: '/images/products/cpvc-duct.jpg',
      location: '中东',
      date: '2023年',
      category: '电力工程',
      link: '/case/middle-east-cable'
    },
    {
      id: 6,
      title: 'UPVC管道在东南亚排水系统应用',
      description: 'UPVC管道在东南亚城市排水系统中广泛应用，有效解决城市内涝问题。',
      image: '/images/products/upvc-pipe.jpg',
      location: '东南亚',
      date: '2023年',
      category: '市政工程',
      link: '/case/southeast-asia-drainage'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // Animate cases one by one
          caseStudies.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCases(prev => [...prev, index]);
            }, index * 150);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('case-studies-section');
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
    <section id="case-studies-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">项目案例</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们在全球各地的成功项目案例，展示我们的产品质量和技术实力
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.slice(0, 3).map((caseStudy, index) => (
            <div 
              key={caseStudy.id}
              className={`bg-gray-50 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${visibleCases.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden group">
                <Image 
                  src={caseStudy.image} 
                  alt={caseStudy.title} 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={80}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {caseStudy.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center text-white text-sm">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{caseStudy.location}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">{caseStudy.date}</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 line-clamp-2">{caseStudy.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-3">{caseStudy.description}</p>
                <Link 
                  href={caseStudy.link}
                  className="text-blue-600 font-medium hover:text-blue-800 flex items-center group"
                >
                  查看项目详情
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View More Cases Button */}
        <div className={`text-center mt-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link 
            href="/case"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            查看所有案例
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;