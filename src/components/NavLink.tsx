import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children, mobile }) => {
  const baseClasses = "text-gray-300 hover:text-white transition-colors duration-200";
  const mobileClasses = mobile
    ? "block px-3 py-2 rounded-md text-base font-medium"
    : "px-3 py-2 rounded-md text-sm font-medium";

  return (
    <a href={href} className={`${baseClasses} ${mobileClasses}`}>
      {children}
    </a>
  );
};