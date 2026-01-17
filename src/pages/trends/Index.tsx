
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import CountryFlag from "@/components/ui/CountryFlag";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const insights = [
  {
    title: 'AI-Powered Business Solutions',
    category: 'Artificial Intelligence',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    description: 'Discover how AI is revolutionizing business operations, decision-making, and customer experiences across industries.',
    link: '/trends/ai-powered-solutions',
    country: 'us' as const
  },
  {
    title: 'Web3 & Blockchain Applications',
    category: 'Blockchain',
    image: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?auto=format&fit=crop&q=80&w=800',
    description: "Explore the potential of decentralized technologies and how they're reshaping finance, ownership, and digital interactions.",
    link: '/trends/web3-blockchain',
    country: 'uk' as const
  },
  {
    title: 'Sustainable Tech Innovations',
    category: 'Green Technology',
    image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=800',
    description: 'Learn about eco-friendly technologies helping businesses reduce their environmental impact while improving efficiency.',
    link: '/trends/sustainable-tech',
    country: 'in' as const
  },
  {
    title: 'IoT & Smart Infrastructure',
    category: 'Internet of Things',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800',
    description: 'Dive into how connected devices and smart systems are creating more efficient and responsive environments.',
    link: '/trends/iot-smart-infrastructure',
    country: 'np' as const
  },
  {
    title: 'Augmented Reality in Business',
    category: 'AR/VR',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80&w=800',
    description: 'See how AR is transforming training, customer experiences, and product visualization across multiple sectors.',
    link: '/trends/augmented-reality',
    country: 'us' as const
  },
  {
    title: 'Cybersecurity Advancements',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800',
    description: 'Stay updated on the latest security technologies and strategies protecting businesses in an increasingly digital world.',
    link: '/trends/cybersecurity-advancements',
    country: 'uk' as const
  },
  {
    title: '5G and Edge Computing',
    category: 'Connectivity',
    image: 'https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&q=80&w=800',
    description: 'Understand how ultra-fast connectivity and distributed computing are enabling new applications and capabilities.',
    link: '/trends/5g-edge-computing',
    country: 'in' as const
  },
  {
    title: 'Future of Work Technologies',
    category: 'Workplace Innovation',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    description: 'Explore tools and platforms reshaping how teams collaborate, communicate, and innovate in remote and hybrid environments.',
    link: '/trends/future-of-work',
    country: 'np' as const
  }
];

const TechInsightsIndex = () => {
  return (
    <PageLayout
      title="Tech Insights"
      description="Stay ahead of the curve with our analysis of emerging technology trends and innovations"
      breadcrumbs={[
        { name: "Tech Insights", href: "/trends", current: true }
      ]}
    >
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={insight.image} 
                  alt={insight.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-tech-blue/10 text-tech-blue rounded-full">
                    {insight.category}
                  </span>
                  <CountryFlag country={insight.country} className="ml-2" />
                </div>
                <h3 className="text-xl font-bold mb-3">{insight.title}</h3>
                <p className="text-gray-600 mb-4">{insight.description}</p>
                <Link 
                  to={insight.link} 
                  className="inline-flex items-center text-tech-blue hover:text-tech-darkblue font-medium transition-colors"
                >
                  Read Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default TechInsightsIndex;
