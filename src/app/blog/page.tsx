// No "use client" needed for a static content page.

// --- Reusable Icon Component ---
const Icon = ({ className }: { className: string }) => <i className={className}></i>;

// --- Sample Blog Post Data ---
// In a real application, this data would come from a CMS or database.
const blogPosts = [
    {
        slug: 'what-is-aba-therapy',
        title: 'A Parent\'s Guide to Understanding ABA Therapy',
        excerpt: 'Applied Behavior Analysis (ABA) is a therapy based on the science of learning and behavior. This guide breaks down the core principles and what to expect.',
        author: 'Dr. Jane Doe, BCBA-D',
        date: 'June 10, 2025',
        category: 'ABA Fundamentals',
        imageUrl: 'https://placehold.co/600x400/667eea/ffffff?text=Understanding+ABA'
    },
    {
        slug: 'data-in-the-classroom',
        title: 'How Effective Data Collection Transforms the Classroom',
        excerpt: 'Data isn\'t just for reports; it\'s a tool for transformation. Learn how our data systems help teachers support student success and manage classroom behavior.',
        author: 'The Plano Tutor Team',
        date: 'June 03, 2025',
        category: 'Education & Tech',
        imageUrl: 'https://placehold.co/600x400/764ba2/ffffff?text=Classroom+Data'
    },
    {
        slug: 'supporting-your-child-at-home',
        title: '5 Practical ABA Strategies to Use at Home',
        excerpt: 'Extending therapeutic strategies into the home environment is key for success. Here are five simple yet effective techniques you can start using today.',
        author: 'Dr. Jane Doe, BCBA-D',
        date: 'May 28, 2025',
        category: 'Parent Resources',
        imageUrl: 'https://placehold.co/600x400/f7b733/ffffff?text=Home+Strategies'
    },
    {
        slug: 'obm-in-the-workplace',
        title: 'Boosting Productivity with Organizational Behavior Management',
        excerpt: 'Learn how the principles of behavior analysis can be applied in a corporate setting to improve employee performance, safety, and overall productivity.',
        author: 'The Plano Tutor Team',
        date: 'May 21, 2025',
        category: 'OBM',
        imageUrl: 'https://placehold.co/600x400/34d399/ffffff?text=Workplace+Success'
    }
];

// --- Main Blog Page Component ---
export default function BlogPage() {
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
                    <a href="/" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        Back to Home
                    </a>
                </div>
            </header>

            <main className="bg-gray-50">
                {/* Page Title Section */}
                <section className="bg-white py-16 border-b border-gray-200">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-4">
                            Resources & Insights
                        </h1>
                        <p className="text-xl text-gray-600">
                            Our blog provides valuable information for parents, educators, and professionals on topics in behavior analysis.
                        </p>
                    </div>
                </section>

                {/* Blog Posts Grid */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {blogPosts.map((post) => (
                                <div key={post.slug} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col group">
                                    <div className="relative">
                                        <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <p className="text-sm font-semibold text-blue-600 mb-2">{post.category}</p>
                                        <h2 className="text-xl font-bold font-heading text-gray-900 mb-3 flex-grow">{post.title}</h2>
                                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                        <div className="text-sm text-gray-500 mt-auto">
                                            <span>{post.author}</span> &middot; <span>{post.date}</span>
                                        </div>
                                        <a href={`/blog/${post.slug}`} className="mt-4 inline-block text-amber-600 font-semibold hover:text-amber-700">
                                            Read More <Icon className="fas fa-arrow-right ml-1" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
