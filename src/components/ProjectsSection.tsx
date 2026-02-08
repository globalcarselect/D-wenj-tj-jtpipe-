import Image from 'next/image';
import { useTranslationSimple } from '@/hooks/useTranslationSimple';

const ProjectsSection = () => {
  const { t } = useTranslationSimple();

  const projects = [
    {
      title: 'Bosolha Multipurpose Terminal - Ecuador',
      description: 'CPVC pipes used in port infrastructure project in 2018',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=port%20infrastructure%20project%20with%20pipes%20and%20industrial%20equipment%2C%20Ecuador%2C%20professional%20photography&image_size=landscape_4_3',
    },
    {
      title: 'Railway Infrastructure - Kenya',
      description: 'SRTP pipes for Standard Gauge Railway project',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=railway%20infrastructure%20construction%20with%20pipes%2C%20Kenya%2C%20modern%20railway%20project&image_size=landscape_4_3',
    },
    {
      title: 'Metro Construction - Vietnam',
      description: 'Specialized pipe fittings for Ho Chi Minh City Metro',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=metro%20construction%20site%20with%20pipe%20fittings%2C%20Ho%20Chi%20Minh%20City%2C%20underground%20project&image_size=landscape_4_3',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">{t('projects.title')}</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          {t('projects.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-lg">
              <div className="h-56 bg-gray-200 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;