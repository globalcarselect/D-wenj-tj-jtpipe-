// utils/seo.ts
import { SeoMetadata, GeoTargetingConfig } from '@/types/seo';

/**
 * Generate SEO metadata for a page
 */
export function generateSEOMetadata(input: Partial<SeoMetadata>): SeoMetadata {
  const defaultMetadata: SeoMetadata = {
    title: 'Tianjin Zhongxintong International Trade - Pipes & Fittings',
    description: 'Leading supplier of high-quality pipes and fittings for international markets',
    keywords: ['pipes', 'fittings', 'plumbing', 'construction', 'industrial'],
    canonicalUrl: typeof window !== 'undefined' ? window.location.href : '',
    ogTitle: 'Tianjin Zhongxintong International Trade - Pipes & Fittings',
    ogDescription: 'Leading supplier of high-quality pipes and fittings for international markets',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    robots: 'index, follow'
  };

  return { ...defaultMetadata, ...input };
}

/**
 * Detect user's country based on IP or other methods
 */
export async function detectUserCountry(): Promise<string> {
  // This is a simplified implementation
  // In a real application, you'd use a geolocation service
  try {
    // Mock implementation - in reality, you'd use a service like ip-api.com
    // or implement server-side detection
    return 'US'; // Default to US for demo purposes
  } catch (error) {
    console.warn('Could not detect user country:', error);
    return 'US'; // Default fallback
  }
}

/**
 * Get GEO targeting configuration based on user's location
 */
export function getGeoConfig(countryCode: string): GeoTargetingConfig {
  const configs: Record<string, GeoTargetingConfig> = {
    US: {
      supportedCountries: ['US', 'CA', 'MX'],
      defaultCountry: 'US',
      countrySpecificContent: {
        shippingInfo: 'Free shipping on orders over $200',
        contactInfo: 'Call us at +1-800-XXX-XXXX',
        certifications: 'NSF Certified products available'
      },
      currency: 'USD',
      language: 'en-US'
    },
    EU: {
      supportedCountries: ['DE', 'FR', 'UK', 'IT', 'ES', 'NL'],
      defaultCountry: 'DE',
      countrySpecificContent: {
        shippingInfo: 'Free shipping on orders over €150',
        contactInfo: 'Call us at +49 XXX XXX XXXX',
        certifications: 'CE Mark certified products'
      },
      currency: 'EUR',
      language: 'en-EU'
    },
    CN: {
      supportedCountries: ['CN', 'JP', 'KR', 'SG', 'HK'],
      defaultCountry: 'CN',
      countrySpecificContent: {
        shippingInfo: 'Free shipping on orders over ¥1000',
        contactInfo: 'Call us at +86-XXX-XXXX-XXXX',
        certifications: 'CCC certified products'
      },
      currency: 'CNY',
      language: 'zh-CN'
    }
  };

  // Map common countries to regions
  const countryToRegion: Record<string, string> = {
    'US': 'US', 'CA': 'US', 'MX': 'US',
    'DE': 'EU', 'FR': 'EU', 'GB': 'EU', 'IT': 'EU', 'ES': 'EU', 'NL': 'EU',
    'CN': 'CN', 'JP': 'CN', 'KR': 'CN', 'SG': 'CN', 'HK': 'CN'
  };

  const region = countryToRegion[countryCode] || 'US';
  return configs[region];
}

/**
 * Format price based on locale and currency
 */
export function formatPrice(amount: number, currency: string, locale: string): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(amount);
}

/**
 * Generate hreflang tags for international SEO
 */
export function generateHreflangTags(currentPath: string): Array<{ rel: string; hreflang: string; href: string }> {
  return [
    { rel: 'alternate', hreflang: 'en', href: `https://www.jtpipeline.com${currentPath}` },
    { rel: 'alternate', hreflang: 'en-us', href: `https://www.jtpipeline.com/en-us${currentPath}` },
    { rel: 'alternate', hreflang: 'en-gb', href: `https://www.jtpipeline.com/en-gb${currentPath}` },
    { rel: 'alternate', hreflang: 'zh', href: `https://www.jtpipeline.com/zh${currentPath}` },
    { rel: 'alternate', hreflang: 'ja', href: `https://www.jtpipeline.com/ja${currentPath}` },
    { rel: 'alternate', hreflang: 'de', href: `https://www.jtpipeline.com/de${currentPath}` },
    { rel: 'alternate', hreflang: 'fr', href: `https://www.jtpipeline.com/fr${currentPath}` },
    { rel: 'alternate', hreflang: 'x-default', href: `https://www.jtpipeline.com${currentPath}` }
  ];
}