
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatSupport from "@/components/support/ChatSupport";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Globe, Users, ShieldCheck, BarChart4 } from "lucide-react";

const EcommercePlatform = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <div className="container-section py-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/portfolio">Portfolio</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>E-commerce Platform</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <Link to="/portfolio" className="inline-flex items-center text-tech-blue hover:text-tech-darkblue mt-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Link>
          
          <div className="mt-6">
            <h1 className="text-4xl font-bold mb-4">E-commerce Platform</h1>
            <div className="text-sm text-gray-500 mb-8 flex flex-wrap gap-4">
              <span>Category: Web Development</span>
              <span>•</span>
              <span>Client: Global Retail Inc.</span>
              <span>•</span>
              <span>Completion: June 2023</span>
            </div>
            
            <div className="bg-gray-100 rounded-xl overflow-hidden mb-10">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200" 
                alt="E-commerce Platform" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                <p className="text-gray-700 mb-6">
                  Global Retail Inc. approached us with a challenge to transform their traditional retail business into a competitive online marketplace. They needed a scalable e-commerce solution that could handle thousands of products, process secure payments, and provide an intuitive shopping experience.
                </p>
                
                <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
                <p className="text-gray-700 mb-6">
                  We began with an in-depth analysis of their business requirements and the competitive landscape. Our team designed a custom e-commerce platform built on React for the frontend and Node.js for the backend, with MongoDB as the database solution. We integrated Stripe for secure payment processing and implemented advanced inventory management systems.
                </p>
                
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-2">
                  <li>Responsive design optimized for all devices</li>
                  <li>Advanced search and filtering capabilities</li>
                  <li>Secure payment processing with multiple options</li>
                  <li>Real-time inventory management</li>
                  <li>Customer account portal with order history</li>
                  <li>Admin dashboard with sales analytics</li>
                  <li>Product recommendation engine</li>
                  <li>Integration with social media platforms</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="bg-tech-blue/10 text-tech-blue px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-tech-blue/10 text-tech-blue px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-tech-blue/10 text-tech-blue px-3 py-1 rounded-full text-sm">Express</span>
                  <span className="bg-tech-blue/10 text-tech-blue px-3 py-1 rounded-full text-sm">MongoDB</span>
                  <span className="bg-tech-blue/10 text-tech-blue px-3 py-1 rounded-full text-sm">Stripe API</span>
                  <span className="bg-tech-blue/10 text-tech-blue px-3 py-1 rounded-full text-sm">AWS S3</span>
                  <span className="bg-tech-blue/10 text-tech-blue px-3 py-1 rounded-full text-sm">Redis</span>
                  <span className="bg-tech-blue/10 text-tech-blue px-3 py-1 rounded-full text-sm">Docker</span>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Project Outcomes</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-tech-blue/10 p-3 rounded-full mr-4">
                      <BarChart4 className="h-6 w-6 text-tech-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium">200% Increase</h4>
                      <p className="text-sm text-gray-600">in online sales within first 6 months</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-tech-blue/10 p-3 rounded-full mr-4">
                      <Users className="h-6 w-6 text-tech-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium">15,000+ Users</h4>
                      <p className="text-sm text-gray-600">active monthly customer accounts</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-tech-blue/10 p-3 rounded-full mr-4">
                      <Globe className="h-6 w-6 text-tech-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium">Global Reach</h4>
                      <p className="text-sm text-gray-600">expanded to 12 countries</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-tech-blue/10 p-3 rounded-full mr-4">
                      <ShieldCheck className="h-6 w-6 text-tech-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium">99.9% Uptime</h4>
                      <p className="text-sm text-gray-600">ensuring reliable shopping experience</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-medium mb-2">Client Testimonial</h4>
                  <p className="text-gray-700 italic mb-4">
                    "Tech Instance transformed our business with this incredible e-commerce platform. The attention to detail and focus on user experience has been key to our online success."
                  </p>
                  <p className="text-sm font-medium">- Michael Roberts, CEO at Global Retail Inc.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                Let's discuss how we can help you achieve your business goals with a custom digital solution.
              </p>
              <Link to="/contact">
                <Button className="bg-tech-orange text-white hover:bg-opacity-90">
                  Get in Touch
                </Button>
              </Link>
            </div>
            
            <div className="flex justify-between items-center border-t border-gray-200 pt-8">
              <Link to="/portfolio/smart-home-iot" className="text-tech-blue hover:text-tech-darkblue">
                <span className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" /> 
                  Previous Project
                </span>
              </Link>
              <Link to="/portfolio/hospital-management" className="text-tech-blue hover:text-tech-darkblue">
                <span className="flex items-center">
                  Next Project
                  <ArrowLeft className="ml-2 h-4 w-4 transform rotate-180" /> 
                </span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <ChatSupport />
    </div>
  );
};

export default EcommercePlatform;
