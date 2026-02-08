'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

import { useState, useEffect, useRef } from 'react';

const ExportPage = () => {
  const [visibleStats, setVisibleStats] = useState<number[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<number[]>([]);
  const [selectedMarket, setSelectedMarket] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [animateChart, setAnimateChart] = useState(false);
  const sectionRefs = {
    stats: useRef<HTMLDivElement>(null),
    markets: useRef<HTMLDivElement>(null),
    products: useRef<HTMLDivElement>(null),
    process: useRef<HTMLDivElement>(null),
    countries: useRef<HTMLDivElement>(null)
  };

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    // Stats observer
    const statsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const stats = [0, 1, 2, 3];
          stats.forEach((index, i) => {
            setTimeout(() => {
              setVisibleStats(prev => [...prev, index]);
            }, i * 200);
          });
          statsObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    // Markets observer
    const marketsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimateChart(true);
          marketsObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    // Products observer
    const productsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const products = [0, 1, 2];
          products.forEach((index, i) => {
            setTimeout(() => {
              setVisibleProducts(prev => [...prev, index]);
            }, i * 200);
          });
          productsObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRefs.stats.current) {
      statsObserver.observe(sectionRefs.stats.current);
      observers.push(statsObserver);
    }

    if (sectionRefs.markets.current) {
      marketsObserver.observe(sectionRefs.markets.current);
      observers.push(marketsObserver);
    }

    if (sectionRefs.products.current) {
      productsObserver.observe(sectionRefs.products.current);
      observers.push(productsObserver);
    }

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  // 计算饼图路径
  const calculatePieChartPath = (startAngle: number, endAngle: number, radius: number, centerX: number, centerY: number) => {
    const startRad = (startAngle - 90) * (Math.PI / 180);
    const endRad = (endAngle - 90) * (Math.PI / 180);
    const startX = centerX + radius * Math.cos(startRad);
    const startY = centerY + radius * Math.sin(startRad);
    const endX = centerX + radius * Math.cos(endRad);
    const endY = centerY + radius * Math.sin(endRad);
    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

    return `M ${centerX} ${centerY} L ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY} Z`;
  };

  // Export data
  const exportData = {
    countries: [
      { name: '美国', continent: '北美', exportVolume: '12,000吨', exportValue: '1,800万美元', mainProducts: ['HDPE给水管', 'SRTP钢丝增强管'], growthRate: '18%' },
      { name: '加拿大', continent: '北美', exportVolume: '5,000吨', exportValue: '750万美元', mainProducts: ['HDPE给水管', 'PE管道配件'], growthRate: '12%' },
      { name: '墨西哥', continent: '北美', exportVolume: '3,500吨', exportValue: '525万美元', mainProducts: ['HDPE给水管', 'PE管道配件'], growthRate: '15%' },
      { name: '巴西', continent: '南美', exportVolume: '4,000吨', exportValue: '600万美元', mainProducts: ['SRTP钢丝增强管', 'PE管道配件'], growthRate: '20%' },
      { name: '阿根廷', continent: '南美', exportVolume: '2,500吨', exportValue: '375万美元', mainProducts: ['HDPE给水管', 'PE管道配件'], growthRate: '10%' },
      { name: '德国', continent: '欧洲', exportVolume: '8,000吨', exportValue: '1,200万美元', mainProducts: ['HDPE给水管', 'SRTP钢丝增强管'], growthRate: '14%' },
      { name: '英国', continent: '欧洲', exportVolume: '5,500吨', exportValue: '825万美元', mainProducts: ['HDPE给水管', 'PE管道配件'], growthRate: '16%' },
      { name: '法国', continent: '欧洲', exportVolume: '4,500吨', exportValue: '675万美元', mainProducts: ['HDPE给水管', 'SRTP钢丝增强管'], growthRate: '13%' },
      { name: '意大利', continent: '欧洲', exportVolume: '4,000吨', exportValue: '600万美元', mainProducts: ['HDPE给水管', 'PE管道配件'], growthRate: '11%' },
      { name: '西班牙', continent: '欧洲', exportVolume: '3,500吨', exportValue: '525万美元', mainProducts: ['HDPE给水管', 'SRTP钢丝增强管'], growthRate: '17%' },
      { name: '俄罗斯', continent: '欧洲', exportVolume: '3,000吨', exportValue: '450万美元', mainProducts: ['SRTP钢丝增强管', 'PE管道配件'], growthRate: '8%' },
      { name: '乌克兰', continent: '欧洲', exportVolume: '1,500吨', exportValue: '225万美元', mainProducts: ['PE管道配件'], growthRate: '5%' },
      { name: '波兰', continent: '欧洲', exportVolume: '2,000吨', exportValue: '300万美元', mainProducts: ['HDPE给水管', 'PE管道配件'], growthRate: '12%' },
      { name: '土耳其', continent: '亚洲', exportVolume: '3,500吨', exportValue: '525万美元', mainProducts: ['HDPE给水管', 'SRTP钢丝增强管'], growthRate: '19%' },
      { name: '沙特阿拉伯', continent: '亚洲', exportVolume: '6,000吨', exportValue: '900万美元', mainProducts: ['HDPE给水管', 'SRTP钢丝增强管'], growthRate: '22%' },
      { name: '阿联酋', continent: '亚洲', exportVolume: '5,000吨', exportValue: '750万美元', mainProducts: ['HDPE给水管', 'SRTP钢丝增强管'], growthRate: '21%' },
      { name: '印度', continent: '亚洲', exportVolume: '7,000吨', exportValue: '1,050万美元', mainProducts: ['HDPE给水管', 'PE管道配件'], growthRate: '25%' },
      { name: '巴基斯坦', continent: '亚洲', exportVolume: '2,500吨', exportValue: '375万美元', mainProducts: ['HDPE给水管', 'PE管道配件'], growthRate: '18%' },
      { name: '孟加拉国', continent: '亚洲', exportVolume: '2,000吨', exportValue: '300万美元', mainProducts: ['HDPE给水管', 'PE管道配件'], growthRate: '16%' },
      { name: '泰国', continent: '亚洲', exportVolume: '4,000吨', exportValue: '600万美元', mainProducts: ['HDPE给水管', 'SRTP钢丝增强管'], growthRate: '14%' },
      { name: '马来西亚', continent: '亚洲', exportVolume: '3,500吨', exportValue: '525万美元', mainProducts: ['HDPE给水管', 'PE管道配件'], growthRate: '15%' },
      { name: '新加坡', continent: '亚洲', exportVolume: '2,500吨', exportValue: '375万美元', mainProducts: ['HDPE给水管', 'SRTP钢丝增强管'], growthRate: '13%' },
      { name: '印度尼西亚', continent: '亚洲', exportVolume: '5,000吨', exportValue: '750万美元', mainProducts: ['HDPE给水管', 'PE管道配件'], growthRate: '20%' },
      { name: '菲律宾', continent: '亚洲', exportVolume: '2,000吨', exportValue: '300万美元', mainProducts: ['HDPE给水管', 'PE管道配件'], growthRate: '17%' },
      { name: '澳大利亚', continent: '大洋洲', exportVolume: '4,500吨', exportValue: '675万美元', mainProducts: ['HDPE给水管', 'SRTP钢丝增强管'], growthRate: '12%' },
      { name: '新西兰', continent: '大洋洲', exportVolume: '1,500吨', exportValue: '225万美元', mainProducts: ['HDPE给水管', 'PE管道配件'], growthRate: '10%' },
      { name: '南非', continent: '非洲', exportVolume: '3,000吨', exportValue: '450万美元', mainProducts: ['HDPE给水管', 'SRTP钢丝增强管'], growthRate: '19%' },
      { name: '埃及', continent: '非洲', exportVolume: '2,500吨', exportValue: '375万美元', mainProducts: ['HDPE给水管', 'PE管道配件'], growthRate: '16%' },
      { name: '尼日利亚', continent: '非洲', exportVolume: '3,500吨', exportValue: '525万美元', mainProducts: ['HDPE给水管', 'SRTP钢丝增强管'], growthRate: '23%' },
      { name: '肯尼亚', continent: '非洲', exportVolume: '2,000吨', exportValue: '300万美元', mainProducts: ['HDPE给水管', 'PE管道配件'], growthRate: '18%' }
    ],
    products: [
      {
        name: 'HDPE给水管',
        exportVolume: '25,000吨',
        regions: ['北美', '欧洲', '中东'],
        image: '/images/products/pe-pipe.jpg',
        description: '采用高密度聚乙烯材料制造，具有优异的耐腐蚀性、柔韧性和使用寿命，广泛应用于城市供水系统。'
      },
      {
        name: 'SRTP钢丝增强管',
        exportVolume: '18,000吨',
        regions: ['东南亚', '非洲', '南美'],
        image: '/images/products/srtp-pipe.jpg',
        description: '结合了塑料和钢丝的优点，具有高强度、高耐压性和良好的柔韧性，适用于长距离输水和市政工程。'
      },
      {
        name: 'PE管道配件',
        exportVolume: '12,000吨',
        regions: ['欧洲', '北美', '大洋洲'],
        image: '/images/products/pipe-fittings.jpg',
        description: '配套PE管道使用的各种配件，包括弯头、三通、法兰等，确保管道系统的连接可靠性和密封性。'
      }
    ],
    certifications: [
      'ISO 9001:2015质量管理体系认证',
      'ISO 14001:2015环境管理体系认证',
      'OHSAS 18001:2007职业健康安全管理体系认证',
      'API Spec 5L管线钢管认证',
      'CE认证',
      'UL认证',
      'CSA认证'
    ],
    statistics: [
      { label: '出口国家', value: '30+', icon: '🌍' },
      { label: '年出口量', value: '55,000+吨', icon: '📦' },
      { label: '出口额', value: '8000+万美元', icon: '💰' },
      { label: '出口增长率', value: '年增长15%', icon: '📈' }
    ],
    markets: [
      { region: '北美', percentage: 30, color: '#3b82f6' },
      { region: '欧洲', percentage: 25, color: '#10b981' },
      { region: '中东', percentage: 15, color: '#f59e0b' },
      { region: '东南亚', percentage: 12, color: '#ef4444' },
      { region: '非洲', percentage: 10, color: '#8b5cf6' },
      { region: '其他', percentage: 8, color: '#6b7280' }
    ],
    growthData: [
      { year: '2020', value: 32000 },
      { year: '2021', value: 38000 },
      { year: '2022', value: 46000 },
      { year: '2023', value: 55000 },
      { year: '2024', value: 63000, projected: true }
    ]
  };

  // Calculate cumulative percentages for pie chart
  const getPieChartData = () => {
    let cumulativePercentage = 0;
    return exportData.markets.map(market => {
      const startAngle = (cumulativePercentage / 100) * 360;
      cumulativePercentage += market.percentage;
      const endAngle = (cumulativePercentage / 100) * 360;
      return {
        ...market,
        startAngle,
        endAngle
      };
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] bg-gray-800 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <Image
            src="/images/background/aerial-panorama.jpg"
            alt="国际货运港口"
            fill
            className="object-cover"
            priority
            quality={85}
          />
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">外贸出口</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl">
              全球布局，高品质管道解决方案，服务于世界各地的客户
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="#export-data"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 transform hover:shadow-lg hover:-translate-y-1 text-center"
              >
                查看出口数据
              </Link>
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-md font-semibold transition-all duration-300 transform hover:shadow-lg hover:-translate-y-1 text-center"
              >
                联系出口团队
              </Link>
            </div>
          </div>
        </section>

        {/* Export Overview */}
        <section ref={sectionRefs.stats} className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">出口概览</h2>
            <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              我们的产品远销全球30多个国家和地区，年出口量超过55,000吨，出口额达到8000多万美元。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {exportData.statistics.map((stat, index) => (
                <div 
                  key={index} 
                  className={`bg-gray-50 rounded-lg p-8 text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${visibleStats.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-3">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Export Markets */}
        <section id="export-data" ref={sectionRefs.markets} className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">出口市场</h2>
            <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              我们的产品覆盖全球主要市场，包括北美、欧洲、中东、东南亚和非洲等地区。
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Market Distribution */}
              <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-8">市场分布</h3>
                <div className="space-y-6">
                  {exportData.markets.map((market, index) => (
                    <div 
                      key={index} 
                      className="cursor-pointer"
                      onClick={() => setSelectedMarket(selectedMarket === market.region ? null : market.region)}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-900 font-medium">{market.region}</span>
                        <span className="text-gray-900 font-bold">{market.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="h-3 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: animateChart ? `${market.percentage}%` : '0%',
                            backgroundColor: market.color
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Pie Chart */}
              <div className="lg:col-span-3 bg-white rounded-lg shadow-lg p-8 flex flex-col items-center justify-center">
                <h3 className="text-xl font-semibold mb-8">全球市场份额</h3>
                <div className="relative w-full max-w-md h-80">
                  <svg width="100%" height="100%" viewBox="0 0 300 300">
                    {getPieChartData().map((market, index) => {
                      const pathData = calculatePieChartPath(
                        market.startAngle,
                        market.endAngle,
                        120,
                        150,
                        150
                      );
                      return (
                        <path
                          key={index}
                          d={pathData}
                          fill={market.color}
                          className="transition-all duration-1500 ease-out"
                          style={{
                            opacity: animateChart ? 1 : 0,
                            transform: animateChart ? 'scale(1)' : 'scale(0)'
                          }}
                        />
                      );
                    })}
                    <circle cx="150" cy="150" r="60" fill="white" className="transition-opacity duration-1000 ease-out" style={{ opacity: animateChart ? 1 : 0 }} />
                    <text x="150" y="145" textAnchor="middle" className="text-3xl font-bold text-gray-900 transition-opacity duration-1000 ease-out" style={{ opacity: animateChart ? 1 : 0 }}>30+</text>
                    <text x="150" y="165" textAnchor="middle" className="text-sm text-gray-600 transition-opacity duration-1000 ease-out" style={{ opacity: animateChart ? 1 : 0 }}>出口国家</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Country Selection and Details */}
        <section ref={sectionRefs.countries} className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">国家出口数据</h2>
            <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              选择国家查看详细的出口数据和产品信息。
            </p>
            
            <div className="max-w-4xl mx-auto">
              {/* Country Selection */}
              <div className="bg-gray-50 rounded-lg p-8 mb-12">
                <h3 className="text-xl font-semibold mb-6">选择国家</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="w-full">
                    <label htmlFor="country-select" className="block text-gray-700 font-medium mb-2">
                      国家/地区
                    </label>
                    <select
                      id="country-select"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      value={selectedCountry || ''}
                      onChange={(e) => setSelectedCountry(e.target.value || null)}
                    >
                      <option value="">请选择国家</option>
                      {exportData.countries.map((country, index) => (
                        <option key={index} value={country.name}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-end">
                    <button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 transform hover:shadow-lg hover:-translate-y-1"
                      onClick={() => setSelectedCountry(null)}
                      disabled={!selectedCountry}
                    >
                      重置选择
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Country Details */}
              {selectedCountry ? (
                <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
                  {(() => {
                    const countryData = exportData.countries.find(c => c.name === selectedCountry);
                    if (!countryData) return null;
                    
                    return (
                      <>
                        <h3 className="text-2xl font-bold mb-6">{countryData.name} 出口详情</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-6">
                            <div className="bg-white p-6 rounded-lg shadow">
                              <h4 className="text-lg font-semibold mb-4">基本信息</h4>
                              <div className="space-y-3">
                                <div className="flex justify-between">
                                  <span className="text-gray-600">所在大洲：</span>
                                  <span className="text-gray-900 font-medium">{countryData.continent}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">出口量：</span>
                                  <span className="text-gray-900 font-medium">{countryData.exportVolume}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">出口额：</span>
                                  <span className="text-gray-900 font-medium">{countryData.exportValue}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">增长率：</span>
                                  <span className="text-gray-900 font-medium">{countryData.growthRate}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-6">
                            <div className="bg-white p-6 rounded-lg shadow">
                              <h4 className="text-lg font-semibold mb-4">主要出口产品</h4>
                              <div className="space-y-3">
                                {countryData.mainProducts.map((product, index) => (
                                  <div key={index} className="flex items-center">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                                    <span className="text-gray-900">{product}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8">
                          <Link
                            href={`/products`}
                            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold transition-all duration-300 transform hover:shadow-lg hover:-translate-y-1"
                          >
                            查看相关产品
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </Link>
                        </div>
                      </>
                    );
                  })()}
                </div>
              ) : (
                <div className="bg-gray-50 rounded-lg p-16 text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-3">请选择一个国家</h4>
                  <p className="text-gray-600 max-w-md mx-auto">
                    从上方的下拉菜单中选择一个国家，查看详细的出口数据和产品信息。
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Growth Trend */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">出口增长趋势</h2>
            <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              我们的出口业务保持稳定增长，年增长率达到15%，预计未来几年将继续保持增长态势。
            </p>
            
            <div className="bg-gray-50 rounded-lg shadow-lg p-8">
              <div className="h-80">
                <svg width="100%" height="100%" viewBox="0 0 1200 400">
                  {/* Grid lines */}
                  <defs>
                    <pattern id="grid" width="100" height="50" patternUnits="userSpaceOnUse">
                      <path d="M 100 0 L 0 0 0 50" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  
                  {/* X-axis */}
                  <line x1="50" y1="350" x2="1150" y2="350" stroke="#9ca3af" strokeWidth="2" />
                  
                  {/* Y-axis */}
                  <line x1="50" y1="350" x2="50" y2="50" stroke="#9ca3af" strokeWidth="2" />
                  
                  {/* X-axis labels */}
                  {exportData.growthData.map((data, index) => (
                    <g key={index}>
                      <line x1={50 + index * 220} y1="350" x2={50 + index * 220} y2="360" stroke="#9ca3af" strokeWidth="2" />
                      <text x={50 + index * 220} y="380" textAnchor="middle" className="text-sm text-gray-600">{data.year}</text>
                    </g>
                  ))}
                  
                  {/* Y-axis labels */}
                  {[0, 20000, 40000, 60000, 80000].map((value, index) => (
                    <g key={index}>
                      <line x1="40" y1={350 - index * 75} x2="50" y2={350 - index * 75} stroke="#9ca3af" strokeWidth="2" />
                      <text x="30" y={354 - index * 75} textAnchor="end" className="text-sm text-gray-600">{value/1000}k</text>
                    </g>
                  ))}
                  
                  {/* Growth line */}
                  <path 
                    d={exportData.growthData.map((data, index) => {
                      const x = 50 + index * 220;
                      const y = 350 - (data.value / 80000) * 300;
                      return index === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
                    }).join(' ')}
                    stroke="#3b82f6"
                    strokeWidth="3"
                    fill="none"
                    className="transition-all duration-2000 ease-out"
                    style={{ strokeDasharray: '1000', strokeDashoffset: animateChart ? '0' : '1000' }}
                  />
                  
                  {/* Data points */}
                  {exportData.growthData.map((data, index) => {
                    const x = 50 + index * 220;
                    const y = 350 - (data.value / 80000) * 300;
                    return (
                      <g key={index}>
                        <circle 
                          cx={x} 
                          cy={y} 
                          r="6" 
                          fill={data.projected ? '#93c5fd' : '#3b82f6'} 
                          stroke="white" 
                          strokeWidth="2"
                          className="transition-all duration-1000 ease-out"
                          style={{ opacity: animateChart ? 1 : 0, transform: animateChart ? 'scale(1)' : 'scale(0)' }}
                        />
                        <text 
                          x={x} 
                          y={y - 15} 
                          textAnchor="middle" 
                          className="text-sm font-medium text-gray-900"
                          style={{ opacity: animateChart ? 1 : 0 }}
                        >
                          {data.value.toLocaleString()}
                        </text>
                      </g>
                    );
                  })}
                  
                  {/* Projected line */}
                  <path 
                    d={`M ${50 + 3 * 220} ${350 - (exportData.growthData[3].value / 80000) * 300} L ${50 + 4 * 220} ${350 - (exportData.growthData[4].value / 80000) * 300}`}
                    stroke="#93c5fd"
                    strokeWidth="3"
                    strokeDasharray="5,5"
                    fill="none"
                    className="transition-all duration-2000 ease-out"
                    style={{ strokeDashoffset: animateChart ? '0' : '1000' }}
                  />
                </svg>
              </div>
              <div className="flex justify-center items-center space-x-6 mt-8">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mr-2"></div>
                  <span className="text-gray-700">实际数据</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-300 rounded-full mr-2"></div>
                  <span className="text-gray-700">预测数据</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Export Products */}
        <section ref={sectionRefs.products} className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">主要出口产品</h2>
            <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              我们的出口产品包括HDPE给水管、SRTP钢丝增强管和PE管道配件等，广泛应用于全球各个领域。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {exportData.products.map((product, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${visibleProducts.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                      quality={80}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <h4 className="font-semibold text-lg">{product.name}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="space-y-4">
                      <div>
                        <span className="text-gray-600 font-medium">出口量：</span>
                        <span className="text-gray-900 font-bold">{product.exportVolume}</span>
                      </div>
                      <div>
                        <span className="text-gray-600 font-medium">主要市场：</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {product.regions.map((region, idx) => (
                            <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                              {region}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">国际认证</h2>
            <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              我们的产品通过了多项国际认证，确保质量和安全性符合全球标准，为客户提供可靠的产品保障。
            </p>
            
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {exportData.certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors transform hover:-translate-y-1 duration-300"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Export Process */}
        <section ref={sectionRefs.process} className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">出口流程</h2>
            <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              我们拥有专业的出口团队和完善的出口流程，确保产品顺利送达全球客户手中。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">询盘与报价</h3>
                <p className="text-gray-600">响应出口询盘，提供具有竞争力的报价和详细的产品信息。</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">订单确认</h3>
                <p className="text-gray-600">确认订单详情、规格要求和交货条款，签订正式合同。</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">生产与检验</h3>
                <p className="text-gray-600">按照订单要求组织生产，进行严格的质量检验和测试。</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-xl font-bold text-blue-600">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">运输与清关</h3>
                <p className="text-gray-600">安排国际运输，准备所有必要的出口文件，协助客户清关。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">准备好与我们合作出口了吗？</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              我们经验丰富的出口团队随时准备为您提供全方位的国际贸易服务。立即联系我们，开始您的全球业务之旅。
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-md font-semibold transition-all duration-300 transform hover:shadow-lg hover:-translate-y-1 text-center"
              >
                联系出口团队
              </Link>
              <Link
                href="/products"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-md font-semibold transition-all duration-300 transform hover:shadow-lg hover:-translate-y-1 text-center"
              >
                查看出口产品
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ExportPage;