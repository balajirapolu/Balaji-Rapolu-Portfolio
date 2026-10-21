'use client';

import React from 'react';
import Image from 'next/image';

interface RBLogoProps {
  className?: string;
  size?: number;
  href?: string;
  onClick?: () => void;
}

export const RBLogo: React.FC<RBLogoProps> = ({
  className = '',
  size = 36,
  href = '#',
  onClick,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick();
    }
    if (href === '#') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      aria-label="Balaji Rapolu - Home"
      title="Balaji Rapolu — Back to top"
      className={`relative inline-flex items-center justify-center rounded-xl p-1 overflow-hidden transition-all duration-300 group cursor-pointer ${className}`}
    >
      <div className="relative flex items-center justify-center w-full h-full rounded-lg bg-[#0A0C0D] border border-[#22262B] p-1 transition-all duration-300 group-hover:border-[#0080FF] group-hover:shadow-[0_0_15px_rgba(0,128,255,0.4)] group-hover:scale-105">
        <Image
          src="/images/rb-logo.png"
          alt="RB Monogram Logo"
          width={size}
          height={size}
          priority
          className="object-contain w-auto h-full max-h-full transition-transform duration-300 group-hover:scale-110 filter brightness-110"
        />
      </div>
    </a>
  );
};

export const BrandLogo = RBLogo;

export default RBLogo;
