// No "use client" needed for a static content page.

// --- Reusable Icon Component ---
const Icon = ({ className }: { className: string }) => <i className={className}></i>;

// --- Sample Job Openings ---
const jobOpenings = [
    {
        title: 'Board Certified Behavior Analyst (BCBA)',
        location: 'Garland, TX & Surrounding Areas',
        type: 'Full-Time',
        description: 'Lead clinical cases, conduct assessments, develop treatment plans, and provide supervision to RBTs. Must be a licensed BCBA in Texas with at least 2 years of experience.'
    },
    {
        title: 'Registered Behavior Technician (RBT)',
        location: 'Irving & Rockwall, TX',
        type: 'Full-Time / Part-Time',
        description: 'Work directly with clients to implement individualized ABA therapy plans under the supervision of a BCBA. RBT certification and a passion for helping children are required.'
    },
    {
        title: 'School Consultation Specialist',
        location: 'Remote / On-site Hybrid',
        type: 'Contract',
        description: 'Partner with local school districts to provide expert training and consultation on FBA, BIP development, and classroom behavior management strategies.'
    }
];

// --- Main Careers Page Component ---
export default function CareersPage() {
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
                            Join Our Mission
                        </h1>
                        <p className="text-xl text-gray-600">
                            We are looking for passionate, dedicated professionals to help us make a difference in the lives of children and families.
                        </p>
                    </div>
                </section>

                {/* Why Work With Us Section */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold font-heading text-gray-900 text-center mb-12">Why Join The Plano Tutor?</h2>
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div className="bg-white p-8 rounded-2xl shadow-md">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Icon className="fas fa-lightbulb text-3xl text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold font-heading mb-2">Meaningful Impact</h3>
                                <p className="text-gray-600">Directly contribute to life-changing outcomes for children and families in your community.</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-md">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Icon className="fas fa-user-graduate text-3xl text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold font-heading mb-2">Professional Growth</h3>
                                <p className="text-gray-600">We invest in our team with continuous education, mentorship, and opportunities for advancement.</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-md">
                                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Icon className="fas fa-users-cog text-3xl text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold font-heading mb-2">Supportive Culture</h3>
                                <p className="text-gray-600">Join a collaborative and supportive environment where your expertise is valued and respected.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Current Openings Section */}
                <section className="bg-white py-20">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold font-heading text-gray-900 text-center mb-12">Current Openings</h2>
                        <div className="space-y-6">
                            {jobOpenings.length > 0 ? (
                                jobOpenings.map((job, index) => (
                                    <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-500 transition-colors duration-300">
                                        <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                                            <div>
                                                <h3 className="text-xl font-bold font-heading text-gray-900">{job.title}</h3>
                                                <div className="flex items-center text-sm text-gray-500 mt-1 space-x-4">
                                                    <span><Icon className="fas fa-map-marker-alt mr-1"/> {job.location}</span>
                                                    <span><Icon className="fas fa-clock mr-1"/> {job.type}</span>
                                                </div>
                                            </div>
                                            <a href="mailto:info@planotutor.net?subject=Application for [Job Title]" className="mt-4 sm:mt-0 bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-700 transition-colors flex-shrink-0">
                                                Apply Now
                                            </a>
                                        </div>
                                        <p className="text-gray-600 mt-4 border-t border-gray-100 pt-4">{job.description}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center text-gray-600 text-lg">We do not have any open positions at this time, but we are always interested in connecting with talented professionals. Please feel free to send your resume to info@planotutor.net.</p>
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
