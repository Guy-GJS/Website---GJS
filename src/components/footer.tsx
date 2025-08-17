export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12 md:py-16">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Mobile-First Grid - Stack on mobile, grid on tablet+ */}
          <div className="space-y-8 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 lg:gap-12 sm:space-y-0">
            {/* Company Info */}
            <div className="text-center sm:text-left lg:col-span-1">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Fair Property Group</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4">
                We buy houses fast for cash. Fair offers, quick closings, 
                and hassle-free transactions since 2020.
              </p>
              <div className="space-y-2 text-sm sm:text-base text-gray-400">
                <p className="flex items-center justify-center sm:justify-start gap-2">
                  <span>✉️</span>
                  <a href="mailto:offers@fairpropertygroup.com" className="hover:text-white transition-colors break-all">
                    offers@fairpropertygroup.com
                  </a>
                </p>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                <li>
                  <a href="#how-it-works" className="hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Service Areas */}
            <div className="text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Service Areas</h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                <li>Metro Atlanta</li>
                <li>Birmingham</li>
                <li>Nashville</li>
                <li>Charlotte</li>
                <li>& Surrounding Areas</li>
              </ul>
            </div>
          </div>
          
          {/* Divider */}
          <hr className="border-gray-700 my-6 sm:my-8" />
          
          {/* Bottom Bar - Mobile First */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
              © 2024 Fair Property Group. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
              <a href="/privacy" className="hover:text-gray-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};