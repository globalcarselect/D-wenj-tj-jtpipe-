import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const ForeignTradeTeam = () => {
  const [visibleMembers, setVisibleMembers] = useState<number[]>([]);
  const [visibleServices, setVisibleServices] = useState<number[]>([]);
  const [visibleAdvantages, setVisibleAdvantages] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const teamMembers = [
    {
      name: '张明',
      position: '外贸总监',
      experience: '10年+国际贸易经验',
      description: '专注于全球市场开发和客户关系管理，拥有丰富的国际商务谈判经验',
      avatar: '/images/about/company-overview.jpg',
      skills: ['全球市场开发', '客户关系管理', '商务谈判']
    },
    {
      name: '李婷',
      position: '外贸经理',
      experience: '8年+国际贸易经验',
      description: '精通欧洲市场，熟悉欧盟法规和认证要求，擅长产品出口欧盟市场的全程操作',
      avatar: '/images/about/factory-equipment.jpg',
      skills: ['欧洲市场', '欧盟法规', '认证要求']
    },
    {
      name: '王强',
      position: '外贸专员',
      experience: '5年+国际贸易经验',
      description: '专注于中东和非洲市场，熟悉当地商业文化和贸易习惯，为客户提供定制化解决方案',
      avatar: '/images/about/laboratory.jpg',
      skills: ['中东市场', '非洲市场', '定制化解决方案']
    },
    {
      name: '赵芳',
      position: '外贸专员',
      experience: '6年+国际贸易经验',
      description: '专注于东南亚和北美市场，熟悉当地市场需求和贸易政策，为客户提供专业的市场分析和产品建议',
      avatar: '/images/about/workshop1.jpg',
      skills: ['东南亚市场', '北美市场', '市场分析']
    }
  ];

  const services = [
    {
      title: '市场分析与开发',
      description: '针对不同国家和地区的市场需求进行深入分析，制定个性化的市场开发策略',
      icon: '🌍',
      color: 'bg-blue-500'
    },
    {
      title: '产品定制与报价',
      description: '根据客户的具体需求，提供产品定制方案和具有竞争力的报价',
      icon: '📋',
      color: 'bg-green-500'
    },
    {
      title: '国际认证与合规',
      description: '协助客户获取所需的国际认证，确保产品符合目标市场的法规要求',
      icon: '✅',
      color: 'bg-yellow-500'
    },
    {
      title: '订单执行与跟踪',
      description: '全程跟踪订单执行情况，确保产品按时、按质、按量交付',
      icon: '📦',
      color: 'bg-purple-500'
    },
    {
      title: '物流与清关',
      description: '提供专业的物流解决方案，协助客户处理清关事宜，确保货物顺利通关',
      icon: '🚢',
      color: 'bg-red-500'
    },
    {
      title: '售后服务与支持',
      description: '提供及时、专业的售后服务和技术支持，解决客户在使用过程中遇到的问题',
      icon: '🛠️',
      color: 'bg-indigo-500'
    }
  ];

  const advantages = [
    '10年+国际贸易经验，服务客户遍布全球30+国家',
    '精通英语、俄语、西班牙语等多语种，确保与客户的顺畅沟通',
    '熟悉各主要市场的法规和认证要求，确保产品合规出口',
    '与多家国际物流和货代公司建立长期合作关系，提供最优物流方案',
    '24小时响应客户需求，提供全天候服务支持',
    '定期参加国际展会，了解最新市场动态和行业趋势'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Animate team members
          teamMembers.forEach((_, index) => {
            setTimeout(() => {
              setVisibleMembers(prev => [...prev, index]);
            }, index * 200);
          });
          
          // Animate services
          setTimeout(() => {
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleServices(prev => [...prev, index]);
              }, index * 150);
            });
          }, 800);
          
          // Animate advantages
          setTimeout(() => {
            setVisibleAdvantages(true);
          }, 1800);
          
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

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">专业外贸团队服务</h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          我们拥有一支经验丰富、专业高效的外贸团队，为全球客户提供全方位的国际贸易服务
        </p>

        {/* Team Members */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-10 text-center">外贸团队成员</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className={`bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${visibleMembers.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64 bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600 opacity-10"></div>
                  <div className="relative z-10">
                    <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image 
                        src={`/images/products/${index % 4 === 0 ? 'pe-pipe' : index % 4 === 1 ? 'srtp-pipe' : index % 4 === 2 ? 'hdpe-pipe-fittings' : 'pipe-fittings'}.jpg`} 
                        alt={member.name} 
                        fill 
                        className="object-cover"
                        quality={80}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-center mb-1">{member.name}</h4>
                  <p className="text-blue-600 text-center mb-1">{member.position}</p>
                  <p className="text-sm text-gray-500 text-center mb-4">{member.experience}</p>
                  <p className="text-gray-700 text-center mb-6">{member.description}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.skills.map((skill, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Content */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-10 text-center">服务内容</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${visibleServices.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`${service.color} p-6 text-white text-center`}>
                  <div className="text-4xl mb-2">{service.icon}</div>
                  <h4 className="text-lg font-semibold">{service.title}</h4>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 text-center">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Advantages */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-10 text-center">我们的优势</h3>
          <div className="bg-gray-50 rounded-xl p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {advantages.map((advantage, index) => (
                <div 
                  key={index} 
                  className={`flex items-start transition-all duration-500 ${visibleAdvantages ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{advantage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service Process */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-10 text-center">服务流程</h3>
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            
            {/* Process Steps */}
            <div className="space-y-16">
              {[
                { step: '1. 客户咨询', content: '了解客户需求，提供初步解决方案和报价', icon: '💬' },
                { step: '2. 方案定制', content: '根据客户具体需求，定制个性化产品方案', icon: '📝' },
                { step: '3. 合同签订', content: '确认订单细节，签订国际贸易合同', icon: '📄' },
                { step: '4. 生产安排', content: '协调生产部门，确保产品按时生产', icon: '🏭' },
                { step: '5. 质量检验', content: '严格的产品质量检验，确保产品符合客户要求', icon: '✅' },
                { step: '6. 物流安排', content: '安排国际物流，确保货物安全及时送达', icon: '🚢' },
                { step: '7. 售后服务', content: '提供持续的售后服务和技术支持', icon: '🛠️' }
              ].map((process, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} transition-all duration-500 ${visibleAdvantages ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: `${index * 150 + 500}ms` }}
                >
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 md:text-right">
                    <h4 className="text-xl font-semibold mb-3 flex items-center justify-center md:justify-end gap-2">
                      <span>{process.icon}</span>
                      {process.step}
                    </h4>
                    <p className="text-gray-700">{process.content}</p>
                  </div>
                  <div className="z-10 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {index + 1}
                  </div>
                  <div className="md:w-1/2 md:pl-12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-600 text-white rounded-xl p-8 md:p-10 text-center shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">需要专业的外贸服务？</h3>
          <p className="mb-8 max-w-2xl mx-auto text-lg">
            我们的专业外贸团队随时为您提供全方位的国际贸易服务，帮助您拓展全球市场。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-md font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block w-full sm:w-auto"
            >
              联系我们
            </Link>
            <Link 
              href="/export" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-md font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block w-full sm:w-auto"
            >
              了解更多
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForeignTradeTeam;