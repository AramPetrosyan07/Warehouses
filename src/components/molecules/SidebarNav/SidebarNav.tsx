import React from "react";
import { SidebarNavItem } from "../../atoms/SidebarNavItem";
import "./SidebarNav.scss";
import type { NavItem } from "../../../types/nav.types";

interface SidebarNavProps {
  items: NavItem[];
  activeItemId?: string;
  className?: string;
}

export const SidebarNav: React.FC<SidebarNavProps> = ({
  items,
  activeItemId,
  className = "",
}) => {
  return (
    <nav className={`sidebar-nav ${className}`}>
      <ul className="nav-list">
        {items.map((item) => (
          <li key={item.id} className="nav-item">
            <SidebarNavItem
              href={item.href}
              icon={item.icon}
              label={item.label}
              isActive={activeItemId === item.id}
              onClick={item.onClick}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
