import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
// import TrustBoxReview from './TrustBoxReview';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Sof<span className="text-tech-orange">ixs</span></h3>
            <p className="text-gray-400 mb-4">
              Empowering businesses with cutting-edge digital solutions across the globe.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/sofixs.company" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/Sofixsolution" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/sofixs.company/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/@So_fixs" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/trends" className="text-gray-400 hover:text-white transition-colors">Tech Insights</Link></li>
              <li><Link to="/analytics" className="text-gray-400 hover:text-white transition-colors">Analytics</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/web-development" className="text-gray-400 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/services/app-development" className="text-gray-400 hover:text-white transition-colors">App Development</Link></li>
              <li><Link to="/services/game-development" className="text-gray-400 hover:text-white transition-colors">Game Development</Link></li>
              <li><Link to="/services/ui-ux-design" className="text-gray-400 hover:text-white transition-colors">UI/UX Design</Link></li>
              <li><Link to="/services/software-solutions" className="text-gray-400 hover:text-white transition-colors">Software Solutions</Link></li>
              <li><Link to="/services/iot-solutions" className="text-gray-400 hover:text-white transition-colors">IoT Solutions</Link></li>
              <li><Link to="/services/digital-marketing" className="text-gray-400 hover:text-white transition-colors">Digital Marketing</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
                              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                               <ul className="space-y-3">
                                <li className="flex items-start">
                                <MapPin className="h-5 w-5 text-tech-orange mr-2 mt-0.5" />
                                  <span className="text-gray-400">
                                                           Janakpur, Nepal.<br/>
                             <span className="text-gray-500">Sofixs Pvt. Ltd.</span><br/>
                                     </span>
                               </li>
                             <li className="flex items-center">
                             <Phone className="h-5 w-5 text-tech-orange mr-2" />
                          <a href="tel:+9779829911255" className="text-gray-400 hover:text-white transition-colors">
                         +977 9829911255
                       </a>
                    </li>

                      <li className="flex items-center">
                       <Phone className="h-5 w-5 text-tech-orange mr-2" />
                        <a href="tel:+919546128425" className="text-gray-400 hover:text-white transition-colors">
                        +91 9546128425
                             </a>
                       </li>

              <li className="flex items-center">
                <Mail className="h-5 w-5 text-tech-orange mr-2" />
                <a href="mailto:info@sofixs.com" className="text-gray-400 hover:text-white transition-colors">softwarefix.solution@gmail.com
                </a>
              </li>
            </ul>
     <div className="mt-12 text-center">
  <a
    href="https://g.page/r/CVvlUtdxXXjwEAI/review"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold text-lg py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out"
    aria-label="Leave a review for Sofixs on Google"
  >
    ⭐ Leave a Google Review
  </a>
</div>

             {/* <TrustBoxReview /> */}



          </div>
        </div>

        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Sofixs. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center space-x-4 space-y-0 sm:space-x-6">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookie-policy" className="text-gray-500 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
            <Link to="/faq" className="text-gray-500 hover:text-white text-sm transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
