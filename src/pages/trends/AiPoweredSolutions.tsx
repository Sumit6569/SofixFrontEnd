import { ArrowLeft } from 'lucide-react';
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const AiPoweredSolutions = () => {
  return (
    <PageLayout
      breadcrumbs={[
        { name: "Tech Trends", href: "/trends", current: false },
        { name: "AI-Powered Business Solutions", href: "/trends/ai-powered-solutions", current: true }
      ]}
    >
      <div className="w-full">
        <Link to="/trends" className="inline-flex items-center text-tech-blue hover:underline mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to All Trends
        </Link>
        
        <div className="relative w-full">
          <div className="aspect-[21/9] w-full overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600" 
              alt="AI-Powered Business Solutions" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                AI-Powered Business Solutions
              </h1>
            </div>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Artificial Intelligence is revolutionizing how businesses operate, making processes more efficient, improving decision-making, and creating new opportunities for innovation and growth.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8">How AI is Transforming Business Operations</h2>
            
            <p className="mb-6">
              The integration of AI into business operations is no longer a futuristic concept—it's a present reality driving efficiency and innovation across industries. Companies leveraging AI-powered solutions are experiencing significant competitive advantages through:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <Card>
                <CardHeader>
                  <CardTitle>Automated Decision Making</CardTitle>
                  <CardDescription>Streamlining operational processes</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>AI systems can analyze vast amounts of data rapidly, providing actionable insights and automating routine decisions to reduce human error and increase efficiency.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Predictive Analytics</CardTitle>
                  <CardDescription>Forecasting future trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Machine learning algorithms can identify patterns in historical data to predict future outcomes, helping businesses anticipate market changes and customer behavior.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Customer Experience Enhancement</CardTitle>
                  <CardDescription>Personalizing interactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>AI-driven personalization tools analyze customer preferences and behaviors to deliver tailored experiences, improving satisfaction and loyalty.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Process Optimization</CardTitle>
                  <CardDescription>Maximizing operational efficiency</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>AI can identify bottlenecks and inefficiencies in business processes, suggesting or implementing improvements to maximize productivity.</p>
                </CardContent>
              </Card>
            </div>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8">Implementation Strategies</h2>
            
            <p className="mb-6">
              Successfully implementing AI solutions requires a strategic approach that considers the unique needs and goals of your business. At Sofixs, we recommend a phased implementation approach:
            </p>
            
            <ol className="list-decimal pl-6 mb-8 space-y-4">
              <li><strong>Assessment and Planning:</strong> Evaluate current processes to identify where AI can add the most value.</li>
              <li><strong>Pilot Implementation:</strong> Start with small-scale projects to test effectiveness and gain organizational buy-in.</li>
              <li><strong>Scaling Solutions:</strong> Gradually expand successful AI implementations across departments.</li>
              <li><strong>Continuous Improvement:</strong> Regularly assess and refine AI systems to ensure optimal performance.</li>
            </ol>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8">The Future of AI in Business</h2>
            
            <p className="mb-6">
              As AI technology continues to evolve, we anticipate even more transformative applications in business. Emerging trends include:
            </p>
            
            <ul className="list-disc pl-6 mb-8 space-y-4">
              <li><strong>Autonomous AI:</strong> Systems that can learn and adapt without human intervention.</li>
              <li><strong>Explainable AI:</strong> Solutions that provide clear reasoning for their decisions, building trust and transparency.</li>
              <li><strong>Ethical AI:</strong> Frameworks and guidelines ensuring AI systems operate responsibly and fairly.</li>
              <li><strong>AI Collaboration:</strong> Tools facilitating better human-AI cooperation in complex decision-making scenarios.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8">Partner with Sofixs</h2>
            
            <p className="mb-6">
              At Sofixs, we specialize in developing and implementing cutting-edge AI solutions tailored to your business needs. Our team of experts can guide you through the entire process, from initial assessment to full-scale implementation and ongoing support.
            </p>
            
            <div className="bg-tech-blue/10 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-2">Ready to transform your business with AI?</h3>
              <p className="mb-4">Contact our team to schedule a consultation and discover how our AI-powered solutions can drive growth and innovation for your organization.</p>
              <Link to="/contact" className="btn-primary inline-block">Schedule a Consultation</Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AiPoweredSolutions;
