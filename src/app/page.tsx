<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Plano Tutor - ABA Therapy & Comprehensive Behavior Data Solutions</title>
    <meta name="description" content="Expert ABA therapy and comprehensive behavior data collection solutions for home, school, clinic, sports, and organizational settings in Plano, TX. Professional training and consultation services.">
    
    <!-- CDN Libraries -->
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- React and Babel -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    
    <style>
        body {
            font-family: 'Inter', sans-serif;
            scroll-behavior: smooth;
        }
        .font-heading {
            font-family: 'Poppins', sans-serif;
        }
        .gradient-bg {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .service-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .pricing-card {
            transition: all 0.3s ease;
        }
        .pricing-card:hover {
            transform: scale(1.05);
        }
        .blob {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            background: linear-gradient(45deg, #667eea, #764ba2);
            opacity: 0.1;
        }
        @media print {
            body { print-color-adjust: exact; }
            .no-print { display: none !important; }
        }
    </style>
</head>
<body class="bg-gray-50">
    <div id="root"></div>

    <script type="text/babel">
        const { useState, useEffect, useRef } = React;

        // Header Component
        const Header = () => {
            const [isMenuOpen, setIsMenuOpen] = useState(false);
            const [isScrolled, setIsScrolled] = useState(false);

            useEffect(() => {
                const handleScroll = () => {
                    setIsScrolled(window.scrollY > 50);
                };
                window.addEventListener('scroll', handleScroll);
                return () => window.removeEventListener('scroll', handleScroll);
            }, []);

            return (
                <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-4">
                            <div className="flex items-center space-x-2">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                    <i className="fas fa-brain text-white text-lg"></i>
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold font-heading text-gray-900">The Plano Tutor</h1>
                                    <p className="text-xs text-gray-600">ABA Therapy & Data Solutions</p>
                                </div>
                            </div>

                            <nav className="hidden md:flex space-x-8">
                                <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</a>
                                <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
                                <a href="#pricing" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Pricing</a>
                                <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
                            </nav>

                            <div className="flex items-center space-x-4">
                                <a href="tel:8557728847" className="hidden md:flex items-center text-blue-600 font-semibold">
                                    <i className="fas fa-phone mr-2"></i>
                                    (855) 772-8847
                                </a>
                                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
            );
        };

        // Hero Section Component
        const HeroSection = () => {
            return (
                <section className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="blob absolute top-20 right-20 w-64 h-64"></div>
                    <div className="blob absolute bottom-20 left-20 w-48 h-48"></div>
                    
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6">
                            Empowering Children,<br />
                            <span className="text-yellow-300">Connecting Families</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
                            Comprehensive ABA therapy and behavior data collection solutions for home, school, clinic, sports, and organizational settings in Plano, TX.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center">
                                <i className="fas fa-play-circle mr-2"></i>
                                Start Your Journey
                            </button>
                            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
                                <i className="fas fa-calendar mr-2"></i>
                                Schedule Consultation
                            </button>
                        </div>
                    </div>
                </section>
            );
        };

        // Services Component
        const ServicesSection = () => {
            const services = [
                {
                    icon: 'fas fa-home',
                    title: 'In-Home ABA Therapy',
                    description: 'Personalized ABA therapy in your natural family environment with individualized treatment plans.',
                    features: ['One-on-one sessions', 'Family training', 'Natural environment teaching', 'Flexible scheduling'],
                    price: 'Starting at $75/hour'
                },
                {
                    icon: 'fas fa-school',
                    title: 'School Training Programs',
                    description: 'Professional development for educators on FBA, data collection, and behavior intervention plans.',
                    features: ['FBA methodology', 'Data collection systems', 'BIPS development', 'Compliance training'],
                    price: 'Starting at $150/hour'
                },
                {
                    icon: 'fas fa-chart-line',
                    title: 'Home Data Solutions',
                    description: 'Digital behavior tracking systems for families to monitor progress and intervention effectiveness.',
                    features: ['Mobile apps', 'Real-time tracking', 'Progress reports', 'Parent dashboards'],
                    price: 'Starting at $200/setup'
                },
                {
                    icon: 'fas fa-graduation-cap',
                    title: 'School Data Systems',
                    description: 'Comprehensive data collection solutions for educational institutions and IEP compliance.',
                    features: ['Student tracking', 'IEP documentation', 'Behavior monitoring', 'Academic progress'],
                    price: 'Starting at $300/setup'
                },
                {
                    icon: 'fas fa-clinic-medical',
                    title: 'Clinical Data Solutions',
                    description: 'HIPAA-compliant data collection systems for healthcare facilities and therapy centers.',
                    features: ['Treatment tracking', 'Outcome measurement', 'Compliance reporting', 'Multi-user access'],
                    price: 'Starting at $400/setup'
                },
                {
                    icon: 'fas fa-running',
                    title: 'Sports & Fitness Data',
                    description: 'Athletic performance and behavior tracking for sports teams and fitness organizations.',
                    features: ['Performance metrics', 'Team behavior analysis', 'Coaching effectiveness', 'Injury prevention'],
                    price: 'Starting at $250/setup'
                },
                {
                    icon: 'fas fa-building',
                    title: 'Organizational Behavior',
                    description: 'Workplace behavior management and performance optimization for businesses.',
                    features: ['Employee productivity', 'Safety monitoring', 'Leadership assessment', 'Team dynamics'],
                    price: 'Starting at $500/setup'
                },
                {
                    icon: 'fas fa-users',
                    title: 'Parent Training & Support',
                    description: 'Comprehensive training programs to empower families with ABA strategies and techniques.',
                    features: ['Group workshops', 'Individual coaching', 'Resource materials', 'Ongoing support'],
                    price: 'Starting at $100/session'
                }
            ];

            return (
                <section id="services" className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-4">
                                Comprehensive Behavior Solutions
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Expert ABA therapy and data collection solutions across all environments and settings
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {services.map((service, index) => (
                                <div key={index} className="service-card bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                                        <i className={`${service.icon} text-white text-2xl`}></i>
                                    </div>
                                    <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">{service.title}</h3>
                                    <p className="text-gray-600 mb-4">{service.description}</p>
                                    <ul className="space-y-2 mb-6">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-sm text-gray-600">
                                                <i className="fas fa-check text-green-500 mr-2"></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="text-blue-600 font-semibold mb-4">{service.price}</div>
                                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                        Learn More
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            );
        };

        // About Section Component
        const AboutSection = () => {
            return (
                <section id="about" className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6">
                                    Expert Care, Compassionate Approach
                                </h2>
                                <p className="text-lg text-gray-600 mb-6">
                                    At The Plano Tutor, we believe every child deserves the opportunity to reach their full potential. Our evidence-based ABA therapy and comprehensive data collection solutions are designed to support growth across all environments.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                            <i className="fas fa-certificate text-blue-600"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Board Certified Behavior Analysts</h4>
                                            <p className="text-gray-600">Licensed BCBA professionals with extensive experience</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                                            <i className="fas fa-shield-alt text-green-600"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">HIPAA Compliant</h4>
                                            <p className="text-gray-600">Secure, encrypted data protection and privacy</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                                            <i className="fas fa-users text-purple-600"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Family-Centered Approach</h4>
                                            <p className="text-gray-600">Collaborative care involving parents and caregivers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
                                    <h3 className="text-2xl font-bold font-heading mb-6">Our Credentials</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center">
                                            <i className="fas fa-check-circle text-yellow-300 mr-3"></i>
                                            <span>Texas State Licensed BCBAs</span>
                                        </div>
                                        <div className="flex items-center">
                                            <i className="fas fa-check-circle text-yellow-300 mr-3"></i>
                                            <span>$2M Professional Liability Insurance</span>
                                        </div>
                                        <div className="flex items-center">
                                            <i className="fas fa-check-circle text-yellow-300 mr-3"></i>
                                            <span>32+ CEUs Annually</span>
                                        </div>
                                        <div className="flex items-center">
                                            <i className="fas fa-check-circle text-yellow-300 mr-3"></i>
                                            <span>ABAI, TXABA, APBA Members</span>
                                        </div>
                                        <div className="flex items-center">
                                            <i className="fas fa-check-circle text-yellow-300 mr-3"></i>
                                            <span>SOC 2 Certified Technology</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        };

        // Pricing Section Component
        const PricingSection = () => {
            const pricingPlans = [
                {
                    name: 'Individual Therapy',
                    price: '$75-125',
                    period: 'per hour',
                    description: 'Perfect for families seeking in-home ABA therapy',
                    features: [
                        'One-on-one ABA therapy sessions',
                        'Individualized treatment plans',
                        'Parent training included',
                        'Progress tracking and reporting',
                        'Flexible scheduling'
                    ],
                    popular: false
                },
                {
                    name: 'Professional Training',
                    price: '$150',
                    period: 'per hour',
                    description: 'Comprehensive training for educators and professionals',
                    features: [
                        'FBA methodology training',
                        'Data collection systems',
                        'BIPS development',
                        'Compliance documentation',
                        'CEU credits available'
                    ],
                    popular: true
                },
                {
                    name: 'Data Solutions',
                    price: '$200-500',
                    period: 'setup + monthly',
                    description: 'Complete data collection platform implementation',
                    features: [
                        'Custom platform setup',
                        'Mobile app access',
                        'Real-time dashboards',
                        'Automated reporting',
                        '24/7 technical support'
                    ],
                    popular: false
                },
                {
                    name: 'Enterprise Solutions',
                    price: 'Custom',
                    period: 'quote',
                    description: 'Tailored solutions for organizations and institutions',
                    features: [
                        'Custom development',
                        'Integration capabilities',
                        'Multi-user management',
                        'Advanced analytics',
                        'Dedicated support team'
                    ],
                    popular: false
                }
            ];

            return (
                <section id="pricing" className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-4">
                                Transparent Pricing
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Clear, upfront pricing with no hidden fees. Payment plans available for ongoing services.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {pricingPlans.map((plan, index) => (
                                <div key={index} className={`pricing-card relative bg-white p-8 rounded-2xl shadow-lg border-2 ${plan.popular ? 'border-blue-500' : 'border-gray-200'}`}>
                                    {plan.popular && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                            <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                                Most Popular
                                            </span>
                                        </div>
                                    )}
                                    <div className="text-center mb-6">
                                        <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">{plan.name}</h3>
                                        <div className="text-3xl font-bold text-gray-900 mb-1">
                                            {plan.price}
                                            <span className="text-lg font-normal text-gray-600">/{plan.period}</span>
                                        </div>
                                        <p className="text-gray-600">{plan.description}</p>
                                    </div>
                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <i className="fas fa-check text-green-500 mr-3 mt-1"></i>
                                                <span className="text-gray-600">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                                        Get Started
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">Payment Options</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="flex items-center justify-center">
                                        <i className="fas fa-credit-card text-blue-600 mr-3"></i>
                                        <span className="text-gray-700">Credit/Debit Cards</span>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <i className="fas fa-money-check text-blue-600 mr-3"></i>
                                        <span className="text-gray-700">Payment Plans Available</span>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <i className="fas fa-clock text-blue-600 mr-3"></i>
                                        <span className="text-gray-700">NET 15 Terms</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        };

        // Contact Section Component
        const ContactSection = () => {
            const [formData, setFormData] = useState({
                name: '',
                email: '',
                phone: '',
                service: '',
                message: ''
            });

            const handleChange = (e) => {
                setFormData({
                    ...formData,
                    [e.target.name]: e.target.value
                });
            };

            const handleSubmit = (e) => {
                e.preventDefault();
                console.log('Form submitted:', formData);
                // Handle form submission logic here
                alert('Thank you for your inquiry! We will contact you soon.');
            };

            return (
                <section id="contact" className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-4">
                                Get Started Today
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Ready to begin your journey? Contact us for a free consultation and discover how we can help.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div>
                                <div className="bg-white p-8 rounded-2xl shadow-lg">
                                    <h3 className="text-2xl font-bold font-heading text-gray-900 mb-6">Send us a message</h3>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Service of Interest</label>
                                            <select
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                required
                                            >
                                                <option value="">Select a service</option>
                                                <option value="aba-therapy">In-Home ABA Therapy</option>
                                                <option value="school-training">School Training Programs</option>
                                                <option value="data-solutions">Data Collection Solutions</option>
                                                <option value="parent-training">Parent Training</option>
                                                <option value="consultation">Consultation Services</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows="4"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="Tell us about your needs..."
                                            ></textarea>
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="bg-white p-8 rounded-2xl shadow-lg">
                                    <h3 className="text-2xl font-bold font-heading text-gray-900 mb-6">Contact Information</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center">
                                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                                <i className="fas fa-phone text-blue-600"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Phone</h4>
                                                <p className="text-gray-600">(855) 772-8847</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                                                <i className="fas fa-envelope text-green-600"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Email</h4>
                                                <p className="text-gray-600">info@planotutor.net</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                                                <i className="fas fa-map-marker-alt text-purple-600"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Service Area</h4>
                                                <p className="text-gray-600">Plano, Frisco, McKinney, Allen, Richardson</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                                                <i className="fas fa-clock text-yellow-600"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Hours</h4>
                                                <p className="text-gray-600">Mon-Fri: 8AM-6PM<br />Sat: 9AM-2PM</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
                                    <h3 className="text-2xl font-bold font-heading mb-4">Emergency Support</h3>
                                    <p className="mb-4">24/7 crisis consultation available for existing clients</p>
                                    <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                        Emergency Contact
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        };

        // Footer Component
        const Footer = () => {
            return (
                <footer className="bg-gray-900 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div>
                                <div className="flex items-center space-x-2 mb-6">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                        <i className="fas fa-brain text-white"></i>
                                    </div>
                                    <div>
                                        <h1 className="text-xl font-bold font-heading">The Plano Tutor</h1>
                                        <p className="text-sm text-gray-400">ABA Therapy & Data Solutions</p>
                                    </div>
                                </div>
                                <p className="text-gray-400 mb-4">
                                    Empowering children and families through expert ABA therapy and comprehensive behavior data solutions.
                                </p>
                                <div className="flex space-x-4">
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-6">Services</h3>
                                <ul className="space-y-3">
                                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">In-Home ABA Therapy</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">School Training</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Data Solutions</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Parent Training</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Consultation</a></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-6">Resources</h3>
                                <ul className="space-y-3">
                                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">HIPAA Compliance</a></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-6">Contact</h3>
                                <div className="space-y-3">
                                    <p className="text-gray-400 flex items-center">
                                        <i className="fas fa-phone mr-2"></i>
                                        (855) 772-8847
                                    </p>
                                    <p className="text-gray-400 flex items-center">
                                        <i className="fas fa-envelope mr-2"></i>
                                        info@planotutor.net
                                    </p>
                                    <p className="text-gray-400 flex items-center">
                                        <i className="fas fa-map-marker-alt mr-2"></i>
                                        Plano, TX & Surrounding Areas
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                            <p className="text-gray-400">
                                © 2024 The Plano Tutor. All rights reserved. | Licensed in Texas | HIPAA Compliant
                            </p>
                        </div>
                    </div>
                </footer>
            );
        };

        // Main App Component
        const App = () => {
            return (
                <div className="min-h-screen">
                    <Header />
                    <HeroSection />
                    <ServicesSection />
                    <AboutSection />
                    <PricingSection />
                    <ContactSection />
                    <Footer />
                </div>
            );
        };

        // Render the app
        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
</body>
</html>