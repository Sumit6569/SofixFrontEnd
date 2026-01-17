
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatSupport from "@/components/support/ChatSupport";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Download, Award, Users } from "lucide-react";

const EducationalApp = () => {
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
                <BreadcrumbPage>Educational Mobile App</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <Link to="/portfolio" className="inline-flex items-center text-tech-blue hover:text-tech-darkblue mt-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Link>
          
          <div className="mt-6">
            <h1 className="text-4xl font-bold mb-4">Educational Mobile App</h1>
            <div className="text-sm text-gray-500 mb-8 flex flex-wrap gap-4">
              <span>Category: App Development</span>
              <span>•</span>
              <span>Client: LearnSmart Education</span>
              <span>•</span>
              <span>Completion: April 2023</span>
            </div>
            
            <div className="bg-gray-100 rounded-xl overflow-hidden mb-10">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1200" 
                alt="Educational Mobile App" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                <p className="text-gray-700 mb-6">
                  LearnSmart Education, a leading provider of educational content, approached us to develop a comprehensive mobile learning app that would make education more accessible, engaging, and personalized for students of all ages. They needed a solution that would work across multiple platforms and support various learning styles.
                </p>
                
                <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
                <p className="text-gray-700 mb-6">
                  We created a cross-platform mobile application using React Native with Firebase as the backend. We implemented personalized learning paths, progress tracking, interactive quizzes, and gamification elements. The app leverages AI for content recommendations and adaptive learning based on student performance. A key feature was the offline access to educational content, making learning possible even without an internet connection.
                </p>
                
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-2">
                  <li>Personalized learning paths based on student assessment</li>
                  <li>Interactive lessons with multimedia content</li>
                  <li>Real-time progress tracking and performance analytics</li>
                  <li>Gamification elements with badges and achievements</li>
                  <li>Parent/teacher dashboard for monitoring student progress</li>
                  <li>AI-powered content recommendations</li>
                  <li>Offline access to downloaded lessons</li>
                  <li>Social learning features with discussion forums</li>
                  <li>Integration with third-party educational resources</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="bg-tech-blue/10 text-tech-blue px-3 py-1 rounded-full text-sm">React Native</span>
                  <span className="bg-tech-blue/10 text-tech-blue px-3 py-1 rounded-full text-sm">Firebase</span>
                  <span className="bg-tech-blue/10 text-tech-blue px-3 py-1 rounded-full text-sm">Redux</span>
                  <span className="bg-tech-blue/10 text-tech-blue px-3 py-1 rounded-full text-sm">TensorFlow</span>
                  <span className="bg-tech-blue/10 text-tech-blue px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-tech-blue/10 text-tech-blue px-3 py-1 rounded-full text-sm">Express</span>
                  <span className="bg-tech-blue/10 text-tech-blue px-3 py-1 rounded-full text-sm">MongoDB</span>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Project Outcomes</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-tech-blue/10 p-3 rounded-full mr-4">
                      <Download className="h-6 w-6 text-tech-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium">500,000+ Downloads</h4>
                      <p className="text-sm text-gray-600">across iOS and Android platforms</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-tech-blue/10 p-3 rounded-full mr-4">
                      <Users className="h-6 w-6 text-tech-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium">75% User Retention</h4>
                      <p className="text-sm text-gray-600">after 3 months of usage</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-tech-blue/10 p-3 rounded-full mr-4">
                      <BookOpen className="h-6 w-6 text-tech-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium">30% Improvement</h4>
                      <p className="text-sm text-gray-600">in average student test scores</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-tech-blue/10 p-3 rounded-full mr-4">
                      <Award className="h-6 w-6 text-tech-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium">EdTech Innovation Award</h4>
                      <p className="text-sm text-gray-600">winner for mobile learning</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-medium mb-2">Client Testimonial</h4>
                  <p className="text-gray-700 italic mb-4">
                    "The educational app developed by Tech Instance has transformed how our students learn. The personalized approach and engaging content have led to remarkable improvements in student engagement and academic performance."
                  </p>
                  <p className="text-sm font-medium">- Prof. Ankit Patel, CEO at LearnSmart Education</p>
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
              <Link to="/portfolio/hospital-management" className="text-tech-blue hover:text-tech-darkblue">
                <span className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" /> 
                  Previous Project
                </span>
              </Link>
              <Link to="/portfolio/smart-home-iot" className="text-tech-blue hover:text-tech-darkblue">
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

export default EducationalApp;
