"use client";

import { useState } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | The Plano Tutor',
  description: 'Learn about our mission, who we are, and our compassionate approach to ABA therapy.',
};
// --- Reusable Icon Component for Chevron ---
const Icon = ({ className }: { className: string }) => <i className={className}></i>;

// --- Individual FAQ Item Component ---
const FaqItem = ({ question, children }: { question: string, children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 py-6">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800 focus:outline-none"
            >
                <span>{question}</span>
                <Icon className={`fas fa-chevron-down transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen mt-4' : 'max-h-0'}`}
            >
                <div className="text-gray-600 space-y-4">
                    {children}
                </div>
            </div>
        </div>
    );
};


// --- Main FAQ Page Component ---
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

                    <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-lg">
                        <FaqItem question="What is Applied Behavior Analysis (ABA) therapy?">
                            <p>Applied Behavior Analysis (ABA) is a scientific, evidence-based therapy focused on understanding and improving human behavior. It is widely recognized as the most effective treatment for individuals with Autism Spectrum Disorder (ASD). ABA therapy works by teaching new skills and reducing challenging behaviors through positive reinforcement and data-driven strategies tailored to each individual's needs.</p>
                        </FaqItem>

                        <FaqItem question="Who can benefit from your services?">
                            <p>Our services are designed for a wide range of individuals and organizations:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>**Children and families** seeking in-home ABA therapy for skill development and behavior support.</li>
                                <li>**Schools and educators** who need professional training on Functional Behavior Assessments (FBAs), data collection, and creating effective Behavior Intervention Plans (BIPs).</li>
                                <li>**Clinics and healthcare facilities** requiring HIPAA-compliant data systems to track treatment progress.</li>
                                <li>**Sports teams and fitness organizations** looking to improve athletic performance and team dynamics.</li>
                                <li>**Businesses** aiming to enhance employee productivity and safety through Organizational Behavior Management (OBM).</li>
                            </ul>
                        </FaqItem>

                        <FaqItem question="How does the process start?">
                            <p>Getting started is simple. The first step is to contact us to schedule a free, no-obligation consultation. You can do this by filling out the form on our website or by calling us directly. During this initial call, we will discuss your specific needs and determine the best path forward.</p>
                        </FaqItem>

                        <FaqItem question="Do you accept insurance?">
                           <p>Currently, we operate on a private pay model. This allows us to provide immediate and flexible services without the restrictions and delays often associated with insurance authorizations. We offer transparent pricing and can provide detailed invoices (superbills) that you may be able to submit to your insurance provider for potential out-of-network reimbursement, depending on your plan.</p>
                        </FaqItem>
                        
                        <FaqItem question="What makes your data solutions different?">
                             <p>Our data solutions are built on a foundation of behavioral science and modern technology. They are:</p>
                             <ul className="list-disc list-inside space-y-2">
                                <li>**User-Friendly:** Designed for parents, teachers, and professionals to use with minimal training.</li>
                                <li>**Secure:** Fully HIPAA-compliant and SOC 2 certified to protect sensitive information.</li>
                                <li>**Actionable:** We don't just collect data; we provide clear, real-time dashboards and progress reports that help you make informed decisions.</li>
                             </ul>
                        </FaqItem>
                    </div>
                </div>
            </main>
        </>
    );
}
