import React from 'react';
import { ChevronDown, Check } from 'lucide-react';
import a1 from '../image/TeamWork.jpg';

const App = () => {
  const services = [
    'Custom Solutions',
    'Cutting-Edge Design',
    'SEO Optimization',
    'Responsive Design',
    'Innovative Technology',
    'Security and Reliability'
  ];

  const stats = [
    { value: '27K+', label: 'Project Done' },
    { value: '4K+', label: 'Happy Client' },
    { value: '4.7', label: 'Client Reviews' }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-white">
            <span className="text-emerald-400">•</span>
            <span className="text-emerald-400">•</span>
            webiso
          </span>
        </div>

        <div className="flex items-center space-x-8">
          <a href="#" className="text-white hover:text-emerald-400">Homepage</a>
          <a href="#" className="text-emerald-400">About us</a>
          <div className="relative group">
            <a href="#" className="text-white hover:text-emerald-400 flex items-center">
              Services
              <ChevronDown className="ml-1 h-4 w-4" />
            </a>
          </div>
          <a href="#" className="text-white hover:text-emerald-400">Project</a>
          <a href="#" className="text-white hover:text-emerald-400">Contact us</a>
          <div className="relative group">
            <a href="#" className="text-white hover:text-emerald-400 flex items-center">
              Pages
              <ChevronDown className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>

        <button className="px-6 py-2 bg-emerald-400 text-gray-900 rounded-full font-medium hover:bg-emerald-500 transition-colors">
          Get Started
        </button>
      </nav>

      {/* About Us Section - Moved Inside Return Block */}
      <div className="text-center mt-16">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text">
          About us
        </h1>
        <p className="text-gray-400 mt-4 text-lg">
          Your Partner in Innovative Web Design.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-2 gap-12">
          {/* Left Side - Image with Services Overlay */}
          <div className="relative">
            <img src={a1} alt="Team working" className="w-full rounded-lg" />
            <div className="absolute -bottom-8 -left-4 bg-black/80 rounded-lg p-6 w-[80%]">
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-emerald-400/10 rounded-full p-1">
                      <Check className="h-5 w-5 text-emerald-400" />
                    </div>
                    <span className="text-white text-sm font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="space-y-8">
            <h3 className="text-emerald-400 font-medium">WHO WE ARE</h3>
            <h2 className="text-5xl font-bold text-white leading-tight">
              Innovative Solutions for Your{' '}
              <span className="text-cyan-400">Online Success.</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Sem iaculis facilisis convallis ex aliquam massa a venenatis blandit
              pede rhoncus. Euismod consectetuer nostra etiam lectus potenti
              accumsan pellentesque venenatis.
            </p>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-4xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <button className="px-6 py-3 bg-emerald-400 text-gray-900 rounded-full font-medium hover:bg-emerald-500 transition-colors">
              Discover more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
