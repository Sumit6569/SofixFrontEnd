
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatSupport from '../support/ChatSupport';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

interface PageLayoutProps {
  children: React.ReactNode;
  showSupport?: boolean;
  className?: string;
  title?: string;
  description?: string;
  breadcrumbs?: {
    name: string;
    href: string;
    current?: boolean;
  }[];
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  showSupport = true,
  className = "",
  title,
  description,
  breadcrumbs = []
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      <Navbar />
      
      <main className="flex-grow pt-16">
        {breadcrumbs.length > 0 && title ? (
          <div className="container-section py-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                
                {breadcrumbs.map((breadcrumb, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <BreadcrumbSeparator />}
                    <BreadcrumbItem>
                      {breadcrumb.current ? (
                        <BreadcrumbPage>{breadcrumb.name}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink href={breadcrumb.href}>{breadcrumb.name}</BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
            
            <div className="mt-6">
              <h1 className="text-4xl font-bold mb-2">{title}</h1>
              {description && <p className="text-xl text-gray-600 mb-10">{description}</p>}
              
              {children}
            </div>
          </div>
        ) : (
          children
        )}
      </main>
      
      <Footer />
      {showSupport && <ChatSupport />}
    </div>
  );
};

export default PageLayout;
