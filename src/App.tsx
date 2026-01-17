import React, { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import TrendsIndex from "./pages/trends/Index";
import AiPoweredSolutions from "./pages/trends/AiPoweredSolutions";
import PortfolioIndex from "./pages/portfolio/Index";
import EcommercePlatform from "./pages/portfolio/EcommercePlatform";
import HospitalManagement from "./pages/portfolio/HospitalManagement";
import EducationalApp from "./pages/portfolio/EducationalApp";
import ContactUs from "./pages/ContactUs";
import ServicesIndex from "./pages/services/Index";
import WebDevelopment from "./pages/services/WebDevelopment";
import IndustriesIndex from "./pages/industries/Index";
import ITSoftware from "./pages/industries/ITSoftware";
import CareersIndex from "./pages/careers/Index";
import JobListings from "./pages/careers/JobListings";
import Internships from "./pages/careers/Internships";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import CookiePolicy from "./pages/legal/CookiePolicy";
import AnalyticsDashboard from "./pages/AnalyticsDashboard";
import FAQ from "./pages/legal/FAQ";
import QrGenerator from "./components/tool/QrGenerator";
import Verify from "./pages/verify/Verify";
import VerifyFromLegacy from "./pages/verify/VerifyFromLegacy";

// Service Pages (reuse WebDevelopment component as placeholders)
const AppDevelopment = () => <WebDevelopment />;
const GameDevelopment = () => <WebDevelopment />;
const UiUxDesign = () => <WebDevelopment />;
const SoftwareSolutions = () => <WebDevelopment />;
const IoTSolutions = () => <WebDevelopment />;
const DigitalMarketing = () => <WebDevelopment />;

// Industry Pages (reuse ITSoftware component as placeholders)
const RetailEcommerce = () => <ITSoftware />;
const FinanceBanking = () => <ITSoftware />;
const Education = () => <ITSoftware />;
const Healthcare = () => <ITSoftware />;
const Manufacturing = () => <ITSoftware />;

// Trends / Portfolio Pages
const SmartHomeIoT = () => <EducationalApp />;
const Web3Blockchain = () => <AiPoweredSolutions />;
const SustainableTech = () => <AiPoweredSolutions />;
const IoTSmartInfrastructure = () => <AiPoweredSolutions />;

const queryClient = new QueryClient();

const GOOGLE_COLORS = [
  "#4285F4", // Blue
  "#DB4437", // Red
  "#F4B400", // Yellow
  "#0F9D58", // Green
];

const GOOGLE_DARK_COLORS = [
  "#2a56c6", // Dark Blue
  "#a6352b", // Dark Red
  "#b38a00", // Dark Yellow
  "#0a6d3f", // Dark Green
];

const DOT_COUNT = 8;
const RADIUS = 30;

const Loader: React.FC = () => {
  const text = "Sofixs";
  const animationDuration = 4500; // 4.5 seconds

  const [activeDotCount, setActiveDotCount] = useState(1);
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setActiveDotCount((c) => (c >= 6 ? 1 : c + 1));
    }, 500);

    const colorInterval = setInterval(() => {
      setColorIndex((idx) => (idx + 1) % GOOGLE_DARK_COLORS.length);
    }, animationDuration / GOOGLE_DARK_COLORS.length);

    return () => {
      clearInterval(dotsInterval);
      clearInterval(colorInterval);
    };
  }, []);

  const styles = {
    wrapper: {
      position: "fixed" as const,
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "#fff",
      zIndex: 9999,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column" as const,
      userSelect: "none" as const,
    },
    textContainer: {
      display: "flex",
      gap: "0.1em",
      fontWeight: "bold",
      fontSize: "48px",
      fontFamily: "monospace",
    },
    dotsRing: {
      position: "relative" as const,
      width: `${RADIUS * 2 + 20}px`,
      height: `${RADIUS * 2 + 20}px`,
      marginTop: "12px",
      animation: "rotateRing 1.5s linear infinite",
    },
    dot: {
      position: "absolute" as const,
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      fontWeight: "bold",
      userSelect: "none" as const,
      cursor: "default" as const,
      transition: "color 0.3s ease",
    },
  };

  const dots = [];
  for (let i = 0; i < activeDotCount; i++) {
    const angle = (2 * Math.PI * i) / DOT_COUNT;
    const x = RADIUS + RADIUS * Math.cos(angle);
    const y = RADIUS + RADIUS * Math.sin(angle);
    const dotColor =
      GOOGLE_DARK_COLORS[(colorIndex + i) % GOOGLE_DARK_COLORS.length];

    dots.push(
      <span
        key={i}
        style={{
          ...styles.dot,
          left: x,
          top: y,
          backgroundColor: dotColor,
          boxShadow: `0 0 4px ${dotColor}`,
        }}
      />
    );
  }

  return (
    <>
      <style>
        {`
          @keyframes colorCycle {
            0% { color: ${GOOGLE_COLORS[0]}; }
            25% { color: ${GOOGLE_COLORS[1]}; }
            50% { color: ${GOOGLE_COLORS[2]}; }
            75% { color: ${GOOGLE_COLORS[3]}; }
            100% { color: ${GOOGLE_COLORS[0]}; }
          }

          @keyframes rotateRing {
            100% { transform: rotate(1turn); }
          }
        `}
      </style>

      <div style={styles.wrapper}>
        <div style={styles.textContainer}>
          {text.split("").map((letter, i) => (
            <span
              key={i}
              style={{
                animation: `colorCycle ${animationDuration}ms linear infinite`,
                animationDelay: `${(animationDuration / text.length) * i}ms`,
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        <div style={styles.dotsRing}>{dots}</div>
      </div>
    </>
  );
};

/** Wrapper to handle route changes and show loader */
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Show loader for 4.5 seconds on route change
    const timer = setTimeout(() => setLoading(false), 4500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return loading ? <Loader /> : <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />

            <Route path="/services" element={<ServicesIndex />} />
            <Route
              path="/services/web-development"
              element={<WebDevelopment />}
            />
            <Route
              path="/services/app-development"
              element={<AppDevelopment />}
            />
            <Route
              path="/services/game-development"
              element={<GameDevelopment />}
            />
            <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
            <Route
              path="/services/software-solutions"
              element={<SoftwareSolutions />}
            />
            <Route path="/services/iot-solutions" element={<IoTSolutions />} />
            <Route
              path="/services/digital-marketing"
              element={<DigitalMarketing />}
            />

            <Route path="/industries" element={<IndustriesIndex />} />
            <Route path="/industries/it-software" element={<ITSoftware />} />
            <Route
              path="/industries/retail-ecommerce"
              element={<RetailEcommerce />}
            />
            <Route
              path="/industries/finance-banking"
              element={<FinanceBanking />}
            />
            <Route path="/industries/education" element={<Education />} />
            <Route path="/industries/healthcare" element={<Healthcare />} />
            <Route
              path="/industries/manufacturing"
              element={<Manufacturing />}
            />

            <Route path="/trends" element={<TrendsIndex />} />
            <Route
              path="/trends/ai-powered-solutions"
              element={<AiPoweredSolutions />}
            />
            <Route
              path="/trends/web3-blockchain"
              element={<Web3Blockchain />}
            />
            <Route
              path="/trends/sustainable-tech"
              element={<SustainableTech />}
            />
            <Route
              path="/trends/iot-smart-infrastructure"
              element={<IoTSmartInfrastructure />}
            />

            <Route path="/portfolio" element={<PortfolioIndex />} />
            <Route
              path="/portfolio/ecommerce-platform"
              element={<EcommercePlatform />}
            />
            <Route
              path="/portfolio/hospital-management"
              element={<HospitalManagement />}
            />
            <Route
              path="/portfolio/educational-app"
              element={<EducationalApp />}
            />
            <Route
              path="/portfolio/smart-home-iot"
              element={<SmartHomeIoT />}
            />

            <Route path="/careers" element={<CareersIndex />} />
            <Route path="/careers/job-listings" element={<JobListings />} />
            <Route path="/careers/internships" element={<Internships />} />

            <Route path="/contact" element={<ContactUs />} />

            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/faq" element={<FAQ />} />

            <Route path="/analytics" element={<AnalyticsDashboard />} />
            <Route path="/admin" element={<AnalyticsDashboard />} />
            <Route path="/qr-generator" element={<QrGenerator />} />
            <Route path="/sofixsintern20260111/:time/:id" element={<VerifyFromLegacy />} />
            <Route path="/verify" element={<Verify />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageWrapper>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
