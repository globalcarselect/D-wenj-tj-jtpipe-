'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const CertificationsPage = () => {
  const [selectedCertType, setSelectedCertType] = useState<string>('All');
  const [visibleCertifications, setVisibleCertifications] = useState<number[]>([]);
  const [expandedCert, setExpandedCert] = useState<number | null>(null);
  const [visibleProcesses, setVisibleProcesses] = useState<number[]>([]);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const sectionRefs = {
    certifications: useRef<HTMLDivElement>(null),
    process: useRef<HTMLDivElement>(null),
    policy: useRef<HTMLDivElement>(null),
    faq: useRef<HTMLDivElement>(null)
  };

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    // Certifications observer
    const certObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const certifications = [0, 1, 2, 3];
          certifications.forEach((index, i) => {
            setTimeout(() => {
              setVisibleCertifications(prev => [...prev, index]);
            }, i * 200);
          });
          certObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    // Process observer
    const processObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const processes = [0, 1, 2, 3];
          processes.forEach((index, i) => {
            setTimeout(() => {
              setVisibleProcesses(prev => [...prev, index]);
            }, i * 200);
          });
          processObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRefs.certifications.current) {
      certObserver.observe(sectionRefs.certifications.current);
      observers.push(certObserver);
    }

    if (sectionRefs.process.current) {
      processObserver.observe(sectionRefs.process.current);
      observers.push(processObserver);
    }

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const certifications = [
    {
      id: 1,
      title: 'ISO 9001:2015 质量管理体系认证',
      type: '质量管理',
      description: '国际标准化组织制定的质量管理体系标准，确保组织能够满足客户和其他相关方的需求，同时符合法律法规要求。',
      details: '我们的质量管理体系通过了ISO 9001:2015认证，覆盖了从原材料采购、生产过程控制、成品检验到售后服务的全过程。这确保了我们能够持续稳定地提供满足客户要求和适用法规要求的产品和服务。',
      image: '/images/certifications/iso9001.jpg',
      date: '2023-06-15',
      validity: '3年',
      scope: '聚乙烯(PE)管道、聚氯乙烯(PVC)管道及配件的生产和销售'
    },
    {
      id: 2,
      title: 'ISO 14001:2015 环境管理体系认证',
      type: '环境管理',
      description: '国际标准化组织制定的环境管理体系标准，帮助组织通过更高效地利用资源和减少废物来改善环境绩效。',
      details: '我们的环境管理体系通过了ISO 14001:2015认证，致力于减少生产过程中的环境影响，包括能源消耗、水资源利用和废物产生。我们采用清洁生产技术，确保生产活动符合环保法规要求，为可持续发展做出贡献。',
      image: '/images/certifications/iso14001.jpg',
      date: '2023-08-20',
      validity: '3年',
      scope: '生产过程的环境管理'
    },
    {
      id: 3,
      title: 'CE 认证',
      type: '市场准入',
      description: '欧盟强制性认证标志，表明产品已通过评估，符合欧盟安全、健康和环境保护要求。',
      details: '我们的产品通过了CE认证，符合欧盟指令的要求，包括压力设备指令(PED)、建筑产品法规(CPR)等。这确保了我们的产品可以在欧盟市场自由流通，为欧洲客户提供了质量和安全保障。',
      image: '/images/certifications/ce.png',
      date: '2023-10-05',
      validity: '5年',
      scope: '压力管道及配件'
    },
    {
      id: 4,
      title: 'API 认证',
      type: '行业标准',
      description: '美国石油学会认证，用于石油和天然气行业的产品，确保它们符合行业安全和性能标准。',
      details: '我们的产品通过了API认证，符合美国石油学会制定的标准，适用于石油和天然气行业的管道系统。这证明了我们的产品在极端条件下的可靠性和安全性，为能源行业客户提供了高质量的解决方案。',
      image: '/images/certifications/business-license.jpg',
      date: '2023-11-12',
      validity: '3年',
      scope: '石油天然气行业用管道及配件'
    },
    {
      id: 5,
      title: 'UL 认证',
      type: '安全标准',
      description: '美国保险商实验室认证，确保产品符合安全标准。',
      details: '我们的产品通过了UL认证，符合美国安全标准，适用于电气和水暖系统。这证明了我们的产品在安全性能方面达到了国际领先水平，为北美客户提供了可靠的质量保障。',
      image: '/images/certifications/wras.png',
      date: '2023-09-30',
      validity: '4年',
      scope: '电气管道及配件'
    },
    {
      id: 6,
      title: 'CNAS 实验室认可',
      type: '实验室认可',
      description: '中国合格评定国家认可委员会实验室认可，确保实验室检测能力符合国际标准。',
      details: '我们的实验室通过了CNAS认可，具备按照国际标准进行检测的能力。这确保了我们能够为客户提供准确、可靠的产品检测报告，为产品质量提供了有力的技术支持。',
      image: '/images/certifications/iso9001.jpg',
      date: '2023-07-10',
      validity: '3年',
      scope: '管道及配件的物理性能和化学性能检测'
    }
  ];

  const qualityProcess = [
    {
      title: '原材料检验',
      description: '对所有原材料进行严格的质量控制，确保它们在生产开始前符合我们的规格要求。',
      details: '我们的原材料检验团队会对每一批次的原材料进行全面检测，包括化学成分分析、物理性能测试等。只有通过检验的原材料才能进入生产环节，从源头确保产品质量。',
      icon: '🔍'
    },
    {
      title: '生产过程控制',
      description: '对生产过程进行实时监控，确保整个制造过程中保持一致的质量标准。',
      details: '我们采用先进的生产管理系统，对生产过程中的关键参数进行实时监控和记录。生产人员经过专业培训，严格按照操作规程执行，确保每一道工序都符合质量要求。',
      icon: '⚙️'
    },
    {
      title: '成品检验',
      description: '对成品进行全面测试，验证它们是否符合所有要求的规格和标准。',
      details: '我们的实验室配备了先进的检测设备，能够对产品的各项性能指标进行全面检测，包括尺寸偏差、压力测试、耐腐蚀性测试等。只有通过所有检验项目的产品才能出厂。',
      icon: '✅'
    },
    {
      title: '包装与运输',
      description: '质量控制延伸到适当的包装和安全运输，确保产品完好无损地到达目的地。',
      details: '我们采用专业的包装材料和方法，根据产品特性和运输距离选择合适的包装方案。在运输过程中，我们与可靠的物流合作伙伴合作，确保产品安全、及时地送达客户手中。',
      icon: '📦'
    }
  ];

  const faqItems = [
    {
      question: '你们的产品符合哪些标准？',
      answer: '我们的产品符合多种国际标准，包括ISO、CE、API等，以及国家标准如GB/T。我们确保产品符合我们服务的每个市场的具体要求。'
    },
    {
      question: '你们如何确保质量一致性？',
      answer: '我们在整个生产过程中实施严格的质量管理体系，从原材料检验到成品测试。我们的ISO 9001认证确保了一致的质量控制程序。'
    },
    {
      question: '你们能为特定项目提供定制的质量认证吗？',
      answer: '是的，我们可以提供项目特定的质量文档和认证，以满足您特定应用的要求。请联系我们的销售团队了解更多信息。'
    },
    {
      question: '你们的质量保证期是多久？',
      answer: '我们的标准质量保证期为12个月，从产品交付之日起计算。对于特定项目，我们可以根据客户需求提供更长的质量保证期。'
    },
    {
      question: '如何获取你们产品的质量证书？',
      answer: '您可以通过我们的销售团队获取产品的质量证书。对于常规产品，我们会随货提供质量检验报告；对于特殊要求，我们可以提供额外的质量认证文件。'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">质量认证</h1>
            <p className="text-xl max-w-3xl mx-auto">
              我们对质量的承诺体现在我们全面的认证组合中，确保我们的产品符合最高的国际标准。
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          {/* Certification Cards */}
          <section ref={sectionRefs.certifications} className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">我们的认证</h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              我们的产品通过了多项国际认证，确保质量和安全性符合全球标准，为客户提供可靠的产品保障。
            </p>
            
            {/* Certification Filter */}
            <div className="mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-6">认证筛选</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">认证类型</label>
                    <select 
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={selectedCertType}
                      onChange={(e) => setSelectedCertType(e.target.value)}
                    >
                      <option value="All">全部类型</option>
                      {[...new Set(certifications.map(cert => cert.type))].map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">认证状态</label>
                    <select 
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="valid">有效</option>
                      <option value="expiring">即将到期</option>
                      <option value="expired">已过期</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">有效期</label>
                    <select 
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="1year">1年以内</option>
                      <option value="2years">2年以内</option>
                      <option value="3years+">3年以上</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
                    onClick={() => setSelectedCertType('All')}
                  >
                    重置筛选
                  </button>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.filter(cert => selectedCertType === 'All' || cert.type === selectedCertType).map((cert, index) => (
                <div 
                  key={cert.id} 
                  className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${visibleCertifications.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image 
                      src={cert.image} 
                      alt={cert.title} 
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                      quality={80}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <h4 className="font-semibold">{cert.title}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{cert.title}</h3>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        有效期：{cert.validity}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{cert.description}</p>
                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-1">认证范围：{cert.scope}</p>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>颁发日期：{cert.date}</span>
                        <span>状态：有效</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setExpandedCert(expandedCert === index ? null : index)}
                      className="w-full flex justify-between items-center p-2 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-blue-600 font-medium">{expandedCert === index ? '收起详情' : '查看详情'}</span>
                      <svg 
                        className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${expandedCert === index ? 'transform rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {expandedCert === index && (
                      <div className="mt-4 pt-4 border-t border-gray-200 animate-fadeIn">
                        <p className="text-gray-600">{cert.details}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quality Process */}
          <section ref={sectionRefs.process} className="bg-white py-16 mb-20 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-4">我们的质量保证流程</h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              我们建立了完善的质量管理体系，从原材料采购到生产过程控制，再到成品检验，每一个环节都严格把关。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {qualityProcess.map((process, index) => (
                <div 
                  key={index} 
                  className={`bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 ${visibleProcesses.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="text-5xl mb-6 text-center">{process.icon}</div>
                  <h3 className="text-lg font-semibold mb-3 text-center">{process.title}</h3>
                  <p className="text-gray-600 text-center mb-4">{process.description}</p>
                  <button
                    onClick={() => setExpandedCert(expandedCert === index + 10 ? null : index + 10)}
                    className="w-full flex justify-center items-center text-blue-600 font-medium text-sm hover:underline"
                  >
                    {expandedCert === index + 10 ? '收起详情' : '了解更多'}
                  </button>
                  {expandedCert === index + 10 && (
                    <div className="mt-4 pt-4 border-t border-gray-200 animate-fadeIn">
                      <p className="text-gray-600 text-sm">{process.details}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Quality Policy */}
          <section ref={sectionRefs.policy} className="mb-20">
            <div className="bg-blue-50 rounded-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-center mb-8">我们的质量方针</h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-gray-700 mb-6 text-lg">
                  天津中信通国际贸易有限公司致力于提供高品质的管道及配件，满足并超越客户期望和国际标准。
                </p>
                <p className="text-gray-700 mb-8 text-lg">
                  我们的质量方针基于持续改进、创新和严格遵守质量管理体系。我们致力于：
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-3">1</div>
                      <h4 className="font-medium">交付符合客户要求的产品</h4>
                    </div>
                    <p className="text-sm text-gray-600">持续提供满足客户需求和适用法规要求的产品和服务</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-3">2</div>
                      <h4 className="font-medium">维护和改进质量管理体系</h4>
                    </div>
                    <p className="text-sm text-gray-600">不断完善我们的质量管理体系，确保其有效性和适应性</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-3">3</div>
                      <h4 className="font-medium">培训和发展员工</h4>
                    </div>
                    <p className="text-sm text-gray-600">提高员工的质量意识和技能，确保他们能够胜任各自的工作</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-3">4</div>
                      <h4 className="font-medium">持续改进过程和产品</h4>
                    </div>
                    <p className="text-sm text-gray-600">不断寻求改进机会，提高过程效率和产品质量</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section ref={sectionRefs.faq}>
            <h2 className="text-3xl font-bold text-center mb-4">质量保证常见问题</h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              以下是关于我们质量保证体系的常见问题解答，如有其他疑问，请随时联系我们。
            </p>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button 
                    className="w-full text-left p-5 font-medium text-gray-900 hover:bg-gray-50 flex justify-between items-center"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <span>{item.question}</span>
                    <svg 
                      className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${expandedFaq === index ? 'transform rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedFaq === index && (
                    <div className="p-5 bg-gray-50 border-t border-gray-200 animate-fadeIn">
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CertificationsPage;