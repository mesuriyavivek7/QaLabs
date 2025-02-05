import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const ContactPage = () => {
    return (
        <>
            <div className="relative min-h-[70vh] bg-black">
                {/* Navigation Bar */}
                <nav className="absolute top-0 left-0 right-0 z-10 px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="flex items-center">
                        <span className="text-3xl font-bold text-white p-4">
                            <span className="text-emerald-400">web</span>iso
                        </span>
                    </a>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="/" className="text-white hover:text-emerald-400">
                            Homepage
                        </a>
                        <a href="/about" className="text-white hover:text-emerald-400">
                            About us
                        </a>
                        <div className="relative group">
                            <a href="/services" className="text-white hover:text-emerald-400 flex items-center">
                                Services
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 ml-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </a>
                        </div>
                        <a href="/project" className="text-white hover:text-emerald-400">
                            Project
                        </a>
                        <a href="/contact" className="text-emerald-400">
                            Contact us
                        </a>
                        <div className="relative group">
                            <a href="/pages" className="text-white hover:text-emerald-400 flex items-center">
                                Pages
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 ml-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Get Started Button */}
                    <button className="bg-emerald-400 hover:bg-emerald-500 text-gray-900 px-6 py-2 rounded-full font-medium transition-colors duration-200">
                        Get Started
                    </button>
                </nav>

                {/* Hero Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <a href="/contact" class="text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text font-semibold text-6xl">
                        Contact us
                    </a>
                    <br />
                    <p className="text-white text-3xl opacity-200">
                        Start the conversation to established good <br /> relationship and business.
                    </p>
                </div>

                {/* Dark Overlay for Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50"></div>
            </div>


            <div className="min-h-screen bg-black text-white p-8">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-lime-300 text-sm font-medium mb-2">GET IN TOUCH</h2>
                            <h1 className="text-transparen bg-clip-text text-white font-semibold text-4xl">
                                Seamless Communication,
                                <br />
                                <span className="text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text font-semibold text-4xl">
                                    Global Impact <span className="text-white">.</span>
                                </span>
                            </h1>
                            <br />
                            <p className="text-gray-400">
                                Auctor dictumst inceptos metus est ad himenaeos habitasse <br /> litora natoque libero nunc
                            </p>
                            <br />
                            <div className="border-t border-gray-500 my-4"></div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="bg-lime-300 p-4 rounded-full">
                                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-xl">Head Office</h3>
                                    <p className="text-gray-400">Jalan Cempaka Wangi No 22</p>
                                    <p className="text-gray-400">Jakarta - Indonesia</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-lime-300 p-4 rounded-full">
                                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-xl">Email Support</h3>
                                    <p className="text-gray-400">support@yourdomain.tld</p>
                                    <p className="text-gray-400">hello@yourdomain.tld</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-lime-300 p-4 rounded-full">
                                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-xl">Let's Talk</h3>
                                    <p className="text-gray-400">Phone : +6221.2002.2012</p>
                                    <p className="text-gray-400">Fax : +6221.2002.2013</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="bg-black border border-gray-700 rounded-2xl p-8">
                        <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
                        <p className="text-gray-400 mb-8">
                            Auctor dictumst inceptos metus est ad himenaeos habitasse litora natoque libero nunc
                        </p>

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-lime-400 focus:outline-none"
                                        placeholder="Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Company</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-lime-400 focus:outline-none"
                                        placeholder="Company"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-lime-400 focus:outline-none"
                                        placeholder="Phone"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-lime-400 focus:outline-none"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Subject</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-lime-400 focus:outline-none"
                                    placeholder="Subject"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Message</label>
                                <textarea
                                    className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-lime-400 focus:outline-none h-32"
                                    placeholder="Message"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-lime-300 text-gray-900 px-6 py-3 font-medium hover:bg-lime-500 transition-colors duration-300 flex items-center gap-2 cursor-pointer rounded-lg"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <footer className="bg-gray-900 text-gray-300 py-10">
                <div className="container mx-auto px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Logo & Address */}
                        <div>
                            <span className="text-3xl font-bold text-white p-4">
                                <span className="text-emerald-400">web</span>iso
                            </span>
                            <p className="text-gray-400">
                                Jalan Cempaka Wangi No 22 <br />
                                Jakarta - Indonesia
                            </p>
                            {/* Social Icons */}
                            <div className="flex space-x-4 mt-4">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>

                        {/* Services */}
                        <div>
                            <h3 className="text-white font-semibold mb-4">Services</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-white">Web Design</a></li>
                                <li><a href="#" className="hover:text-white">Web Development</a></li>
                                <li><a href="#" className="hover:text-white">SEO & Digital Marketing</a></li>
                                <li><a href="#" className="hover:text-white">Branding & Visual Identity</a></li>
                                <li><a href="#" className="hover:text-white">Consultation & Strategy</a></li>
                                <li><a href="#" className="hover:text-white">Maintenance & Support</a></li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h3 className="text-white font-semibold mb-4">Support</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-white">Help Center</a></li>
                                <li><a href="#" className="hover:text-white">Ticket Support</a></li>
                                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                                <li><a href="#" className="hover:text-white">Customer Support</a></li>
                                <li><a href="#" className="hover:text-white">Forum Community</a></li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className="text-white font-semibold mb-4">Company</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-white">About Us</a></li>
                                <li><a href="#" className="hover:text-white">Leadership</a></li>
                                <li><a href="#" className="hover:text-white">Careers</a></li>
                                <li><a href="#" className="hover:text-white">Article & News</a></li>
                                <li><a href="#" className="hover:text-white">Legal Notices</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                        <p>Copyright © 2024 webiso, All rights reserved. Powered by MoxCreative.</p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="hover:text-white">Term of Use</a>
                            <a href="#" className="hover:text-white">Privacy Policy</a>
                            <a href="#" className="hover:text-white">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </footer>



        </>
    );
};

export default ContactPage;
