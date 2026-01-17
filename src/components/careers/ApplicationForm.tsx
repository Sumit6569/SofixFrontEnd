
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { 
  Calendar, 
  Upload, 
  Phone, 
  Mail, 
  User, 
  MapPin,
  Briefcase,
  GraduationCap,
  Globe,
  CheckCircle,
  XCircle,
  School
} from 'lucide-react';

// Form schema using zod for validation
const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  location: z.string().min(2, { message: "Please enter your location" }),
  position: z.string().min(1, { message: "Please select a position" }),
  experience: z.string().min(1, { message: "Please select your experience level" }),
  portfolio: z.string().url().optional().or(z.literal("")),
  education: z.string().min(2, { message: "Please provide your highest education" }),
  coverLetter: z.string().min(50, { message: "Cover letter must be at least 50 characters" }),
  resume: z.any(),
  country: z.string().min(1, { message: "Please select your country" }),
  hearAbout: z.string().min(1, { message: "Please tell us how you heard about us" }),
  institution: z.string().optional(),
  graduationDate: z.string().optional(),
});

// List of available positions
const jobPositions = [
  { id: 'software-engineer', title: 'Software Engineer' },
  { id: 'frontend-developer', title: 'Frontend Developer' },
  { id: 'backend-developer', title: 'Backend Developer' },
  { id: 'mobile-developer', title: 'Mobile App Developer' },
  { id: 'ui-ux-designer', title: 'UI/UX Designer' },
  { id: 'product-manager', title: 'Product Manager' },
  { id: 'project-manager', title: 'Project Manager' },
  { id: 'qa-engineer', title: 'QA Engineer' },
  { id: 'devops-engineer', title: 'DevOps Engineer' },
  { id: 'marketing-specialist', title: 'Marketing Specialist' },
  { id: 'data-scientist', title: 'Data Scientist' },
  { id: 'business-analyst', title: 'Business Analyst' },
];

const internshipPositions = [
  { id: 'software-dev-intern', title: 'Software Development Intern' },
  { id: 'ui-ux-design-intern', title: 'UI/UX Design Intern' },
  { id: 'digital-marketing-intern', title: 'Digital Marketing Intern' },
  { id: 'data-science-intern', title: 'Data Science Intern' },
  { id: 'business-dev-intern', title: 'Business Development Intern' },
  { id: 'qa-testing-intern', title: 'QA Testing Intern' },
];

// Experience levels
const experienceLevels = [
  'Entry Level (0-1 years)',
  'Junior (1-3 years)',
  'Mid-level (3-5 years)',
  'Senior (5+ years)',
  'Lead/Manager (8+ years)'
];

const internExperienceLevels = [
  'First Year Student',
  'Second Year Student',
  'Third Year Student',
  'Final Year Student',
  'Recent Graduate',
];

// Countries
const countries = [
  'United States', 'United Kingdom', 'Canada', 'Australia', 
  'India', 'Germany', 'France', 'Japan', 'Singapore', 'UAE',
  'Brazil', 'South Africa', 'Spain', 'Italy', 'Netherlands'
];

// How did you hear about us options
const referralSources = [
  'Job Board', 'LinkedIn', 'Company Website', 
  'Referral', 'Social Media', 'Event/Conference',
  'Search Engine', 'University/College', 'Other'
];

interface ApplicationFormProps {
  type?: 'job' | 'internship';
  positionTitle?: string;
}

const ApplicationForm = ({ type = 'job', positionTitle = '' }: ApplicationFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  // Initialize form with react-hook-form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      location: '',
      position: positionTitle || '',
      experience: '',
      portfolio: '',
      education: '',
      coverLetter: '',
      resume: null,
      country: '',
      hearAbout: '',
      institution: '',
      graduationDate: '',
    },
  });

  // File upload handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && (file.type === 'application/pdf' || file.type === 'application/msword' || 
        file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
      setResumeFile(file);
      form.setValue('resume', file);
    } else {
      toast({
        variant: "destructive",
        title: "Invalid file type",
        description: "Please upload a PDF or Word document (.pdf, .doc, .docx)",
      });
      e.target.value = '';
      setResumeFile(null);
      form.setValue('resume', null);
    }
  };

  // Form submission handler
  const onSubmit = (data: any) => {
    setIsSubmitting(true);
    // In a real application, here you would send the form data to your server
    console.log('Form submission data:', data);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      toast({
        title: type === 'job' ? "Job application submitted!" : "Internship application submitted!",
        description: "We've received your application and will be in touch soon.",
      });
    }, 1500);
  };

  return (
    <>
      {!submitSuccess ? (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-6">
            {type === 'job' ? 'Job Application Form' : 'Internship Application Form'}
          </h3>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div className="space-y-4 md:col-span-2">
                  <h4 className="text-lg font-medium flex items-center border-b pb-2">
                    <User className="mr-2 h-5 w-5 text-tech-blue" />
                    Personal Information
                  </h4>
                </div>
                
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input placeholder="johndoe@example.com" {...field} />
                          <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input placeholder="+1 (234) 567-8901" {...field} />
                          <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <div className="relative">
                            <SelectTrigger>
                              <SelectValue placeholder="Select your country" />
                            </SelectTrigger>
                            <Globe className="absolute right-8 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          </div>
                        </FormControl>
                        <SelectContent>
                          {countries.map((country) => (
                            <SelectItem key={country} value={country}>{country}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City/State *</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input placeholder="New York, NY" {...field} />
                          <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {/* Professional Information */}
                <div className="space-y-4 md:col-span-2 pt-4">
                  <h4 className="text-lg font-medium flex items-center border-b pb-2">
                    {type === 'job' ? (
                      <Briefcase className="mr-2 h-5 w-5 text-tech-blue" />
                    ) : (
                      <School className="mr-2 h-5 w-5 text-tech-blue" />
                    )}
                    {type === 'job' ? 'Professional Information' : 'Academic Information'}
                  </h4>
                </div>
                
                <FormField
                  control={form.control}
                  name="position"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{type === 'job' ? 'Position Applying For *' : 'Internship Position *'}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select position" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {(type === 'job' ? jobPositions : internshipPositions).map((position) => (
                            <SelectItem key={position.id} value={position.title}>
                              {position.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{type === 'job' ? 'Experience Level *' : 'Academic Status *'}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={type === 'job' ? "Select experience level" : "Select academic status"} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {(type === 'job' ? experienceLevels : internExperienceLevels).map((level) => (
                            <SelectItem key={level} value={level}>{level}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {type === 'internship' && (
                  <>
                    <FormField
                      control={form.control}
                      name="institution"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Educational Institution *</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input placeholder="Harvard University" {...field} />
                              <School className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="graduationDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Expected Graduation Date *</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input type="month" {...field} />
                              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}
                
                <FormField
                  control={form.control}
                  name="education"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Highest Education *</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input 
                            placeholder="Bachelor's in Computer Science, Harvard University" 
                            {...field} 
                          />
                          <GraduationCap className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="portfolio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Portfolio / LinkedIn URL</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="https://linkedin.com/in/johndoe" 
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        Optional: Share your portfolio website or LinkedIn profile
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="md:col-span-2">
                  <FormField
                    control={form.control}
                    name="coverLetter"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cover Letter / Introduction *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us why you're interested in this position and what makes you a great fit..." 
                            className="min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="md:col-span-2">
                  <FormField
                    control={form.control}
                    name="resume"
                    render={() => (
                      <FormItem>
                        <FormLabel>Resume / CV *</FormLabel>
                        <FormControl>
                          <div className="flex items-center justify-center w-full">
                            <label
                              htmlFor="resume-upload"
                              className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
                            >
                              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <Upload className="w-8 h-8 mb-2 text-gray-400" />
                                <p className="mb-2 text-sm text-gray-500">
                                  <span className="font-medium">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-xs text-gray-500">PDF or Word Document (.pdf, .doc, .docx)</p>
                              </div>
                              <input 
                                id="resume-upload" 
                                type="file" 
                                className="hidden" 
                                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
                                onChange={handleFileChange}
                              />
                            </label>
                          </div>
                          {resumeFile && (
                            <div className="mt-2 p-2 bg-gray-50 rounded-md flex items-center justify-between">
                              <span className="text-sm truncate">{resumeFile.name}</span>
                              <button
                                type="button"
                                onClick={() => {
                                  setResumeFile(null);
                                  form.setValue('resume', null);
                                }}
                                className="text-red-500 hover:text-red-700"
                              >
                                <XCircle className="h-5 w-5" />
                              </button>
                            </div>
                          )}
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="hearAbout"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>How did you hear about us? *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {referralSources.map((source) => (
                            <SelectItem key={source} value={source}>{source}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="flex justify-end pt-4">
                <Button 
                  type="submit"
                  className="bg-tech-blue hover:bg-tech-darkblue text-white px-8"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-10 text-center">
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Application Submitted!</h3>
            <p className="text-gray-600 mb-8 max-w-md">
              Thank you for your interest in {type === 'job' ? 'joining our team' : 'our internship program'}. We've received your application and will review it shortly.
            </p>
            <div className="border-t border-gray-200 pt-6 w-full max-w-md">
              <h4 className="font-medium text-gray-700 mb-3">What happens next?</h4>
              <ol className="list-decimal text-left pl-6 space-y-2 text-gray-600">
                <li>Our {type === 'job' ? 'hiring' : 'recruitment'} team will review your application</li>
                <li>If your qualifications match our requirements, we'll contact you for an initial interview</li>
                <li>{type === 'job' ? 'You may be asked to complete a technical assessment based on the role' : 'You may be invited for a conversation with the team mentor'}</li>
                <li>Final interviews will be scheduled with the team</li>
              </ol>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ApplicationForm;
