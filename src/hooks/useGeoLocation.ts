
import { useState, useEffect } from 'react';

interface GeoLocation {
  country_code: string;
  country_name: string;
}

export const useGeoLocation = () => {
  const [location, setLocation] = useState<GeoLocation | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok) throw new Error('Failed to fetch location');
        const data = await response.json();
        setLocation({
          country_code: data.country_code?.toLowerCase() || 'global',
          country_name: data.country_name || 'Global'
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to detect location');
        setLocation({ country_code: 'global', country_name: 'Global (English)' });
      } finally {
        setLoading(false);
      }
    };

    fetchLocation();
  }, []);

  return { location, loading, error };
};
