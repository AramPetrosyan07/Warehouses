import React from "react";
import "./SidebarLogo.scss";

interface SidebarLogoProps {
  className?: string;
  logoText?: string;
  logoIcon?: React.ReactNode;
  isCollapsed: boolean;
}

export const SidebarLogo: React.FC<SidebarLogoProps> = ({
  className = "",
  logoText = "My App",
  isCollapsed = false,
  logoIcon,
}) => {
  return (
    <div className={`sidebar-logo  ${className}`}>
      {logoIcon && <span className="logo-icon">{logoIcon}</span>}
      {/* <h2 className="logo-text">{logoText}</h2> */}
    </div>
  );
};
