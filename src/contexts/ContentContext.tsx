'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { wordpressService } from '@/services/wordpress';

// Types for content data
interface HeroData {
  title: string;
  subtitle: string;
  quoteButton: string;
  productsButton: string;
}

interface CompanyScaleData {
  established: string;
  employees: string;
  factoryArea: string;
  annualCapacity: string;
  exportCountries: string;
  globalCustomers: string;
  description: string;
}

interface ProductData {
  id: number;
  name: string;
  description: string;
  types: string[];
  image: string;
  slug: string;
}

interface CertificationData {
  id: number;
  name: string;
  description: string;
  icon: string;
  image: string;
}

interface TestimonialData {
  id: number;
  name: string;
  company: string;
  country: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
}

interface ContentData {
  hero: HeroData;
  companyScale: CompanyScaleData;
  products: ProductData[];
  certifications: CertificationData[];
  testimonials: TestimonialData[];
  loading: boolean;
  error: string | null;
}

// Create context
const ContentContext = createContext<ContentData | undefined>(undefined);

// Context provider props
interface ContentProviderProps {
  children: ReactNode;
}

// Default content data
const defaultContent: ContentData = {
  hero: {
    title: '专业管道及配件解决方案',
    subtitle: '天津中信通国际贸易有限公司 - 为全球市场提供高品质管道和配件',
    quoteButton: '获取报价',
    productsButton: '查看产品'
  },
  companyScale: {
    established: '2010',
    employees: '100-200',
    factoryArea: '20,000+ ㎡',
    annualCapacity: '100,000+ 吨',
    exportCountries: '30+ 个',
    globalCustomers: '500+ 家',
    description: '天津中信通国际贸易有限公司成立于2010年，是一家专业从事管道及配件生产和出口的企业。公司总部位于天津市，拥有现代化的生产基地和先进的生产设备。经过多年的发展，公司已成为行业内的知名企业，产品远销全球30多个国家和地区，服务于500多家客户。公司致力于为全球客户提供高质量的管道解决方案，满足不同行业的需求。公司注重技术创新和产品质量，拥有一支专业的研发团队和严格的质量管理体系，确保产品符合国际标准和客户要求。'
  },
  products: [
    {
      id: 1,
      name: 'HDPE 管道',
      description: '高密度聚乙烯管道，适用于给水、燃气、排水等多种应用场景',
      types: ['HDPE给水管', 'HDPE燃气管', 'HDPE排水管', 'HDPE双壁波纹管'],
      image: '/images/products/pe-pipe.jpg',
      slug: 'hdpe-pipe'
    },
    {
      id: 2,
      name: 'PVC 管道',
      description: '聚氯乙烯管道，具有良好的耐腐蚀性和抗压性能',
      types: ['PVC-U排水管', 'PVC-C冷热给水管', 'PVC电工套管', 'PVC农田灌溉管'],
      image: '/images/products/hdpe-drainage-pipe.jpg',
      slug: 'pvc-pipe'
    },
    {
      id: 3,
      name: '管道配件',
      description: '各种规格的管道连接件，确保管道系统的安全可靠',
      types: ['PE弯头', 'PE三通', 'PE法兰', 'PE变径', 'PVC配件', '钢塑转换接头'],
      image: '/images/products/hdpe-pipe-fittings.jpg',
      slug: 'pipe-fittings'
    },
    {
      id: 4,
      name: '复合管道',
      description: '钢丝增强聚乙烯复合管道，具有高强度和高耐压性能',
      types: ['SRTP钢丝增强管', 'SSP钢带增强管', '钢骨架复合管', '铝塑复合管'],
      image: '/images/products/srtp-pipe.jpg',
      slug: 'composite-pipe'
    }
  ],
  certifications: [
    {
      id: 1,
      name: 'ISO 9001:2015',
      description: '质量管理体系认证，确保产品质量符合国际标准',
      icon: '📋',
      image: '/images/about/laboratory.jpg'
    },
    {
      id: 2,
      name: 'ISO 14001:2015',
      description: '环境管理体系认证，确保生产过程符合环保要求',
      icon: '🌱',
      image: '/images/background/aerial-panorama.jpg'
    },
    {
      id: 3,
      name: 'API Spec 5L',
      description: '美国石油学会认证，适用于石油天然气行业管道',
      icon: '🛢️',
      image: '/images/products/srtp-pipe.jpg'
    },
    {
      id: 4,
      name: 'CE 认证',
      description: '欧盟安全认证，产品可在欧盟市场自由流通',
      icon: '🇪🇺',
      image: '/images/products/pe-pipe.jpg'
    },
    {
      id: 5,
      name: 'UL 认证',
      description: '美国保险商实验室认证，产品符合安全标准',
      icon: '🔒',
      image: '/images/products/hdpe-pipe-fittings.jpg'
    },
    {
      id: 6,
      name: 'CSA 认证',
      description: '加拿大标准协会认证，产品符合加拿大安全标准',
      icon: '🇨🇦',
      image: '/images/products/pipe-fittings.jpg'
    },
    {
      id: 7,
      name: 'CNAS 实验室认可',
      description: '中国合格评定国家认可委员会实验室认可',
      icon: '🏛️',
      image: '/images/background/laboratory.jpg'
    },
    {
      id: 8,
      name: '饮用水卫生安全产品卫生许可',
      description: '确保产品符合饮用水卫生安全标准',
      icon: '💧',
      image: '/images/products/hdpe-drainage-pipe.jpg'
    }
  ],
  testimonials: [
    {
      id: 1,
      name: 'John Smith',
      company: 'ABC Construction Inc.',
      country: '美国',
      rating: 5,
      comment: '我们使用天津中信通的HDPE管道已经有3年了，产品质量非常稳定，服务也很专业。他们的管道在我们的多个项目中表现出色，是值得信赖的合作伙伴。',
      avatar: '/images/products/pe-pipe.jpg',
      date: '2023-12-15'
    },
    {
      id: 2,
      name: 'Maria Garcia',
      company: 'Construcciones Modernas S.A.',
      country: '西班牙',
      rating: 5,
      comment: '天津中信通的产品符合欧洲标准，质量可靠。他们的团队响应迅速，能够及时解决我们的问题，是我们在亚洲的重要供应商。',
      avatar: '/images/products/srtp-pipe.jpg',
      date: '2023-11-20'
    },
    {
      id: 3,
      name: 'Ahmed Hassan',
      company: 'Gulf Pipe Trading Co.',
      country: '阿联酋',
      rating: 4,
      comment: '我们与天津中信通合作多年，他们的SRTP管道在我们的项目中表现良好。价格合理，交货及时，是一个可靠的供应商。',
      avatar: '/images/products/hdpe-pipe-fittings.jpg',
      date: '2023-10-05'
    },
    {
      id: 4,
      name: 'Zhang Wei',
      company: '中国建筑股份有限公司',
      country: '中国',
      rating: 5,
      comment: '天津中信通是我们的长期合作伙伴，他们的管道产品质量上乘，技术支持到位。在我们的多个大型项目中，他们都能够按时交付符合要求的产品。',
      avatar: '/images/products/pipe-fittings.jpg',
      date: '2023-09-18'
    },
    {
      id: 5,
      name: 'James Wilson',
      company: 'Pacific Pipeline Solutions',
      country: '澳大利亚',
      rating: 5,
      comment: '天津中信通的管道配件质量非常好，精度高，安装方便。他们的产品在我们的跨海管道项目中表现出色，是我们的首选供应商。',
      avatar: '/images/products/hdpe-drainage-pipe.jpg',
      date: '2023-08-22'
    },
    {
      id: 6,
      name: 'Sarah Johnson',
      company: 'Northern Infrastructure Ltd.',
      country: '加拿大',
      rating: 4,
      comment: '我们从天津中信通采购PVC管道已经有2年了，产品质量稳定，价格具有竞争力。他们的交货速度很快，服务态度也很好。',
      avatar: '/images/products/cpvc-duct.jpg',
      date: '2023-07-15'
    },
    {
      id: 7,
      name: 'Raj Patel',
      company: 'Indian Plumbing Supplies',
      country: '印度',
      rating: 5,
      comment: '天津中信通的HDPE给水管在我们的城市供水项目中使用效果很好，耐腐蚀性强，使用寿命长。他们的技术团队提供了专业的安装指导，非常感谢。',
      avatar: '/images/products/hdpe-water-pipe.jpg',
      date: '2023-06-30'
    },
    {
      id: 8,
      name: 'Kim Jong-ho',
      company: 'Korea Pipe Industries',
      country: '韩国',
      rating: 4,
      comment: '我们与天津中信通合作进口复合管道，他们的产品质量符合韩国标准，价格合理。他们的外贸团队专业高效，沟通顺畅。',
      avatar: '/images/products/upvc-pipe.jpg',
      date: '2023-05-10'
    }
  ],
  loading: false,
  error: null
};

// Context provider component
export const ContentProvider: React.FC<ContentProviderProps> = ({ children }) => {
  const [content, setContent] = useState<ContentData>({
    ...defaultContent,
    loading: true,
    error: null
  });

  // Fetch content from WordPress
  useEffect(() => {
    const fetchContent = async () => {
      try {
        // Get home page data
        const homePageData = await wordpressService.getHomePageData();
        
        // Get products data
        const productsData = await wordpressService.getProductsData();
        
        // Get certifications data
        const certificationsData = await wordpressService.getCertificationsData();
        
        // Get testimonials data
        const testimonialsData = await wordpressService.getTestimonialsData();

        // Process data
        const processedContent: ContentData = {
          ...content,
          loading: false,
          error: null
        };

        // Update hero data if available
        if (homePageData && homePageData.length > 0 && homePageData[0].acf) {
          const acf = homePageData[0].acf;
          processedContent.hero = {
            title: acf.hero_title || defaultContent.hero.title,
            subtitle: acf.hero_subtitle || defaultContent.hero.subtitle,
            quoteButton: acf.hero_quote_button || defaultContent.hero.quoteButton,
            productsButton: acf.hero_products_button || defaultContent.hero.productsButton
          };

          // Update company scale data if available
          if (acf.company_scale_data) {
            processedContent.companyScale = {
              established: acf.company_scale_data.established || defaultContent.companyScale.established,
              employees: acf.company_scale_data.employees || defaultContent.companyScale.employees,
              factoryArea: acf.company_scale_data.factory_area || defaultContent.companyScale.factoryArea,
              annualCapacity: acf.company_scale_data.annual_capacity || defaultContent.companyScale.annualCapacity,
              exportCountries: acf.company_scale_data.export_countries || defaultContent.companyScale.exportCountries,
              globalCustomers: acf.company_scale_data.global_customers || defaultContent.companyScale.globalCustomers,
              description: acf.company_description || defaultContent.companyScale.description
            };
          }
        }

        // Update products data if available
        if (productsData && productsData.length > 0) {
          processedContent.products = productsData.map(product => ({
            id: product.id,
            name: product.title.rendered,
            description: product.excerpt.rendered.replace(/<[^>]*>/g, ''),
            types: product.acf?.product_types || [],
            image: product.acf?.product_image || '/images/products/pe-pipe.jpg',
            slug: product.slug
          }));
        }

        // Update certifications data if available
        if (certificationsData && certificationsData.length > 0) {
          processedContent.certifications = certificationsData.map(cert => ({
            id: cert.id,
            name: cert.title.rendered,
            description: cert.excerpt.rendered.replace(/<[^>]*>/g, ''),
            icon: cert.acf?.certification_icon || '📋',
            image: cert.acf?.certification_image || '/images/about/laboratory.jpg'
          }));
        }

        // Update testimonials data if available
        if (testimonialsData && testimonialsData.length > 0) {
          processedContent.testimonials = testimonialsData.map(testimonial => ({
            id: testimonial.id,
            name: testimonial.title.rendered,
            company: testimonial.acf?.company || '',
            country: testimonial.acf?.country || '',
            rating: testimonial.acf?.rating || 5,
            comment: testimonial.content.rendered.replace(/<[^>]*>/g, ''),
            avatar: testimonial.acf?.avatar || '',
            date: testimonial.acf?.date || new Date().toISOString().split('T')[0]
          }));
        }

        setContent(processedContent);
      } catch (error) {
        console.error('Error fetching content:', error);
        setContent({
          ...defaultContent,
          loading: false,
          error: 'Failed to fetch content from WordPress. Using default content.'
        });
      }
    };

    fetchContent();
  }, []);

  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  );
};

// Custom hook to use content context
export const useContent = (): ContentData => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};

export type { HeroData, CompanyScaleData, ProductData, CertificationData, TestimonialData, ContentData };
