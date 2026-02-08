import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const SocialMediaEntry = () => {
  const [visiblePosts, setVisiblePosts] = useState<number[]>([]);
  const [visiblePlatforms, setVisiblePlatforms] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: '📘',
      description: '关注我们的Facebook，了解最新产品和公司动态',
      url: '/social',
      image: '/images/social/post1.jpg',
      followers: '12.5K',
      posts: '320+'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      description: '在LinkedIn上与我们建立专业联系',
      url: '/social',
      image: '/images/social/post2.jpg',
      followers: '8.3K',
      posts: '180+'
    },
    {
      name: 'Instagram',
      icon: '📷',
      description: '浏览我们的Instagram，查看产品实拍和工厂环境',
      url: '/social',
      image: '/images/social/post3.jpg',
      followers: '15.7K',
      posts: '450+'
    },
    {
      name: 'YouTube',
      icon: '🎥',
      description: '观看我们的YouTube视频，了解产品生产过程',
      url: '/social',
      image: '/images/background/workshop1.jpg',
      followers: '5.2K',
      posts: '60+'
    }
  ];

  const recentPosts = [
    {
      id: '1',
      platform: 'Instagram',
      title: '新产品发布：高性能PE管道',
      description: '我们的全新PE管道系列现已上市，具有更高的耐压性和更长的使用寿命。',
      image: '/images/products/pe-pipe.jpg',
      likes: '245',
      comments: '32',
      date: '2天前'
    },
    {
      id: '2',
      platform: 'Facebook',
      title: '工厂扩建完成',
      description: '我们的新工厂扩建项目已顺利完成，年产能提升30%。',
      image: '/images/background/aerial-panorama.jpg',
      likes: '189',
      comments: '25',
      date: '1周前'
    },
    {
      id: '3',
      platform: 'LinkedIn',
      title: '参加国际管道展览会',
      description: '我们将参加下个月的国际管道展览会，欢迎前来参观我们的展位。',
      image: '/images/background/workshop1.jpg',
      likes: '156',
      comments: '18',
      date: '2周前'
    },
    {
      id: '4',
      platform: 'YouTube',
      title: '管道安装教程',
      description: '详细的管道安装步骤和注意事项，帮助您正确安装我们的产品。',
      image: '/images/background/laboratory.jpg',
      likes: '98',
      comments: '12',
      date: '3周前'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Animate platforms
          socialPlatforms.forEach((_, index) => {
            setTimeout(() => {
              setVisiblePlatforms(prev => [...prev, index]);
            }, index * 200);
          });
          
          // Animate recent posts
          setTimeout(() => {
            recentPosts.forEach((_, index) => {
              setTimeout(() => {
                setVisiblePosts(prev => [...prev, index]);
              }, index * 150);
            });
          }, 800);
          
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">社交媒体</h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          关注我们的社交媒体平台，了解公司最新动态和产品信息
        </p>

        {/* Social Platforms */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-10 text-center">关注我们</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {socialPlatforms.map((platform, index) => (
              <Link 
                key={index} 
                href={platform.url} 
                className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group ${visiblePlatforms.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image 
                    src={platform.image} 
                    alt={platform.name} 
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    quality={80}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-center p-6">
                    <div className="text-center">
                      <div className="text-5xl text-white mb-2">{platform.icon}</div>
                      <h3 className="text-xl font-bold text-white">{platform.name}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{platform.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">{platform.followers}</div>
                      <div className="text-xs text-gray-500">关注者</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">{platform.posts}</div>
                      <div className="text-xs text-gray-500">帖子</div>
                    </div>
                  </div>
                  <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-1 transition-transform">
                    <span>访问我们的页面</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Social Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-10 text-center">最新动态</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentPosts.map((post, index) => (
              <div 
                key={post.id} 
                className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${visiblePosts.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-48 md:h-full">
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      fill
                      className="object-cover"
                      quality={80}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 md:col-span-2">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{socialPlatforms.find(p => p.name === post.platform)?.icon}</span>
                        <span className="font-semibold text-gray-900">{post.platform}</span>
                      </div>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-900">{post.title}</h4>
                    <p className="text-gray-600 mb-4">{post.description}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            href="/social" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block"
          >
            访问社交媒体中心
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaEntry;