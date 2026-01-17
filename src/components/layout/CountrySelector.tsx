'use client';

import { useState, useEffect, useRef } from 'react';
import { useGeoLocation } from '@/hooks/useGeoLocation';
import CountryFlag from '@/components/ui/CountryFlag';
import { ChevronDown } from 'lucide-react';

const regions = [
  { name: 'Global', code: 'global', flag: '/flags/global.gif' },
  { name: 'India', code: 'in', flag: '/flags/in.gif' },
  { name: 'Nepal', code: 'np', flag: '/flags/np.gif' },
  { name: 'United States', code: 'us', flag: '/flags/us.gif' },
  { name: 'United Kingdom', code: 'uk', flag: '/flags/uk.gif' },
];
const CountrySelector = () => {
  const { location } = useGeoLocation();
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (location?.country_code) {
      const foundRegion = regions.find(r => r.code.toLowerCase() === location.country_code.toLowerCase());
      if (foundRegion) {
        setSelectedRegion(foundRegion);
      }
    }
  }, [location]);

  const handleRegionSelect = (region: typeof regions[0]) => {
    setSelectedRegion(region);
    setIsOpen(false);
  };

  // Handle hover delay
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsOpen(true), 300); // 300ms delay
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsOpen(false), 400); // 400ms delay
  };

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Always show Selected Country in Navbar */}
      <button className="flex items-center gap-2 text-gray-700 hover:text-tech-blue px-4 py-2 rounded-md transition-colors">
        <CountryFlag 
          country={selectedRegion.code as any}
          className="w-8 h-auto"
          width={32}
          height={20}
        />
        <span className="text-base font-semibold">{selectedRegion.name}</span>
        <ChevronDown className="h-5 w-5 transition-transform duration-200" />
      </button>

      {/* Dropdown on hover with delay */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md border z-50">
          {regions.map((region) => (
            <div
              key={region.code}
              onClick={() => handleRegionSelect(region)}
              className={`flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer ${
                selectedRegion.code === region.code ? 'bg-gray-50 text-tech-blue' : ''
              }`}
            >
              <CountryFlag 
                country={region.code as any}
                className="w-7 h-auto"
                width={28}
                height={18}
              />
              {region.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountrySelector;
