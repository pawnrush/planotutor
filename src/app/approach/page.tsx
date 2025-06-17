// No "use client" needed for this static content page.

// --- Reusable Icon Component ---
const Icon = ({ className }: { className: string }) => <i className={className}></i>;

// --- Main Our Approach Page Component ---
export default function ApproachPage() {
    const approachSteps = [
        {
            step: 1,
            title: 'Initial Consultation',
            description: 'Your journey begins with a free, no-obligation consultation. This is our opportunity to listen. We discuss your concerns, answer your initial questions, and understand your goals. This first conversation helps us determine how we can best support you and your family.',
            icon: 'fas fa-comments'
        },
        {
            step: 2,
            title: 'Comprehensive Assessment',
            description: 'If you choose to move forward, a Board Certified Behavior Analyst (BCBA) will conduct a comprehensive assessment. This involves direct observation, interviews, and standardized evaluations to get a complete picture of your child\'s strengths, skills, and areas for growth. We use this to establish a baseline for measuring progress.',
            icon: 'fas fa-clipboard-list'
        },
        {
            step: 3,
            title: 'Individualized Goal Setting',
            description: 'Using the assessment data, we collaborate with you to develop a highly individualized treatment plan. We set clear, measurable, and meaningful goals that are tailored to your child\'s unique needs and your family\'s priorities. This plan becomes the roadmap for our therapy.',
            icon: 'fas fa-bullseye'
        },
        {
            step: 4,
            title: 'Data-Driven Therapy',
            description: 'Our one-on-one therapy sessions, led by skilled technicians and supervised by a BCBA, are dynamic and engaging. We meticulously collect data during every session. This allows us to track progress in real-time and make objective, data-informed decisions to continually refine and optimize the treatment plan.',
            icon: 'fas fa-chart-bar'
        },
        {
            step: 5,
            title: 'Parent & Caregiver Collaboration',
            description: 'You are the most important part of the team. We provide regular training and support to ensure you have the tools and confidence to implement strategies at home. This collaborative approach ensures consistency and helps generalize new skills to all areas of your child\'s life.',
            icon: 'fas fa-hands-helping'
        },
        {
            step: 6,
            title: 'Ongoing Review & Progress Reporting',
            description: 'We conduct regular progress meetings to review data, discuss achievements, and make any necessary adjustments to the treatment goals. You will receive clear, easy-to-understand reports that visualize your child\'s progress over time, ensuring you are always informed and involved.',
            icon: 'fas fa-sync-alt'
        }
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
                <section className="bg-gray-50 py-16 border-b border-gray-200">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-4">
                            Our Approach to Care
                        </h1>
                        <p className="text-xl text-gray-600">
                            A transparent, collaborative, and data-driven process designed for success.
                        </p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative">
                            {/* The vertical line */}
                            <div className="absolute left-10 top-10 bottom-10 w-0.5 bg-blue-200 hidden md:block"></div>

                            <div className="space-y-12">
                                {approachSteps.map((step) => (
                                    <div key={step.step} className="relative flex items-start gap-8">
                                        <div className="flex-shrink-0 flex flex-col items-center">
                                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white z-10">
                                                <Icon className={`${step.icon} text-3xl`} />
                                            </div>
                                            <div className="mt-2 text-sm font-bold text-blue-600">STEP {step.step}</div>
                                        </div>
                                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex-grow">
                                            <h2 className="text-2xl font-bold font-heading text-gray-900 mb-3">{step.title}</h2>
                                            <p className="text-gray-600">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
