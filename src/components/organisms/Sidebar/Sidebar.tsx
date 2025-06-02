import React from "react";
import { SidebarLogo } from "../../atoms/SidebarLogo";
import { SidebarNav } from "../../molecules/SidebarNav";
import "./Sidebar.scss";
import type { NavItem } from "../../../types/nav.types";

interface SidebarProps {
  navItems: NavItem[];
  activeItemId?: string;
  isCollapsed?: boolean;
  className?: string;
  logoText?: string;
  logoIcon?: React.ReactNode;
  onToggleCollapse?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  navItems,
  activeItemId,
  isCollapsed = false,
  className = "",
  logoText,
  logoIcon,
  onToggleCollapse,
}) => {
  const sidebarClass = `sidebar ${isCollapsed ? "collapsed" : ""} ${className}`;

  return (
    <aside className={sidebarClass}>
      <div className="sidebar-header">
        <SidebarLogo logoText={logoText} logoIcon={logoIcon} />
        {onToggleCollapse && (
          <button
            className="sidebar-toggle"
            onClick={onToggleCollapse}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? "→" : "←"}
          </button>
        )}
      </div>

      <div className="sidebar-content">
        <SidebarNav items={navItems} activeItemId={activeItemId} />
      </div>

      <div className="sidebar-footer">
        {/* Footer content can go here - user profile, logout, etc */}
      </div>
    </aside>
  );
};
