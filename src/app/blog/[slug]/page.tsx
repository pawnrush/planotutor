import { client } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import type { Metadata } from 'next';

// --- Reusable Icon Component ---
const Icon = ({ className }: { className: string }) => <i className={className}></i>;

// --- Define the type for a single blog post ---
interface BlogPost {
  title: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  body: any[]; // Portable Text content
  publishedAt: string;
}

// --- Function to fetch a single blog post by its slug ---
async function getBlogPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    mainImage {
      asset->{
        url
      }
    },
    body,
    publishedAt
  }`;

  const post = await client.fetch<BlogPost>(query, { slug });
  return post;
}

// --- Generate Metadata for each post ---
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  return {
    title: `${post.title} | The Plano Tutor`,
  };
}

// --- Main Blog Post Page Component ---
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = await getBlogPost(params.slug);

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <>
            {/* Header */}
            <header id="header" className="bg-white py-4 shadow-md sticky top-0 z-50">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <a href="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <Icon className="fas fa-brain text-white text-lg" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold font-heading text-gray-900">The Plano Tutor</h1>
                        </div>
                    </a>
                    <a href="/blog" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        Back to Blog
                    </a>
                </div>
            </header>

            <main className="bg-white">
                <article>
                    <header className="py-16 bg-gray-50 text-center">
                        <div className="max-w-4xl mx-auto px-4">
                            <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-4">{post.title}</h1>
                            <p className="text-lg text-gray-500">Published on {new Date(post.publishedAt).toLocaleDateString()}</p>
                        </div>
                    </header>
                    
                    {post.mainImage && (
                        <div className="max-w-5xl mx-auto my-8 px-4">
                            <img src={post.mainImage.asset.url} alt={post.title} className="w-full h-auto rounded-2xl shadow-lg"/>
                        </div>
                    )}

                    <div className="py-12">
                        <div className="prose lg:prose-xl mx-auto px-4">
                            <PortableText value={post.body} />
                        </div>
                    </div>
                </article>
            </main>
        </>
    );
}
