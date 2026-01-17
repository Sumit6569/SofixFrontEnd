
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="container-section bg-white relative overflow-hidden" id="about">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-tech-lightblue opacity-10 rounded-l-full z-0"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-tech-orange opacity-10 rounded-full z-0"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <span className="text-tech-blue text-sm font-semibold uppercase tracking-wider">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-2">Driving Digital Innovation</h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Sofixs is a global technology solutions provider dedicated to delivering cutting-edge digital experiences that transform businesses. We bring together passionate technologists, designers, and strategists to help businesses navigate their digital transformation journey.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="bg-tech-lightblue p-1 rounded-full mr-3 mt-1">
                  <Check className="h-4 w-4 text-tech-blue" />
                </div>
                <div>
                  <h4 className="font-medium mb-2">Industry Expertise</h4>
                  <p className="text-sm text-gray-600">Specialized knowledge across multiple sectors</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-tech-lightblue p-1 rounded-full mr-3 mt-1">
                  <Check className="h-4 w-4 text-tech-blue" />
                </div>
                <div>
                  <h4 className="font-medium mb-2">Global Reach</h4>
                  <p className="text-sm text-gray-600">Operating in 8+ countries with diverse teams</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-tech-lightblue p-1 rounded-full mr-3 mt-1">
                  <Check className="h-4 w-4 text-tech-blue" />
                </div>
                <div>
                  <h4 className="font-medium mb-2">Client Success</h4>
                  <p className="text-sm text-gray-600">100+ successful project deliveries</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-tech-lightblue p-1 rounded-full mr-3 mt-1">
                  <Check className="h-4 w-4 text-tech-blue" />
                </div>
                <div>
                  <h4 className="font-medium mb-2">Innovation Focus</h4>
                  <p className="text-sm text-gray-600">Continuous investment in emerging technologies</p>
                </div>
              </div>
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
              
              <Link to="/analytics">
                <Button variant="outline" className="border-tech-orange text-tech-orange hover:bg-orange-50">
                  View Analytics
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="bg-gradient-to-br from-tech-blue to-tech-darkblue p-1 rounded-lg shadow-xl">
                <img 
                  src="/sofixs.png"
                  // src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                  alt="Sofixs Team" 
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-4">
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
