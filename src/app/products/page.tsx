'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProduct, setSelectedProduct] = useState<number>(0);
  const [selectedModel, setSelectedModel] = useState<string>('All');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('All');
  const [visibleCategories, setVisibleCategories] = useState<boolean>(false);
  const [visibleProducts, setVisibleProducts] = useState<Record<string, boolean>>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  // 产品分类和用途
  const productCategories = [
    {
      id: 'pe-pipes',
      name: 'PE管道',
      description: '聚乙烯管道，具有优异的耐腐蚀性、柔韧性和使用寿命，广泛应用于供水、燃气、排水等领域。',
      image: '/images/products/HDPE Pipe and Fittings.jpg',
      uses: ['城市供水系统', '燃气输送', '排水系统', '农田灌溉', '工业流体输送']
    },
    {
      id: 'pvc-pipes',
      name: 'PVC管道',
      description: '聚氯乙烯管道，具有良好的耐化学性、阻燃性和绝缘性，适用于排水、电力通信等领域。',
      image: '/images/products/UPVC Pressure Pipe and fittings for Water Supply.jpg',
      uses: ['建筑排水系统', '电力电缆保护', '通信光缆保护', '化工流体输送', '农业灌溉']
    },
    {
      id: 'pipe-fittings',
      name: '管道配件',
      description: '各种管道连接和转向配件，确保管道系统的完整性和密封性。',
      image: '/images/products/pipe-fittings.jpg',
      uses: ['管道系统连接', '方向改变', '分支连接', '维修更换', '系统扩展']
    },
    {
      id: 'composite-pipes',
      name: '复合管道',
      description: '钢塑复合管道，结合了金属的强度和塑料的耐腐蚀性，适用于高压、大口径应用。',
      image: '/images/products/srtp-pipe.jpg',
      uses: ['高压供水', '石油天然气输送', '市政工程', '工业管道系统', '长距离输水']
    }
  ];

  // 产品数据
  const products = [
    // PE管道类别
    {
      id: 1,
      name: 'HDPE给水管',
      category: 'PE管道',
      categoryId: 'pe-pipes',
      subcategory: '供水管道',
      model: 'PE100',
      material: '高密度聚乙烯',
      sizes: ['DN20', 'DN25', 'DN32', 'DN40', 'DN50', 'DN63', 'DN75', 'DN90', 'DN110', 'DN125', 'DN140', 'DN160', 'DN180', 'DN200'],
      pressureRating: 'PN10, PN16, PN20',
      image: '/images/products/HDPE Pipe and Fittings.jpg',
      description: '采用优质高密度聚乙烯原料生产，具有优异的耐腐蚀性、柔韧性和使用寿命，符合国家标准要求。',
      uses: ['城市自来水供应', '小区二次供水', '农村安全饮水工程', '工业循环水系统']
    },
    {
      id: 2,
      name: 'HDPE燃气管',
      category: 'PE管道',
      categoryId: 'pe-pipes',
      subcategory: '燃气管道',
      model: 'PE80',
      material: '高密度聚乙烯',
      sizes: ['DN20', 'DN25', 'DN32', 'DN40', 'DN50', 'DN63', 'DN75', 'DN90', 'DN110'],
      pressureRating: 'PN10, PN16',
      image: '/images/products/HDPE Pipe and Fittings.jpg',
      description: '专门用于天然气和液化石油气输送的PE管道，具有良好的密封性和安全性。',
      uses: ['城市燃气输送', '小区燃气管道', '工业燃气供应', '天然气长输管线']
    },
    {
      id: 3,
      name: 'HDPE排水管',
      category: 'PE管道',
      categoryId: 'pe-pipes',
      subcategory: '排水管道',
      model: 'PE100',
      material: '高密度聚乙烯',
      sizes: ['DN110', 'DN125', 'DN140', 'DN160', 'DN180', 'DN200', 'DN225', 'DN250', 'DN300', 'DN355', 'DN400'],
      pressureRating: 'PN6, PN10',
      image: '/images/products/HDPE Double Wall Corrugate Pipe for Drainage.jpg',
      description: '用于雨水、污水等排水系统的PE管道，具有良好的抗堵塞性和自清洁能力。',
      uses: ['城市雨水排放', '小区污水收集', '工业废水处理', '农田排水系统']
    },
    
    // PVC管道类别
    {
      id: 4,
      name: 'PVC-U排水管',
      category: 'PVC管道',
      categoryId: 'pvc-pipes',
      subcategory: '排水管道',
      model: 'PVC-U',
      material: '硬聚氯乙烯',
      sizes: ['DN50', 'DN75', 'DN110', 'DN125', 'DN160', 'DN200', 'DN250', 'DN315'],
      pressureRating: 'PN6',
      image: '/images/products/UPVC Pressure Pipe and fittings for Water Supply.jpg',
      description: '硬聚氯乙烯排水管道，具有良好的耐化学性和阻燃性，适用于建筑排水系统。',
      uses: ['建筑室内排水', '雨水收集系统', '工业废水排放', '医院污水排放']
    },
    {
      id: 5,
      name: 'PVC-C冷热给水管',
      category: 'PVC管道',
      categoryId: 'pvc-pipes',
      subcategory: '给水管道',
      model: 'PVC-C',
      material: '氯化聚氯乙烯',
      sizes: ['DN15', 'DN20', 'DN25', 'DN32', 'DN40', 'DN50', 'DN65', 'DN80'],
      pressureRating: 'PN16, PN20',
      image: '/images/products/CPVC underground power cable duct.jpg',
      description: '氯化聚氯乙烯冷热给水管，具有优异的耐高温性能和抗压强度。',
      uses: ['建筑冷热给水', '热水循环系统', '工业热水输送', '中央空调冷凝水']
    },
    
    // 管道配件类别
    {
      id: 6,
      name: 'PE弯头',
      category: '管道配件',
      categoryId: 'pipe-fittings',
      subcategory: 'PE配件',
      model: 'PE100',
      material: '聚乙烯',
      sizes: ['DN20', 'DN25', 'DN32', 'DN40', 'DN50', 'DN63', 'DN75', 'DN90', 'DN110'],
      angle: '90°, 45°',
      image: '/images/products/Steel Wire Reinforced HDPE Composite Pipe (SRTP)and fittings.jpg',
      description: 'PE管道系统专用弯头，用于改变管道方向，采用热熔连接，确保系统密封性。',
      uses: ['管道转向连接', '系统布局调整', '角落安装', '复杂管网建设']
    },
    {
      id: 7,
      name: 'PE三通',
      category: '管道配件',
      categoryId: 'pipe-fittings',
      subcategory: 'PE配件',
      model: 'PE100',
      material: '聚乙烯',
      sizes: ['DN20', 'DN25', 'DN32', 'DN40', 'DN50', 'DN63', 'DN75', 'DN90', 'DN110'],
      image: '/images/products/Steel Wire Reinforced HDPE Composite Pipe (SRTP)and fittings.jpg',
      description: 'PE管道系统专用三通，用于管道分支连接，确保系统的完整性。',
      uses: ['管道分支连接', '系统扩展', '分流控制', '多用户供水']
    },
    {
      id: 8,
      name: 'PE直接',
      category: '管道配件',
      categoryId: 'pipe-fittings',
      subcategory: 'PE配件',
      model: 'PE100',
      material: '聚乙烯',
      sizes: ['DN20', 'DN25', 'DN32', 'DN40', 'DN50', 'DN63', 'DN75', 'DN90', 'DN110', 'DN125', 'DN140', 'DN160'],
      image: '/images/products/Steel Wire Reinforced HDPE Composite Pipe (SRTP)and fittings.jpg',
      description: 'PE管道系统专用直接，用于管道直线连接，确保系统的连续性。',
      uses: ['管道延长', '系统连接', '维修更换', '长距离管线建设']
    },
    
    // 复合管道类别
    {
      id: 9,
      name: 'SRTP钢丝增强管',
      category: '复合管道',
      categoryId: 'composite-pipes',
      subcategory: 'SRTP',
      model: 'SRTP-1',
      material: '钢丝增强HDPE',
      sizes: ['DN50', 'DN63', 'DN75', 'DN90', 'DN110', 'DN125', 'DN140', 'DN160', 'DN180', 'DN200', 'DN225', 'DN250', 'DN300'],
      pressureRating: 'PN16, PN20, PN25, PN32',
      image: '/images/products/SRTP  pipe.jpg',
      description: '钢丝增强聚乙烯复合管，结合了金属的强度和塑料的耐腐蚀性，适用于高压应用。',
      uses: ['高压供水', '石油天然气输送', '市政工程', '工业管道系统', '长距离输水']
    },
    {
      id: 10,
      name: 'SSP钢带增强管',
      category: '复合管道',
      categoryId: 'composite-pipes',
      subcategory: 'SSP',
      model: 'SSP-1',
      material: '钢带增强HDPE',
      sizes: ['DN200', 'DN250', 'DN300', 'DN355', 'DN400', 'DN450', 'DN500', 'DN600', 'DN700', 'DN800', 'DN900', 'DN1000'],
      pressureRating: 'PN10, PN16',
      image: '/images/products/Metal Reinforced HDPE Spirally Corrugated Pipe (MRP).jpg',
      description: '钢带增强聚乙烯复合管，具有更高的环刚度和抗压强度，适用于大口径排水和市政工程。',
      uses: ['市政排水', '雨水收集', '工业废水', '农田灌溉', '城市防洪']
    },
  ];

  // 按类别分组产品
  const groupedProducts = products.reduce((groups, product) => {
    const category = product.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(product);
    return groups;
  }, {} as Record<string, typeof products>);

  // 过滤产品
  const filteredProducts = products.filter(product => 
    (selectedCategory === 'All' || product.categoryId === selectedCategory) &&
    (selectedProduct === 0 || product.id === selectedProduct) &&
    (selectedModel === 'All' || product.model === selectedModel) &&
    (selectedMaterial === 'All' || product.material.includes(selectedMaterial))
  );

  // 滚动动画
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCategories(true);
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
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* 英雄区域 */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">我们的产品</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              提供高品质、可靠的管道及配件解决方案，满足全球客户的多样化需求
            </p>
            <Link 
              href="/contact" 
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block"
            >
              咨询产品
            </Link>
          </div>
        </section>

        {/* 产品分类 */}
        <section 
          ref={sectionRef}
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">产品分类</h2>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ease-out ${visibleCategories ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {productCategories.map((category, index) => (
                <div 
                  key={category.id} 
                  className={`bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl cursor-pointer ${selectedCategory === category.id ? 'ring-2 ring-blue-500' : ''}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={category.image} 
                      alt={category.name} 
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                      quality={80}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{category.description}</p>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">应用领域：</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.uses.map((use, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {use}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCategory(category.id);
                      }}
                    >
                      查看产品
                    </button>
                  </div>
                </div>
              ))}
              <div 
                className={`bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl cursor-pointer ${selectedCategory === 'All' ? 'ring-2 ring-blue-500' : ''}`}
                onClick={() => setSelectedCategory('All')}
              >
                <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-5xl mb-2">📦</div>
                    <h3 className="text-xl font-semibold">全部产品</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-8 text-sm">浏览所有产品类别和型号</p>
                  <button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCategory('All');
                    }}
                  >
                    查看全部
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 产品用途介绍 */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">产品用途介绍</h2>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-1000 ease-out ${visibleCategories ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* 供水系统 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src="/images/products/pe-pipe.jpg" 
                    alt="供水系统" 
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    quality={80}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold">供水系统</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">用于城市自来水供应、小区二次供水、农村安全饮水工程等领域，确保水质安全和稳定供应。</p>
                  <h4 className="text-lg font-semibold mb-4">适用产品：</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>HDPE给水管</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>PVC-C冷热给水管</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>SRTP钢丝增强管</span>
                    </li>
                  </ul>
                  <Link 
                    href="/products/pe-pipes" 
                    className="text-blue-600 font-medium hover:text-blue-800 flex items-center group transition-colors"
                  >
                    <span>查看详细介绍</span>
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* 排水系统 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src="/images/products/hdpe-drainage-pipe.jpg" 
                    alt="排水系统" 
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    quality={80}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold">排水系统</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">用于城市雨水排放、小区污水收集、工业废水处理等领域，具有良好的抗堵塞性和自清洁能力。</p>
                  <h4 className="text-lg font-semibold mb-4">适用产品：</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>HDPE排水管</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>PVC-U排水管</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>SSP钢带增强管</span>
                    </li>
                  </ul>
                  <Link 
                    href="/products/pe-pipes" 
                    className="text-blue-600 font-medium hover:text-blue-800 flex items-center group transition-colors"
                  >
                    <span>查看详细介绍</span>
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* 燃气输送 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src="/images/products/pe-pipe.jpg" 
                    alt="燃气输送" 
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    quality={80}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold">燃气输送</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">用于城市燃气输送、小区燃气管道、工业燃气供应等领域，具有良好的密封性和安全性。</p>
                  <h4 className="text-lg font-semibold mb-4">适用产品：</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>HDPE燃气管</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>PE管道配件</span>
                    </li>
                  </ul>
                  <Link 
                    href="/products/pe-pipes" 
                    className="text-blue-600 font-medium hover:text-blue-800 flex items-center group transition-colors"
                  >
                    <span>查看详细介绍</span>
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* 工业应用 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src="/images/products/srtp-pipe.jpg" 
                    alt="工业应用" 
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    quality={80}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold">工业应用</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">用于工业流体输送、石油天然气输送、化工流体输送等领域，具有优异的耐腐蚀性和高强度。</p>
                  <h4 className="text-lg font-semibold mb-4">适用产品：</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>SRTP钢丝增强管</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>SSP钢带增强管</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>PVC-C管道</span>
                    </li>
                  </ul>
                  <Link 
                    href="/products/composite-pipes" 
                    className="text-blue-600 font-medium hover:text-blue-800 flex items-center group transition-colors"
                  >
                    <span>查看详细介绍</span>
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 产品展示 */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              {selectedCategory === 'All' ? '全部产品' : productCategories.find(c => c.id === selectedCategory)?.name}
            </h2>
            
            {/* 筛选器 */}
            <div className="mb-12 p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-6">产品筛选</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">产品类别</label>
                  <select 
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="All">全部类别</option>
                    {productCategories.map(category => (
                      <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">产品名称</label>
                  <select 
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedProduct}
                    onChange={(e) => {
                      const productId = parseInt(e.target.value);
                      setSelectedProduct(productId);
                      if (productId > 0) {
                        const product = products.find(p => p.id === productId);
                        if (product) {
                          setSelectedCategory(product.categoryId);
                          setSelectedModel(product.model);
                        }
                      }
                    }}
                  >
                    <option value="0">全部产品</option>
                    {filteredProducts.map(product => (
                      <option key={product.id} value={product.id}>{product.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">产品型号</label>
                  <select 
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                  >
                    <option value="All">全部型号</option>
                    {[...new Set(filteredProducts.map(p => p.model))].map(model => (
                      <option key={model} value={model}>{model}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">材质</label>
                  <select 
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedMaterial}
                    onChange={(e) => setSelectedMaterial(e.target.value)}
                  >
                    <option value="All">全部材质</option>
                    <option value="聚乙烯">聚乙烯</option>
                    <option value="聚氯乙烯">聚氯乙烯</option>
                    <option value="钢丝增强">钢丝增强</option>
                    <option value="钢带增强">钢带增强</option>
                  </select>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedProduct(0);
                    setSelectedModel('All');
                    setSelectedMaterial('All');
                  }}
                >
                  重置筛选
                </button>
              </div>
            </div>

            {/* 产品列表 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <div 
                  key={product.id} 
                  className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl ${visibleCategories ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                      quality={80}
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                      {product.subcategory}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                        <p className="text-sm text-gray-500">型号：{product.model}</p>
                      </div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        {product.material}
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">应用领域：</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.uses.map((use, idx) => (
                          <span key={idx} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                            {use}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-600">规格：</span>
                        <span className="text-gray-900 text-sm">{product.sizes.slice(0, 3).join(', ')} {product.sizes.length > 3 ? '...' : ''}</span>
                      </div>
                      {product.pressureRating && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">压力等级：</span>
                          <span className="text-gray-900">{product.pressureRating}</span>
                        </div>
                      )}
                      {product.angle && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">角度：</span>
                          <span className="text-gray-900">{product.angle}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex space-x-3">
                      <Link 
                        href={`/products/${product.id}`}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors text-center"
                      >
                        查看详情
                      </Link>
                      <Link 
                        href="/contact"
                        className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 px-4 rounded-md transition-colors text-center"
                      >
                        询价
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 行动召唤 */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">需要定制解决方案？</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              我们可以根据您的具体需求提供个性化的管道解决方案
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block"
              >
                联系我们
              </Link>
              <Link 
                href="/about" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block"
              >
                了解更多
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;