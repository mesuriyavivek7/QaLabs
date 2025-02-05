import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const buttonHover = {
        hover: { scale: 1.05 }
    };

    const mobileMenuVariants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: {
                duration: 0.2
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <div className="relative min-h-screen">
            {/* Dark overlay for background image */}
            <div
                className="absolute inset-0 bg-black/60 z-10"
                style={{
                    backgroundImage: 'url(/herobg.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'multiply',
                    filter: 'grayscale(100%)',
                }}
            />

            {/* Navigation */}
            <nav className="relative z-20 px-4 sm:px-6 py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <img src="/webiso-logo.png" alt="Webiso" className="h-6 sm:h-8" />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <a href="#" className="text-white hover:text-green-400 transition-colors">Homepage</a>
                        <a href="#" className="text-white hover:text-green-400 transition-colors">About us</a>
                        <a href="#" className="text-white hover:text-green-400 transition-colors">Services</a>
                        <a href="#" className="text-white hover:text-green-400 transition-colors">Project</a>
                        <a href="#" className="text-white hover:text-green-400 transition-colors">Contact us</a>
                        <a href="#" className="text-white hover:text-green-400 transition-colors">Pages</a>
                        <motion.button
                            whileHover="hover"
                            variants={buttonHover}
                            className="bg-green-400 text-black px-6 py-2 rounded-full hover:bg-green-300 transition-colors"
                        >
                            Get Started
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={mobileMenuVariants}
                            className="fixed inset-y-0 right-0 w-full sm:w-64 bg-gray-900 p-6 lg:hidden"
                        >
                            <div className="flex flex-col space-y-4">
                                <a href="#" className="text-white hover:text-green-400 transition-colors py-2">Homepage</a>
                                <a href="#" className="text-white hover:text-green-400 transition-colors py-2">About us</a>
                                <a href="#" className="text-white hover:text-green-400 transition-colors py-2">Services</a>
                                <a href="#" className="text-white hover:text-green-400 transition-colors py-2">Project</a>
                                <a href="#" className="text-white hover:text-green-400 transition-colors py-2">Contact us</a>
                                <a href="#" className="text-white hover:text-green-400 transition-colors py-2">Pages</a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Hero Content */}
            <div className="relative z-20 container mx-auto px-4 sm:px-6 pt-16 sm:pt-24 md:pt-32 pb-16 sm:pb-24 md:pb-32">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
                        initial="initial"
                        animate="animate"
                        variants={fadeIn}
                    >
                        Transform Your
                    </motion.h1>

                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
                        initial="initial"
                        animate="animate"
                        variants={fadeIn}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="text-blue-300">Online</span>{' '}
                        <span className="text-green-400">Presence</span>
                    </motion.h1>

                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8"
                        initial="initial"
                        animate="animate"
                        variants={fadeIn}
                        transition={{ delay: 0.4 }}
                    >
                        Today!
                    </motion.h1>

                    <motion.p
                        className="text-gray-300 text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto px-4"
                        initial="initial"
                        animate="animate"
                        variants={fadeIn}
                        transition={{ delay: 0.6 }}
                    >
                        Est in adipiscing odio lectus parturient ex euismod arcu porttitor facilisis.
                        <br className="hidden sm:block" />
                        Nisi curae blandit facilisis nisi est adipiscing.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 px-4"
                        initial="initial"
                        animate="animate"
                        variants={fadeIn}
                        transition={{ delay: 0.8 }}
                    >
                        <motion.button
                            whileHover="hover"
                            variants={buttonHover}
                            className="bg-green-400 text-black px-8 py-3 rounded-full hover:bg-green-300 transition-colors w-full sm:w-auto"
                        >
                            Get Started
                        </motion.button>

                        <motion.button
                            whileHover="hover"
                            variants={buttonHover}
                            className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors w-full sm:w-auto"
                        >
                            Explore Portfolio
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Home;