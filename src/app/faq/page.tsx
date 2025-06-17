import type { Metadata } from 'next';
import FaqAccordion from './FaqAccordion'; // Import the new client component

// --- Page Metadata (Server Component Feature) ---
export const metadata: Metadata = {
  title: 'FAQ | The Plano Tutor',
  description: 'Find answers to common questions about ABA therapy, our services, data solutions, and our process.',
};

// --- Reusable Icon Component ---
const Icon = ({ className }: { className: string }) => <i className={className}></i>;

// --- Main FAQ Page Component (Now a Server Component) ---
export default function FaqPage() {
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

            <main className="bg-gray-50 py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-4">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-xl text-gray-600">
                            Have questions? We have answers. If you can't find what you're looking for, please don't hesitate to contact us.
                        </p>
                    </div>

                    {/* Render the interactive client component here */}
                    <FaqAccordion />
                </div>
            </main>
        </>
    );
}
