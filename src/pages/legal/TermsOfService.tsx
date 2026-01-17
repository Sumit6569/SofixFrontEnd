
import PageLayout from "@/components/layout/PageLayout";

const TermsOfService = () => {
  return (
    <PageLayout
      title="Terms of Service"
      description="The terms and conditions governing your use of our services"
      breadcrumbs={[
        { name: "Terms of Service", href: "/terms-of-service", current: true }
      ]}
    >
      <div className="prose prose-blue max-w-none">
        <h2>Terms of Service</h2>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <p>
          These Terms of Service ("Terms") govern your access to and use of Sofixs' services, 
          including our website, APIs, email notifications, applications, and other covered services.
        </p>
        
        <h3>1. Accepting These Terms</h3>
        <p>
          By using our services, you agree to be bound by these Terms. If you don't agree to these 
          Terms, you may not use our services.
        </p>
        
        <h3>2. Privacy</h3>
        <p>
          Our Privacy Policy describes how we handle the information you provide to us when you use our 
          services. By using our services, you consent to our collection and use of information as 
          set forth in our Privacy Policy.
        </p>
        
        <h3>3. Content on the Services</h3>
        <p>
          You are responsible for your use of the services and for any content you provide, including 
          compliance with applicable laws, rules, and regulations.
        </p>
        
        <h3>4. Using the Services</h3>
        <p>
          You may use our services only as permitted by these Terms and any applicable laws. You may not:
        </p>
        <ul>
          <li>Use our services in any manner that could disable, overburden, damage, or impair our services</li>
          <li>Use any robot, spider, or other automatic device to access our services</li>
          <li>Use our services for any illegal or unauthorized purpose</li>
          <li>Violate any policies, guidelines, or rules applicable to our services</li>
        </ul>
        
        <h3>5. Limitation of Liability</h3>
        <p>
          To the maximum extent permitted by applicable law, Sofixs shall not be liable for any indirect, 
          incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
        </p>
        
        <h3>6. Changes to These Terms</h3>
        <p>
          We may revise these Terms from time to time. The most current version will always be on our website.
          By continuing to use our services after those changes become effective, you agree to be bound by the revised Terms.
        </p>
        
        <h3>7. Governing Law</h3>
        <p>
          These Terms shall be governed by the laws of India, without regard to its conflict of law principles.
        </p>
        
        <h3>8. Contact Us</h3>
        <p>
          If you have any questions about these Terms, please contact us at 
          legal@sofixs.com or through our contact page.
        </p>
      </div>
    </PageLayout>
  );
};

export default TermsOfService;
