import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatSupport from "@/components/support/ChatSupport";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { ALLOWED_EMAIL } from '@/config/auth';
import { useToast } from "@/components/ui/use-toast";

const ContactUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
      // Show success toast
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. Our team will contact you shortly.",
        duration: 5000,
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <div className="bg-tech-gray relative py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb className="mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Contact Us</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Have questions or need assistance? Our expert team is here to help you navigate the digital landscape and find the right solutions for your business.
            </p>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-tech-blue/10 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-tech-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Location</h3>
                      <p className="text-gray-600">
                        Janakpur,Kathmandu<br />
                        46600<br />
                       Nepal
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-tech-blue/10 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-tech-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Phone</h3>
                      <p className="text-gray-600 mb-1">Sales: +977 9829911255 <br/> +91 9546128425</p>
                      <p className="text-gray-600 mb-1">Support: +977 9829911255 <br/> +91 9546128425</p>
                      <p className="text-gray-600">HR: +977 9829911255 <br/> +91 9546128425</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-tech-blue/10 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-tech-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email</h3>
                      <p className="text-gray-600 mb-1">General: sofixsofficial@gmail.com</p>
                      <p className="text-gray-600 mb-1">Support: info@sofixs.com</p>
                      <p className="text-gray-600 mb-1">Careers: {ALLOWED_EMAIL}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-tech-blue/10 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-tech-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                      <p className="text-gray-600 mb-1">Monday to Friday: 9am - 6pm</p>
                      <p className="text-gray-600">Saturday: 10am - 2pm (IST)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-md">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name*
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address*
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your Phone Number"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject*
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="How can we help you?"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message*
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please provide details about your requirements..."
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full md:w-auto bg-tech-blue hover:bg-tech-darkblue"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" /> Submit Message
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="bg-tech-gray py-16">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 text-center">Our  Offices</h2>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.4723908035545!2d85.32401711506286!3d27.7172459827919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1909b8dfc4e1%3A0x4e6c2f4698f2b2b9!2sKathmandu!5e0!3m2!1sen!2snp!4v1683101431277!5m2!1sen!2snp" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sofixs Headquarters Location"
                ></iframe>
              </div>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold mb-2">Janakpur (HQ)</h3>
                <p className="text-gray-600">
                  Janakpur, 45600, <br />
                 
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold mb-2"> Kathmandu </h3>
                <p className="text-gray-600">
                Kathmandu, Nepal <br />
                  44600, Nepal
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold mb-2">Contact Us</h3>
                <p className="text-gray-600">
                  <span className="font-semibold">Phone:</span> +977 9829911255 <br />
                  <span className="font-semibold">Email:</span> {ALLOWED_EMAIL}

                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQs Section */}
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions about our services and support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-tech-blue">
              <h3 className="font-bold text-lg mb-2">What industries do you serve?</h3>
              <p className="text-gray-600">
                We work with clients across numerous sectors including IT, healthcare, education, finance, retail, manufacturing, and more. Our solutions are tailored to each industry's specific needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-tech-blue">
              <h3 className="font-bold text-lg mb-2">How long does a typical project take?</h3>
              <p className="text-gray-600">
                Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while complex enterprise solutions can take several months. We'll provide a detailed timeline during consultation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-tech-blue">
              <h3 className="font-bold text-lg mb-2">Do you provide post-launch support?</h3>
              <p className="text-gray-600">
                Yes, we offer various maintenance and support packages to ensure your solution continues to run optimally after launch. Our support team is available 24/7 for critical issues.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-tech-blue">
              <h3 className="font-bold text-lg mb-2">Can you help with an existing project?</h3>
              <p className="text-gray-600">
                Absolutely! We offer code review, optimization, and enhancement services for existing projects. Our team can seamlessly integrate with your current technology stack.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <ChatSupport />
    </div>
  );
};

export default ContactUs;
