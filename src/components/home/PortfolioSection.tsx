
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    title: 'E-commerce Platform Transformation',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    link: '/portfolio/ecommerce-platform',
    client: 'GlobalRetail Inc.',
    description: 'Redesigned and rebuilt an e-commerce platform increasing conversion rates by 35% and reducing page load times by 60%.'
  },
  {
    title: 'Hospital Management System',
    category: 'Enterprise Software',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800',
    link: '/portfolio/hospital-management',
    client: 'MediCare Group',
    description: 'Created an integrated hospital management solution that streamlined operations and improved patient care workflows.'
  },
  {
    title: 'Educational Mobile App',
    category: 'App Development',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800',
    link: '/portfolio/educational-app',
    client: 'LearnNow Educational Services',
    description: 'Developed an interactive learning platform with real-time progress tracking and personalized content delivery.'
  },
  {
    title: 'Smart Home IoT Solution',
    category: 'IoT Development',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    link: '/portfolio/smart-home-iot',
    client: 'ConnectLiving Technologies',
    description: 'Built a comprehensive smart home ecosystem with AI-powered automation and enhanced security features.'
  }
];

const CaseStudiesSection = () => {
  return (
    <section className="container-section bg-white">
      <div className="text-center mb-16">
        <span className="text-tech-blue text-sm font-semibold uppercase tracking-wider">Our Work</span>
        <h2 className="section-title">Case Studies</h2>
        <p className="section-subtitle">
          Explore our recent projects and discover how we've helped businesses achieve their digital goals
          through innovative technology solutions.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link 
              to={project.link}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg bg-white h-full">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-64 md:h-72 object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center mb-3">
                    <span className="inline-block text-sm font-medium bg-tech-blue bg-opacity-90 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="mx-3 text-white/70">|</span>
                    <span className="text-sm text-white/90">{project.client}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-tech-blue transition-colors">{project.title}</h3>
                  <p className="text-white/80 mb-4 line-clamp-2">{project.description}</p>
                  
                  <span 
                    className="inline-flex items-center text-tech-blue group-hover:text-tech-orange transition-colors"
                  >
                    View Case Study <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Link to="/portfolio">
          <Button size="lg" className="bg-tech-blue text-white hover:bg-tech-darkblue">
            View All Case Studies
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
