import { useContent } from '@/contexts/ContentContext';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const QualityCertifications = () => {
  const { certifications } = useContent();
  const [visibleCertifications, setVisibleCertifications] = useState<number[]>([]);
  const [selectedCert, setSelectedCert] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Animate certifications one by one
          certifications.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCertifications(prev => [...prev, index]);
            }, index * 150);
          });
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
        <h2 className="text-3xl font-bold text-center mb-4">质量认证保证</h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          我们的产品通过了多项国际认证，确保质量和安全性符合全球标准
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={cert.id} 
              className={`bg-gray-50 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group ${visibleCertifications.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedCert(selectedCert === index ? null : index)}
            >
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src={cert.image} 
                  alt={cert.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={80}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-semibold">{cert.name}</h4>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-3xl mb-3">{cert.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{cert.name}</h3>
                <p className="text-gray-600 text-sm transition-all duration-300">{cert.description}</p>
                
                {/* Expanded details */}
                {selectedCert === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200 animate-fadeIn">
                    <p className="text-gray-600 text-sm mb-3">
                      该认证确保我们的产品符合国际标准，通过了严格的质量检测和安全评估，为客户提供可靠的产品保障。
                    </p>
                    <div className="flex justify-end">
                      <Link 
                        href="/certifications" 
                        className="text-blue-600 font-medium hover:text-blue-800 text-sm flex items-center"
                      >
                        查看详情
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">严格的质量管理体系</h3>
              <p className="text-gray-700 mb-4">
                我们建立了完善的质量管理体系，从原材料采购到生产过程控制，再到成品检验，每一个环节都严格把关，确保产品质量稳定可靠。
              </p>
              <p className="text-gray-700">
                我们的实验室配备了先进的检测设备，能够对产品的各项性能指标进行全面检测，确保产品符合国际标准和客户要求。
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <Link 
                href="/certifications" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block w-full md:w-auto text-center"
              >
                查看详细认证
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityCertifications;