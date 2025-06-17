<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>The Plano Tutor | Compassionate ABA Therapy in Plano, TX</title>
    <meta name="description" content="The Plano Tutor offers expert, compassionate ABA therapy for children with autism in Plano, TX. Discover our in-home, center-based, and early intervention programs.">

    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@600;700&display=swap" rel="stylesheet">

    <!-- Custom Styles -->
    <style>
        /* Define custom fonts and colors using Tailwind's theme extension approach in a real project */
        body {
            font-family: 'Lato', sans-serif;
        }
        h1, h2, h3, h4, h5, h6 {
            font-family: 'Montserrat', sans-serif;
        }
        .hero-section {
            background: linear-gradient(rgba(0, 74, 124, 0.75), rgba(0, 74, 124, 0.75)), url('https://placehold.co/1920x1080/004a7c/ffffff?text=Play+Area') no-repeat center center/cover;
        }
        /* Style for the mobile menu toggle 'X' state */
        .mobile-nav-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        .mobile-nav-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        .mobile-nav-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    </style>
</head>
<body class="bg-white text-gray-700">

    <!-- Header -->
    <header id="header" class="bg-white py-4 shadow-md sticky top-0 z-50">
        <div class="container mx-auto px-6 flex justify-between items-center">
            <!-- Logo -->
            <a href="#" class="flex items-center space-x-2">
                <svg class="h-8 w-8 text-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
                <span class="text-xl font-bold text-gray-800">The Plano Tutor</span>
            </a>

            <!-- Desktop Navigation -->
            <nav class="hidden md:flex items-center space-x-8">
                <a href="#about" class="text-gray-600 hover:text-blue-700 font-semibold">About Us</a>
                <a href="#services" class="text-gray-600 hover:text-blue-700 font-semibold">Services</a>
                <a href="#testimonials" class="text-gray-600 hover:text-blue-700 font-semibold">Testimonials</a>
                <a href="#contact" class="text-gray-600 hover:text-blue-700 font-semibold">Contact</a>
                <a href="#" class="text-sm text-gray-600 hover:text-blue-700 font-semibold">Client Portal</a>
            </nav>

            <!-- Desktop CTA -->
            <a href="#contact" class="hidden md:inline-block bg-blue-700 text-white font-bold py-2 px-5 rounded-full hover:bg-blue-800 transition duration-300">Start Intake</a>
            
            <!-- Mobile Menu Toggle -->
            <button id="mobile-nav-toggle" class="md:hidden mobile-nav-toggle">
                <span class="sr-only">Open main menu</span>
                <span class="block w-6 h-0.5 bg-gray-700 transition-transform duration-300"></span>
                <span class="block w-6 h-0.5 bg-gray-700 mt-1.5 transition-opacity duration-300"></span>
                <span class="block w-6 h-0.5 bg-gray-700 mt-1.5 transition-transform duration-300"></span>
            </button>
        </div>

        <!-- Mobile Navigation -->
        <div id="mobile-nav" class="hidden md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
            <nav class="flex flex-col p-4 space-y-2">
                <a href="#about" class="text-gray-600 hover:text-blue-700 p-2 rounded">About Us</a>
                <a href="#services" class="text-gray-600 hover:text-blue-700 p-2 rounded">Services</a>
                <a href="#testimonials" class="text-gray-600 hover:text-blue-700 p-2 rounded">Testimonials</a>
                <a href="#contact" class="text-gray-600 hover:text-blue-700 p-2 rounded">Contact</a>
                <hr class="my-2">
                <a href="#" class="text-gray-600 hover:text-blue-700 p-2 rounded">Client Portal</a>
                <a href="#contact" class="bg-blue-700 text-white text-center font-bold py-3 px-5 rounded-full hover:bg-blue-800 transition duration-300 mt-2">Start Intake</a>
            </nav>
        </div>
    </header>

    <main>
        <!-- Hero Section -->
        <section class="hero-section text-white text-center py-24 sm:py-32 lg:py-40">
            <div class="container mx-auto px-6">
                <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">Empowering Children, Connecting Families.</h1>
                <p class="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto opacity-90 mb-8">Compassionate ABA therapy in Plano, TX, dedicated to helping your child build independence and thrive.</p>
                <a href="#contact" class="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-105">Start the Intake Process</a>
            </div>
        </section>

        <!-- Intro Section -->
        <section id="about" class="py-20 bg-white">
            <div class="container mx-auto px-6 text-center">
                <h2 class="text-3xl font-bold text-gray-800 mb-4">Guidance on the Path to Potential</h2>
                <p class="max-w-4xl mx-auto text-lg text-gray-600">
                    At The Plano Tutor, we understand that every child's journey with Autism Spectrum Disorder (ASD) is unique. We provide expert, evidence-based Applied Behavior Analysis (ABA) therapy that illuminates the path forward. Our play-based, compassionate approach focuses on celebrating your child's strengths, nurturing new skills, and empowering your entire family with the tools for lasting success.
                </p>
            </div>
        </section>

        <!-- Services Section -->
        <section id="services" class="py-20 bg-gray-50">
            <div class="container mx-auto px-6">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-gray-800 mb-4">Our Behavior Analytic Services</h2>
                    <p class="max-w-3xl mx-auto text-lg text-gray-600">We offer a range of data-driven solutions tailored to diverse needs across home, school, and organizational settings.</p>
                </div>

                <!-- Services for Children & Families -->
                <div class="mb-16">
                    <h3 class="text-2xl font-bold text-gray-800 text-center mb-8">For Children & Families</h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <!-- Service Card 1 -->
                        <div class="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div class="inline-block p-4 bg-blue-100 rounded-full mb-4">
                                <svg class="h-10 w-10 text-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-2">In-Home ABA Therapy</h3>
                            <p class="text-gray-600 mb-4">We provide personalized ABA programs and robust data collection solutions right in your home to foster daily living skills.</p>
                            <a href="#" class="font-semibold text-blue-700 hover:text-blue-800">Learn More &rarr;</a>
                        </div>
                        <!-- Service Card 2 -->
                        <div class="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div class="inline-block p-4 bg-blue-100 rounded-full mb-4">
                                 <svg class="h-10 w-10 text-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-2">School Consultation</h3>
                            <p class="text-gray-600 mb-4">We partner with schools for training on FBAs, data collection, and creating effective BIPs to support student success.</p>
                            <a href="#" class="font-semibold text-blue-700 hover:text-blue-800">Learn More &rarr;</a>
                        </div>
                        <!-- Service Card 3 -->
                        <div class="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div class="inline-block p-4 bg-blue-100 rounded-full mb-4">
                                <svg class="h-10 w-10 text-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /> </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-2">Clinic-Based Services</h3>
                            <p class="text-gray-600 mb-4">Our clinic offers a controlled environment for intensive therapy and precise behavior data collection for focused skill acquisition.</p>
                            <a href="#" class="font-semibold text-blue-700 hover:text-blue-800">Learn More &rarr;</a>
                        </div>
                    </div>
                </div>

                <!-- Services for Organizations -->
                <div>
                    <h3 class="text-2xl font-bold text-gray-800 text-center mb-8">For Organizations & Professionals</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <!-- Service Card 4 -->
                        <div class="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div class="inline-block p-4 bg-blue-100 rounded-full mb-4">
                                <svg class="h-10 w-10 text-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /> </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-2">Sports & Fitness Analysis</h3>
                            <p class="text-gray-600 mb-4">Data collection and intervention solutions for athletes and fitness clients to enhance performance and motivation.</p>
                            <a href="#" class="font-semibold text-blue-700 hover:text-blue-800">Learn More &rarr;</a>
                        </div>
                        <!-- Service Card 5 -->
                        <div class="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div class="inline-block p-4 bg-blue-100 rounded-full mb-4">
                                <svg class="h-10 w-10 text-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /> </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-2">Organizational Behavior Mgt.</h3>
                            <p class="text-gray-600 mb-4">Applying behavioral principles to business to improve employee performance, safety, and productivity via data-driven solutions.</p>
                            <a href="#" class="font-semibold text-blue-700 hover:text-blue-800">Learn More &rarr;</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section id="testimonials" class="py-20 bg-white">
            <div class="container mx-auto px-6 text-center">
                <h2 class="text-3xl font-bold text-gray-800 mb-4">What Families Are Saying</h2>
                 <div class="max-w-3xl mx-auto">
                    <div class="p-8 bg-gray-50 rounded-lg shadow-sm">
                        <p class="text-xl italic text-gray-700 mb-4">"The Plano Tutor has been a life-changing partner for our family. The compassionate care and individualized attention have helped our son make incredible progress. We finally feel hopeful."</p>
                        <p class="font-bold text-lg text-blue-700">&mdash; Sarah J., Plano, TX</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Final CTA Section -->
        <section id="contact" class="py-20 bg-blue-800 text-white">
            <div class="container mx-auto px-6 text-center">
                <h2 class="text-3xl font-bold mb-4">Ready to Take the Next Step?</h2>
                <p class="max-w-2xl mx-auto text-lg opacity-90 mb-8">Our team is here to guide you through the process. Contact us today for a free, no-obligation consultation to discuss your child's needs.</p>
                <a href="#" class="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-105">Request an Intake Consultation</a>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-gray-300">
        <div class="container mx-auto px-6 py-12">
            <div class="grid md:grid-cols-4 gap-8 mb-8">
                <!-- Company -->
                <div class="footer-col">
                    <h4 class="text-white font-bold mb-4">Company</h4>
                    <ul>
                        <li class="mb-2"><a href="#about" class="hover:text-yellow-400">About Us</a></li>
                        <li class="mb-2"><a href="#" class="hover:text-yellow-400">Our Approach</a></li>
                        <li class="mb-2"><a href="#testimonials" class="hover:text-yellow-400">Success Stories</a></li>
                        <li class="mb-2"><a href="#" class="hover:text-yellow-400">Careers</a></li>
                    </ul>
                </div>
                <!-- Services -->
                <div class="footer-col">
                    <h4 class="text-white font-bold mb-4">Services</h4>
                    <ul>
                        <li class="mb-2"><a href="#services" class="hover:text-yellow-400">In-Home Therapy</a></li>
                        <li class="mb-2"><a href="#services" class="hover:text-yellow-400">School Consultation</a></li>
                        <li class="mb-2"><a href="#services" class="hover:text-yellow-400">Clinic-Based Services</a></li>
                        <li class="mb-2"><a href="#services" class="hover:text-yellow-400">Sports & Fitness</a></li>
                        <li class="mb-2"><a href="#services" class="hover:text-yellow-400">OBM</a></li>
                    </ul>
                </div>
                <!-- Resources -->
                <div class="footer-col">
                    <h4 class="text-white font-bold mb-4">Resources</h4>
                    <ul>
                        <li class="mb-2"><a href="#" class="hover:text-yellow-400">Blog</a></li>
                        <li class="mb-2"><a href="#" class="hover:text-yellow-400">FAQs</a></li>
                        <li class="mb-2"><a href="#" class="hover:text-yellow-400">Insurance & Pricing</a></li>
                    </ul>
                </div>
                <!-- Contact -->
                <div class="footer-col">
                    <h4 class="text-white font-bold mb-4">Contact</h4>
                    <address class="not-italic">
                        <p>123 Progress Way<br>Plano, TX 75023</p>
                        <a href="tel:8557728847" class="block mt-2 hover:text-yellow-400">(855) 772-8847</a>
                        <a href="mailto:info@planotutor.net" class="block mt-1 hover:text-yellow-400">info@planotutor.net</a>
                    </address>
                </div>
            </div>
            <div class="border-t border-gray-700 pt-6 text-center text-sm">
                <p>&copy; 2025 The Plano Tutor. All Rights Reserved. | <a href="#" class="hover:text-yellow-400">Privacy Policy</a> | <a href="#" class="hover:text-yellow-400">Terms of Service</a></p>
            </div>
        </div>
    </footer>

    <!-- JavaScript for Mobile Menu -->
    <script>
        const mobileNavToggle = document.getElementById('mobile-nav-toggle');
        const mobileNav = document.getElementById('mobile-nav');

        mobileNavToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('hidden');
            mobileNavToggle.classList.toggle('active');
        });

        // Close mobile menu when a link is clicked
        const mobileNavLinks = mobileNav.querySelectorAll('a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.add('hidden');
                mobileNavToggle.classList.remove('active');
            });
        });
    </script>
</body>
</html>
