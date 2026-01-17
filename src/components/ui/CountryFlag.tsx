
import React from 'react';

interface CountryFlagProps {
  country: 'uk' | 'us' | 'np' | 'in';
  width?: number;
  height?: number;
  className?: string;
}

const CountryFlag: React.FC<CountryFlagProps> = ({ 
  country, 
  width = 24, 
  height = 16, 
  className = '' 
}) => {
  const flagPath = `/flags/${country}.gif`;

  return (
    <img 
      src={flagPath} 
      alt={`${country.toUpperCase()} flag`} 
      width={width} 
      height={height} 
      className={`inline-block ${className}`}
      style={{ objectFit: 'cover' }}
    />
  );
};

export default CountryFlag;
