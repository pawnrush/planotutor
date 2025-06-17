// No "use client" needed for a static content page.

// --- Reusable Icon Component ---
const Icon = ({ className }: { className: string }) => <i className={className}></i>;

// --- Main Services Page Component ---
export default function ServicesPage() {
    const services = [
        { icon: 'fas fa-home', title: 'In-Home ABA Therapy', description: 'Our in-home ABA therapy provides personalized, one-on-one intervention in the most comfortable and natural environment for your child: your home. We work on developing crucial life skills, communication, and social behaviors within the context of your family\'s daily routines.' },
        { icon: 'fas fa-school', title: 'School Training & Consultation', description: 'We partner with educational institutions to empower teachers and staff. Our professional development programs provide comprehensive training on Functional Behavior Assessments (FBAs), effective data collection methods, and the creation of robust Behavior Intervention Plans (BIPs) to foster a positive and productive learning environment for all students.' },
        { icon: 'fas fa-chart-line', title: 'Home & School Data Solutions', description: 'We provide user-friendly, secure data collection systems for both families and schools. These tools allow for real-time tracking of behaviors, skill acquisition, and intervention effectiveness, turning raw data into clear, actionable insights and detailed progress reports.' },
        { icon: 'fas fa-clinic-medical', title: 'Clinical Data Management', description: 'For therapy centers and healthcare facilities, we offer sophisticated, HIPAA-compliant data management systems. Our platforms are designed to track treatment outcomes, ensure compliance, and provide multi-user access for collaborative care teams, streamlining clinical operations.' },
        { icon: 'fas fa-running', title: 'Sports & Fitness Performance Analysis', description: 'Applying the principles of behavior analysis to athletics, we offer data tracking solutions for sports teams and fitness professionals. We help analyze and improve athletic performance, team cohesion, coaching effectiveness, and motivational strategies.' },
        { icon: 'fas fa-building', title: 'Organizational Behavior Management (OBM)', description: 'We help businesses thrive by applying behavioral science to the workplace. Our OBM services focus on data-driven strategies to improve employee productivity, enhance workplace safety protocols, assess leadership skills, and optimize team dynamics for better business outcomes.' },
        { icon: 'fas fa-users', title: 'Parent Training & Support', description: 'A cornerstone of our philosophy is empowering parents. We offer dedicated training and workshops that equip families with practical ABA strategies and techniques, ensuring that progress continues long after a therapy session ends. We provide the tools and confidence you need to support your child\'s journey.' }
    ];

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

            <main className="bg-white">
                <section className="bg-gray-50 py-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-4">
                            Our Services
                        </h1>
                        <p className="text-xl text-gray-600">
                            Data-driven behavior solutions for every environment.
                        </p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="space-y-12">
                            {services.map((service, index) => (
                                <div key={index} className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl border border-gray-100 shadow-md">
                                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <Icon className={`${service.icon} text-white text-4xl`} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold font-heading text-gray-900 mb-2">{service.title}</h2>
                                        <p className="text-gray-600">{service.description}</p>
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
