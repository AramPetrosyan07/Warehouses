import React from "react";
import "./SidebarNavItem.scss";

interface SidebarNavItemProps {
  href?: string;
  icon?: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export const SidebarNavItem: React.FC<SidebarNavItemProps> = ({
  href,
  icon,
  label,
  isActive = false,
  onClick,
  className = "",
}) => {
  const itemClass = `sidebar-nav-item ${isActive ? "active" : ""} ${className}`;

  const content = (
    <>
      {icon && <span className="nav-icon">{icon}</span>}
      <span className="nav-label">{label}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={itemClass} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button className={itemClass} onClick={onClick}>
      {content}
    </button>
  );
};
