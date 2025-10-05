import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'Our Latest Food Drive: A Resounding Success',
      excerpt: 'We are thrilled to share the incredible results of our recent community food drive. Thanks to your generous contributions...',
      author: 'SABAL Team',
      date: 'June 4, 2024',
      image: PlaceHolderImages.find(img => img.id === 'blog-post-1'),
    },
    {
      id: 2,
      title: 'Empowering the Next Generation Through Education',
      excerpt: 'Education is the cornerstone of a brighter future. Our latest initiative focuses on providing essential learning materials and support...',
      author: 'SABAL Team',
      date: 'May 28, 2024',
      image: PlaceHolderImages.find(img => img.id === 'blog-post-2'),
    },
    {
      id: 3,
      title: 'Highlights from Our Annual Health Camp',
      excerpt: 'This year\'s health camp was our biggest yet, providing free check-ups and medical advice to hundreds of community members...',
      author: 'SABAL Team',
      date: 'May 15, 2024',
      image: PlaceHolderImages.find(img => img.id === 'blog-post-3'),
    },
  ];

  return (
    <div className="bg-secondary/20">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline">From the Blog</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Stories, updates, and insights from our work in the community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <Card key={post.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              {post.image && (
                <CardHeader className="p-0">
                  <div className="aspect-w-16 aspect-h-9">
                    <Image
                      src={post.image.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover"
                      data-ai-hint={post.image.imageHint}
                    />
                  </div>
                </CardHeader>
              )}
              <CardContent className="flex flex-col flex-1 p-6">
                <div className="flex-1">
                  <h2 className="text-xl font-bold font-headline mb-3">
                    <Link href="#" className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-auto">
                    <div className="flex items-center text-xs text-muted-foreground mb-4 space-x-4">
                        <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                        </div>
                    </div>
                  <Button asChild variant="outline" className="group">
                    <Link href="#">
                      Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
