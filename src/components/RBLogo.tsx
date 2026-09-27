import React, { SVGProps } from 'react';

interface LogoProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const BrandLogo: React.FC<LogoProps> = ({ 
  size = '100%', 
  color = 'currentColor', 
  className = 'w-7 h-7',
  ...props 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <title>Brand Logo</title>
      
      {/* Left Shape */}
      <path
        d="M25,20 C45,20 50,35 28,45 C48,55 50,75 42,80 C32,80 25,65 32,55 C20,50 18,35 25,20 Z"
        fill={color}
      />

      {/* Right Shape */}
      <path
        d="M60,20 C75,20 85,35 55,45 C80,50 85,75 58,80 C68,70 70,55 58,45 C65,40 68,25 60,20 Z"
        fill={color}
      />
    </svg>
  );
};

export default BrandLogo;
