import { useState, useEffect } from "react";
import {
  ALLOWED_EMAIL,
  ALLOWED_SIGNIN_KEY,
  ALLOWED_PASSWORD,
} from "@/config/auth";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CountrySelector from "./CountrySelector";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const menuItems = [
  {
    title: "Services",
    href: "/services",
    dropdown: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "App Development", href: "/services/app-development" },
      { name: "Game Development", href: "/services/game-development" },
      { name: "UI/UX Design", href: "/services/ui-ux-design" },
      { name: "Software Solutions", href: "/services/software-solutions" },
      { name: "IoT Solutions", href: "/services/iot-solutions" },
      { name: "Digital Marketing", href: "/services/digital-marketing" },
    ],
  },
  {
    title: "Industries",
    href: "/industries",
    dropdown: [
      { name: "IT & Software", href: "/industries/it-software" },
      { name: "Retail & E-commerce", href: "/industries/retail-ecommerce" },
      { name: "Finance & Banking", href: "/industries/finance-banking" },
      { name: "Education", href: "/industries/education" },
      { name: "Healthcare", href: "/industries/healthcare" },
      { name: "Manufacturing", href: "/industries/manufacturing" },
    ],
  },
  {
    title: "Case Studies",
    href: "/portfolio",
    dropdown: [
      { name: "E-commerce Platform", href: "/portfolio/ecommerce-platform" },
      { name: "Hospital Management", href: "/portfolio/hospital-management" },
      { name: "Educational App", href: "/portfolio/educational-app" },
      { name: "Smart Home IoT", href: "/portfolio/smart-home-iot" },
    ],
  },
  {
    title: "Tech Insights",
    href: "/trends",
    dropdown: [
      { name: "AI-Powered Solutions", href: "/trends/ai-powered-solutions" },
      { name: "Web3 & Blockchain", href: "/trends/web3-blockchain" },
      { name: "Sustainable Tech", href: "/trends/sustainable-tech" },
      {
        name: "IoT & Smart Infrastructure",
        href: "/trends/iot-smart-infrastructure",
      },
    ],
  },
  { title: "Analytics", href: "/analytics" },
  { title: "About Us", href: "/about" },
  {
    title: "Careers",
    href: "/careers",
    dropdown: [
      { name: "Job Listings", href: "/careers/job-listings" },
      { name: "Internships", href: "/careers/internships" },
    ],
  },
];

const regions = [
  { name: "Global (English)", code: "global", flag: "/flags/global.gif" },
  { name: "India", code: "", flag: "/flags/in.gif" },
  { name: "Nepal", code: "", flag: "/flags/np.gif" },
  { name: "United States", code: "", flag: "/flags/us.gif" },
  { name: "United Kingdom", code: "uk", flag: "/flags/uk.gif" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeRegion, setActiveRegion] = useState(regions[0]);
  const [showSignInButton, setShowSignInButton] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  // Admin routes where Sign In button should appear
  const adminRoutes = ["/admin"];
  const isAdminRoute = adminRoutes.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Auto-login and redirect when accessing with authorized email parameter
  useEffect(() => {
    // Don't show sign in button if not on admin route
    if (!isAdminRoute) {
      setShowSignInButton(false);
      return;
    }

    try {
      const params = new URLSearchParams(window.location.search);
      const from = params.get("from") || params.get("email");
      const allowed = localStorage.getItem(ALLOWED_SIGNIN_KEY);

      // Check if accessed from authorized email via URL param - auto login and redirect
      if (from && from.toLowerCase() === ALLOWED_EMAIL.toLowerCase()) {
        localStorage.setItem(ALLOWED_SIGNIN_KEY, "true");
        // Auto-redirect to QR generator dashboard
        navigate("/qr-generator");
        return;
      }

      // Check if already authorized
      if (allowed === "true") {
        setShowSignInButton(true);
        return;
      }

      // Check if accessed from Gmail
      if (
        document &&
        document.referrer &&
        document.referrer.includes("mail.google.com")
      ) {
        setShowSignInButton(true);
        localStorage.setItem(ALLOWED_SIGNIN_KEY, "true");
        return;
      }

      // Show sign-in button on admin route for users who haven't authenticated
      setShowSignInButton(true);
    } catch (e) {
      // ignore
    }
  }, [isAdminRoute, navigate]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSignInClick = () => {
    setShowSignInModal(true);
    setAuthError("");
  };

  const handleSignIn = () => {
    if (
      signInEmail.toLowerCase() === ALLOWED_EMAIL.toLowerCase() &&
      signInPassword === ALLOWED_PASSWORD
    ) {
      localStorage.setItem(ALLOWED_SIGNIN_KEY, "true");
      setShowSignInModal(false);
      setSignInEmail("");
      setSignInPassword("");
      setAuthError("");
      // Navigate to admin dashboard or QR generator
      navigate("/qr-generator");
    } else {
      setAuthError("Invalid email or password");
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src="/logosofixs.png"
              alt="Sofixs Logo"
              className="h-11 w-auto mr-4"
            />
            {/* <span className="text-xl font-bold text-gray-800">Sofixs</span> */}
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div key={item.title} className="relative group">
                {item.dropdown ? (
                  <div className="relative">
                    <button className="px-3 py-2 text-gray-700 hover:text-tech-blue flex items-center transition-colors">
                      {item.title}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="bg-white rounded-lg shadow-lg py-2 min-w-[200px]">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-tech-lightblue hover:text-tech-blue text-sm transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="px-3 py-2 text-gray-700 hover:text-tech-blue transition-colors"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}

            <Link to="/contact">
              <Button
                variant="default"
                size="sm"
                className="ml-4 bg-tech-orange text-white hover:bg-opacity-90 transition-colors"
              >
                Contact Us
              </Button>
            </Link>

            {/* Sign In button only shown on admin routes */}
            {showSignInButton && (
              <button
                onClick={handleSignInClick}
                className="ml-3 bg-teal-600 text-white px-3 py-1.5 rounded-md hover:bg-teal-700 transition-colors text-sm"
              >
                Sign In
              </button>
            )}
          </div>

          <CountrySelector />

          <button
            className="lg:hidden text-gray-700 hover:text-tech-blue"
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </div>

      <div
        className={`lg:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col space-y-3">
            {menuItems.map((item) => (
              <div key={item.title} className="py-2 border-b border-gray-100">
                {item.dropdown ? (
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <span className="text-gray-700">{item.title}</span>
                      <ChevronDown className="h-4 w-4 text-gray-500 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="mt-2 ml-4 space-y-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block py-1 text-gray-600 hover:text-tech-blue text-sm"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    to={item.href}
                    className="block text-gray-700 hover:text-tech-blue"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}

            <div className="py-3 space-y-2">
              <Link to="/contact">
                <Button
                  variant="default"
                  className="w-full bg-tech-orange text-white hover:bg-opacity-90"
                >
                  Contact Us
                </Button>
              </Link>

              {showSignInButton && (
                <button
                  onClick={handleSignInClick}
                  className="w-full bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Sign In Modal */}
      <Dialog open={showSignInModal} onOpenChange={setShowSignInModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Admin Sign In</DialogTitle>
            <DialogDescription>
              Enter your admin credentials to access the dashboard.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="sofixscompany@gmail.com"
                value={signInEmail}
                onChange={(e) => setSignInEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSignIn()}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter password"
                value={signInPassword}
                onChange={(e) => setSignInPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSignIn()}
              />
            </div>
            {authError && <p className="text-sm text-red-600">{authError}</p>}
            <div className="flex gap-3 pt-2">
              <Button
                variant="outline"
                onClick={() => {
                  setShowSignInModal(false);
                  setSignInEmail("");
                  setSignInPassword("");
                  setAuthError("");
                }}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={handleSignIn}
                className="flex-1 bg-teal-600 hover:bg-teal-700"
              >
                Sign In
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Navbar;
