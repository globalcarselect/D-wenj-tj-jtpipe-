'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ContentProvider } from '@/contexts/ContentContext';

export default function Case() {
  return (
    <ContentProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">案例展示</h1>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">成功案例</h2>
              <p className="text-gray-600 mb-6">
                天津京通管道技术有限公司在国内外多个项目中积累了丰富的经验，
                为各类工程项目提供高质量的管道解决方案。
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-100 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">市政排水工程</h3>
                  <p className="text-gray-600">
                    为多个城市市政排水系统提供HDPE管道，
                    确保排水系统的稳定运行。
                  </p>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">工业管道系统</h3>
                  <p className="text-gray-600">
                    为工业企业提供专业的管道解决方案，
                    满足不同工业环境的需求。
                  </p>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">建筑工程</h3>
                  <p className="text-gray-600">
                    参与多个大型建筑项目的管道安装，
                    确保建筑功能的完整性。
                  </p>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">农业灌溉</h3>
                  <p className="text-gray-600">
                    为农业灌溉系统提供可靠的管道产品，
                    支持农业生产发展。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ContentProvider>
  );
}