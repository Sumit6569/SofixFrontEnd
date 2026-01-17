
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatSupport from "@/components/support/ChatSupport";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Shield, UserCheck, LineChart } from "lucide-react";

const HospitalManagement = () => {
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
                <BreadcrumbPage>Hospital Management System</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <Link to="/portfolio" className="inline-flex items-center text-tech-blue hover:text-tech-darkblue mt-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Link>
          
          <div className="mt-6">
            <h1 className="text-4xl font-bold mb-4">Hospital Management System</h1>
            <div className="text-sm text-gray-500 mb-8 flex flex-wrap gap-4">
              <span>Category: Software Solution</span>
              <span>•</span>
              <span>Client: MediCare Hospital Network</span>
              <span>•</span>
              <span>Completion: November 2023</span>
            </div>
            
            <div className="bg-gray-100 rounded-xl overflow-hidden mb-10">
              <img 
                src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200" 
                alt="Hospital Management System" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                <p className="text-gray-700 mb-6">
                  MediCare Hospital Network, a chain of 12 hospitals across the country, needed an integrated system to streamline their operations, improve patient care, and ensure data security across all their facilities. Their existing systems were disparate and lacked interoperability.
                </p>
                
                <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
                <p className="text-gray-700 mb-6">
                  We developed a comprehensive hospital management system that integrates electronic health records, appointment scheduling, pharmacy management, billing, and administrative functions. The system was built using React for the frontend, with Express and PostgreSQL for the backend. We implemented strict security protocols to ensure HIPAA compliance and data protection.
                </p>
                
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-2">
                  <li>Electronic Health Records (EHR) with secure access controls</li>
                  <li>Patient portal for appointment scheduling and medical history access</li>
                  <li>Doctor dashboard with patient information and scheduling</li>
                  <li>Integrated pharmacy management system</li>
                  <li>Automated billing and insurance processing</li>
                  <li>Inventory and supply chain management</li>
                  <li>Real-time analytics and reporting</li>
                  <li>Multi-facility data synchronization</li>
                  <li>Mobile apps for doctors and patients</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="bg-tech-blue/10 text-tech-blue px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-tech-blue/10 text-tech-blue px-3 py-1 rounded-full text-sm">Express</span>
                  <span className="bg-tech-blue/10 text-tech-blue px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                  <span className="bg-tech-blue/10 text-tech-blue px-3 py-1 rounded-full text-sm">Socket.io</span>
                  <span className="bg-tech-blue/10 text-tech-blue px-3 py-1 rounded-full text-sm">JWT</span>
                  <span className="bg-tech-blue/10 text-tech-blue px-3 py-1 rounded-full text-sm">React Native</span>
                  <span className="bg-tech-blue/10 text-tech-blue px-3 py-1 rounded-full text-sm">AWS</span>
                  <span className="bg-tech-blue/10 text-tech-blue px-3 py-1 rounded-full text-sm">Docker</span>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Project Outcomes</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-tech-blue/10 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-tech-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium">35% Reduction</h4>
                      <p className="text-sm text-gray-600">in administrative processing time</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-tech-blue/10 p-3 rounded-full mr-4">
                      <UserCheck className="h-6 w-6 text-tech-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium">40% Improvement</h4>
                      <p className="text-sm text-gray-600">in patient satisfaction ratings</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-tech-blue/10 p-3 rounded-full mr-4">
                      <Shield className="h-6 w-6 text-tech-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium">Zero Data Breaches</h4>
                      <p className="text-sm text-gray-600">since system implementation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-tech-blue/10 p-3 rounded-full mr-4">
                      <LineChart className="h-6 w-6 text-tech-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium">22% Cost Reduction</h4>
                      <p className="text-sm text-gray-600">in overall operational expenses</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-medium mb-2">Client Testimonial</h4>
                  <p className="text-gray-700 italic mb-4">
                    "The hospital management system developed by Tech Instance has revolutionized how we operate. Our staff can now focus more on patient care rather than paperwork, and the integrated data access has been invaluable for our multi-facility network."
                  </p>
                  <p className="text-sm font-medium">- Dr. Sarah Johnson, Medical Director at MediCare</p>
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
              <Link to="/portfolio/ecommerce-platform" className="text-tech-blue hover:text-tech-darkblue">
                <span className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" /> 
                  Previous Project
                </span>
              </Link>
              <Link to="/portfolio/educational-app" className="text-tech-blue hover:text-tech-darkblue">
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

export default HospitalManagement;
