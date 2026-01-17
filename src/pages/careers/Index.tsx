
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CareersIndex = () => {
  return (
    <PageLayout
      title="Careers"
      description="Join our growing team and be part of building the future of technology"
      breadcrumbs={[
        { name: "Careers", href: "/careers", current: true }
      ]}
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-tech-blue to-tech-darkblue text-white p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
          <p className="mb-4">
            At Sofixs, we're building a team of passionate, creative individuals who are excited about technology and making a difference. We offer competitive salaries, flexible work arrangements, and an inclusive culture focused on growth and innovation.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link to="/careers/job-listings">
              <Button className="bg-white text-tech-blue hover:bg-gray-100">View Job Listings</Button>
            </Link>
            <Link to="/careers/internships">
              <Button variant="outline" className="border-white text-white hover:bg-white/20">Internship Opportunities</Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-tech-lightblue rounded-lg">
                  <Briefcase className="h-6 w-6 text-tech-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Job Listings</h3>
                  <p className="text-gray-600 mb-6">Explore our current openings across engineering, design, marketing, and operations. We're always looking for talented individuals to join our global team.</p>
                  <Link to="/careers/job-listings" className="text-tech-blue hover:text-tech-darkblue flex items-center">
                    Browse Jobs <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-tech-lightblue rounded-lg">
                  <GraduationCap className="h-6 w-6 text-tech-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Internships</h3>
                  <p className="text-gray-600 mb-6">Kickstart your career with our internship programs. Gain hands-on experience working alongside industry experts on real-world projects.</p>
                  <Link to="/careers/internships" className="text-tech-blue hover:text-tech-darkblue flex items-center">
                    View Internships <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="prose max-w-none">
          <h2>Life at Sofixs</h2>
          <p>Our culture is built on collaboration, innovation, and continuous learning. We believe in empowering our team members to take ownership of their work and make meaningful contributions to the company's success.</p>
          
          <h3>Benefits & Perks</h3>
          <ul>
            <li>Competitive salary and equity packages</li>
            <li>Flexible work arrangements and remote options</li>
            <li>Comprehensive health insurance</li>
            <li>Learning & development budget</li>
            <li>Regular team events and retreats</li>
            <li>Modern office spaces with all amenities</li>
          </ul>
          
          <h3>Our Hiring Process</h3>
          <ol>
            <li>Application review</li>
            <li>Initial screening call</li>
            <li>Technical assessment</li>
            <li>Team interviews</li>
            <li>Final decision & offer</li>
          </ol>
        </div>
      </div>
    </PageLayout>
  );
};

export default CareersIndex;
