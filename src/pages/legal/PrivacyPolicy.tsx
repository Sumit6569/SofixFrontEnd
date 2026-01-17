
import PageLayout from "@/components/layout/PageLayout";

const PrivacyPolicy = () => {
  return (
    <PageLayout
      title="Privacy Policy"
      description="Our commitment to protecting your privacy and personal information"
      breadcrumbs={[
        { name: "Privacy Policy", href: "/privacy-policy", current: true }
      ]}
    >
      <div className="prose prose-blue max-w-none">
        <h2>Your Privacy Matters</h2>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <p>
          At Sofixs, we take your privacy seriously. This Privacy Policy describes how we collect, use, 
          and handle your personal information when you use our services, website, and products.
        </p>
        
        <h3>Information We Collect</h3>
        <p>
          We collect information to provide better services to our users. The types of information we collect include:
        </p>
        <ul>
          <li>Personal information you provide us (name, email, contact details)</li>
          <li>Device and usage information when you interact with our services</li>
          <li>Location information, if you enable this functionality</li>
          <li>Log information and cookies</li>
        </ul>
        
        <h3>How We Use Your Information</h3>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Develop new products and features</li>
          <li>Personalize our services for you</li>
          <li>Communicate with you about our services</li>
          <li>Protect against abuse and unauthorized access</li>
        </ul>
        
        <h3>Information Sharing</h3>
        <p>
          We do not share your personal information with companies, organizations, or individuals outside 
          of Sofixs except in the following circumstances:
        </p>
        <ul>
          <li>With your consent</li>
          <li>For external processing by our trusted partners</li>
          <li>For legal reasons</li>
        </ul>
        
        <h3>Your Choices</h3>
        <p>
          You have choices regarding the information we collect and how it's used. You can:
        </p>
        <ul>
          <li>Access and update your information</li>
          <li>Export and delete your information</li>
          <li>Configure your privacy settings</li>
        </ul>
        
        <h3>Security Measures</h3>
        <p>
          We implement strong security measures to protect your information against unauthorized 
          access, alteration, or destruction.
        </p>
        
        <h3>Updates to This Policy</h3>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any significant 
          changes by posting a notice on our website.
        </p>
        
        <h3>Contact Us</h3>
        <p>
          If you have questions about this Privacy Policy, please contact us at 
          privacy@sofixs.com or through our contact page.
        </p>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicy;
