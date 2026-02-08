'use client';

import { useLanguage } from '@/contexts/LanguageContext';

interface StructuredDataProps {
  type: 'Organization' | 'Product' | 'WebSite';
  data?: any;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const { language } = useLanguage();

  const getOrganizationData = () => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TIANJIN ZHONGXINTONG INTERNATIONAL TRADE CO., LTD.',
    alternateName: 'JTPIPELINE',
    url: 'https://www.jtpipeline.com',
    logo: 'https://www.jtpipeline.com/images/logo.png',
    description: language === 'cn' 
      ? '天津中信通国际贸易有限公司 - 专业管道和配件供应商'
      : 'Professional pipe and fitting solutions provider',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ROOM 2608, NO.2 OF JINGCAI BUILDING, DAGUNAN ROAD',
      addressLocality: 'HEXI DISTRICT',
      addressRegion: 'TIANJIN',
      addressCountry: 'CN',
      postalCode: '300000'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+86-1234567890',
      contactType: 'customer service',
      email: 'info@jtpipeline.com',
      availableLanguage: ['English', 'Chinese']
    },
    sameAs: [
      'https://www.facebook.com/jtpipeline',
      'https://www.linkedin.com/company/jtpipeline',
      'https://twitter.com/jtpipeline'
    ]
  });

  const getWebSiteData = () => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'JTPIPELINE',
    url: 'https://www.jtpipeline.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.jtpipeline.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  });

  const getStructuredData = () => {
    switch (type) {
      case 'Organization':
        return getOrganizationData();
      case 'WebSite':
        return getWebSiteData();
      case 'Product':
        return data;
      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
};

export default StructuredData;