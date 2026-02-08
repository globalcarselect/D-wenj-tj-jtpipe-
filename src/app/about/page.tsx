'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const AboutPage = () => {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});
  const sectionRefs = {
    overview: useRef<HTMLDivElement>(null),
    mission: useRef<HTMLDivElement>(null),
    team: useRef<HTMLDivElement>(null),
    milestones: useRef<HTMLDivElement>(null),
    factory: useRef<HTMLDivElement>(null),
    global: useRef<HTMLDivElement>(null)
  };

  const companyInfo = {
    established: '2010',
    employees: '100-200',
    factoryArea: '20,000+ ㎡',
    annualCapacity: '100,000+ 吨',
    markets: '50+ 国家',
    products: '1000+ 产品型号'
  };

  const teamMembers = [
    {
      name: '王总',
      position: '首席执行官',
      bio: '拥有20多年管道行业经验，领导公司走向国际化成功。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20asian%20businessman%20in%20suit%2C%20CEO%20portrait%2C%20confident%20expression%2C%20high%20quality%20photography&image_size=square'
    },
    {
      name: '李工',
      position: '技术总监',
      bio: '管道工程专家，拥有15年产品开发和质量控制经验。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20asian%20businesswoman%20in%20business%20attire%2C%20technical%20director%20portrait%2C%20professional%20expression%2C%20high%20quality%20photography&image_size=square'
    },
    {
      name: '张经理',
      position: '销售总监',
      bio: '负责全球销售战略，与全球客户建立长期合作伙伴关系。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20asian%20businessman%20in%20business%20suit%2C%20sales%20director%20portrait%2C%20friendly%20expression%2C%20high%20quality%20photography&image_size=square'
    }
  ];

  const milestones = [
    {
      year: '2010',
      event: '公司在中国天津成立'
    },
    {
      year: '2013',
      event: '首次出口东南亚市场'
    },
    {
      year: '2015',
      event: '获得ISO 9001质量管理体系认证'
    },
    {
      year: '2018',
      event: '扩大生产设施，年产能提升30%'
    },
    {
      year: '2020',
      event: '进入欧洲市场'
    },
    {
      year: '2023',
      event: '获得ISO 14001环境管理体系认证'
    }
  ];

  const coreValues = [
    {
      title: '品质至上',
      description: '坚持严格的质量控制标准，确保每一件产品都符合国际要求。',
      icon: '🏆'
    },
    {
      title: '创新驱动',
      description: '不断研发新技术、新产品，满足客户日益增长的需求。',
      icon: '🚀'
    },
    {
      title: '客户导向',
      description: '以客户需求为中心，提供个性化的解决方案和优质服务。',
      icon: '👥'
    },
    {
      title: '诚信经营',
      description: '坚持诚信为本，与客户、供应商建立长期互信合作关系。',
      icon: '🤝'
    }
  ];

  // Observer for scroll animations
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    Object.entries(sectionRefs).forEach(([key, ref]) => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setVisibleSections(prev => ({ ...prev, [key]: true }));
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">关于我们</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              天津中信通国际贸易有限公司是高品质管道及配件的领先制造商和出口商，在全球范围内享有盛誉。
            </p>
            <Link 
              href="/contact" 
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block"
            >
              联系我们
            </Link>
          </div>
        </section>

        {/* Company Overview */}
        <section 
          ref={sectionRefs.overview} 
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ease-out ${visibleSections.overview ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">公司简介</h2>
                <p className="text-gray-700 mb-4 text-lg">
                  天津中信通国际贸易有限公司成立于2010年，从一家本地制造商成长为全球高品质管道及配件的供应商。我们专业生产和出口PE管、PVC管、管道配件和复合管，服务于多个行业。
                </p>
                <p className="text-gray-700 mb-8 text-lg">
                  公司总部位于中国天津，已在全球50多个国家建立了强大的业务网络，为建筑、供水、排水、石油天然气等工业领域的客户提供服务。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(companyInfo).map(([key, value], index) => (
                    <div key={index} className="bg-blue-50 p-6 rounded-lg text-center transition-all duration-500 hover:shadow-md transform hover:-translate-y-1">
                      <p className="text-blue-800 font-bold text-3xl mb-2">{value}</p>
                      <p className="text-gray-600">{key === 'established' ? '成立年份' : key === 'employees' ? '员工人数' : key === 'factoryArea' ? '工厂面积' : key === 'annualCapacity' ? '年产能' : key === 'markets' ? '市场覆盖' : '产品型号'}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/images/background/workshop1.jpg" 
                  alt="天津中信通工厂" 
                  fill
                  className="object-cover"
                  quality={85}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Production Capabilities */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">生产能力</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">先进的生产设备</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900">HDPE管道生产线</h4>
                      <p className="text-gray-600">引进德国先进的HDPE管道生产线，年产能达50,000吨</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900">SRTP钢丝增强管生产线</h4>
                      <p className="text-gray-600">专业生产钢丝增强聚乙烯复合管道，年产能达30,000吨</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900">管道配件生产线</h4>
                      <p className="text-gray-600">全自动注塑机，生产各种规格的管道配件，年产能达20,000吨</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/images/background/workshop1.jpg" 
                  alt="先进的生产设备" 
                  fill
                  className="object-cover"
                  quality={85}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quality Control */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">质量控制</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg overflow-hidden shadow-xl order-2 lg:order-1">
                <Image 
                  src="/images/background/laboratory.jpg" 
                  alt="CNAS实验室" 
                  fill
                  className="object-cover"
                  quality={85}
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">严格的质量控制体系</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900">CNAS认可实验室</h4>
                      <p className="text-gray-600">配备先进的检测设备，对原材料和成品进行全面检测</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900">全流程质量控制</h4>
                      <p className="text-gray-600">从原材料采购到生产过程，再到成品检验，每一个环节都严格把关</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900">国际认证标准</h4>
                      <p className="text-gray-600">产品符合ISO 9001、ISO 14001、API Spec 5L等国际标准</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">核心价值观</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-lg shadow-md p-8 text-center transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl ${visibleSections.overview ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Mission & Vision */}
        <section 
          ref={sectionRefs.mission} 
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">使命与愿景</h2>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 transition-all duration-1000 ease-out ${visibleSections.mission ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-blue-50 p-8 rounded-lg shadow-md transition-all duration-500 hover:shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-blue-700">我们的使命</h3>
                <p className="text-gray-700 text-lg">
                  提供高品质、可靠的管道解决方案，满足全球客户的多样化需求，同时坚持可持续发展、创新和客户满意度的承诺。
                </p>
              </div>
              <div className="bg-green-50 p-8 rounded-lg shadow-md transition-all duration-500 hover:shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-green-700">我们的愿景</h3>
                <p className="text-gray-700 text-lg">
                  成为管道及配件解决方案的首选全球合作伙伴，以品质、创新和卓越的客户服务而闻名。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Management Team */}
        <section 
          ref={sectionRefs.team} 
          className="py-20 bg-gray-50"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">管理团队</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl ${visibleSections.team ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="h-72 overflow-hidden">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill
                      className="object-cover"
                      quality={80}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 mb-4">{member.position}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Milestones */}
        <section 
          ref={sectionRefs.milestones} 
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">公司里程碑</h2>
            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`flex mb-12 transition-all duration-500 ${visibleSections.milestones ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="mr-6 flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="border-l-2 border-blue-200 pl-8 pb-12">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{milestone.event}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Factory Environment */}
        <section 
          ref={sectionRefs.factory} 
          className="py-20 bg-gray-50"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">工厂环境</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div 
                className={`rounded-lg overflow-hidden shadow-md transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl ${visibleSections.factory ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="h-64 overflow-hidden">
                  <Image 
                    src="/images/background/aerial-panorama.jpg" 
                    alt="工厂外观" 
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    quality={80}
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="font-semibold text-center text-lg text-gray-900">工厂外观</h3>
                </div>
              </div>
              <div 
                className={`rounded-lg overflow-hidden shadow-md transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl ${visibleSections.factory ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: '100ms' }}
              >
                <div className="h-64 overflow-hidden">
                  <Image 
                    src="/images/background/workshop1.jpg" 
                    alt="车间内部" 
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    quality={80}
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="font-semibold text-center text-lg text-gray-900">车间内部</h3>
                </div>
              </div>
              <div 
                className={`rounded-lg overflow-hidden shadow-md transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl ${visibleSections.factory ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: '200ms' }}
              >
                <div className="h-64 overflow-hidden">
                  <Image 
                    src="/images/background/laboratory.jpg" 
                    alt="CNAS实验室" 
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    quality={80}
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="font-semibold text-center text-lg text-gray-900">CNAS实验室</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section 
          ref={sectionRefs.global} 
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">全球业务</h2>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ease-out ${visibleSections.global ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-blue-50 rounded-lg p-8 transition-all duration-500 hover:shadow-md">
                <h3 className="font-semibold mb-4 text-xl text-blue-800">亚洲</h3>
                <p className="text-gray-600">中国、日本、韩国、东南亚</p>
              </div>
              <div className="bg-green-50 rounded-lg p-8 transition-all duration-500 hover:shadow-md">
                <h3 className="font-semibold mb-4 text-xl text-green-800">欧洲</h3>
                <p className="text-gray-600">德国、英国、法国、意大利、西班牙</p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-8 transition-all duration-500 hover:shadow-md">
                <h3 className="font-semibold mb-4 text-xl text-yellow-800">中东</h3>
                <p className="text-gray-600">阿联酋、沙特阿拉伯、卡塔尔、科威特</p>
              </div>
              <div className="bg-red-50 rounded-lg p-8 transition-all duration-500 hover:shadow-md">
                <h3 className="font-semibold mb-4 text-xl text-red-800">非洲</h3>
                <p className="text-gray-600">南非、尼日利亚、肯尼亚、埃及</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">与我们合作</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              我们期待与您建立长期稳定的合作关系，为您提供高品质的管道解决方案。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block"
              >
                联系我们
              </Link>
              <Link 
                href="/products" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block"
              >
                浏览产品
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;