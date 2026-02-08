import { useContent } from '@/contexts/ContentContext';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CustomerReviews = () => {
  const { testimonials } = useContent();
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState<'newest' | 'highest' | 'lowest'>('newest');

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  // Filter and sort testimonials
  const filteredAndSortedTestimonials = testimonials
    .filter(review => !selectedRating || review.rating >= selectedRating)
    .sort((a, b) => {
      if (sortOrder === 'highest') {
        return b.rating - a.rating;
      } else if (sortOrder === 'lowest') {
        return a.rating - b.rating;
      } else {
        // Newest first (assuming id is chronological)
        return parseInt(b.id) - parseInt(a.id);
      }
    });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">客户评价</h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          来自全球客户的真实反馈，见证我们的产品质量和服务水平
        </p>

        {/* Filter and Sort Controls */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <div className="flex items-center gap-2">
            <span className="text-gray-700 font-medium">筛选:</span>
            <div className="flex gap-2">
              {[5, 4, 3, 2, 1].map(star => (
                <button
                  key={star}
                  onClick={() => setSelectedRating(selectedRating === star ? null : star)}
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm transition-colors ${selectedRating === star ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  {renderStars(star).slice(0, 1)}
                  <span>{star}+</span>
                </button>
              ))}
              <button
                onClick={() => setSelectedRating(null)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${!selectedRating ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                全部
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-gray-700 font-medium">排序:</span>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as 'newest' | 'highest' | 'lowest')}
              className="px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="newest">最新</option>
              <option value="highest">评分最高</option>
              <option value="lowest">评分最低</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedTestimonials.map((review, index) => (
            <div 
              key={review.id} 
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={index % 2 === 0 ? '/images/products/pe-pipe.jpg' : '/images/products/srtp-pipe.jpg'} 
                  alt="客户合作" 
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  quality={80}
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-yellow-500 text-white text-sm font-bold px-2 py-1 rounded">
                  {review.rating} 星
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500">
                    <Image 
                      src={`/images/products/${index % 4 === 0 ? 'pe-pipe' : index % 4 === 1 ? 'srtp-pipe' : index % 4 === 2 ? 'hdpe-pipe-fittings' : 'pipe-fittings'}.jpg`} 
                      alt={review.name} 
                      fill
                      className="object-cover"
                      quality={80}
                      loading="lazy"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.company}</p>
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {review.country}
                    </p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {renderStars(review.rating)}
                </div>
                <p className="text-gray-700 italic mb-4">"{review.comment}"</p>
                <div className="flex justify-end">
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">成为我们的合作伙伴</h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            我们致力于为全球客户提供高质量的管道解决方案和专业的服务，期待与您建立长期稳定的合作关系。
          </p>
          <Link 
            href="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block"
          >
            联系我们
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;