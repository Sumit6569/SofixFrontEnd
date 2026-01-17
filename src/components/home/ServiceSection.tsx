
import { Code, Smartphone, Gamepad, PenTool, Database, Cpu, TrendingUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    title: 'Web Development',
    description: 'Custom, responsive websites and web applications tailored to your business needs with modern frameworks like React, Angular, and Vue.',
    icon: Code,
    color: 'from-blue-500 to-blue-700',
    link: '/services/web-development',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experiences and robust functionality.',
    icon: Smartphone,
    color: 'from-purple-500 to-purple-700',
    link: '/services/app-development',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Game Development',
    description: 'Immersive gaming experiences for mobile, web, and desktop platforms using Unity, Unreal Engine, and custom frameworks.',
    icon: Gamepad,
    color: 'from-red-500 to-red-700',
    link: '/services/game-development',
    image: 'https://images.unsplash.com/photo-1556438064-2d7646166914?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design solutions with intuitive interfaces that enhance user experience, increase engagement, and drive conversions.',
    icon: PenTool,
    color: 'from-green-500 to-green-700',
    link: '/services/ui-ux-design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Software Solutions',
    description: 'Custom enterprise software solutions that streamline business operations, automate workflows, and drive digital transformation.',
    icon: Database,
    color: 'from-indigo-500 to-indigo-700',
    link: '/services/software-solutions',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'IoT Solutions',
    description: 'Connected device ecosystems that bring your hardware and software together with secure, scalable IoT infrastructure.',
    icon: Cpu,
    color: 'from-cyan-500 to-cyan-700',
    link: '/services/iot-solutions',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to boost your online presence, including SEO, content marketing, and social media campaigns.',
    icon: TrendingUp,
    color: 'from-orange-500 to-orange-700',
    link: '/services/digital-marketing',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80&w=800'
  }
];

const ServiceSection = () => {
  return (
    <section className="container-section bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-indigo-300 opacity-20 blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <span className="text-tech-blue text-sm font-semibold uppercase tracking-wider">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer a comprehensive range of digital services to help businesses thrive in today's competitive landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <div className="h-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-3`}>
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 p-6 flex flex-col">
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                  
                  <Link to={service.link} className="mt-auto">
                    <Button variant="ghost" className="text-tech-blue hover:text-tech-darkblue p-0 flex items-center">
                      Learn More <span className="ml-1">→</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/services">
            <Button size="lg" className="bg-tech-blue hover:bg-tech-darkblue text-white">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
