
import PageLayout from "@/components/layout/PageLayout";

const CookiePolicy = () => {
  return (
    <PageLayout
      title="Cookie Policy"
      description="How we use cookies and similar technologies on our website"
      breadcrumbs={[
        { name: "Cookie Policy", href: "/cookie-policy", current: true }
      ]}
    >
      <div className="prose prose-blue max-w-none">
        <h2>Cookie Policy</h2>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <p>
          This Cookie Policy explains how Sofixs uses cookies and similar technologies 
          to recognize you when you visit our website. It explains what these technologies are 
          and why we use them, as well as your rights to control our use of them.
        </p>
        
        <h3>What Are Cookies?</h3>
        <p>
          Cookies are small data files that are placed on your computer or mobile device when 
          you visit a website. Cookies are widely used by website owners to make their websites 
          work, or to work more efficiently, as well as to provide reporting information.
        </p>
        
        <h3>Why Do We Use Cookies?</h3>
        <p>We use cookies for several reasons:</p>
        <ul>
          <li>To enable certain functions of the website</li>
          <li>To provide analytics and understand how you use our website</li>
          <li>To store your preferences</li>
          <li>To personalize your experience</li>
          <li>To improve our website and services</li>
        </ul>
        
        <h3>Types of Cookies We Use</h3>
        <p>
          <strong>Essential cookies:</strong> These cookies are necessary for the website to function 
          and cannot be switched off in our systems.
        </p>
        <p>
          <strong>Performance cookies:</strong> These cookies allow us to count visits and traffic sources 
          so we can measure and improve the performance of our site.
        </p>
        <p>
          <strong>Functional cookies:</strong> These cookies enable the website to provide enhanced 
          functionality and personalization.
        </p>
        <p>
          <strong>Targeting cookies:</strong> These cookies may be set through our site by our advertising partners 
          to build a profile of your interests.
        </p>
        
        <h3>How to Control Cookies</h3>
        <p>
          You can set or amend your web browser controls to accept or refuse cookies. If you choose 
          to reject cookies, you may still use our website though your access to some functionality 
          and areas may be restricted.
        </p>
        
        <h3>Updates to This Policy</h3>
        <p>
          We may update this Cookie Policy from time to time in order to reflect changes to the cookies 
          we use or for other operational, legal, or regulatory reasons.
        </p>
        
        <h3>Contact Us</h3>
        <p>
          If you have any questions about our use of cookies, please contact us at 
          privacy@sofixs.com or through our contact page.
        </p>
      </div>
    </PageLayout>
  );
};

export default CookiePolicy;
