"use client";

import { useState } from 'react';

// This is the main component for the Intake page.
export default function IntakePage() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    childName: '',
    dob: '',
    parentName: '',
    email: '',
    phone: '',
    address: '',
    insuranceProvider: '',
    policyNumber: '',
    concerns: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the data to a server or API
    console.log('Intake Form Data Submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Header (re-used for consistency) */}
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
            <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-lg shadow-lg">
                {isSubmitted ? (
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h1>
                        <p className="text-lg text-gray-600 mb-6">Your intake form has been submitted successfully. Our team will review your information and contact you within 2-3 business days to discuss the next steps.</p>
                        <div className="inline-block p-4 bg-green-100 rounded-full mb-6">
                            <svg className="h-16 w-16 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <a href="/" className="bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-800 transition duration-300">Return to Homepage</a>
                    </div>
                ) : (
                    <>
                        <div className="text-center mb-10">
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">Start the Intake Process</h1>
                            <p className="text-gray-600">Please fill out the form below to begin. This helps us understand your needs before our first conversation.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Child's Information */}
                            <fieldset className="border-t pt-6">
                                <legend className="text-xl font-semibold text-gray-800 mb-4">Child's Information</legend>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-1">Child's Full Name</label>
                                        <input type="text" name="childName" id="childName" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" onChange={handleChange} />
                                    </div>
                                    <div>
                                        <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                                        <input type="date" name="dob" id="dob" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" onChange={handleChange} />
                                    </div>
                                </div>
                            </fieldset>

                            {/* Parent/Guardian Information */}
                            <fieldset className="border-t pt-6">
                                <legend className="text-xl font-semibold text-gray-800 mb-4">Parent/Guardian Information</legend>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-1">Your Full Name</label>
                                        <input type="text" name="parentName" id="parentName" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" onChange={handleChange} />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                        <input type="tel" name="phone" id="phone" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" onChange={handleChange} />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                        <input type="email" name="email" id="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" onChange={handleChange} />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Home Address</label>
                                        <input type="text" name="address" id="address" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" onChange={handleChange} />
                                    </div>
                                </div>
                            </fieldset>

                            {/* Insurance Information */}
                            <fieldset className="border-t pt-6">
                                <legend className="text-xl font-semibold text-gray-800 mb-4">Insurance Information</legend>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="insuranceProvider" className="block text-sm font-medium text-gray-700 mb-1">Insurance Provider</label>
                                        <input type="text" name="insuranceProvider" id="insuranceProvider" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" onChange={handleChange} />
                                    </div>
                                    <div>
                                        <label htmlFor="policyNumber" className="block text-sm font-medium text-gray-700 mb-1">Policy/Member ID Number</label>
                                        <input type="text" name="policyNumber" id="policyNumber" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" onChange={handleChange} />
                                    </div>
                                </div>
                            </fieldset>

                            {/* Concerns */}
                            <fieldset className="border-t pt-6">
                                <legend className="text-xl font-semibold text-gray-800 mb-4">Primary Concerns</legend>
                                <div>
                                    <label htmlFor="concerns" className="block text-sm font-medium text-gray-700 mb-1">Please briefly describe your main concerns or the reasons you are seeking services.</label>
                                    <textarea name="concerns" id="concerns" rows={5} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" onChange={handleChange}></textarea>
                                </div>
                            </fieldset>

                            <div className="text-center pt-6 border-t">
                                <button type="submit" className="bg-yellow-400 text-gray-900 font-bold py-3 px-12 rounded-full text-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-105">Submit Intake Form</button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300">
        <div className="container mx-auto px-6 py-12 text-center text-sm">
            <p>&copy; 2025 The Plano Tutor. All Rights Reserved. | <a href="#" className="hover:text-yellow-400">Privacy Policy</a> | <a href="#" className="hover:text-yellow-400">Terms of Service</a></p>
        </div>
      </footer>
    </>
  );
}
