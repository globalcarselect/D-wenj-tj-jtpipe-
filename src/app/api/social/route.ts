import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// Mock data for social media posts
const mockSocialPosts = [
  {
    id: '1',
    platform: 'linkedin',
    title: 'Latest PE Pipe Installation Project Completed Successfully',
    content: 'We recently completed a major PE pipe installation for a water infrastructure project. Quality and reliability are our top priorities.',
    imageUrl: '/images/social/post1.jpg',
    timestamp: new Date('2024-01-15').toISOString(),
    likes: 24,
    shares: 8
  },
  {
    id: '2',
    platform: 'facebook',
    title: 'Quality Control Process at Our Factory',
    content: 'Every pipe and fitting undergoes rigorous quality testing before leaving our facility. Meeting international standards is our commitment.',
    imageUrl: '/images/social/post2.jpg',
    timestamp: new Date('2024-01-10').toISOString(),
    likes: 42,
    shares: 12
  },
  {
    id: '3',
    platform: 'instagram',
    title: 'New Product Line: Enhanced Fittings',
    content: 'Introducing our new range of high-performance pipe fittings designed for challenging environments.',
    imageUrl: '/images/social/post3.jpg',
    timestamp: new Date('2024-01-05').toISOString(),
    likes: 56,
    shares: 15
  }
];

export async function GET(request: NextRequest) {
  try {
    // Extract query parameters
    const { searchParams } = new URL(request.url);
    const platform = searchParams.get('platform');
    const limit = parseInt(searchParams.get('limit') || '10');

    // Filter posts by platform if specified
    let filteredPosts = mockSocialPosts;
    if (platform) {
      filteredPosts = mockSocialPosts.filter(post => post.platform === platform);
    }

    // Limit results
    const limitedPosts = filteredPosts.slice(0, limit);

    return NextResponse.json({
      success: true,
      data: limitedPosts,
      total: filteredPosts.length
    });
  } catch (error) {
    console.error('Error fetching social media posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch social media posts' },
      { status: 500 }
    );
  }
}

// Endpoint to add a new social media post (for internal use)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // In a real implementation, this would validate credentials and add to social platforms
    // For now, we'll just return a success response
    
    console.log('New social media post request:', body);
    
    return NextResponse.json({
      success: true,
      message: 'Post scheduled successfully',
      postId: Math.random().toString(36).substring(2, 15)
    });
  } catch (error) {
    console.error('Error creating social media post:', error);
    return NextResponse.json(
      { error: 'Failed to create social media post' },
      { status: 500 }
    );
  }
}