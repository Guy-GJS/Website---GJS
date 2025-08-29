export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Fair Property Group</h3>
            <p className="text-gray-400 leading-relaxed max-w-md">
              We buy houses fast for cash. Fair offers, quick closings, 
              and hassle-free transactions.
            </p>
            <div className="flex items-center gap-3 text-gray-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a 
                href="mailto:contact@fairproperttgroup.com" 
                className="hover:text-white transition-colors duration-200 break-all"
              >
                contact@fairproperttgroup.com
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors duration-200">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors duration-200">
                  FAQ
                </a>
              </li>

            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 text-center sm:text-left">
              © 2024 Fair Property Group. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a href="/privacy" className="hover:text-gray-300 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-gray-300 transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};