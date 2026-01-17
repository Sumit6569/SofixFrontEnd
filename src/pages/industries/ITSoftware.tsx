
import { CheckCircle, User, Lightbulb, BarChart, Clock, Shield } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ITSoftware = () => {
  return (
    <PageLayout
      title="IT & Software Solutions"
      description="Innovative digital solutions tailored for software companies, SaaS providers, and IT service organizations."
      breadcrumbs={[
        { name: "Industries", href: "/industries" },
        { name: "IT & Software", href: "/industries/it-software", current: true }
      ]}
    >
      {/* Hero section */}
      <div className="rounded-xl overflow-hidden relative mb-16">
        <img 
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1600" 
          alt="IT & Software Solutions" 
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tech-darkblue/80 to-tech-blue/40 flex items-center">
          <div className="container px-6 md:px-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-2xl">
              Transform Your IT Infrastructure with Industry-Leading Solutions
            </h2>
            <p className="max-w-xl text-lg mb-6">
              We help software companies and IT organizations build scalable, secure, and efficient digital ecosystems.
            </p>
            <Button className="btn-cta">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Key challenges section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Key IT & Software Industry Challenges We Solve
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <Clock className="h-5 w-5 mr-2 text-tech-blue" />
              Rapid Development Cycles
            </h3>
            <p className="text-gray-600">
              Accelerate your development process with our agile methodologies and DevOps practices 
              that reduce time-to-market without compromising quality.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <Shield className="h-5 w-5 mr-2 text-tech-blue" />
              Cybersecurity Concerns
            </h3>
            <p className="text-gray-600">
              Implement robust security measures and compliance protocols to protect sensitive 
              data and maintain customer trust in an increasingly vulnerable landscape.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <BarChart className="h-5 w-5 mr-2 text-tech-blue" />
              Scalability Issues
            </h3>
            <p className="text-gray-600">
              Build systems that can seamlessly scale with your business growth, handling 
              increased user loads and data volumes without performance degradation.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <User className="h-5 w-5 mr-2 text-tech-blue" />
              Talent Acquisition & Retention
            </h3>
            <p className="text-gray-600">
              Access specialized tech expertise through our extended teams or staff augmentation 
              services, filling critical skill gaps in your organization.
            </p>
          </div>
        </div>
      </div>

      {/* Our approach section */}
      <div className="bg-gradient-to-r from-tech-lightblue to-blue-50 p-8 md:p-12 rounded-xl mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Approach to IT & Software Solutions</h2>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <CheckCircle className="h-6 w-6 text-tech-blue mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg mb-2">Custom Software Development</h3>
              <p className="text-gray-700">
                We build bespoke software solutions that perfectly align with your business objectives, 
                focusing on user experience, performance, and maintainability.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <CheckCircle className="h-6 w-6 text-tech-blue mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg mb-2">Legacy System Modernization</h3>
              <p className="text-gray-700">
                Transform outdated systems into modern, cloud-native applications that leverage the 
                latest technologies while preserving your business logic and data.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <CheckCircle className="h-6 w-6 text-tech-blue mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg mb-2">DevOps Implementation</h3>
              <p className="text-gray-700">
                Streamline your development and operations workflows with CI/CD pipelines, infrastructure 
                as code, and automated testing and deployment strategies.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <CheckCircle className="h-6 w-6 text-tech-blue mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg mb-2">Cloud Migration & Optimization</h3>
              <p className="text-gray-700">
                Move your applications and infrastructure to the cloud with minimal disruption, 
                then optimize for cost, performance, and security.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Case studies preview */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Success Stories in IT & Software</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1548092372-0d1bd40894a3?auto=format&fit=crop&q=80&w=800" 
              alt="SaaS Platform Case Study" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">SaaS Platform Scalability</h3>
              <p className="text-gray-600 mb-4">
                How we helped a growing SaaS company scale their platform to handle 10x user growth 
                while reducing infrastructure costs by 30%.
              </p>
              <Link to="/portfolio/ecommerce-platform" className="text-tech-blue hover:text-tech-darkblue font-medium">
                Read case study →
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800" 
              alt="DevOps Transformation Case Study" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">DevOps Transformation</h3>
              <p className="text-gray-600 mb-4">
                A legacy software provider's journey to adopting modern DevOps practices, resulting in 
                75% faster release cycles and improved product quality.
              </p>
              <Link to="/portfolio/hospital-management" className="text-tech-blue hover:text-tech-darkblue font-medium">
                Read case study →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-tech-darkblue text-white rounded-xl p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your IT Infrastructure?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Let's discuss how our IT and software solutions can help your business overcome challenges 
          and achieve its strategic objectives.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white text-tech-darkblue hover:bg-gray-100">
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10">
            <Link to="/services">Explore Our Services</Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default ITSoftware;
