import React from "react";
import "./SidebarNavItem.scss";
import { Text } from "../typography/Text/Text";

interface SidebarNavItemProps {
  href?: string;
  icon?: React.ReactNode;
  activeIcon?: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
  isCollapsed?: boolean;
}

export const SidebarNavItem: React.FC<SidebarNavItemProps> = ({
  href,
  icon,
  label,
  isActive = false,
  onClick,
  activeIcon,
  className = "",
  isCollapsed = false,
}) => {
  const itemClass = `sidebar-nav-item ${isActive ? "active" : ""} ${className}`;

  if (isActive) {
    console.log("isActive", isActive, label);
  }

  const choseIcon = () => {
    return isActive ? activeIcon : icon;
  };

  const content = (
    <>
      <span className={`nav-icon ${isCollapsed ? "nav-icon-collapsed" : ""}`}>
        {choseIcon()}
      </span>
      {!isCollapsed && (
        <>
          {/* <span className={`nav-label ${isActive ? "activeLabel" : ""}`}>
            {label}
          </span> */}
          <Text
            variant="h3"
            customClassName={isActive ? "activeLabel" : "nav-label"}
          >
            {label}
          </Text>
        </>
      )}
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
