
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatSupport from "@/components/support/ChatSupport";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CountryFlag from "@/components/ui/CountryFlag";
import PageLayout from "@/components/layout/PageLayout";

const projects = [
  {
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    description: 'A comprehensive e-commerce solution with advanced inventory management, payment gateway integration, and a responsive front-end.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '/portfolio/ecommerce-platform',
    country: 'us' as const
  },
  {
    title: 'Hospital Management System',
    category: 'Software Solution',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800',
    description: 'An integrated healthcare platform connecting doctors, patients, and administrators with a focus on data security and ease of use.',
    technologies: ['React', 'Express', 'PostgreSQL', 'Socket.io'],
    link: '/portfolio/hospital-management',
    country: 'uk' as const
  },
  {
    title: 'Educational Mobile App',
    category: 'App Development',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800',
    description: 'An interactive learning application designed for students of all ages, featuring personalized learning paths and progress tracking.',
    technologies: ['React Native', 'Firebase', 'Redux', 'TensorFlow'],
    link: '/portfolio/educational-app',
    country: 'in' as const
  },
  {
    title: 'Smart Home IoT Solution',
    category: 'IoT Solution',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    description: 'An integrated system for managing connected home devices with emphasis on energy efficiency and security.',
    technologies: ['Python', 'MQTT', 'Node.js', 'AWS IoT'],
    link: '/portfolio/smart-home-iot',
    country: 'np' as const
  },
  {
    title: 'Financial Analytics Dashboard',
    category: 'Data Visualization',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    description: 'A comprehensive financial data visualization tool for investors and financial analysts with real-time data processing.',
    technologies: ['React', 'D3.js', 'Express', 'MongoDB'],
    link: '/portfolio/financial-dashboard',
    country: 'us' as const
  },
  {
    title: 'Enterprise Resource Planning Solution',
    category: 'Enterprise Software',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800',
    description: 'A modular ERP system designed for medium-sized businesses, offering inventory, HR, and financial management modules.',
    technologies: ['Angular', 'Java Spring Boot', 'MySQL', 'Docker'],
    link: '/portfolio/erp-solution',
    country: 'uk' as const
  }
];

const PortfolioIndex = () => {
  return (
    <PageLayout
      title="Our Portfolio"
      description="Explore our successful projects and discover how we've helped businesses achieve their digital goals"
      breadcrumbs={[
        { name: "Portfolio", href: "/portfolio", current: true }
      ]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-3">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-tech-blue/10 text-tech-blue rounded-full">
                  {project.category}
                </span>
                <CountryFlag country={project.country} className="ml-2" />
              </div>
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <Link 
                to={project.link} 
                className="inline-flex items-center text-tech-blue hover:text-tech-darkblue font-medium"
              >
                View Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Have a Project in Mind?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Ready to bring your idea to life? Our team of experts is ready to transform your vision into reality.
        </p>
        <Link to="/contact">
          <Button className="bg-tech-orange text-white hover:bg-opacity-90">
            Request a Consultation
          </Button>
        </Link>
      </div>
    </PageLayout>
  );
};

export default PortfolioIndex;
