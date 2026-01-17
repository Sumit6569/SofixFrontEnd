
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="bg-tech-darkblue py-16 md:py-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-tech-blue to-tech-darkblue">
          {/* Animated background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -right-40 top-20 w-80 h-80 bg-white opacity-5 rounded-full"></div>
            <div className="absolute -left-20 bottom-10 w-60 h-60 bg-white opacity-5 rounded-full"></div>
          </div>
          
          <div className="relative z-10 px-6 py-12 md:px-12 md:py-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Partner with Sofixs to leverage cutting-edge technology solutions that drive growth and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-tech-orange hover:bg-opacity-90 text-white px-8 py-6 text-lg rounded-md">
                Get Started Now
              </Button>
              
              <Button variant="outline" className="bg-transparent hover:bg-white/10 text-white border-white px-8 py-6 text-lg rounded-md">
                <span>Schedule a Consultation</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
