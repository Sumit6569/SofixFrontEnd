
import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import ApplicationForm from "@/components/careers/ApplicationForm";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Calendar,
  Search,
  Filter,
  ChevronDown
} from 'lucide-react';

const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote / India",
    type: "Full Time",
    description: "We're looking for a senior frontend developer with extensive experience in React, TypeScript and modern web technologies to join our core product team.",
    requirements: ["5+ years of experience with React", "Strong TypeScript knowledge", "Experience with state management", "Knowledge of modern web performance techniques"],
    date: "2023-05-15"
  },
  {
    id: 2,
    title: "Backend Engineer",
    department: "Engineering",
    location: "Bangalore, India / Remote",
    type: "Full Time",
    description: "As a Backend Engineer, you will design and build scalable APIs and services that power our web and mobile applications.",
    requirements: ["3+ years of experience with Node.js", "Experience with databases and SQL", "Knowledge of REST API design", "Experience with cloud services (AWS/Azure/GCP)"],
    date: "2023-05-10"
  },
  {
    id: 3,
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full Time",
    description: "Join our design team to create beautiful, intuitive interfaces that delight our users and solve complex problems through design thinking.",
    requirements: ["3+ years of UI/UX design experience", "Proficiency in Figma or similar tools", "Understanding of design systems", "Portfolio demonstrating user-centered design approach"],
    date: "2023-05-05"
  },
  {
    id: 4,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "United States / Remote",
    type: "Full Time",
    description: "Help build and maintain our infrastructure, deployment pipelines, and monitoring systems to ensure our applications run reliably at scale.",
    requirements: ["Experience with Kubernetes and Docker", "CI/CD pipeline implementation", "Cloud infrastructure management", "Security best practices"],
    date: "2023-05-01"
  },
  {
    id: 5,
    title: "Product Manager",
    department: "Product",
    location: "London, UK / Remote",
    type: "Full Time",
    description: "Lead product initiatives from conception to launch, working closely with engineering, design, and business stakeholders.",
    requirements: ["3+ years in product management", "Experience with agile methodologies", "Strong analytical skills", "Excellent communication abilities"],
    date: "2023-04-25"
  },
  {
    id: 6,
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full Time",
    description: "Drive our content marketing strategy and execution to increase brand awareness and generate leads for our products.",
    requirements: ["Digital marketing experience", "Content creation skills", "SEO knowledge", "Data-driven approach to marketing"],
    date: "2023-04-20"
  }
];

const JobListings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");
  const [showApplication, setShowApplication] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = departmentFilter === "all" || job.department === departmentFilter;
    
    const matchesLocation = locationFilter === "all" || 
                          job.location.toLowerCase().includes(locationFilter.toLowerCase());
    
    return matchesSearch && matchesDepartment && matchesLocation;
  });
  
  const departments = ["Engineering", "Design", "Product", "Marketing"];
  const locations = ["Remote", "India", "United States", "UK", "Bangalore"];
  
  const handleApply = (job: any) => {
    setSelectedJob(job);
    setShowApplication(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <PageLayout
      title="Job Listings"
      description="Explore our current job openings and find your next career opportunity"
      breadcrumbs={[
        { name: "Careers", href: "/careers" },
        { name: "Job Listings", href: "/careers/job-listings", current: true }
      ]}
    >
      <div className="max-w-4xl mx-auto">
        {showApplication ? (
          <>
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold">{selectedJob?.title}</h2>
              <Button 
                variant="outline" 
                onClick={() => setShowApplication(false)}
              >
                Back to Listings
              </Button>
            </div>
            <ApplicationForm type="job" positionTitle={selectedJob?.title} />
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
                    placeholder="Search job titles or keywords"
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
              {filteredJobs.length > 0 ? (
                filteredJobs.map(job => (
                  <Card key={job.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-0">
                      <div className="p-6">
                        <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                          <h3 className="text-xl font-semibold text-tech-blue">{job.title}</h3>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-tech-lightblue text-tech-blue text-xs font-medium rounded-full">
                              {job.department}
                            </span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                              {job.type}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1 text-gray-500" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                            <span>Posted: {new Date(job.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        
                        <p className="mb-4">{job.description}</p>
                        
                        <div className="mb-6">
                          <div className="flex items-center mb-3">
                            <h4 className="font-medium mr-2">Key Requirements:</h4>
                            <ChevronDown className="h-4 w-4 text-gray-500" />
                          </div>
                          <ul className="list-disc list-inside text-gray-700 pl-2">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="mb-1">{req}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <Button 
                          className="bg-tech-blue hover:bg-tech-darkblue text-white"
                          onClick={() => handleApply(job)}
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
                  <h3 className="text-xl font-medium text-gray-500 mb-2">No jobs match your criteria</h3>
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

export default JobListings;
