import { useTranslationSimple } from '@/hooks/useTranslationSimple';

const ProductCategories = () => {
  const { t } = useTranslationSimple();

  const categories = [
    {
      name: t('products.pe'),
      description: 'High-density polyethylene pipes for various applications',
      image: '/images/products/pe-pipe.jpg',
    },
    {
      name: t('products.pvc'),
      description: 'Durable PVC pipes for plumbing and industrial use',
      image: '/images/products/pe-pipe.jpg',
    },
    {
      name: t('products.fittings'),
      description: 'Elbows, tees, couplings and adapters',
      image: '/images/products/pipe-fittings.jpg',
    },
    {
      name: t('products.composite'),
      description: 'Steel Wire Reinforced HDPE Composite Pipes (SRTP)',
      image: '/images/products/srtp-pipe.jpg',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">{t('products.title')}</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          {t('products.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <button className="text-blue-600 font-medium hover:underline">
                  {t('products.view')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;