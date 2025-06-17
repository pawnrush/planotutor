export default function PricingPage() {
    return (
      <>
        {/* Header */}
        <header id="header" className="bg-white py-4 shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-6 flex justify-between items-center">
              <a href="/" className="flex items-center space-x-2">
                  <svg className="h-8 w-8 text-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                  <span className="text-xl font-bold text-gray-800">The Plano Tutor</span>
              </a>
              <a href="/" className="bg-blue-700 text-white font-bold py-2 px-5 rounded-full hover:bg-blue-800 transition duration-300">Back to Home</a>
          </div>
        </header>
  
        <main className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto text-center">
                  <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Pricing</h1>
                  <p className="text-lg text-gray-600 mb-10">We are committed to providing transparent pricing for our private pay services.</p>
                  
                  <div className="bg-white p-8 rounded-lg shadow-lg text-left space-y-8">
                      <div>
                          <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">Private Pay Model</h2>
                          <p className="text-gray-600">
                              The Plano Tutor operates on a private pay model. This approach allows us to offer immediate, flexible, and highly individualized services without the delays and restrictions often associated with insurance providers. By focusing on a direct relationship with our clients, we can create the most effective and personalized treatment plans possible.
                          </p>
                      </div>
  
                       <div>
                          <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">Service Rates</h2>
                          <p className="text-gray-600 mb-4">
                             Our rates are competitive and reflect the high level of expertise and one-on-one care provided by our certified professionals. Since every treatment plan is unique, we encourage you to schedule a free consultation to discuss your specific needs. During the consultation, we can provide a detailed breakdown of expected costs.
                          </p>
                          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                             <p className="font-semibold text-gray-800">For a detailed quote and to discuss a plan that fits your family's needs, please contact us.</p>
                             <div className="mt-4">
                               <a href="/contact" className="bg-blue-700 text-white font-bold py-2 px-5 rounded-full hover:bg-blue-800 transition duration-300">Contact Us for a Consultation</a>
                             </div>
                          </div>
                      </div>
  
                      <div>
                          <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">Payment</h2>
                          <p className="text-gray-600">
                              We accept various forms of payment for your convenience. Invoices are provided on a regular schedule, and payments can be made through our secure client portal.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
        </main>
      </>
    );
  }
  