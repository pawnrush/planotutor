// Add this line at the very top. It tells Next.js that this component uses client-side interactivity (for the mobile menu).
"use client";

// Import the 'useState' hook from React to manage the mobile menu's state.
import { useState } from 'react';

// This is the main component for your homepage.
export default function Home() {
  // 'isMenuOpen' will track if the mobile menu is visible. 'setIsMenuOpen' is the function to change it.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // The <main> element wraps all your page content.
    <main>
      {/* Header */}
      <header id="header" className="bg-white py-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 flex justify-between items-center">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2">
                <svg className="h-8 w-8 text-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
                <span className="text-xl font-bold text-gray-800">The Plano Tutor</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
                <a href="/about" className="text-gray-600 hover:text-blue-700 font-semibold">About Us</a>
                <a href="/services" className="text-gray-600 hover:text-blue-700 font-semibold">Services</a>
                <a href="/testimonials" className="text-gray-600 hover:text-blue-700 font-semibold">Testimonials</a>
                <a href="/contact" className="text-gray-600 hover:text-blue-700 font-semibold">Contact</a>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-700 font-semibold">Client Portal</a>
            </nav>

            {/* Desktop CTA */}
            <a href="/intake" className="hidden md:inline-block bg-blue-700 text-white font-bold py-2 px-5 rounded-full hover:bg-blue-800 transition duration-300">Start Intake</a>
            
            {/* Mobile Menu Toggle - Uses onClick to change the state */}
            <button 
              id="mobile-nav-toggle" 
              className={`md:hidden mobile-nav-toggle ${isMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <span className="sr-only">Open main menu</span>
                <span className="block w-6 h-0.5 bg-gray-700 transition-transform duration-300"></span>
                <span className="block w-6 h-0.5 bg-gray-700 mt-1.5 transition-opacity duration-300"></span>
                <span className="block w-6 h-0.5 bg-gray-700 mt-1.5 transition-transform duration-300"></span>
            </button>
        </div>

        {/* Mobile Navigation - Conditionally shown based on 'isMenuOpen' state */}
        <div id="mobile-nav" className={`${isMenuOpen ? '' : 'hidden'} md:hidden absolute top-full left-0 w-full bg-white shadow-lg`}>
            <nav className="flex flex-col p-4 space-y-2">
                <a href="/about" className="text-gray-600 hover:text-blue-700 p-2 rounded">About Us</a>
                <a href="/services" className="text-gray-600 hover:text-blue-700 p-2 rounded">Services</a>
                <a href="/testimonials" className="text-gray-600 hover:text-blue-700 p-2 rounded">Testimonials</a>
                <a href="/contact" className="text-gray-600 hover:text-blue-700 p-2 rounded">Contact</a>
                <hr className="my-2" />
                <a href="#" className="text-gray-600 hover:text-blue-700 p-2 rounded">Client Portal</a>
                <a href="/intake" className="bg-blue-700 text-white text-center font-bold py-3 px-5 rounded-full hover:bg-blue-800 transition duration-300 mt-2">Start Intake</a>
            </nav>
        </div>
      </header>
      
      {/* Hero Section - The background image is now handled by a style prop */}
      <section 
        className="text-white text-center py-24 sm:py-32 lg:py-40"
        style={{
            background: `linear-gradient(rgba(0, 74, 124, 0.75), rgba(0, 74, 124, 0.75)), url('https://placehold.co/1920x1080/004a7c/ffffff?text=Play+Area') no-repeat center center/cover`
        }}
      >
          <div className="container mx-auto px-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">Empowering Children, Connecting Families.</h1>
              <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto opacity-90 mb-8">Compassionate ABA therapy in Plano, TX, dedicated to helping your child build independence and thrive.</p>
              <a href="/intake" className="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-105">Start the Intake Process</a>
          </div>
      </section>

      {/* Intro Section */}
      <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Guidance on the Path to Potential</h2>
              <p className="max-w-4xl mx-auto text-lg text-gray-600">
                  At The Plano Tutor, we understand that every child's journey is unique. We provide expert, evidence-based Applied Behavior Analysis (ABA) therapy that illuminates the path forward. Our play-based, compassionate approach focuses on celebrating your child's strengths, nurturing new skills, and empowering your entire family with the tools for lasting success.
              </p>
          </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Behavior Analytic Services</h2>
                  <p className="max-w-3xl mx-auto text-lg text-gray-600">We offer a range of data-driven solutions tailored to diverse needs across home, school, and organizational settings.</p>
              </div>

              {/* Services for Children & Families */}
              <div className="mb-16">
                  <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">For Children & Families</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {/* Service Card 1 */}
                      <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                          <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                              <svg className="h-10 w-10 text-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">In-Home ABA Therapy</h3>
                          <p className="text-gray-600 mb-4">We provide personalized ABA programs and robust data collection solutions right in your home to foster daily living skills.</p>
                          <a href="/services" className="font-semibold text-blue-700 hover:text-blue-800">Learn More &rarr;</a>
                      </div>
                      {/* Service Card 2 */}
                      <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                          <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                               <svg className="h-10 w-10 text-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">School Consultation</h3>
                          <p className="text-gray-600 mb-4">We partner with schools for training on FBAs, data collection, and creating effective BIPs to support student success.</p>
                          <a href="/services" className="font-semibold text-blue-700 hover:text-blue-800">Learn More &rarr;</a>
                      </div>
                      {/* Service Card 3 */}
                      <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                          <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                              <svg className="h-10 w-10 text-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /> </svg>
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">Clinic-Based Services</h3>
                          <p className="text-gray-600 mb-4">Our clinic offers a controlled environment for intensive therapy and precise behavior data collection for focused skill acquisition.</p>
                          <a href="/services" className="font-semibold text-blue-700 hover:text-blue-800">Learn More &rarr;</a>
                      </div>
                  </div>
              </div>

              {/* Services for Organizations */}
              <div>
                  <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">For Organizations & Professionals</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                      {/* Service Card 4 */}
                      <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                          <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                              <svg className="h-10 w-10 text-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /> </svg>
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">Sports & Fitness Analysis</h3>
                          <p className="text-gray-600 mb-4">Data collection and intervention solutions for athletes and fitness clients to enhance performance and motivation.</p>
                          <a href="/services" className="font-semibold text-blue-700 hover:text-blue-800">Learn More &rarr;</a>
                      </div>
                      {/* Service Card 5 */}
                      <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                          <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                              <svg className="h-10 w-10 text-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /> </svg>
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">Organizational Behavior Mgt.</h3>
                          <p className="text-gray-600 mb-4">Applying behavioral principles to business to improve employee performance, safety, and productivity via data-driven solutions.</p>
                          <a href="/services" className="font-semibold text-blue-700 hover:text-blue-800">Learn More &rarr;</a>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">What Families Are Saying</h2>
               <div className="max-w-3xl mx-auto">
                  <div className="p-8 bg-gray-50 rounded-lg shadow-sm">
                      <p className="text-xl italic text-gray-700 mb-4">"The Plano Tutor has been a life-changing partner for our family. The compassionate care and individualized attention have helped our son make incredible progress. We finally feel hopeful."</p>
                      <p className="font-bold text-lg text-blue-700">&mdash; Sarah J., Plano, TX</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-blue-800 text-white">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Take the Next Step?</h2>
              <p className="max-w-2xl mx-auto text-lg opacity-90 mb-8">Our team is here to guide you through the process. Contact us today or fill out our intake form to get started.</p>
              <a href="/intake" className="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-105">Request an Intake Consultation</a>
          </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300">
        <div className="container mx-auto px-6 py-12">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
                {/* Company */}
                <div className="footer-col">
                    <h4 className="text-white font-bold mb-4">Company</h4>
                    <ul>
                        <li className="mb-2"><a href="/about" className="hover:text-yellow-400">About Us</a></li>
                        <li className="mb-2"><a href="/about" className="hover:text-yellow-400">Our Approach</a></li>
                        <li className="mb-2"><a href="/testimonials" className="hover:text-yellow-400">Success Stories</a></li>
                        <li className="mb-2"><a href="/careers" className="hover:text-yellow-400">Careers</a></li>
                    </ul>
                </div>
                {/* Services */}
                <div className="footer-col">
                    <h4 className="text-white font-bold mb-4">Services</h4>
                    <ul>
                        <li className="mb-2"><a href="/services" className="hover:text-yellow-400">In-Home Therapy</a></li>
                        <li className="mb-2"><a href="/services" className="hover:text-yellow-400">School Consultation</a></li>
                        <li className="mb-2"><a href="/services" className="hover:text-yellow-400">Clinic-Based Services</a></li>
                        <li className="mb-2"><a href="/services" className="hover:text-yellow-400">Sports & Fitness</a></li>
                        <li className="mb-2"><a href="/services" className="hover:text-yellow-400">OBM</a></li>
                    </ul>
                </div>
                {/* Resources */}
                <div className="footer-col">
                    <h4 className="text-white font-bold mb-4">Resources</h4>
                    <ul>
                        <li className="mb-2"><a href="/blog" className="hover:text-yellow-400">Blog</a></li>
                        <li className="mb-2"><a href="/faq" className="hover:text-yellow-400">FAQs</a></li>
                        <li className="mb-2"><a href="/pricing" className="hover:text-yellow-400">Pricing</a></li>
                    </ul>
                </div>
                {/* Contact */}
                <div className="footer-col">
                    <h4 className="text-white font-bold mb-4">Contact</h4>
                    <address className="not-italic">
                        <p>123 Progress Way<br />Plano, TX 75023</p>
                        <a href="tel:8557728847" className="block mt-2 hover:text-yellow-400">(855) 772-8847</a>
                        <a href="mailto:info@planotutor.net" className="block mt-1 hover:text-yellow-400">info@planotutor.net</a>
                    </address>
                </div>
            </div>
            <div className="border-t border-gray-700 pt-6 text-center text-sm">
                <p>&copy; 2025 The Plano Tutor. All Rights Reserved. | <a href="/privacy" className="hover:text-yellow-400">Privacy Policy</a> | <a href="/terms" className="hover:text-yellow-400">Terms of Service</a></p>
            </div>
        </div>
      </footer>
    </main>
  );
}
