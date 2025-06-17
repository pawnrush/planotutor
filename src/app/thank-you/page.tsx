// No "use client" needed for this static confirmation page.

// --- Reusable Icon Component ---
const Icon = ({ className }: { className: string }) => <i className={className}></i>;

// --- Main Thank You Page Component ---
export default function ThankYouPage() {
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
                </div>
            </header>

            <main className="bg-gray-50 flex items-center justify-center py-20" style={{ minHeight: 'calc(100vh - 80px)'}}>
                <div className="max-w-2xl mx-auto px-4 text-center">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Icon className="fas fa-check-circle text-5xl text-green-600" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-4">
                        Thank You!
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Your intake form has been submitted successfully. Our team will review your information and contact you within 2-3 business days to discuss the next steps.
                    </p>
                    <a href="/" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
                        Return to Homepage
                    </a>
                </div>
            </main>
        </>
    );
}
