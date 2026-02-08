import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

// Sample detailed product data
const productDetails = {
  1: {
    id: 1,
    name: 'HDPE给水管',
    category: 'PE管道',
    material: '高密度聚乙烯',
    sizes: ['DN20', 'DN25', 'DN32', 'DN40', 'DN50', 'DN63', 'DN75', 'DN90', 'DN110', 'DN125', 'DN140', 'DN160', 'DN180', 'DN200'],
    pressureRating: 'PN10, PN16, PN20',
    image: '/images/products/HDPE Pipe and Fittings.jpg',
    description: '采用优质高密度聚乙烯原料生产，具有优异的耐腐蚀性、柔韧性和使用寿命，符合国家标准要求。',
    applications: ['城市自来水供应', '小区二次供水', '农村安全饮水工程', '工业循环水系统'],
    standards: ['ISO 4427', 'GB/T 13663', 'EN 12201'],
    features: [
      '优异的化学稳定性',
      '高抗冲击强度',
      '使用寿命长',
      '安装便捷',
      '耐腐蚀性能好'
    ]
  },
  2: {
    id: 2,
    name: 'HDPE燃气管',
    category: 'PE管道',
    material: '高密度聚乙烯',
    sizes: ['DN20', 'DN25', 'DN32', 'DN40', 'DN50', 'DN63', 'DN75', 'DN90', 'DN110'],
    pressureRating: 'PN10, PN16',
    image: '/images/products/HDPE Pipe and Fittings.jpg',
    description: '专门用于天然气和液化石油气输送的PE管道，具有良好的密封性和安全性。',
    applications: ['城市燃气输送', '小区燃气管道', '工业燃气供应', '天然气长输管线'],
    standards: ['ISO 4437', 'GB 15558.1', 'EN 1555'],
    features: [
      '良好的密封性',
      '抗冲击性能强',
      '耐老化性能好',
      '安装便捷',
      '安全可靠'
    ]
  },
  3: {
    id: 3,
    name: 'HDPE排水管',
    category: 'PE管道',
    material: '高密度聚乙烯',
    sizes: ['DN110', 'DN125', 'DN140', 'DN160', 'DN180', 'DN200', 'DN225', 'DN250', 'DN300', 'DN355', 'DN400'],
    pressureRating: 'PN6, PN10',
    image: '/images/products/HDPE Double Wall Corrugate Pipe for Drainage.jpg',
    description: '用于雨水、污水等排水系统的PE管道，具有良好的抗堵塞性和自清洁能力。',
    applications: ['城市雨水排放', '小区污水收集', '工业废水处理', '农田排水系统'],
    standards: ['GB/T 19472.2', 'ISO 1401', 'EN 13476'],
    features: [
      '内壁光滑',
      '抗堵塞能力强',
      '耐化学腐蚀',
      '重量轻',
      '安装便捷'
    ]
  },
  4: {
    id: 4,
    name: 'PVC-U排水管',
    category: 'PVC管道',
    material: '硬聚氯乙烯',
    sizes: ['DN50', 'DN75', 'DN110', 'DN125', 'DN160', 'DN200', 'DN250', 'DN315'],
    pressureRating: 'PN6',
    image: '/images/products/UPVC Pressure Pipe and fittings for Water Supply.jpg',
    description: '硬聚氯乙烯排水管道，具有良好的耐化学性和阻燃性，适用于建筑排水系统。',
    applications: ['建筑室内排水', '雨水收集系统', '工业废水排放', '医院污水排放'],
    standards: ['GB/T 5836.1', 'ISO 4435', 'EN 1401'],
    features: [
      '内壁光滑',
      '流量大',
      '耐化学腐蚀',
      '重量轻',
      '安装便捷'
    ]
  },
  5: {
    id: 5,
    name: 'PVC-C冷热给水管',
    category: 'PVC管道',
    material: '氯化聚氯乙烯',
    sizes: ['DN15', 'DN20', 'DN25', 'DN32', 'DN40', 'DN50', 'DN65', 'DN80'],
    pressureRating: 'PN16, PN20',
    image: '/images/products/CPVC underground power cable duct.jpg',
    description: '氯化聚氯乙烯冷热给水管，具有优异的耐高温性能和抗压强度。',
    applications: ['建筑冷热给水', '热水循环系统', '工业热水输送', '中央空调冷凝水'],
    standards: ['GB/T 18993.2', 'ISO 15875', 'ASTM D2846'],
    features: [
      '耐高温性能好',
      '抗压强度高',
      '耐化学腐蚀',
      '导热系数低',
      '安装便捷'
    ]
  },
  6: {
    id: 6,
    name: 'PE弯头',
    category: '管道配件',
    material: '聚乙烯',
    sizes: ['DN20', 'DN25', 'DN32', 'DN40', 'DN50', 'DN63', 'DN75', 'DN90', 'DN110'],
    angle: '90°, 45°',
    image: '/images/products/Steel Wire Reinforced HDPE Composite Pipe (SRTP)and fittings.jpg',
    description: 'PE管道系统专用弯头，用于改变管道方向，采用热熔连接，确保系统密封性。',
    applications: ['管道转向连接', '系统布局调整', '角落安装', '复杂管网建设'],
    standards: ['ISO 15494', 'GB/T 13663.2', 'EN 12201'],
    features: [
      '无缝连接',
      '耐压性能好',
      '耐腐蚀',
      '多种角度可选',
      '安装便捷'
    ]
  },
  7: {
    id: 7,
    name: 'PE三通',
    category: '管道配件',
    material: '聚乙烯',
    sizes: ['DN20', 'DN25', 'DN32', 'DN40', 'DN50', 'DN63', 'DN75', 'DN90', 'DN110'],
    image: '/images/products/Steel Wire Reinforced HDPE Composite Pipe (SRTP)and fittings.jpg',
    description: 'PE管道系统专用三通，用于管道分支连接，确保系统的完整性。',
    applications: ['管道分支连接', '系统扩展', '分流控制', '多用户供水'],
    standards: ['ISO 15494', 'GB/T 13663.2', 'EN 12201'],
    features: [
      '无缝连接',
      '耐压性能好',
      '耐腐蚀',
      '安装便捷',
      '系统完整性好'
    ]
  },
  8: {
    id: 8,
    name: 'PE直接',
    category: '管道配件',
    material: '聚乙烯',
    sizes: ['DN20', 'DN25', 'DN32', 'DN40', 'DN50', 'DN63', 'DN75', 'DN90', 'DN110', 'DN125', 'DN140', 'DN160'],
    image: '/images/products/Steel Wire Reinforced HDPE Composite Pipe (SRTP)and fittings.jpg',
    description: 'PE管道系统专用直接，用于管道直线连接，确保系统的连续性。',
    applications: ['管道延长', '系统连接', '维修更换', '长距离管线建设'],
    standards: ['ISO 15494', 'GB/T 13663.2', 'EN 12201'],
    features: [
      '无缝连接',
      '耐压性能好',
      '耐腐蚀',
      '安装便捷',
      '系统连续性好'
    ]
  },
  9: {
    id: 9,
    name: 'SRTP钢丝增强管',
    category: '复合管道',
    material: '钢丝增强HDPE',
    sizes: ['DN50', 'DN63', 'DN75', 'DN90', 'DN110', 'DN125', 'DN140', 'DN160', 'DN180', 'DN200', 'DN225', 'DN250', 'DN300'],
    pressureRating: 'PN16, PN20, PN25, PN32',
    image: '/images/products/SRTP  pipe.jpg',
    description: '钢丝增强聚乙烯复合管，结合了金属的强度和塑料的耐腐蚀性，适用于高压应用。',
    applications: ['高压供水', '石油天然气输送', '市政工程', '工业管道系统', '长距离输水'],
    standards: ['CJ/T 189', 'GB/T 19472.2', 'ISO 14692'],
    features: [
      '高压性能好',
      '钢丝增强',
      '柔韧性好',
      '使用寿命长',
      '适应多种环境'
    ]
  },
  10: {
    id: 10,
    name: 'SSP钢带增强管',
    category: '复合管道',
    material: '钢带增强HDPE',
    sizes: ['DN200', 'DN250', 'DN300', 'DN355', 'DN400', 'DN450', 'DN500', 'DN600', 'DN700', 'DN800', 'DN900', 'DN1000'],
    pressureRating: 'PN10, PN16',
    image: '/images/products/Metal Reinforced HDPE Spirally Corrugated Pipe (MRP).jpg',
    description: '钢带增强聚乙烯复合管，具有更高的环刚度和抗压强度，适用于大口径排水和市政工程。',
    applications: ['市政排水', '雨水收集', '工业废水', '农田灌溉', '城市防洪'],
    standards: ['CJ/T 225', 'GB/T 19472.2', 'EN 13476'],
    features: [
      '环刚度高',
      '抗压强度好',
      '大口径设计',
      '重量轻',
      '安装便捷'
    ]
  }
};

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

const ProductDetailPage = ({ params }: ProductDetailPageProps) => {
  const productId = parseInt(params.id);
  const product = productDetails[productId as keyof typeof productDetails];

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Product Not Found</h1>
          <p className="text-gray-600 mt-4">The requested product does not exist.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex space-x-2 text-sm">
            <li><a href="/" className="text-blue-600 hover:text-blue-800">首页</a></li>
            <li className="text-gray-500">/</li>
            <li><a href="/products" className="text-blue-600 hover:text-blue-800">产品中心</a></li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-900">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Image 
              src={product.image} 
              alt={product.name}
              width={600}
              height={400}
              className="w-full h-96 object-cover rounded-lg"
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <div className="flex items-center space-x-4 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {product.category}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                {product.material}
              </span>
            </div>

            <p className="text-gray-700 text-lg mb-6">{product.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Available Sizes</h3>
                <p className="text-gray-700">{product.sizes.join(', ')}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {'pressureRating' in product ? 'Pressure Rating' : 'Angle'}
                </h3>
                <p className="text-gray-700">
                  {'pressureRating' in product ? (product as any).pressureRating : (product as any).angle}
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Applications</h3>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((app, index) => (
                  <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* Standards */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Standards Compliance</h3>
              <div className="flex flex-wrap gap-2">
                {product.standards.map((standard, index) => (
                  <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">
                    {standard}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors">
                获取报价
              </button>
              <button className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 px-6 rounded-lg font-medium transition-colors">
                下载手册
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">相关产品</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.values(productDetails)
              .filter(p => p.id !== product.id && p.category === product.category)
              .slice(0, 3)
              .map(relatedProduct => (
                <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <Image 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name}
                      width={200}
                      height={150}
                      className="w-3/4 h-3/4 object-contain"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900">{relatedProduct.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{relatedProduct.category}</p>
                    <a 
                      href={`/products/${relatedProduct.id}`}
                      className="inline-block mt-3 text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View Details →
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;