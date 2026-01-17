
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Gamepad, PenTool, Database, Cpu, TrendingUp } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Responsive, scalable websites and web applications tailored to your business needs.',
    icon: Code,
    color: 'from-blue-500 to-blue-700',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800',
    link: '/services/web-development'
  },
  {
    title: 'App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android devices.',
    icon: Smartphone,
    color: 'from-purple-500 to-purple-700',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800',
    link: '/services/app-development'
  },
  {
    title: 'Game Development',
    description: 'Immersive gaming experiences for mobile, web, and desktop platforms.',
    icon: Gamepad,
    color: 'from-red-500 to-red-700',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800',
    link: '/services/game-development'
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design solutions that enhance user experience and engagement.',
    icon: PenTool,
    color: 'from-green-500 to-green-700',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800',
    link: '/services/ui-ux-design'
  },
  {
    title: 'Software Solutions',
    description: 'Custom software solutions for streamlining business operations and processes.',
    icon: Database,
    color: 'from-indigo-500 to-indigo-700',
    image: 'https://images.unsplash.com/photo-1480694313141-fce5e697ee25?auto=format&fit=crop&q=80&w=800',
    link: '/services/software-solutions'
  },
  {
    title: 'IoT Solutions',
    description: 'Connected device ecosystems that bring your hardware and software together.',
    icon: Cpu,
    color: 'from-cyan-500 to-cyan-700',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800',
    link: '/services/iot-solutions'
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to boost your online presence and conversions.',
    icon: TrendingUp,
    color: 'from-orange-500 to-orange-700',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=800',
    link: '/services/digital-marketing'
  }
];

const ServicesIndex = () => {
  return (
    <PageLayout
      title="Our Services"
      description="We offer a comprehensive range of digital services to help businesses thrive in the digital age."
      breadcrumbs={[
        { name: "Services", href: "/services", current: true }
      ]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
            <div className="h-48 overflow-hidden relative">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link to={service.link} className="text-tech-blue hover:text-tech-darkblue font-medium inline-flex items-center">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Service process */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Service Process</h2>
        
        <div className="relative">
          {/* Process steps with connecting line */}
          <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-1 bg-tech-blue/20 -translate-x-1/2 z-0"></div>
          
          <div className="space-y-16">
            <div className="md:flex items-center">
              <div className="md:w-1/2 pb-6 md:pb-0 md:pr-12 text-right">
                <h3 className="text-xl font-semibold mb-3">Discovery & Planning</h3>
                <p className="text-gray-600">
                  We start by understanding your business objectives, market position, and specific challenges to establish clear project goals and KPIs.
                </p>
              </div>
              <div className="md:w-0 relative z-10 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-tech-blue text-white flex items-center justify-center text-lg font-semibold">1</div>
              </div>
              <div className="md:w-1/2 pt-6 md:pt-0 md:pl-12">
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" alt="Discovery & Planning" className="rounded-lg shadow-md" />
              </div>
            </div>
            
            <div className="md:flex items-center">
              <div className="md:w-1/2 pb-6 md:pb-0 md:pr-12">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" alt="Design & Development" className="rounded-lg shadow-md" />
              </div>
              <div className="md:w-0 relative z-10 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-tech-blue text-white flex items-center justify-center text-lg font-semibold">2</div>
              </div>
              <div className="md:w-1/2 pt-6 md:pt-0 md:pl-12 text-left">
                <h3 className="text-xl font-semibold mb-3">Design & Development</h3>
                <p className="text-gray-600">
                  Our team creates detailed designs and prototypes before moving into the development phase, with regular checkpoints to ensure alignment with your vision.
                </p>
              </div>
            </div>
            
            <div className="md:flex items-center">
              <div className="md:w-1/2 pb-6 md:pb-0 md:pr-12 text-right">
                <h3 className="text-xl font-semibold mb-3">Testing & Quality Assurance</h3>
                <p className="text-gray-600">
                  Rigorous testing ensures your product meets the highest standards of performance, security, and user experience before launch.
                </p>
              </div>
              <div className="md:w-0 relative z-10 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-tech-blue text-white flex items-center justify-center text-lg font-semibold">3</div>
              </div>
              <div className="md:w-1/2 pt-6 md:pt-0 md:pl-12">
                <img src="https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&q=80&w=800" alt="Testing & Quality Assurance" className="rounded-lg shadow-md" />
              </div>
            </div>
            
            <div className="md:flex items-center">
              <div className="md:w-1/2 pb-6 md:pb-0 md:pr-12">
                <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80&w=800" alt="Deployment & Ongoing Support" className="rounded-lg shadow-md" />
              </div>
              <div className="md:w-0 relative z-10 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-tech-blue text-white flex items-center justify-center text-lg font-semibold">4</div>
              </div>
              <div className="md:w-1/2 pt-6 md:pt-0 md:pl-12 text-left">
                <h3 className="text-xl font-semibold mb-3">Deployment & Ongoing Support</h3>
                <p className="text-gray-600">
                  We ensure a smooth launch and provide continuous support and maintenance to optimize performance and implement new features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="mt-20 bg-gradient-to-r from-tech-darkblue to-tech-blue rounded-xl p-8 md:p-12 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Digital Journey?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Let's discuss how our services can help your business achieve its goals and stay ahead in the digital landscape.
        </p>
        <Button className="bg-white text-tech-blue hover:bg-gray-100">
          <Link to="/contact">Get in Touch</Link>
        </Button>
      </div>
    </PageLayout>
  );
};

export default ServicesIndex;
