// components/SEOHead.tsx
import { Metadata } from 'next';
import { SeoMetadata } from '@/types/seo';

interface SEOHeadProps {
  metadata: SeoMetadata;
}

const SEOHead = ({ metadata }: SEOHeadProps) => {
  // This component will be used in the app router via the metadata export
  // For pages that need dynamic metadata, we'll use this utility
  return null; // This component is just for documentation since Next 13+ handles metadata differently
};

/**
 * Generate metadata object for Next.js 13+ App Router
 */
export function generateMetadataObject(metadata: SeoMetadata): Metadata {
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords?.join(', '),
    ...(metadata.canonicalUrl && { alternates: { canonical: metadata.canonicalUrl } }),
    openGraph: {
      title: metadata.ogTitle || metadata.title,
      description: metadata.ogDescription || metadata.description,
      ...(metadata.ogImage && { images: [metadata.ogImage] }),
      type: (metadata.ogType || 'website') as any,
      url: metadata.canonicalUrl,
    },
    twitter: {
      card: (metadata.twitterCard || 'summary_large_image') as any,
      title: metadata.twitterTitle || metadata.title,
      description: metadata.twitterDescription || metadata.description,
      ...(metadata.twitterImage && { images: [metadata.twitterImage] }),
    },
    robots: metadata.robots,
  };
}

export default SEOHead;