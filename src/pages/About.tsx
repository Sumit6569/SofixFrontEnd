import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Award, Users, Globe, BarChart3, Building, Zap } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const companyStats = [
  { number: '5+', label: 'Years Experience' },
  { number: '50+', label: 'Team Members' },
  { number: '2+', label: 'Offices' },
  { number: '500+', label: 'Successful Projects' }
];

const coreValues = [
  { 
    icon: <Zap className="h-8 w-8 text-tech-orange" />,
    title: 'Innovation',
    description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.'
  },
  { 
    icon: <Users className="h-8 w-8 text-tech-orange" />,
    title: 'Client Partnership',
    description: 'We build lasting relationships with our clients, focusing on their long-term success.'
  },
  { 
    icon: <Award className="h-8 w-8 text-tech-orange" />,
    title: 'Excellence',
    description: 'We maintain the highest standards of quality in everything we deliver.'
  },
  { 
    icon: <Globe className="h-8 w-8 text-tech-orange" />,
    title: 'Global Perspective',
    description: 'Our diverse team brings global insights and cultural understanding to every project.'
  }
];

const faqs = [
  {
    question: "What makes Sofixs different from other tech companies?",
    answer: "Sofixs stands out through our innovative approach, combining cutting-edge technology with deep industry expertise. We specialize in delivering tailored solutions for the South Asian market, particularly in India and Nepal, while maintaining global standards of excellence."
  },
  {
    question: "How do you ensure project success?",
    answer: "We follow a rigorous project management methodology, maintain transparent communication, and employ agile development practices. Our team of experts works closely with clients throughout the project lifecycle to ensure deliverables meet or exceed expectations."
  },
  {
    question: "What industries do you serve?",
    answer: "We serve a wide range of industries including IT & Software, Healthcare, Education, Finance & Banking, Retail & E-commerce, and Manufacturing. Our solutions are customized to meet specific industry requirements and challenges."
  },
  {
    question: "Do you provide post-deployment support?",
    answer: "Yes, we offer comprehensive post-deployment support and maintenance services. Our dedicated support team ensures your solutions remain optimized and up-to-date with the latest technology advancements."
  }
];

const About = () => {
  return (
    <PageLayout
      title="About Sofixs"
      description="Learn more about Sofixs, our mission, vision, company stats, core values, and frequently asked questions."
      breadcrumbs={[{ name: 'About', href: '/about', current: true }]}
    >
      {/* Hero Section */}
      <section className="container-section bg-white relative overflow-hidden mb-20">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-tech-lightblue opacity-10 rounded-l-full z-0"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-tech-orange opacity-10 rounded-full z-0"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <span className="text-tech-blue text-sm font-semibold uppercase tracking-wider">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-2">Driving Digital Innovation</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Sofixs is a global technology solutions provider dedicated to delivering cutting-edge digital experiences that transform businesses. We began as a small team of passionate developers in Bangalore, India, and have since grown into a global enterprise with offices across Asia, Europe, and North America.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our team brings together passionate technologists, designers, and strategists who work collaboratively to help businesses navigate their digital transformation journey. With a client-first approach and dedication to excellence, we've established ourselves as a trusted partner for organizations of all sizes.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  { title: 'Industry Expertise', desc: 'Specialized knowledge across multiple sectors' },
                  { title: 'Global Reach', desc: 'Operating in 8+ countries with diverse teams' },
                  { title: 'Client Success', desc: '500+ successful project deliveries' },
                  { title: 'Innovation Focus', desc: 'Continuous investment in emerging technologies' }
                ].map(({ title, desc }, i) => (
                  <div key={i} className="flex items-start">
                    <div className="bg-tech-lightblue p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-tech-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">{title}</h4>
                      <p className="text-sm text-gray-600">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="bg-tech-blue hover:bg-tech-darkblue text-white">
                    Contact Us <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
                
                <Link to="/careers">
                  <Button variant="outline" className="border-tech-blue text-tech-blue hover:bg-tech-lightblue">
                    Join Our Team
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="bg-gradient-to-br from-tech-blue to-tech-darkblue p-1 rounded-lg shadow-xl">
                <img 
                  src='/logo.jpeg'
                  alt="Sofixs Team"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg flex items-center gap-4">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-tech-blue">3+</span>
                  <span className="text-sm text-gray-600">Years Experience</span>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div className="text-center">
                  <span className="block text-3xl font-bold text-tech-blue">50+</span>
                  <span className="text-sm text-gray-600">Team Members</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="container-section bg-gray-50 mb-20">
        <div className="text-center mb-16">
          <span className="text-tech-orange text-sm font-semibold uppercase tracking-wider">Our Purpose</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Mission & Vision</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center bg-tech-lightblue w-16 h-16 rounded-full mb-6">
              <Building className="h-8 w-8 text-tech-blue" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in an ever-evolving digital landscape. We aim to be the catalyst that transforms ideas into impactful digital experiences.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center bg-tech-lightblue w-16 h-16 rounded-full mb-6">
              <BarChart3 className="h-8 w-8 text-tech-blue" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be the global leader in digital transformation, known for our technical excellence, innovative approach, and extraordinary client outcomes. We envision a world where technology enhances human potential and creates sustainable value for businesses and society.
            </p>
          </div>
        </div>
      </section>
      
      {/* Company Stats */}
      <section className="container-section bg-tech-blue text-white py-16 mb-20">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <span className="text-tech-orange text-sm font-semibold uppercase tracking-wider">By the Numbers</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Our Global Impact</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {companyStats.map(({ number, label }, idx) => (
            <div key={idx} className="text-center">
              <span className="block text-5xl font-extrabold">{number}</span>
              <span className="block mt-2 text-lg font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </section>
      
      {/* Core Values */}
      <section className="container-section bg-white py-16 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-tech-orange text-sm font-semibold uppercase tracking-wider">Our Philosophy</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Core Values</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            At Sofixs, our core values guide every decision and action we take. They reflect who we are, what we believe, and how we work together with clients and communities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {coreValues.map(({ icon, title, description }, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              {icon}
              <h4 className="mt-4 text-xl font-semibold">{title}</h4>
              <p className="mt-2 text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* FAQ */}
      <section className="container-section bg-gray-50 py-16 mb-20 max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-tech-orange text-sm font-semibold uppercase tracking-wider">Got Questions?</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Frequently Asked Questions</h2>
        </div>
        
        <Accordion type="single" collapsible>
          {faqs.map(({ question, answer }, idx) => (
            <AccordionItem value={`item-${idx}`} key={idx}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">{answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </PageLayout>
  );
};

export default About;
