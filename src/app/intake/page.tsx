"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

// --- Reusable Icon Component ---
const Icon = ({ className }: { className: string }) => <i className={className}></i>;

// --- Main Intake Page Component ---
export default function IntakePage() {
  const router = useRouter(); 

  const [formData, setFormData] = useState({
    childName: '',
    dob: '',
    parentName: '',
    email: '',
    phone: '',
    address: '',
    concerns: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    // In a real application, you would send this data to a secure API.
    console.log('Intake Form Data Submitted:', formData);

    // Simulate API call and redirect
    setTimeout(() => {
        setStatus('success');
        router.push('/thank-you');
    }, 1000);
  };

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
            <a href="/" className="bg-blue-600 text-white font-bold py-2 px-5 rounded-full hover:bg-blue-800 transition duration-300">Back to Home</a>
        </div>
      </header>

      <main className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-lg shadow-lg">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold font-heading text-gray-800 mb-2">Start the Intake Process</h1>
                    <p className="text-gray-600">Please fill out the form below to begin. All fields are required.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Child's Information */}
                    <fieldset className="border-t pt-6">
                        <legend className="text-xl font-semibold text-gray-800 mb-4">Child's Information</legend>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-1">Child's Full Name</label>
                                <input type="text" name="childName" id="childName" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                                <input type="date" name="dob" id="dob" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" onChange={handleChange} />
                            </div>
                        </div>
                    </fieldset>

                    {/* Parent/Guardian Information */}
                    <fieldset className="border-t pt-6">
                        <legend className="text-xl font-semibold text-gray-800 mb-4">Parent/Guardian Information</legend>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-1">Your Full Name</label>
                                <input type="text" name="parentName" id="parentName" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input type="tel" name="phone" id="phone" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" onChange={handleChange} />
                            </div>
                            <div className="md:col-span-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input type="email" name="email" id="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" onChange={handleChange} />
                            </div>
                            <div className="md:col-span-2">
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Home Address</label>
                                <input type="text" name="address" id="address" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" onChange={handleChange} />
                            </div>
                        </div>
                    </fieldset>

                    {/* Concerns */}
                    <fieldset className="border-t pt-6">
                        <legend className="text-xl font-semibold text-gray-800 mb-4">Primary Concerns</legend>
                        <div>
                            <label htmlFor="concerns" className="block text-sm font-medium text-gray-700 mb-1">Please briefly describe your main concerns or the reasons you are seeking services.</label>
                            <textarea name="concerns" id="concerns" rows={5} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" onChange={handleChange}></textarea>
                        </div>
                    </fieldset>

                    <div className="text-center pt-6 border-t">
                        <button type="submit" disabled={status === 'sending'} className="bg-amber-600 text-white font-bold py-3 px-12 rounded-full text-lg hover:bg-amber-700 transition duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:scale-100">
                            {status === 'sending' ? 'Submitting...' : 'Submit Intake Form'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </main>
    </>
  );
}
