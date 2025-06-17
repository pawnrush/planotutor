// No "use client" needed for a static content page.

// --- Reusable Icon Component ---
const Icon = ({ className }: { className: string }) => <i className={className}></i>;

// --- Main Terms of Service Page Component ---
export default function TermsOfServicePage() {
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

            <main className="bg-white py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose lg:prose-lg mx-auto">
                        <h1 className="font-heading">Terms of Service</h1>
                        <p><strong>Last Updated:</strong> June 17, 2025</p>

                        <p>Please read these Terms of Service ("Terms") carefully before using the website operated by The Plano Tutor ("us," "we," or "our").</p>

                        <h2>1. Acceptance of Terms</h2>
                        <p>By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the website. These terms apply to all visitors, users, and others who wish to access or use the Service.</p>
                        
                        <h2>2. Use of the Website</h2>
                        <p>This website and the information it contains are provided for general informational purposes only. The content is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>

                        <h2>3. Intellectual Property</h2>
                        <p>The content, organization, graphics, design, compilation, and other matters related to the Site are protected under applicable copyrights, trademarks, and other proprietary rights. The copying, redistribution, use, or publication by you of any such matters or any part of the Site is strictly prohibited.</p>

                        <h2>4. Limitation of Liability</h2>
                        <p>In no event shall The Plano Tutor, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

                        <h2>5. Governing Law</h2>
                        <p>These Terms shall be governed and construed in accordance with the laws of the State of Texas, United States, without regard to its conflict of law provisions.</p>

                        <h2>6. Changes to Terms</h2>
                        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page. By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.</p>

                        <h2>Contact Us</h2>
                        <p>If you have any questions about these Terms, please contact us at info@planotutor.net.</p>
                    </div>
                </div>
            </main>
        </>
    );
}
