
import { CheckCircle, Code, Database, Globe, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const WebDevelopment = () => {
  return (
    <PageLayout
      title="Web Development"
      description="Custom, responsive, and scalable web solutions tailored to your business needs."
      breadcrumbs={[
        { name: "Services", href: "/services" },
        { name: "Web Development", href: "/services/web-development", current: true }
      ]}
    >
      {/* Hero section */}
      <div className="rounded-xl overflow-hidden relative mb-16">
        <img 
          src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1600" 
          alt="Web Development Services" 
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tech-darkblue/80 to-tech-blue/50 flex items-center">
          <div className="container px-6 md:px-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-2xl">
              Transforming Ideas into Powerful Web Experiences
            </h2>
            <p className="max-w-xl text-lg mb-6">
              From simple websites to complex web applications, we deliver solutions that drive business growth.
            </p>
            <Button className="btn-cta">
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Technologies section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Web Development Technologies</h2>
        
        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-8">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="cms">CMS</TabsTrigger>
          </TabsList>
          
          <TabsContent value="frontend" className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Frontend Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <div className="text-center p-4">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-16 h-16 mx-auto mb-2" />
                  <span className="block text-sm font-medium">React</span>
                </div>
                <div className="text-center p-4">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" className="w-16 h-16 mx-auto mb-2" />
                  <span className="block text-sm font-medium">Angular</span>
                </div>
                <div className="text-center p-4">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" className="w-16 h-16 mx-auto mb-2" />
                  <span className="block text-sm font-medium">Vue.js</span>
                </div>
                <div className="text-center p-4">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-16 h-16 mx-auto mb-2" />
                  <span className="block text-sm font-medium">TypeScript</span>
                </div>
                <div className="text-center p-4">
                  <img src="https://cdnblog.webkul.com/blog/wp-content/uploads/2024/05/tailwindcss-1633184775.webp" alt="Tailwind CSS" className="w-16 h-16 mx-auto mb-2" />
                  <span className="block text-sm font-medium">Tailwind CSS</span>
                </div>
                <div className="text-center p-4">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-16 h-16 mx-auto mb-2" />
                  <span className="block text-sm font-medium">Next.js</span>
                </div>
                <div className="text-center p-4">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="Redux" className="w-16 h-16 mx-auto mb-2" />
                  <span className="block text-sm font-medium">Redux</span>
                </div>
                <div className="text-center p-4">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass" className="w-16 h-16 mx-auto mb-2" />
                  <span className="block text-sm font-medium">Sass</span>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="backend" className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Backend Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <div className="text-center p-4">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-16 h-16 mx-auto mb-2" />
                  <span className="block text-sm font-medium">Node.js</span>
                </div>
                <div className="text-center p-4">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-16 h-16 mx-auto mb-2" />
                  <span className="block text-sm font-medium">Python</span>
                </div>
                <div className="text-center p-4">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" className="w-16 h-16 mx-auto mb-2" />
                  <span className="block text-sm font-medium">PHP</span>
                </div>
                <div className="text-center p-4">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" alt=".NET Core" className="w-16 h-16 mx-auto mb-2" />
                  <span className="block text-sm font-medium">.NET Core</span>
                </div>
                <div className="text-center p-4">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-16 h-16 mx-auto mb-2" />
                  <span className="block text-sm font-medium">Java</span>
                </div>
                <div className="text-center p-4">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-16 h-16 mx-auto mb-2" />
                  <span className="block text-sm font-medium">MongoDB</span>
                </div>
                <div className="text-center p-4">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-16 h-16 mx-auto mb-2" />
                  <span className="block text-sm font-medium">MySQL</span>
                </div>
                <div className="text-center p-4">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-16 h-16 mx-auto mb-2" />
                  <span className="block text-sm font-medium">PostgreSQL</span>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="cms" className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">CMS Platforms</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <div className="text-center p-4">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" alt="WordPress" className="w-16 h-16 mx-auto mb-2" />
                  <span className="block text-sm font-medium">WordPress</span>
                </div>
                <div className="text-center p-4">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJbbkkOEkzGXxETawpoX3N0mtCWw-GViHBHA&s" alt="Shopify" className="w-16 h-16 mx-auto mb-2" />
                  <span className="block text-sm font-medium">Shopify</span>
                </div>
                <div className="text-center p-4">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original.svg" alt="Drupal" className="w-16 h-16 mx-auto mb-2" />
                  <span className="block text-sm font-medium">Drupal</span>
                </div>
                <div className="text-center p-4">
                  <img src="https://images.ctfassets.net/crb83veve8xb/3X8sgBCjbKKo3mPxGXiYlS/3a713ef1ca321546eb2a750c143de782/CONTENTFUL_PORTADA.png" alt="Contentful" className="w-16 h-16 mx-auto mb-2" />
                  <span className="block text-sm font-medium">Contentful</span>
                </div>
                <div className="text-center p-4">
                  <img src="https://bairesdev.mo.cloudinary.net/blog/2023/06/What-is-Magento.jpg?tx=w_1920,q_auto" alt="Magento" className="w-16 h-16 mx-auto mb-2" />
                  <span className="block text-sm font-medium">Magento</span>
                </div>
                <div className="text-center p-4">
                  <img src="https://mms.businesswire.com/media/20200520005179/en/792790/23/Logo.WhiteBackground.jpg" alt="Strapi" className="w-16 h-16 mx-auto mb-2" />
                  <span className="block text-sm font-medium">Strapi</span>
                </div>
                <div className="text-center p-4">
                  <img src="https://i.pcmag.com/imagery/reviews/00Z1mnZCcGR9r9D5hNbsFbW-11..v1569472690.jpg" alt="Wix" className="w-16 h-16 mx-auto mb-2" />
                  <span className="block text-sm font-medium">Wix</span>
                </div>
                <div className="text-center p-4">
                  <img src="https://www.opensourcecms.com/wp-content/uploads/joomla-logo.png" alt="Joomla" className="w-16 h-16 mx-auto mb-2" />
                  <span className="block text-sm font-medium">Joomla</span>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Services offerings */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Web Development Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-tech-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Web Development</h3>
              <p className="text-gray-600">
                Bespoke websites and web applications tailored to your specific business needs and objectives.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-tech-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">E-commerce Solutions</h3>
              <p className="text-gray-600">
                Full-featured online stores with secure payment processing, inventory management, and more.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-tech-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Web Portal Development</h3>
              <p className="text-gray-600">
                Secure, scalable portals for customers, partners, or employees with role-based access control.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-tech-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Progressive Web Apps</h3>
              <p className="text-gray-600">
                Fast, reliable PWAs that work offline and provide app-like experiences across all devices.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-tech-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Web Application Security</h3>
              <p className="text-gray-600">
                Comprehensive security assessments and implementation of best practices to protect your web assets.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-tech-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Website Maintenance</h3>
              <p className="text-gray-600">
                Ongoing support, updates, and optimization to ensure your web presence remains effective.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Development process */}
      <div className="mb-16 bg-gray-50 p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Web Development Process</h2>
        
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="md:w-64 flex-shrink-0">
              <div className="bg-tech-blue text-white text-3xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-3">1</div>
              <h3 className="text-xl font-semibold mb-1">Requirements Analysis</h3>
            </div>
            <div className="flex-grow">
              <p className="text-gray-700">
                We begin by understanding your business goals, target audience, and specific requirements. 
                This includes analyzing competitors, defining user personas, and establishing clear project objectives.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="md:w-64 flex-shrink-0">
              <div className="bg-tech-blue text-white text-3xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-3">2</div>
              <h3 className="text-xl font-semibold mb-1">Design & Prototyping</h3>
            </div>
            <div className="flex-grow">
              <p className="text-gray-700">
                Our designers create wireframes and interactive prototypes to visualize the user interface and experience.
                We collaborate with you to refine the design until it perfectly matches your vision.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="md:w-64 flex-shrink-0">
              <div className="bg-tech-blue text-white text-3xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-3">3</div>
              <h3 className="text-xl font-semibold mb-1">Development</h3>
            </div>
            <div className="flex-grow">
              <p className="text-gray-700">
                Our developers use the latest technologies and best practices to build your website or application.
                We follow agile methodologies with regular sprints and demonstrations of progress.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="md:w-64 flex-shrink-0">
              <div className="bg-tech-blue text-white text-3xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-3">4</div>
              <h3 className="text-xl font-semibold mb-1">Testing & QA</h3>
            </div>
            <div className="flex-grow">
              <p className="text-gray-700">
                Comprehensive testing across different devices, browsers, and user scenarios ensures your website
                functions flawlessly and delivers an optimal user experience.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="md:w-64 flex-shrink-0">
              <div className="bg-tech-blue text-white text-3xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-3">5</div>
              <h3 className="text-xl font-semibold mb-1">Deployment & Launch</h3>
            </div>
            <div className="flex-grow">
              <p className="text-gray-700">
                We handle the deployment process, ensuring smooth transition to the production environment,
                and provide comprehensive documentation and training.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="md:w-64 flex-shrink-0">
              <div className="bg-tech-blue text-white text-3xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-3">6</div>
              <h3 className="text-xl font-semibold mb-1">Ongoing Support</h3>
            </div>
            <div className="flex-grow">
              <p className="text-gray-700">
                Our relationship continues after launch with maintenance, performance monitoring, security updates,
                and ongoing optimization to ensure your web presence evolves with your business.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-tech-darkblue text-white rounded-xl p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Web Project?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Let's discuss how we can help you create a powerful web presence that drives results for your business.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white text-tech-darkblue hover:bg-gray-100">
            <Link to="/contact">Request a Quote</Link>
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10">
            <Link to="/portfolio">View Our Portfolio</Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default WebDevelopment;
