// types/seo.ts
export interface SeoMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  robots?: string;
}

export interface GeoTargetingConfig {
  supportedCountries: string[];
  defaultCountry: string;
  countrySpecificContent: Record<string, any>;
  currency: string;
  language: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}