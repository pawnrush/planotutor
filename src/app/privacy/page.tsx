// No "use client" needed for a static content page.

// --- Reusable Icon Component ---
const Icon = ({ className }: { className: string }) => <i className={className}></i>;

// --- Main Privacy Policy Page Component ---
export default function PrivacyPolicyPage() {
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
                        <h1 className="font-heading">Privacy Policy</h1>
                        <p><strong>Last Updated:</strong> June 17, 2025</p>

                        <p>The Plano Tutor ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>

                        <h2>Information We Collect</h2>
                        <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
                        <ul>
                            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number, and your child's information, that you voluntarily give to us when you fill out a contact or intake form.</li>
                            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
                        </ul>

                        <h2>Use of Your Information</h2>
                        <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
                        <ul>
                            <li>Respond to your inquiries and provide you with requested services.</li>
                            <li>Send you administrative information, such as updates on our services and changes to our terms and policies.</li>
                            <li>Compile anonymous statistical data and analysis for use internally.</li>
                            <li>Increase the efficiency and operation of the Site.</li>
                        </ul>

                        <h2>Disclosure of Your Information</h2>
                        <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website or servicing you, so long as those parties agree to keep this information confidential.</p>

                        <h2>Security of Your Information</h2>
                        <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
                        
                        <h2>HIPAA Compliance</h2>
                        <p>As a provider of healthcare-related services, we are committed to complying with the Health Insurance Portability and Accountability Act (HIPAA). We have implemented safeguards to protect patient health information (PHI) in accordance with HIPAA standards.</p>

                        <h2>Contact Us</h2>
                        <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
                        <address className="not-italic">
                            The Plano Tutor<br />
                            Email: info@planotutor.net<br />
                            Phone: (972) 439-5845
                        </address>
                    </div>
                </div>
            </main>
        </>
    );
}
