// WordPress API service

// WordPress API base URL - to be configured in environment variables
const WP_API_BASE_URL = process.env.WP_API_BASE_URL || 'http://localhost:8080/wp-json/wp/v2';

// Types for WordPress content
interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  slug: string;
  date: string;
  modified: string;
}

interface WordPressPage extends WordPressPost {
  featured_media: number;
}

interface WordPressMedia {
  id: number;
  source_url: string;
  title: {
    rendered: string;
  };
  alt_text: string;
}

interface WordPressMenu {
  id: number;
  name: string;
  items: WordPressMenuItem[];
}

interface WordPressMenuItem {
  id: number;
  title: string;
  url: string;
  parent: number;
  order: number;
}

// Fetch data from WordPress API
async function fetchFromWordPress<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(`${WP_API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching from WordPress:', error);
    // Return mock data in case of error
    return getMockData(endpoint) as T;
  }
}

// Get mock data for development and fallback
function getMockData(endpoint: string) {
  // Mock data for different endpoints
  const mockData: Record<string, any> = {
    '/pages?slug=home': [
      {
        id: 1,
        title: { rendered: 'Home' },
        content: { rendered: '<p>Welcome to our website</p>' },
        excerpt: { rendered: 'Welcome to our website' },
        slug: 'home',
        date: new Date().toISOString(),
        modified: new Date().toISOString(),
        featured_media: 1,
        acf: {
          hero_title: 'Professional Pipe & Fitting Solutions',
          hero_subtitle: 'TIANJIN ZHONGXINTONG INTERNATIONAL TRADE CO., LTD. - Premium pipes and fittings for global markets',
          hero_quote_button: 'Request Quote',
          hero_products_button: 'View Products',
          company_scale_data: {
            established: '2010',
            employees: '100-200',
            factory_area: '20,000+ ㎡',
            annual_capacity: '100,000+ 吨',
            export_countries: '30+ 个',
            global_customers: '500+ 家'
          },
          company_description: '天津中信通国际贸易有限公司成立于2010年，是一家专业从事管道及配件生产和出口的企业。公司总部位于天津市，拥有现代化的生产基地和先进的生产设备。经过多年的发展，公司已成为行业内的知名企业，产品远销全球30多个国家和地区，服务于500多家客户。公司致力于为全球客户提供高质量的管道解决方案，满足不同行业的需求。公司注重技术创新和产品质量，拥有一支专业的研发团队和严格的质量管理体系，确保产品符合国际标准和客户要求。'
        }
      }
    ],
    '/media/1': {
      id: 1,
      source_url: '/images/background/aerial-panorama.jpg',
      title: { rendered: 'Company Aerial View' },
      alt_text: 'Company Aerial View'
    },
    '/posts?categories=products': [
      {
        id: 1,
        title: { rendered: 'HDPE 管道' },
        content: { rendered: '<p>高密度聚乙烯管道，适用于给水、燃气、排水等多种应用场景</p>' },
        excerpt: { rendered: '高密度聚乙烯管道，适用于给水、燃气、排水等多种应用场景' },
        slug: 'hdpe-pipe',
        date: new Date().toISOString(),
        modified: new Date().toISOString(),
        acf: {
          product_types: ['HDPE给水管', 'HDPE燃气管', 'HDPE排水管', 'HDPE双壁波纹管'],
          product_image: '/images/products/pe-pipe.jpg'
        }
      },
      {
        id: 2,
        title: { rendered: 'PVC 管道' },
        content: { rendered: '<p>聚氯乙烯管道，具有良好的耐腐蚀性和抗压性能</p>' },
        excerpt: { rendered: '聚氯乙烯管道，具有良好的耐腐蚀性和抗压性能' },
        slug: 'pvc-pipe',
        date: new Date().toISOString(),
        modified: new Date().toISOString(),
        acf: {
          product_types: ['PVC-U排水管', 'PVC-C冷热给水管', 'PVC电工套管', 'PVC农田灌溉管'],
          product_image: '/images/products/hdpe-drainage-pipe.jpg'
        }
      }
    ],
    '/posts?categories=certifications': [
      {
        id: 1,
        title: { rendered: 'ISO 9001:2015' },
        content: { rendered: '<p>质量管理体系认证，确保产品质量符合国际标准</p>' },
        excerpt: { rendered: '质量管理体系认证，确保产品质量符合国际标准' },
        slug: 'iso-9001',
        date: new Date().toISOString(),
        modified: new Date().toISOString(),
        acf: {
          certification_icon: '📋',
          certification_image: '/images/about/laboratory.jpg'
        }
      }
    ],
    '/posts?categories=testimonials': [
      {
        id: 1,
        title: { rendered: 'John Smith' },
        content: { rendered: '<p>我们使用天津中信通的HDPE管道已经有3年了，产品质量非常稳定，服务也很专业。他们的管道在我们的多个项目中表现出色，是值得信赖的合作伙伴。</p>' },
        excerpt: { rendered: '我们使用天津中信通的HDPE管道已经有3年了，产品质量非常稳定，服务也很专业。' },
        slug: 'john-smith-testimonial',
        date: new Date().toISOString(),
        modified: new Date().toISOString(),
        acf: {
          company: 'ABC Construction Inc.',
          country: '美国',
          rating: 5,
          avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20caucasian%20male%20businessman%20portrait%2C%20confident%20expression%2C%20high%20quality%20photography&image_size=square'
        }
      }
    ]
  };

  return mockData[endpoint] || null;
}

// WordPress service methods
export const wordpressService = {
  // Get home page data
  async getHomePageData() {
    return fetchFromWordPress<WordPressPage[]>('/pages?slug=home');
  },

  // Get products data
  async getProductsData() {
    return fetchFromWordPress<WordPressPost[]>('/posts?categories=products');
  },

  // Get certifications data
  async getCertificationsData() {
    return fetchFromWordPress<WordPressPost[]>('/posts?categories=certifications');
  },

  // Get testimonials data
  async getTestimonialsData() {
    return fetchFromWordPress<WordPressPost[]>('/posts?categories=testimonials');
  },

  // Get media by ID
  async getMediaById(id: number) {
    return fetchFromWordPress<WordPressMedia>(`/media/${id}`);
  },

  // Get menu data
  async getMenuData(menuId: number) {
    return fetchFromWordPress<WordPressMenu>(`/menus/${menuId}`);
  }
};

export type { WordPressPost, WordPressPage, WordPressMedia, WordPressMenu, WordPressMenuItem };
