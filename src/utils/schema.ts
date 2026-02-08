// utils/schema.ts
import { Organization, LocalBusiness } from 'schema-dts';

export function generateOrganizationSchema(): Organization {
  return {
    '@type': 'Organization',
    name: 'TIANJIN ZHONGXINTONG INTERNATIONAL TRADE CO.,LTD.',
    alternateName: 'JTPIPELINE',
    url: 'https://www.jtpipeline.com',
    logo: 'https://www.jtpipeline.com/logo.png',
    foundingDate: '2000', // Replace with actual founding year
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ROOM 2608, NO.2 OF JINGCAI BUILDING, DAGUNAN ROAD, HEXI DISTRICT',
      addressLocality: 'Tianjin',
      addressRegion: 'Tianjin',
      postalCode: '300000', // Replace with actual postal code
      addressCountry: 'CN'
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+86-1234567890',
        contactType: 'customer service',
        areaServed: 'Worldwide',
        availableLanguage: ['English', 'Chinese']
      }
    ],
    sameAs: [
      'https://www.facebook.com/jtpipeline',
      'https://www.linkedin.com/company/jtpipeline',
      'https://www.instagram.com/jtpipeline'
    ],
    description: 'Leading supplier of high-quality pipes and fittings for international markets',
    numberOfEmployees: { '@type': 'QuantitativeValue', value: 100 }, // Replace with actual number
    duns: '123456789', // Replace with actual DUNS number
    taxID: '123-456-789', // Replace with actual tax ID
  };
}

export function generateLocalBusinessSchema(): LocalBusiness {
  return {
    '@type': 'LocalBusiness',
    name: 'TIANJIN ZHONGXINTONG INTERNATIONAL TRADE CO.,LTD.',
    image: 'https://www.jtpipeline.com/featured-image.jpg',
    telephone: '+86-1234567890',
    email: 'info@jtpipeline.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ROOM 2608, NO.2 OF JINGCAI BUILDING, DAGUNAN ROAD, HEXI DISTRICT',
      addressLocality: 'Tianjin',
      addressRegion: 'Tianjin',
      postalCode: '300000',
      addressCountry: 'CN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 39.1332, // Tianjin coordinates
      longitude: 117.1865
    },
    url: 'https://www.jtpipeline.com',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '14:00'
      }
    ],
    priceRange: '$$$$', // Adjust based on your pricing
    areaServed: 'Worldwide',
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Pipe Manufacturing',
          description: 'Manufacturing of high-quality PE, PVC and other plastic pipes'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Fittings Supply',
          description: 'Supply of various pipe fittings including elbows, tees, reducers'
        }
      }
    ]
  };
}