import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'About Us | The Plano Tutor',
  description: 'Learn about our mission, credentials, and compassionate approach to ABA therapy.',
};
// No "use client" needed for a static content page.

// --- Reusable Icon Component ---
const Icon = ({ className }: { className: string }) => <i className={className}></i>;

// --- Main About Page Component ---
export default function AboutPage() {
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
                {/* Page Title Section */}
                <section className="bg-gray-50 py-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-4">
                            About The Plano Tutor
                        </h1>
                        <p className="text-xl text-gray-600">
                            Our mission is to empower potential through compassionate, data-driven care.
                        </p>
                    </div>
                </section>

                {/* Our Mission Section */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-lg text-gray-700">
                        <h2 className="text-3xl font-bold font-heading text-gray-900">Our Mission</h2>
                        <p>Founded on the principle that every individual possesses a unique path to growth, The Plano Tutor is dedicated to providing the highest standard of Applied Behavior Analysis (ABA) therapy and comprehensive behavior data solutions. Our mission is to empower children, support families, and equip professionals with the tools and strategies needed to foster meaningful, positive change.</p>
                        <p>We believe that behavior analysis is not just a science but a compassionate art form. It's about understanding the 'why' behind actions and building a bridge to new skills, greater independence, and a higher quality of life.</p>
                    </div>
                </section>

                {/* Our Philosophy Section */}
                <section className="bg-gray-50 py-20">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold font-heading text-gray-900 text-center mb-12">Our Philosophy: The Three Pillars of Our Practice</h2>
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div className="p-6">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Icon className="fas fa-microscope text-3xl text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold font-heading mb-2">Evidence-Based Practice</h3>
                                <p className="text-gray-600">Our methods are firmly rooted in the scientific principles of ABA. We are committed to using proven, research-backed strategies to ensure our interventions are effective and reliable.</p>
                            </div>
                             <div className="p-6">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Icon className="fas fa-heart text-3xl text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold font-heading mb-2">A Family-Centered Approach</h3>
                                <p className="text-gray-600">We see families as our most important partners. We provide parents and caregivers with the training, resources, and ongoing support necessary to become confident champions for their child's development.</p>
                            </div>
                             <div className="p-6">
                                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Icon className="fas fa-chart-pie text-3xl text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold font-heading mb-2">Data-Informed Decisions</h3>
                                <p className="text-gray-600">We don't guess; we measure. Progress is tracked meticulously through our advanced data systems, allowing us to make objective, informed decisions and celebrate every milestone.</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Credentials Section */}
                <section className="py-20">
                     <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold font-heading text-gray-900 text-center mb-12">Our Credentials: A Commitment to Excellence</h2>
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                           <p className="text-center text-lg text-gray-700 mb-8">Our team is our greatest asset. We are composed of Texas State Licensed Board Certified Behavior Analysts (BCBAs) who are not only experts in their field but are also deeply passionate about making a difference.</p>
                           <ul className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
                                <li className="font-semibold text-gray-800"><Icon className="fas fa-check-circle text-blue-500 mr-2"/>Licensed BCBAs</li>
                                <li className="font-semibold text-gray-800"><Icon className="fas fa-check-circle text-blue-500 mr-2"/>$2M Liability Insurance</li>
                                <li className="font-semibold text-gray-800"><Icon className="fas fa-check-circle text-blue-500 mr-2"/>32+ CEUs Annually</li>
                                <li className="font-semibold text-gray-800"><Icon className="fas fa-check-circle text-blue-500 mr-2"/>ABAI Member</li>
                                <li className="font-semibold text-gray-800"><Icon className="fas fa-check-circle text-blue-500 mr-2"/>TXABA Member</li>
                                <li className="font-semibold text-gray-800"><Icon className="fas fa-check-circle text-blue-500 mr-2"/>SOC 2 Certified Tech</li>
                           </ul>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
