'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ContentProvider } from '@/contexts/ContentContext';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 这里可以添加表单提交逻辑
    console.log('表单数据:', formData);
    
    // 模拟提交成功
    alert('感谢您的留言！我们会尽快与您联系。');
    
    // 重置表单
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  return (
    <ContentProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">联系我们</h1>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* 联系信息 */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">联系信息</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                      <span className="text-blue-600">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">地址</h3>
                      <p className="text-gray-600">天津市宝坻区经济开发区</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                      <span className="text-green-600">📞</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">电话</h3>
                      <p className="text-gray-600">86-22-29919888</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                      <span className="text-purple-600">✉️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">邮箱</h3>
                      <p className="text-gray-600">sales@pipeschina.cn</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-orange-100 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                      <span className="text-orange-600">🌐</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">网站</h3>
                      <p className="text-gray-600">www.cn-pipes.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 联系表单 */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">在线留言</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        姓名 *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="请输入您的姓名"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        邮箱 *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="请输入您的邮箱"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        电话
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="请输入您的电话"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        公司名称
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="请输入公司名称"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      主题 *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">请选择主题</option>
                      <option value="product-inquiry">产品咨询</option>
                      <option value="technical-support">技术支持</option>
                      <option value="cooperation">合作洽谈</option>
                      <option value="complaint">投诉建议</option>
                      <option value="other">其他</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      留言内容 *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="请输入您的留言内容"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
                  >
                    提交留言
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ContentProvider>
  );
}