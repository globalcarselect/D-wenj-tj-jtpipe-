'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ContentProvider } from '@/contexts/ContentContext';

export default function FactoryShow() {
  return (
    <ContentProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">工厂展示</h1>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">生产基地</h2>
              <p className="text-gray-600 mb-6">
                天津京通管道技术有限公司拥有现代化的生产基地，
                配备先进的生产设备和严格的质量控制体系。
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-100 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">生产车间</h3>
                  <p className="text-gray-600">
                    宽敞明亮的生产车间，配备多条自动化生产线，
                    确保产品质量和生产效率。
                  </p>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">质量控制</h3>
                  <p className="text-gray-600">
                    严格的质量检测流程，从原材料到成品，
                    每个环节都有专业人员进行质量监控。
                  </p>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">研发中心</h3>
                  <p className="text-gray-600">
                    专业的研发团队，不断开发新产品和优化生产工艺，
                    满足市场不断变化的需求。
                  </p>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">仓储物流</h3>
                  <p className="text-gray-600">
                    完善的仓储和物流系统，确保产品能够及时、
                    安全地送达客户手中。
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">生产设备</h2>
              <p className="text-gray-600 mb-6">
                我们拥有先进的生产设备，包括挤出机、注塑机、
                检测设备等，确保产品质量和生产效率。
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl">🏭</span>
                  </div>
                  <h4 className="font-semibold">挤出生产线</h4>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <h4 className="font-semibold">注塑设备</h4>
                </div>
                
                <div className="text-center">
                  <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h4 className="font-semibold">检测设备</h4>
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