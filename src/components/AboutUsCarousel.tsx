'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutUsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const aboutItems = [
    {
      id: 1,
      title: '公司概览',
      description: '天津靖通管道科技有限公司是一家专业的塑料管道制造商和供应商，工厂位于天津宝坻区。',
      image: '/images/about/company-overview.jpg',
      link: '/aboutus'
    },
    {
      id: 2,
      title: '工厂设备',
      description: '配备先进的生产设备和技术，确保产品质量和产能满足全球市场需求。',
      image: '/images/about/factory-equipment.jpg',
      link: '/factory/factory'
    },
    {
      id: 3,
      title: '实验室检测',
      description: '拥有现代化的实验室，进行严格的质量检测，确保产品符合国际标准。',
      image: '/images/about/laboratory.jpg',
      link: '/factory/quality-test'
    },
    {
      id: 4,
      title: '生产车间1',
      description: '宽敞的生产车间，高效的生产线，能够满足大批量订单需求。',
      image: '/images/about/workshop1.jpg',
      link: '/factory/production-line'
    },
    {
      id: 5,
      title: '生产车间2',
      description: '现代化的生产车间，配备自动化生产线，提高生产效率。',
      image: '/images/about/workshop2.jpg',
      link: '/factory/production-line'
    },
    {
      id: 6,
      title: '生产线',
      description: '先进的生产线设备，确保产品质量稳定性和一致性。',
      image: '/images/about/production-line.jpg',
      link: '/factory/production-line'
    },
    {
      id: 7,
      title: '质量控制',
      description: '严格的质量管理体系，从原材料到成品的全过程质量控制。',
      image: '/images/about/quality-control.jpg',
      link: '/factory/quality-test'
    },
    {
      id: 8,
      title: '检测设备',
      description: '先进的检测设备，确保产品符合国际标准和客户要求。',
      image: '/images/about/testing-equipment.jpg',
      link: '/factory/quality-test'
    },
    {
      id: 9,
      title: '仓储设施',
      description: '大型仓储设施，确保产品安全储存和及时配送。',
      image: '/images/about/warehouse.jpg',
      link: '/factory/warehouse'
    },
    {
      id: 10,
      title: '研发实验室',
      description: '专业的研发实验室，不断开发新产品和改进现有产品。',
      image: '/images/about/research-lab.jpg',
      link: '/aboutus'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Auto slide every 6 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % aboutItems.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + aboutItems.length) % aboutItems.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % aboutItems.length);
  };

  const visibleItems = aboutItems.slice(currentSlide, currentSlide + 4).length < 4 
    ? [...aboutItems.slice(currentSlide), ...aboutItems.slice(0, 4 - (aboutItems.length - currentSlide))]
    : aboutItems.slice(currentSlide, currentSlide + 4);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">关于我们</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            天津靖通管道科技有限公司是一家专业的塑料管道制造商和供应商，工厂位于天津宝坻区。
            主要产品包括聚氯乙烯管道(PVC管道)、聚乙烯管道(PE管道)和聚丙烯管道(PP管道)。
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Slides */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {visibleItems.map((item, index) => (
              <div 
                key={item.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative h-56 overflow-hidden group">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    quality={80}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h4 className="font-semibold">{item.title}</h4>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm">{item.description}</p>
                  <Link 
                    href={item.link}
                    className="text-blue-600 font-medium hover:text-blue-800 text-sm flex items-center"
                  >
                    了解更多
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(aboutItems.length / 4) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index * 4)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor(currentSlide / 4) === index ? 'bg-blue-600 w-6' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>

        {/* More Button */}
        <div className="text-center mt-12">
          <Link 
            href="/aboutus"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            了解更多关于我们
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUsCarousel;