// No "use client" needed for this static content page.

// --- Reusable Icon Component ---
const Icon = ({ className }: { className: string }) => <i className={className}></i>;

// --- Sample Testimonials Data ---
const testimonials = [
    {
        name: 'Sarah J., Parent',
        location: 'Garland, TX',
        story: 'The Plano Tutor has been a life-changing partner for our family. Before we started, communication was our biggest challenge. The compassionate care and individualized attention from our BCBA and RBT have helped our son make incredible progress. He\'s now using words to express his needs, and we finally feel hopeful about the future. We can\'t thank them enough.',
        service: 'In-Home ABA Therapy'
    },
    {
        name: 'Mark T., Elementary School Principal',
        location: 'Irving, TX',
        story: 'We brought The Plano Tutor in for a professional development day focused on data collection and BIPs. Their consultant was incredibly knowledgeable and provided our teachers with practical, effective strategies that we could implement immediately. The training has transformed how we approach classroom behavior management.',
        service: 'School Consultation'
    },
    {
        name: 'The Thompson Family',
        location: 'Rockwall, TX',
        story: 'The parent training sessions have been invaluable. We felt lost and overwhelmed, but the team gave us the tools and confidence to support our daughter at home. Seeing her use the skills she learns in therapy during our everyday routines has been amazing. It truly feels like a partnership.',
        service: 'Parent Training & Support'
    },
     {
        name: 'Coach Davis',
        location: 'Frisco, TX',
        story: 'The OBM and performance analysis services have been a game-changer for our athletic program. The data-driven insights helped us refine our coaching strategies and improve team cohesion, leading to a measurable improvement in on-field performance.',
        service: 'Sports & Fitness Analysis'
    }
];

// --- Main Testimonials Page Component ---
export default function TestimonialsPage() {
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
                <section className="bg-white py-16 border-b border-gray-200">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-4">
                            Success Stories
                        </h1>
                        <p className="text-xl text-gray-600">
                            Read what families, educators, and professionals are saying about our impact.
                        </p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="space-y-12">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                                    <div className="flex items-start">
                                        <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 mr-6">
                                           <Icon className="fas fa-quote-left"/>
                                        </div>
                                        <div className="flex-grow">
                                            <p className="text-lg text-gray-700 italic">"{testimonial.story}"</p>
                                            <div className="mt-4 text-right">
                                                <p className="font-bold text-gray-900 font-heading">{testimonial.name}</p>
                                                <p className="text-sm text-gray-500">{testimonial.location}</p>
                                                <p className="text-sm font-semibold text-blue-600 mt-1">{testimonial.service}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                         <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">
                            Ready to Create Your Own Success Story?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Contact us today to start your journey.
                        </p>
                        <a href="/intake" className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors text-lg">
                            Start the Intake Process
                        </a>
                    </div>
                </section>
            </main>
        </>
    );
}
