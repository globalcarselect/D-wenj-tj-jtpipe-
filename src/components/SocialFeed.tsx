'use client';

import { useEffect, useState } from 'react';
import { SocialPost } from '@/utils/socialIntegration';

const SocialFeed = ({ platform }: { platform?: string }) => {
  const [posts, setPosts] = useState<SocialPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const queryParams = new URLSearchParams();
        if (platform) queryParams.append('platform', platform);
        queryParams.append('limit', '6'); // Get 6 posts max

        const response = await fetch(`/api/social?${queryParams.toString()}`);
        const result = await response.json();

        if (result.success) {
          setPosts(result.data);
        } else {
          setError('Failed to load social media posts');
        }
      } catch (err) {
        setError('Error fetching social media posts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [platform]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 text-red-500 p-4 rounded-md">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => {
        const getPlatformUrl = () => {
          switch (post.platform) {
            case 'facebook':
              return 'https://www.facebook.com';
            case 'linkedin':
              return 'https://www.linkedin.com';
            case 'instagram':
              return 'https://www.instagram.com';
            default:
              return '#';
          }
        };
        
        return (
          <a 
            key={post.id} 
            href={getPlatformUrl()} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow duration-300 block hover:bg-gray-50"
          >
            <div className="flex items-center mb-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                post.platform === 'facebook' ? 'bg-blue-600' :
                post.platform === 'linkedin' ? 'bg-blue-700' :
                'bg-pink-600'
              }`}>
                <span className="text-white font-bold uppercase text-xs">
                  {post.platform.charAt(0)}
                </span>
              </div>
              <div className="ml-3">
                <h4 className="font-semibold capitalize">{post.platform}</h4>
                <p className="text-xs text-gray-500">
                  {new Date(post.timestamp).toLocaleDateString()}
                </p>
              </div>
            </div>
            
            <h3 className="text-lg font-medium mb-2">{post.title}</h3>
            <p className="text-gray-700 mb-4">{post.content}</p>
            
            {post.imageUrl && (
              <div className="mb-4">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
            )}
            
            <div className="flex space-x-4 text-gray-500 text-sm">
              <span>{post.likes} likes</span>
              <span>{post.shares} shares</span>
              <span className="ml-auto text-blue-600 font-medium">
                查看详情 →
              </span>
            </div>
          </a>
        );
      })}
      
      {posts.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No recent posts from {platform ? platform : 'social media'}.
        </div>
      )}
    </div>
  );
};

export default SocialFeed;