import React from "react";
import { SidebarNavItem } from "../../atoms/SidebarNavItem";
import "./SidebarNav.scss";
import type { NavItem } from "../../../types/nav.types";

interface SidebarNavProps {
  items: NavItem[];
  activeItemId?: string;
  className?: string;
  isCollapsed?: boolean;
}

export const SidebarNav: React.FC<SidebarNavProps> = ({
  items,
  activeItemId,
  className = "",
  isCollapsed = false,
}) => {
  console.log("activeItemId", activeItemId);

  return (
    <nav className={`sidebar-nav ${className}`}>
      <ul className="nav-list">
        {items.map((item: NavItem) => (
          <li key={item.id} className="nav-item">
            <SidebarNavItem
              href={item.href}
              icon={item.icon}
              activeIcon={item.active}
              label={item.label}
              isActive={activeItemId === item.id}
              onClick={item.onClick}
              isCollapsed={isCollapsed}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
