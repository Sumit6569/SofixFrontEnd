
import { ArrowRight, Users, Globe, Award, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const industries = [
  {
    title: "IT & Software",
    description: "Solutions for software companies, SaaS providers, and IT service organizations.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
    link: "/industries/it-software"
  },
  {
    title: "Retail & E-commerce",
    description: "Digital platforms and solutions for modern retail businesses.",
    image: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?auto=format&fit=crop&q=80&w=800",
    link: "/industries/retail-ecommerce"
  },
  {
    title: "Finance & Banking",
    description: "Secure and compliant solutions for financial institutions.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    link: "/industries/finance-banking"
  },
  {
    title: "Education",
    description: "Digital learning platforms and educational technology solutions.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
    link: "/industries/education"
  },
  {
    title: "Healthcare",
    description: "Patient-centered digital healthcare solutions and platforms.",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800",
    link: "/industries/healthcare"
  },
  {
    title: "Manufacturing",
    description: "Digital transformation solutions for manufacturing businesses.",
    image: "https://images.unsplash.com/photo-1507212603313-98e5cd6a79b8?auto=format&fit=crop&q=80&w=800",
    link: "/industries/manufacturing"
  }
];

const IndustriesIndex = () => {
  return (
    <PageLayout 
      title="Industries We Serve"
      description="We deliver specialized solutions across diverse industries, tailored to meet specific sector challenges."
      breadcrumbs={[
        { name: "Industries", href: "/industries", current: true }
      ]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry, index) => (
          <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src={industry.image} 
                alt={industry.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
              <p className="text-gray-600 mb-4">{industry.description}</p>
              <Link to={industry.link} className="text-tech-blue hover:text-tech-darkblue font-medium inline-flex items-center">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-20 bg-gray-50 rounded-xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Tech Instance for Your Industry</h2>
          <p className="text-gray-600">
            Our deep industry expertise combined with technical excellence allows us to deliver tailored solutions
            that address the specific challenges and opportunities in your sector.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-tech-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-tech-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Industry Experts</h3>
            <p className="text-gray-600">
              Our team includes specialists with years of experience in various industries.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="bg-tech-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-tech-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Global Perspective</h3>
            <p className="text-gray-600">
              We bring insights from global markets to inform our industry solutions.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="bg-tech-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-tech-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Recognized Excellence</h3>
            <p className="text-gray-600">
              Award-winning solutions that have transformed businesses across sectors.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <Button className="btn-primary">
          <Link to="/contact">Discuss Your Industry Needs</Link>
        </Button>
      </div>
    </PageLayout>
  );
};

export default IndustriesIndex;
