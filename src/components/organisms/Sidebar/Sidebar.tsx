import React from "react";
import { SidebarLogo } from "../../atoms/SidebarLogo";
import { SidebarNav } from "../../molecules/SidebarNav";
import "./Sidebar.scss";
import type { NavItem } from "../../../types/nav.types";
import { Arrow } from "../../../assets/icons/sidebar/ordinary/Arrow";

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
        {/* <SidebarLogo logoText={logoText} logoIcon={logoIcon} /> */}
        {logoIcon && (
          <SidebarLogo logoIcon={logoIcon} isCollapsed={isCollapsed} />
        )}

        <button className="sidebar-toggle" onClick={onToggleCollapse}>
          {isCollapsed ? <Arrow inverted={true} /> : <Arrow />}
        </button>
      </div>

      <div className="sidebar-content">
        <SidebarNav
          items={navItems}
          activeItemId={activeItemId}
          isCollapsed={isCollapsed}
        />
      </div>
    </aside>
  );
};
