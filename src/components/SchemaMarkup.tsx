// components/SchemaMarkup.tsx
import { Organization, Product, BreadcrumbList } from 'schema-dts';

interface SchemaMarkupProps {
  type: 'Organization' | 'Product' | 'BreadcrumbList';
  data: Organization | Product | BreadcrumbList;
}

const SchemaMarkup = ({ type, data }: SchemaMarkupProps) => {
  const jsonData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...(data as any)
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData) }}
    />
  );
};

export default SchemaMarkup;