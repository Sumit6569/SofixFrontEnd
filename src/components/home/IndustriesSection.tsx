
import { Server, ShoppingCart, Landmark, GraduationCap, Stethoscope, Factory } from 'lucide-react';

const industries = [
  {
    icon: Server,
    name: 'IT & Software',
    description: 'Solutions for software companies, SaaS providers, and IT service organizations.'
  },
  {
    icon: ShoppingCart,
    name: 'Retail & E-commerce',
    description: 'Digital platforms and solutions for modern retail businesses.'
  },
  {
    icon: Landmark,
    name: 'Finance & Banking',
    description: 'Secure and compliant solutions for financial institutions.'
  },
  {
    icon: GraduationCap,
    name: 'Education',
    description: 'Digital learning platforms and educational technology solutions.'
  },
  {
    icon: Stethoscope,
    name: 'Healthcare',
    description: 'Patient-centered digital healthcare solutions and platforms.'
  },
  {
    icon: Factory,
    name: 'Manufacturing',
    description: 'Digital transformation solutions for manufacturing businesses.'
  }
];

const IndustriesSection = () => {
  return (
    <section className="container-section bg-white">
      <h2 className="section-title">Industries We Serve</h2>
      <p className="section-subtitle">
        We deliver specialized solutions across diverse industries, tailored to meet specific sector challenges.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {industries.map((industry, index) => (
          <div key={index} className="flex gap-4 group">
            <div className="flex-shrink-0 mt-1">
              <div className="w-12 h-12 rounded-full bg-tech-lightblue flex items-center justify-center text-tech-blue group-hover:bg-tech-blue group-hover:text-white transition-colors duration-300">
                <industry.icon className="h-6 w-6" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
              <p className="text-muted-foreground">{industry.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 bg-gradient-to-r from-tech-darkblue to-tech-blue rounded-xl p-8 md:p-12 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-6">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready to transform your industry?</h3>
            <p className="text-white/80">
              Let us help you leverage technology to stay ahead of the competition.
            </p>
          </div>
          <a href="/contact" className="flex-shrink-0 bg-white text-tech-blue hover:bg-gray-100 transition-colors px-6 py-3 rounded-md font-medium">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
