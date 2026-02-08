'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const QuickLinks = () => {
  const [isVisible, setIsVisible] = useState(false);

  const quickLinks = [
    {
      category: '主要产品',
      links: [
        { name: 'HDPE管道及配件', href: '/product-list/hdpe-pipe-and-fittings' },
        { name: 'HDPE排水管道', href: '/product-list/hdpe-pipe-for-drainage' },
        { name: '钢带增强HDPE管道', href: '/product-list/steel-wire-reinforced-hdpe-pipe' },
        { name: 'PPR管道', href: '/product-list/ppr-pipe' },
        { name: 'UPVC给水管道', href: '/product-list/upvc-water-supply-pipe' },
        { name: 'UPVC排水管道', href: '/product-list/upvc-pipe-for-drainage' }
      ]
    },
    {
      category: '专业产品',
      links: [
        { name: 'CPVC电缆保护管道', href: '/product-list/cpvc-pipe-for-power-cable' },
        { name: 'UPVC管道配件', href: '/product-list/upvc-pipe-fittings' },
        { name: 'MPP管道', href: '/product-list/mpp-pipe' },
        { name: 'PE-RT管道及配件', href: '/product-list/pe-rt-pipe-and-fittings' },
        { name: 'PVC线管', href: '/product-list/pvc-conduit' },
        { name: '电缆套管', href: '/product-list/cable-casing-pipe' }
      ]
    },
    {
      category: '设备与服务',
      links: [
        { name: '焊接设备', href: '/product-list/welding-machine' },
        { name: '阀门', href: '/product-list/valve' },
        { name: '钢增强HDPE管道SRPE', href: '/product-list/steel-reinforced-hdpe-pipe-srpe' },
        { name: 'PE100燃气管', href: '/product-list/hdpe-natural-gas-pipe' },
        { name: '工厂展示', href: '/factory/factory' },
        { name: '质量检测', href: '/factory/quality-test' }
      ]
    },
    {
      category: '公司信息',
      links: [
        { name: '关于我们', href: '/aboutus' },
        { name: '公司风采', href: '/company-style' },
        { name: '展会活动', href: '/exhibition' },
        { name: '认证资质', href: '/certifications' },
        { name: '团队服务', href: '/team-service' },
        { name: '物流配送', href: '/delivery' }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('quick-links-section');
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
    <section id="quick-links-section" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">快速链接</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              快速访问您感兴趣的产品和信息，便捷导航帮助您找到所需内容
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickLinks.map((category, categoryIndex) => (
              <div 
                key={category.category} 
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{ transitionDelay: `${categoryIndex * 100}ms` }}
              >
                <h3 className="text-lg font-semibold mb-4 text-gray-900 pb-3 border-b border-gray-200">
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.links.map((link, linkIndex) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-gray-600 hover:text-blue-600 flex items-center group transition-colors duration-300"
                      >
                        <svg className="w-4 h-4 mr-3 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-sm">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center md:text-left">
                <h4 className="font-semibold text-gray-900 mb-3">联系我们</h4>
                <p className="text-gray-600 text-sm">
                  地址: 中国天津市宝坻区塑料管道生产基地
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  电话: 86-22-29919888
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  邮箱: sales@pipeschina.cn
                </p>
              </div>
              <div className="text-center md:text-left">
                <h4 className="font-semibold text-gray-900 mb-3">工作时间</h4>
                <p className="text-gray-600 text-sm">
                  周一至周五: 8:30 - 17:30
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  周六: 9:00 - 12:00
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  周日: 休息
                </p>
              </div>
              <div className="text-center md:text-left">
                <h4 className="font-semibold text-gray-900 mb-3">快速联系</h4>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link 
                    href="/contact#inquiry_area"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors duration-300 text-center"
                  >
                    在线询价
                  </Link>
                  <Link 
                    href="/contact"
                    className="bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 text-sm font-medium py-2 px-4 rounded transition-colors duration-300 text-center"
                  >
                    联系我们
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;