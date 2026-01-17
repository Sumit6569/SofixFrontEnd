
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const trends = [
  {
    title: 'AI-Powered Business Solutions',
    category: 'Artificial Intelligence',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    link: '/trends/ai-powered-solutions'
  },
  {
    title: 'Web3 & Blockchain Applications',
    category: 'Blockchain',
    image: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?auto=format&fit=crop&q=80&w=800',
    link: '/trends/web3-blockchain'
  },
  {
    title: 'Sustainable Tech Innovations',
    category: 'Green Technology',
    image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=800',
    link: '/trends/sustainable-tech'
  },
  {
    title: 'IoT & Smart Infrastructure',
    category: 'Internet of Things',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800',
    link: '/trends/iot-smart-infrastructure'
  }
];

const TechTrendsSection = () => {
  return (
    <section className="container-section bg-tech-gray">
      <h2 className="section-title">Tech Trends</h2>
      <p className="section-subtitle">
        Stay updated with the latest technology trends and innovations that are shaping the digital landscape.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {trends.map((trend, index) => (
          <div 
            key={index} 
            className="group relative overflow-hidden rounded-lg shadow-md bg-white"
          >
            <div className="aspect-w-16 aspect-h-9 overflow-hidden">
              <img 
                src={trend.image} 
                alt={trend.title} 
                className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <span className="inline-block text-sm font-medium bg-tech-blue bg-opacity-90 px-3 py-1 rounded-full mb-2">
                {trend.category}
              </span>
              <h3 className="text-xl font-bold mb-2">{trend.title}</h3>
              <a 
                href={trend.link} 
                className="inline-flex items-center text-white/90 hover:text-white transition-colors"
              >
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Button className="btn-primary">View All Trends</Button>
      </div>
    </section>
  );
};

export default TechTrendsSection;
