
import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import ApplicationForm from "@/components/careers/ApplicationForm";
import { Briefcase, MapPin, Calendar, Search, Filter, GraduationCap } from "lucide-react";

const internships = [
  {
    id: 1,
    title: "Software Development Intern",
    department: "Engineering",
    location: "Remote / India",
    duration: "3 months",
    stipend: "₹15,000 - ₹25,000 per month",
    description: "Join our engineering team to gain hands-on experience in developing web and mobile applications using modern technologies like React, Node.js, and Flutter.",
    requirements: ["Currently pursuing B.Tech/BE in Computer Science or related field", "Knowledge of JavaScript, HTML, CSS", "Basic understanding of programming concepts", "Eagerness to learn new technologies"],
    date: "2023-05-15"
  },
  {
    id: 2,
    title: "UI/UX Design Intern",
    department: "Design",
    location: "Bangalore, India / Remote",
    duration: "6 months",
    stipend: "₹12,000 - ₹20,000 per month",
    description: "Work closely with our design team to create user-friendly interfaces and gain practical experience in design thinking and UI/UX methodologies.",
    requirements: ["Currently pursuing degree in Design, HCI, or related field", "Familiar with design tools like Figma or Adobe XD", "Basic understanding of UI/UX principles", "Portfolio showing creative work"],
    date: "2023-05-10"
  },
  {
    id: 3,
    title: "Digital Marketing Intern",
    department: "Marketing",
    location: "Remote",
    duration: "3 months",
    stipend: "₹10,000 - ₹15,000 per month",
    description: "Assist our marketing team with social media management, content creation, SEO, and digital marketing campaigns to gain practical industry experience.",
    requirements: ["Currently pursuing degree in Marketing, Communications, or related field", "Good writing and communication skills", "Understanding of social media platforms", "Basic knowledge of digital marketing concepts"],
    date: "2023-05-05"
  },
  {
    id: 4,
    title: "Data Science Intern",
    department: "Engineering",
    location: "United States / Remote",
    duration: "6 months",
    stipend: "$1,000 - $1,500 per month",
    description: "Collaborate with our data science team to analyze data, build models, and extract insights that drive business decisions.",
    requirements: ["Currently pursuing degree in Statistics, Mathematics, Computer Science, or related field", "Knowledge of Python and data analysis libraries", "Understanding of statistical concepts", "Eagerness to learn ML/AI technologies"],
    date: "2023-05-01"
  },
  {
    id: 5,
    title: "Business Development Intern",
    department: "Sales",
    location: "London, UK / Remote",
    duration: "3 months",
    stipend: "£800 - £1,200 per month",
    description: "Support our sales team in market research, lead generation, and client engagement to gain valuable business development experience.",
    requirements: ["Currently pursuing degree in Business, Economics, or related field", "Excellent communication and interpersonal skills", "Research and analytical abilities", "Proficiency in MS Office suite"],
    date: "2023-04-25"
  },
  {
    id: 6,
    title: "QA Testing Intern",
    department: "Engineering",
    location: "Remote",
    duration: "3 months",
    stipend: "₹12,000 - ₹18,000 per month",
    description: "Work with our QA team to ensure the quality of our applications through manual and automated testing procedures.",
    requirements: ["Currently pursuing degree in Computer Science or related field", "Basic understanding of software testing concepts", "Attention to detail", "Good documentation skills"],
    date: "2023-04-20"
  }
];

const Internships = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");
  const [showApplication, setShowApplication] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState<any>(null);
  
  const filteredInternships = internships.filter(internship => {
    const matchesSearch = internship.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         internship.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = departmentFilter === "all" || internship.department === departmentFilter;
    
    const matchesLocation = locationFilter === "all" || 
                          internship.location.toLowerCase().includes(locationFilter.toLowerCase());
    
    return matchesSearch && matchesDepartment && matchesLocation;
  });
  
  const departments = ["Engineering", "Design", "Marketing", "Sales"];
  const locations = ["Remote", "India", "United States", "UK", "Bangalore"];
  
  const handleApply = (internship: any) => {
    setSelectedInternship(internship);
    setShowApplication(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <PageLayout
      title="Internship Opportunities"
      description="Kickstart your career with our internship programs and gain valuable industry experience"
      breadcrumbs={[
        { name: "Careers", href: "/careers" },
        { name: "Internships", href: "/careers/internships", current: true }
      ]}
    >
      <div className="max-w-4xl mx-auto">
        {showApplication ? (
          <>
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold">{selectedInternship?.title}</h2>
              <Button 
                variant="outline" 
                onClick={() => setShowApplication(false)}
              >
                Back to Listings
              </Button>
            </div>
            <ApplicationForm type="internship" positionTitle={selectedInternship?.title} />
          </>
        ) : (
          <>
            <div className="bg-white p-6 rounded-lg shadow mb-8">
              <div className="flex flex-col space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="search"
                    type="text"
                    placeholder="Search internship titles or keywords"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                    <div className="relative">
                      <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                        <SelectTrigger>
                          <SelectValue placeholder="All Departments" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Departments</SelectItem>
                          {departments.map(dept => (
                            <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Filter className="absolute right-8 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <div className="relative">
                      <Select value={locationFilter} onValueChange={setLocationFilter}>
                        <SelectTrigger>
                          <SelectValue placeholder="All Locations" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Locations</SelectItem>
                          {locations.map(location => (
                            <SelectItem key={location} value={location}>{location}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <MapPin className="absolute right-8 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {filteredInternships.length > 0 ? (
                filteredInternships.map(internship => (
                  <Card key={internship.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-0">
                      <div className="p-6">
                        <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                          <h3 className="text-xl font-semibold text-tech-blue">{internship.title}</h3>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-tech-lightblue text-tech-blue text-xs font-medium rounded-full">
                              {internship.department}
                            </span>
                            <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                              Internship
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                            <span>{internship.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                            <span>{internship.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <GraduationCap className="h-4 w-4 mr-1 text-gray-500" />
                            <span>{internship.stipend}</span>
                          </div>
                        </div>
                        
                        <p className="mb-4">{internship.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="font-medium mb-3">Key Requirements:</h4>
                          <ul className="list-disc list-inside text-gray-700 pl-2">
                            {internship.requirements.map((req, idx) => (
                              <li key={idx} className="mb-1">{req}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <Button 
                          className="bg-tech-blue hover:bg-tech-darkblue text-white"
                          onClick={() => handleApply(internship)}
                        >
                          <Briefcase className="mr-2 h-4 w-4" />
                          Apply Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium text-gray-500 mb-2">No internships match your criteria</h3>
                  <p className="text-gray-400">Try adjusting your search or filters</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => {
                      setSearchTerm("");
                      setDepartmentFilter("all");
                      setLocationFilter("all");
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </PageLayout>
  );
};

export default Internships;
